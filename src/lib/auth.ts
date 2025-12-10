import { supabase } from './supabase';

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  userType: 'particular' | 'profissional';
  knowledgeLevel?: string;
  wineInterests?: string[];
  sweetness?: number;
  body?: number;
  tannins?: number;
  acidity?: number;
  oakPreference?: 'sim' | 'nao' | 'indiferente';
  favoriteWineTypes?: string[];
  preferredRegions?: string[];
  preferredGrapes?: string[];
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

export async function registerUser(data: RegisterData) {
  try {
    // 1. Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
        emailRedirectTo: undefined, // Evita redirect automático
      }
    });

    if (authError) {
      if (authError.message.includes('Failed to fetch') || authError.name === 'AuthRetryableFetchError') {
        throw new Error('Erro de conexão. Verifique sua conexão com a internet.');
      }
      throw authError;
    }
    
    if (!authData.user) throw new Error('Erro ao criar usuário');

    // 2. Criar perfil completo do usuário com TODOS os campos
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert({
        user_id: authData.user.id,
        email: data.email,
        
        // Perfil Básico
        first_name: data.firstName,
        last_name: data.lastName,
        birth_date: data.birthDate,
        country: data.country,
        user_type: data.userType,
        
        // Preferências Gerais
        knowledge_level: data.knowledgeLevel || null,
        wine_interests: data.wineInterests || [],
        
        // Perfil de Sabor
        sweetness: data.sweetness || 50,
        body: data.body || 50,
        tannins: data.tannins || 50,
        acidity: data.acidity || 50,
        oak_preference: data.oakPreference || 'indiferente',
        
        // Tipos e Origens
        favorite_wine_types: data.favoriteWineTypes || [],
        preferred_regions: data.preferredRegions || [],
        preferred_grapes: data.preferredGrapes || [],
        
        // Consentimentos
        accept_terms: data.acceptTerms,
        accept_marketing: data.acceptMarketing,
      });

    if (profileError) {
      console.error('Erro ao criar perfil:', profileError);
      throw new Error(`Erro ao salvar perfil: ${profileError.message}`);
    }

    return { success: true, user: authData.user };
  } catch (error: any) {
    console.error('Erro no registro:', error);
    return { 
      success: false, 
      error: error.message || 'Erro ao criar conta' 
    };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes('Failed to fetch') || error.name === 'AuthRetryableFetchError') {
        throw new Error('Erro de conexão com o servidor. Verifique sua conexão com a internet.');
      }
      throw error;
    }

    // Buscar perfil do usuário
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', data.user.id)
      .single();

    if (profileError) throw profileError;

    return { 
      success: true, 
      user: data.user,
      profile 
    };
  } catch (error: any) {
    console.error('Erro no login:', error);
    return { 
      success: false, 
      error: error.message || 'Erro ao fazer login' 
    };
  }
}

export async function logoutUser() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Erro no logout:', error);
    return { 
      success: false, 
      error: error.message || 'Erro ao fazer logout' 
    };
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) throw error;
    if (!user) return { success: false, user: null };

    // Buscar perfil completo
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (profileError) throw profileError;

    return { 
      success: true, 
      user,
      profile 
    };
  } catch (error: any) {
    console.error('Erro ao buscar usuário:', error);
    return { 
      success: false, 
      user: null,
      error: error.message 
    };
  }
}

export async function getUserPreferences(userId: string) {
  try {
    // Buscar perfil completo com todas as preferências
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (profileError && profileError.code !== 'PGRST116') {
      throw profileError;
    }

    return {
      success: true,
      preferences: profile || null,
    };
  } catch (error: any) {
    console.error('Erro ao buscar preferências:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

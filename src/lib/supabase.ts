import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export type UserProfile = {
  id: string;
  email: string;
  name: string;
  country: string;
  user_type: 'particular' | 'profissional';
  created_at: string;
  updated_at: string;
};

export type WineEvaluation = {
  id: string;
  user_id: string;
  wine_name: string;
  wine_year?: number;
  rating: number;
  price_paid?: number;
  purchase_location?: string;
  notes?: string;
  created_at: string;
};

export type UserPreferences = {
  id: string;
  user_id: string;
  preferred_wine_types: string[];
  preferred_countries: string[];
  price_range_min?: number;
  price_range_max?: number;
  favorite_grapes: string[];
  created_at: string;
  updated_at: string;
};

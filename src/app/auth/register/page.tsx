'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Mail, Lock, Eye, EyeOff, User, Globe, Loader2, Calendar, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import { registerUser } from '@/lib/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    // Passo 1: Dados de acesso
    email: '',
    password: '',
    confirmPassword: '',
    
    // Passo 2: Dados pessoais obrigatórios
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    userType: '' as 'particular' | 'profissional' | '',
    
    // Passo 3: Preferências opcionais
    knowledgeLevel: '',
    wineInterests: [] as string[],
    
    // Passo 4: Preferências detalhadas de sabor
    sweetness: 50,
    body: 50,
    tannins: 50,
    acidity: 50,
    oakPreference: 'indiferente' as 'sim' | 'nao' | 'indiferente',
    
    // Tipos de vinho favoritos
    favoriteWineTypes: [] as string[],
    
    // Regiões preferidas
    preferredRegions: [] as string[],
    
    // Castas preferidas
    preferredGrapes: [] as string[],
    
    // Consentimentos
    acceptTerms: false,
    acceptMarketing: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Palavra-passe é obrigatória';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo de 8 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Deve conter letras maiúsculas, minúsculas, números e símbolos';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As palavras-passe não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) {
      newErrors.firstName = 'Nome próprio é obrigatório';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Apelido é obrigatório';
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'Data de nascimento é obrigatória';
    } else {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        if (age - 1 < 18) {
          newErrors.birthDate = 'Deve ter pelo menos 18 anos';
        }
      } else if (age < 18) {
        newErrors.birthDate = 'Deve ter pelo menos 18 anos';
      }
    }

    if (!formData.country) {
      newErrors.country = 'País é obrigatório';
    }

    if (!formData.userType) {
      newErrors.userType = 'Selecione o tipo de conta';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Deve aceitar os Termos e Condições';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleWineInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      wineInterests: prev.wineInterests.includes(interest)
        ? prev.wineInterests.filter(i => i !== interest)
        : [...prev.wineInterests, interest]
    }));
  };

  const toggleFavoriteWineType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      favoriteWineTypes: prev.favoriteWineTypes.includes(type)
        ? prev.favoriteWineTypes.filter(t => t !== type)
        : [...prev.favoriteWineTypes, type]
    }));
  };

  const togglePreferredRegion = (region: string) => {
    setFormData(prev => ({
      ...prev,
      preferredRegions: prev.preferredRegions.includes(region)
        ? prev.preferredRegions.filter(r => r !== region)
        : [...prev.preferredRegions, region]
    }));
  };

  const togglePreferredGrape = (grape: string) => {
    setFormData(prev => ({
      ...prev,
      preferredGrapes: prev.preferredGrapes.includes(grape)
        ? prev.preferredGrapes.filter(g => g !== grape)
        : [...prev.preferredGrapes, grape]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrors({});

    const result = await registerUser(formData);

    if (result.success) {
      router.push(`/dashboard/${formData.userType}`);
    } else {
      setErrors({ general: result.error || 'Erro ao criar conta' });
      setStep(1);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/939ff8f2-2f52-489c-ae0a-e800726463f7.png" 
              alt="MyWine Logo" 
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <h1 className="text-4xl font-bold text-white">MyWine</h1>
          </div>
          <p className="text-gray-400">Crie sua conta</p>
        </div>

        {/* Indicador de Passos */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-12 h-1 rounded-full transition-all ${step >= 1 ? 'bg-[#800020]' : 'bg-white/10'}`} />
          <div className={`w-12 h-1 rounded-full transition-all ${step >= 2 ? 'bg-[#800020]' : 'bg-white/10'}`} />
          <div className={`w-12 h-1 rounded-full transition-all ${step >= 3 ? 'bg-[#800020]' : 'bg-white/10'}`} />
          <div className={`w-12 h-1 rounded-full transition-all ${step >= 4 ? 'bg-[#800020]' : 'bg-white/10'}`} />
        </div>

        {/* Formulário de Cadastro */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
          {errors.general && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PASSO 1: Dados de Acesso */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold text-white mb-4">Dados de Acesso</h2>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Endereço de Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Palavra-passe *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-11 pr-12 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                  <p className="mt-1 text-xs text-gray-500">
                    Mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e símbolos
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Palavra-passe *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-11 pr-12 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Continuar
                </button>
              </>
            )}

            {/* PASSO 2: Perfil Básico */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-bold text-white mb-4">Perfil Básico</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Próprio *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                        placeholder="João"
                        disabled={loading}
                      />
                    </div>
                    {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Apelido *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                      placeholder="Silva"
                      disabled={loading}
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Data de Nascimento * <span className="text-xs text-gray-500">(Confirmação de maioridade legal)</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                      disabled={loading}
                    />
                  </div>
                  {errors.birthDate && <p className="mt-1 text-sm text-red-400">{errors.birthDate}</p>}
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                    País/Região de Residência *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all appearance-none"
                      disabled={loading}
                    >
                      <option value="">Selecione seu país</option>
                      <option value="PT">Portugal</option>
                      <option value="BR">Brasil</option>
                      <option value="ES">Espanha</option>
                      <option value="FR">França</option>
                      <option value="IT">Itália</option>
                      <option value="US">Estados Unidos</option>
                      <option value="AR">Argentina</option>
                      <option value="CL">Chile</option>
                      <option value="OTHER">Outro</option>
                    </select>
                  </div>
                  {errors.country && <p className="mt-1 text-sm text-red-400">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Tipo de Conta *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'particular' })}
                      disabled={loading}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.userType === 'particular'
                          ? 'border-[#800020] bg-[#800020]/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <User className="w-8 h-8 mx-auto mb-2 text-[#A0153E]" />
                      <p className="text-white font-semibold">Particular</p>
                      <p className="text-xs text-gray-400 mt-1">Entusiasta</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'profissional' })}
                      disabled={loading}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.userType === 'profissional'
                          ? 'border-[#800020] bg-[#800020]/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Globe className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                      <p className="text-white font-semibold">Profissional</p>
                      <p className="text-xs text-gray-400 mt-1">Negócios</p>
                    </button>
                  </div>
                  {errors.userType && <p className="mt-2 text-sm text-red-400">{errors.userType}</p>}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        className="w-5 h-5 bg-[#0A0A0A] border-2 border-white/20 rounded checked:bg-[#800020] checked:border-[#800020] focus:ring-2 focus:ring-[#800020] transition-all"
                      />
                      <CheckSquare className={`absolute w-5 h-5 pointer-events-none transition-opacity ${formData.acceptTerms ? 'opacity-100 text-white' : 'opacity-0'}`} />
                    </div>
                    <span className="text-sm text-gray-300">
                      Li e aceito os <Link href="/termos" className="text-[#A0153E] hover:underline">Termos e Condições</Link> e a <Link href="/privacidade" className="text-[#A0153E] hover:underline">Política de Privacidade</Link> *
                    </span>
                  </label>
                  {errors.acceptTerms && <p className="text-sm text-red-400 ml-8">{errors.acceptTerms}</p>}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.acceptMarketing}
                        onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })}
                        className="w-5 h-5 bg-[#0A0A0A] border-2 border-white/20 rounded checked:bg-[#800020] checked:border-[#800020] focus:ring-2 focus:ring-[#800020] transition-all"
                      />
                      <CheckSquare className={`absolute w-5 h-5 pointer-events-none transition-opacity ${formData.acceptMarketing ? 'opacity-100 text-white' : 'opacity-0'}`} />
                    </div>
                    <span className="text-sm text-gray-300">
                      Desejo receber novidades, ofertas e recomendações personalizadas por email (Opcional)
                    </span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    disabled={loading}
                    className="flex-1 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all disabled:opacity-50"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}

            {/* PASSO 3: Preferências Gerais */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-bold text-white mb-4">Preferências de Vinho (Opcional)</h2>
                <p className="text-sm text-gray-400 mb-6">Ajude-nos a recomendar vinhos perfeitos para você</p>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Nível de Conhecimento
                  </label>
                  <select
                    value={formData.knowledgeLevel}
                    onChange={(e) => setFormData({ ...formData, knowledgeLevel: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="apreciador">Apreciador</option>
                    <option value="conhecedor">Conhecedor</option>
                    <option value="colecionador">Colecionador</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Interesses (Selecione todos que se aplicam)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Tintos', 'Brancos', 'Rosés', 'Espumantes', 'Porto/Madeira', 'Sobremesa'].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleWineInterest(interest)}
                        className={`p-3 rounded-lg border-2 transition-all text-sm font-semibold ${
                          formData.wineInterests.includes(interest)
                            ? 'border-[#800020] bg-[#800020]/10 text-white'
                            : 'border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="flex-1 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1 py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}

            {/* PASSO 4: Preferências Detalhadas */}
            {step === 4 && (
              <>
                <h2 className="text-xl font-bold text-white mb-4">Perfil de Sabor (Opcional)</h2>
                <p className="text-sm text-gray-400 mb-6">Personalize ainda mais suas recomendações</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Doçura: <span className="text-[#A0153E]">{formData.sweetness < 25 ? 'Seco' : formData.sweetness < 50 ? 'Semi-seco' : formData.sweetness < 75 ? 'Meio-doce' : 'Doce'}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.sweetness}
                      onChange={(e) => setFormData({ ...formData, sweetness: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#800020]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Corpo: <span className="text-[#A0153E]">{formData.body < 33 ? 'Leve' : formData.body < 66 ? 'Médio' : 'Encorpado'}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.body}
                      onChange={(e) => setFormData({ ...formData, body: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#800020]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Taninos: <span className="text-[#A0153E]">{formData.tannins < 33 ? 'Baixo' : formData.tannins < 66 ? 'Médio' : 'Alto'}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.tannins}
                      onChange={(e) => setFormData({ ...formData, tannins: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#800020]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Acidez: <span className="text-[#A0153E]">{formData.acidity < 33 ? 'Baixa' : formData.acidity < 66 ? 'Média' : 'Alta'}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.acidity}
                      onChange={(e) => setFormData({ ...formData, acidity: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#800020]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Preferência por Madeira (Carvalho)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'sim', label: 'Amante' },
                        { value: 'indiferente', label: 'Indiferente' },
                        { value: 'nao', label: 'Avesso' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, oakPreference: option.value as any })}
                          className={`p-3 rounded-lg border-2 transition-all text-sm font-semibold ${
                            formData.oakPreference === option.value
                              ? 'border-[#800020] bg-[#800020]/10 text-white'
                              : 'border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Tipos de Vinho Favoritos
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Tinto', 'Branco', 'Rosé', 'Espumante', 'Porto', 'Madeira', 'Sobremesa'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleFavoriteWineType(type)}
                          className={`p-2 rounded-lg border transition-all text-xs font-semibold ${
                            formData.favoriteWineTypes.includes(type)
                              ? 'border-[#800020] bg-[#800020]/10 text-white'
                              : 'border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Regiões Preferidas
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Douro', 'Alentejo', 'Dão', 'Bairrada', 'Vinho Verde', 'Bordeaux', 'Toscana', 'Napa Valley'].map((region) => (
                        <button
                          key={region}
                          type="button"
                          onClick={() => togglePreferredRegion(region)}
                          className={`p-2 rounded-lg border transition-all text-xs font-semibold ${
                            formData.preferredRegions.includes(region)
                              ? 'border-[#800020] bg-[#800020]/10 text-white'
                              : 'border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {region}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Castas Preferidas
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Touriga Nacional', 'Aragonez', 'Alvarinho', 'Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Syrah', 'Merlot'].map((grape) => (
                        <button
                          key={grape}
                          type="button"
                          onClick={() => togglePreferredGrape(grape)}
                          className={`p-2 rounded-lg border transition-all text-xs font-semibold ${
                            formData.preferredGrapes.includes(grape)
                              ? 'border-[#800020] bg-[#800020]/10 text-white'
                              : 'border-white/10 text-gray-400 hover:border-white/20'
                          }`}
                        >
                          {grape}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    disabled={loading}
                    className="flex-1 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-all disabled:opacity-50"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Criando...
                      </>
                    ) : (
                      'Criar Conta'
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Link para Login */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Já tem uma conta?{' '}
              <Link href="/auth/login" className="text-[#A0153E] hover:text-[#800020] font-semibold transition-colors">
                Entrar
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2024 MyWine. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

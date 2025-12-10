'use client';

import { Wine, Users, Sparkles, Shield, TrendingUp, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleUserTypeSelection = (type: 'particular' | 'profissional') => {
    router.push(`/dashboard/${type}`);
  };

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#800020] via-[#6B0017] to-[#4A0011]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/939ff8f2-2f52-489c-ae0a-e800726463f7.png" 
              alt="MyWine Logo" 
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-bold text-white">MyWine</h1>
          </div>
          <button 
            onClick={handleLogin}
            className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
          >
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            A Experiência Definitiva em Vinhos
          </h2>
          <p className="text-xl text-[#E8C4C4] mb-12">
            Scanner inteligente, avaliações credíveis, gestão profissional e muito mais.
            Escolha sua experiência.
          </p>

          {/* User Type Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Particular Card */}
            <div 
              onClick={() => handleUserTypeSelection('particular')}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 duration-300"
            >
              <div className="bg-gradient-to-br from-[#A0153E] to-[#800020] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Particular</h3>
              <p className="text-[#E8C4C4] mb-6">
                Para entusiastas e amantes de vinho
              </p>
              <ul className="text-left space-y-3 text-[#E8C4C4]">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A5A5]" />
                  <span>Scanner avançado de rótulos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A5A5]" />
                  <span>Minha Garrafeira pessoal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A5A5]" />
                  <span>Alertas de preços e promoções</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#D4A5A5]" />
                  <span>Recomendações personalizadas com IA</span>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg font-semibold hover:shadow-2xl transition-all">
                Começar como Particular
              </button>
            </div>

            {/* Profissional Card */}
            <div 
              onClick={() => handleUserTypeSelection('profissional')}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 duration-300"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Profissional</h3>
              <p className="text-[#E8C4C4] mb-6">
                Para sommeliers, restaurantes e distribuidores
              </p>
              <ul className="text-left space-y-3 text-[#E8C4C4]">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-300" />
                  <span>Gestão de estoque e margens</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-300" />
                  <span>Catálogos privados e notas internas</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-300" />
                  <span>Análise técnica de safras</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-300" />
                  <span>Networking e eventos exclusivos</span>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all">
                Começar como Profissional
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Funcionalidades para Todos
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Award className="w-12 h-12 text-yellow-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Gamificação</h4>
            <p className="text-[#E8C4C4]">
              Badges, rankings e desafios mensais para tornar sua experiência mais envolvente.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Sparkles className="w-12 h-12 text-[#D4A5A5] mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">IA Avançada</h4>
            <p className="text-[#E8C4C4]">
              Recomendações personalizadas e harmonizações inteligentes com receitas.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Estatísticas</h4>
            <p className="text-[#E8C4C4]">
              Gráficos detalhados sobre consumo, gastos e evolução do seu paladar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-[#E8C4C4]">
        <p>© 2024 MyWine. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

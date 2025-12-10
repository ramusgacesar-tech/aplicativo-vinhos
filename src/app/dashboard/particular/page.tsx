'use client';

import { 
  Camera, 
  Wine, 
  Heart, 
  TrendingUp, 
  Package, 
  Star, 
  Bell, 
  Search,
  BarChart3,
  Sparkles,
  ShoppingCart,
  MapPin,
  Calendar,
  Award,
  Filter,
  Download
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ParticularDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header/Navbar */}
      <header className="bg-[#1A1A1A] border-b border-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/939ff8f2-2f52-489c-ae0a-e800726463f7.png" 
                alt="MyWine Logo" 
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#800020] to-[#A0153E] bg-clip-text text-transparent">
                MyWine
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-800 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#800020]/20 rounded-lg">
                <Award className="w-5 h-5 text-[#800020]" />
                <span className="font-semibold text-[#E8C4C4]">Nível 5</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Olá, Entusiasta! 🍷</h2>
          <p className="text-gray-400">Descubra, avalie e gerencie seus vinhos favoritos</p>
        </div>

        {/* Quick Actions - Scanner Destacado */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <button className="col-span-2 bg-gradient-to-br from-[#800020] to-[#A0153E] text-white rounded-2xl p-6 hover:shadow-2xl transition-all hover:scale-105">
            <Camera className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-1">Scanner de Rótulos</h3>
            <p className="text-[#E8C4C4] text-sm">Identifique qualquer vinho instantaneamente</p>
          </button>
          <button className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-[#800020] hover:shadow-lg transition-all">
            <Search className="w-10 h-10 text-[#800020] mb-3" />
            <h3 className="text-lg font-bold text-white">Buscar Vinhos</h3>
          </button>
          <button className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-[#800020] hover:shadow-lg transition-all">
            <Heart className="w-10 h-10 text-[#A0153E] mb-3" />
            <h3 className="text-lg font-bold text-white">Wishlist</h3>
          </button>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Minha Garrafeira */}
          <div className="lg:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-[#800020]" />
                <h3 className="text-2xl font-bold text-white">Minha Garrafeira</h3>
              </div>
              <button className="px-4 py-2 bg-[#800020] text-white rounded-lg hover:bg-[#A0153E] transition-all text-sm font-semibold">
                + Adicionar Vinho
              </button>
            </div>

            {/* Estatísticas da Garrafeira */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#800020]/20 rounded-xl p-4">
                <p className="text-sm text-[#D4A5A5] font-semibold mb-1">Total de Garrafas</p>
                <p className="text-3xl font-bold text-[#E8C4C4]">47</p>
              </div>
              <div className="bg-green-900/20 rounded-xl p-4">
                <p className="text-sm text-green-400 font-semibold mb-1">Valor Investido</p>
                <p className="text-3xl font-bold text-green-300">€2.340</p>
              </div>
              <div className="bg-blue-900/20 rounded-xl p-4">
                <p className="text-sm text-blue-400 font-semibold mb-1">Valor Estimado</p>
                <p className="text-3xl font-bold text-blue-300">€2.890</p>
              </div>
            </div>

            {/* Lista de Vinhos na Garrafeira */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-xl hover:bg-gray-900 transition-all cursor-pointer">
                <div className="w-12 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-lg"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">Quinta do Crasto Reserva 2018</h4>
                  <p className="text-sm text-gray-400">Douro, Portugal • 3 garrafas</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">Prateleira A3</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">€25,00</p>
                  <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full mt-1">
                    Pronto para beber
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-xl hover:bg-gray-900 transition-all cursor-pointer">
                <div className="w-12 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">Alvarinho Soalheiro 2022</h4>
                  <p className="text-sm text-gray-400">Vinho Verde, Portugal • 6 garrafas</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">Frigorífico</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">€12,50</p>
                  <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full mt-1">
                    Pronto para beber
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-xl hover:bg-gray-900 transition-all cursor-pointer">
                <div className="w-12 h-16 bg-gradient-to-br from-[#800020] to-[#6B0017] rounded-lg"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">Barca Velha 2015</h4>
                  <p className="text-sm text-gray-400">Douro, Portugal • 1 garrafa</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500">Caixa Especial</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">€180,00</p>
                  <span className="inline-block px-2 py-1 bg-orange-900/30 text-orange-400 text-xs rounded-full mt-1">
                    Guardar até 2028
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2 border-2 border-gray-800 rounded-lg hover:border-[#800020] transition-all flex items-center justify-center gap-2 font-semibold text-gray-400">
                <Filter className="w-5 h-5" />
                Filtrar
              </button>
              <button className="flex-1 py-2 border-2 border-gray-800 rounded-lg hover:border-[#800020] transition-all flex items-center justify-center gap-2 font-semibold text-gray-400">
                <Download className="w-5 h-5" />
                Exportar PDF
              </button>
            </div>
          </div>

          {/* Sidebar - Recomendações e Alertas */}
          <div className="space-y-6">
            {/* Recomendações IA */}
            <div className="bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl font-bold">Você Pode Gostar</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold mb-1">Pêra-Manca 2017</h4>
                  <p className="text-sm text-[#E8C4C4]">Alentejo • €85,00</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8 (profissional)</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all cursor-pointer">
                  <h4 className="font-bold mb-1">Niepoort Redoma 2019</h4>
                  <p className="text-sm text-[#E8C4C4]">Douro • €32,00</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.6 (profissional)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alertas de Preço */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-white">Alertas de Preço</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-900/20 rounded-xl border border-green-800">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-sm">Quinta do Vallado</h4>
                    <span className="text-xs font-bold text-green-400">-15%</span>
                  </div>
                  <p className="text-sm text-gray-400">€18,50 → €15,75</p>
                  <button className="mt-2 w-full py-1 bg-green-700 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition-all">
                    Ver Oferta
                  </button>
                </div>
                <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-800">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-sm">Herdade do Esporão</h4>
                    <span className="text-xs font-bold text-blue-400">Disponível</span>
                  </div>
                  <p className="text-sm text-gray-400">Safra 2020 em estoque</p>
                  <button className="mt-2 w-full py-1 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-600 transition-all">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>

            {/* Gamificação */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-white">Conquistas</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Wine className="w-8 h-8 text-white" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">
                3 de 12 badges desbloqueados
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas e Histórico */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Gráfico de Consumo */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-[#800020]" />
              <h3 className="text-xl font-bold text-white">Estatísticas de Consumo</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Tintos</span>
                  <span className="text-sm font-bold text-white">65%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Brancos</span>
                  <span className="text-sm font-bold text-white">25%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Espumantes</span>
                  <span className="text-sm font-bold text-white">10%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#A0153E] to-[#800020]" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#800020]/20 rounded-xl p-4">
                <p className="text-sm text-[#D4A5A5] font-semibold mb-1">Vinhos Provados</p>
                <p className="text-2xl font-bold text-[#E8C4C4]">127</p>
              </div>
              <div className="bg-[#A0153E]/20 rounded-xl p-4">
                <p className="text-sm text-[#D4A5A5] font-semibold mb-1">Gasto Total</p>
                <p className="text-2xl font-bold text-[#E8C4C4]">€3.450</p>
              </div>
            </div>
          </div>

          {/* Últimas Avaliações */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold text-white">Últimas Avaliações</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#0A0A0A] rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white">Quinta do Crasto Superior</h4>
                    <p className="text-sm text-gray-400">Douro, 2019</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">Excelente! Taninos equilibrados e final longo.</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>€28,00 • Garrafeira Central</span>
                  <span>Há 2 dias</span>
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white">Esporão Reserva Branco</h4>
                    <p className="text-sm text-gray-400">Alentejo, 2022</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">Muito fresco e aromático. Perfeito para o verão.</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>€15,50 • Continente</span>
                  <span>Há 5 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

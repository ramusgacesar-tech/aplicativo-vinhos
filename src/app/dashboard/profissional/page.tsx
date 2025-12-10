'use client';

import { 
  Wine, 
  Package, 
  TrendingUp, 
  Users, 
  Bell, 
  Settings,
  BarChart3,
  ShoppingCart,
  FileText,
  Calendar,
  MessageSquare,
  Award,
  DollarSign,
  Truck,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Camera,
  ScanLine
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfissionalDashboard() {
  const [showScanner, setShowScanner] = useState(false);

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
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  MyWine Pro
                </h1>
                <p className="text-xs text-gray-500">Área Profissional</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowScanner(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Camera className="w-5 h-5" />
                <span className="hidden sm:inline">Scanner</span>
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <Settings className="w-6 h-6 text-gray-400" />
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 rounded-lg">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-blue-300 hidden md:inline">Sommelier Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-w-2xl w-full border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ScanLine className="w-8 h-8 text-[#A0153E]" />
                <h2 className="text-2xl font-bold text-white">Scanner de Rótulos</h2>
              </div>
              <button 
                onClick={() => setShowScanner(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-all"
              >
                <span className="text-2xl text-gray-400">×</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Área de Scanner */}
              <div className="aspect-video bg-[#0A0A0A] rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-4">
                <Camera className="w-16 h-16 text-gray-600" />
                <p className="text-gray-400 text-center">
                  Posicione o rótulo do vinho na câmera<br />
                  <span className="text-sm text-gray-500">Funciona mesmo com baixa luminosidade</span>
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#A0153E] to-[#800020] text-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                  <Camera className="w-5 h-5" />
                  Tirar Foto
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/10 text-white rounded-lg hover:border-[#800020] transition-all font-semibold">
                  <FileText className="w-5 h-5" />
                  Carregar Imagem
                </button>
              </div>

              {/* Recursos do Scanner */}
              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/10">
                <h3 className="text-sm font-bold text-white mb-3">Recursos Avançados:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full"></span>
                    Reconhecimento de rótulos antigos e raros
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full"></span>
                    Identificação por foto parcial ou danificada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full"></span>
                    Modo de baixa luminosidade para restaurantes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full"></span>
                    Sugestões automáticas de vinhos similares
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Painel Profissional 📊</h2>
          <p className="text-gray-400">Gerencie seu negócio de vinhos com eficiência</p>
        </div>

        {/* KPIs Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-900/20 rounded-xl">
                <Package className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-xs font-semibold text-green-500 bg-green-900/20 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-1">Estoque Total</p>
            <p className="text-3xl font-bold text-white">1.247</p>
            <p className="text-xs text-gray-500 mt-1">garrafas em inventário</p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-900/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-xs font-semibold text-green-500 bg-green-900/20 px-2 py-1 rounded-full">
                +8%
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-1">Receita Mensal</p>
            <p className="text-3xl font-bold text-white">€45.2K</p>
            <p className="text-xs text-gray-500 mt-1">margem média 42%</p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#800020]/20 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-[#A0153E]" />
              </div>
              <span className="text-xs font-semibold text-blue-500 bg-blue-900/20 px-2 py-1 rounded-full">
                23 pendentes
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-1">Pedidos</p>
            <p className="text-3xl font-bold text-white">156</p>
            <p className="text-xs text-gray-500 mt-1">este mês</p>
          </div>

          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-900/20 rounded-xl">
                <AlertCircle className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-xs font-semibold text-orange-500 bg-orange-900/20 px-2 py-1 rounded-full">
                Atenção
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-1">Estoque Baixo</p>
            <p className="text-3xl font-bold text-white">18</p>
            <p className="text-xs text-gray-500 mt-1">produtos críticos</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Gestão de Catálogo */}
          <div className="lg:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Wine className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Catálogo Profissional</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border-2 border-gray-800 rounded-lg hover:border-blue-600 transition-all">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 border-2 border-gray-800 rounded-lg hover:border-blue-600 transition-all">
                  <Filter className="w-5 h-5 text-gray-400" />
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Adicionar
                </button>
              </div>
            </div>

            {/* Tabela de Vinhos */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-400">Vinho</th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-gray-400">Estoque</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold text-gray-400">Custo</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold text-gray-400">Venda</th>
                    <th className="text-right py-3 px-2 text-sm font-semibold text-gray-400">Margem</th>
                    <th className="text-center py-3 px-2 text-sm font-semibold text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-[#0A0A0A] transition-all">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-lg"></div>
                        <div>
                          <h4 className="font-bold text-white text-sm">Quinta do Crasto Reserva</h4>
                          <p className="text-xs text-gray-400">Douro 2018</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="font-bold text-white">47</span>
                    </td>
                    <td className="text-right py-4 px-2 text-sm text-gray-400">€18,50</td>
                    <td className="text-right py-4 px-2 text-sm font-bold text-white">€32,00</td>
                    <td className="text-right py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded-full">
                        73%
                      </span>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">
                        Em estoque
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800 hover:bg-[#0A0A0A] transition-all">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg"></div>
                        <div>
                          <h4 className="font-bold text-white text-sm">Alvarinho Soalheiro</h4>
                          <p className="text-xs text-gray-400">Vinho Verde 2022</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="font-bold text-white">124</span>
                    </td>
                    <td className="text-right py-4 px-2 text-sm text-gray-400">€8,20</td>
                    <td className="text-right py-4 px-2 text-sm font-bold text-white">€15,00</td>
                    <td className="text-right py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded-full">
                        83%
                      </span>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">
                        Em estoque
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800 hover:bg-[#0A0A0A] transition-all">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 bg-gradient-to-br from-[#800020] to-[#6B0017] rounded-lg"></div>
                        <div>
                          <h4 className="font-bold text-white text-sm">Pêra-Manca Tinto</h4>
                          <p className="text-xs text-gray-400">Alentejo 2017</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="font-bold text-orange-500">3</span>
                    </td>
                    <td className="text-right py-4 px-2 text-sm text-gray-400">€65,00</td>
                    <td className="text-right py-4 px-2 text-sm font-bold text-white">€120,00</td>
                    <td className="text-right py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded-full">
                        85%
                      </span>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-orange-900/30 text-orange-400 text-xs font-semibold rounded-full">
                        Baixo
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-800 hover:bg-[#0A0A0A] transition-all">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-14 bg-gradient-to-br from-pink-600 to-pink-500 rounded-lg"></div>
                        <div>
                          <h4 className="font-bold text-white text-sm">Mateus Rosé</h4>
                          <p className="text-xs text-gray-400">Douro 2023</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="font-bold text-white">89</span>
                    </td>
                    <td className="text-right py-4 px-2 text-sm text-gray-400">€4,50</td>
                    <td className="text-right py-4 px-2 text-sm font-bold text-white">€8,50</td>
                    <td className="text-right py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded-full">
                        89%
                      </span>
                    </td>
                    <td className="text-center py-4 px-2">
                      <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">
                        Em estoque
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-400">Mostrando 4 de 247 vinhos</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border-2 border-gray-800 rounded-lg hover:border-blue-600 transition-all text-sm font-semibold text-gray-400">
                  Anterior
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold">
                  Próximo
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Alertas e Ações Rápidas */}
          <div className="space-y-6">
            {/* Alertas Críticos */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold">Alertas Críticos</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <h4 className="font-bold mb-1 text-sm">Estoque Crítico</h4>
                  <p className="text-sm text-orange-100">Pêra-Manca: apenas 3 garrafas</p>
                  <button className="mt-2 w-full py-1 bg-white text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-all">
                    Encomendar Agora
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <h4 className="font-bold mb-1 text-sm">Pedido Atrasado</h4>
                  <p className="text-sm text-orange-100">Fornecedor XYZ - 5 dias de atraso</p>
                  <button className="mt-2 w-full py-1 bg-white text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-all">
                    Contactar
                  </button>
                </div>
              </div>
            </div>

            {/* Análise de Fornecedores */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-white">Fornecedores</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-[#0A0A0A] rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">Vinhos do Norte</h4>
                    <span className="text-xs font-bold text-green-400">Ótimo</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>47 produtos</span>
                    <span>Entrega: 2-3 dias</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="p-3 bg-[#0A0A0A] rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">Distribuidora Sul</h4>
                    <span className="text-xs font-bold text-yellow-400">Bom</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>32 produtos</span>
                    <span>Entrega: 3-5 dias</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 border-2 border-gray-800 rounded-lg hover:border-blue-600 transition-all text-sm font-semibold text-gray-400">
                Comparar Preços
              </button>
            </div>

            {/* Comunidade Profissional */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-[#800020]" />
                <h3 className="text-xl font-bold text-white">Comunidade Pro</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-[#800020]/20 rounded-xl border border-[#800020]">
                  <h4 className="font-bold text-white text-sm mb-1">Evento de Degustação</h4>
                  <p className="text-xs text-gray-400 mb-2">Vinhos do Alentejo - 15 Jan</p>
                  <button className="w-full py-1 bg-[#800020] text-white rounded-lg text-xs font-semibold hover:bg-[#A0153E] transition-all">
                    Ver Detalhes
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-400">23 novas mensagens no fórum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics e Relatórios */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Gráfico de Vendas */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-white">Análise de Vendas</h3>
              </div>
              <button className="px-3 py-1 border-2 border-gray-800 rounded-lg hover:border-blue-600 transition-all text-sm font-semibold flex items-center gap-2 text-gray-400">
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Tintos Premium</span>
                  <span className="text-sm font-bold text-white">€18.5K</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-red-500" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Brancos</span>
                  <span className="text-sm font-bold text-white">€12.3K</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Espumantes</span>
                  <span className="text-sm font-bold text-white">€8.7K</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-pink-400" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-400">Fortificados</span>
                  <span className="text-sm font-bold text-white">€5.7K</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-600 to-orange-500" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pedidos Recentes */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold text-white">Pedidos Recentes</h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-[#0A0A0A] rounded-xl border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm">Pedido #1247</h4>
                    <p className="text-xs text-gray-400">Restaurante O Fado</p>
                  </div>
                  <span className="inline-block px-2 py-1 bg-green-900/30 text-green-400 text-xs font-semibold rounded-full">
                    Entregue
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>24 garrafas • €780,00</span>
                  <span>Hoje, 14:30</span>
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm">Pedido #1246</h4>
                    <p className="text-xs text-gray-400">Hotel Quinta Vista</p>
                  </div>
                  <span className="inline-block px-2 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full">
                    Em trânsito
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>48 garrafas • €1.450,00</span>
                  <span>Ontem, 10:15</span>
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl border-l-4 border-orange-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white text-sm">Pedido #1245</h4>
                    <p className="text-xs text-gray-400">Garrafeira Central</p>
                  </div>
                  <span className="inline-block px-2 py-1 bg-orange-900/30 text-orange-400 text-xs font-semibold rounded-full">
                    Processando
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>12 garrafas • €340,00</span>
                  <span>Há 2 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

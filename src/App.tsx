/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Activity, Shield, Zap, Target, 
  Users, Briefcase, Clock, AlertCircle, ChevronDown, Filter,
  Settings, Database, Award, BarChart3, LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Role, Metric, ProductLine } from './types';
import { METRICS, PRODUCT_LINES, MOCK_CHART_DATA } from './mockData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COLORS = {
  moexGreen: '#e6f4ea',
  moexPink: '#fce8e6',
  moexGray: '#f1f3f4',
  moexDark: '#202124',
  moexText: '#3c4043',
  moexSuccess: '#137333',
  moexError: '#c5221f',
};

const MetricCard = ({ metric, onClick }: { metric: Metric; onClick: () => void; key?: string }) => {
  const isGood = metric.status === 'good';
  const isBad = metric.status === 'bad';

  return (
    <motion.button
      type="button"
      layout="position"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      aria-label={`${metric.name}: ${typeof metric.value === 'number' ? metric.value.toLocaleString('ru-RU') : metric.value} ${metric.unit}`}
      className={cn(
        "group relative p-4 rounded-xl cursor-pointer border transition-all duration-200 text-left",
        "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none",
        isGood && "bg-[#e6f4ea] border-[#ceead6] hover:shadow-lg hover:shadow-green-100",
        isBad && "bg-[#fce8e6] border-[#fad2cf] hover:shadow-lg hover:shadow-red-100",
        !isGood && !isBad && "bg-white border-[#dadce0] hover:shadow-md shadow-sm"
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
          {metric.category}
        </span>
        {metric.trend !== 0 && (
          <div className={cn(
            "flex items-center text-xs font-bold",
            metric.trend > 0 ? "text-green-700" : "text-red-700"
          )}>
            {metric.trend > 0 ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
            {Math.abs(metric.trend)}%
          </div>
        )}
      </div>
      
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{metric.name}</h3>
      <p className="text-[10px] text-gray-500 mb-2">{metric.productLine} • {metric.description}</p>
      
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">
          {typeof metric.value === 'number' ? metric.value.toLocaleString('ru-RU') : metric.value}
        </span>
        <span className="text-sm font-medium text-gray-500">{metric.unit}</span>
      </div>

      <div className="mt-2 text-[10px] text-gray-400">
        Норма: {metric.norm}
      </div>

      {metric.sparkline && (
        <div className="h-8 mt-3 -mx-1 opacity-50 group-hover:opacity-100 transition-opacity">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={metric.sparkline.map((v, i) => ({ value: v }))}>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={isGood ? "#137333" : isBad ? "#c5221f" : "#4285f4"} 
                fill={isGood ? "#137333" : isBad ? "#c5221f" : "#4285f4"} 
                fillOpacity={0.1} 
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.button>
  );
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [selectedProductLine, setSelectedProductLine] = useState<ProductLine | 'Все'>('Все');
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);
  const [viewMode, setViewMode] = useState<'dashboard' | 'database'>('dashboard');

  const categories = [
    'Все',
    'Продуктовые метрики',
    'Метрики команд',
    'Метрики надежности',
    'Метрики ИТ общие',
    'Метрики эффективности',
    'Метрики для CEO',
    'Метрики для CIO',
    'Метрики для CTO'
  ];

  const filteredMetrics = useMemo(() => {
    return METRICS.filter(m => {
      const categoryMatch = selectedCategory === 'Все' || m.category === selectedCategory;
      const lineMatch = selectedProductLine === 'Все' || m.productLine === selectedProductLine;
      return categoryMatch && lineMatch;
    });
  }, [selectedCategory, selectedProductLine]);

  const handleMetricClick = (metric: Metric) => {
    setSelectedMetric(metric);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#3c4043] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-lg">M</div>
            <div>
              <h1 className="text-lg font-bold leading-none">MIEX IT</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Governance & Value</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden h-9">
              <button 
                onClick={() => setViewMode('dashboard')}
                className={cn(
                  "px-3 flex items-center gap-2 text-xs font-semibold transition-colors",
                  viewMode === 'dashboard' ? "bg-red-50 text-red-600" : "bg-white text-gray-500 hover:bg-gray-50"
                )}
              >
                <LayoutDashboard size={14} /> Дашборд
              </button>
              <button 
                onClick={() => setViewMode('database')}
                className={cn(
                  "px-3 border-l border-gray-200 flex items-center gap-2 text-xs font-semibold transition-colors",
                  viewMode === 'database' ? "bg-red-50 text-red-600" : "bg-white text-gray-500 hover:bg-gray-50"
                )}
              >
                <Database size={14} /> База данных
              </button>
            </div>

            {/* Category Filter */}
            <div className="grid grid-cols-5 gap-0.5 bg-gray-100 p-0.5 rounded-lg max-w-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-2 py-1.5 text-[9px] font-bold rounded-md transition-all whitespace-nowrap text-center",
                    selectedCategory === cat 
                      ? "bg-white text-gray-900 shadow-sm" 
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <button
              aria-label="Настройки"
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {viewMode === 'dashboard' ? (
          <>
            {/* Analytics Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <LayoutDashboard className="text-red-600" />
                  IT Value Terminal
                </h2>
                <p className="text-gray-500 text-sm mt-1">Обзор ключевых показателей эффективности ИТ-активов</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <Filter size={16} className="text-gray-400" />
                  <select 
                    className="text-xs font-medium focus:outline-none bg-transparent"
                    value={selectedProductLine}
                    onChange={(e) => setSelectedProductLine(e.target.value as ProductLine | 'Все')}
                  >
                    <option value="Все">Все продукты</option>
                    {PRODUCT_LINES.map(pl => <option key={pl} value={pl}>{pl}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredMetrics.map((metric) => (
                  <MetricCard 
                    key={metric.id} 
                    metric={metric} 
                    onClick={() => handleMetricClick(metric)} 
                  />
                ))}
              </AnimatePresence>
            </div>


          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Database className="text-red-600" />
                  Реестр метрик ИТ
                </h2>
                <p className="text-xs text-gray-500 mt-1">Полный перечень показателей и сырых данных для аудита</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-[10px] uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100">
                    <th className="px-6 py-4">Линейка продуктов</th>
                    <th className="px-6 py-4">Продукт / услуга</th>
                    <th className="px-6 py-4">Вид</th>
                    <th className="px-6 py-4">Тип</th>
                    <th className="px-6 py-4">Метрика</th>
                    <th className="px-6 py-4 text-center">Ед. изм.</th>
                    <th className="px-6 py-4 text-right">Текущее</th>
                    <th className="px-6 py-4 text-right">Пред.</th>
                    <th className="px-6 py-4 text-right">Дельта (период)</th>
                    <th className="px-6 py-4 text-right">Норматив</th>
                    <th className="px-6 py-4 text-right">Дельта (норма)</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-gray-100">
                  {filteredMetrics.map((m) => (
                    <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">{m.productLine}</td>
                      <td className="px-6 py-4 text-gray-500">{m.product}</td>
                      <td className="px-6 py-4"><span className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">{m.category}</span></td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold",
                          m.type === 'ИТ' ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                        )}>
                          {m.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{m.name}</td>
                      <td className="px-6 py-4 text-center text-gray-400 italic">{m.unit}</td>
                      <td className="px-6 py-4 text-right font-bold">{m.actual}</td>
                      <td className="px-6 py-4 text-right text-gray-400">{m.previous}</td>
                      <td className={cn(
                        "px-6 py-4 text-right font-bold",
                        m.variancePrev > 0 ? "text-green-600" : m.variancePrev < 0 ? "text-red-600" : "text-gray-400"
                      )}>
                        {m.variancePrev > 0 ? `+${m.variancePrev}%` : `${m.variancePrev}%`}
                      </td>
                      <td className="px-6 py-4 text-right text-gray-500 font-medium">{m.norm}</td>
                      <td className={cn(
                        "px-6 py-4 text-right font-bold",
                        m.status === 'good' ? "text-green-600" : "text-red-600"
                      )}>
                        {m.varianceTarget > 0 ? `+${m.varianceTarget}%` : `${m.varianceTarget}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </main>

      {/* Detail Overlay */}
      <AnimatePresence>
        {isDetailOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <button 
                  onClick={() => setIsDetailOpen(false)}
                  aria-label="Закрыть детали"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
                >
                  <ChevronDown className="rotate-90" />
                </button>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Детальный анализ</span>
              </div>

              {selectedMetric && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedMetric.name}</h2>
                    <p className="text-gray-500">{selectedMetric.category} • {selectedMetric.roles.join(', ')}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="text-4xl font-bold mb-2">
                      {typeof selectedMetric.value === 'number' ? selectedMetric.value.toLocaleString('ru-RU') : selectedMetric.value} 
                      <span className="text-lg font-normal text-gray-400 ml-2">{selectedMetric.unit}</span>
                    </div>
                    <div className={cn(
                      "text-sm font-bold flex items-center gap-1",
                      selectedMetric.trend > 0 ? "text-green-600" : "text-red-600"
                    )}>
                      {selectedMetric.trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {Math.abs(selectedMetric.trend)}% к прошлому периоду
                    </div>
                  </div>

                  {selectedMetric.childMetrics && selectedMetric.childMetrics.length > 0 && (
                    <div>
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Award size={16} className="text-red-500" />
                        Состав показателя (Декомпозиция)
                      </h4>
                      <div className="space-y-3">
                        {selectedMetric.childMetrics.map((childId) => {
                          const child = METRICS.find(m => m.id === childId);
                          if (!child) return null;
                          return (
                            <button
                              key={childId} 
                              type="button"
                              onClick={() => {
                                setSelectedMetric(child);
                              }}
                              className="group w-full flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
                            >
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-800">{child.name}</span>
                                <span className="text-[10px] text-gray-400">{child.product} • {child.period}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">
                                  {typeof child.value === 'number' ? child.value.toLocaleString('ru-RU') : child.value} 
                                  <span className="text-[10px] font-normal text-gray-400 ml-1">{child.unit}</span>
                                </div>
                                <div className={cn(
                                  "text-[10px] font-bold",
                                  child.trend > 0 ? "text-green-600" : "text-red-600"
                                )}>
                                  {child.trend > 0 ? "+" : ""}{child.trend}%
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <p className="mt-4 text-[10px] text-gray-400 italic">
                        * Данный показатель является агрегатом (суммой) указанных выше компонентов за аналогичный период.
                      </p>
                    </div>
                  )}

                  {!selectedMetric.childMetrics && (
                    <div>
                    <h4 className="font-bold mb-4">Декомпозиция по продуктам (прогноз)</h4>
                    <div className="space-y-3">
                      {PRODUCT_LINES.slice(0, 4).map((pl, i) => (
                        <div key={pl} className="flex items-center gap-3">
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${65 - i * 8}%` }}
                              className="h-full bg-blue-500/80 rounded-full"
                            />
                          </div>
                          <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap w-24">{pl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  )}

                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="font-bold mb-2">Рекомендация ITG</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Текущий уровень {selectedMetric.name.toLowerCase()} находится в пределах нормы. 
                      Рекомендуется продолжать мониторинг для выявления сезонных аномалий.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Category Indicator Footer */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-[#202124] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-medium">
          <div className={cn(
            "w-2 h-2 rounded-full animate-pulse",
            selectedCategory !== 'Все' ? "bg-green-500" : "bg-yellow-500"
          )} />
          Категория: <span className="text-red-400 uppercase">{selectedCategory}</span>
        </div>
      </footer>
    </div>
  );
}

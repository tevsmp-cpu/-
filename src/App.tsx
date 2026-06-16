/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Bath,
  Droplets,
  Lightbulb,
  Layers,
  Maximize,
  CheckCircle2,
  ChevronRight,
  Palette,
  Box,
  Layout as LayoutIcon,
  Zap,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VARIANTS } from './mockData';
import { DesignVariant, Material, LightingFeature, TechnicalSpec } from './types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MaterialCard = ({ material }: { material: Material; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div
      className="w-full h-24 rounded-lg mb-4 flex items-center justify-center border border-gray-50"
      style={{ backgroundColor: material.colorHex }}
    >
      <span className="text-[10px] font-mono text-black/40 mix-blend-difference">{material.colorHex}</span>
    </div>
    <h4 className="font-bold text-sm mb-1">{material.name}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{material.description}</p>
  </motion.div>
);

const FeatureSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 bg-gray-100 rounded-lg">
        <Icon size={18} className="text-gray-700" />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    {children}
  </div>
);

const LayoutDiagram = ({ variant }: { variant: DesignVariant }) => (
  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
    <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      <LayoutIcon size={12} />
      Техническая схема планировки
    </div>

    <div className="flex flex-col items-center justify-center py-10">
      {/* 2200mm Container Representation */}
      <div className="relative w-full max-w-md aspect-[22/15] border-2 border-dashed border-gray-300 rounded-lg flex flex-col p-4 gap-4">
        <div className="absolute -top-6 left-0 right-0 flex justify-between text-[10px] text-gray-400 font-mono">
          <span>0мм</span>
          <span>Общая ширина: 2200мм</span>
          <span>2200мм</span>
        </div>

        <div className="grid grid-cols-2 gap-4 h-1/2">
          <div className="border-2 border-blue-200 bg-blue-50/50 rounded flex items-center justify-center flex-col gap-1 p-2">
            <Droplets size={16} className="text-blue-400" />
            <span className="text-[9px] font-bold text-blue-700 uppercase">Душ 1</span>
            <span className="text-[8px] text-blue-500">1000x1000</span>
          </div>
          <div className="border-2 border-blue-200 bg-blue-50/50 rounded flex items-center justify-center flex-col gap-1 p-2">
            <Droplets size={16} className="text-blue-400" />
            <span className="text-[9px] font-bold text-blue-700 uppercase">Душ 2</span>
            <span className="text-[8px] text-blue-500">1000x1000</span>
          </div>
        </div>

        <div className="h-1/2 border-2 border-emerald-200 bg-emerald-50/50 rounded flex items-center justify-center flex-col gap-1 p-2">
          <Bath size={20} className="text-emerald-400" />
          <span className="text-[9px] font-bold text-emerald-700 uppercase">Приставная ванна</span>
          <span className="text-[8px] text-emerald-500">1700x780</span>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center max-w-xs italic">
        *Точки подключения фиксированы. Диаграмма иллюстрирует функциональное зонирование в пределах 2200 мм.
      </p>
    </div>
  </div>
);

export default function App() {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const activeVariant = VARIANTS[activeVariantIndex];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white">
              <Box size={22} />
            </div>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-widest leading-none">Проект санузла</h1>
              <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase">Дизайн-предложение v1.0</p>
            </div>
          </div>

          <nav className="flex bg-gray-100 p-1 rounded-xl">
            {VARIANTS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveVariantIndex(i)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200",
                  activeVariantIndex === i
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {v.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <motion.section
              key={activeVariant.id + "-hero"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-tighter text-gray-500 mb-4">
                <Palette size={12} />
                Выбранный стиль
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tight leading-none">
                {activeVariant.name}
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">
                {activeVariant.concept}
              </p>
            </motion.section>

            <FeatureSection title="Палитра материалов" icon={Layers}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeVariant.materials.map((m) => (
                  <MaterialCard key={m.id} material={m} />
                ))}
              </div>
            </FeatureSection>

            <FeatureSection title="Освещение и атмосфера" icon={Zap}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeVariant.lighting.map((l, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold uppercase px-2 py-1 bg-gray-50 text-gray-500 rounded">
                        {l.type}
                      </span>
                      {l.colorTemp && (
                        <span className="text-[10px] font-mono text-orange-500 bg-orange-50 px-2 py-1 rounded">
                          {l.colorTemp}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{l.description}</p>
                  </div>
                ))}
              </div>
            </FeatureSection>

            <FeatureSection title="Сантехника и фурнитура" icon={CheckCircle2}>
              <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Цвет фурнитуры</h4>
                  <p className="text-2xl font-bold">{activeVariant.fixturesFinish}</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <Bath size={24} />
                </div>
              </div>
            </FeatureSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Technical Box */}
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-bold flex items-center gap-2 mb-6">
                  <Info size={18} className="text-blue-500" />
                  Технические детали
                </h3>
                <div className="space-y-4">
                  {activeVariant.technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{spec.label}</span>
                      <span className="text-sm font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layout Diagram */}
              <LayoutDiagram variant={activeVariant} />

              <div className="p-8 bg-blue-600 rounded-3xl text-white">
                <h4 className="font-bold mb-2">Заметка дизайнера</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  "В пространстве 2200 мм важна визуальная непрерывность. {activeVariant.id === 'eco-minimalism'
                    ? 'Светлые тона и безрамное стекло создают ощущение простора.'
                    : 'Темные тона добавляют глубины, а черные профили — структурной элегантности.'}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-24 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 grayscale opacity-50">
            <Box size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Architectural Studio</span>
          </div>
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            2024 Bathroom Interior Design Concept
          </div>
        </div>
      </footer>
    </div>
  );
}

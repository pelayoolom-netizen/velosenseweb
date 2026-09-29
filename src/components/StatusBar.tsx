import React from 'react';
import { Navigation, BrainCircuit, Route, BarChart3, Bot } from 'lucide-react';

export const StatusBar: React.FC = () => {
  const indicators = [
    {
      icon: Navigation,
      label: 'GPS en tiempo real',
      description: 'Precisión métrica',
    },
    {
      icon: BrainCircuit,
      label: 'Entrenamiento inteligente',
      description: 'Zonas de esfuerzo',
    },
    {
      icon: Route,
      label: 'Rutas & Senderos',
      description: 'Carretera y montaña',
    },
    {
      icon: BarChart3,
      label: 'Estadísticas completas',
      description: 'Potencia y cadencia',
    },
    {
      icon: Bot,
      label: 'Coach IA',
      description: 'Feedback personalizado',
    },
  ];

  return (
    <section className="relative border-y border-white/10 bg-[#0C0E14]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group cursor-default transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-white tracking-tight truncate group-hover:text-emerald-300 transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-400 truncate">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

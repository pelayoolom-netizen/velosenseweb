import React, { useState } from 'react';
import {
  Smartphone,
  Play,
  Pause,
  Award,
  TrendingUp,
  MapPin,
  Compass,
  Zap,
  Activity,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { VeloSenseLogo } from './VeloSenseLogo';

export const MobileShowcase: React.FC = () => {
  const [activeMobileTab, setActiveMobileTab] = useState(1);

  const phoneScreens = [
    {
      id: 0,
      title: '1. Pantalla de inicio',
      tagline: 'Resumen semanal & acceso rápido',
      screenContent: (
        <div className="flex flex-col h-full bg-[#0A0D12] text-white p-4 select-none">
          {/* Top user bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <VeloSenseLogo size="sm" />
              <span className="font-bold text-sm tracking-tight">VeloSense</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs font-bold text-emerald-400">
              JS
            </div>
          </div>

          {/* Weekly goal progress */}
          <div className="rounded-xl bg-white/5 border border-white/5 p-3 mb-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>Objetivo semanal</span>
              <span className="text-emerald-400 font-mono font-bold">118 / 150 km</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '78%' }} />
            </div>
          </div>

          {/* Big Quick Start Activity CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/30 p-4 mb-3 text-center">
            <div className="text-[11px] text-emerald-300 font-mono uppercase tracking-wider mb-1">
              ¿Listo para pedalear?
            </div>
            <div className="text-base font-extrabold text-white mb-3">
              Nueva Salida en Bici
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-400 text-black flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30 font-bold">
              <Play className="w-5 h-5 fill-black ml-0.5" />
            </div>
          </div>

          {/* Recent Rides history items */}
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            Salidas recientes
          </div>
          <div className="space-y-2 flex-1 overflow-hidden">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Trialera del Pinar</div>
                <div className="text-[10px] text-slate-400">Ayer · 24.2 km · +410m</div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">1:12 h</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Ruta de Fondo Llano</div>
                <div className="text-[10px] text-slate-400">Hace 3 días · 52.0 km</div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">1:54 h</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: '2. Durante la ruta',
      tagline: 'Ciclocomputador en vivo de alto contraste',
      screenContent: (
        <div className="flex flex-col h-full bg-[#08090C] text-white p-3.5 select-none justify-between">
          {/* Header indicator */}
          <div className="flex items-center justify-between text-[11px] border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GRABANDO ACTIVIDAD</span>
            </div>
            <span className="font-mono text-slate-400">00:46:12</span>
          </div>

          {/* Big Speedometer */}
          <div className="text-center py-2">
            <div className="font-mono text-6xl font-black text-white tracking-tight">
              28.4
            </div>
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
              KM/H · VELOCIDAD
            </div>
          </div>

          {/* 4 Primary ride metrics */}
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">DISTANCIA</div>
              <div className="font-mono text-lg font-bold text-white">19.2 km</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">DESNIVEL +</div>
              <div className="font-mono text-lg font-bold text-emerald-300">+340 m</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">POTENCIA</div>
              <div className="font-mono text-lg font-bold text-amber-300">225 W</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">CADENCIA</div>
              <div className="font-mono text-lg font-bold text-cyan-300">86 rpm</div>
            </div>
          </div>

          {/* Mini navigation trail indicator */}
          <div className="p-2 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Próxima rampa en 400m</span>
            </div>
            <span className="font-mono text-amber-400">+8.5%</span>
          </div>

          {/* Controls: Pause / Lap */}
          <div className="flex items-center gap-2 pt-1">
            <button className="flex-1 py-2.5 rounded-xl bg-neutral-800 text-xs font-bold text-slate-200">
              Vuelta / Lap
            </button>
            <button className="flex-1 py-2.5 rounded-xl bg-emerald-400 text-xs font-bold text-black flex items-center justify-center gap-1">
              <Pause className="w-3.5 h-3.5" /> Pausar
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: '3. Análisis post-ruta',
      tagline: 'Métricas completas y feedback del Coach',
      screenContent: (
        <div className="flex flex-col h-full bg-[#0A0D12] text-white p-3.5 select-none justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              Ruta Finalizada
            </span>
            <span className="text-[10px] font-mono text-slate-400">Guardado en nube</span>
          </div>

          {/* Achievement card */}
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <div className="text-xs font-bold text-emerald-300">¡Nuevo Récord Personal!</div>
            <div className="text-[11px] text-slate-300 mt-0.5">
              Mejor tiempo en Subida al Castillo (-42s)
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
            <div className="p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-slate-400">Media</div>
              <div className="font-mono font-bold">22.4 km/h</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-slate-400">Desnivel</div>
              <div className="font-mono font-bold text-emerald-400">+512 m</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5">
              <div className="text-[10px] text-slate-400">Calorías</div>
              <div className="font-mono font-bold">920 kcal</div>
            </div>
          </div>

          {/* Coach Insight bubble */}
          <div className="p-3 rounded-xl bg-neutral-900 border border-white/10">
            <div className="text-[10px] font-mono text-emerald-400 uppercase font-semibold mb-1">
              Conclusión del Coach
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              “Excelente gestión del esfuerzo en la segunda mitad. Mantuviste una
              cadencia regular sin picos excesivos de frecuencia cardíaca.”
            </p>
          </div>

          {/* Export button */}
          <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/10">
            Exportar GPX / Compartir
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Diseño Centrado en el Manillar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Tu móvil se convierte en tu ciclocomputador.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Una experiencia fluida que te acompaña antes de subirte a la bici,
            durante los tramos más duros de la ruta y en el análisis tranquilo en
            casa.
          </p>
        </div>

        {/* Mobile View: Interactive Tab Switcher */}
        <div className="lg:hidden mb-8">
          <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
            {phoneScreens.map((screen) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveMobileTab(screen.id)}
                className={`flex-1 py-2 px-1 text-center text-xs font-semibold rounded-lg transition-colors truncate ${
                  activeMobileTab === screen.id
                    ? 'bg-emerald-400 text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {screen.title.split('. ')[1]}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center mt-2 font-mono">
            {phoneScreens[activeMobileTab].tagline}
          </p>
        </div>

        {/* Mobile View: Single Centered Phone Container */}
        <div className="lg:hidden flex justify-center">
          <div className="w-[300px] sm:w-[320px] rounded-[38px] p-2.5 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-white/20 shadow-2xl">
            <div className="rounded-[30px] overflow-hidden aspect-[9/18] bg-black border border-white/10 relative">
              {phoneScreens[activeMobileTab].screenContent}
            </div>
          </div>
        </div>

        {/* Desktop View: 3 Floating Staggered Phones */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-center pt-8">
          {phoneScreens.map((screen, idx) => {
            const isCenter = idx === 1;
            return (
              <div
                key={screen.id}
                className={`flex flex-col items-center transition-all duration-300 ${
                  isCenter
                    ? 'transform -translate-y-4 scale-105 z-20'
                    : 'opacity-90 hover:opacity-100 transform hover:-translate-y-2 z-10'
                }`}
              >
                <div className="mb-4 text-center">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    {screen.title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {screen.tagline}
                  </div>
                </div>

                {/* Phone Hardware Chassis */}
                <div
                  className={`w-[290px] rounded-[38px] p-2 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-white/20 shadow-2xl ${
                    isCenter ? 'ring-2 ring-emerald-400/30' : ''
                  }`}
                >
                  <div className="rounded-[30px] overflow-hidden aspect-[9/18] bg-black border border-white/10 relative">
                    {screen.screenContent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

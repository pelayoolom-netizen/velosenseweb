import React, { useState } from 'react';
import {
  Navigation,
  Gauge,
  MapPin,
  TrendingUp,
  Activity,
  Flame,
  ArrowUpRight,
  Zap,
  Mountain,
  Layers,
  Compass,
} from 'lucide-react';

export const FeatureCards: React.FC = () => {
  // Interactive state for Performance Metrics card
  const [metricTab, setMetricTab] = useState<'actual' | 'resumen'>('actual');

  return (
    <section id="funciones" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            Capacidades VeloSense
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Todo tu entrenamiento. <br />
            <span className="text-slate-400">En un solo lugar.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Diseñado para ciclistas exigentes. Cada pantalla, cada sensor y cada
            métrica optimizada para que leas tus datos al instante sin perder de
            vista el camino.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: GPS EN TIEMPO REAL (Large Col 7) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover border border-white/10 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                  <Navigation className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>GPS 1Hz Ultra-Preciso</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                GPS en tiempo real
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Convierte tu teléfono en un ciclocomputador. Consulta tu
                posición, velocidad, distancia, tiempo y desnivel mientras
                pedaleas con actualización instantánea y modo de alto contraste.
              </p>
            </div>

            {/* Visual Graphic: Live GPS Cockpit interface */}
            <div className="mt-2 rounded-xl bg-[#090C10] border border-white/10 p-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-slate-200">
                    Puerto de Navacerrada · Km 14.2
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  +1.120m snm
                </span>
              </div>

              {/* Cockpit HUD numbers */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-[10px] text-slate-400 font-medium uppercase mb-0.5">
                    Velocidad
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                    31.8 <span className="text-xs font-normal text-slate-400">km/h</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-[10px] text-slate-400 font-medium uppercase mb-0.5">
                    Distancia
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                    34.6 <span className="text-xs font-normal text-slate-400">km</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-[10px] text-slate-400 font-medium uppercase mb-0.5">
                    Tiempo
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                    1:18:40
                  </div>
                </div>

                <div className="hidden sm:block p-2.5 rounded-lg bg-white/5">
                  <div className="text-[10px] text-slate-400 font-medium uppercase mb-0.5">
                    Desnivel +
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-300 tabular-nums">
                    +620 <span className="text-xs font-normal text-slate-400">m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: MÉTRICAS DE RENDIMIENTO (Col 5) */}
          <div id="metricas" className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover border border-white/10 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                  <Gauge className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setMetricTab('actual')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      metricTab === 'actual'
                        ? 'bg-emerald-400 text-black font-semibold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    En vivo
                  </button>
                  <button
                    type="button"
                    onClick={() => setMetricTab('resumen')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      metricTab === 'resumen'
                        ? 'bg-emerald-400 text-black font-semibold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Totales
                  </button>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Métricas de rendimiento
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Monitoriza cada variable biomecánica y ambiental con precisión
                de competición.
              </p>
            </div>

            {/* Grid of 9 detailed metrics required by prompt */}
            <div className="grid grid-cols-3 gap-2 text-left">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Vel. actual</span>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  {metricTab === 'actual' ? '28.4' : '23.6'}{' '}
                  <span className="text-[10px] font-normal text-slate-400">km/h</span>
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Vel. máxima</span>
                <span className="font-mono text-base font-bold text-emerald-400 tabular-nums">
                  54.2 <span className="text-[10px] font-normal text-slate-400">km/h</span>
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Distancia</span>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  42.8 <span className="text-[10px] font-normal text-slate-400">km</span>
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Tiempo</span>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  1:42:15
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Desnivel +</span>
                <span className="font-mono text-base font-bold text-emerald-300 tabular-nums">
                  +785 m
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Desnivel -</span>
                <span className="font-mono text-base font-bold text-teal-300 tabular-nums">
                  -510 m
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Potencia est.</span>
                <span className="font-mono text-base font-bold text-amber-300 tabular-nums">
                  245 W
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Cadencia</span>
                <span className="font-mono text-base font-bold text-cyan-300 tabular-nums">
                  88 rpm
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block truncate">Calorías</span>
                <span className="font-mono text-base font-bold text-rose-300 tabular-nums">
                  1.042 kcal
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: MAPA Y RUTA (Col 6) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover border border-white/10 group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Mapa y ruta en vivo
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Visualiza tu recorrido mientras pedaleas y analiza por dónde has
                pasado. Dibuja tu trazado GPX en pantalla completa con gradiente
                de pendiente según la dureza del terreno.
              </p>
            </div>

            {/* Stylized map visualization with SVG elevation gradient */}
            <div className="rounded-xl bg-[#090C12] border border-white/10 p-3 h-52 relative overflow-hidden flex flex-col justify-between">
              {/* Map grid lines */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  Calar Alto · 1.840m
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  Pendiente media: 7.4%
                </span>
              </div>

              {/* Glowing Route Trail */}
              <svg viewBox="0 0 400 120" className="w-full h-28 relative z-10 my-auto">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="35%" stopColor="#34D399" />
                    <stop offset="70%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20,80 Q 80,10 140,60 T 260,30 T 380,50"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Waypoint markers */}
                <circle cx="20" cy="80" r="5" fill="#10B981" stroke="#FFF" strokeWidth="2" />
                <circle cx="140" cy="60" r="4" fill="#34D399" />
                <circle cx="260" cy="30" r="4" fill="#F59E0B" />
                <circle cx="380" cy="50" r="6" fill="#EF4444" stroke="#FFF" strokeWidth="2" />
              </svg>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Llano
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Subida
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Rampa &gt;12%
                  </span>
                </div>
                <span className="font-mono text-slate-300">38.2 km totales</span>
              </div>
            </div>
          </div>

          {/* Card 4: ANÁLISIS DE LA RUTA (Col 6) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover border border-white/10 group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Análisis de la ruta post-entreno
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Al terminar una actividad obtén el resumen completo: distancia,
                duración, velocidad media y máxima, desnivel, vatios, cadencia,
                calorías y gráfica interactiva de rendimiento.
              </p>
            </div>

            {/* Post-ride summary card */}
            <div className="rounded-xl bg-[#090C12] border border-white/10 p-4">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-bold text-white">Resumen Actividad #148</span>
                <span className="text-emerald-400 font-mono text-[11px]">
                  Rendimiento: 94% sobre objetivo
                </span>
              </div>

              {/* Miniature elevation profile with interactive hover */}
              <div className="h-16 w-full flex items-end gap-1 mb-3 pt-2">
                {[20, 35, 28, 45, 60, 80, 95, 70, 85, 90, 65, 40, 50, 30].map(
                  (val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-emerald-500/20 hover:bg-emerald-400 transition-colors rounded-t cursor-pointer relative group/bar"
                      style={{ height: `${val}%` }}
                    >
                      <div className="opacity-0 group-hover/bar:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-black px-1.5 py-0.5 rounded text-[9px] font-mono text-emerald-300 pointer-events-none whitespace-nowrap z-20 border border-white/15">
                        +{val * 8}m
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-xs pt-2 border-t border-white/5">
                <div>
                  <div className="text-[10px] text-slate-400">Media</div>
                  <div className="font-mono font-bold text-white text-xs">24.8 km/h</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Desnivel</div>
                  <div className="font-mono font-bold text-emerald-400 text-xs">+912 m</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Potencia</div>
                  <div className="font-mono font-bold text-amber-300 text-xs">224 W</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Calorías</div>
                  <div className="font-mono font-bold text-white text-xs">1.180 kcal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

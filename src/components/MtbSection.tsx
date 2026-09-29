import React from 'react';
import { Mountain, Trees, Compass, Timer, Activity, Zap, Shield, ArrowUpRight } from 'lucide-react';
import mtbTrailImage from '../assets/images/mtb_trail_ridge_1790696295422.jpg';
import mtbRiderImage from '../assets/images/hero_mtb_rider_1790696277596.jpg';

export const MtbSection: React.FC = () => {
  const mtbHighlights = [
    {
      icon: Trees,
      title: 'Senderos & Singletracks',
      description:
        'Lectura precisa de caminos forestales, trialeras y senderos estrechos donde el GPS estándar suele perder precisión.',
    },
    {
      icon: Mountain,
      title: 'Desnivel y pendientes extremas',
      description:
        'Cálculo barométrico y topográfico instantáneo para anticipar rampas duras y gestionar tus desarrollos con antelación.',
    },
    {
      icon: Timer,
      title: 'Segmentos de esfuerzo',
      description:
        'Cronometraje automático en subidas técnicas y descensos para medir tu progresión respecto a salidas anteriores.',
    },
    {
      icon: Activity,
      title: 'Análisis post-montaña',
      description:
        'Desglose específico para MTB: tiempo rodando vs. tiempo en rampa empinada, velocidad en bajada y consumo de batería optimizado.',
    },
  ];

  return (
    <section id="mtb" className="py-24 relative overflow-hidden bg-[#0A0D12] border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <span>Puro Ciclismo de Montaña</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Pensado para MTB.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            VeloSense está diseñado para acompañarte tanto en tus entrenamientos
            como en tus rutas por montaña. Resistente a pérdidas de cobertura,
            optimizado para consumo de batería bajo vibración y con interfaz
            legible incluso con barro y guantes.
          </p>
        </div>

        {/* Dynamic Composition: Image Card + Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase Card with High-Res MTB Photo & Overlaid Telemetry */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl aspect-[16/10]">
              <img
                src={mtbTrailImage}
                alt="Ciclista de montaña en descenso técnico por cresta alpina"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Cinematic Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Overlaid Live Cockpit Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs text-white font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>MODO DESCENSO ACTIVO</span>
                </div>
                <div className="bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs text-emerald-400 font-mono font-bold">
                  Inclinación: -18%
                </div>
              </div>

              {/* Bottom Card HUD info */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        Pico Descenso
                      </div>
                      <div className="font-mono text-xl sm:text-2xl font-black text-white">
                        46.8 <span className="text-xs font-normal text-slate-400">km/h</span>
                      </div>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        Desnivel Negativo
                      </div>
                      <div className="font-mono text-xl sm:text-2xl font-black text-teal-300">
                        -580 <span className="text-xs font-normal text-slate-400">m</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
                      Segmento: Trialera del Lobo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inset Secondary Thumbnail (Rider in pine mist) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
              <img
                src={mtbRiderImage}
                alt="Ciclista rodando en bosque de pinos"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/90">
                Pistas forestales
              </span>
            </div>
          </div>

          {/* Right Column: 4 MTB Core Features */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {mtbHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-5 border border-white/10 glass-panel-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 tracking-tight group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { VeloSenseLogo } from './VeloSenseLogo';
import { Bot, User, Sparkles, MessageSquare, ArrowRight, Zap, Target } from 'lucide-react';

interface ConversationScenario {
  id: string;
  title: string;
  tag: string;
  userMessage: string;
  userSubtext: string;
  coachResponse: string;
  coachTips: string[];
}

export const InteractiveCoach: React.FC = () => {
  const scenarios: ConversationScenario[] = [
    {
      id: 'desnivel',
      title: 'Ruta con desnivel',
      tag: '20.4 km · +342 m',
      userMessage: 'Hoy he hecho 20 km con bastante desnivel. ¿Cómo lo ves?',
      userSubtext: 'Salida de tarde · MTB pista forestal · Tiempo: 1h 04m',
      coachResponse:
        'Buen trabajo. Has acumulado 342 m de desnivel positivo para una distancia de 20 km, lo que representa una pendiente media notable. Mantuviste un ritmo sólido con una velocidad media de 19 km/h en terreno técnico.',
      coachTips: [
        'En los últimos 4 km tu cadencia bajó de 85 a 68 rpm: señal de fatiga en el tren inferior.',
        'Para tu próxima salida te recomiendo una sesión de 45 minutos en zona 2 (llano) enfocada en rodar fluido a 90 rpm para regenerar piernas.',
      ],
    },
    {
      id: 'potencia',
      title: 'Series de intensidad',
      tag: 'Intervalos · 235W avg',
      userMessage: 'Hice 5 series de 3 minutos en subida. ¿He forzado demasiado el pulso?',
      userSubtext: 'Entrenamiento por intervalos · Frecuencia cardíaca máx: 174 ppm',
      coachResponse:
        'Tus 5 intervalos estuvieron bien estructurados. La recuperación entre cada repetición fue eficiente: tu frecuencia cardíaca descendió 32 ppm en el primer minuto tras cada serie, indicando una buena base aeróbica.',
      coachTips: [
        'En la cuarta serie hubo un pico de 310W pero decaíste en los últimos 30 segundos.',
        'Intenta dosificar 10W menos al arrancar la serie para completar los 3 minutos sin caída de potencia.',
      ],
    },
    {
      id: 'recuperacion',
      title: 'Planificación de descanso',
      tag: 'Carga semanal · 142 km',
      userMessage: 'Llevo 4 días seguidos rodando y noto las piernas pesadas. ¿Salgo mañana?',
      userSubtext: 'Carga acumulada: 6h 30m · 2.100 m acumulados',
      coachResponse:
        'Los datos de tus últimas dos rutas muestran un incremento del 18% en la potencia normalizada con mayor pulso basal. Tu cuerpo te está avisando de que el ratio de fatiga supera la adaptación.',
      coachTips: [
        'Lo más inteligente mañana es descanso total o 30 minutos de estiramientos y movilidad articular.',
        'Volverás el fin de semana con las reservas de glucógeno al 100% para aprovechar la tirada larga.',
      ],
    },
  ];

  const [activeScenario, setActiveScenario] = useState<ConversationScenario>(scenarios[0]);

  return (
    <section id="coach" className="py-24 relative overflow-hidden bg-[#0A0C10] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Scenario Selector */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Entrenador Deportivo Integrado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Un entrenador que <br />
              <span className="text-emerald-400">aprende contigo.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              El Coach analiza tus entrenamientos y adapta sus recomendaciones a
              tu nivel, tus objetivos y tu evolución. Sin frases motivacionales
              vacías: respuestas técnicas basadas en tu desnivel, cadencia y
              ritmo real.
            </p>

            {/* Scenario Selector Tabs */}
            <div className="w-full flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Ejemplos de análisis en ruta:
              </span>
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveScenario(sc)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    activeScenario.id === sc.id
                      ? 'bg-emerald-500/10 border-emerald-400/40 text-white'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {sc.title}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {sc.tag}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      activeScenario.id === sc.id
                        ? 'text-emerald-400 translate-x-1'
                        : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Chat Dialogue Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black border border-white/10 p-2 flex items-center justify-center text-emerald-400">
                    <VeloSenseLogo size="sm" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>VeloSense Coach</span>
                      <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                        IA Especializada en Ciclismo
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Entrenador personal para tus salidas
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Listo para analizar</span>
                </div>
              </div>

              {/* Chat Bubbles */}
              <div className="flex flex-col gap-6">
                {/* Cyclist User Message */}
                <div className="flex items-start gap-3.5 self-end max-w-xl">
                  <div className="flex flex-col items-end">
                    <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-100 rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed shadow-sm">
                      <p className="font-medium text-white">
                        “{activeScenario.userMessage}”
                      </p>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 font-mono">
                      {activeScenario.userSubtext}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Coach Response */}
                <div className="flex items-start gap-3.5 self-start max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <div className="bg-[#121620] border border-white/10 text-slate-200 rounded-2xl rounded-tl-sm p-4 sm:p-5 text-sm leading-relaxed shadow-md">
                      <p className="text-slate-100 mb-3 font-normal">
                        {activeScenario.coachResponse}
                      </p>

                      {/* Coach Actionable Recommendations */}
                      <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2 mt-3">
                        <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Recomendaciones para tu próxima salida:</span>
                        </div>
                        {activeScenario.coachTips.map((tip, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-300 leading-snug"
                          >
                            <span className="text-emerald-400 font-bold shrink-0">
                              •
                            </span>
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1.5 pl-2 font-mono">
                      Análisis generado a partir de tu archivo GPX / Telemetría
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

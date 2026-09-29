import React, { useState } from 'react';
import { Bike, BarChart2, BrainCircuit, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Pedalea',
      subtitle: 'Inicia la actividad con un toque',
      description:
        'Inicia una actividad y deja que VeloSense registre tus datos. Coloca tu teléfono en el manillar y disfruta de la ruta con la pantalla optimizada para legibilidad a plena luz del sol.',
      icon: Bike,
      badge: 'Grabación GPX continua',
      highlight: 'Sin desconexiones ni pérdida de señal',
    },
    {
      number: '2',
      title: 'Analiza',
      subtitle: 'Inspecciona cada rampa y segmento',
      description:
        'Revisa todos los datos de tu ruta. Desde el perfil de elevación y los picos de velocidad hasta la distribución de zonas de frecuencia cardíaca y potencia estimada.',
      icon: BarChart2,
      badge: 'Telemetría al detalle',
      highlight: 'Gráficas interactivas punto a punto',
    },
    {
      number: '3',
      title: 'Entiende',
      subtitle: 'Interpretación biomecánica real',
      description:
        'El Coach interpreta tu entrenamiento. Convierte tablas complejas de datos en conclusiones directas: nivel de fatiga acumulada, eficiencia en subidas y regularidad de pedaleo.',
      icon: BrainCircuit,
      badge: 'Síntesis deportiva instantánea',
      highlight: 'Detección automática de fatiga',
    },
    {
      number: '4',
      title: 'Mejora',
      subtitle: 'Evolución guiada para tu próxima salida',
      description:
        'Utiliza las recomendaciones para tu siguiente salida. Ajusta tu cadencia en rampas duras, planifica descansos necesarios y supera tus marcas de forma progresiva.',
      icon: Trophy,
      badge: 'Progreso constante',
      highlight: 'Consejos adaptados a tu nivel',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0C11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            El Ciclo de Entrenamiento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Después de cada ruta.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Una experiencia continua diseñada para que cada salida sume a tu
            rendimiento sobre la bicicleta.
          </p>
        </div>

        {/* Desktop Horizontal Stepper & Mobile Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCurrent = activeStep === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-b from-[#141A24] to-[#0E121A] border-emerald-400/50 shadow-xl shadow-emerald-500/10 -translate-y-1'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  {/* Step Top Lockup */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-mono text-2xl font-black ${
                        isCurrent ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      0{step.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                        isCurrent
                          ? 'bg-emerald-400 text-black border-emerald-300 shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-slate-400">
                    {step.badge}
                  </span>
                  {isCurrent && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-8 glass-panel rounded-2xl p-6 border border-emerald-500/20 bg-emerald-950/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 block font-semibold">
                Fase 0{steps[activeStep].number} · {steps[activeStep].title}
              </span>
              <span className="text-sm font-medium text-white">
                {steps[activeStep].highlight}
              </span>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Paso {activeStep + 1} de 4 en el flujo VeloSense
          </div>
        </div>
      </div>
    </section>
  );
};

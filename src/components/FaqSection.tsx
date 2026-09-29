import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { APP_CONFIG, APK_DOWNLOAD_URL } from '../config/download';

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: '¿Qué es VeloSense?',
      answer:
        'VeloSense es una aplicación móvil de ciclismo que convierte tu teléfono en un auténtico ciclocomputador inteligente. Permite registrar tus rutas con GPS en tiempo real, visualizar telemetría avanzada (velocidad, cadencia, potencia estimada, desniveles) y analizar tus progresos con un coach deportivo adaptado a tu manera de pedalear.',
    },
    {
      question: '¿Funciona con MTB (bicicleta de montaña)?',
      answer:
        'Sí. Está diseñada específicamente para rendir al máximo tanto en rutas de carretera como en montaña (MTB, gravel y enduro). Cuenta con lectura optimizada para senderos, perfiles de desnivel acusados y una interfaz de alto contraste fácil de consultar sobre el manillar.',
    },
    {
      question: '¿Necesito sensores externos para usarla?',
      answer:
        'No para las funciones básicas de GPS, velocidad, distancia, tiempo, altitud y trazado de ruta en el mapa. Si deseas métricas adicionales como cadencia de biela o pulsaciones cardíacas exactas, puedes conectar sensores externos compatibles mediante Bluetooth Low Energy (BLE).',
    },
    {
      question: '¿Puedo descargarla en Android?',
      answer: (
        <span>
          Sí. VeloSense está desarrollada para dispositivos Android ({APP_CONFIG.minAndroidVersion}). Puedes descargar directamente el archivo instalador pulsando el botón{' '}
          <a
            href={APK_DOWNLOAD_URL}
            download="VeloSense.apk"
            className="text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-300"
          >
            DESCARGAR APK
          </a>{' '}
          en esta página web.
        </span>
      ),
    },
    {
      question: '¿Es gratuita?',
      answer: (
        <span>
          {APP_CONFIG.isFree ? (
            <>
              Actualmente VeloSense se distribuye en modalidad de{' '}
              <strong className="text-white font-semibold">
                {APP_CONFIG.pricingModel}
              </strong>
              , por lo que puedes descargar y probar la versión completa sin coste alguno durante la fase beta actual.
            </>
          ) : (
            `Información de precio sujeta a la versión oficial ${APP_CONFIG.version}.`
          )}
        </span>
      ),
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Resolución de dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Preguntas frecuentes.
          </h2>
          <p className="text-base text-slate-300">
            Todo lo que necesitas saber antes de instalar VeloSense en tu
            dispositivo Android.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400 border-emerald-400/30' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

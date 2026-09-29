import React from 'react';
import { Download, ArrowUp, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { APK_DOWNLOAD_URL, APP_CONFIG } from '../config/download';
import { VeloSenseLogo } from './VeloSenseLogo';

export const CtaSection: React.FC = () => {
  const scrollToTop = () => {
    const el = document.getElementById('funciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#08090C] via-[#0C1017] to-[#08090C] border-t border-white/10">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Brand Icon floating */}
        <div className="inline-flex mb-8">
          <VeloSenseLogo size="lg" withBackground />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 max-w-3xl mx-auto text-balance">
          ¿Listo para salir a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
            pedalear?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Descubre lo que puedes hacer con VeloSense. Instala la aplicación en tu
          dispositivo Android y empieza a registrar tus rutas hoy mismo.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <a
            href={APK_DOWNLOAD_URL}
            download="VeloSense.apk"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 text-base font-extrabold text-black bg-emerald-400 hover:bg-emerald-300 rounded-2xl transition-all duration-200 shadow-2xl shadow-emerald-500/25 active:scale-95 text-center"
          >
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span>DESCARGAR VELOSENSE APK</span>
            <span className="hidden group-hover:inline-block transition-transform duration-200 transform translate-x-1">
              →
            </span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4.5 text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-200 active:scale-95"
          >
            <span>Ver funcionalidades</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Download metadata badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-6 border-t border-white/5 max-w-2xl mx-auto">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{APP_CONFIG.minAndroidVersion}</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tamaño: {APP_CONFIG.fileSize}</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paquete firmado y seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

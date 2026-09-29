import React from 'react';
import { VeloSenseLogo } from './VeloSenseLogo';
import { APK_DOWNLOAD_URL, APP_CONFIG } from '../config/download';
import { Download, ArrowUp, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4">
              <VeloSenseLogo size="sm" withBackground />
              <span className="text-xl font-bold tracking-tight text-white">
                VELO<span className="text-emerald-400">SENSE</span>
              </span>
            </a>
            <p className="text-sm text-slate-300 font-medium mb-2">
              “Tu bicicleta. Tus datos. Tu evolución.”
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              La plataforma que convierte tu teléfono móvil en un ciclocomputador
              avanzado para ciclistas de carretera, montaña y gravel.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Versión {APP_CONFIG.version} · Android APK</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#funciones" className="hover:text-emerald-400 transition-colors">
                  Funciones
                </a>
              </li>
              <li>
                <a href="#coach" className="hover:text-emerald-400 transition-colors">
                  Coach
                </a>
              </li>
              <li>
                <a href="#integraciones" className="hover:text-emerald-400 transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacidad" className="hover:text-emerald-400 transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Download Col */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Descarga Oficial
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Descarga directa del paquete APK sin suscripciones ni publicidad intrusiva.
            </p>

            <a
              href={APK_DOWNLOAD_URL}
              download="VeloSense.apk"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md mb-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar APK ({APP_CONFIG.fileSize})</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>© 2026 VeloSense. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#privacidad" className="hover:text-slate-300 transition-colors">
              Permisos del Dispositivo
            </a>
            <span>·</span>
            <span className="text-slate-400">Hecho para ciclistas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

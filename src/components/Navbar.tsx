import React, { useState, useEffect } from 'react';
import { VeloSenseLogo } from './VeloSenseLogo';
import { APK_DOWNLOAD_URL, APP_CONFIG } from '../config/download';
import { Download, Menu, X, ArrowRight, Smartphone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single clean Brand Wordmark & Icon */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
            aria-label="VeloSense Inicio"
          >
            <VeloSenseLogo size="sm" withBackground />
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Velo<span className="text-emerald-400">Sense</span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#funciones"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Funciones
            </a>
            <a
              href="#metricas"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Métricas
            </a>
            <a
              href="#coach"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Coach IA
            </a>
            <a
              href="#mtb"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Modo MTB
            </a>
            <a
              href="#integraciones"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Integraciones
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APK_DOWNLOAD_URL}
              download="VeloSense.apk"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 shadow-md hover:shadow-emerald-500/20 active:scale-95 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>Descargar APK</span>
              <span className="hidden group-hover:inline-block transition-transform duration-200 transform translate-x-0.5">
                →
              </span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={APK_DOWNLOAD_URL}
              download="VeloSense.apk"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-emerald-400 rounded-lg whitespace-nowrap"
            >
              <Download className="w-3 h-3" />
              <span>APK</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D0F14] border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200 mb-5">
            <a
              href="#funciones"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Funciones
            </a>
            <a
              href="#metricas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Métricas
            </a>
            <a
              href="#coach"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Coach Inteligente
            </a>
            <a
              href="#mtb"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Pensado para MTB
            </a>
            <a
              href="#integraciones"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Integraciones
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10">
            <a
              href={APK_DOWNLOAD_URL}
              download="VeloSense.apk"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-black bg-emerald-400 rounded-lg shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>DESCARGAR APK ({APP_CONFIG.fileSize})</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs text-slate-400">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{APP_CONFIG.minAndroidVersion}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

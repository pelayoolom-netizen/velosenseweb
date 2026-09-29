import React from 'react';
import { Bluetooth, Heart, Share2, ShieldCheck, Lock } from 'lucide-react';

export const Integrations: React.FC = () => {
  const integrations = [
    {
      icon: Bluetooth,
      title: 'Sensores Bluetooth BLE',
      status: 'Compatible',
      statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      description:
        'Compatibilidad preparada para vincular sensores de cadencia, velocidad de rueda y potenciómetros compatibles con el protocolo estándar Bluetooth Low Energy.',
      tag: 'BLE Cycling Speed & Cadence',
    },
    {
      icon: Heart,
      title: 'Frecuencia cardíaca',
      status: 'Compatible',
      statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      description:
        'Lectura y visualización en tiempo real de pulsaciones por minuto (ppm) mediante bandas pectorales y brazaletes ópticos Bluetooth compatibles.',
      tag: 'Heart Rate Profile (HRP)',
    },
    {
      icon: Share2,
      title: 'Sincronización con Strava',
      status: 'Próximamente · En desarrollo',
      statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      description:
        'Integración en desarrollo para exportación automática de actividades y segmentos. Actualmente puedes exportar tus archivos .GPX manualmente a cualquier plataforma.',
      tag: 'En fase de desarrollo activo',
    },
    {
      icon: ShieldCheck,
      title: 'Acceso seguro con Google',
      status: 'Autenticación',
      statusColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
      description:
        'Inicio de sesión rápido y seguro con tu cuenta de Google para respaldar tus estadísticas, historial de salidas y preferencias en la nube.',
      tag: 'Google Identity Services',
    },
  ];

  return (
    <section id="integraciones" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            Conectividad & Compatibilidad
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Conecta tu ecosistema.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            VeloSense aprovecha las capacidades de hardware de tu teléfono y se
            comunica con tus sensores preferidos mediante protocolos
            inalámbricos abiertos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between glass-panel-hover border border-white/10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-emerald-400 group-hover:border-emerald-400/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

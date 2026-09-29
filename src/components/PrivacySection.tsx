import React from 'react';
import { ShieldCheck, MapPin, Bluetooth, HardDrive, Lock } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const permissions = [
    {
      icon: MapPin,
      title: 'Permiso de Ubicación (GPS)',
      detail:
        'Necesario exclusivamente para registrar tu recorrido, velocidad en vivo y perfil altimétrico mientras la grabación esté activa.',
    },
    {
      icon: Bluetooth,
      title: 'Permiso de Dispositivos Cercanos (Bluetooth)',
      detail:
        'Requerido en Android si deseas emparejar bandas de frecuencia cardíaca o sensores de cadencia/velocidad BLE compatibles.',
    },
    {
      icon: HardDrive,
      title: 'Almacenamiento Local',
      detail:
        'Utilizado para guardar tus archivos de ruta en formato .GPX y permitirte exportarlos o compartirlos en cualquier momento.',
    },
  ];

  return (
    <section id="privacidad" className="py-20 relative overflow-hidden bg-[#0A0C11] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transparencia & Permisos Android</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Tus datos, bajo control.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              VeloSense opera de forma local en tu dispositivo y solo solicita los
              permisos indispensables para el registro de telemetría deportiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {permissions.map((perm, idx) => {
              const Icon = perm.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-tight">
                      {perm.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {perm.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

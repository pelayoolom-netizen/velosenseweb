import React, { useState, useEffect } from 'react';
import { APK_DOWNLOAD_URL, APP_CONFIG } from '../config/download';
import {
  Download,
  ChevronDown,
  Navigation,
  Activity,
  Zap,
  Wind,
  Thermometer,
  Play,
  Pause,
  Mountain,
  Compass,
  Radio,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  // Live simulation states for the smartphone mockup
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(27.4);
  const [distance, setDistance] = useState(18.42);
  const [seconds, setSeconds] = useState(2895); // ~48m 15s
  const [cadence, setCadence] = useState(86);
  const [power, setPower] = useState(218);
  const [elevation, setElevation] = useState(384);
  const [heartRate, setHeartRate] = useState(148);

  // Live telemetry pulse effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSpeed((prev) => {
        const delta = (Math.random() - 0.48) * 1.2;
        const next = Math.max(16.5, Math.min(39.8, prev + delta));
        return parseFloat(next.toFixed(1));
      });
      setCadence((prev) => {
        const delta = Math.floor((Math.random() - 0.48) * 4);
        return Math.max(72, Math.min(104, prev + delta));
      });
      setPower((prev) => {
        const delta = Math.floor((Math.random() - 0.45) * 12);
        return Math.max(160, Math.min(340, prev + delta));
      });
      setHeartRate((prev) => {
        const delta = Math.floor((Math.random() - 0.48) * 2);
        return Math.max(136, Math.min(168, prev + delta));
      });
      setDistance((prev) => parseFloat((prev + 0.01).toFixed(2)));
      setSeconds((prev) => prev + 1);
    }, 1200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      {/* Background radial gradients & subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[100px]" />
        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Editorial brand kicker without pill box */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Android Ciclocomputador & MTB</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 font-mono tracking-normal">{APP_CONFIG.version}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 max-w-2xl text-balance">
              <span className="block text-slate-400 text-2xl sm:text-3xl font-bold tracking-wider mb-2">
                VELO SENSE
              </span>
              Tu bicicleta. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                Tus datos. Tu evolución.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-9">
              Convierte tu móvil en un auténtico ciclocomputador inteligente.
              Registra tus rutas, analiza tu rendimiento y entrena con un coach
              que entiende cómo pedaleas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={APK_DOWNLOAD_URL}
                download="VeloSense.apk"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-xl shadow-emerald-500/20 active:scale-95 text-center"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>DESCARGAR APK</span>
                <span className="font-mono text-xs opacity-75 font-normal">
                  ({APP_CONFIG.fileSize})
                </span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#funciones"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 active:scale-95 text-center"
              >
                <span>Explorar funciones</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Platform Trust & Technical Spec */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-2 border-t border-white/5 w-full max-w-lg">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Instalación directa sin intermediarios</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span>{APP_CONFIG.minAndroidVersion}</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span>100% en español</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Real-Time Cycling Telemetry */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-teal-500/0 rounded-[48px] blur-2xl -z-10" />

              {/* Phone Hardware Chassis */}
              <div className="relative rounded-[42px] p-2.5 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-white/20 shadow-2xl shadow-black/80">
                {/* Physical button cutouts */}
                <div className="absolute -left-[3px] top-28 w-[3px] h-9 bg-neutral-600 rounded-l" />
                <div className="absolute -left-[3px] top-40 w-[3px] h-9 bg-neutral-600 rounded-l" />
                <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-neutral-600 rounded-r" />

                {/* Inner Screen Display */}
                <div className="relative rounded-[34px] overflow-hidden bg-[#0A0D12] border border-white/10 text-white flex flex-col aspect-[9/18.5] select-none">
                  {/* Status bar of the phone */}
                  <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-medium text-slate-400 border-b border-white/5">
                    <span className="font-mono text-slate-200">10:42</span>
                    <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neutral-800" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                      <span>GPS 3D</span>
                      <span className="text-emerald-400 font-bold">98%</span>
                    </div>
                  </div>

                  {/* Top Bar inside app */}
                  <div className="px-4 py-2 flex items-center justify-between bg-black/40 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold tracking-tight text-white">
                        MTB · Singletrack Sur
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-[10px] font-mono text-slate-200 flex items-center gap-1 transition-colors"
                      title={isPlaying ? "Pausar simulación" : "Reanudar simulación"}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                          <span>Reanudar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Stylized GPS Map Canvas */}
                  <div className="relative h-44 w-full bg-[#0D1117] overflow-hidden border-b border-white/10">
                    {/* Topographical contour vector lines */}
                    <svg
                      viewBox="0 0 320 180"
                      className="w-full h-full object-cover opacity-35"
                    >
                      <path
                        d="M -20,90 Q 60,30 160,80 T 340,40"
                        fill="none"
                        stroke="#334155"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M -20,130 Q 80,70 180,120 T 340,90"
                        fill="none"
                        stroke="#334155"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M -20,160 Q 100,110 200,150 T 340,130"
                        fill="none"
                        stroke="#334155"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M 40,0 Q 120,60 160,180"
                        fill="none"
                        stroke="#1E293B"
                        strokeWidth="1"
                      />
                      <path
                        d="M 220,0 Q 240,90 280,180"
                        fill="none"
                        stroke="#1E293B"
                        strokeWidth="1"
                      />

                      {/* GPS Route Trail (Neon Emerald Path) */}
                      <path
                        d="M 30,140 C 70,130 90,80 140,95 C 190,110 210,60 280,45"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_#10B981]"
                      />

                      {/* Current Rider Position Indicator */}
                      <g transform="translate(225, 57)">
                        <circle r="9" fill="#10B981" fillOpacity="0.25" className="animate-ping" />
                        <circle r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                      </g>
                    </svg>

                    {/* Quick map overlays */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                      <Compass className="w-3 h-3 text-emerald-400" />
                      <span>Ruta Activa · 32% pendiente</span>
                    </div>

                    <div className="absolute bottom-2 right-2.5 flex items-center gap-2 text-[10px] font-mono text-slate-300">
                      <div className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
                        <Thermometer className="w-3 h-3 text-amber-400" />
                        <span>19°C</span>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
                        <Wind className="w-3 h-3 text-cyan-400" />
                        <span>8 km/h NO</span>
                      </div>
                    </div>
                  </div>

                  {/* High-Impact Main Speedometer */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div className="text-center py-2 relative">
                      <div className="flex items-baseline justify-center">
                        <span className="font-mono text-6xl font-black tracking-tight text-white tabular-nums drop-shadow-md">
                          {speed.toFixed(1)}
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 ml-1.5 uppercase tracking-wider">
                          km/h
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        Velocidad actual
                      </div>
                    </div>

                    {/* Secondary 4-Metric Grid */}
                    <div className="grid grid-cols-2 gap-2 my-1">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
                          <span>DISTANCIA</span>
                          <Navigation className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="font-mono text-lg font-bold text-white tabular-nums">
                          {distance.toFixed(2)} <span className="text-xs font-normal text-slate-400">km</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
                          <span>TIEMPO</span>
                          <Clock className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="font-mono text-lg font-bold text-white tabular-nums">
                          {formatTime(seconds)}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
                          <span>DESNIVEL +</span>
                          <Mountain className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="font-mono text-lg font-bold text-emerald-300 tabular-nums">
                          +{elevation} <span className="text-xs font-normal text-slate-400">m</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center justify-between text-slate-400 text-[10px] mb-0.5">
                          <span>POTENCIA EST.</span>
                          <Zap className="w-3 h-3 text-amber-400" />
                        </div>
                        <div className="font-mono text-lg font-bold text-white tabular-nums">
                          {power} <span className="text-xs font-normal text-slate-400">W</span>
                        </div>
                      </div>
                    </div>

                    {/* Tertiary Sensor Row (Cadence & Heart Rate) */}
                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                      <div className="py-2 px-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Cadencia</span>
                        <span className="font-mono font-bold text-emerald-400 tabular-nums text-sm">
                          {cadence} <span className="text-[10px] font-normal text-slate-400">rpm</span>
                        </span>
                      </div>
                      <div className="py-2 px-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Pulso</span>
                        <span className="font-mono font-bold text-rose-400 tabular-nums text-sm flex items-center gap-1">
                          <Activity className="w-3 h-3 animate-pulse" />
                          {heartRate} <span className="text-[10px] font-normal text-slate-400">ppm</span>
                        </span>
                      </div>
                    </div>

                    {/* In-app action bar */}
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="text-[10px] font-mono text-slate-400">
                        Grabando recorrido GPX
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        EN VIVO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float label indicator */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] font-mono text-slate-300 shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Simulación en tiempo real activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

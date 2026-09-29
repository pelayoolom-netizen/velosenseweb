import React, { useState } from 'react';
import {
  Activity,
  Mountain,
  Gauge,
  Zap,
  RotateCcw,
  Calendar,
  Share2,
  Clock,
  Compass,
  Info,
} from 'lucide-react';

export const StatsDashboard: React.FC = () => {
  // Chart tabs
  const [activeMetric, setActiveMetric] = useState<'altitud' | 'velocidad' | 'potencia' | 'cadencia'>('altitud');
  const [hoverIndex, setHoverIndex] = useState<number | null>(7);

  // High-fidelity telemetry data samples for the 20.4 km ride
  const dataPoints = [
    { km: 0.0, ele: 610, speed: 18.2, power: 175, cad: 82 },
    { km: 1.5, ele: 625, speed: 21.4, power: 190, cad: 85 },
    { km: 3.2, ele: 660, speed: 16.8, power: 230, cad: 78 },
    { km: 5.0, ele: 710, speed: 14.5, power: 265, cad: 74 },
    { km: 7.4, ele: 780, speed: 12.8, power: 295, cad: 70 },
    { km: 9.1, ele: 850, speed: 11.2, power: 310, cad: 68 }, // Hard rampa peak
    { km: 11.0, ele: 915, speed: 10.5, power: 325, cad: 66 }, // Summit +342m
    { km: 12.8, ele: 890, speed: 28.5, power: 110, cad: 88 }, // Descent start
    { km: 14.5, ele: 810, speed: 38.4, power: 85, cad: 92 },
    { km: 16.2, ele: 720, speed: 34.0, power: 120, cad: 86 },
    { km: 18.0, ele: 665, speed: 22.8, power: 180, cad: 84 },
    { km: 20.4, ele: 620, speed: 20.5, power: 160, cad: 80 },
  ];

  const currentHover = hoverIndex !== null ? dataPoints[hoverIndex] : dataPoints[6];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Telemetría Avanzada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Dashboard de estadísticas.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Una vista clara y precisa de cada detalle de tu salida. Gráficas
            analíticas interactivas para entender exactamente dónde invertiste tu
            energía.
          </p>
        </div>

        {/* Demo Notice Banner (Adhering to honesty requirement) */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 max-w-2xl">
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Los datos mostrados a continuación corresponden a una ruta de demostración para ilustrar la visualización dentro de la aplicación.
          </span>
        </div>

        {/* App Frame Recreation */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl bg-[#0B0E14]/90 relative">
          {/* Header of Ride Activity */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ÚLTIMA RUTA COMPLETADA</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Pista Forestal Los Pinos</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Entrenamiento Mixto Montaña & Desnivel
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Hoy, 18:30 h</span>
              </span>
            </div>
          </div>

          {/* 4 Core Summary Metrics (Specified by user prompt) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-medium uppercase mb-1">
                Distancia
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-black text-white tabular-nums">
                20,4 <span className="text-sm font-semibold text-slate-400">km</span>
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 font-mono">
                100% completado
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-medium uppercase mb-1">
                Tiempo Total
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-black text-white tabular-nums">
                1:04:32
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                Movimiento: 1:01:10
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-medium uppercase mb-1">
                Velocidad Media
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-black text-white tabular-nums">
                19,0 <span className="text-sm font-semibold text-slate-400">km/h</span>
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 font-mono">
                Máx: 48,2 km/h
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 font-medium uppercase mb-1">
                Desnivel Acumulado
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-300 tabular-nums">
                +342 <span className="text-sm font-semibold text-slate-400">m</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                Cota máx: 915 m
              </div>
            </div>
          </div>

          {/* Interactive Chart Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1.5 p-1 bg-black/50 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setActiveMetric('altitud')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeMetric === 'altitud'
                    ? 'bg-emerald-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Altitud (+342m)
              </button>
              <button
                type="button"
                onClick={() => setActiveMetric('velocidad')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeMetric === 'velocidad'
                    ? 'bg-emerald-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Velocidad (km/h)
              </button>
              <button
                type="button"
                onClick={() => setActiveMetric('potencia')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeMetric === 'potencia'
                    ? 'bg-emerald-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Potencia (W)
              </button>
              <button
                type="button"
                onClick={() => setActiveMetric('cadencia')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeMetric === 'cadencia'
                    ? 'bg-emerald-400 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cadencia (rpm)
              </button>
            </div>

            {/* Selected point inspection read-out */}
            <div className="text-xs font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 flex items-center gap-2">
              <span>Km {currentHover.km.toFixed(1)}:</span>
              <span className="text-emerald-400 font-bold">
                {activeMetric === 'altitud' && `${currentHover.ele} m de altitud`}
                {activeMetric === 'velocidad' && `${currentHover.speed} km/h`}
                {activeMetric === 'potencia' && `${currentHover.power} W (estimados)`}
                {activeMetric === 'cadencia' && `${currentHover.cad} rpm`}
              </span>
            </div>
          </div>

          {/* SVG Vector Interactive Chart Display */}
          <div className="bg-[#07090D] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
            {/* Background grid lines */}
            <div className="h-60 w-full relative flex items-end">
              <svg viewBox="0 0 1000 240" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                <line x1="0" y1="40" x2="1000" y2="40" stroke="#1E293B" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="1000" y2="100" stroke="#1E293B" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="1000" y2="160" stroke="#1E293B" strokeDasharray="4 4" />
                <line x1="0" y1="220" x2="1000" y2="220" stroke="#334155" />

                {/* Dynamic path generation based on active tab */}
                {(() => {
                  let points: [number, number][] = [];
                  if (activeMetric === 'altitud') {
                    // Altitude range 600 - 920
                    points = dataPoints.map((d, i) => [
                      (i / (dataPoints.length - 1)) * 980 + 10,
                      220 - ((d.ele - 600) / 330) * 190,
                    ]);
                  } else if (activeMetric === 'velocidad') {
                    // Speed range 10 - 45
                    points = dataPoints.map((d, i) => [
                      (i / (dataPoints.length - 1)) * 980 + 10,
                      220 - ((d.speed - 10) / 35) * 190,
                    ]);
                  } else if (activeMetric === 'potencia') {
                    // Power range 80 - 340
                    points = dataPoints.map((d, i) => [
                      (i / (dataPoints.length - 1)) * 980 + 10,
                      220 - ((d.power - 80) / 260) * 190,
                    ]);
                  } else {
                    // Cadence range 60 - 100
                    points = dataPoints.map((d, i) => [
                      (i / (dataPoints.length - 1)) * 980 + 10,
                      220 - ((d.cad - 60) / 40) * 190,
                    ]);
                  }

                  const pathStr = points.reduce(
                    (acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p[0]},${p[1]}`,
                    ''
                  );
                  const areaStr = `${pathStr} L ${points[points.length - 1][0]},220 L ${points[0][0]},220 Z`;

                  return (
                    <>
                      {/* Gradient fill underneath */}
                      <path d={areaStr} fill="url(#areaGradient)" />

                      {/* Foreground curve stroke */}
                      <path
                        d={pathStr}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Interactive hover points */}
                      {points.map((p, i) => (
                        <g
                          key={i}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoverIndex(i)}
                        >
                          <circle
                            cx={p[0]}
                            cy={p[1]}
                            r={hoverIndex === i ? 7 : 4}
                            fill={hoverIndex === i ? '#34D399' : '#10B981'}
                            stroke="#000"
                            strokeWidth="2"
                            className="transition-all duration-150"
                          />
                        </g>
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>

            {/* X-Axis Kilometers */}
            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2 px-1">
              <span>0 km (Salida)</span>
              <span>5 km</span>
              <span>11 km (Cima)</span>
              <span>16 km (Bajada)</span>
              <span>20.4 km (Meta)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

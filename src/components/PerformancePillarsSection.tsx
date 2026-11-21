"use client";

import React from "react";

const pillars = [
  {
    number: "01",
    title: "Powertrain & ECU Calibration",
    subtitle: "Custom Dyno-Tuned Remapping",
    description:
      "Reprogramação de central eletrônica sob medida em dinamômetro de 4 rodas, extraindo a curva ideal de torque e potência mantendo margens térmicas de segurança.",
    metric: "+280 HP",
    metricLabel: "Ganho Potencial Médio",
    features: [
      "Gerenciamento de Boost & Ignição",
      "Telemetria em Tempo Real",
      "Garantia de Integridade de Bloco",
    ],
  },
  {
    number: "02",
    title: "Aerodynamics & Carbon Composites",
    subtitle: "Autoclave Pre-Preg Engineering",
    description:
      "Splitters dianteiros, difusores e aerofólios ativos desenvolvidos em túnel de vento digital (CFD), reduzindo sustentação e estabilizando curvas em alta velocidade.",
    metric: "320 KG",
    metricLabel: "Downforce a 250 km/h",
    features: [
      "Fibra de Carbono Dry-Weave",
      "Acabamento Gloss ou Satin UV",
      "Fixação Estrutural de Competição",
    ],
  },
  {
    number: "03",
    title: "Chassis & Exhaust Dynamics",
    subtitle: "Inconel & Titanium Systems",
    description:
      "Sistemas de escape valvulados em Inconel 625 e suspensão coilover de 3 vias com calibração específica para pista e uso em estrada sem perda de refinamento.",
    metric: "-24 KG",
    metricLabel: "Alívio de Peso Não-Suspenso",
    features: [
      "Válvulas Pneumáticas Inteligentes",
      "Amortecedores Invertidos com Reservatório",
      "Geometria Alinhada a Laser",
    ],
  },
];

export default function PerformancePillarsSection() {
  return (
    <section className="relative z-20 w-full bg-black py-24 text-white overflow-hidden border-t border-zinc-900/60">
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#84f800]/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#84f800]/4 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#84f800]/40 bg-zinc-950/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#84f800] backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(132,248,0,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#84f800] animate-pulse" />
              <span>Core Engineering Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engenharia Extrema para <br />
              <span className="text-[#84f800] drop-shadow-[0_0_20px_rgba(132,248,0,0.35)]">
                Supermáquinas
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Cada componente é projetado com tolerâncias de nível aeroespacial, elevando a resposta dinâmica, som e confiabilidade ao limite físico do veículo.
          </p>
        </div>

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/60 bg-zinc-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#84f800]/60 hover:bg-zinc-900/40 hover:shadow-[0_0_35px_rgba(132,248,0,0.12)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#84f800]/0 to-transparent transition-all duration-500 group-hover:via-[#84f800]/60" />

              <div>
                {/* Number & Subtitle */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800/40">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#84f800]">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>

                {/* Feature Bullet List */}
                <ul className="mt-6 space-y-2.5">
                  {pillar.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs text-zinc-300"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#84f800]/10 text-[#84f800]">
                        <svg
                          className="h-2.5 w-2.5 stroke-[3]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metric Box */}
              <div className="mt-8 pt-6 border-t border-zinc-800/40 flex items-baseline justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#84f800] tracking-tight drop-shadow-[0_0_12px_rgba(132,248,0,0.35)]">
                    {pillar.metric}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                    {pillar.metricLabel}
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-black/60 text-zinc-400 transition-all duration-300 group-hover:border-[#84f800] group-hover:text-[#84f800] group-hover:shadow-[0_0_15px_rgba(132,248,0,0.3)]">
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

// Top aftermarket & motorsport brands for Row 1
const rowOneBrands = [
  {
    name: "AKRAPOVIČ",
    category: "Titanium Exhaust Systems",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    name: "BREMBO",
    category: "Carbon-Ceramic Braking",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "BBS MOTORSPORT",
    category: "Forged Alloy Wheels",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
    ),
  },
  {
    name: "ÖHLINS",
    category: "Advanced Suspension",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 3v18M18 3v18M6 8h12M6 16h12" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "RECARO",
    category: "Carbon Bucket Seats",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 4h10l-2 16H9L7 4z" />
        <path d="M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    name: "KW SUSPENSIONS",
    category: "Variant Coilover Tech",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M12 4v16M8 8l8 8M16 8l-8 8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MOTUL 300V",
    category: "Competition Lubricants",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 3.8l5 4.5v6.7H7v-6.7l5-4.5z" />
      </svg>
    ),
  },
  {
    name: "HKS RACING",
    category: "Turbo & Induction Tuning",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Top motorsport marques for Row 2
const rowTwoBrands = [
  {
    name: "PORSCHE MOTORSPORT",
    category: "Factory Race Engineering",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 4a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    ),
  },
  {
    name: "FERRARI CORSE",
    category: "GT Performance Division",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
        <path d="M12 7v6l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MCLAREN APPLIED",
    category: "Aerospace Telemetry",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13.5C3 8.25 7.25 4 12.5 4c3.5 0 6.56 1.9 8.2 4.74-2.5-1.48-5.46-2.24-8.7-2.24-6.35 0-11.5 5.15-11.5 11.5 0 1.25.2 2.45.57 3.57C3.36 19.46 3 16.63 3 13.5z" />
      </svg>
    ),
  },
  {
    name: "LAMBORGHINI SQUADRA",
    category: "Super Trofeo Dynamics",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "MICHELIN PILOT SPORT",
    category: "Ultra High-Performance Compound",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12a4 4 0 008 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "BILSTEIN CLUBSPORT",
    category: "Nürburgring-Tested Dynamics",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    name: "EVENTURI CARBON",
    category: "Patented Aero Intakes",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "CAPRISTO EXHAUST",
    category: "Inconel Valved Technology",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    ),
  },
];

export default function LogosMarqueeSection() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-black py-20 border-t border-zinc-900/80">
      {/* Background Ambient Glows (Neon Green) */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#84f800]/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-[#84f800]/6 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#84f800]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 mb-12 text-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#84f800]/40 bg-zinc-950/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#84f800] backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(132,248,0,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#84f800] animate-pulse" />
          <span>Tecnologia & Componentes Homologados</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Padrão Global de Engenharia e Confiabilidade
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
          Células de bateria de alta densidade, motores de alta eficiência e componentes de padrão automotivo selecionados para máxima segurança nas ruas.
        </p>
      </div>

      {/* Marquee Wrapper with Bilateral Edge Fades */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        
        {/* Left and Right Edge Gradient Masks for Flawless Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-24 sm:w-48 bg-gradient-to-r from-black via-black/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-24 sm:w-48 bg-gradient-to-l from-black via-black/90 to-transparent" />

        {/* ======================================================== */}
        {/* ROW 1: Right -> Left (Direita -> Esquerda)               */}
        {/* ======================================================== */}
        <div className="relative flex w-full overflow-hidden select-none">
          <div className="animate-marquee-left flex items-center gap-6 sm:gap-8">
            {/* First Set */}
            {rowOneBrands.map((brand, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="group/item flex items-center gap-3.5 rounded-2xl border border-zinc-800/60 bg-zinc-950/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-[#84f800]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(132,248,0,0.15)] hover:scale-[1.02]"
              >
                <div className="text-zinc-400 transition-colors duration-300 group-hover/item:text-[#84f800] group-hover/item:drop-shadow-[0_0_10px_rgba(132,248,0,0.7)]">
                  {brand.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold tracking-wider text-zinc-200 transition-colors group-hover/item:text-white">
                    {brand.name}
                  </span>
                  <span className="text-[10px] tracking-wide text-zinc-500 font-medium transition-colors group-hover/item:text-zinc-400">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicated Set for Seamless Infinite Loop */}
            {rowOneBrands.map((brand, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="group/item flex items-center gap-3.5 rounded-2xl border border-zinc-800/60 bg-zinc-950/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-[#84f800]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(132,248,0,0.15)] hover:scale-[1.02]"
              >
                <div className="text-zinc-400 transition-colors duration-300 group-hover/item:text-[#84f800] group-hover/item:drop-shadow-[0_0_10px_rgba(132,248,0,0.7)]">
                  {brand.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold tracking-wider text-zinc-200 transition-colors group-hover/item:text-white">
                    {brand.name}
                  </span>
                  <span className="text-[10px] tracking-wide text-zinc-500 font-medium transition-colors group-hover/item:text-zinc-400">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ROW 2: Left -> Right (Esquerda -> Direita)               */}
        {/* ======================================================== */}
        <div className="relative flex w-full overflow-hidden select-none">
          <div className="animate-marquee-right flex items-center gap-6 sm:gap-8">
            {/* First Set */}
            {rowTwoBrands.map((brand, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="group/item flex items-center gap-3.5 rounded-2xl border border-zinc-800/60 bg-zinc-950/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-[#84f800]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(132,248,0,0.15)] hover:scale-[1.02]"
              >
                <div className="text-zinc-400 transition-colors duration-300 group-hover/item:text-[#84f800] group-hover/item:drop-shadow-[0_0_10px_rgba(132,248,0,0.7)]">
                  {brand.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold tracking-wider text-zinc-200 transition-colors group-hover/item:text-white">
                    {brand.name}
                  </span>
                  <span className="text-[10px] tracking-wide text-zinc-500 font-medium transition-colors group-hover/item:text-zinc-400">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicated Set for Seamless Infinite Loop */}
            {rowTwoBrands.map((brand, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="group/item flex items-center gap-3.5 rounded-2xl border border-zinc-800/60 bg-zinc-950/50 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-[#84f800]/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_rgba(132,248,0,0.15)] hover:scale-[1.02]"
              >
                <div className="text-zinc-400 transition-colors duration-300 group-hover/item:text-[#84f800] group-hover/item:drop-shadow-[0_0_10px_rgba(132,248,0,0.7)]">
                  {brand.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold tracking-wider text-zinc-200 transition-colors group-hover/item:text-white">
                    {brand.name}
                  </span>
                  <span className="text-[10px] tracking-wide text-zinc-500 font-medium transition-colors group-hover/item:text-zinc-400">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

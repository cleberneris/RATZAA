"use client";

import { useState } from "react";

export default function BentoGridSection() {
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <section className="relative z-20 w-full overflow-hidden bg-black py-24 text-white border-t border-zinc-900/80">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND GLOWS (NEON GREEN & EMERALD)           */}
      {/* ========================================================= */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full bg-[#84f800]/8 blur-[180px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-[550px] w-[550px] rounded-full bg-[#84f800]/6 blur-[190px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full bg-[#84f800]/5 blur-[220px]" />

      {/* Subtle cosmic radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,248,0,0.04)_0%,rgba(5,5,5,0.7)_60%,#000000_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#84f800]/40 bg-zinc-950/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#84f800] backdrop-blur-xl mb-4 shadow-[0_0_20px_rgba(132,248,0,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#84f800] animate-pulse" />
            <span>Next-Gen Electric Mobility Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Inteligência Urbana e <br />
            <span className="text-[#84f800] drop-shadow-[0_0_30px_rgba(132,248,0,0.45)]">
              Calibração Sem Limites
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Uma suíte tecnológica completa desenvolvida para extrair a resposta dinâmica perfeita através de telemetria em tempo real e eficiência energética.
          </p>
        </div>

        {/* ======================================================= */}
        {/* ASYMMETRIC BENTO GRID                                   */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          
          {/* ===================================================== */}
          {/* LEFT COLUMN: 3 Stacked Cards (Card L1, L2, L3)        */}
          {/* ===================================================== */}
          <div className="flex flex-col gap-5 lg:col-span-3 lg:gap-6">
            
            {/* CARD L1: Top Headline Card */}
            <div className="group relative flex flex-1 flex-col justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_30px_rgba(132,248,0,0.25)]">
              {/* Corner soft glow */}
              <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-[#84f800]/10 blur-2xl transition-opacity group-hover:opacity-100" />
              
              <div>
                {/* Top Green Sparkle Icon */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#84f800]/50 bg-black text-[#84f800] shadow-[0_0_15px_rgba(132,248,0,0.4)]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                  Zero Emissões <br />
                  100% Elétrica <br />
                  <span className="text-[#84f800]">Liberdade Pura</span>
                </h3>
              </div>

              <div className="mt-8 border-t border-zinc-800/80 pt-4">
                <span className="text-xs font-semibold text-zinc-300">
                  Economia Inteligente
                </span>
                <span className="block text-[11px] text-zinc-500 mt-0.5">
                  recarga em tomada comum • bateria portátil
                </span>
              </div>
            </div>

            {/* CARD L2: Middle Stat with Overlapping Avatars */}
            <div className="group relative flex flex-col justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_30px_rgba(132,248,0,0.25)]">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#84f800] drop-shadow-[0_0_15px_rgba(132,248,0,0.4)]">
                  +60 km
                </div>
                <div className="text-xs font-medium text-zinc-400 mt-1">
                  autonomia com uma única carga
                </div>
              </div>

              {/* Overlapping Avatars / Badges */}
              <div className="mt-6 flex items-center -space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#84f800]/80 bg-zinc-900 text-[10px] font-bold text-white shadow-lg">
                  ECO
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-emerald-400/80 bg-zinc-800 text-[10px] font-bold text-emerald-300 shadow-lg">
                  STD
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#84f800] bg-black text-[10px] font-bold text-[#84f800] shadow-[0_0_12px_rgba(132,248,0,0.5)]">
                  PRO
                </div>
              </div>
            </div>

            {/* CARD L3: Bottom Pill Action Card */}
            <div className="group relative flex items-center justify-center rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_25px_rgba(132,248,0,0.25)]">
              <a
                href="#contato"
                className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-[#84f800] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(132,248,0,0.45)] transition-all duration-300 hover:bg-[#97ff1e] hover:shadow-[0_0_35px_rgba(132,248,0,0.7)] active:scale-95 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span>Quero meu desconto</span>
              </a>
            </div>

          </div>

          {/* ===================================================== */}
          {/* CENTER COLUMN: Hero Card C1 + Dual Bottom Cards C2/C3 */}
          {/* ===================================================== */}
          <div className="flex flex-col gap-5 lg:col-span-6 lg:gap-6">
            
            {/* CARD C1: Large Focal Card with Glowing Green Core */}
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-[32px] border border-[#84f800]/30 bg-zinc-950/70 p-8 sm:p-10 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/70 hover:shadow-[0_0_40px_rgba(132,248,0,0.3)]">
              
              {/* Radial background behind the sphere */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#84f800]/15 via-emerald-600/10 to-transparent blur-[90px]" />

              {/* Top Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#84f800]/40 bg-zinc-950/80 px-4 py-1.5 text-xs font-semibold text-[#84f800] backdrop-blur-xl shadow-[0_0_15px_rgba(132,248,0,0.2)]">
                <span>✦</span>
                <span>ECOSSISTEMA RATZA</span>
              </div>

              {/* Main Headline */}
              <h3 className="relative z-10 mt-5 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                A Revolução da Sua <br />
                <span className="text-[#84f800] drop-shadow-[0_0_20px_rgba(132,248,0,0.4)]">
                  Mobilidade Urbana
                </span>
              </h3>

              {/* =================================================== */}
              {/* GLOWING ORB / GREEN PLASMA CORE WITH ORBITAL NUMERICS */}
              {/* =================================================== */}
              <div className="relative my-8 flex items-center justify-center select-none">
                
                {/* Orbital Numeric Track Ring (outer dashed circle with code) */}
                <div className="absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-[#84f800]/25 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <span className="absolute -top-3 text-[9px] font-mono tracking-widest text-[#84f800]/70">
                    110101 100011 1001010110 010 001
                  </span>
                  <span className="absolute -bottom-3 text-[9px] font-mono tracking-widest text-[#84f800]/70">
                    10010 101 010101 110011 10101
                  </span>
                </div>

                <div className="absolute h-52 w-52 sm:h-64 sm:w-64 rounded-full border border-[#84f800]/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />

                {/* Swirling Nebula Cosmic Sphere in Green Neon */}
                <div className="relative flex h-44 w-44 sm:h-56 sm:w-56 items-center justify-center rounded-full bg-black shadow-[0_0_60px_rgba(132,248,0,0.5)] overflow-hidden">
                  
                  {/* Swirling Plasma Gradient 1 (Neon Green/Emerald) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#84f800] via-emerald-600 to-transparent opacity-75 mix-blend-screen animate-pulse" />
                  
                  {/* Swirling Plasma Gradient 2 (Lime/Green core) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-bl from-[#84f800] via-lime-400 to-transparent opacity-65 mix-blend-screen"
                    style={{ animation: "spin 20s linear infinite" }}
                  />

                  {/* Inner Dark Gravity Center */}
                  <div className="relative z-10 flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-black/95 shadow-[inset_0_0_30px_rgba(0,0,0,0.95)]">
                    {/* Glowing Core Star */}
                    <div className="h-6 w-6 rounded-full bg-white shadow-[0_0_20px_#84f800,0_0_40px_#84f800]" />
                  </div>

                  {/* Glowing Rim Light */}
                  <div className="absolute inset-0 rounded-full border border-[#84f800]/50 pointer-events-none" />
                </div>
              </div>

              {/* Connecting Stems to Bottom Cards */}
              <div className="relative flex items-center justify-center gap-16 pt-2">
                <div className="h-6 w-[2px] bg-gradient-to-b from-[#84f800] to-transparent shadow-[0_0_10px_#84f800]" />
                <div className="h-6 w-[2px] bg-gradient-to-b from-[#84f800] to-transparent shadow-[0_0_10px_#84f800]" />
              </div>

            </div>

            {/* Bottom Row: Dual Sub-Cards C2 & C3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              
              {/* CARD C2: Branching Paths */}
              <div className="group relative flex flex-col justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_25px_rgba(132,248,0,0.2)]">
                <div>
                  {/* Glowing Node Icon */}
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#84f800]/50 bg-black text-[#84f800] shadow-[0_0_15px_rgba(132,248,0,0.4)]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="6" y1="3" x2="6" y2="15" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M18 9a9 9 0 0 1-9 9" />
                    </svg>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Modos de Condução
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    Alterne entre os modos Eco, Conforto e Sport com um toque no guidão para qualquer trajeto.
                  </p>
                </div>
              </div>

              {/* CARD C3: Keyword Enhancer */}
              <div className="group relative flex flex-col justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_25px_rgba(132,248,0,0.2)]">
                <div>
                  {/* Glowing Radar Icon */}
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#84f800]/50 bg-black text-[#84f800] shadow-[0_0_15px_rgba(132,248,0,0.4)]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.07 4.93a10 10 0 0 0-14.14 0M16.24 7.76a6 6 0 0 0-8.48 0" />
                    </svg>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Painel Digital Inteligente
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    Velocímetro de alta precisão, nível em tempo real de bateria e odômetro digital iluminado.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* RIGHT COLUMN: 3 Cards (Card R1, R2, R3)               */}
          {/* ===================================================== */}
          <div className="flex flex-col gap-5 lg:col-span-3 lg:gap-6">
            
            {/* CARD R1: Top Toggle Switch Card */}
            <div className="group relative flex items-center justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_20px_rgba(132,248,0,0.25)]">
              <span className="text-xs font-semibold text-zinc-300">
                Partida Keyless
              </span>

              {/* Glass Pill Toggle Switch */}
              <button
                type="button"
                onClick={() => setToggleActive(!toggleActive)}
                className={`relative flex h-9 w-16 cursor-pointer items-center rounded-full border p-1 transition-all duration-300 ${
                  toggleActive
                    ? "border-[#84f800] bg-black shadow-[0_0_15px_rgba(132,248,0,0.4)]"
                    : "border-zinc-800 bg-zinc-900"
                }`}
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-black shadow-md transition-all duration-300 ${
                    toggleActive
                      ? "translate-x-7 bg-[#84f800] shadow-[0_0_12px_#84f800]"
                      : "translate-x-0 bg-zinc-700 text-white"
                  }`}
                >
                  <span className="text-[10px] font-bold">⚡</span>
                </div>
              </button>
            </div>

            {/* CARD R2: Middle Stat Card */}
            <div className="group relative flex flex-col justify-between rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_25px_rgba(132,248,0,0.25)]">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#84f800] drop-shadow-[0_0_15px_rgba(132,248,0,0.4)]">
                  R$ 0,02
                </div>
                <div className="mt-2 text-xs font-mono tracking-wider text-[#84f800]/80">
                  [ Custo Médio por km Rodado ]
                </div>
              </div>
            </div>

            {/* CARD R3: Bottom Preset Packages with Diagonal Floating Pills */}
            <div className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] border border-[#84f800]/25 bg-zinc-950/60 p-7 backdrop-blur-2xl transition-all duration-500 hover:border-[#84f800]/60 hover:shadow-[0_0_30px_rgba(132,248,0,0.25)]">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Acessórios & Cores
                </h4>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  Personalize sua Ratza com bagageiro, suporte para celular e cores exclusivas.
                </p>
              </div>

              {/* Floating Diagonal Badge Array */}
              <div className="relative my-6 flex flex-col gap-2.5">
                {/* Outlined Main Pill */}
                <div className="self-end rounded-full border border-[#84f800] bg-black/60 px-4 py-1.5 text-[11px] font-semibold text-[#84f800] shadow-[0_0_15px_rgba(132,248,0,0.3)]">
                  Edição Limitada 2026
                </div>

                {/* Diagonal Stacked Pill Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <div className="flex items-center gap-1.5 rounded-full border border-[#84f800]/40 bg-zinc-950/80 px-3.5 py-1 text-[11px] font-medium text-[#84f800] shadow-[0_0_12px_rgba(132,248,0,0.25)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#84f800] animate-pulse" />
                    <span>Pronta Entrega</span>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#84f800] text-black shadow-md font-bold text-[10px]">
                    ⚡
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#84f800]/60 bg-black text-[#84f800]">
                    <span className="text-[10px]">🔋</span>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-black shadow-md">
                    <span className="text-[10px]">🛵</span>
                  </div>
                </div>

                {/* Vertical Protocol Tags on the side */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-[10px] font-mono text-zinc-400">
                  <span>• 1000 W</span>
                  <span>• 60 KM</span>
                  <span>• 7 H RECARGA</span>
                  <span>• REMOVÍVEL</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollCanvasSequence from "@/components/ScrollCanvasSequence";
import LogosMarqueeSection from "@/components/LogosMarqueeSection";
import BentoGridSection from "@/components/BentoGridSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full bg-black text-white selection:bg-[#84f800] selection:text-black">
      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* ========================================================= */}
      {/* 450vh SCROLL TRACK FOR CINEMATIC SCROLL-CONTROLLED CANVAS */}
      {/* ========================================================= */}
      <div ref={containerRef} className="relative h-[450vh] w-full">
        {/* Sticky Fullscreen Viewport */}
        <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
          
          {/* ========================================================= */}
          {/* CINEMATIC HTML5 CANVAS SEQUENCE (BEHIND HERO)             */}
          {/* ========================================================= */}
          <ScrollCanvasSequence containerRef={containerRef} />

          {/* ========================================================= */}
          {/* BACKGROUND ATMOSPHERE & LIGHTING EFFECTS                  */}
          {/* ========================================================= */}
          
          {/* Ambient Radial Glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#84f800]/10 blur-[140px] z-[2]" />
          <div className="pointer-events-none absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-[#84f800]/8 blur-[160px] z-[2]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-[#84f800]/10 blur-[130px] z-[2]" />

          {/* Diagonal Neon Laser Light Beams */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]">
            {/* Main sharp diagonal beam from top-center across right */}
            <div
              className="absolute -top-32 right-1/4 h-[2px] w-[850px] origin-top-left rotate-[40deg] bg-gradient-to-r from-transparent via-[#84f800] to-transparent opacity-80 blur-[0.5px]"
              style={{
                boxShadow:
                  "0 0 12px #84f800, 0 0 35px rgba(132, 248, 0, 0.6), 0 0 70px rgba(132, 248, 0, 0.3)",
              }}
            />

            {/* Second softer beam running diagonally */}
            <div
              className="absolute top-12 left-1/3 h-[1.5px] w-[700px] origin-top-left rotate-[28deg] bg-gradient-to-r from-transparent via-[#84f800]/70 to-transparent opacity-70 blur-[1px]"
              style={{
                boxShadow:
                  "0 0 15px rgba(132, 248, 0, 0.4), 0 0 40px rgba(132, 248, 0, 0.2)",
              }}
            />

            {/* Third subtle counter-beam on right */}
            <div
              className="absolute top-1/3 right-12 h-[1px] w-[450px] rotate-[-35deg] bg-gradient-to-r from-transparent via-[#84f800]/40 to-transparent blur-[1px]"
            />
          </div>

          {/* ========================================================= */}
          {/* HERO SECTION INTERFACE (ON TOP OF CANVAS)                 */}
          {/* ========================================================= */}
          <div className="relative z-10 flex min-h-screen w-full flex-col justify-between pointer-events-auto">
            {/* Top Header Navigation */}
            <Navbar />

            {/* Main Hero Content Section */}
            <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-6 md:px-12 lg:px-16">
              <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                
                {/* ------------------------------------------------------- */}
                {/* LEFT COLUMN: Main Heading, Subtitle & Primary/Sec CTA   */}
                {/* ------------------------------------------------------- */}
                <div className="flex flex-col items-start justify-center lg:col-span-4 xl:col-span-4 z-20">
                  {/* Main Headline - Word-by-word fade up (80ms staggered) */}
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.08]">
                    {/* Line 1: Ligue, acelere */}
                    <span className="block">
                      <span
                        className="inline-block animate-word-fade-up mr-2 sm:mr-3"
                        style={{ animationDelay: "0ms" }}
                      >
                        Ligue,
                      </span>
                      <span
                        className="inline-block animate-word-fade-up"
                        style={{ animationDelay: "80ms" }}
                      >
                        acelere
                      </span>
                    </span>

                    {/* Line 2: e vá com */}
                    <span className="block">
                      <span
                        className="inline-block animate-word-fade-up mr-2 sm:mr-3"
                        style={{ animationDelay: "160ms" }}
                      >
                        e
                      </span>
                      <span
                        className="inline-block animate-word-fade-up mr-2 sm:mr-3"
                        style={{ animationDelay: "240ms" }}
                      >
                        vá
                      </span>
                      <span
                        className="inline-block animate-word-fade-up"
                        style={{ animationDelay: "320ms" }}
                      >
                        com
                      </span>
                    </span>

                    {/* Line 3: liberdade (neon green with slow pulse glow) */}
                    <span className="block">
                      <span
                        className="inline-block animate-word-fade-up text-[#84f800] animate-neon-pulse-slow font-extrabold"
                        style={{ animationDelay: "400ms" }}
                      >
                        liberdade
                      </span>
                    </span>

                    {/* Line 4: elétrica. */}
                    <span className="block">
                      <span
                        className="inline-block animate-word-fade-up"
                        style={{ animationDelay: "480ms" }}
                      >
                        elétrica.
                      </span>
                    </span>
                  </h1>

                  {/* Neon Green Horizontal Accent Line */}
                  <div className="my-6 h-[2.5px] w-12 rounded-full bg-[#84f800] shadow-[0_0_10px_#84f800]" />

                  {/* Subtitle - Appears after title with fade */}
                  <p className="max-w-md text-sm sm:text-base leading-relaxed text-zinc-300 animate-subtitle-fade">
                    Criada para a{" "}
                    <span className="font-semibold text-[#84f800]">
                      Praticidade
                    </span>
                    , a{" "}
                    <span className="font-semibold text-[#84f800]">
                      Liberdade
                    </span>{" "}
                    e o{" "}
                    <span className="font-semibold text-[#84f800]">
                      Estilo
                    </span>{" "}
                    do seu dia a dia.
                  </p>

                  {/* Action Buttons: Primary + Secondary */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {/* Primary Button */}
                    <a
                      href="#contato"
                      className="group inline-flex items-center gap-3 rounded-full bg-[#84f800] px-7 py-3.5 text-sm sm:text-base font-bold text-black transition-all duration-300 hover:bg-[#97ff1e] hover:shadow-[0_0_30px_rgba(132,248,0,0.6)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#84f800]"
                    >
                      <span>Entrar na lista de espera</span>
                      <span className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <svg
                          className="h-4 w-4 stroke-[3]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </a>

                    {/* Secondary Button: WhatsApp Contorno Verde */}
                    <a
                      href="https://wa.me/5511925241002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full border border-[#84f800] bg-black/60 backdrop-blur-md px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#84f800]/15 hover:text-[#84f800] hover:shadow-[0_0_20px_rgba(132,248,0,0.35)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800]"
                      aria-label="Falar no WhatsApp com a equipe da Ratza"
                    >
                      <svg
                        className="h-4 w-4 fill-currentColor text-[#84f800] transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* ------------------------------------------------------- */}
                {/* CENTER AREA: Spacious Center Showcase for the Canvas    */}
                {/* ------------------------------------------------------- */}
                <div className="relative flex min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] items-center justify-center lg:col-span-4 xl:col-span-4 pointer-events-none">
                  {/* Glowing Floor Reflection Effect */}
                  <div className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-[#84f800]/15 blur-2xl" />
                </div>

                {/* ------------------------------------------------------- */}
                {/* RIGHT COLUMN: Ficha técnica Card & Por que a Ratza List */}
                {/* ------------------------------------------------------- */}
                <div className="flex flex-col gap-8 lg:col-span-4 xl:col-span-4 z-20">
                  
                  {/* Top Card: Ficha técnica */}
                  <div className="relative rounded-3xl border border-[#84f800]/40 bg-zinc-950/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#84f800]/70 hover:shadow-[0_0_25px_rgba(132,248,0,0.15)] sm:p-7">
                    {/* Subtle green indicator accent in corner */}
                    <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#84f800] blur-[2px] opacity-70" />
                    
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      Ficha técnica
                    </h2>
                    
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                      Motor de [
                      <span className="font-semibold text-[#84f800]">
                        <AnimatedNumber value={1000} /> W
                      </span>
                      ], autonomia de até [
                      <span className="font-semibold text-[#84f800]">
                        <AnimatedNumber value={60} /> km
                      </span>
                      ] e bateria removível com recarga em [
                      <span className="font-semibold text-[#84f800]">
                        <AnimatedNumber value={7} /> h
                      </span>
                      ].
                    </p>

                    <div className="mt-5">
                      <a
                        href="#contato"
                        className="group inline-flex items-center gap-2 rounded-full border border-[#84f800] bg-transparent px-5 py-2 text-xs font-medium text-white transition-all hover:bg-[#84f800]/10 hover:text-[#84f800] hover:shadow-[0_0_15px_rgba(132,248,0,0.3)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800]"
                      >
                        <span>Ver detalhes</span>
                        <svg
                          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Bottom Side List: Por que a Ratza */}
                  <div className="relative flex flex-col pt-2">
                    {/* Vertical Continuous Neon Connector Line */}
                    <div
                      className="absolute left-[19px] top-6 bottom-4 w-[2px] bg-gradient-to-b from-[#84f800] via-[#84f800] to-[#84f800]/40"
                      style={{
                        boxShadow: "0 0 8px #84f800, 0 0 16px rgba(132, 248, 0, 0.4)",
                      }}
                    />

                    {/* Section Title */}
                    <div className="relative flex items-center gap-4 pb-6">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#84f800] bg-black text-[#84f800] shadow-[0_0_12px_rgba(132,248,0,0.4)]">
                        {/* Speedometer/Bolt Glyph */}
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold leading-tight text-white">
                          Por que a <br />
                          Ratza
                        </h3>
                      </div>
                    </div>

                    {/* Item 1: Sem burocracia */}
                    <div className="relative flex items-start gap-4 pb-6 group">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#84f800] bg-black text-[#84f800] shadow-[0_0_10px_rgba(132,248,0,0.3)] transition-transform group-hover:scale-105">
                        {/* Shield with Checkmark Icon */}
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.75"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M12 3.75c3.27 0 6.27.75 7.5 1.5 0 8.25-3.75 14.25-7.5 15.75-3.75-1.5-7.5-7.5-7.5-15.75 1.23-.75 4.23-1.5 7.5-1.5z"
                          />
                        </svg>
                      </div>
                      <p className="pt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        <span className="font-semibold text-white">Sem burocracia*:</span> pensada para quem quer sair rodando sem CNH.
                      </p>
                    </div>

                    {/* Item 2: Fácil de usar */}
                    <div className="relative flex items-start gap-4 pb-6 group">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#84f800] bg-black text-[#84f800] shadow-[0_0_10px_rgba(132,248,0,0.3)] transition-transform group-hover:scale-105">
                        {/* Power / Accelerator Icon */}
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.75"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                          />
                        </svg>
                      </div>
                      <p className="pt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        <span className="font-semibold text-white">Fácil de usar:</span> liga, acelera e vai, mesmo para quem nunca andou de scooter.
                      </p>
                    </div>

                    {/* Item 3: Desconto de lançamento */}
                    <div className="relative flex items-start gap-4 pb-2 group">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#84f800] bg-black text-[#84f800] shadow-[0_0_10px_rgba(132,248,0,0.3)] transition-transform group-hover:scale-105">
                        {/* Tag / Discount Icon */}
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.75"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6h.008v.008H6V6z"
                          />
                        </svg>
                      </div>
                      <p className="pt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        <span className="font-semibold text-white">Desconto de lançamento</span> para quem entra na lista de espera.
                      </p>
                    </div>

                    {/* Small Footer Notice */}
                    <p className="pt-3 text-[10px] text-zinc-500 leading-relaxed italic">
                      *Sujeito ao enquadramento do modelo na regulamentação do Contran.
                    </p>
                  </div>

                </div>

              </div>
            </main>

            {/* Bottom Ground Laser Line */}
            <div className="relative z-10 w-full overflow-hidden pb-4">
              <div className="relative h-[2px] w-full">
                <div
                  className="absolute left-0 bottom-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#84f800] to-transparent"
                  style={{
                    boxShadow: "0 0 15px #84f800, 0 0 30px rgba(132, 248, 0, 0.6)",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. CARROSSEL INFINITO DE LOGOS (DUAS LINHAS OPOSTAS)       */}
      {/* ========================================================= */}
      <LogosMarqueeSection />

      {/* ========================================================= */}
      {/* 2. BENTO GRID ASSIMÉTRICO (DIREÇÃO VISUAL CÓSMICA & VIDRO) */}
      {/* ========================================================= */}
      <BentoGridSection />

      {/* ========================================================= */}
      {/* 3. SEÇÃO DE CONTATO & FORMULÁRIO COM DESCONTO             */}
      {/* ========================================================= */}
      <ContactSection />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-6 py-6 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 hover:scale-[1.03]"
        >
          {/* Interactive Wheel / Turbine Round Icon that changes color on hover/select */}
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center shrink-0">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 text-white transition-all duration-500 ease-out group-hover:text-[#84f800] group-hover:rotate-180 group-hover:drop-shadow-[0_0_14px_rgba(132,248,0,0.85)]"
            >
              {/* Outer wheel rim */}
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="16"
                cy="16"
                r="11"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2.5 2"
                opacity="0.5"
              />
              {/* Aerodynamic Swirl / Turbine Wheel Blades */}
              <path
                d="M16 2C8.268 2 2 8.268 2 16c0 4.148 1.795 7.876 4.664 10.457l3.242-3.242A9.957 9.957 0 016 16c0-5.523 4.477-10 10-10 3.245 0 6.136 1.542 7.974 3.926l3.414-3.414C24.323 3.526 20.404 2 16 2z"
                fill="currentColor"
              />
              <path
                d="M16 30c7.732 0 14-6.268 14-14 0-4.148-1.795-7.876-4.664-10.457l-3.242 3.242A9.957 9.957 0 0126 16c0 5.523-4.477 10-10 10-3.245 0-6.136-1.542-7.974-3.926l-3.414 3.414C7.677 28.474 11.596 30 16 30z"
                fill="currentColor"
              />
              {/* Center Lock Hub Nut */}
              <circle
                cx="16"
                cy="16"
                r="3.5"
                fill="#84f800"
                className="transition-colors group-hover:fill-white"
              />
            </svg>
          </div>

          <Image
            src="/logo.png"
            alt="RATZA Logo"
            width={160}
            height={53}
            priority
            className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(132,248,0,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(132,248,0,0.65)]"
          />
        </a>

        {/* Center Sound Toggle Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          type="button"
          className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-[#84f800] bg-black/70 px-5 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:bg-[#84f800]/10 hover:shadow-[0_0_20px_rgba(132,248,0,0.35)] active:scale-95"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {/* Sound wave icon */}
          <span className="flex items-center gap-0.5 text-[#84f800]">
            <span
              className={`inline-block w-0.5 rounded-full bg-[#84f800] transition-all duration-300 ${
                !isMuted ? "h-3.5 animate-pulse" : "h-2"
              }`}
            />
            <span
              className={`inline-block w-0.5 rounded-full bg-[#84f800] transition-all duration-300 ${
                !isMuted ? "h-4.5 animate-bounce" : "h-3.5"
              }`}
            />
            <span
              className={`inline-block w-0.5 rounded-full bg-[#84f800] transition-all duration-300 ${
                !isMuted ? "h-5 animate-pulse" : "h-2.5"
              }`}
            />
            <span
              className={`inline-block w-0.5 rounded-full bg-[#84f800] transition-all duration-300 ${
                !isMuted ? "h-3.5 animate-bounce" : "h-4"
              }`}
            />
            <span
              className={`inline-block w-0.5 rounded-full bg-[#84f800] transition-all duration-300 ${
                !isMuted ? "h-2 animate-pulse" : "h-1.5"
              }`}
            />
          </span>
          <span className="text-[13px] tracking-wide">
            {isMuted ? "Ativar som" : "Som ativado"}
          </span>
        </button>

        {/* Right Navigation Links & Hamburger */}
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 text-xs font-normal text-zinc-300 md:flex md:text-sm">
            <a
              href="#faq"
              className="transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-sm px-1 py-0.5"
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-sm px-1 py-0.5"
            >
              Contato
            </a>
            <a
              href="#sobre"
              className="transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-sm px-1 py-0.5"
            >
              Sobre
            </a>
          </nav>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:text-[#84f800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800]"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-zinc-800/80 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-center">
            {/* Mobile Sound Toggle */}
            <div className="flex justify-center pb-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#84f800] bg-black/80 px-5 py-2 text-xs font-medium text-white"
              >
                <span className="flex items-center gap-0.5 text-[#84f800]">
                  <span className="inline-block h-2 w-0.5 rounded-full bg-[#84f800]" />
                  <span className="inline-block h-3.5 w-0.5 rounded-full bg-[#84f800]" />
                  <span className="inline-block h-2.5 w-0.5 rounded-full bg-[#84f800]" />
                  <span className="inline-block h-4 w-0.5 rounded-full bg-[#84f800]" />
                </span>
                <span>{isMuted ? "Ativar som" : "Som ativado"}</span>
              </button>
            </div>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-zinc-300 transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-md"
            >
              FAQ
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-zinc-300 transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-md"
            >
              Contato
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-zinc-300 transition-colors hover:text-[#84f800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84f800] rounded-md"
            >
              Sobre
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

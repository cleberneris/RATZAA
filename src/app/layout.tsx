import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ratza | Scooters Elétricas • Liberdade e Estilo Urbano",
  description:
    "LIGUE, ACELERE E VÁ COM LIBERDADE ELÉTRICA. Scooters elétricas criadas para a praticidade, a liberdade e o estilo do seu dia a dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white selection:bg-[#84f800] selection:text-black">
        {children}
      </body>
    </html>
  );
}

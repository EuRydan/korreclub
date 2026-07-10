import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/ui/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "KORRE CLUB — DROP 001 · PRIMEIRA KORRERIA",
  description:
    "Clube de desafios de corrida. 70 medalhas numeradas em pré-venda. Corra, valide pelo Strava, receba sua medalha colecionável.",
  keywords: [
    "corrida",
    "medalha",
    "desafio",
    "korre club",
    "running",
    "strava",
    "medalha colecionável",
  ],
  openGraph: {
    title: "KORRE CLUB — DROP 001 · PRIMEIRA KORRERIA",
    description:
      "70 medalhas numeradas. Depois acabou. Garanta a sua no lote fundador.",
    type: "website",
    url: "https://korre.club",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E3E2DE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${archivoBlack.variable} font-[family-name:var(--font-inter)] antialiased bg-[#E3E2DE] text-[#141414]`}
        suppressHydrationWarning
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}

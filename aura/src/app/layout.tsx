import type { Metadata } from "next";
import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA — Imobiliária Boutique de Alto Padrão",
  description:
    "Curadoria exclusiva de imóveis off-market em Balneário Camboriú. A nova assinatura do luxo na Praia Brava.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

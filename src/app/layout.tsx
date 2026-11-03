import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} | Mentoria de revenda de perfumes`,
  description: site.description,
  openGraph: { title: `${site.name} | Mentoria`, description: site.description, locale: "pt_BR", type: "website" },
};

export const viewport: Viewport = { themeColor: "#04141c", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}

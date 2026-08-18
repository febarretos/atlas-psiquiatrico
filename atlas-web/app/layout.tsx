import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

import AppShell from "../components/AppShell";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Psiquiátrico",
  description: "Biblioteca clínica de Psiquiatria",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        <ServiceWorkerRegister />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
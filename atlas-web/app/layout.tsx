import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export const metadata: Metadata = {
  title: "Atlas Psiquiátrico",
  description: "Biblioteca clínica de Psiquiatria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-white">
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex flex-1 flex-col">
            <Topbar />

            <main className="flex-1 p-8 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
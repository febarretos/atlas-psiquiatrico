"use client";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950 px-8 flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold text-white">
          Atlas Psiquiátrico
        </h2>
      </div>

      <div className="w-[420px]">
        <input
          type="text"
          placeholder="Pesquisar medicamentos, diagnósticos, escalas..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
        />
      </div>

    </header>
  );
}
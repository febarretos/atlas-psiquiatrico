import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SESSION_COOKIE, expectedSessionValue } from "../../lib/auth";

interface Props {
  searchParams: Promise<{ from?: string; error?: string }>;
}

async function login(formData: FormData) {
  "use server";

  const senha = String(formData.get("senha") ?? "");
  const from = String(formData.get("from") ?? "/");
  const expected = expectedSessionValue();

  if (!expected || senha !== process.env.SITE_PASSWORD) {
    redirect(`/login?error=1&from=${encodeURIComponent(from)}`);
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, expected, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(from || "/");
}

export default async function LoginPage({ searchParams }: Props) {
  const { from = "/", error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <form
        action={login}
        className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-8"
      >
        <h1 className="text-2xl font-bold text-white">
          🧠 Atlas Psiquiátrico
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Acesso restrito. Informe a senha para continuar.
        </p>

        <input type="hidden" name="from" value={from} />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          autoFocus
          required
          className="mt-6 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
        />

        {error && (
          <p className="mt-3 text-sm text-red-400">Senha incorreta.</p>
        )}

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

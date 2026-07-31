import { createHash } from "crypto";

export const SESSION_COOKIE = "atlas_session";

// Deriva o valor do cookie de sessão a partir da senha configurada, para não
// guardar a senha em texto puro no cookie do navegador.
export function expectedSessionValue(): string | null {
  const password = process.env.SITE_PASSWORD;
  if (!password) return null;

  return createHash("sha256").update(password).digest("hex");
}

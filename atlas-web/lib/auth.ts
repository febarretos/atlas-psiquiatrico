import { createHash } from "crypto";

export const SESSION_COOKIE = "atlas_session";

// Deriva o valor do cookie de sessão a partir da senha configurada, para não
// guardar a senha em texto puro no cookie do navegador.
export function expectedSessionValue(): string | null {
  const password = process.env.SITE_PASSWORD;
  if (!password) return null;

  return createHash("sha256").update(password).digest("hex");
}

const JANELA_MS = 5 * 60 * 1000;
const LIMITE_TENTATIVAS = 10;

// Throttle simples em memória por chave (tipicamente IP) — mitiga tentativa
// de força bruta de senha sem exigir infraestrutura nova (Redis/KV). Não é
// garantia forte (zera a cada cold start/instância nova da função
// serverless), mas é barato e eleva o custo de um ataque automatizado
// ingênuo, que é o cenário real de risco pra uma senha única de acesso.
const tentativasPorChave = new Map<string, { contagem: number; desdeMs: number }>();

export function excedeuLimiteDeTentativas(chave: string): boolean {
  const agora = Date.now();
  const entrada = tentativasPorChave.get(chave);

  if (!entrada || agora - entrada.desdeMs > JANELA_MS) {
    tentativasPorChave.set(chave, { contagem: 1, desdeMs: agora });
    return false;
  }

  entrada.contagem++;
  return entrada.contagem > LIMITE_TENTATIVAS;
}

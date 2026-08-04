// Retry client-side pro erro 429 (quota excedida) do Gemini. O servidor
// (lib/gemini.ts) nunca dorme sozinho — dezenas de segundos de espera
// dentro de uma função serverless arriscam estourar o timeout da
// plataforma. Em vez disso a rota devolve o tempo sugerido e é o
// navegador que espera, com um contador visível pro usuário, e refaz a
// chamada uma única vez.
export interface RespostaQuotaExcedida {
  tipo: "quota";
  mensagem: string;
  retryDelaySegundos: number;
}

function ehRespostaQuota(dados: unknown): dados is RespostaQuotaExcedida {
  return (
    typeof dados === "object" &&
    dados !== null &&
    (dados as Record<string, unknown>).tipo === "quota" &&
    typeof (dados as Record<string, unknown>).retryDelaySegundos === "number"
  );
}

async function esperar(segundosTotais: number, aoContar: (segundosRestantes: number) => void) {
  for (let restante = Math.ceil(segundosTotais); restante > 0; restante--) {
    aoContar(restante);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

export interface ResultadoChamada {
  resposta: Response;
  dados: unknown;
}

// Chama `fazerRequisicao` uma vez. Se a resposta for especificamente um
// 429 de quota, aguarda o tempo sugerido (chamando `aoContar` a cada
// segundo, pra UI mostrar a contagem regressiva) e tenta mais uma vez —
// só essa vez. Qualquer outro resultado (sucesso ou erro que não seja de
// quota) volta direto, sem espera.
export async function chamarComRetryDeQuota(
  fazerRequisicao: () => Promise<Response>,
  aoContar: (segundosRestantes: number | null) => void
): Promise<ResultadoChamada> {
  const primeira = await fazerRequisicao();
  const primeirosDados = await primeira.json().catch(() => null);

  if (!(primeira.status === 429 && ehRespostaQuota(primeirosDados))) {
    return { resposta: primeira, dados: primeirosDados };
  }

  await esperar(primeirosDados.retryDelaySegundos, aoContar);
  aoContar(null);

  const segunda = await fazerRequisicao();
  const segundosDados = await segunda.json().catch(() => null);
  return { resposta: segunda, dados: segundosDados };
}

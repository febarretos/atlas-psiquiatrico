const ENDPOINT = "https://www.ebi.ac.uk/europepmc/webservices/rest/search";

export interface ArtigoInspiracao {
  titulo: string;
  abstractText: string;
  url: string;
}

interface EuropePmcResultado {
  id: string;
  source: string;
  title?: string;
  abstractText?: string;
}

interface EuropePmcResposta {
  hitCount?: number;
  resultList?: { result?: EuropePmcResultado[] };
}

// Europe PMC retorna abstractText com marcação HTML estrutural (<h4>,
// <p> etc.) — texto puro é mais limpo e mais barato em tokens no prompt.
function removerHtml(texto: string): string {
  return texto
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function buscar(query: string): Promise<EuropePmcResultado[]> {
  const url = `${ENDPOINT}?query=${encodeURIComponent(query)}&format=json&resultType=core&pageSize=5`;

  const resposta = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!resposta.ok) return [];

  const dados = (await resposta.json()) as EuropePmcResposta;
  return dados.resultList?.result ?? [];
}

// Busca relatos de caso reais, abertos e sem custo, para servir de
// inspiração de apresentação clínica (não de conteúdo a copiar — isso é
// reforçado no prompt). Nunca lança erro: Europe PMC fora do ar/lento não
// deve impedir a geração do caso, só faz cair no fallback sem inspiração
// externa.
//
// `termosAdicionais` refina a busca combinando o termo do diagnóstico com
// outros termos em ABSTRACT (ex.: "atypical presentation", "diagnostic
// dilemma") — usado pelo simulador pra priorizar relatos de apresentação
// atípica/desafio diagnóstico como inspiração de textura, sem afetar as
// chamadas existentes que não passam esse argumento.
export async function buscarInspiracao(
  termoIngles: string,
  termosAdicionais: string[] = []
): Promise<ArtigoInspiracao[]> {
  const clausulaAdicional =
    termosAdicionais.length > 0
      ? ` AND (${termosAdicionais.map((t) => `ABSTRACT:"${t}"`).join(" OR ")})`
      : "";

  const baseSemAdicional = `(TITLE:"case report") AND (ABSTRACT:"${termoIngles}") AND (SRC:MED) AND (OPEN_ACCESS:Y)`;
  const base = `${baseSemAdicional}${clausulaAdicional}`;

  try {
    let resultados = await buscar(`${base} AND (LICENSE:"cc by")`);
    if (resultados.length === 0) {
      resultados = await buscar(base);
    }
    // Os termos adicionais (ex.: "atypical presentation") restringem bastante
    // a busca — se não acharem nada, cai pro termo do diagnóstico sozinho em
    // vez de ficar sem nenhuma inspiração.
    if (resultados.length === 0 && clausulaAdicional) {
      resultados = await buscar(baseSemAdicional);
    }

    return resultados
      .filter((r): r is EuropePmcResultado & { title: string; abstractText: string } =>
        Boolean(r.title && r.abstractText)
      )
      .map((r) => ({
        titulo: r.title,
        abstractText: removerHtml(r.abstractText),
        url: `https://europepmc.org/article/${r.source}/${r.id}`,
      }));
  } catch {
    return [];
  }
}

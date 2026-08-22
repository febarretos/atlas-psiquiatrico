// Deriva o rótulo de trilha da Topbar ("Atlas / <tela>") a partir do
// pathname atual, com nomes amigáveis para as rotas dinâmicas (ex.:
// /medicamentos/Sertralina -> "Medicamentos / Sertralina").
import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { emergencias } from "../data/emergencias";
import { escalas } from "../data/escalas";
import { fluxogramas } from "../data/fluxogramas";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { casosClinicos } from "../data/casos-clinicos";

const ROTULOS_SEGMENTO: Record<string, string> = {
  medicamentos: "Medicamentos",
  diagnosticos: "Diagnósticos",
  emergencias: "Emergências",
  psicopatologia: "Psicopatologia",
  exame: "Exame do Estado Mental",
  escalas: "Escalas",
  fluxogramas: "Fluxogramas",
  assistente: "Assistente de Medicação",
  "entrevista-estruturada": "Entrevista Diagnóstica Estruturada",
  "casos-clinicos": "Casos Clínicos",
  "simulador-emergencia": "Simulador de Emergência",
  classes: "Por classe",
  categorias: "Por categoria",
};

const BUSCA_POR_SEGMENTO: Record<string, (id: string) => string | undefined> = {
  medicamentos: (id) => medicamentos.find((m) => m.nome === decodeURIComponent(id))?.nome,
  diagnosticos: (id) => diagnosticos.find((d) => d.id === id)?.nome,
  emergencias: (id) => emergencias.find((e) => e.id === id)?.nome,
  escalas: (id) => escalas.find((e) => e.id === id)?.nome,
  fluxogramas: (id) => fluxogramas.find((f) => f.id === id)?.titulo,
  psicopatologia: (id) => dominiosPsicopatologicos.find((d) => d.id === id)?.nome,
  "casos-clinicos": (id) => casosClinicos.find((c) => c.id === id)?.titulo,
};

function capitalizar(segmento: string): string {
  const texto = decodeURIComponent(segmento).replace(/-/g, " ");
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function getTrilha(pathname: string): string {
  const segmentos = pathname.split("/").filter(Boolean);

  if (segmentos.length === 0) return "Início";

  const [raiz, filho] = segmentos;
  const rotuloRaiz = ROTULOS_SEGMENTO[raiz] ?? capitalizar(raiz);

  if (!filho) return rotuloRaiz;

  const rotuloFilho =
    ROTULOS_SEGMENTO[filho] ?? BUSCA_POR_SEGMENTO[raiz]?.(filho) ?? capitalizar(filho);

  return `${rotuloRaiz} / ${rotuloFilho}`;
}

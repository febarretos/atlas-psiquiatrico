// Persistência local (somente neste navegador) dos achados
// psicopatológicos marcados como observados no paciente atual, pra
// montar o Exame do Estado Mental em components/ExameEstadoMentalPanel.tsx.
// Mesmo padrão de base de lib/favoritos.ts, mas guarda um objeto (não só
// a lista de ids) porque, ao contrário de favoritos, esta seleção é um
// dado de ENCONTRO CLÍNICO — efêmero e paciente-específico, não uma
// preferência permanente do usuário sobre o app. Por isso carrega
// também um timestamp (pra avisar se a seleção é "antiga" e pode ser de
// outro paciente) e o texto editado manualmente (pra sobreviver a
// navegação entre páginas sem perder a edição).

import type { DominioPsicopatologico } from "../data/psicopatologia/types";

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:exame-estado-mental";

// Achados puramente definicionais/comparativos (não são um fenômeno
// clínico observável num paciente específico) — não fazem sentido como
// afirmação clínica, então nem ganham o toggle "Observar no EEM".
export const ACHADOS_EXCLUIDOS_DO_EEM = new Set([
  "delirio-definicao-geral",
  "delirio-primario-secundario",
]);

// Achados cujo `nome` combina dois (ou mais) subtipos/fenômenos sob um
// único id — concatenar o nome cru produziria uma frase ambígua ou, em
// alguns casos, logicamente contraditória (ex.: "taquipsiquismo e
// bradipsiquismo" ao mesmo tempo). Quando marcados, o texto gerado usa
// este placeholder em vez do nome, pedindo a especificação que o toggle
// binário não consegue capturar.
export const ACHADOS_REQUEREM_ESPECIFICACAO: Record<string, string> = {
  "ideacao-suicida":
    "Ideação suicida/ideias de morte — [ESPECIFICAR: gradação (passiva/ativa), plano, intenção, fatores de risco/proteção; considerar C-SSRS]",
  "taquipsiquismo-bradipsiquismo": "[ESPECIFICAR: taquipsiquismo ou bradipsiquismo]",
  afasia: "Afasia — [ESPECIFICAR: fluente (Wernicke) ou não fluente (Broca)]",
  paramnesias: "Paramnésia — [ESPECIFICAR: déjà vu ou jamais vu]",
  "amnesia-anterograda-retrograda": "Amnésia — [ESPECIFICAR: anterógrada, retrógrada ou ambas]",
  "hipobulia-abulia-avolicao": "[ESPECIFICAR grau: hipobulia, abulia ou avolição]",
  "maneirismos-estereotipias": "[ESPECIFICAR: maneirismos e/ou estereotipias]",
  "ecolalia-ecopraxia": "[ESPECIFICAR: ecolalia e/ou ecopraxia]",
};

// Pares de achados clinicamente opostos que existem como ids separados
// — nada impede marcar os dois por engano de clique. Usado só pra
// avisar na UI antes de copiar; não impede a marcação.
export const PARES_ANTAGONICOS: [string, string][] = [
  ["hipotimia", "hipertimia"],
  ["hipoprosexia", "hiperprosexia"],
  ["agitacao-psicomotora", "retardo-psicomotor"],
  ["taquicronia", "bradicronia"],
];

interface EstadoExameEstadoMental {
  ids: string[];
  atualizadoEm: number;
  textoEditado?: string;
  // Snapshot dos ids no momento em que textoEditado foi salvo — o texto
  // editado só é restaurado se a seleção não mudou desde então.
  idsQuandoEditado?: string[];
}

const ESTADO_VAZIO: EstadoExameEstadoMental = { ids: [], atualizadoEm: 0 };

function carregarEstado(): EstadoExameEstadoMental {
  if (typeof window === "undefined") return ESTADO_VAZIO;

  try {
    const bruto = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return ESTADO_VAZIO;

    const dados = JSON.parse(bruto);

    // Formato antigo (primeira versão desta feature): array simples de ids.
    if (Array.isArray(dados)) {
      return { ids: dados, atualizadoEm: 0 };
    }

    if (dados && Array.isArray(dados.ids)) {
      return {
        ids: dados.ids,
        atualizadoEm: typeof dados.atualizadoEm === "number" ? dados.atualizadoEm : 0,
        textoEditado: typeof dados.textoEditado === "string" ? dados.textoEditado : undefined,
        idsQuandoEditado: Array.isArray(dados.idsQuandoEditado) ? dados.idsQuandoEditado : undefined,
      };
    }

    return ESTADO_VAZIO;
  } catch {
    return ESTADO_VAZIO;
  }
}

function salvarEstado(estado: EstadoExameEstadoMental) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(estado));
}

export function obterAchadosSelecionados(): string[] {
  return carregarEstado().ids;
}

// Filtra a seleção salva contra os achados que existem de fato hoje —
// protege contra ids "fantasma" se um achado for renomeado/removido em
// um commit futuro de conteúdo (a seleção sobrevive a deploys).
export function obterAchadosSelecionadosValidos(dominios: DominioPsicopatologico[]): string[] {
  const idsExistentes = new Set(dominios.flatMap((d) => d.achados.map((a) => a.id)));
  return carregarEstado().ids.filter((id) => idsExistentes.has(id));
}

export function obterAtualizadoEm(): number {
  return carregarEstado().atualizadoEm;
}

export function estaSelecionado(achadoId: string): boolean {
  return carregarEstado().ids.includes(achadoId);
}

// Retorna o novo estado (true = passou a estar selecionado).
export function alternarAchadoSelecionado(achadoId: string): boolean {
  const estado = carregarEstado();
  const jaEstava = estado.ids.includes(achadoId);
  const novosIds = jaEstava
    ? estado.ids.filter((id) => id !== achadoId)
    : [...estado.ids, achadoId];

  salvarEstado({ ...estado, ids: novosIds, atualizadoEm: Date.now() });
  return !jaEstava;
}

export function salvarTextoEditado(texto: string, idsAtuais: string[]) {
  const estado = carregarEstado();
  salvarEstado({ ...estado, textoEditado: texto, idsQuandoEditado: idsAtuais });
}

// Só retorna o texto editado se a seleção não mudou desde que ele foi
// salvo — evita restaurar uma edição que já não corresponde aos achados
// atualmente marcados.
export function obterTextoEditadoValido(idsAtuais: string[]): string | undefined {
  const estado = carregarEstado();
  if (estado.textoEditado === undefined || !estado.idsQuandoEditado) return undefined;

  const mesmaSelecao =
    estado.idsQuandoEditado.length === idsAtuais.length &&
    estado.idsQuandoEditado.every((id) => idsAtuais.includes(id));

  return mesmaSelecao ? estado.textoEditado : undefined;
}

export function limparSelecao() {
  salvarEstado({ ids: [], atualizadoEm: Date.now() });
}

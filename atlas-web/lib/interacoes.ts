import { Medicamento } from "../data/types";

export interface AlertaInteracao {
  tipo: "documentada" | "perfil-combinado";
  origem?: string;
  texto: string;
}

function temSedacaoAlta(m: Medicamento) {
  return m.sedacao === "Alta" || m.sedacao === "Muito alta";
}

function temQtAlto(m: Medicamento) {
  return m.qt === "Alto" || m.qt === "Muito alto";
}

function ehDepressorClasse(m: Medicamento) {
  return m.classe === "Benzodiazepínico" || m.classe === "Hipnótico";
}

const NIVEL_ANTICOLINERGICO: Record<NonNullable<Medicamento["cargaAnticolinergica"]>, number> = {
  Nenhuma: 0,
  Baixa: 1,
  Moderada: 2,
  Alta: 3,
};

function cargaAnticolinergica(m: Medicamento) {
  return NIVEL_ANTICOLINERGICO[m.cargaAnticolinergica ?? "Nenhuma"];
}

// Cruza os dois medicamentos: alertas de interação documentada na ficha de
// cada um (busca pelo nome do outro) + alertas heurísticos de perfil
// combinado (ex.: risco aditivo de QT/sedação), reutilizado tanto na
// checagem par a par quanto na varredura de todos os pares de um regime.
export function verificarPar(
  medA: Medicamento,
  medB: Medicamento
): AlertaInteracao[] {
  if (medA.id === medB.id) return [];

  const alertas: AlertaInteracao[] = [];

  (medA.interacoes ?? [])
    .filter((texto) => texto.toLowerCase().includes(medB.nome.toLowerCase()))
    .forEach((texto) => alertas.push({ tipo: "documentada", origem: medA.nome, texto }));

  (medB.interacoes ?? [])
    .filter((texto) => texto.toLowerCase().includes(medA.nome.toLowerCase()))
    .forEach((texto) => alertas.push({ tipo: "documentada", origem: medB.nome, texto }));

  if (temQtAlto(medA) && temQtAlto(medB)) {
    alertas.push({
      tipo: "perfil-combinado",
      texto:
        "Ambos têm risco alto de prolongamento do intervalo QT — risco aditivo relevante; considerar ECG basal e evitar a associação quando houver alternativa.",
    });
  }

  if (temSedacaoAlta(medA) && temSedacaoAlta(medB)) {
    alertas.push({
      tipo: "perfil-combinado",
      texto:
        "Ambos têm perfil de sedação alta — risco de sedação excessiva/depressão do SNC aditiva, com cautela redobrada em idosos ou uso concomitante de álcool.",
    });
  }

  if (medA.serotoninergico && medB.serotoninergico) {
    alertas.push({
      tipo: "perfil-combinado",
      texto:
        "Ambos têm atividade serotoninérgica clinicamente relevante — avaliar risco de síndrome serotoninérgica, especialmente no início do tratamento ou em doses altas.",
    });
  }

  if (ehDepressorClasse(medA) && ehDepressorClasse(medB)) {
    alertas.push({
      tipo: "perfil-combinado",
      texto:
        "Associação de dois depressores do SNC de classe benzodiazepínico/hipnótico — geralmente não recomendada; risco de sedação excessiva e depressão respiratória.",
    });
  }

  const cargaAnticolinergicaTotal = cargaAnticolinergica(medA) + cargaAnticolinergica(medB);
  if (cargaAnticolinergicaTotal >= 3) {
    alertas.push({
      tipo: "perfil-combinado",
      texto:
        "Carga anticolinérgica combinada relevante — efeito cumulativo (constipação, boca seca, retenção urinária, risco de confusão/delirium especialmente em idosos).",
    });
  }

  return alertas;
}

export interface ResultadoParInteracao {
  medA: Medicamento;
  medB: Medicamento;
  alertas: AlertaInteracao[];
}

// Todas as combinações par a par (sem repetição) de uma lista de
// medicamentos, com os respectivos alertas já calculados.
export function verificarRegime(medicamentosSelecionados: Medicamento[]): ResultadoParInteracao[] {
  const resultados: ResultadoParInteracao[] = [];

  for (let i = 0; i < medicamentosSelecionados.length; i++) {
    for (let j = i + 1; j < medicamentosSelecionados.length; j++) {
      const medA = medicamentosSelecionados[i];
      const medB = medicamentosSelecionados[j];

      resultados.push({ medA, medB, alertas: verificarPar(medA, medB) });
    }
  }

  return resultados;
}

import { medicamentos } from "../data/medicamentos";
import { Medicamento } from "../data/types";

export interface CondicaoAlvo {
  id: string;
  nome: string;

  // Strings exatas de Posologia.indicacao que correspondem a esta condição
  // — curado manualmente a partir dos dados reais em data/medicamentos,
  // já que o texto livre de `indicacao` tem variações (ex.: "TDAH em
  // Adultos", "TDAH (off-label)") que não devem ser adivinhadas por
  // heurística de texto, sob risco de agrupar coisas erradas.
  indicacoes: string[];
}

export const condicoesAlvo: CondicaoAlvo[] = [
  {
    id: "depressao-maior",
    nome: "Transtorno Depressivo Maior",
    indicacoes: ["Transtorno Depressivo Maior"],
  },
  {
    id: "tag",
    nome: "Transtorno de Ansiedade Generalizada (TAG)",
    indicacoes: [
      "Transtorno de Ansiedade Generalizada",
      "Transtorno de Ansiedade Generalizada (off-label)",
    ],
  },
  {
    id: "panico",
    nome: "Transtorno do Pânico",
    indicacoes: ["Transtorno do Pânico", "Transtorno do Pânico (off-label)"],
  },
  {
    id: "toc",
    nome: "Transtorno Obsessivo-Compulsivo (TOC)",
    indicacoes: ["Transtorno Obsessivo-Compulsivo"],
  },
  {
    id: "tept",
    nome: "Transtorno de Estresse Pós-Traumático (TEPT)",
    indicacoes: ["TEPT", "Transtorno de Estresse Pós-Traumático"],
  },
  {
    id: "fobia-social",
    nome: "Fobia Social / Ansiedade Social",
    indicacoes: [
      "Transtorno de Ansiedade Social",
      "Fobia Social",
      "Ansiedade (off-label, incl. Transtorno de Ansiedade Social)",
    ],
  },
  {
    id: "tcap",
    nome: "Transtorno de Compulsão Alimentar Periódica (TCAP)",
    indicacoes: ["Transtorno de Compulsão Alimentar Periódica"],
  },
  {
    id: "bulimia",
    nome: "Bulimia Nervosa",
    indicacoes: ["Bulimia Nervosa"],
  },
  {
    id: "tdah",
    nome: "TDAH",
    indicacoes: [
      "TDAH (liberação imediata)",
      "TDAH (liberação prolongada – OROS/LA)",
      "TDAH (off-label)",
      "TDAH em Adultos",
      "TDAH em Crianças e Adolescentes (peso < 70 kg)",
      "TDAH em Crianças e Adolescentes (peso ≥ 70 kg)",
      "TDAH em adolescentes e adultos",
      "TDAH em crianças (6–12 anos)",
    ],
  },
  {
    id: "esquizofrenia",
    nome: "Esquizofrenia",
    indicacoes: [
      "Esquizofrenia",
      "Esquizofrenia (injetável de ação prolongada mensal)",
      "Esquizofrenia (injetável de ação prolongada trimestral)",
      "Esquizofrenia (via oral, liberação prolongada OROS)",
      "Esquizofrenia Refratária",
      "Manutenção da Esquizofrenia (formulação depot)",
      "Redução de Comportamento Suicida na Esquizofrenia",
    ],
  },
  {
    id: "mania-aguda",
    nome: "Mania Aguda (Transtorno Bipolar)",
    indicacoes: ["Mania Aguda (Transtorno Bipolar)", "Transtorno Bipolar - Mania Aguda"],
  },
  {
    id: "depressao-bipolar",
    nome: "Depressão Bipolar",
    indicacoes: [
      "Depressão Bipolar",
      "Depressão Bipolar (associada à fluoxetina)",
      "Depressão Bipolar (monoterapia ou adjuvante a lítio/valproato)",
    ],
  },
  {
    id: "bipolar-profilaxia",
    nome: "Profilaxia/Manutenção do Transtorno Bipolar",
    indicacoes: [
      "Transtorno Bipolar - Profilaxia/Manutenção",
      "Profilaxia de Episódios Depressivos no Transtorno Bipolar (monoterapia)",
    ],
  },
  {
    id: "insonia",
    nome: "Insônia",
    indicacoes: [
      "Insônia (off-label)",
      "Insônia Comórbida a Ansiedade/Dor (off-label)",
      "Insônia associada à depressão",
      "Insônia de Início (dificuldade para iniciar o sono)",
      "Insônia em Idosos ou Hepatopatas",
      "Insônia/Ansiedade (off-label, doses baixas)",
    ],
  },
  {
    id: "dor-neuropatica",
    nome: "Dor Neuropática",
    indicacoes: [
      "Dor Neuropática",
      "Dor Neuropática Comórbida",
      "Dor Neuropática Diabética",
      "Dor neuropática",
      "Dor neuropática (off-label)",
    ],
  },
  {
    id: "fibromialgia",
    nome: "Fibromialgia",
    indicacoes: ["Fibromialgia", "Fibromialgia (comórbida)"],
  },
  {
    id: "tabagismo",
    nome: "Tabagismo",
    indicacoes: ["Tabagismo"],
  },
  {
    id: "tdpm",
    nome: "Transtorno Disfórico Pré-Menstrual (TDPM)",
    indicacoes: ["Transtorno Disfórico Pré-Menstrual"],
  },
  {
    id: "esquizoafetivo",
    nome: "Transtorno Esquizoafetivo",
    indicacoes: ["Transtorno Esquizoafetivo"],
  },
  {
    id: "agitacao-psicomotora",
    nome: "Agitação Psicomotora Aguda",
    indicacoes: [
      "Agitação Psicomotora",
      "Agitação Psicomotora Aguda",
      "Agitação Psicomotora Aguda (via IM)",
      "Agitação Psicomotora Aguda / Delirium",
    ],
  },
  {
    id: "catatonia",
    nome: "Catatonia",
    indicacoes: ["Catatonia"],
  },
  {
    id: "potencializacao-depressao-resistente",
    nome: "Potencialização em Depressão Resistente",
    indicacoes: [
      "Potencialização de Antidepressivos na Depressão Resistente",
      "Potencialização em Depressão Resistente (TDM)",
      "Potencialização em Depressão Resistente (TDM, off-label/XRO)",
    ],
  },
  {
    id: "disfuncao-sexual-isrs",
    nome: "Disfunção Sexual Induzida por ISRS",
    indicacoes: ["Disfunção sexual induzida por ISRS (off-label)"],
  },
];

export interface CoberturaAlvo {
  condicaoId: string;
  condicaoNome: string;
  indicacaoEncontrada: string;
  nivelEvidencia?: 1 | 2 | 3 | 4 | 5;
  // nivelEvidencia === 5 já significa, por convenção documentada no tipo
  // Posologia (data/types.ts), "primeira linha, aprovação regulatória e
  // forte recomendação em diretrizes" — badgear isso separado do número
  // de estrelas evita que um prescritor apressado leia "5 estrelas" como
  // sinônimo de "bem estudado" quando na verdade é o uso padrão-ouro.
  primeiraLinha: boolean;
}

export interface ResultadoTransdiagnostico {
  medicamento: Medicamento;
  cobertura: CoberturaAlvo[];
}

export function buscarMedicamentosTransdiagnostico(
  idsCondicoes: string[]
): ResultadoTransdiagnostico[] {
  const selecionadas = condicoesAlvo.filter((c) => idsCondicoes.includes(c.id));

  if (selecionadas.length === 0) return [];

  return medicamentos
    .map((m) => {
      const cobertura: CoberturaAlvo[] = [];

      for (const condicao of selecionadas) {
        const posologia = m.posologias.find((p) =>
          condicao.indicacoes.includes(p.indicacao)
        );

        if (posologia) {
          cobertura.push({
            condicaoId: condicao.id,
            condicaoNome: condicao.nome,
            indicacaoEncontrada: posologia.indicacao,
            nivelEvidencia: posologia.nivelEvidencia,
            primeiraLinha: posologia.nivelEvidencia === 5,
          });
        }
      }

      return { medicamento: m, cobertura };
    })
    .filter((r) => r.cobertura.length > 0)
    .sort((a, b) => {
      if (b.cobertura.length !== a.cobertura.length) {
        return b.cobertura.length - a.cobertura.length;
      }

      const somaA = a.cobertura.reduce((s, c) => s + (c.nivelEvidencia ?? 0), 0);
      const somaB = b.cobertura.reduce((s, c) => s + (c.nivelEvidencia ?? 0), 0);

      return somaB - somaA;
    });
}

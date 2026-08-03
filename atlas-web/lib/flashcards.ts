import { diagnosticos } from "../data/diagnosticos";
import { escalas } from "../data/escalas";
import { medicamentos } from "../data/medicamentos";
import { sintomas } from "../data/sintomas";

export interface Flashcard {
  id: string;
  frente: string;
  verso: string;
}

export interface Baralho {
  id: string;
  nome: string;
  descricao: string;
  gerar: () => Flashcard[];
}

function rotuloSintoma(id: string): string {
  return sintomas.find((s) => s.id === id)?.rotulo ?? id;
}

// Todos os baralhos abaixo são gerados a partir de dados já curados para
// outros módulos (sintomasChave do Assistente, faixas das escalas,
// diagnosticoDiferencial, perolasClinicas dos medicamentos) — nenhuma
// curadoria de conteúdo nova, só uma leitura diferente do que já existe.
function gerarSintomasChave(): Flashcard[] {
  return diagnosticos
    .filter((d) => (d.sintomasChave ?? []).some((c) => c.peso === 3))
    .map((d) => {
      const nucleares = d
        .sintomasChave!.filter((c) => c.peso === 3)
        .map((c) => rotuloSintoma(c.id));

      return {
        id: `sintomas-chave-${d.id}`,
        frente: `Qual sintoma-chave central (peso 3, quase patognomônico) de "${d.nome}"?`,
        verso: nucleares.join("; "),
      };
    });
}

function gerarFaixasEscalas(): Flashcard[] {
  return escalas.flatMap((e) =>
    e.faixas.map((f) => ({
      id: `faixa-${e.id}-${f.label}`,
      frente: `Na escala ${e.sigla}, qual a faixa de pontuação para "${f.label}"?`,
      verso: `${f.min}–${f.max} pontos`,
    }))
  );
}

function gerarDiferenciais(): Flashcard[] {
  return diagnosticos
    .filter((d) => d.diagnosticoDiferencial.length > 0)
    .map((d) => ({
      id: `diferencial-${d.id}`,
      frente: `Principais diagnósticos diferenciais de "${d.nome}"?`,
      verso: d.diagnosticoDiferencial.join(" | "),
    }));
}

function gerarPerolas(): Flashcard[] {
  return medicamentos.flatMap((m) =>
    (m.perolasClinicas ?? []).map((p, i) => ({
      id: `perola-${m.id}-${i}`,
      frente: `Pérola clínica sobre ${m.nome} (${m.classe}):`,
      verso: p,
    }))
  );
}

export const baralhos: Baralho[] = [
  {
    id: "sintomas-chave",
    nome: "Sintomas-chave centrais",
    descricao: "O sintoma quase-patognomônico (peso 3) de cada diagnóstico.",
    gerar: gerarSintomasChave,
  },
  {
    id: "faixas-escalas",
    nome: "Faixas de pontuação das escalas",
    descricao: "Pontos de corte e interpretação de cada escala.",
    gerar: gerarFaixasEscalas,
  },
  {
    id: "diferenciais",
    nome: "Diagnóstico diferencial",
    descricao: "Principais diferenciais de cada diagnóstico.",
    gerar: gerarDiferenciais,
  },
  {
    id: "perolas",
    nome: "Pérolas clínicas de medicamentos",
    descricao: "Revisão das pérolas clínicas cadastradas por medicamento.",
    gerar: gerarPerolas,
  },
];

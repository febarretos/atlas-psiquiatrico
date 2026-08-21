import test from "node:test";
import assert from "node:assert/strict";

import {
  gerarTextoMedicamento,
  gerarTextoDiagnostico,
  gerarTextoEscala,
  gerarTextoConduta,
  gerarTextoEvolucaoCasoInterativo,
  gerarTextoTendenciaEscala,
  gerarTextoEntrevistaEstruturada,
  limparRotuloParaTrilha,
  type RespostaModuloEntrevista,
} from "./gerarTextoProntuario.ts";

import type { Medicamento } from "../data/types.ts";
import type { Diagnostico, EntrevistaEstruturada } from "../data/diagnosticos/types.ts";
import type { Escala } from "../data/escalas/types.ts";
import type { FluxogramaNode } from "../data/fluxogramas/types.ts";
import type { EntradaHistorico } from "./historicoEscalas.ts";
import { voJardim } from "../data/casos-clinicos/vo-jardim.ts";
import { diagnosticos } from "../data/diagnosticos/index.ts";

// Fixtures deliberadamente independentes de data/medicamentos, data/
// diagnosticos etc. — os imports transitivos desses módulos usam paths
// sem extensão (resolvidos pelo Next, não pelo `node` puro do runner de
// teste), mesma limitação já contornada em assistenteScoring.test.ts.
// Os valores abaixo espelham fielmente o conteúdo real de sertralina.ts,
// depressao-maior.ts (diagnóstico e fluxograma) e phq9.ts no momento da
// escrita deste teste.

const sertralinaFixture: Medicamento = {
  id: "sertralina",
  nome: "Sertralina",
  classe: "Antidepressivo",
  subclasse: "ISRS",
  mecanismo: "Inibidor seletivo da recaptação de serotonina (ISRS).",
  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "50–200 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
  ],
  indicacoes: ["Transtorno Depressivo Maior"],
  vantagens: ["Excelente evidência científica"],
  desvantagens: ["Disfunção sexual"],
  ganhoPeso: "Baixo",
  sedacao: "Baixa",
  sexual: "Moderada",
  qt: "Baixo",
  gravidez: "Pode ser utilizada quando os benefícios superam os riscos.",
  lactacao: "Compatível com amamentação na maioria dos casos.",
  renal: "Não necessita ajuste de dose na insuficiência renal.",
  hepatica: "Considerar doses menores em insuficiência hepática.",
  observacoes: "Um dos antidepressivos mais versáteis da prática clínica.",
  perolasClinicas: [
    "Diarreia é o efeito gastrointestinal mais característico da sertralina entre os ISRS.",
  ],
  referencias: ["CANMAT 2023"],
};

const depressaoMaiorDiagnosticoFixture: Diagnostico = {
  id: "depressao-maior",
  nome: "Transtorno Depressivo Maior",
  categoria: "Transtornos do Humor",
  cid11: "6A70",
  cid10: "F32 / F33",
  descricao: "Transtorno de humor caracterizado por episódios depressivos.",
  criteriosDiagnosticos: ["Humor deprimido na maior parte do dia."],
  especificadores: [
    "Episódio único ou recorrente",
    "Com características melancólicas (anedonia profunda, falta de reatividade do humor, piora matinal, despertar precoce, retardo/agitação psicomotor marcante, anorexia significativa, culpa excessiva)",
  ],
  diagnosticoDiferencial: ["Transtorno de ajustamento"],
  tratamentoPrimeiraLinha: ["ISRS associado a psicoterapia"],
};

const phq9Fixture: Escala = {
  id: "phq9",
  nome: "Patient Health Questionnaire-9",
  sigla: "PHQ-9",
  categoria: "Depressão",
  descricao: "Instrumento de autorrelato para rastreio de sintomas depressivos.",
  instrucoes: "Nas últimas 2 semanas, com que frequência...",
  itens: Array.from({ length: 9 }, (_, i) => ({
    id: `phq9-${i + 1}`,
    texto: `Item ${i + 1}`,
    opcoes: [
      { label: "Nunca", valor: 0 },
      { label: "Vários dias", valor: 1 },
      { label: "Mais da metade dos dias", valor: 2 },
      { label: "Quase todos os dias", valor: 3 },
    ],
  })),
  faixas: [
    { min: 0, max: 4, label: "Depressão mínima", cor: "green" },
    { min: 5, max: 9, label: "Depressão leve", cor: "blue" },
    { min: 10, max: 14, label: "Depressão moderada", cor: "yellow" },
    { min: 15, max: 19, label: "Depressão moderadamente grave", cor: "red" },
    { min: 20, max: 27, label: "Depressão grave", cor: "red" },
  ],
};

const condutaCardiopatiaFixture: FluxogramaNode = {
  id: "conduta-combinado-cardiopatia",
  tipo: "conduta",
  nivel: "rotina",
  texto:
    "Antidepressivo com menor risco cardiovascular, associado a psicoterapia: sertralina tem o melhor perfil de segurança cardiovascular entre os ISRS.",
  medicamentosRelacionados: ["sertralina"],
};

test("gerarTextoMedicamento: sertralina em prosa, sem pérolas/referências", () => {
  const texto = gerarTextoMedicamento(sertralinaFixture);
  console.log("\n[medicamento]\n" + texto);

  assert.equal(
    texto,
    "Sertralina, iniciada na dose de 25–50 mg/dia, com plano de titulação até dose terapêutica (50–200 mg/dia) conforme resposta e tolerabilidade."
  );
  assert.ok(!texto.toLowerCase().includes("diarreia"));
});

test("gerarTextoDiagnostico: nome + CID, sem especificador", () => {
  const texto = gerarTextoDiagnostico(depressaoMaiorDiagnosticoFixture);
  console.log("\n[diagnóstico, sem especificador]\n" + texto);

  assert.equal(texto, "Transtorno Depressivo Maior (CID-11: 6A70).");
});

test("gerarTextoDiagnostico: com especificadores selecionados, remove o parêntese explicativo", () => {
  const texto = gerarTextoDiagnostico(
    depressaoMaiorDiagnosticoFixture,
    depressaoMaiorDiagnosticoFixture.especificadores
  );
  console.log("\n[diagnóstico, com especificadores]\n" + texto);

  assert.equal(
    texto,
    "Transtorno Depressivo Maior, Episódio único ou recorrente, Com características melancólicas (CID-11: 6A70)."
  );
});

test("gerarTextoEscala: PHQ-9 respondido, pontuação 14 -> depressão moderada", () => {
  const valoresEscolhidos = [3, 2, 2, 2, 1, 1, 1, 1, 1]; // soma = 14
  const pontuacao = valoresEscolhidos.reduce((a, b) => a + b, 0);
  const faixa = phq9Fixture.faixas.find((f) => pontuacao >= f.min && pontuacao <= f.max)!;

  const texto = gerarTextoEscala(phq9Fixture, valoresEscolhidos, pontuacao, faixa);
  console.log("\n[escala]\n" + texto);

  assert.equal(pontuacao, 14);
  assert.equal(faixa.label, "Depressão moderada");
  assert.equal(
    texto,
    "Aplicado PHQ-9 (Patient Health Questionnaire-9), pontuação total de 14, compatível com depressão moderada."
  );
});

test("gerarTextoConduta: nó de conduta real do fluxograma de depressão maior, com trilha", () => {
  const rotulosEscolhidos = [
    "Sim",
    "Sim, critérios confirmados",
    "Não, risco baixo",
    "Moderada a grave",
    "Cardiopatia / risco de QT longo",
  ];
  const trilha = rotulosEscolhidos.map(limparRotuloParaTrilha);

  const texto = gerarTextoConduta(condutaCardiopatiaFixture, trilha);
  console.log("\n[conduta]\n" + texto);

  // Só a primeira letra de cada rótulo é reduzida a minúscula — "QT"
  // continua maiúsculo, corretamente, por ser uma sigla.
  assert.equal(
    texto,
    "Conduta: Antidepressivo com menor risco cardiovascular, associado a psicoterapia: sertralina tem o melhor perfil de segurança cardiovascular entre os ISRS. Baseado em avaliação de sim, critérios confirmados, risco baixo, moderada a grave, cardiopatia / risco de QT longo."
  );
});

test("gerarTextoEvolucaoCasoInterativo: caminho 'bom' pelo caso real vo-jardim, até o desfecho", () => {
  const diagnosticoReal = diagnosticos.find((d) => d.id === voJardim.diagnosticoId)!;

  // Percorre manualmente o caminho "ideal" do caso real (mesmos ids de nó
  // usados em data/casos-clinicos/vo-jardim.ts) — simula o que o
  // CasoInterativoPlayer acumularia jogando até o desfecho-bom.
  const porId = new Map(voJardim.nos.map((n) => [n.id, n]));
  const idsDoCaminho = ["entrevista-jardim", "exames-completo", "conduta-boa", "evolucao-boa"];
  const opcoesEscolhidas = idsDoCaminho.map((id) => porId.get(id)!.opcoes[0]);

  const texto = gerarTextoEvolucaoCasoInterativo(voJardim, diagnosticoReal, opcoesEscolhidas);
  console.log("\n[caso interativo]\n" + texto);

  assert.ok(texto.startsWith('Nota de evolução (caso simulado "O Vô Que Só Queria Cuidar do Jardim")'));
  assert.ok(texto.includes("Transtorno Depressivo Maior (CID-11: 6A70 (episódio único) / 6A71 (recorrente))"));
  assert.ok(texto.includes("Conduta seguida ao longo do caso:"));
  // Rótulos de opção não devem carregar aspas internas soltas nem os
  // marcadores de qualidadeDecisao — só o texto da escolha em si.
  assert.ok(!texto.includes("ideal"));
  assert.ok(!texto.includes("problematica"));
});

test("gerarTextoEvolucaoCasoInterativo: sem decisões tomadas ainda, gera só o cabeçalho", () => {
  const diagnosticoReal = diagnosticos.find((d) => d.id === voJardim.diagnosticoId)!;
  const texto = gerarTextoEvolucaoCasoInterativo(voJardim, diagnosticoReal, []);

  assert.equal(
    texto,
    'Nota de evolução (caso simulado "O Vô Que Só Queria Cuidar do Jardim"): diagnóstico Transtorno Depressivo Maior (CID-11: 6A70 (episódio único) / 6A71 (recorrente)).'
  );
});

function entradaCiwaFixture(pontuacao: number, dataISO: string): EntradaHistorico {
  return {
    id: `ciwa-ar-fixture-${dataISO}`,
    escalaId: "ciwa-ar",
    pacienteLabel: "J.S.",
    dataISO,
    pontuacao,
    faixaLabel: "fixture",
    faixaCor: "red",
  };
}

test("gerarTextoTendenciaEscala: pontuação caiu entre as duas aplicações mais recentes", () => {
  const entradas = [
    entradaCiwaFixture(24, "2026-08-05T10:00:00.000Z"),
    entradaCiwaFixture(12, "2026-08-07T10:00:00.000Z"),
  ];

  const texto = gerarTextoTendenciaEscala("CIWA-Ar", entradas);
  console.log("\n[tendência, caiu]\n" + texto);

  assert.equal(texto, "CIWA-Ar caiu de 24 para 12 pontos entre 05/08/26 e 07/08/26.");
});

test("gerarTextoTendenciaEscala: pontuação subiu, e ordem das entradas de entrada não importa", () => {
  // Entradas propositalmente fora de ordem cronológica — a função deve
  // ordenar por dataISO antes de comparar as duas mais recentes.
  const entradas = [
    entradaCiwaFixture(18, "2026-08-07T10:00:00.000Z"),
    entradaCiwaFixture(9, "2026-08-05T10:00:00.000Z"),
  ];

  const texto = gerarTextoTendenciaEscala("CIWA-Ar", entradas);

  assert.equal(texto, "CIWA-Ar subiu de 9 para 18 pontos entre 05/08/26 e 07/08/26.");
});

test("gerarTextoTendenciaEscala: pontuação estável entre as duas aplicações mais recentes", () => {
  const entradas = [
    entradaCiwaFixture(10, "2026-08-05T10:00:00.000Z"),
    entradaCiwaFixture(10, "2026-08-07T10:00:00.000Z"),
  ];

  const texto = gerarTextoTendenciaEscala("CIWA-Ar", entradas);

  assert.equal(texto, "CIWA-Ar manteve-se estável em 10 pontos entre 05/08/26 e 07/08/26.");
});

test("gerarTextoTendenciaEscala: com menos de 2 entradas, devolve string vazia", () => {
  assert.equal(gerarTextoTendenciaEscala("CIWA-Ar", []), "");
  assert.equal(
    gerarTextoTendenciaEscala("CIWA-Ar", [entradaCiwaFixture(10, "2026-08-05T10:00:00.000Z")]),
    ""
  );
});

// ─────────────────────────────────────────────────────────────
// gerarTextoEntrevistaEstruturada — nota gerada a partir dos módulos de
// Entrevista Estruturada (SCID) respondidos.
// ─────────────────────────────────────────────────────────────

function diagnosticoComEntrevistaFixture(overrides: Partial<EntrevistaEstruturada> = {}): Diagnostico {
  return {
    ...depressaoMaiorDiagnosticoFixture,
    entrevistaEstruturada: {
      criteriosRastreioIds: ["a1"],
      criterios: [
        { id: "a1", pergunta: "Humor deprimido na maior parte do dia?" },
        { id: "a2", pergunta: "Perda de interesse ou prazer?" },
      ],
      algoritmo: {
        contagemMinima: 2,
        itensContaveis: ["a1", "a2"],
        duracaoMinima: "2 semanas",
        observacaoExclusao: "Não atribuível a efeito de substância.",
      },
      ...overrides,
    },
  };
}

test("gerarTextoEntrevistaEstruturada: sem módulos com rastreio positivo, devolve string vazia", () => {
  const modulos: RespostaModuloEntrevista[] = [
    { diagnostico: diagnosticoComEntrevistaFixture(), respostasCriterios: new Map([["a1", false]]) },
  ];
  assert.equal(gerarTextoEntrevistaEstruturada(modulos), "");
});

test("gerarTextoEntrevistaEstruturada: módulo aberto mas critérios formais não atingidos — sem a frase de confirmação", () => {
  const modulos: RespostaModuloEntrevista[] = [
    { diagnostico: diagnosticoComEntrevistaFixture(), respostasCriterios: new Map([["a1", true]]) },
  ];
  const texto = gerarTextoEntrevistaEstruturada(modulos);
  console.log("\n[entrevista, não atingidos]\n" + texto);

  assert.ok(texto.includes("critérios formais não atingidos (1/2)"));
  assert.ok(texto.includes("[x] Humor deprimido na maior parte do dia?"));
  assert.ok(!texto.includes("[x] Perda de interesse"));
  assert.ok(texto.includes("Duração mínima exigida: 2 semanas"));
  assert.ok(texto.includes("Não atribuível a efeito de substância."));
});

test("gerarTextoEntrevistaEstruturada: critérios formais atingidos — inclui contagem e lembrete de confirmação", () => {
  const modulos: RespostaModuloEntrevista[] = [
    {
      diagnostico: diagnosticoComEntrevistaFixture(),
      respostasCriterios: new Map([["a1", true], ["a2", true]]),
    },
  ];
  const texto = gerarTextoEntrevistaEstruturada(modulos);
  console.log("\n[entrevista, atingidos]\n" + texto);

  assert.ok(texto.includes("critérios formais atingidos (2/2) — confirmar duração e exclusões"));
});

test("gerarTextoEntrevistaEstruturada: itensContaveis vazio (ex.: TEPT) não mostra contagem tipo 0/0", () => {
  const diagnostico = diagnosticoComEntrevistaFixture({
    algoritmo: {
      itensContaveis: [],
      gruposObrigatorios: [["a1"]],
    },
  });
  const modulos: RespostaModuloEntrevista[] = [
    { diagnostico, respostasCriterios: new Map([["a1", true]]) },
  ];
  const texto = gerarTextoEntrevistaEstruturada(modulos);
  console.log("\n[entrevista, sem itensContaveis]\n" + texto);

  assert.ok(!texto.includes("0/0"));
  assert.ok(texto.includes("critérios formais atingidos —"));
});

test("gerarTextoEntrevistaEstruturada: agrupa por categoria e ignora módulos sem entrevistaEstruturada", () => {
  const modulos: RespostaModuloEntrevista[] = [
    { diagnostico: diagnosticoComEntrevistaFixture(), respostasCriterios: new Map([["a1", true]]) },
    { diagnostico: depressaoMaiorDiagnosticoFixture, respostasCriterios: new Map() },
  ];
  const texto = gerarTextoEntrevistaEstruturada(modulos);

  assert.ok(texto.startsWith("ENTREVISTA ESTRUTURADA — módulos com rastreio positivo:"));
  assert.ok(texto.includes("## Transtornos do Humor"));
  assert.equal(texto.match(/Transtorno Depressivo Maior:/g)?.length, 1);
});

test("limparRotuloParaTrilha: remove prefixo sim/não e ajusta caixa", () => {
  assert.equal(limparRotuloParaTrilha("Não, risco baixo"), "risco baixo");
  assert.equal(limparRotuloParaTrilha("Sim, critérios confirmados"), "critérios confirmados");
  assert.equal(limparRotuloParaTrilha("Moderada a grave"), "moderada a grave");
  assert.equal(limparRotuloParaTrilha("Sim"), "sim");
});

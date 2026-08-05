import test from "node:test";
import assert from "node:assert/strict";

import {
  gerarTextoMedicamento,
  gerarTextoDiagnostico,
  gerarTextoEscala,
  gerarTextoConduta,
  gerarTextoSimulador,
  limparRotuloParaTrilha,
} from "./gerarTextoProntuario.ts";

import type { Medicamento } from "../data/types.ts";
import type { Diagnostico } from "../data/diagnosticos/types.ts";
import type { Escala } from "../data/escalas/types.ts";
import type { FluxogramaNode } from "../data/fluxogramas/types.ts";
import { voJardim } from "../data/simulador/vo-jardim.ts";
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

test("gerarTextoSimulador: caminho 'bom' pelo caso real vo-jardim, até o desfecho", () => {
  const diagnosticoReal = diagnosticos.find((d) => d.id === voJardim.diagnosticoRealId)!;

  // Percorre manualmente o caminho "ideal" do caso real (mesmos ids de nó
  // usados em data/simulador/vo-jardim.ts) — simula o que o
  // SimuladorPlayer acumularia jogando até o desfecho-bom.
  const porId = new Map(voJardim.nos.map((n) => [n.id, n]));
  const idsDoCaminho = ["entrevista-jardim", "exames-completo", "conduta-boa", "evolucao-boa"];
  const opcoesEscolhidas = idsDoCaminho.map((id) => porId.get(id)!.opcoes[0]);

  const texto = gerarTextoSimulador(voJardim, diagnosticoReal, opcoesEscolhidas);
  console.log("\n[simulador]\n" + texto);

  assert.ok(texto.startsWith('Nota de evolução (caso simulado "O Vô Que Só Queria Cuidar do Jardim")'));
  assert.ok(texto.includes("Transtorno Depressivo Maior (CID-11: 6A70)"));
  assert.ok(texto.includes("Conduta seguida ao longo do caso:"));
  // Rótulos de opção não devem carregar aspas internas soltas nem os
  // marcadores de qualidadeDecisao — só o texto da escolha em si.
  assert.ok(!texto.includes("ideal"));
  assert.ok(!texto.includes("problematica"));
});

test("gerarTextoSimulador: sem decisões tomadas ainda, gera só o cabeçalho", () => {
  const diagnosticoReal = diagnosticos.find((d) => d.id === voJardim.diagnosticoRealId)!;
  const texto = gerarTextoSimulador(voJardim, diagnosticoReal, []);

  assert.equal(
    texto,
    'Nota de evolução (caso simulado "O Vô Que Só Queria Cuidar do Jardim"): diagnóstico Transtorno Depressivo Maior (CID-11: 6A70).'
  );
});

test("limparRotuloParaTrilha: remove prefixo sim/não e ajusta caixa", () => {
  assert.equal(limparRotuloParaTrilha("Não, risco baixo"), "risco baixo");
  assert.equal(limparRotuloParaTrilha("Sim, critérios confirmados"), "critérios confirmados");
  assert.equal(limparRotuloParaTrilha("Moderada a grave"), "moderada a grave");
  assert.equal(limparRotuloParaTrilha("Sim"), "sim");
});

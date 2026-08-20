import test from "node:test";
import assert from "node:assert/strict";

import { diagnosticos } from "../data/diagnosticos/index.ts";
import type { EntrevistaEstruturada } from "../data/diagnosticos/types.ts";
import { avaliarAlgoritmo, avaliarRastreio, contagemExibivel } from "./entrevistaEstruturada.ts";
import { validarIntegridadeEntrevista } from "./validarEntrevistaEstruturada.ts";

// ─────────────────────────────────────────────────────────────
// Cada entrevistaEstruturada real (autorada) precisa passar sem
// nenhum problema — mesmo padrão de lib/fluxogramas.test.ts.
// ─────────────────────────────────────────────────────────────
for (const diagnostico of diagnosticos) {
  if (!diagnostico.entrevistaEstruturada) continue;

  test(`${diagnostico.id}: entrevistaEstruturada passa na validação de integridade`, () => {
    const problemas = validarIntegridadeEntrevista(diagnostico.entrevistaEstruturada!);
    assert.deepEqual(problemas, [], problemas.join("\n"));
  });

  // Invariante de satisfatibilidade: respondendo TODOS os critérios como
  // positivos, o algoritmo formal precisa necessariamente fechar. Se não
  // fechar, há um erro estrutural (id referenciado errado, contagemMinima
  // .../subgrupo mal calibrado) que a validação de integridade sozinha não
  // pega — foi assim que os bugs de TOC/TAG/TDAH desta mesma base foram
  // encontrados manualmente; este teste automatiza essa checagem pros 33.
  test(`${diagnostico.id}: entrevistaEstruturada é satisfazível (todos os critérios positivos fecha o algoritmo formal)`, () => {
    const entrevista = diagnostico.entrevistaEstruturada!;
    const todosPositivos = new Map(entrevista.criterios.map((c) => [c.id, true]));
    const resultado = avaliarAlgoritmo(todosPositivos, entrevista.algoritmo);
    assert.equal(
      resultado.criteriosFormaisAtingidos,
      true,
      `com todos os ${entrevista.criterios.length} critérios positivos, o algoritmo formal deveria fechar`
    );
  });

  // Invariante de rastreio: pelo menos 1 critério de rastreio precisa
  // conseguir, sozinho, abrir o módulo (avaliarRastreio "positivo") — já
  // garantido estruturalmente por criteriosRastreioIds não vazio (checado
  // pelo validador), mas este teste exercita avaliarRastreio de verdade.
  test(`${diagnostico.id}: pelo menos 1 critério de rastreio abre o módulo sozinho`, () => {
    const entrevista = diagnostico.entrevistaEstruturada!;
    const primeiroRastreioId = entrevista.criteriosRastreioIds[0];
    const estado = avaliarRastreio(new Map([[primeiroRastreioId, true]]), entrevista.criteriosRastreioIds);
    assert.equal(estado, "positivo");
  });
}

// ─────────────────────────────────────────────────────────────
// Prova de que o validador pega cada classe de problema — fixture
// quebrada de propósito, passada pelo validador real.
// ─────────────────────────────────────────────────────────────

const entrevistaBase: EntrevistaEstruturada = {
  criteriosRastreioIds: ["a1"],
  criterios: [
    { id: "a1", pergunta: "...", grupo: "A" },
    { id: "a2", pergunta: "...", grupo: "A" },
    { id: "b", pergunta: "..." },
    { id: "c", pergunta: "..." },
  ],
  algoritmo: {
    contagemMinima: 2,
    itensContaveis: ["a1", "a2", "b", "c"],
    gruposObrigatorios: [["a1", "a2"]],
  },
};

test("validarIntegridadeEntrevista: uma entrevista bem formada não gera problema nenhum", () => {
  assert.deepEqual(validarIntegridadeEntrevista(entrevistaBase), []);
});

test("validarIntegridadeEntrevista: pega id de critério duplicado", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    criterios: [...entrevistaBase.criterios, { id: "a1", pergunta: "duplicado" }],
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("duplicado")));
});

test("validarIntegridadeEntrevista: pega criteriosRastreioIds vazio", () => {
  const quebrada: EntrevistaEstruturada = { ...entrevistaBase, criteriosRastreioIds: [] };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("criteriosRastreioIds") && p.includes("vazio")));
});

test("validarIntegridadeEntrevista: pega criteriosRastreioIds referenciando critério que não existe", () => {
  const quebrada: EntrevistaEstruturada = { ...entrevistaBase, criteriosRastreioIds: ["a1", "fantasma"] };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("criteriosRastreioIds") && p.includes("fantasma")));
});

test("validarIntegridadeEntrevista: pega itensContaveis apontando pra critério inexistente", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: { ...entrevistaBase.algoritmo, itensContaveis: [...entrevistaBase.algoritmo.itensContaveis, "fantasma"] },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("itensContaveis") && p.includes("fantasma")));
});

test("validarIntegridadeEntrevista: pega contagemMinima maior que o total de itensContaveis", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: { ...entrevistaBase.algoritmo, contagemMinima: 99 },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("contagemMinima")));
});

test("validarIntegridadeEntrevista: pega grupoObrigatorio vazio", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: { ...entrevistaBase.algoritmo, gruposObrigatorios: [[]] },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("vazio")));
});

test("validarIntegridadeEntrevista: pega gruposObrigatorios apontando pra critério inexistente", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: { ...entrevistaBase.algoritmo, gruposObrigatorios: [["fantasma"]] },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("gruposObrigatorios") && p.includes("fantasma")));
});

// ─────────────────────────────────────────────────────────────
// avaliarAlgoritmo — lógica pura de contagem/subgrupo.
// ─────────────────────────────────────────────────────────────

function marcados(entradas: [string, boolean][]): Map<string, boolean> {
  return new Map(entradas);
}

test("avaliarAlgoritmo: contagem mínima não atingida", () => {
  const resultado = avaliarAlgoritmo(
    marcados([["a1", true], ["a2", false], ["b", false], ["c", false]]),
    entrevistaBase.algoritmo
  );
  assert.equal(resultado.contagemPositiva, 1);
  assert.equal(resultado.contagemMinimaAtingida, false);
  assert.equal(resultado.criteriosFormaisAtingidos, false);
});

test("avaliarAlgoritmo: contagem mínima atingida mas grupo obrigatório não — não fecha", () => {
  const resultado = avaliarAlgoritmo(
    marcados([["a1", false], ["a2", false], ["b", true], ["c", true]]),
    entrevistaBase.algoritmo
  );
  assert.equal(resultado.contagemPositiva, 2);
  assert.equal(resultado.contagemMinimaAtingida, true);
  assert.equal(resultado.gruposObrigatoriosAtingidos, false);
  assert.equal(resultado.criteriosFormaisAtingidos, false);
});

test("avaliarAlgoritmo: contagem mínima E grupo obrigatório atingidos — fecha", () => {
  const resultado = avaliarAlgoritmo(
    marcados([["a1", true], ["a2", false], ["b", true], ["c", false]]),
    entrevistaBase.algoritmo
  );
  assert.equal(resultado.contagemPositiva, 2);
  assert.equal(resultado.criteriosFormaisAtingidos, true);
});

test("avaliarAlgoritmo: um único item satisfaz o grupo obrigatório sozinho (OR dentro do grupo)", () => {
  const resultado = avaliarAlgoritmo(
    marcados([["a1", false], ["a2", true]]),
    { contagemMinima: 1, itensContaveis: ["a2"], gruposObrigatorios: [["a1", "a2"]] }
  );
  assert.equal(resultado.gruposObrigatoriosAtingidos, true);
});

test("avaliarAlgoritmo: dois subgrupos obrigatórios diferentes exigem AND entre eles", () => {
  const algoritmo = {
    itensContaveis: [],
    gruposObrigatorios: [["a1", "a2"], ["b"]],
  };
  const soUmGrupo = avaliarAlgoritmo(marcados([["a1", true], ["b", false]]), algoritmo);
  assert.equal(soUmGrupo.gruposObrigatoriosAtingidos, false);

  const ambosGrupos = avaliarAlgoritmo(marcados([["a1", true], ["b", true]]), algoritmo);
  assert.equal(ambosGrupos.gruposObrigatoriosAtingidos, true);
});

test("avaliarAlgoritmo: sem contagemMinima definida, considera atingida por padrão (só o grupo obrigatório importa)", () => {
  const resultado = avaliarAlgoritmo(
    marcados([["a1", true]]),
    { itensContaveis: [], gruposObrigatorios: [["a1"]] }
  );
  assert.equal(resultado.contagemMinimaAtingida, true);
  assert.equal(resultado.criteriosFormaisAtingidos, true);
});

// ─────────────────────────────────────────────────────────────
// avaliarRastreio — OR entre os critérios de rastreio.
// ─────────────────────────────────────────────────────────────

test("avaliarRastreio: nenhum item de rastreio respondido ainda — pendente", () => {
  assert.equal(avaliarRastreio(new Map(), ["a1", "a2"]), "pendente");
});

test("avaliarRastreio: um item ainda não respondido, outro negativo — continua pendente", () => {
  assert.equal(avaliarRastreio(marcados([["a1", false]]), ["a1", "a2"]), "pendente");
});

test("avaliarRastreio: todos os itens de rastreio respondidos negativos — pulado", () => {
  assert.equal(avaliarRastreio(marcados([["a1", false], ["a2", false]]), ["a1", "a2"]), "pulado");
});

test("avaliarRastreio: um item positivo já basta, mesmo com outro ainda pendente — positivo", () => {
  assert.equal(avaliarRastreio(marcados([["a1", true]]), ["a1", "a2"]), "positivo");
});

test("avaliarRastreio: segundo item positivo depois do primeiro negativo — positivo", () => {
  assert.equal(avaliarRastreio(marcados([["a1", false], ["a2", true]]), ["a1", "a2"]), "positivo");
});

// ─────────────────────────────────────────────────────────────
// subgruposComMinimo — generalização de gruposObrigatorios com
// mínimo > 1 (ex: TEPT exige >=2 de 7 no critério D).
// ─────────────────────────────────────────────────────────────

test("avaliarAlgoritmo: subgruposComMinimo não atingido (1 de 2 exigidos) bloqueia o fechamento mesmo com contagem geral OK", () => {
  const algoritmo = {
    itensContaveis: ["d1", "d2", "d3"],
    contagemMinima: 1,
    subgruposComMinimo: [{ itens: ["d1", "d2", "d3"], minimo: 2 }],
  };
  const resultado = avaliarAlgoritmo(marcados([["d1", true], ["d2", false], ["d3", false]]), algoritmo);
  assert.equal(resultado.contagemMinimaAtingida, true);
  assert.equal(resultado.subgruposComMinimoAtingidos, false);
  assert.equal(resultado.criteriosFormaisAtingidos, false);
});

test("avaliarAlgoritmo: subgruposComMinimo atingido quando o mínimo do subgrupo é alcançado", () => {
  const algoritmo = {
    itensContaveis: ["d1", "d2", "d3"],
    subgruposComMinimo: [{ itens: ["d1", "d2", "d3"], minimo: 2 }],
  };
  const resultado = avaliarAlgoritmo(marcados([["d1", true], ["d2", true], ["d3", false]]), algoritmo);
  assert.equal(resultado.subgruposComMinimoAtingidos, true);
  assert.equal(resultado.criteriosFormaisAtingidos, true);
});

test("avaliarAlgoritmo: múltiplos subgruposComMinimo exigem AND entre eles (cada um com seu próprio mínimo)", () => {
  const algoritmo = {
    itensContaveis: [],
    subgruposComMinimo: [
      { itens: ["d1", "d2"], minimo: 2 },
      { itens: ["e1", "e2", "e3"], minimo: 2 },
    ],
  };
  const soUmSubgrupo = avaliarAlgoritmo(
    marcados([["d1", true], ["d2", true], ["e1", true], ["e2", false], ["e3", false]]),
    algoritmo
  );
  assert.equal(soUmSubgrupo.subgruposComMinimoAtingidos, false);

  const ambosSubgrupos = avaliarAlgoritmo(
    marcados([["d1", true], ["d2", true], ["e1", true], ["e2", true], ["e3", false]]),
    algoritmo
  );
  assert.equal(ambosSubgrupos.subgruposComMinimoAtingidos, true);
});

test("validarIntegridadeEntrevista: pega subgruposComMinimo com minimo maior que o total de itens do subgrupo", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: {
      ...entrevistaBase.algoritmo,
      subgruposComMinimo: [{ itens: ["b", "c"], minimo: 5 }],
    },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("subgruposComMinimo") && p.includes("minimo")));
});

test("validarIntegridadeEntrevista: pega subgruposComMinimo referenciando critério inexistente", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: {
      ...entrevistaBase.algoritmo,
      subgruposComMinimo: [{ itens: ["fantasma"], minimo: 1 }],
    },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("subgruposComMinimo") && p.includes("fantasma")));
});

// ─────────────────────────────────────────────────────────────
// alternativas — OR recursivo entre sub-regras completas (ex: TDAH
// fecha com >=6 de 9 em desatenção OU >=6 de 9 em hiperatividade, nunca
// somando os dois grupos).
// ─────────────────────────────────────────────────────────────

test("avaliarAlgoritmo: alternativas — nenhuma bate, não fecha (ainda que a soma global bateria)", () => {
  const algoritmo = {
    itensContaveis: [],
    alternativas: [
      { itensContaveis: ["i1", "i2", "i3"], contagemMinima: 3 },
      { itensContaveis: ["h1", "h2", "h3"], contagemMinima: 3 },
    ],
  };
  // 2 de cada grupo = 4 no total, mas nenhum grupo isolado bate 3.
  const resultado = avaliarAlgoritmo(
    marcados([["i1", true], ["i2", true], ["h1", true], ["h2", true]]),
    algoritmo
  );
  assert.equal(resultado.alternativasAtingidas, false);
  assert.equal(resultado.criteriosFormaisAtingidos, false);
});

test("avaliarAlgoritmo: alternativas — uma bate sozinha, fecha", () => {
  const algoritmo = {
    itensContaveis: [],
    alternativas: [
      { itensContaveis: ["i1", "i2", "i3"], contagemMinima: 3 },
      { itensContaveis: ["h1", "h2", "h3"], contagemMinima: 3 },
    ],
  };
  const resultado = avaliarAlgoritmo(
    marcados([["i1", true], ["i2", true], ["i3", true], ["h1", true]]),
    algoritmo
  );
  assert.equal(resultado.alternativasAtingidas, true);
  assert.equal(resultado.criteriosFormaisAtingidos, true);
});

test("avaliarAlgoritmo: alternativas combinam via AND com gruposObrigatorios do mesmo nível", () => {
  const algoritmo = {
    itensContaveis: [],
    gruposObrigatorios: [["prejuizo"]],
    alternativas: [{ itensContaveis: ["i1"], contagemMinima: 1 }],
  };
  const semPrejuizo = avaliarAlgoritmo(marcados([["i1", true], ["prejuizo", false]]), algoritmo);
  assert.equal(semPrejuizo.criteriosFormaisAtingidos, false);

  const comPrejuizo = avaliarAlgoritmo(marcados([["i1", true], ["prejuizo", true]]), algoritmo);
  assert.equal(comPrejuizo.criteriosFormaisAtingidos, true);
});

test("validarIntegridadeEntrevista: pega id inexistente dentro de uma alternativa", () => {
  const quebrada: EntrevistaEstruturada = {
    ...entrevistaBase,
    algoritmo: {
      ...entrevistaBase.algoritmo,
      alternativas: [{ itensContaveis: ["fantasma"], contagemMinima: 1 }],
    },
  };
  const problemas = validarIntegridadeEntrevista(quebrada);
  assert.ok(problemas.some((p) => p.includes("alternativas[0]") && p.includes("fantasma")));
});

test("avaliarAlgoritmo: item não respondido conta como negativo, não lança erro", () => {
  const resultado = avaliarAlgoritmo(new Map(), entrevistaBase.algoritmo);
  assert.equal(resultado.contagemPositiva, 0);
  assert.equal(resultado.criteriosFormaisAtingidos, false);
});

// ─────────────────────────────────────────────────────────────
// contagemExibivel — contagem pra exibição (badge/nota), distinta de
// contagemPositiva usada internamente pra fechar o algoritmo. Sem
// `alternativas`, é igual à contagem simples; com `alternativas` (ex.:
// TDAH), soma cega dos 2 subgrupos seria enganosa (ex.: "6/18" sem
// nenhum subgrupo isolado bater 6) — usa o subgrupo com mais positivos.
// ─────────────────────────────────────────────────────────────

test("contagemExibivel: sem alternativas, é igual à contagem simples de itensContaveis", () => {
  const resultado = contagemExibivel(marcados([["a1", true], ["a2", false], ["b", true]]), entrevistaBase.algoritmo);
  assert.deepEqual(resultado, { contagem: 2, total: 4 });
});

test("contagemExibivel: com alternativas, mostra o subgrupo com mais positivos (não a soma cega)", () => {
  const algoritmo = {
    itensContaveis: ["i1", "i2", "i3", "h1", "h2", "h3"],
    alternativas: [
      { itensContaveis: ["i1", "i2", "i3"], contagemMinima: 3 },
      { itensContaveis: ["h1", "h2", "h3"], contagemMinima: 3 },
    ],
  };
  // 2 de cada grupo = 4 na soma cega, mas nenhum subgrupo isolado bate 3.
  const resultado = contagemExibivel(
    marcados([["i1", true], ["i2", true], ["h1", true], ["h2", true]]),
    algoritmo
  );
  assert.deepEqual(resultado, { contagem: 2, total: 3 });
});

test("contagemExibivel: com alternativas, reflete o subgrupo que efetivamente fechou", () => {
  const algoritmo = {
    itensContaveis: ["i1", "i2", "i3", "h1", "h2", "h3"],
    alternativas: [
      { itensContaveis: ["i1", "i2", "i3"], contagemMinima: 3 },
      { itensContaveis: ["h1", "h2", "h3"], contagemMinima: 3 },
    ],
  };
  const resultado = contagemExibivel(
    marcados([["i1", true], ["i2", true], ["i3", true], ["h1", true]]),
    algoritmo
  );
  assert.deepEqual(resultado, { contagem: 3, total: 3 });
});

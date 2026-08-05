import test from "node:test";
import assert from "node:assert/strict";

import {
  aplicarEfeito,
  aplicarEvolucaoNatural,
  calcularNivelConsciencia,
  criarEstadoInicial,
  escolherAcao,
  verificarDesfecho,
  estaEmAlarme,
} from "./motorSimuladorEmergencia.ts";
import { casoSimuladorEmergenciaGeradoSchema } from "./simuladorEmergenciaGeradoSchema.ts";
import { nmsPlantaoSexta } from "../data/simulador-emergencia/nms-plantao-sexta.ts";
import { serotoninaTramadolLombalgia } from "../data/simulador-emergencia/serotonina-tramadol-lombalgia.ts";
import { surtoPsicoticoCameraDeRua } from "../data/simulador-emergencia/surto-psicotico-camera-de-rua.ts";
import { deliriumTremensFraturaFemur } from "../data/simulador-emergencia/delirium-tremens-fratura-femur.ts";
import { medicamentos } from "../data/medicamentos/index.ts";
import { emergencias } from "../data/emergencias/index.ts";
import type { CasoSimuladorEmergencia, SinaisVitais } from "../data/simulador-emergencia/types.ts";

const sinaisBase: SinaisVitais = {
  frequenciaCardiaca: 100,
  pressaoArterial: { sistolica: 120, diastolica: 80 },
  temperatura: 37,
  saturacaoO2: 98,
  nivelConsciencia: "alerta",
  agitacaoPsicomotora: 2,
  rigidezMuscular: 0,
  riscoIminente: 5,
};

test("aplicarEfeito: campos numéricos somam (delta)", () => {
  const resultado = aplicarEfeito(sinaisBase, {
    frequenciaCardiaca: 10,
    temperatura: 1.5,
    riscoIminente: 2,
  });

  assert.equal(resultado.frequenciaCardiaca, 110);
  assert.equal(resultado.temperatura, 38.5);
  assert.equal(resultado.riscoIminente, 7);
  // Campos não mencionados no efeito ficam intactos.
  assert.equal(resultado.saturacaoO2, 98);
});

test("aplicarEfeito: ignora nivelConsciencia vindo do efeito — sempre recalcula a partir do resultado", () => {
  // nivelConsciencia continua um campo válido no tipo EfeitoSinaisVitais
  // (usado em limiaresDesfecho), mas aplicarEfeito precisa ignorá-lo
  // quando aparece aqui — simula um dado desatualizado/mal-formado.
  const resultado = aplicarEfeito(sinaisBase, {
    nivelConsciencia: "coma",
    riscoIminente: 0,
  });

  assert.notEqual(resultado.nivelConsciencia, "coma");
  assert.equal(resultado.nivelConsciencia, calcularNivelConsciencia(resultado));
});

test("calcularNivelConsciencia: sinais normais → alerta", () => {
  const nivel = calcularNivelConsciencia({
    frequenciaCardiaca: 80,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 98,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 1,
    riscoIminente: 0,
  });
  assert.equal(nivel, "alerta");
});

test("calcularNivelConsciencia: riscoIminente máximo isolado NÃO força coma sem hipóxia/hipertermia real — só risco abstrato não deveria bastar", () => {
  const nivel = calcularNivelConsciencia({
    frequenciaCardiaca: 80,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 98,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 1,
    riscoIminente: 10,
  });
  // Continua claramente grave (não "alerta"/"sonolento"), mas não desce
  // sozinho a coma sem hipóxia/hipertermia/rigidez real acompanhando —
  // na prática esse estado específico já dispara óbito por riscoIminente
  // >= 10 de qualquer forma (ver verificarDesfecho), então o valor exato
  // de nivelConsciencia aqui não decide o desfecho.
  assert.equal(nivel, "confuso");
});

test("calcularNivelConsciencia: risco alto + hipóxia grave + hipertermia extrema + rigidez alta → coma", () => {
  const nivel = calcularNivelConsciencia({
    frequenciaCardiaca: 150,
    pressaoArterial: { sistolica: 90, diastolica: 60 },
    temperatura: 41.5,
    saturacaoO2: 82,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 2,
    rigidezMuscular: 9,
    riscoIminente: 9,
  });
  assert.equal(nivel, "coma");
});

test("calcularNivelConsciencia: hipóxia grave rebaixa consciência mesmo com riscoIminente moderado", () => {
  const comHipoxiaGrave = calcularNivelConsciencia({
    frequenciaCardiaca: 100,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 80, // hipóxia grave
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 3,
    riscoIminente: 3,
  });
  const semHipoxia = calcularNivelConsciencia({
    frequenciaCardiaca: 100,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 98,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 3,
    riscoIminente: 3,
  });
  const ORDEM = ["alerta", "sonolento", "confuso", "torporoso", "coma"];
  assert.ok(
    ORDEM.indexOf(comHipoxiaGrave) > ORDEM.indexOf(semHipoxia),
    `hipóxia grave deveria rebaixar mais a consciência (${comHipoxiaGrave} vs ${semHipoxia})`
  );
});

test("calcularNivelConsciencia: rigidez muscular alta pesa menos que riscoIminente/hipóxia, mas ainda move o escore", () => {
  const comRigidez = calcularNivelConsciencia({
    frequenciaCardiaca: 100,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 98,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 3,
    rigidezMuscular: 10,
    riscoIminente: 3,
  });
  const semRigidez = calcularNivelConsciencia({
    frequenciaCardiaca: 100,
    pressaoArterial: { sistolica: 120, diastolica: 80 },
    temperatura: 37,
    saturacaoO2: 98,
    nivelConsciencia: "alerta",
    agitacaoPsicomotora: 3,
    rigidezMuscular: 0,
    riscoIminente: 3,
  });
  const ORDEM = ["alerta", "sonolento", "confuso", "torporoso", "coma"];
  assert.ok(ORDEM.indexOf(comRigidez) >= ORDEM.indexOf(semRigidez));
});

test("aplicarEfeito: clampa riscoIminente/agitacao/rigidez em [0,10] e saturacaoO2 em [0,100]", () => {
  const resultado = aplicarEfeito(sinaisBase, {
    riscoIminente: 20,
    agitacaoPsicomotora: -50,
    saturacaoO2: 50,
  });

  assert.equal(resultado.riscoIminente, 10);
  assert.equal(resultado.agitacaoPsicomotora, 0);
  assert.equal(resultado.saturacaoO2, 100);
});

test("aplicarEfeito: não muta o objeto original", () => {
  const copia = { ...sinaisBase };
  aplicarEfeito(sinaisBase, { riscoIminente: 5 });
  assert.deepEqual(sinaisBase, copia);
});

test("aplicarEvolucaoNatural: aplica todas as regras uma vez por turno decorrido", () => {
  const regras = [{ condicao: "teste", efeitoPorTurno: { riscoIminente: 1, temperatura: 0.5 } }];
  const resultado = aplicarEvolucaoNatural(sinaisBase, regras, 3);

  assert.equal(resultado.riscoIminente, 8); // 5 + 1*3
  assert.equal(resultado.temperatura, 38.5); // 37 + 0.5*3
});

test("aplicarEvolucaoNatural: 0 turnos decorridos não muda nada", () => {
  const regras = [{ condicao: "teste", efeitoPorTurno: { riscoIminente: 5 } }];
  const resultado = aplicarEvolucaoNatural(sinaisBase, regras, 0);
  assert.deepEqual(resultado, sinaisBase);
});

test("verificarDesfecho: riscoIminente >= 10 é óbito, independente de limiaresDesfecho.obito", () => {
  const desfecho = verificarDesfecho(nmsPlantaoSexta, { ...sinaisBase, riscoIminente: 10 }, 1);
  assert.equal(desfecho, "obito");
});

test("verificarDesfecho: riscoIminente <= 0 é estabilização, independente de campos extras", () => {
  const desfecho = verificarDesfecho(nmsPlantaoSexta, { ...sinaisBase, riscoIminente: 0 }, 1);
  assert.equal(desfecho, "estabilizacao");
});

test("verificarDesfecho: turno >= turnosMaximos sem estabilizar nem morrer é tempo-esgotado", () => {
  const desfecho = verificarDesfecho(nmsPlantaoSexta, { ...sinaisBase, riscoIminente: 5 }, nmsPlantaoSexta.turnosMaximos);
  assert.equal(desfecho, "tempo-esgotado");
});

test("verificarDesfecho: campo extra de limiaresDesfecho.obito (nivelConsciencia coma) também mata, mesmo com riscoIminente moderado", () => {
  const sinais: SinaisVitais = { ...nmsPlantaoSexta.sinaisVitaisIniciais, nivelConsciencia: "coma", riscoIminente: 5 };
  const desfecho = verificarDesfecho(nmsPlantaoSexta, sinais, 1);
  assert.equal(desfecho, "obito");
});

test("escolherAcao: propaga resultadoTexto da ação pro log, quando presente", () => {
  const estado = criarEstadoInicial(nmsPlantaoSexta);
  const acao = nmsPlantaoSexta.acoesDisponiveis.find((a) => a.id === "exames-laboratoriais");
  if (!acao) throw new Error('ação "exames-laboratoriais" não encontrada no fixture');

  const proximo = escolherAcao(nmsPlantaoSexta, estado, acao);

  assert.equal(proximo.log[0].resultadoTexto, acao.resultadoTexto);
  assert.ok(proximo.log[0].resultadoTexto && proximo.log[0].resultadoTexto.length > 0);
});

function acaoPorId(caso: CasoSimuladorEmergencia, id: string) {
  const acao = caso.acoesDisponiveis.find((a) => a.id === id);
  if (!acao) throw new Error(`ação "${id}" não encontrada no fixture "${caso.id}"`);
  return acao;
}

// Bateria de testes repetida pra cada caso do simulador: integridade do
// schema, referências válidas a Emergencias/Medicamentos, e os 3
// desfechos possíveis andados de ponta a ponta pelo motor de verdade
// (não só calculado no papel) — vitória, óbito via ação-armadilha, e
// óbito/tempo-esgotado por passividade.
function testarCasoEmergencia(
  apelido: string,
  caso: CasoSimuladorEmergencia,
  opcoes: { sequenciaBoa: string[]; acaoArmadilha: string; acoesInocuas: string[] }
) {
  test(`${caso.id}: passa na validação de integridade do schema`, () => {
    const resultado = casoSimuladorEmergenciaGeradoSchema.safeParse(caso);
    if (!resultado.success) console.error(resultado.error.issues);
    assert.equal(resultado.success, true);
  });

  test(`${caso.id}: emergenciaBaseId e medicamentoId referenciam entidades que existem de verdade`, () => {
    assert.ok(emergencias.some((e) => e.id === caso.emergenciaBaseId));

    const ids = new Set(medicamentos.map((m) => m.id));
    for (const acao of caso.acoesDisponiveis) {
      if (acao.medicamentoId) {
        assert.ok(ids.has(acao.medicamentoId), `medicamentoId "${acao.medicamentoId}" não existe`);
      }
    }
  });

  test(`PLAYTHROUGH ${apelido} — conduta correta leva à estabilização dentro do prazo`, () => {
    let estado = criarEstadoInicial(caso);
    assert.equal(estado.desfecho, null);

    console.log(`\n[${apelido} — caminho bom]`);
    console.log(`turno 0: riscoIminente=${estado.sinaisAtuais.riscoIminente} temp=${estado.sinaisAtuais.temperatura.toFixed(1)}`);

    for (const id of opcoes.sequenciaBoa) {
      if (estado.desfecho !== null) break;
      estado = escolherAcao(caso, estado, acaoPorId(caso, id));
      console.log(
        `turno ${estado.turnoAtual} (${id}): riscoIminente=${estado.sinaisAtuais.riscoIminente.toFixed(1)} temp=${estado.sinaisAtuais.temperatura.toFixed(1)} agitacao=${estado.sinaisAtuais.agitacaoPsicomotora.toFixed(1)} consciencia=${estado.sinaisAtuais.nivelConsciencia} desfecho=${estado.desfecho ?? "-"}`
      );
    }

    assert.equal(estado.desfecho, "estabilizacao");
    assert.ok(estado.turnoAtual <= caso.turnosMaximos, "deveria estabilizar dentro do prazo");
  });

  test(`PLAYTHROUGH ${apelido} — repetir a ação-armadilha leva ao óbito`, () => {
    let estado = criarEstadoInicial(caso);

    console.log(`\n[${apelido} — caminho ruim: ${opcoes.acaoArmadilha}]`);
    console.log(`turno 0: riscoIminente=${estado.sinaisAtuais.riscoIminente} temp=${estado.sinaisAtuais.temperatura.toFixed(1)}`);

    let turnosDeSeguranca = 20; // evita loop infinito se o fixture estiver mal calibrado
    while (estado.desfecho === null && turnosDeSeguranca > 0) {
      estado = escolherAcao(caso, estado, acaoPorId(caso, opcoes.acaoArmadilha));
      console.log(
        `turno ${estado.turnoAtual} (${opcoes.acaoArmadilha}): riscoIminente=${estado.sinaisAtuais.riscoIminente.toFixed(1)} temp=${estado.sinaisAtuais.temperatura.toFixed(1)} consciencia=${estado.sinaisAtuais.nivelConsciencia} desfecho=${estado.desfecho ?? "-"}`
      );
      turnosDeSeguranca--;
    }

    assert.equal(estado.desfecho, "obito");
  });

  test(`PLAYTHROUGH ${apelido} — não fazer nada útil (só comunicação/exames) leva a tempo-esgotado ou óbito`, () => {
    let estado = criarEstadoInicial(caso);

    console.log(`\n[${apelido} — caminho passivo: só exames/comunicação]`);

    let i = 0;
    let turnosDeSeguranca = 20;

    while (estado.desfecho === null && turnosDeSeguranca > 0) {
      const id = opcoes.acoesInocuas[i % opcoes.acoesInocuas.length];
      estado = escolherAcao(caso, estado, acaoPorId(caso, id));
      console.log(
        `turno ${estado.turnoAtual} (${id}): riscoIminente=${estado.sinaisAtuais.riscoIminente.toFixed(1)} desfecho=${estado.desfecho ?? "-"}`
      );
      i++;
      turnosDeSeguranca--;
    }

    assert.ok(estado.desfecho === "obito" || estado.desfecho === "tempo-esgotado");
  });
}

testarCasoEmergencia("nms", nmsPlantaoSexta, {
  sequenciaBoa: [
    "suspender-antipsicotico",
    "dantroleno",
    "lorazepam-agitacao",
    "hidratacao-resfriamento",
    "dantroleno",
    "hidratacao-resfriamento",
  ],
  acaoArmadilha: "aumentar-antipsicotico",
  acoesInocuas: ["exames-laboratoriais", "tranquilizar-familia"],
});

testarCasoEmergencia("serotonina", serotoninaTramadolLombalgia, {
  sequenciaBoa: [
    "suspender-serotoninergicos",
    "ciproeptadina",
    "lorazepam-agitacao",
    "hidratacao-resfriamento",
    "ciproeptadina",
    "hidratacao-resfriamento",
  ],
  acaoArmadilha: "reintroduzir-sertralina",
  acoesInocuas: ["exames-laboratoriais", "tranquilizar-familia"],
});

testarCasoEmergencia("surto psicótico", surtoPsicoticoCameraDeRua, {
  sequenciaBoa: [
    "ambiente-calmo",
    "antipsicotico-dose-baixa",
    "contencao-mecanica",
    "ambiente-calmo",
    "acionar-equipe-apoio",
    "ambiente-calmo",
    "ambiente-calmo",
    "ambiente-calmo",
    "ambiente-calmo",
  ],
  acaoArmadilha: "escalar-antipsicotico-ignorando-piora",
  acoesInocuas: ["investigacao-organica", "avaliacao-risco-seguranca"],
});

testarCasoEmergencia("delirium tremens", deliriumTremensFraturaFemur, {
  sequenciaBoa: [
    "reposicao-tiamina",
    "beneodiazepinico-titulado",
    "ambiente-calmo-reorientacao",
    "correcao-eletrolitica",
    "beneodiazepinico-titulado",
    "reposicao-tiamina",
    "ambiente-calmo-reorientacao",
    "reposicao-tiamina",
  ],
  acaoArmadilha: "antipsicotico-em-vez-de-bzd",
  acoesInocuas: ["escala-ciwa", "tranquilizar-familia"],
});

test("estaEmAlarme: riscoIminente alto dispara alarme mesmo sem limiaresDesfecho.piora configurado", () => {
  const sinais: SinaisVitais = { ...nmsPlantaoSexta.sinaisVitaisIniciais, riscoIminente: 8 };
  assert.equal(estaEmAlarme(nmsPlantaoSexta, sinais), true);
});

test("estaEmAlarme: sinais estáveis não disparam alarme", () => {
  const sinais: SinaisVitais = { ...nmsPlantaoSexta.sinaisVitaisIniciais, riscoIminente: 3, temperatura: 37.2 };
  assert.equal(estaEmAlarme(nmsPlantaoSexta, sinais), false);
});

test("escolherAcao: ignora ação escolhida depois que o jogo já acabou", () => {
  let estado = criarEstadoInicial(nmsPlantaoSexta);
  estado = { ...estado, desfecho: "obito" };
  const proximo = escolherAcao(nmsPlantaoSexta, estado, acaoPorId(nmsPlantaoSexta, "dantroleno"));
  assert.equal(proximo, estado); // retorna o mesmo objeto, sem processar nada
});

test("criarEstadoInicial: acoesJaUsadas começa vazio", () => {
  const estado = criarEstadoInicial(nmsPlantaoSexta);
  assert.equal(estado.acoesJaUsadas.size, 0);
});

test("escolherAcao: acrescenta o id da ação a acoesJaUsadas, sem mutar o Set anterior", () => {
  const inicial = criarEstadoInicial(nmsPlantaoSexta);
  const depoisDantroleno = escolherAcao(nmsPlantaoSexta, inicial, acaoPorId(nmsPlantaoSexta, "dantroleno"));

  assert.equal(inicial.acoesJaUsadas.size, 0); // estado anterior não foi mutado
  assert.ok(depoisDantroleno.acoesJaUsadas.has("dantroleno"));
  assert.equal(depoisDantroleno.acoesJaUsadas.size, 1);

  const depoisLorazepam = escolherAcao(
    nmsPlantaoSexta,
    depoisDantroleno,
    acaoPorId(nmsPlantaoSexta, "lorazepam-agitacao")
  );
  assert.equal(depoisLorazepam.acoesJaUsadas.size, 2);
  assert.ok(depoisLorazepam.acoesJaUsadas.has("dantroleno"));
  assert.ok(depoisLorazepam.acoesJaUsadas.has("lorazepam-agitacao"));
});

test("escolherAcao: repetir a mesma ação não duplica a entrada em acoesJaUsadas (Set), mas duplica em log", () => {
  const inicial = criarEstadoInicial(nmsPlantaoSexta);
  const acao = acaoPorId(nmsPlantaoSexta, "lorazepam-agitacao");

  const primeiro = escolherAcao(nmsPlantaoSexta, inicial, acao);
  const segundo = escolherAcao(nmsPlantaoSexta, primeiro, acao);

  assert.equal(segundo.acoesJaUsadas.size, 1);
  assert.equal(segundo.log.filter((e) => e.acaoId === "lorazepam-agitacao").length, 2);
});

// Gera um caso do Simulador de Emergência Psiquiátrica offline, numa
// única chamada ao Gemini, valida com zod e salva em
// data/simulador-emergencia/<id>.ts. NÃO é uma rota do site — rodado
// manualmente por quem mantém o conteúdo.
//
// Uso:
//   npm run gerar-caso-emergencia -- <emergenciaBaseId>
//   npm run gerar-caso-emergencia            (sorteia uma emergência)
//
// Requer GEMINI_API_KEY em atlas-web/.env.local.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { emergencias } from "../data/emergencias";
import { medicamentos } from "../data/medicamentos";
import { montarPromptEmergencia } from "../lib/gerarCasoEmergenciaPrompt";
import { casoSimuladorEmergenciaGeradoJsonSchema } from "../lib/simuladorEmergenciaGeradoJsonSchema";
import {
  casoSimuladorEmergenciaGeradoSchema,
  type CasoSimuladorEmergenciaGerado,
} from "../lib/simuladorEmergenciaGeradoSchema";
import { chamarGemini, extrairJson } from "../lib/gemini";
import type { Emergencia } from "../data/emergencias/types";
import type { Medicamento } from "../data/types";
import type { CasoSimuladorEmergencia } from "../data/simulador-emergencia/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR_CASOS = join(__dirname, "..", "data", "simulador-emergencia");

function carregarEnvLocal() {
  const caminho = join(__dirname, "..", ".env.local");
  let conteudo: string;
  try {
    conteudo = readFileSync(caminho, "utf8");
  } catch {
    return;
  }

  for (const linha of conteudo.split("\n")) {
    const semComentario = linha.trim();
    if (!semComentario || semComentario.startsWith("#")) continue;

    const igual = semComentario.indexOf("=");
    if (igual === -1) continue;

    const chave = semComentario.slice(0, igual).trim();
    const valor = semComentario.slice(igual + 1).trim();
    if (chave && !(chave in process.env)) {
      process.env[chave] = valor;
    }
  }
}

// Emergencia não tem um campo estruturado de medicamentos relacionados
// (diferente de Diagnostico/FluxogramaNode) — em vez de adicionar um
// campo novo só pra esta ferramenta, procura por nome ou classe/subclasse
// mencionados no texto da emergência. Pega tanto os terapêuticos (ex.:
// benzodiazepínicos citados na conduta) quanto os potencialmente
// perigosos se mal usados (ex.: antipsicóticos citados como causa).
function textoDaEmergencia(emergencia: Emergencia): string {
  return [
    emergencia.descricao,
    ...emergencia.quadroClinico,
    ...(emergencia.causasComuns ?? []),
    ...emergencia.condutaImediata,
    ...(emergencia.examesComplementares ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

function encontrarMedicamentosRelevantes(emergencia: Emergencia): Medicamento[] {
  const texto = textoDaEmergencia(emergencia);

  return medicamentos.filter((m) => {
    const nomeMatch = texto.includes(m.nome.toLowerCase());
    const classeMatch = texto.includes(m.classe.toLowerCase());
    const subclasseMatch = m.subclasse ? texto.includes(m.subclasse.toLowerCase()) : false;
    return nomeMatch || classeMatch || subclasseMatch;
  });
}

async function gerarComRetry(prompt: string): Promise<CasoSimuladorEmergenciaGerado> {
  let ultimoErro: unknown;

  for (let tentativa = 1; tentativa <= 2; tentativa++) {
    try {
      const texto = await chamarGemini(prompt, casoSimuladorEmergenciaGeradoJsonSchema);
      const bruto = extrairJson(texto);
      return casoSimuladorEmergenciaGeradoSchema.parse(bruto);
    } catch (erro) {
      ultimoErro = erro;
      console.error(
        `Tentativa ${tentativa}/2 falhou:`,
        erro instanceof Error ? erro.message : erro
      );
    }
  }

  throw ultimoErro;
}

function paraVarName(id: string): string {
  return id.replace(/-([a-z0-9])/g, (_match, c: string) => c.toUpperCase());
}

function salvarArquivoCaso(caso: CasoSimuladorEmergencia): string {
  const varName = paraVarName(caso.id);
  const conteudo = `import { CasoSimuladorEmergencia } from "./types";

export const ${varName}: CasoSimuladorEmergencia = ${JSON.stringify(caso, null, 2)};
`;

  const caminho = join(DIR_CASOS, `${caso.id}.ts`);
  writeFileSync(caminho, conteudo, "utf8");
  return caminho;
}

function atualizarIndex(id: string) {
  const varName = paraVarName(id);
  const caminhoIndex = join(DIR_CASOS, "index.ts");
  let conteudo = readFileSync(caminhoIndex, "utf8");

  if (conteudo.includes(`from "./${id}"`)) {
    console.log(`data/simulador-emergencia/index.ts já importa "${id}" — pulando atualização do índice.`);
    return;
  }

  const primeiraLinha = 'import { CasoSimuladorEmergencia } from "./types";\n';
  const linhaImport = `import { ${varName} } from "./${id}";\n`;
  const posicaoInsercaoImport = conteudo.indexOf(primeiraLinha) + primeiraLinha.length;

  conteudo =
    conteudo.slice(0, posicaoInsercaoImport) +
    linhaImport +
    conteudo.slice(posicaoInsercaoImport);

  conteudo = conteudo.replace("\n];", `\n  ${varName},\n];`);

  writeFileSync(caminhoIndex, conteudo, "utf8");
}

async function main() {
  carregarEnvLocal();

  const emergenciaIdArg = process.argv[2];

  const emergencia = emergenciaIdArg
    ? emergencias.find((e) => e.id === emergenciaIdArg)
    : emergencias[Math.floor(Math.random() * emergencias.length)];

  if (!emergencia) {
    console.error(
      `Emergência "${emergenciaIdArg}" não encontrada. Ids válidos:\n${emergencias
        .map((e) => `  - ${e.id}`)
        .join("\n")}`
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Emergência-base: ${emergencia.nome} (${emergencia.id})`);

  const medicamentosRelevantes = encontrarMedicamentosRelevantes(emergencia);

  if (medicamentosRelevantes.length === 0) {
    console.warn(
      "Aviso: nenhum medicamento do módulo Medicamentos foi encontrado no texto desta emergência — a árvore pode sair sem nenhuma ação com medicamentoId preenchido."
    );
  } else {
    console.log(
      `Medicamentos relevantes encontrados (${medicamentosRelevantes.length}): ${medicamentosRelevantes
        .map((m) => m.nome)
        .join(", ")}`
    );
  }

  const prompt = montarPromptEmergencia(emergencia, medicamentosRelevantes);

  console.log("Chamando o Gemini (o caso inteiro numa resposta só — pode levar um pouco)...");

  const caso: CasoSimuladorEmergencia = await gerarComRetry(prompt);

  const caminhoArquivo = salvarArquivoCaso(caso);
  atualizarIndex(caso.id);

  console.log(`\n✅ Caso salvo em ${caminhoArquivo}`);
  console.log(
    `   riscoIminente inicial: ${caso.sinaisVitaisIniciais.riscoIminente}/10, ${caso.acoesDisponiveis.length} ações, ${caso.turnosMaximos} turnos máximos`
  );
  console.log("\n--- JSON gerado ---\n");
  console.log(JSON.stringify(caso, null, 2));
}

main().catch((erro) => {
  console.error("\n❌ Falha ao gerar o caso:", erro instanceof Error ? erro.message : erro);
  process.exitCode = 1;
});

// Gera um caso do Simulador de Psiquiatria offline, numa única chamada
// ao Gemini (a árvore de decisão inteira de uma vez), valida com zod e
// salva em data/simulador/<id>.ts. NÃO é uma rota do site — rodado
// manualmente por quem mantém o conteúdo.
//
// Uso:
//   npm run gerar-caso-simulador -- <diagnosticoId>
//   npm run gerar-caso-simulador            (sorteia um diagnóstico)
//
// Requer GEMINI_API_KEY em atlas-web/.env.local.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { termoInglesDoDiagnostico } from "../lib/diagnosticoTermoIngles";
import { buscarInspiracao } from "../lib/buscarInspiracaoEuropePmc";
import {
  montarPromptSimulador,
  TERMOS_INSPIRACAO_SIMULADOR,
} from "../lib/gerarCasoSimuladorPrompt";
import { casoSimuladorGeradoJsonSchema } from "../lib/simuladorGeradoJsonSchema";
import {
  casoSimuladorGeradoSchema,
  type CasoSimuladorGerado,
} from "../lib/simuladorGeradoSchema";
import { chamarGemini, extrairJson } from "../lib/gemini";
import type { CasoSimulador } from "../data/simulador/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR_SIMULADOR = join(__dirname, "..", "data", "simulador");

// scripts/ roda fora do Next, que é quem normalmente carrega
// .env.local — lê manualmente aqui, sem dependência nova.
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

async function gerarComRetry(prompt: string): Promise<CasoSimuladorGerado> {
  let ultimoErro: unknown;

  for (let tentativa = 1; tentativa <= 2; tentativa++) {
    try {
      const texto = await chamarGemini(prompt, casoSimuladorGeradoJsonSchema);
      const bruto = extrairJson(texto);
      return casoSimuladorGeradoSchema.parse(bruto);
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

function salvarArquivoCaso(caso: CasoSimulador): string {
  const varName = paraVarName(caso.id);
  const conteudo = `import { CasoSimulador } from "./types";

export const ${varName}: CasoSimulador = ${JSON.stringify(caso, null, 2)};
`;

  const caminho = join(DIR_SIMULADOR, `${caso.id}.ts`);
  writeFileSync(caminho, conteudo, "utf8");
  return caminho;
}

function atualizarIndex(id: string) {
  const varName = paraVarName(id);
  const caminhoIndex = join(DIR_SIMULADOR, "index.ts");
  let conteudo = readFileSync(caminhoIndex, "utf8");

  if (conteudo.includes(`from "./${id}"`)) {
    console.log(`data/simulador/index.ts já importa "${id}" — pulando atualização do índice.`);
    return;
  }

  const primeiraLinha = 'import { CasoSimulador } from "./types";\n';
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

  const diagnosticoIdArg = process.argv[2];

  const diagnostico = diagnosticoIdArg
    ? diagnosticos.find((d) => d.id === diagnosticoIdArg)
    : diagnosticos[Math.floor(Math.random() * diagnosticos.length)];

  if (!diagnostico) {
    console.error(
      `Diagnóstico "${diagnosticoIdArg}" não encontrado. Ids válidos:\n${diagnosticos
        .map((d) => `  - ${d.id}`)
        .join("\n")}`
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Diagnóstico-alvo: ${diagnostico.nome} (${diagnostico.id})`);

  const medicamentosPrimeiraLinha = (diagnostico.medicamentosPrimeiraLinha ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  if (medicamentosPrimeiraLinha.length === 0) {
    console.warn(
      "Aviso: nenhum medicamento de primeira linha cadastrado pra este diagnóstico — a árvore pode sair sem opções farmacológicas com medicamentoId preenchido."
    );
  } else {
    console.log(
      `Medicamentos de primeira linha: ${medicamentosPrimeiraLinha.map((m) => m.nome).join(", ")}`
    );
  }

  const termoIngles = termoInglesDoDiagnostico(diagnostico.id);
  const inspiracao = termoIngles
    ? await buscarInspiracao(termoIngles, TERMOS_INSPIRACAO_SIMULADOR)
    : [];

  console.log(
    inspiracao.length > 0
      ? `Inspiração encontrada: "${inspiracao[0].titulo}" (${inspiracao[0].url})`
      : "Nenhuma inspiração externa encontrada (ou diagnóstico sem termo em inglês mapeado) — gerando sem ela."
  );

  const prompt = montarPromptSimulador(diagnostico, medicamentosPrimeiraLinha, inspiracao);

  console.log("Chamando o Gemini (é a árvore inteira numa resposta só — pode levar um pouco)...");

  const gerado = await gerarComRetry(prompt);

  const caso: CasoSimulador = {
    ...gerado,
    ...(inspiracao.length > 0
      ? { inspiracaoExterna: { titulo: inspiracao[0].titulo, url: inspiracao[0].url } }
      : {}),
  };

  const caminhoArquivo = salvarArquivoCaso(caso);
  atualizarIndex(caso.id);

  console.log(`\n✅ Caso salvo em ${caminhoArquivo}`);
  console.log(`   ${caso.nos.length} nós, id inicial "${caso.noInicialId}"`);
  console.log("\n--- JSON gerado ---\n");
  console.log(JSON.stringify(caso, null, 2));
}

main().catch((erro) => {
  console.error("\n❌ Falha ao gerar o caso:", erro instanceof Error ? erro.message : erro);
  process.exitCode = 1;
});

import type { Diagnostico } from "../data/diagnosticos/types";
import type { Medicamento } from "../data/types";
import type { ArtigoInspiracao } from "./buscarInspiracaoEuropePmc";

// Termos combinados ao termo em inglês do diagnóstico na busca de
// inspiração — priorizam relatos de apresentação atípica/desafio
// diagnóstico, que rendem uma narrativa mais interessante como jogo do
// que um relato didaticamente típico.
export const TERMOS_INSPIRACAO_SIMULADOR = [
  "atypical presentation",
  "diagnostic dilemma",
  "diagnostic challenge",
];

function montarBlocoInspiracao(inspiracao: ArtigoInspiracao[]): string {
  if (inspiracao.length === 0) return "";

  const resumos = inspiracao
    .map((a, i) => `${i + 1}. "${a.titulo}"\n${a.abstractText}`)
    .join("\n\n");

  return `\n## Resumo de relato de caso real (inspiração de textura — apresentação atípica/desafio diagnóstico)

O resumo abaixo é de um relato de caso real, publicado em acesso aberto. Serve APENAS como inspiração de textura narrativa (o tipo de reviravolta, achado inesperado, contexto do paciente) — NUNCA copie frases ou estrutura desse resumo. Escreva uma narrativa inteiramente original e reescrita com suas próprias palavras.

${resumos}
`;
}

// Monta o prompt único que pede a árvore de decisão inteira numa
// chamada só. Diferente de lib/gerarCasoPrompt.ts (que gera um caso
// clínico de múltipla escolha em 2 chamadas), aqui não há uma segunda
// chamada — a estrutura toda (nós, opções, desfechos) precisa sair
// coerente já na primeira resposta, validada por
// lib/simuladorGeradoSchema.ts.
export function montarPromptSimulador(
  diagnostico: Diagnostico,
  medicamentosPrimeiraLinha: Medicamento[],
  inspiracao: ArtigoInspiracao[]
): string {
  const diagnosticoJson = JSON.stringify(diagnostico, null, 2);
  const medicamentosJson = JSON.stringify(medicamentosPrimeiraLinha, null, 2);

  return `Você é um psiquiatra experiente escrevendo um caso narrativo interativo para o "Simulador de Psiquiatria" do Atlas Psiquiátrico — um jogo de árvore de decisão para ensino de residentes e psiquiatras.

Sua resposta será validada automaticamente contra um schema JSON e contra checagens de integridade da árvore (todo nó referenciado precisa existir, todo nó precisa ser alcançável a partir do nó inicial). Respeite os tipos e a estrutura, mas o que este texto pede é o que o schema sozinho não consegue garantir: qualidade narrativa e exatidão clínica.

## REGRA DE TOM — a mais importante deste prompt

A narrativa PODE ser anedótica, leve, com humor e detalhes pitorescos do paciente/família/contexto — é um jogo, não um caso clínico formal. Mas ZERO liberdade criativa em farmacologia, critérios diagnósticos ou fisiologia. Doses, efeitos colaterais, contraindicações e critérios diagnósticos citados precisam ser exatos conforme os dados de diagnóstico e medicamento fornecidos abaixo — nunca inventados ou aproximados para servir à história.

## Diagnóstico-alvo deste caso (objeto completo)

${diagnosticoJson}

## Medicamentos de primeira linha para este diagnóstico (objetos completos — use como referência de dose/contraindicação/efeito adverso sempre que uma opção envolver prescrever algum destes)

${medicamentosJson}
${montarBlocoInspiracao(inspiracao)}
## Estrutura esperada da árvore

- 3 a 4 turnos de profundidade, na sequência esperada: "entrevista" → "exames" → "conduta" → "evolucao", convergindo em 2 a 3 nós turno "desfecho" (terminais, sem opções) dependendo da qualidade das decisões tomadas pelo caminho.
- 4 a 5 opções em cada nó de decisão (todo nó que não é "desfecho").
- Cada opção precisa de: texto (o que o jogador escolhe), consequencia (o que acontece na história como resultado direto — mostrado assim que o jogador escolhe), proximoNoId (apontando pra um nó que você também vai gerar), e qualidadeDecisao ("ideal", "aceitavel" ou "problematica") — uma avaliação clínica honesta dessa escolha específica, nunca mostrada durante o jogo, só no resumo final.
- Preencha medicamentoId (usando um dos ids da lista de medicamentos acima) quando a opção envolver prescrever especificamente um deles. Omita quando não aplicável — nunca invente um id que não esteja na lista.
- diagnosticoRealId deve ser exatamente "${diagnostico.id}".
- noInicialId deve ser o id do primeiro nó (turno "entrevista").
- Cada nó de desfecho deve refletir de forma honesta o resultado do caminho de decisões que levou até ele — um caminho com decisões majoritariamente "problematica" deve levar a um desfecho pior (não necessariamente catastrófico, mas com consequência real), e um caminho majoritariamente "ideal" a um desfecho bom.

## Instruções finais
- Todo nó (exceto desfecho) deve ter opções cujas qualidadeDecisao variem entre "ideal", "aceitavel" e "problematica" — não deixe todas as opções de um mesmo nó com a mesma avaliação, isso tornaria a escolha óbvia demais mesmo sem o rótulo aparecer.
- Não preencha nenhum campo de referência bibliográfica ou pérola clínica — não fazem parte deste schema.
- Verifique você mesmo, antes de responder, que todo proximoNoId citado corresponde a um id de nó que você realmente incluiu no array "nos".`;
}

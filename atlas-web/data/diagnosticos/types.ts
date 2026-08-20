export interface Diagnostico {
  id: string;

  nome: string;

  categoria: string;

  cid11?: string;

  cid10?: string;

  descricao: string;

  criteriosDiagnosticos: string[];

  especificadores?: string[];

  duracaoMinima?: string;

  prevalencia?: string;

  cursoEPrognostico?: string;

  diagnosticoDiferencial: string[];

  comorbidadesComuns?: string[];

  tratamentoPrimeiraLinha: string[];

  // Vínculos curados manualmente (não derivados por busca textual) usados
  // pelo Assistente de Avaliação (sintomas -> diagnósticos -> medicamentos).
  //
  // sintomasChave: subconjunto de ids de data/sintomas/index.ts associados a
  // este diagnóstico, cada um com um peso 1-3 conforme quão central/
  // específico o sintoma é para ele (3 = critério nuclear/quase patognomônico,
  // 1 = sintoma associado, mas pouco discriminativo, presente em vários
  // diagnósticos).
  sintomasChave?: { id: string; peso: 1 | 2 | 3 }[];

  // medicamentosPrimeiraLinha: ids de data/medicamentos/index.ts (Medicamento.id)
  // com evidência/indicação de primeira ou segunda linha para este
  // diagnóstico. Omitir quando o tratamento de primeira linha for
  // predominantemente não farmacológico (ex: Transtorno de Personalidade
  // Borderline) — nesse caso o Assistente deve exibir apenas o texto de
  // `tratamentoPrimeiraLinha`, sem sugerir medicamentos.
  medicamentosPrimeiraLinha?: string[];

  referencias?: string[];

  // entrevistaEstruturada: versão estruturada (tipo SCID) dos critérios
  // deste diagnóstico, usada pelo módulo /entrevista-estruturada. Distinta
  // de `criteriosDiagnosticos` (texto livre, pra leitura clínica na ficha
  // do diagnóstico) — aqui cada critério é roteirizado pra pergunta ao
  // paciente, e o algoritmo permite calcular objetivamente se a contagem/
  // subgrupos formais do DSM-5-TR foram atingidos. Opcional: diagnósticos
  // sem este campo continuam usando o checklist simples de
  // `criteriosDiagnosticos` no módulo de entrevista (fallback).
  entrevistaEstruturada?: EntrevistaEstruturada;
}

export interface CriterioEntrevista {
  // Id curto e estável dentro do diagnóstico (ex: "a1", "a2", "b") —
  // referenciado por RegraAlgoritmoEntrevista.itensContaveis/gruposObrigatorios
  // e por CriterioRastreioId.
  id: string;

  // Pergunta roteirizada, pra ler ao paciente — diferente do texto do
  // critério em `criteriosDiagnosticos`, que é escrito pra julgamento
  // clínico, não pra leitura literal numa entrevista.
  pergunta: string;

  // Rótulo do subgrupo DSM ao qual este item pertence (ex: "A"), usado
  // junto com RegraAlgoritmoEntrevista.gruposObrigatorios pra expressar
  // "pelo menos 1 positivo dentre os itens do grupo A". Omitir quando o
  // item não pertence a nenhum subgrupo obrigatório (só conta pro total).
  grupo?: string;

  // Marca item cuja pergunta cobre ideação/comportamento suicida ou
  // autolesão de forma direta (não um lembrete geral de risco em prosa).
  // Quando true e a resposta for positiva, a UI da Entrevista Estruturada
  // mostra o alerta de risco de suicídio (mesmo mecanismo de
  // lib/alertasSeguranca.ts) com link direto pra C-SSRS. Usar com
  // parcimônia — só nos itens que literalmente perguntam isso.
  sinalizaRisco?: boolean;
}

export interface RegraAlgoritmoEntrevista {
  // Contagem mínima de itens positivos (dentre `itensContaveis`) exigida
  // pelo DSM-5-TR pra esse diagnóstico (ex: 5 em depressão maior). Omitir
  // quando o diagnóstico não usa esse formato de contagem.
  contagemMinima?: number;

  // Subconjunto de ids de CriterioEntrevista que contam pra
  // `contagemMinima`. Nem todo critério listado precisa contar pro total
  // (ex: critérios de exclusão/duração não entram aqui).
  itensContaveis: string[];

  // Cada array interno é um subgrupo do qual pelo menos 1 item precisa
  // ser positivo (ex: [["a1","a2"]] pra "pelo menos 1 de A1 ou A2" em
  // depressão maior). Vários subgrupos são todos obrigatórios (AND entre
  // os arrays, OR dentro de cada um).
  gruposObrigatorios?: string[][];

  // Generalização de gruposObrigatorios pra quando o mínimo exigido no
  // subgrupo é maior que 1 (ex: TEPT exige >=2 dos 7 itens do critério D,
  // e >=2 dos 6 itens do critério E, cada um avaliado separadamente — não
  // dá pra expressar isso só com gruposObrigatorios, que é sempre >=1).
  // Todos os subgrupos listados aqui são obrigatórios (AND entre eles);
  // dentro de cada um, o mínimo é local a esse subgrupo, não ao total.
  subgruposComMinimo?: { itens: string[]; minimo: number }[];

  // Generalização máxima: quando um diagnóstico é satisfeito por
  // subtipos alternativos e mutuamente independentes (ex: TDAH fecha o
  // Critério A com >=6 de 9 itens de desatenção OU >=6 de 9 itens de
  // hiperatividade-impulsividade — nunca somando os dois grupos) — cada
  // alternativa é uma RegraAlgoritmoEntrevista completa, avaliada
  // recursivamente com as MESMAS respostas; basta 1 alternativa fechar
  // sozinha (OR entre alternativas). Os demais campos deste nível
  // (contagemMinima/itensContaveis/gruposObrigatorios/subgruposComMinimo)
  // continuam válidos e se combinam via AND com o resultado das
  // alternativas, quando ambos estão presentes — na prática, a maioria
  // dos diagnósticos com `alternativas` deixa os demais campos vazios/
  // omitidos neste nível, delegando toda a lógica pras alternativas.
  alternativas?: RegraAlgoritmoEntrevista[];

  // Duração mínima exigida pelo DSM (ex: "2 semanas", "6 meses") — texto
  // livre, NUNCA avaliada automaticamente pelo motor: é responsabilidade
  // do clínico confirmar durante a entrevista.
  duracaoMinima?: string;

  // Lembrete de texto sobre critérios de exclusão/diferencial do DSM (ex:
  // "não melhor explicado por efeito fisiológico de substância ou outra
  // condição médica") — NUNCA avaliado automaticamente: é sempre
  // julgamento clínico humano.
  observacaoExclusao?: string;
}

export interface EntrevistaEstruturada {
  // Ids de CriterioEntrevista (dentro de `criterios`) que funcionam como
  // rastreio de entrada do módulo — se NENHUM deles for positivo, o
  // módulo inteiro é pulado (skip-out). É um OR entre eles, não um AND:
  // basta 1 positivo pra abrir o módulo inteiro. Isso reflete o SCID de
  // verdade — vários módulos (ex: depressão maior) rastreiam com 2
  // perguntas em paralelo (humor deprimido OU perda de interesse), não 1
  // só. As perguntas de rastreio já são os próprios itens de `criterios`
  // (não há campo de texto separado) — evita perguntar a mesma coisa
  // duas vezes.
  criteriosRastreioIds: string[];

  criterios: CriterioEntrevista[];

  algoritmo: RegraAlgoritmoEntrevista;
}

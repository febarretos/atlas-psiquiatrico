import { Emergencia } from "./types";

export const riscoSuicidioAgudo: Emergencia = {
  id: "risco-suicidio-agudo",

  nome: "Risco de Suicídio Agudo",

  categoria: "Emergência comportamental",

  gravidade: "muito alta",

  descricao:
    "Estado de risco agudo em que o paciente apresenta ideação, plano ou comportamento suicida com potencial iminente de autolesão fatal. Não é uma entidade diagnóstica única, mas uma condição transversal a múltiplos transtornos psiquiátricos — e por vezes sem transtorno identificável — que exige avaliação de risco estruturada e conduta imediata. As orientações abaixo resumem princípios amplamente aceitos de avaliação e manejo, mas NÃO substituem o julgamento clínico individualizado: a entrevista direta com o paciente e toda a informação contextual disponível sempre prevalecem sobre qualquer lista ou fluxo padronizado. Ver também a escala C-SSRS (módulo Escalas) e o fluxograma 'Avaliação e Manejo do Risco de Suicídio' (módulo Fluxogramas) para o passo a passo detalhado de triagem.",

  quadroClinico: [
    "Verbalização de desejo de morrer ou de ideação suicida, ativa ou passiva",
    "Elaboração de plano específico (método, local, momento)",
    "Comportamento preparatório: reunir meios para o método escolhido, escrever bilhete de despedida, resolver pendências ou se despedir de forma incomum",
    "Tentativa de suicídio em curso ou recente (últimas horas a dias), incluindo tentativas interrompidas ou abortadas",
    "Desesperança marcante, sensação de ser um fardo para os outros, dor psíquica relatada como intolerável",
    "Agitação psicomotora, impulsividade acentuada ou intoxicação aguda associada, que reduzem o limiar entre ideação e ação",
    "Isolamento social abrupto ou mudanças comportamentais chamativas notadas por terceiros",
  ],

  criteriosDiagnosticos: [
    "Plano suicida específico e concreto, com acesso fácil aos meios letais escolhidos",
    "Comportamento suicida (tentativa, tentativa interrompida ou abortada, ou preparação ativa) nos últimos 3 meses",
    "Alucinações auditivas de comando direcionadas à autoagressão",
    "Intoxicação aguda por álcool ou outras substâncias associada a ideação suicida ou grande impulsividade",
    "Recusa em colaborar com a avaliação de segurança ou em aceitar supervisão proposta",
  ],

  causasComuns: [
    "Transtorno mental não tratado ou mal controlado (depressão maior, transtorno bipolar, esquizofrenia, transtorno por uso de substâncias, transtorno de personalidade borderline)",
    "Tentativa de suicídio prévia — o preditor isolado mais consistente de risco futuro",
    "Perdas recentes significativas (luto, separação, perda de emprego) ou humilhação pública",
    "Doença física grave, dor crônica ou diagnóstico recente de doença potencialmente fatal",
    "Acesso fácil a meios letais, especialmente armas de fogo ou grandes quantidades de medicamentos em casa",
    "História familiar de suicídio ou exposição recente a suicídio de terceiros",
  ],

  condutaImediata: [
    "Garantir segurança imediata: não deixar o paciente sozinho até a avaliação de risco estar concluída",
    "Perguntar diretamente e sem hesitação sobre ideação, plano, intenção e acesso a meios — abordar o tema não aumenta o risco e costuma trazer alívio ao paciente",
    "Avaliação de risco estruturada (fatores de risco e de proteção, frequência/controlabilidade dos pensamentos, dissuasores, razões para viver), apoiada por instrumento validado como a C-SSRS quando disponível",
    "Decidir entre internação (voluntária ou, se necessário e conforme legislação local, involuntária diante de risco iminente) e manejo ambulatorial com base no risco estimado — essa decisão é sempre individualizada, nunca automática",
    "Remover ativamente o acesso a meios letais (armas de fogo, grandes quantidades de medicamentos), envolvendo a família/rede de apoio sempre que possível",
    "Elaborar plano de segurança por escrito com o paciente quando o risco não for iminente",
    "Envolver a rede de apoio (família, pessoas de confiança) na supervisão e no acompanhamento",
    "Se já houve tentativa com dano físico ou intoxicação, priorizar a estabilização clínica/toxicológica antes de qualquer avaliação psiquiátrica extensa",
    "Tratar ativamente o transtorno psiquiátrico de base e reavaliar o risco a cada consulta subsequente, especialmente diante de qualquer mudança no quadro clínico",
  ],

  examesComplementares: [
    "Se a tentativa envolveu ingestão de substância ou medicamento: triagem toxicológica e avaliação clínica/laboratorial dirigida à substância envolvida",
    "Avaliação clínica geral para excluir lesões físicas relacionadas ao método utilizado",
    "Rastreio de uso de álcool e outras substâncias, que altera o limiar de impulsividade e a percepção de risco",
  ],

  diagnosticoDiferencial: [
    "Ideação suicida versus autolesão não suicida (diferença central: presença ou não de intenção de morte)",
    "Ideação suicida passiva ('desejo de estar morto') versus ativa (com método e/ou plano elaborado)",
    "Comportamento impulsivo transitório sob efeito de substância versus ideação suicida persistente de base",
    "Ideação suicida secundária a delirium ou confusão aguda — nesse caso, tratar a causa orgânica de base concomitantemente à garantia de segurança",
  ],

  referencias: [
    "American Psychiatric Association (APA). Practice Guideline for the Assessment and Treatment of Patients with Suicidal Behaviors.",
    "Posner K, et al. The Columbia-Suicide Severity Rating Scale (C-SSRS). Am J Psychiatry. 2011.",
    "World Health Organization (WHO). Preventing suicide: a resource for primary health care workers.",
  ],
};

import { Diagnostico } from "./types";

export const tdah: Diagnostico = {
  id: "tdah",

  nome: "Transtorno de Déficit de Atenção/Hiperatividade",

  categoria: "Transtornos do Neurodesenvolvimento",

  cid11: "6A05",

  cid10: "F90",

  descricao:
    "Transtorno do neurodesenvolvimento caracterizado por um padrão persistente de desatenção e/ou hiperatividade-impulsividade que interfere no funcionamento ou desenvolvimento, com sintomas presentes desde a infância e prejuízo em múltiplos contextos de vida. Persiste na vida adulta em parcela significativa dos casos, frequentemente com apresentação predominantemente desatenta e comorbidades associadas.",

  criteriosDiagnosticos: [
    "A. Padrão persistente de desatenção e/ou hiperatividade-impulsividade que interfere no funcionamento ou desenvolvimento, conforme caracterizado por (1) e/ou (2):",
    "1. Desatenção: 6 (ou mais) dos seguintes sintomas persistem por pelo menos 6 meses, em grau inconsistente com o nível de desenvolvimento e que impacta diretamente as atividades sociais/acadêmicas/profissionais (para adolescentes mais velhos e adultos, a partir de 17 anos, são exigidos pelo menos 5 sintomas): falha em prestar atenção a detalhes/erros por descuido; dificuldade em manter atenção em tarefas ou atividades lúdicas; parece não escutar quando lhe dirigem a palavra; não segue instruções e não termina tarefas; dificuldade para organizar tarefas e atividades; evita ou reluta em se envolver em tarefas que exigem esforço mental prolongado; perde objetos necessários para tarefas ou atividades; é facilmente distraído por estímulos externos; é esquecido em relação a atividades cotidianas.",
    "2. Hiperatividade e impulsividade: 6 (ou mais) dos seguintes sintomas persistem por pelo menos 6 meses, em grau inconsistente com o nível de desenvolvimento (para adolescentes mais velhos e adultos, a partir de 17 anos, são exigidos pelo menos 5 sintomas): remexe as mãos/pés ou se contorce na cadeira; levanta-se em situações em que se espera que permaneça sentado; corre ou escala em situações inapropriadas (em adolescentes/adultos, pode se limitar a sensação de inquietação); é incapaz de brincar ou se envolver em atividades de lazer calmamente; está frequentemente 'a mil' ou 'com o motor ligado'; fala em demasia; responde antes que a pergunta tenha sido concluída; dificuldade em aguardar a sua vez; interrompe ou se intromete (em conversas, jogos, atividades).",
    "B. Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade.",
    "C. Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes (casa, escola, trabalho, com amigos/parentes, outras atividades).",
    "D. Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional, ou de que reduzem sua qualidade.",
    "E. Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental (transtorno do humor, transtorno de ansiedade, transtorno dissociativo, transtorno da personalidade, intoxicação ou abstinência de substância).",
  ],

  especificadores: [
    "Apresentação combinada: critérios de desatenção e de hiperatividade-impulsividade satisfeitos nos últimos 6 meses",
    "Apresentação predominantemente desatenta: critério de desatenção satisfeito, mas não o de hiperatividade-impulsividade, nos últimos 6 meses",
    "Apresentação predominantemente hiperativa-impulsiva: critério de hiperatividade-impulsividade satisfeito, mas não o de desatenção, nos últimos 6 meses",
    "Em remissão parcial: critérios completos não satisfeitos nos últimos 6 meses, mas os sintomas ainda causam prejuízo funcional",
    "Gravidade: leve, moderada, grave",
  ],

  duracaoMinima: "Sintomas presentes por pelo menos 6 meses, com início de vários sintomas antes dos 12 anos de idade",

  prevalencia:
    "Prevalência em crianças estimada em torno de 5-7%; em adultos, estima-se persistência de sintomas clinicamente significativos em cerca de 2,5-5% da população, considerando que a maioria dos casos infantis apresenta alguma atenuação, mas não remissão completa, na vida adulta. Predomínio masculino mais marcante na infância (razão aproximada de 2:1 a 3:1), com diferença menor na vida adulta, em parte por subdiagnóstico histórico em meninas com apresentação predominantemente desatenta.",

  cursoEPrognostico:
    "Início precoce, com sintomas identificáveis já na infância, embora o diagnóstico em adultos frequentemente ocorra de forma tardia, sobretudo em apresentações predominantemente desatentas ou em indivíduos com alta reserva cognitiva/compensação. Hiperatividade motora tende a atenuar-se com a idade, dando lugar a inquietação subjetiva, enquanto desatenção e dificuldades executivas tendem a persistir. Associado a maior risco de baixo desempenho acadêmico/ocupacional, acidentes, dificuldades relacionais e comorbidades psiquiátricas quando não tratado. Tratamento adequado melhora significativamente o funcionamento e a qualidade de vida.",

  diagnosticoDiferencial: [
    "Variação normal do desenvolvimento/temperamento ativo em crianças, sem prejuízo funcional significativo",
    "Transtorno Bipolar (distinguir impulsividade e agitação de sintomas maníacos episódicos, com curso e duração distintos do padrão persistente do TDAH)",
    "Transtornos de ansiedade e Transtorno Depressivo Maior (desatenção secundária à preocupação, ruminação ou anedonia, sem o padrão precoce e pervasivo do TDAH)",
    "Transtorno do Espectro Autista (pode coexistir; dificuldades atencionais podem ser secundárias a interesses restritos ou dificuldades de reciprocidade social)",
    "Transtornos específicos de aprendizagem (dificuldades acadêmicas circunscritas a áreas específicas, sem o padrão global de desatenção/hiperatividade)",
    "Transtorno de Personalidade Borderline ou outros transtornos de personalidade em adultos (impulsividade em contexto de instabilidade afetiva e relacional mais amplo)",
    "Transtorno por Uso de Substâncias (intoxicação/abstinência podem mimetizar sintomas; também comorbidade frequente)",
    "Distúrbios do sono e apneia obstrutiva (desatenção secundária à privação de sono)",
    "Condições médicas (hipertireoidismo, déficits sensoriais não corrigidos)",
  ],

  comorbidadesComuns: [
    "Transtornos específicos de aprendizagem",
    "Transtorno Desafiador de Oposição e Transtorno de Conduta em crianças/adolescentes",
    "Transtornos de ansiedade",
    "Transtorno Depressivo Maior e Transtorno Bipolar",
    "Transtorno do Espectro Autista",
    "Transtornos por uso de substâncias em adolescentes/adultos",
    "Transtornos do sono",
  ],

  tratamentoPrimeiraLinha: [
    "Estimulantes como primeira linha farmacológica: metilfenidato (formulações de liberação imediata e prolongada) e lisdexanfetamina, com resposta robusta e rápida na maioria dos pacientes",
    "Atomoxetina como alternativa não-estimulante de primeira/segunda linha, particularmente indicada quando há contraindicação a estimulantes, risco de uso indevido de substâncias, ou preferência por efeito não relacionado a horário de pico",
    "Intervenções psicossociais e comportamentais como parte integral do tratamento, especialmente em crianças pequenas (treinamento parental, intervenções escolares) e como adjuvante em adultos (TCC voltada a funções executivas e organização)",
    "Escala ASRS-6 (Adult ADHD Self-Report Scale) como instrumento validado de rastreio para sintomas de TDAH em adultos, útil na triagem inicial mas não substituindo avaliação clínica estruturada e histórico de desenvolvimento",
    "Psicoeducação sobre o transtorno para o paciente, família e, quando aplicável, escola/ambiente de trabalho, com adaptações ambientais estruturadas como complemento ao tratamento farmacológico",
  ],

  sintomasChave: [
    { id: "desatencao", peso: 3 },
    { id: "hiperatividade", peso: 2 },
    { id: "impulsividade", peso: 2 },
    { id: "sintomas-desde-infancia", peso: 2 },
  ],

  medicamentosPrimeiraLinha: ["metilfenidato", "lisdexanfetamina", "atomoxetina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "American Academy of Pediatrics - Clinical Practice Guideline for ADHD",
    "NICE Guideline NG87 - Attention deficit hyperactivity disorder: diagnosis and management",
    "Canadian ADHD Practice Guidelines (CADDRA)",
    "CID-11 (OMS)",
    "Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — Transtorno do Déficit de Atenção com Hiperatividade (TDAH) (gov.br/saude)",
  ],
};

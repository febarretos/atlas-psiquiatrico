import { Diagnostico } from "./types";

export const esquizofrenia: Diagnostico = {
  id: "esquizofrenia",

  nome: "Esquizofrenia",

  categoria: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",

  cid11: "6A20",

  cid10: "F20",

  descricao:
    "Transtorno psicótico crônico e grave, caracterizado por sintomas positivos (delírios, alucinações, discurso e comportamento desorganizados), sintomas negativos (embotamento afetivo, alogia, avolia) e prejuízo funcional significativo e persistente, com impacto substancial na vida social, ocupacional e no autocuidado.",

  criteriosDiagnosticos: [
    "A. Dois ou mais dos seguintes sintomas, cada um presente por uma quantidade significativa de tempo durante um período de 1 mês (ou menos, se tratado com sucesso), sendo obrigatória a presença de pelo menos um dos itens 1, 2 ou 3:",
    "1. Delírios.",
    "2. Alucinações.",
    "3. Discurso desorganizado (descarrilamento frequente ou incoerência).",
    "4. Comportamento grosseiramente desorganizado ou catatônico.",
    "5. Sintomas negativos (ex. expressão emocional diminuída, avolia).",
    "B. Desde o início da perturbação, o funcionamento em uma ou mais áreas importantes (trabalho, relações interpessoais, autocuidado) está acentuadamente abaixo do nível alcançado antes do início (ou, quando o início ocorre na infância/adolescência, há fracasso em atingir o nível esperado de funcionamento).",
    "C. Sinais contínuos da perturbação persistem por, no mínimo, 6 meses. Esse período deve incluir ao menos 1 mês de sintomas que preenchem o Critério A (fase ativa), podendo incluir períodos de sintomas prodrômicos ou residuais, durante os quais os sinais podem manifestar-se apenas por sintomas negativos ou por 2 ou mais sintomas do Critério A de forma atenuada.",
    "D. Transtorno Esquizoafetivo e Transtorno Depressivo ou Bipolar com características psicóticas foram descartados, porque: (1) não ocorreram episódios depressivos maiores ou maníacos concomitantes aos sintomas da fase ativa; ou (2), se ocorreram, estiveram presentes por uma minoria da duração total dos períodos ativo e residual.",
    "E. A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "F. Se há história de Transtorno do Espectro Autista ou de transtorno da comunicação de início na infância, o diagnóstico adicional de esquizofrenia só é feito se delírios ou alucinações proeminentes, além dos demais sintomas exigidos, também estiverem presentes por pelo menos 1 mês.",
  ],

  especificadores: [
    "Primeiro episódio, atualmente em episódio agudo",
    "Primeiro episódio, atualmente em remissão parcial ou completa",
    "Episódios múltiplos, atualmente em episódio agudo, remissão parcial ou completa",
    "Contínuo",
    "Não especificado",
    "Com catatonia",
    "Gravidade especificada por avaliação quantitativa dos sintomas principais (opcional)",
  ],

  duracaoMinima: "Sinais contínuos da perturbação por pelo menos 6 meses, incluindo ao menos 1 mês de sintomas da fase ativa",

  prevalencia:
    "Prevalência ao longo da vida em torno de 0,3-0,7% na população geral; incidência ligeiramente maior em homens, que também tendem a apresentar início mais precoce (final da adolescência/início dos 20 anos) comparado às mulheres (final dos 20/início dos 30 anos).",

  cursoEPrognostico:
    "Curso tipicamente crônico, com fases prodrômica, ativa e residual. Aproximadamente 1/5 a 1/3 dos pacientes apresenta evolução relativamente favorável; a maioria mantém sintomas residuais e prejuízo funcional persistente entre episódios. Sintomas positivos tendem a responder melhor a tratamento e atenuar-se com a idade, enquanto sintomas negativos e prejuízo cognitivo tendem a ser mais persistentes e determinantes do prognóstico funcional a longo prazo. Risco de suicídio significativamente elevado, especialmente no início do quadro e em períodos de insight preservado sobre a doença. Expectativa de vida reduzida em relação à população geral, em grande parte por comorbidades cardiometabólicas.",

  diagnosticoDiferencial: [
    "Transtorno Esquizofreniforme (quadro idêntico, mas com duração total entre 1 e 6 meses)",
    "Transtorno Psicótico Breve (duração entre 1 dia e 1 mês, frequentemente com fator precipitante identificável)",
    "Transtorno Esquizoafetivo (episódios de humor proeminentes e concomitantes a sintomas psicóticos por parcela substancial do curso)",
    "Transtorno Depressivo ou Bipolar com características psicóticas (sintomas psicóticos restritos aos episódios de humor)",
    "Transtorno Delirante (delírios não bizarros, sem os demais critérios do Critério A da esquizofrenia, funcionamento relativamente preservado fora da área do delírio)",
    "Psicose induzida por substância (estimulantes, cannabis de alta potência, alucinógenos) ou por condição médica (encefalites autoimunes, epilepsia do lobo temporal, tumores, doenças autoimunes/endócrinas)",
    "Transtorno do Espectro Autista e Transtorno da Comunicação (déficits sociais e de comunicação desde a infância, sem delírios/alucinações proeminentes, exceto se preencherem critério adicional)",
    "Transtorno de Personalidade Esquizotípica (crenças estranhas e distorções perceptivas atenuadas, sem episódios psicóticos francos e sustentados)",
  ],

  comorbidadesComuns: [
    "Transtornos por uso de substâncias (especialmente tabaco, cannabis e estimulantes — presente em cerca de metade dos casos)",
    "Transtornos depressivos e ansiosos secundários",
    "Síndrome metabólica, obesidade, diabetes tipo 2 e doença cardiovascular (frequentemente agravadas pelo uso de antipsicóticos)",
    "TOC/sintomas obsessivo-compulsivos",
    "Comportamento suicida",
  ],

  tratamentoPrimeiraLinha: [
    "Antipsicóticos de segunda geração (risperidona, olanzapina, quetiapina, aripiprazol, paliperidona) como primeira linha na maioria dos guidelines, pelo perfil de efeitos extrapiramidais mais favorável",
    "Antipsicóticos de longa duração (formulações injetáveis/LAI) recomendados precocemente, especialmente em casos de adesão irregular ou episódios múltiplos",
    "Clozapina indicada especificamente para esquizofrenia resistente ao tratamento (após falha documentada de pelo menos 2 antipsicóticos em dose e tempo adequados), sendo o único agente com evidência robusta nesse cenário e efeito antissuicida documentado",
    "Intervenções psicossociais como adjuvantes essenciais: TCC para psicose, treinamento de habilidades sociais, remediação cognitiva, psicoeducação familiar e programas de suporte ao emprego (evidência forte de redução de recaída e melhora funcional)",
    "Intervenção precoce em primeiro episódio psicótico (equipes especializadas/coordinated specialty care) associada a melhores desfechos a longo prazo",
    "ECT como opção adjuvante em casos de catatonia associada, sintomas graves refratários ou risco de suicídio iminente",
  ],

  sintomasChave: [
    { id: "delirios", peso: 3 },
    { id: "alucinacoes", peso: 3 },
    { id: "discurso-desorganizado", peso: 2 },
    { id: "ideacao-paranoide", peso: 1 },
  ],

  medicamentosPrimeiraLinha: ["risperidona", "olanzapina", "quetiapina", "aripiprazol", "paliperidona", "clozapina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Practice Guideline for the Treatment of Patients with Schizophrenia",
    "NICE Guideline CG178 - Psychosis and schizophrenia in adults",
    "PORT (Schizophrenia Patient Outcomes Research Team) Treatment Recommendations",
    "CID-11 (OMS)",
    "Associação Brasileira de Psiquiatria (ABP) / Associação Médica Brasileira (AMB). Diretriz: Esquizofrenia — Diagnóstico",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a1", "a2", "a3"],
    criterios: [
      { id: "a1", pergunta: "Você tem tido crenças fixas que não condizem com a realidade, mesmo diante de evidências contrárias (delírios)?" },
      { id: "a2", pergunta: "Você tem ouvido, visto ou sentido coisas que outras pessoas não percebem (alucinações)?" },
      { id: "a3", pergunta: "As pessoas notaram que seu jeito de falar ficou desorganizado ou difícil de acompanhar?" },
      { id: "a4", pergunta: "Seu comportamento tem ficado marcadamente desorganizado, ou você teve episódios de catatonia (imobilidade ou agitação extremas)?" },
      { id: "a5", pergunta: "Você notou uma redução importante na expressão de emoções, na fala ou na motivação/iniciativa para atividades (sintomas negativos)?" },
    ],
    algoritmo: {
      contagemMinima: 2,
      itensContaveis: ["a1", "a2", "a3", "a4", "a5"],
      gruposObrigatorios: [["a1", "a2", "a3"]],
      duracaoMinima: "Sinais contínuos por pelo menos 6 meses, incluindo ao menos 1 mês de sintomas da fase ativa (ou menos se tratado com sucesso); o restante do período de 6 meses pode incluir fase prodrômica ou residual, com sintomas negativos isolados ou 2+ sintomas do Critério A de forma atenuada",
      observacaoExclusao:
        "B: prejuízo funcional acentuado desde o início da perturbação (trabalho, relações interpessoais, autocuidado) — ou fracasso em atingir o nível esperado, se início na infância/adolescência. D: transtorno esquizoafetivo e transtorno depressivo/bipolar com características psicóticas devem ser descartados (episódios de humor concomitantes à fase ativa, se existentes, presentes por minoria da duração total). E: não atribuível a efeito fisiológico de substância ou outra condição médica. F: se história de TEA/transtorno de comunicação de início na infância, exige delírios ou alucinações proeminentes por pelo menos 1 mês, além dos demais sintomas.",
    },
  },
};

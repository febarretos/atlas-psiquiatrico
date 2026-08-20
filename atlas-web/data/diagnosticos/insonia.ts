import { Diagnostico } from "./types";

export const insonia: Diagnostico = {
  id: "insonia",

  nome: "Transtorno de Insônia",

  categoria: "Transtornos do Sono-Vigília",

  cid11: "7A00",

  cid10: "F51.0 / G47.0",

  descricao:
    "Insatisfação predominante com a quantidade ou qualidade do sono, associada a dificuldade em iniciar o sono, mantê-lo ou despertar precoce com incapacidade de retornar a dormir, causando sofrimento clinicamente significativo ou prejuízo funcional, e ocorrendo apesar de oportunidade adequada para dormir.",

  criteriosDiagnosticos: [
    "A. Insatisfação predominante com a quantidade ou qualidade do sono, associada a um (ou mais) dos seguintes sintomas:",
    "1. Dificuldade em iniciar o sono (em crianças, pode se manifestar como dificuldade em iniciar o sono sem a intervenção do cuidador).",
    "2. Dificuldade em manter o sono, caracterizada por despertares frequentes ou problemas em retornar a dormir após acordar (em crianças, pode se manifestar como dificuldade em retornar a dormir sem a intervenção do cuidador).",
    "3. Despertar precoce pela manhã com incapacidade de retornar a dormir.",
    "B. A perturbação do sono causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional, educacional, acadêmico, comportamental ou em outras áreas importantes.",
    "C. A dificuldade de sono ocorre pelo menos 3 noites por semana.",
    "D. A dificuldade de sono está presente por pelo menos 3 meses.",
    "E. A dificuldade de sono ocorre apesar de oportunidade adequada para dormir.",
    "F. A insônia não é mais bem explicada por outro transtorno do sono-vigília (por exemplo, narcolepsia, transtorno do sono relacionado à respiração, transtorno do ritmo circadiano de sono-vigília, parassonia) e não ocorre exclusivamente durante o curso desse outro transtorno.",
    "G. A insônia não é atribuível aos efeitos fisiológicos de uma substância (droga de abuso, medicamento).",
    "H. A coexistência de transtornos mentais e de condições médicas não explica adequadamente a queixa predominante de insônia.",
  ],

  especificadores: [
    "Episódico: sintomas presentes por período mínimo de 1 mês, mas inferior a 3 meses",
    "Persistente: sintomas presentes por 3 meses ou mais",
    "Recorrente: 2 ou mais episódios no período de 1 ano",
    "Com comorbidade não relacionada ao sono, incluindo transtornos mentais, condições médicas, ou outro transtorno do sono (especificar a comorbidade)",
  ],

  duracaoMinima: "Dificuldade de sono presente pelo menos 3 noites por semana, por pelo menos 3 meses",

  prevalencia:
    "Sintomas de insônia isolados são extremamente comuns (até 30-35% da população geral relata algum sintoma), mas o Transtorno de Insônia com critérios completos (frequência, duração e prejuízo funcional) apresenta prevalência estimada entre 6-10%. Mais comum em mulheres, idosos e indivíduos com comorbidades psiquiátricas ou médicas.",

  cursoEPrognostico:
    "Pode ter início em qualquer fase da vida, mas o primeiro episódio é comum na juventude adulta; incidência aumenta em mulheres na perimenopausa e em idosos. Curso frequentemente crônico e flutuante, com fatores precipitantes (estresse agudo, mudanças de rotina) seguidos por fatores perpetuadores (crenças disfuncionais sobre o sono, comportamentos compensatórios mal-adaptativos como permanecer excessivamente na cama). Associada a risco aumentado de desenvolvimento ou piora de depressão, ansiedade e prejuízo cognitivo/ocupacional quando não tratada adequadamente.",

  diagnosticoDiferencial: [
    "Insônia situacional/aguda de curta duração relacionada a estressor identificável, sem preencher o critério de duração mínima de 3 meses",
    "Transtorno do Ritmo Circadiano de Sono-Vigília (o problema é o horário do sono, não a capacidade de dormir per se)",
    "Apneia obstrutiva do sono e outros transtornos do sono relacionados à respiração (rastrear ativamente ronco, pausas respiratórias, sonolência diurna excessiva)",
    "Síndrome das pernas inquietas",
    "Insônia secundária a transtorno depressivo ou de ansiedade primário (tratamento do transtorno de base frequentemente melhora o sono, mas insônia residual é comum e deve ser tratada especificamente)",
    "Insônia induzida por substância/medicação (cafeína, álcool, corticoides, estimulantes)",
    "Percepção equivocada do estado de sono (queixa subjetiva de insônia sem alterações objetivas relevantes na polissonografia)",
    "Higiene do sono inadequada (sem os demais critérios de transtorno estabelecido)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior (relação bidirecional — insônia é fator de risco e sintoma residual comum)",
    "Transtornos de ansiedade (TAG, pânico)",
    "Transtorno por Uso de Álcool e outras substâncias (uso de álcool como automedicação para dormir)",
    "Dor crônica e condições médicas gerais",
    "TDAH em crianças e adultos",
    "Apneia obstrutiva do sono (comorbidade frequente exigindo investigação com polissonografia)",
  ],

  tratamentoPrimeiraLinha: [
    "Terapia Cognitivo-Comportamental para Insônia (TCC-I) é o tratamento de primeira linha recomendado pelas principais diretrizes internacionais, com eficácia superior e mais duradoura que a farmacoterapia isolada — inclui restrição do sono, controle de estímulos, higiene do sono e reestruturação cognitiva de crenças disfuncionais sobre o sono",
    "Hipnóticos (zolpidem, zaleplona, eszopiclona) como opção farmacológica de curto prazo quando a TCC-I não está disponível ou como adjuvante inicial, evitando-se uso prolongado pelo risco de tolerância e dependência",
    "Trazodona em dose baixa como alternativa frequentemente utilizada off-label, particularmente favorável em pacientes com depressão comórbida",
    "Agonistas de receptores de melatonina e antagonistas duplos de orexina como opções adicionais, especialmente em idosos ou quando há preocupação com risco de dependência",
    "Evitar benzodiazepínicos como tratamento de manutenção de primeira linha pelo perfil de tolerância, dependência e risco em idosos (quedas, prejuízo cognitivo)",
  ],

  sintomasChave: [
    { id: "insonia", peso: 3 },
    { id: "curso-cronico-meses", peso: 2 },
    { id: "fadiga", peso: 1 },
    { id: "dificuldade-concentracao", peso: 1 },
  ],

  medicamentosPrimeiraLinha: ["trazodona", "zolpidem"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "American Academy of Sleep Medicine - Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia",
    "European Sleep Research Society Guideline for the Diagnosis and Treatment of Insomnia",
    "NICE Guideline NG223 - Insomnia",
    "CID-11 (OMS)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a1", "a2", "a3"],
    criterios: [
      { id: "a1", pergunta: "Você tem dificuldade para iniciar o sono?", grupo: "A" },
      { id: "a2", pergunta: "Você tem dificuldade para manter o sono, com despertares frequentes ou dificuldade para voltar a dormir depois de acordar?", grupo: "A" },
      { id: "a3", pergunta: "Você acorda muito cedo pela manhã e não consegue voltar a dormir?", grupo: "A" },
      { id: "b", pergunta: "Essa dificuldade de sono causa sofrimento significativo ou atrapalha seu funcionamento social, no trabalho, na escola ou em outras áreas importantes?" },
    ],
    algoritmo: {
      itensContaveis: ["a1", "a2", "a3", "b"],
      gruposObrigatorios: [["a1", "a2", "a3"], ["b"]],
      duracaoMinima: "Pelo menos 3 noites por semana, por pelo menos 3 meses",
      observacaoExclusao:
        "E: ocorre apesar de oportunidade adequada para dormir. F: não mais bem explicada por outro transtorno do sono-vigília (narcolepsia, apneia do sono, transtorno do ritmo circadiano, parassonia) e não ocorre exclusivamente durante o curso desse outro transtorno. G: não atribuível a efeito fisiológico de substância ou medicamento. H: a coexistência de transtornos mentais/condições médicas não explica adequadamente a queixa predominante de insônia. Avaliar especificador episódico (1 a <3 meses), persistente (>=3 meses) ou recorrente (2+ episódios/ano).",
    },
  },
};

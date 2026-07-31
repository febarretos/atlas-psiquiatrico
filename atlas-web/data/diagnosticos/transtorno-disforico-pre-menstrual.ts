import { Diagnostico } from "./types";

export const transtornoDisforicoPreMenstrual: Diagnostico = {
  id: "transtorno-disforico-pre-menstrual",

  nome: "Transtorno Disfórico Pré-Menstrual",

  categoria: "Transtornos Depressivos",

  cid11: "GA34.41",

  cid10: "N94.3",

  descricao:
    "Transtorno caracterizado por sintomas afetivos, comportamentais e físicos marcantes que emergem de forma cíclica na semana que antecede a menstruação, melhoram significativamente após o início do fluxo menstrual e tornam-se mínimos ou ausentes na semana pós-menstrual, causando sofrimento ou prejuízo funcional significativo e distinguindo-se da tensão pré-menstrual comum pela intensidade e repercussão clínica dos sintomas.",

  criteriosDiagnosticos: [
    "A. Na maioria dos ciclos menstruais do último ano, pelo menos 5 sintomas devem estar presentes na semana final antes do início da menstruação, começar a melhorar dentro de poucos dias após o início do fluxo menstrual, e tornar-se mínimos ou ausentes na semana pós-menstrual.",
    "B. Um (ou mais) dos seguintes sintomas deve estar presente: (1) labilidade afetiva marcada (mudanças de humor, sensação repentina de tristeza ou vontade de chorar, sensibilidade aumentada à rejeição); (2) irritabilidade ou raiva marcada, ou aumento de conflitos interpessoais; (3) humor deprimido marcado, sentimentos de desesperança ou pensamentos autodepreciativos; (4) ansiedade, tensão marcada e/ou sensação de estar no limite ou nervosa.",
    "C. Um (ou mais) dos seguintes sintomas adicionais, para totalizar 5 sintomas quando combinados com os do Critério B: (1) interesse diminuído pelas atividades habituais; (2) dificuldade subjetiva de concentração; (3) letargia, fadiga fácil ou falta de energia marcante; (4) alteração acentuada do apetite, comer em excesso ou desejo compulsivo por alimentos específicos; (5) hipersonia ou insônia; (6) sensação de estar sobrecarregada ou fora de controle; (7) sintomas físicos como mastalgia/hipersensibilidade mamária, dor articular ou muscular, sensação de inchaço ou ganho de peso.",
    "D. Os sintomas estão associados a sofrimento clinicamente significativo ou interferência notável no trabalho, escola, atividades sociais habituais ou relacionamentos com outras pessoas.",
    "E. A perturbação não é meramente exacerbação de sintomas de outro transtorno mental (transtorno depressivo maior, transtorno de pânico, transtorno depressivo persistente ou transtorno de personalidade), ainda que possa ser concomitante a qualquer um deles.",
    "F. O Critério A deve ser confirmado idealmente por avaliações prospectivas diárias durante pelo menos 2 ciclos sintomáticos consecutivos — o diagnóstico não deve ser firmado apenas com base em relato retrospectivo, dado o risco de superestimação da relação temporal dos sintomas com o ciclo menstrual.",
    "G. Os sintomas não são atribuíveis aos efeitos fisiológicos de uma substância ou de outra condição médica.",
  ],

  duracaoMinima: "Sintomas cíclicos presentes na maioria dos ciclos do último ano, confirmados prospectivamente por pelo menos 2 ciclos consecutivos",

  prevalencia:
    "Prevalência estimada entre 1,8-5,8% das mulheres em idade reprodutiva que menstruam, valor bem inferior ao da tensão pré-menstrual leve/moderada (que afeta até 20-30% das mulheres), justamente pelo limiar mais elevado de gravidade e prejuízo funcional exigido para o diagnóstico.",

  cursoEPrognostico:
    "Curso tipicamente crônico e recorrente ao longo da vida reprodutiva, com sintomas presentes na maioria dos ciclos até a menopausa, quando tende a remitir (embora possa haver piora transitória na perimenopausa). Pode piorar em períodos de maior estresse psicossocial e em transições hormonais (pós-parto, uso ou suspensão de contraceptivos hormonais). Associado a risco aumentado de ideação suicida no período sintomático, o que deve ser sistematicamente rastreado.",

  diagnosticoDiferencial: [
    "Tensão pré-menstrual comum/síndrome pré-menstrual leve (sintomas mais leves, sem o prejuízo funcional significativo exigido para o diagnóstico de TDPM)",
    "Exacerbação pré-menstrual de outro transtorno do humor ou de ansiedade preexistente (transtorno depressivo maior, transtorno depressivo persistente, transtorno de pânico, transtorno bipolar) — nesses casos os sintomas basais já estão presentes fora da fase lútea, apenas se intensificando antes da menstruação, o que descaracteriza TDPM como diagnóstico primário",
    "Transtorno Depressivo Maior ou Transtorno de Ansiedade sem relação temporal cíclica específica com o ciclo menstrual",
    "Dismenorreia (dor pélvica cíclica de natureza predominantemente física/ginecológica, sem o quadro afetivo-comportamental proeminente)",
    "Condições ginecológicas ou endócrinas com sintomas cíclicos sobrepostos (endometriose, distúrbios da tireoide, perimenopausa)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior (risco aumentado de história pessoal e maior probabilidade de desenvolvimento futuro)",
    "Transtornos de ansiedade (TAG, transtorno de pânico)",
    "Transtorno Depressivo Persistente (Distimia)",
    "Enxaqueca menstrual",
    "Transtornos alimentares",
  ],

  tratamentoPrimeiraLinha: [
    "ISRS (sertralina, fluoxetina, escitalopram) como primeira linha farmacológica, com resposta geralmente mais rápida do que na depressão maior (dentro de dias)",
    "Esquema de dosagem intermitente na fase lútea (apenas nas últimas 1-2 semanas do ciclo, da ovulação até o início da menstruação) apresenta eficácia comparável ao esquema contínuo, com a vantagem de menor exposição cumulativa ao fármaco — opção a ser discutida com a paciente conforme preferência e tolerabilidade",
    "Contraceptivos hormonais combinados, especialmente formulações contendo drospirenona com intervalo estendido/reduzido de pausa hormonal, como alternativa ou complemento ao tratamento com ISRS",
    "Terapia Cognitivo-Comportamental como abordagem adjuvante, com foco em manejo de sintomas afetivos e estratégias de enfrentamento ao longo do ciclo",
    "Medidas de estilo de vida como adjuvantes: exercício físico regular, redução de cafeína/álcool/sódio, e suplementação de cálcio, com evidência mais limitada mas frequentemente recomendadas como parte do manejo geral",
    "Em casos refratários e graves, considerar supressão hormonal com agonistas de GnRH (geralmente em conjunto com terapia de reposição hormonal add-back) sob acompanhamento ginecológico especializado",
  ],

  sintomasChave: [
    { id: "sintomas-ciclo-menstrual", peso: 3 },
    { id: "labilidade-afetiva", peso: 2 },
    { id: "irritabilidade", peso: 2 },
    { id: "ansiedade-excessiva", peso: 1 },
    { id: "humor-deprimido", peso: 1 },
  ],

  medicamentosPrimeiraLinha: ["sertralina", "fluoxetina", "escitalopram"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "ACOG Clinical Guidance - Premenstrual Syndrome and Premenstrual Dysphoric Disorder",
    "International Association for Premenstrual Disorders (IAPMD) - Clinical guidance",
  ],
};

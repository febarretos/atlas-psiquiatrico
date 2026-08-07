import { Fluxograma } from "./types";

export const manejoInsonia: Fluxograma = {
  id: "manejo-insonia",

  titulo: "Avaliação e Manejo da Insônia",

  categoria: "Transtornos do Sono-Vigília",

  descricao:
    "Algoritmo para rastreio de gravidade, exclusão de causas secundárias e conduta na Insônia, baseado na diretriz da American Academy of Sleep Medicine, European Sleep Research Society e NICE NG223.",

  nodeInicialId: "rastreio-isi",

  nodes: [
    {
      id: "rastreio-isi",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Queixa de insatisfação com o sono: aplicar o Índice de Gravidade de Insônia (ISI).",
      escalasRelacionadas: ["isi"],
      opcoes: [{ label: "Escala aplicada, avaliar causas secundárias", proximoNodeId: "avaliar-causas-secundarias" }],
    },
    {
      id: "avaliar-causas-secundarias",
      tipo: "pergunta",
      texto:
        "Investigação obrigatória de causas secundárias: ronco/pausas respiratórias/sonolência diurna excessiva (apneia obstrutiva), necessidade de mover as pernas à noite (síndrome das pernas inquietas), uso de cafeína/álcool/corticoide/estimulante, alteração do horário de sono em vez da capacidade de dormir (transtorno do ritmo circadiano), e sintomas de outro transtorno psiquiátrico primário (depressão, ansiedade). Alguma causa secundária identificada como predominante?",
      detalhe:
        "Suspeita de apneia obstrutiva do sono, síndrome das pernas inquietas, narcolepsia ou outra parassonia deve levar à polissonografia — não é exame de rotina para insônia primária típica.",
      opcoes: [
        { label: "Sim, causa secundária predominante identificada", proximoNodeId: "conduta-causa-secundaria" },
        { label: "Não, insônia primária ou residual clinicamente relevante mesmo tratando a comorbidade", proximoNodeId: "diagnostico-confirmado-insonia" },
      ],
    },
    {
      id: "conduta-causa-secundaria",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Tratar a causa secundária identificada (encaminhar para polissonografia/especialista quando indicado).",
      detalhe:
        "Reavaliar a queixa de sono após o tratamento da causa de base — insônia residual clinicamente significativa mesmo após tratamento adequado da comorbidade justifica tratamento específico para insônia em paralelo.",
    },
    {
      id: "diagnostico-confirmado-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Diagnóstico de Transtorno de Insônia confirmado (ou insônia residual clinicamente relevante).",
      diagnosticosRelacionados: ["insonia"],
      opcoes: [{ label: "Iniciar tratamento", proximoNodeId: "conduta-tcc-i" }],
    },
    {
      id: "conduta-tcc-i",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Terapia Cognitivo-Comportamental para Insônia (TCC-I) como tratamento de primeira linha.",
      detalhe:
        "TCC-I tem eficácia superior e mais duradoura que a farmacoterapia isolada, segundo as principais diretrizes internacionais. Componentes centrais: restrição do sono (reduzir o tempo na cama para aumentar a eficiência do sono), controle de estímulos (associar a cama só ao sono, sair da cama se não conseguir dormir), reestruturação cognitiva de crenças disfuncionais sobre o sono, e educação em higiene do sono.",
      opcoes: [{ label: "Reavaliar resposta", proximoNodeId: "resposta-tcc-i" }],
    },
    {
      id: "resposta-tcc-i",
      tipo: "pergunta",
      texto: "TCC-I disponível e com resposta adequada?",
      opcoes: [
        { label: "Sim, resposta adequada", proximoNodeId: "conduta-manter-insonia" },
        { label: "Não, TCC-I indisponível ou resposta insuficiente", proximoNodeId: "conduta-farmacologica-insonia" },
      ],
    },
    {
      id: "conduta-manter-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter as estratégias comportamentais consolidadas; reforçar prevenção de recaída.",
    },
    {
      id: "conduta-farmacologica-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Considerar farmacoterapia de curto prazo como adjuvante ou opção quando a TCC-I não está disponível.",
      detalhe:
        "Zolpidem por curto prazo é opção de primeira linha farmacológica, evitando-se uso prolongado pelo risco de tolerância e dependência — cautela redobrada em idosos pelo risco de quedas e prejuízo cognitivo. Trazodona em dose baixa é alternativa off-label frequentemente usada, particularmente favorável quando há depressão comórbida. Evitar benzodiazepínicos como tratamento de manutenção de primeira linha, pelo mesmo perfil de tolerância/dependência e risco aumentado em idosos.",
      medicamentosRelacionados: ["zolpidem", "trazodona"],
    },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "American Academy of Sleep Medicine. Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia.",
    "European Sleep Research Society. Guideline for the Diagnosis and Treatment of Insomnia.",
    "National Institute for Health and Care Excellence (NICE). Insomnia (NG223).",
    "Bastien CH, Vallières A, Morin CM. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med. 2001.",
  ],
};

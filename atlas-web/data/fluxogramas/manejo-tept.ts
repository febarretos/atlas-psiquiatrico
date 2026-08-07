import { Fluxograma } from "./types";

export const manejoTept: Fluxograma = {
  id: "manejo-tept",

  titulo: "Avaliação e Manejo do Transtorno de Estresse Pós-Traumático",

  categoria: "Transtornos Relacionados a Trauma e a Estressores",

  descricao:
    "Algoritmo para rastreio, diferenciação temporal entre Transtorno de Estresse Agudo e TEPT, e conduta terapêutica, baseado na APA Clinical Practice Guideline for PTSD, NICE NG116 e VA/DoD Clinical Practice Guideline.",

  nodeInicialId: "rastreio-pcl5",

  nodes: [
    {
      id: "rastreio-pcl5",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Exposição a evento traumático (critério A) com sintomas subsequentes: aplicar o PCL-5.",
      detalhe:
        "Critério A do DSM-5-TR: exposição a morte real ou ameaça de morte, lesão grave ou violência sexual — vivenciada diretamente, testemunhada, ocorrida com familiar/amigo próximo, ou por exposição repetida a detalhes aversivos (ex.: profissionais de resgate).",
      escalasRelacionadas: ["pcl5"],
      opcoes: [{ label: "Escala aplicada, avaliar resultado", proximoNodeId: "resultado-pcl5" }],
    },
    {
      id: "resultado-pcl5",
      tipo: "pergunta",
      texto: "PCL-5 acima do ponto de corte (≥33) e sintomas presentes há quanto tempo desde o trauma?",
      opcoes: [
        { label: "PCL-5 positivo, sintomas há mais de 1 mês", proximoNodeId: "diagnostico-confirmado-tept" },
        { label: "PCL-5 positivo, sintomas entre 3 dias e 1 mês", proximoNodeId: "conduta-estresse-agudo" },
        { label: "PCL-5 abaixo do ponto de corte", proximoNodeId: "conduta-pcl5-negativo" },
      ],
    },
    {
      id: "conduta-pcl5-negativo",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Rastreio abaixo do ponto de corte. Reavaliar se a suspeita clínica permanecer alta, especialmente em populações/contextos onde o ponto de corte validado pode variar.",
    },
    {
      id: "conduta-estresse-agudo",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Quadro compatível com Transtorno de Estresse Agudo (não TEPT).",
      detalhe:
        "Pelo DSM-5-TR, a sintomatologia central de TEPT ocorrendo entre 3 dias e 1 mês após o trauma caracteriza Transtorno de Estresse Agudo, não TEPT — o diagnóstico de TEPT exige persistência além de 1 mês. Uma parcela dos casos remite espontaneamente dentro desse período; outra evolui para TEPT. Reavaliar formalmente após 1 mês do trauma. Intervenções breves focadas no trauma podem ser oferecidas mesmo nesta fase.",
      opcoes: [{ label: "Reavaliar após 1 mês do trauma", proximoNodeId: "resultado-pcl5" }],
    },
    {
      id: "diagnostico-confirmado-tept",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Diagnóstico de TEPT confirmado (sintomas persistentes por mais de 1 mês, com prejuízo funcional).",
      diagnosticosRelacionados: ["tept"],
      opcoes: [{ label: "Iniciar tratamento", proximoNodeId: "conduta-psicoterapia-tept" }],
    },
    {
      id: "conduta-psicoterapia-tept",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Psicoterapia focada no trauma como primeira linha de tratamento.",
      detalhe:
        "Terapia de Processamento Cognitivo (TPC), Terapia de Exposição Prolongada e EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares) têm o maior nível de evidência entre as intervenções para TEPT.",
      opcoes: [{ label: "Avaliar necessidade de farmacoterapia", proximoNodeId: "avaliacao-farmacologica-tept" }],
    },
    {
      id: "avaliacao-farmacologica-tept",
      tipo: "pergunta",
      texto: "Psicoterapia focada no trauma indisponível/recusada, ou sintomas moderados a graves justificam farmacoterapia concomitante?",
      opcoes: [
        { label: "Sim, farmacoterapia indicada", proximoNodeId: "conduta-farmacologica-tept" },
        { label: "Não, psicoterapia isolada é suficiente por ora", proximoNodeId: "conduta-psicoterapia-isolada" },
      ],
    },
    {
      id: "conduta-psicoterapia-isolada",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter psicoterapia focada no trauma, reavaliando periodicamente a necessidade de farmacoterapia.",
    },
    {
      id: "conduta-farmacologica-tept",
      tipo: "conduta",
      nivel: "rotina",
      texto: "ISRS ou ISRSN como primeira linha farmacológica.",
      detalhe:
        "Sertralina e paroxetina têm aprovação regulatória específica para TEPT; venlafaxina é alternativa de primeira linha. Evitar benzodiazepínicos como tratamento primário — não reduzem os sintomas nucleares do TEPT e podem interferir na extinção do medo durante a exposição terapêutica. Prazosina tem sido usada off-label como adjuvante para pesadelos/insônia relacionados ao trauma, mas a evidência é mista — um grande ensaio clínico (Raskind et al., 2018, NEJM) não demonstrou benefício sobre os sintomas centrais de TEPT nem sobre pesadelos em veteranos, e as diretrizes VA/DoD dão recomendação fraca contra seu uso rotineiro; pode ser considerada num teste terapêutico individualizado e limitado no tempo, não como conduta padrão.",
      medicamentosRelacionados: ["sertralina", "paroxetina", "venlafaxina"],
    },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "American Psychiatric Association. Clinical Practice Guideline for the Treatment of PTSD.",
    "National Institute for Health and Care Excellence (NICE). Post-traumatic stress disorder (NG116).",
    "VA/DoD Clinical Practice Guideline for the Management of Posttraumatic Stress Disorder and Acute Stress Disorder.",
    "Weathers FW, et al. The PTSD Checklist for DSM-5 (PCL-5). National Center for PTSD, 2013.",
    "Raskind MA, et al. Trial of Prazosin for Post-Traumatic Stress Disorder in Military Veterans. N Engl J Med. 2018.",
  ],
};

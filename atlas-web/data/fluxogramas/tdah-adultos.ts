import { Fluxograma } from "./types";

export const tdahAdultos: Fluxograma = {
  id: "tdah-adultos",

  titulo: "Avaliação e Manejo do TDAH em Adultos",

  categoria: "Transtornos do Neurodesenvolvimento",

  descricao:
    "Algoritmo para rastreio, confirmação diagnóstica, triagem cardiovascular pré-tratamento e conduta farmacológica do Transtorno de Déficit de Atenção/Hiperatividade em adultos, baseado em NICE NG87, CADDRA e no PCDT do Ministério da Saúde.",

  nodeInicialId: "rastreio-aplicar-asrs6",

  nodes: [
    {
      id: "rastreio-aplicar-asrs6",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Suspeita de TDAH em adulto (queixa de desatenção/desorganização crônica): aplicar ASRS-6.",
      detalhe:
        "O ASRS-6 é um instrumento de rastreio, não diagnóstico — tem alta taxa de falso-positivo (valor preditivo positivo estimado entre 12% e 22% em amostras não clínicas). Um rastreio positivo indica que vale a pena investir numa avaliação estruturada completa, não que o diagnóstico está confirmado.",
      escalasRelacionadas: ["asrs6"],
      opcoes: [{ label: "Escala aplicada, avaliar resultado", proximoNodeId: "resultado-rastreio" }],
    },
    {
      id: "resultado-rastreio",
      tipo: "pergunta",
      texto: "O escore do ASRS-6 é sugestivo (rastreio positivo)?",
      opcoes: [
        { label: "Sim, rastreio positivo", proximoNodeId: "avaliacao-diagnostica-formal" },
        { label: "Não, rastreio negativo", proximoNodeId: "conduta-rastreio-negativo" },
      ],
    },
    {
      id: "conduta-rastreio-negativo",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Rastreio negativo — TDAH pouco provável no momento.",
      detalhe:
        "Considerar diagnósticos diferenciais para a queixa de desatenção: transtornos de ansiedade e depressão, transtornos do sono (incluindo apneia obstrutiva), transtorno por uso de substâncias, ou variação normal de temperamento sem prejuízo funcional significativo.",
    },
    {
      id: "avaliacao-diagnostica-formal",
      tipo: "pergunta",
      texto:
        "Avaliação diagnóstica estruturada completa: os critérios do DSM-5-TR estão preenchidos (≥5 sintomas de desatenção e/ou hiperatividade-impulsividade em adultos, início de vários sintomas antes dos 12 anos, prejuízo em ≥2 contextos, não mais bem explicado por outro transtorno)?",
      detalhe:
        "Rastrear ativamente diferenciais que mimetizam ou coexistem com TDAH: Transtorno Bipolar, transtornos de ansiedade e Transtorno Depressivo Maior, Transtorno do Espectro Autista, Transtorno de Personalidade Borderline, Transtorno por Uso de Substâncias, e distúrbios do sono/apneia obstrutiva. A história retrospectiva de sintomas na infância (idealmente corroborada por terceiros ou registros escolares) é essencial e frequentemente o elo mais difícil de estabelecer com confiança em adultos.",
      opcoes: [
        { label: "Sim, critérios preenchidos", proximoNodeId: "diagnostico-confirmado" },
        { label: "Não, quadro mais compatível com outro diagnóstico", proximoNodeId: "conduta-outro-diagnostico" },
      ],
    },
    {
      id: "conduta-outro-diagnostico",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Investigar e conduzir o diagnóstico diferencial identificado, em vez de TDAH.",
    },
    {
      id: "diagnostico-confirmado",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Diagnóstico de TDAH confirmado.",
      diagnosticosRelacionados: ["tdah"],
      opcoes: [
        { label: "Prosseguir para triagem pré-tratamento", proximoNodeId: "triagem-cardiovascular" },
      ],
    },
    {
      id: "triagem-cardiovascular",
      tipo: "pergunta",
      texto:
        "Triagem pré-tratamento (obrigatória antes de iniciar estimulante): pressão arterial, frequência cardíaca, peso e história cardiovascular pessoal/familiar coletadas. Há sintomas cardíacos, história familiar de morte súbita/arritmia, ou doença cardíaca estrutural conhecida?",
      detalhe:
        "ECG não é rotineiramente necessário antes de iniciar estimulante, atomoxetina ou outro fármaco para TDAH em adultos saudáveis — reservado para quando há esses fatores de risco específicos ou uma condição coexistente tratada com fármaco que também eleve risco cardíaco (NICE NG87).",
      opcoes: [
        { label: "Sim, fator de risco cardíaco presente", proximoNodeId: "conduta-avaliacao-cardiologica" },
        { label: "Não, sem fator de risco cardíaco relevante", proximoNodeId: "conduta-farmacologica-tdah" },
      ],
    },
    {
      id: "conduta-avaliacao-cardiologica",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Encaminhar para avaliação cardiológica com ECG antes de iniciar estimulante.",
      detalhe:
        "Considerar atomoxetina enquanto a avaliação cardiológica está pendente, dado seu perfil cardiovascular mais favorável, embora cautela cardiovascular também se aplique a ela.",
      medicamentosRelacionados: ["atomoxetina"],
    },
    {
      id: "conduta-farmacologica-tdah",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Iniciar tratamento farmacológico.",
      detalhe:
        "Estimulantes (metilfenidato ou lisdexanfetamina) são primeira linha, com resposta robusta e rápida na maioria dos pacientes — não há superioridade consistente estabelecida entre os dois; lisdexanfetamina é um pró-fármaco (ativação gradual), característica associada a menor potencial de uso indevido/abuso. Atomoxetina (não-estimulante) é alternativa de primeira/segunda linha quando há contraindicação a estimulante, risco de uso indevido de substâncias, ansiedade comórbida significativa, ou preferência por efeito contínuo sem pico/vale. Intervenções psicossociais (TCC voltada a funções executivas e organização, psicoeducação) são complementares essenciais, não substituem a farmacoterapia quando indicada.",
      medicamentosRelacionados: ["metilfenidato", "lisdexanfetamina", "atomoxetina"],
      opcoes: [
        { label: "Reavaliar resposta após dose otimizada", proximoNodeId: "resposta-farmacologica" },
      ],
    },
    {
      id: "resposta-farmacologica",
      tipo: "pergunta",
      texto: "Resposta clínica adequada após titulação até a dose otimizada?",
      opcoes: [
        { label: "Sim, resposta adequada", proximoNodeId: "conduta-manter-tdah" },
        { label: "Não, resposta insuficiente ou efeitos adversos limitantes", proximoNodeId: "conduta-trocar-classe" },
      ],
    },
    {
      id: "conduta-manter-tdah",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter o tratamento na dose eficaz, com monitorização periódica de peso, sono, apetite, PA e FC.",
    },
    {
      id: "conduta-trocar-classe",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Trocar para o outro estimulante (metilfenidato ↔ lisdexanfetamina) ou para atomoxetina, conforme o motivo da falha — resposta insuficiente favorece troca de estimulante; efeitos adversos significativos ou risco de uso indevido favorecem atomoxetina.",
      medicamentosRelacionados: ["metilfenidato", "lisdexanfetamina", "atomoxetina"],
    },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "National Institute for Health and Care Excellence (NICE). Attention deficit hyperactivity disorder: diagnosis and management (NG87).",
    "Canadian ADHD Practice Guidelines (CADDRA), 4th edition.",
    "Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — TDAH.",
    "Kessler RC, et al. The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychol Med. 2005.",
  ],
};

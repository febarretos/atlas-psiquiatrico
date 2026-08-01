import { Medicamento } from "../../types";

export const propranolol: Medicamento = {
  id: "propranolol",

  nome: "Propranolol",

  nomeComercial: [
    "Inderal",
    "Rebaten",
    "Propranolol (genérico)",
  ],

  classe: "Adjuvante/Betabloqueador",

  subclasse: "Betabloqueador não seletivo",

  mecanismo:
    "Antagonista beta-adrenérgico não seletivo (bloqueia receptores beta-1 e beta-2), reduzindo os sintomas físicos periféricos mediados pelo sistema nervoso simpático (taquicardia, tremor, sudorese), sem efeito ansiolítico central direto relevante.",

  posologias: [
    {
      indicacao: "Ansiedade de Desempenho/Performance Situacional (uso pontual)",
      doseInicial: "10–20 mg, 1 hora antes do evento",
      doseUsual: "10–40 mg, dose única antes do evento",
      doseMaxima: "40 mg (dose única)",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Tremor Induzido por Lítio ou Ansiolíticos",
      doseInicial: "10 mg 2x/dia",
      doseUsual: "30–80 mg/dia (2–3 tomadas)",
      doseMaxima: "160 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Acatisia Induzida por Antipsicótico (adjuvante)",
      doseInicial: "10–20 mg 2–3x/dia",
      doseUsual: "30–80 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "3–6 horas (formulação de liberação imediata)",

  metabolizacao:
    "Metabolização hepática extensa, predominantemente pela CYP2D6, com efeito de primeira passagem significativo.",

  indicacoes: [
    "Ansiedade de desempenho/performance situacional (off-label, uso pontual)",
    "Tremor induzido por lítio ou por ansiolíticos/antidepressivos",
    "Acatisia induzida por antipsicótico (adjuvante ou alternativa ao anticolinérgico, atuando nos sintomas autonômicos e no tremor)",
    "Agressividade em algumas condições neuropsiquiátricas (uso off-label, evidência limitada)",
  ],

  contraIndicacoes: [
    "Asma e Doença Pulmonar Obstrutiva Crônica (broncoespasmo)",
    "Bradicardia significativa",
    "Bloqueio atrioventricular de 2º ou 3º grau",
    "Insuficiência cardíaca descompensada",
    "Hipotensão significativa",
    "Feocromocitoma não tratado",
  ],

  vantagens: [
    "Eficaz e de ação rápida no controle dos sintomas físicos periféricos da ansiedade situacional (taquicardia, tremor), útil em uso pontual antes de eventos específicos",
    "Bom controle do tremor induzido por lítio, ISRS ou outros psicofármacos",
    "Alternativa não-anticolinérgica útil na acatisia, atuando nos sintomas autonômicos e no tremor associados, com menor risco de piora cognitiva que o biperideno",
    "Não gera dependência nem tolerância no uso pontual",
  ],

  desvantagens: [
    "Não trata os sintomas cognitivos/afetivos centrais da ansiedade — atua apenas nos sintomas físicos periféricos",
    "Contraindicações cardiovasculares e respiratórias relevantes limitam seu uso em parte considerável dos pacientes (asma, DPOC, bradicardia, ICC descompensada)",
    "Evidência limitada para uso em agressividade e em outras indicações neuropsiquiátricas off-label mais amplas",
    "Risco de bradicardia e hipotensão sintomática, especialmente em idosos ou em associação com outros hipotensores",
    "Descontinuação abrupta após uso regular pode causar taquicardia rebote",
  ],

  efeitosAdversos: [
    "Bradicardia",
    "Hipotensão",
    "Fadiga",
    "Tontura",
    "Extremidades frias",
    "Broncoespasmo (em pacientes suscetíveis)",
    "Distúrbios do sono e pesadelos (uso regular)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Outros anti-hipertensivos e bradicardizantes (verapamil, diltiazem, digoxina) — risco aditivo de bradicardia/hipotensão",
    "Insulina e hipoglicemiantes orais (pode mascarar sintomas de hipoglicemia)",
    "Antidepressivos e antipsicóticos com efeito hipotensor (efeito aditivo)",
    "Inibidores da CYP2D6 (fluoxetina, paroxetina) podem aumentar níveis séricos de propranolol",
    "Broncodilatadores beta-agonistas (antagonismo mútuo — risco de broncoespasmo em asma/DPOC)",
    "Clonidina (risco de hipertensão rebote grave se a clonidina for descontinuada abruptamente durante uso concomitante)",
    "AINEs de uso crônico (podem reduzir o efeito anti-hipertensivo)",
    "Lidocaína e teofilina (propranolol reduz o clearance hepático de ambas, aumentando o risco de toxicidade)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Baixa",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Atravessa a placenta; uso possível quando o benefício justificar o risco, com monitorização de crescimento fetal, frequência cardíaca fetal e glicemia neonatal.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em pequena quantidade; geralmente considerado compatível com monitorização do lactente para sinais de bradicardia ou hipoglicemia.",

  lactacaoCategoria: "compativel",

  renal:
    "Não necessita ajuste de dose significativo na insuficiência renal, pois é metabolizado predominantemente pelo fígado.",

  ajusteRenalNecessario: false,

  hepatica:
    "Requer cautela e possível redução de dose em insuficiência hepática significativa, dado o extenso metabolismo hepático de primeira passagem.",

  observacoes:
    "O propranolol é amplamente utilizado na psiquiatria como adjuvante para sintomas físicos autonômicos, sendo particularmente valioso no controle da ansiedade de desempenho/performance situacional (uso pontual antes de apresentações, provas ou eventos específicos), no tremor induzido por lítio ou por antidepressivos/ansiolíticos, e como opção adjuvante ou alternativa ao anticolinérgico no manejo da acatisia induzida por antipsicótico, atuando sobre os sintomas autonômicos e o tremor associados. Não deve ser confundido com tratamento central da ansiedade — seu mecanismo é puramente periférico, sem efeito ansiolítico direto sobre o sistema nervoso central. É essencial rastrear contraindicações cardiovasculares e respiratórias (asma, DPOC, bradicardia, bloqueios de condução, insuficiência cardíaca descompensada) antes da prescrição.",

  perolasClinicas: [
    "Para ansiedade de desempenho, orientar o paciente a testar a dose em uma situação de menor risco antes do evento real (ex: um ensaio, não a apresentação final) — resposta individual varia, e alguns pacientes sentem fadiga/lentificação excessiva que atrapalharia a performance.",
    "Como adjuvante em acatisia, é uma boa alternativa quando o biperideno está contraindicado (idosos, risco de piora cognitiva) ou já não é suficiente isoladamente — atuam por mecanismos diferentes e podem ser associados.",
    "Sempre perguntar sobre asma/DPOC mesmo leve ou 'controlada' antes de prescrever — mesmo formulações não seletivas em dose baixa podem precipitar broncoespasmo significativo nesses pacientes.",
    "Evitar suspensão abrupta após uso regular (não apenas pontual) — risco de taquicardia/hipertensão rebote, mesmo em doses relativamente baixas usadas para fins psiquiátricos.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia (manejo de acatisia)",
    "Bula de referência ANVISA/FDA (Inderal)",
  ],
};

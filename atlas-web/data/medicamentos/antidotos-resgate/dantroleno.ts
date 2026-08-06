import { Medicamento } from "../../types";

export const dantroleno: Medicamento = {
  id: "dantroleno",

  nome: "Dantroleno",

  nomeComercial: [
    "Dantrium",
    "Revonto",
  ],

  classe: "Relaxante muscular de ação periférica",

  subclasse: "Antídoto/agente de resgate",

  mecanismo:
    "Inibe a liberação de cálcio do retículo sarcoplasmático ao bloquear os receptores de rianodina (RyR1) no músculo esquelético, reduzindo a contração muscular sustentada e o hipermetabolismo associado — ação puramente periférica, sem efeito depressor central direto relevante.",

  posologias: [
    {
      indicacao: "Síndrome Neuroléptica Maligna (moderada a grave)",
      doseInicial: "1–2,5 mg/kg IV",
      doseUsual: "1–2,5 mg/kg IV a cada 6 horas (ou infusão contínua), conforme resposta clínica",
      doseMaxima: "10 mg/kg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Hipertermia Maligna Anestésica (indicação original)",
      doseInicial: "2,5 mg/kg IV em bolus",
      doseUsual: "1–2,5 mg/kg IV, repetido a cada 5–10 minutos conforme necessário até controle dos sintomas",
      doseMaxima: "10 mg/kg (dose cumulativa)",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "~9 horas (formulação IV)",

  metabolizacao:
    "Metabolização hepática extensa (hidroxilação seguida de acetilação), com excreção predominantemente urinária dos metabólitos.",

  indicacoes: [
    "Síndrome Neuroléptica Maligna moderada a grave (tratamento farmacológico de escolha, junto com suporte clínico)",
    "Hipertermia maligna anestésica (indicação original, aprovação regulatória)",
    "Espasticidade crônica de origem central (uso neurológico, fora do contexto de emergência)",
  ],

  contraIndicacoes: [
    "Hepatopatia ativa grave (a própria droga tem potencial hepatotóxico)",
    "Hipersensibilidade ao dantroleno",
  ],

  vantagens: [
    "Age diretamente no mecanismo periférico da rigidez muscular e do hipermetabolismo da NMS e da hipertermia maligna, reduzindo a produção de calor e o consumo de oxigênio muscular",
    "Reduz mortalidade quando iniciado precocemente em quadros graves",
    "Uso bem estabelecido e primeira linha formal na hipertermia maligna anestésica",
  ],

  desvantagens: [
    "Não trata a disautonomia nem a agitação por si só — precisa de suporte clínico associado (hidratação, resfriamento, benzodiazepínico)",
    "Risco de hepatotoxicidade, exigindo monitorização de transaminases durante o uso",
    "Disponibilidade limitada em muitos serviços fora de UTI/centro cirúrgico",
    "Evidência para uso em NMS é baseada em séries de casos e opinião de especialista, não em ensaios clínicos randomizados (quadro raro e agudo, difícil de estudar dessa forma)",
  ],

  efeitosAdversos: [
    "Fraqueza muscular",
    "Sonolência/sedação leve",
    "Hepatotoxicidade (elevação de transaminases)",
    "Flebite no local de infusão",
    "Náusea",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Bloqueadores de canal de cálcio, especialmente verapamil (risco de hipercalemia e depressão cardiovascular quando associados)",
    "Outros fármacos hepatotóxicos (risco aditivo)",
  ],

  ganhoPeso: "Não aplicável — uso agudo/pontual em emergência, não indicado para uso crônico.",

  sedacao: "Baixa a moderada (fraqueza muscular e sonolência leve, mais por efeito periférico que por sedação central).",

  sexual: "Não aplicável — sem dados relevantes para uso agudo.",

  qt: "Muito baixo — sem efeito relevante conhecido sobre o intervalo QT.",

  gravidez:
    "Dados limitados em humanos; atravessa a placenta. Usado quando o risco de vida da NMS ou da hipertermia maligna justifica claramente o risco — ambas são emergências.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; dados insuficientes para uso rotineiro, mas a indicação é sempre emergencial e pontual.",

  lactacaoCategoria: "cautela",

  renal:
    "Sem necessidade de ajuste específico bem estabelecida; monitorar função renal no contexto da rabdomiólise que acompanha a própria NMS.",

  hepatica:
    "Contraindicado em hepatopatia ativa grave — a própria droga tem potencial hepatotóxico. Monitorar transaminases durante o uso mesmo em pacientes sem hepatopatia prévia.",

  observacoes:
    "O dantroleno é considerado o tratamento farmacológico de escolha na Síndrome Neuroléptica Maligna moderada a grave, junto com a bromocriptina (mecanismo complementar) e o suporte clínico intensivo (hidratação, resfriamento ativo, benzodiazepínico). Não está modelado no restante do fluxo farmacológico do aplicativo por ser um agente de uso quase exclusivamente hospitalar/emergencial, mas sua disponibilidade rápida em situações de suspeita de NMS é um determinante direto de desfecho. Diferente da bromocriptina, seu mecanismo é puramente periférico (músculo esquelético), não havendo risco de exacerbar sintomas psicóticos de base.",

  perolasClinicas: [
    "Quanto mais precoce a administração diante de NMS moderada a grave, melhor o desfecho — não aguardar confirmação laboratorial completa (CK, função renal) se a suspeita clínica já é forte e o quadro é grave.",
    "Formulações mais recentes (ex. Revonto) são mais fáceis de reconstituir do que a formulação original, que historicamente exigia diluição em grande volume de água estéril — verificar a apresentação disponível no serviço.",
    "Monitorar transaminases antes e durante o uso, especialmente em cursos prolongados — a hepatotoxicidade costuma ser dose e tempo-dependente.",
    "Não substitui a suspensão do antipsicótico causador nem o suporte clínico — é um adjuvante farmacológico direcionado, não a conduta isolada.",
  ],

  referencias: [
    "Strawn JR, Keck PE, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};

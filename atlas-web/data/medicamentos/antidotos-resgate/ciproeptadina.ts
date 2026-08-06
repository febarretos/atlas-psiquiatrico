import { Medicamento } from "../../types";

export const ciproeptadina: Medicamento = {
  id: "ciproeptadina",

  nome: "Ciproeptadina",

  nomeComercial: [
    "Periatin",
    "Cobactin (associações)",
  ],

  classe: "Anti-histamínico",

  subclasse: "Antagonista serotoninérgico / agente de resgate",

  mecanismo:
    "Antagonista dos receptores H1 (anti-histamínico de 1ª geração) e antagonista não seletivo dos receptores 5-HT2A/5-HT2C. Na síndrome serotoninérgica, o antagonismo 5-HT2A é o mecanismo terapêutico relevante — contrapõe farmacologicamente o excesso de atividade serotoninérgica central que caracteriza a síndrome, ao contrário dos antidepressivos serotoninérgicos, que aumentam essa atividade.",

  posologias: [
    {
      indicacao: "Síndrome Serotoninérgica (moderada a grave)",
      doseInicial: "12 mg VO/SNG (dose inicial)",
      doseUsual: "2 mg a cada 2 horas até resposta clínica, seguido de 8 mg a cada 6 horas de manutenção",
      doseMaxima: "32 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Alergia/urticária (indicação original)",
      doseInicial: "4 mg 3x/dia",
      doseUsual: "4–20 mg/dia, divididos",
      doseMaxima: "0,5 mg/kg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "~1–4 horas (efeito clínico pode ser mais prolongado que a meia-vida plasmática)",

  metabolizacao:
    "Metabolização hepática, com excreção predominantemente urinária dos metabólitos.",

  indicacoes: [
    "Síndrome serotoninérgica moderada a grave (antagonista serotoninérgico de escolha, adjuvante à suspensão dos agentes causadores e ao suporte clínico)",
    "Alergias e urticária (indicação original)",
    "Estimulante de apetite (uso off-label, crônico — não relacionado ao contexto de emergência)",
  ],

  contraIndicacoes: [
    "Glaucoma de ângulo fechado",
    "Retenção urinária ou hipertrofia prostática significativa",
    "Crise asmática aguda",
    "Uso concomitante de inibidor da monoaminoxidase (IMAO)",
  ],

  vantagens: [
    "Único antagonista serotoninérgico disponível para reverter diretamente o mecanismo farmacológico da síndrome serotoninérgica",
    "Via oral/sonda nasogástrica, com início de ação relativamente rápido para essa via",
    "Perfil de segurança bem conhecido, por ser um anti-histamínico de uso antigo e amplo",
  ],

  desvantagens: [
    "Disponível apenas em formulação oral — sem apresentação parenteral, o que limita seu uso se o paciente não tem via oral/enteral segura",
    "Sedação significativa, por efeito anti-histamínico central",
    "Efeitos anticolinérgicos associados (boca seca, retenção urinária, constipação)",
    "Evidência baseada em séries de casos e relatos, não em ensaios clínicos randomizados — mas com recomendação consolidada em diretrizes toxicológicas",
  ],

  efeitosAdversos: [
    "Sedação",
    "Boca seca",
    "Tontura",
    "Retenção urinária",
    "Constipação",
    "Aumento de apetite (relevante principalmente no uso crônico off-label, não no uso agudo em emergência)",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Moderada",

  interacoes: [
    "Inibidores da monoaminoxidase (IMAO) — contraindicado, risco de toxicidade e de crise hipertensiva",
    "Outros sedativos e anticolinérgicos (efeito aditivo)",
    "Álcool (potencialização do efeito sedativo)",
  ],

  ganhoPeso: "Alto no uso crônico off-label como estimulante de apetite — não aplicável ao uso agudo/pontual na síndrome serotoninérgica.",

  sedacao: "Alta",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Dados limitados em humanos; geralmente evitada exceto quando o benefício justifica claramente o risco — o tratamento da síndrome serotoninérgica em gestante é uma dessas situações.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados insuficientes sobre passagem para o leite materno; anti-histamínicos de 1ª geração geralmente não são a primeira escolha fora do contexto de emergência.",

  lactacaoCategoria: "cautela",

  renal:
    "Dados limitados sobre necessidade de ajuste específico; usar com cautela na insuficiência renal.",

  hepatica:
    "Metabolização hepática — usar com cautela e considerar redução de dose em insuficiência hepática significativa.",

  observacoes:
    "Importante não confundir o campo 'serotoninérgico' deste medicamento: a ciproeptadina é ANTAGONISTA serotoninérgico (reduz a atividade serotoninérgica via bloqueio 5-HT2A), o oposto mecanístico dos antidepressivos serotoninérgicos que costumam causar a síndrome — por isso não é marcada como 'serotoninérgico' no sentido de risco de precipitar a síndrome. Seu uso nunca substitui a suspensão imediata de todos os agentes serotoninérgicos envolvidos, que continua sendo a conduta mais importante e deve ocorrer independentemente da disponibilidade de ciproeptadina.",

  perolasClinicas: [
    "Exige via oral ou sonda nasogástrica — não existe apresentação IV; se o paciente não tem via enteral segura, essa opção fica indisponível e o suporte clínico (benzodiazepínico, resfriamento, hidratação) assume o papel central.",
    "A suspensão dos agentes serotoninérgicos causadores continua sendo a conduta mais importante — a ciproeptadina é adjuvante, não substituto.",
    "Comprimidos podem ser triturados e administrados via sonda nasogástrica quando necessário.",
    "Sedação significativa é esperada e pode inclusive ajudar no controle da agitação associada ao quadro, mas não deve ser confundida com melhora do quadro serotoninérgico em si.",
  ],

  referencias: [
    "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};

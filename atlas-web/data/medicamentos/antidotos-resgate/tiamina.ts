import { Medicamento } from "../../types";

export const tiamina: Medicamento = {
  id: "tiamina",

  nome: "Tiamina",

  nomeComercial: [
    "Benerva",
    "Vitamina B1 (genérico)",
  ],

  classe: "Vitamina",

  subclasse: "Vitamina B1 / cofator enzimático",

  mecanismo:
    "Cofator essencial de enzimas centrais do metabolismo energético (piruvato desidrogenase, alfa-cetoglutarato desidrogenase, transcetolase). Sua depleção — comum no etilismo crônico, por desnutrição e má absorção intestinal — compromete o metabolismo cerebral de glicose. A reposição previne e trata a encefalopatia de Wernicke, especialmente quando administrada ANTES ou junto da glicose: ofertar glicose isoladamente a um paciente já depletado pode consumir a pouca tiamina residual no metabolismo agudo dessa glicose, precipitando ou agravando a encefalopatia.",

  posologias: [
    {
      indicacao: "Profilaxia em Abstinência Alcoólica / Delirium Tremens (sem sinais de Wernicke)",
      doseInicial: "100 mg IM ou IV",
      doseUsual: "100 mg/dia por 3–5 dias",
      doseMaxima: "100–300 mg/dia, conforme protocolo institucional",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Encefalopatia de Wernicke estabelecida ou fortemente suspeita",
      doseInicial: "500 mg IV, 3x/dia, por 2–3 dias",
      doseUsual: "250 mg IV ou IM, 1x/dia, por mais 3–5 dias após a dose de ataque",
      doseMaxima: "500 mg por dose (infusão lenta e diluída)",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "~96 minutos na forma livre circulante; os depósitos corporais totais são pequenos e se esgotam em poucas semanas de ingesta inadequada",

  metabolizacao:
    "Fosforilação hepática à forma ativa (tiamina pirofosfato); excreção renal do excesso não utilizado.",

  indicacoes: [
    "Prevenção e tratamento da encefalopatia de Wernicke, sobretudo no contexto de abstinência alcoólica/delirium tremens",
    "Deficiência nutricional de tiamina em geral (desnutrição grave, hiperêmese gravídica, cirurgia bariátrica, síndromes disabsortivas)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade conhecida à tiamina (reações anafilactoides são raras, descritas principalmente com infusão IV rápida e não diluída)",
  ],

  vantagens: [
    "Previne uma complicação neurológica grave e evitável — a encefalopatia de Wernicke, que pode evoluir para síndrome de Korsakoff irreversível se não tratada a tempo",
    "Baixo custo, baixo risco e ampla margem de segurança",
    "Justifica um limiar baixo para tratamento empírico diante de qualquer suspeita clínica, mesmo sem confirmação laboratorial",
  ],

  desvantagens: [
    "Risco raro de reação anafilactoide com infusão IV rápida — recomenda-se sempre infusão lenta e diluída",
    "Frequentemente subdosada ou negligenciada na prática clínica — erro comum e evitável é administrar glicose antes da tiamina",
  ],

  efeitosAdversos: [
    "Reação no local da injeção",
    "Raramente, reação anafilactoide com infusão IV rápida",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Sem interações farmacocinéticas clinicamente relevantes conhecidas. A interação clinicamente crítica é de sequência, não farmacocinética: administrar sempre antes ou junto da glicose IV, nunca depois, em qualquer paciente com risco de depleção de tiamina.",
  ],

  ganhoPeso: "Nenhum",

  sedacao: "Nenhuma",

  sexual: "Nenhuma",

  qt: "Nenhum",

  gravidez:
    "Segura e necessária durante a gestação. A hiperêmese gravídica é outro contexto relevante de risco de depleção de tiamina e encefalopatia de Wernicke, independente de etilismo.",

  gravidezCategoria: "preferencial",

  lactacao:
    "Compatível com a amamentação — a tiamina é um nutriente essencial normalmente presente no leite materno.",

  lactacaoCategoria: "compativel",

  renal:
    "Sem necessidade de ajuste específico na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Sem necessidade de ajuste de dose na insuficiência hepática. A fosforilação hepática à forma ativa pode estar reduzida em hepatopatia grave, mas isso não muda a recomendação de dose de reposição.",

  observacoes:
    "A regra prática mais importante no manejo da abstinência alcoólica e do delirium tremens é 'tiamina antes da glicose' — administrar glicose isoladamente num paciente etilista desnutrido pode precipitar ou agravar a encefalopatia de Wernicke ao consumir a pouca tiamina residual. A tríade clássica de Wernicke (confusão, ataxia, oftalmoplegia) está presente de forma completa em apenas uma minoria dos casos — não se deve esperar os três sinais simultaneamente para iniciar o tratamento empírico, dado o baixo risco e o alto benefício potencial da reposição.",

  perolasClinicas: [
    "Sempre administrar tiamina antes ou junto da glicose IV, nunca depois, em qualquer paciente com risco de depleção (etilismo, desnutrição, hiperêmese gravídica).",
    "Ter um limiar baixo para tratamento empírico — a tríade clássica de Wernicke raramente está completa, e o custo/risco de tratar é muito menor que o custo de uma encefalopatia não tratada.",
    "A reação anafilactoide é rara, mas motiva infusão lenta e diluída em vez de bolus rápido, especialmente em doses altas (encefalopatia estabelecida).",
    "Em delirium tremens, a reposição de tiamina é feita em paralelo ao benzodiazepínico — uma não substitui a outra.",
  ],

  referencias: [
    "Sechi G, Serra A. Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol. 2007.",
    "Maudsley Prescribing Guidelines",
    "Royal College of Physicians — Guidelines for the management of Wernicke's encephalopathy",
  ],
};

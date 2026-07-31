import { Diagnostico } from "./types";

export const transtornoDepressivoInduzidoSubstancia: Diagnostico = {
  id: "transtorno-depressivo-induzido-substancia",

  nome: "Transtorno Depressivo Induzido por Substância/Medicamento",

  categoria: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",

  cid11: "6C4Y",

  cid10: "F1x.54",

  descricao:
    "Perturbação persistente e proeminente do humor, predominantemente depressivo, que se desenvolve durante ou logo após intoxicação/abstinência de substância ou após exposição a medicamento capaz de produzir tal quadro, e que não é mais bem explicada por um transtorno depressivo primário independente. O mesmo raciocínio diagnóstico — de estabelecer relação temporal e causal com uma substância ou medicamento antes de firmar um transtorno mental primário — aplica-se de forma equivalente a quadros de ansiedade, psicose e mania induzidos por substância/medicamento, sendo um dos diagnósticos diferenciais mais frequentes e mais frequentemente negligenciados na prática psiquiátrica ambulatorial.",

  criteriosDiagnosticos: [
    "A. Perturbação persistente e proeminente do humor, caracterizada por humor deprimido ou por interesse ou prazer acentuadamente diminuídos em todas ou quase todas as atividades, predominando no quadro clínico.",
    "B. Há evidências, a partir da história, do exame físico ou de achados laboratoriais, de que: (1) os sintomas do Critério A se desenvolveram durante ou logo após a intoxicação ou abstinência de uma substância, ou após a exposição a um medicamento; E (2) a substância/medicamento envolvido é capaz de produzir os sintomas do Critério A.",
    "C. A perturbação não é mais bem explicada por um transtorno depressivo independente (não induzido por substância/medicamento). Essa distinção é sustentada por evidências como: os sintomas precederam o início do uso da substância/medicamento; os sintomas persistem por um período substancial de tempo (geralmente sugerido cerca de 1 mês) após a cessação da abstinência aguda ou da intoxicação grave; ou há história de episódios depressivos prévios recorrentes não relacionados a substâncias, sugerindo transtorno independente subjacente.",
    "D. A perturbação não ocorre exclusivamente durante o curso de um delirium.",
    "E. A perturbação causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
  ],

  especificadores: [
    "Com início durante a intoxicação: os critérios são satisfeitos durante intoxicação pela substância",
    "Com início durante a abstinência: os critérios são satisfeitos durante ou logo após síndrome de abstinência",
    "Com início após o uso de medicamento: os sintomas surgem na vigência do uso do medicamento prescrito",
  ],

  prevalencia:
    "Diagnóstico relativamente comum em contexto psiquiátrico geral, especialmente entre pacientes em uso de múltiplos medicamentos (idosos polimedicados), pacientes em tratamento oncológico ou de doenças autoimunes com corticosteroides/interferon, e pacientes com transtornos por uso de substâncias — frequentemente subdiagnosticado por não ser ativamente investigado na anamnese farmacológica.",

  cursoEPrognostico:
    "Curso geralmente autolimitado após a suspensão do agente causador ou resolução da intoxicação/abstinência aguda, com melhora esperada dentro de dias a poucas semanas na maioria dos casos, embora a recuperação completa possa levar até cerca de 1 mês. Persistência dos sintomas além desse período sugere fortemente transtorno depressivo independente subjacente, que deve ser reavaliado e tratado como tal. Risco de comportamento suicida deve ser sistematicamente avaliado independentemente da etiologia presumida do quadro depressivo.",

  diagnosticoDiferencial: [
    "Transtorno Depressivo Maior primário (sintomas precedem o uso da substância/medicamento, persistem além do período esperado de intoxicação/abstinência aguda — geralmente além de cerca de 1 mês — ou há história de episódios prévios independentes)",
    "Transtorno de Adaptação com humor deprimido (estressor psicossocial identificável, sem a relação causal farmacológica/toxicológica característica)",
    "Delirium com humor deprimido predominante (comprometimento proeminente de atenção e consciência com curso flutuante, que exclui este diagnóstico por definição)",
    "Sintomas depressivos esperados e transitórios de abstinência aguda que não atingem o limiar de significância clínica exigido (por exemplo, disforia leve e autolimitada nas primeiras 24-48h de abstinência de estimulantes)",
    "Transtorno Depressivo devido a outra condição médica (quando a etiologia é a condição médica em si, e não a substância/medicamento usado para tratá-la ou uma substância de abuso)",
  ],

  comorbidadesComuns: [
    "Transtorno por Uso de Substâncias relacionado ao agente causador (quando se trata de substância de abuso, como álcool ou estimulantes)",
    "Transtornos de ansiedade concomitantes",
    "Condições médicas subjacentes que motivaram o uso do medicamento implicado (doenças autoimunes em uso de corticosteroide/interferon, hipertensão em uso de betabloqueador/metildopa)",
    "Transtorno Depressivo Maior primário coexistente ou latente, desmascarado pela exposição à substância/medicamento",
  ],

  tratamentoPrimeiraLinha: [
    "Suspensão, redução de dose ou troca do agente causador, quando clinicamente possível e seguro, é a intervenção central e frequentemente suficiente para resolução do quadro",
    "Substâncias e medicamentos mais comumente implicados na prática psiquiátrica: álcool (intoxicação e, principalmente, abstinência), corticosteroides sistêmicos, interferon, alguns anti-hipertensivos (betabloqueadores, metildopa, reserpina), isotretinoína, alguns anticonvulsivantes, e abstinência/retirada de estimulantes (cocaína, anfetaminas) — a revisão minuciosa da lista de medicamentos em uso deve ser rotina antes de firmar um diagnóstico de transtorno depressivo primário, especialmente em idosos polimedicados",
    "Tratamento sintomático de suporte durante o período de transição (psicoeducação, medidas de higiene do sono, suporte psicossocial)",
    "Reavaliação diagnóstica após um período de abstinência/suspensão do agente (geralmente sugerido em torno de 2-4 semanas) para diferenciar de transtorno depressivo independente antes de iniciar farmacoterapia antidepressiva específica de longo prazo",
    "Intervenção imediata e não postergada (incluindo, se necessário, antidepressivo, encaminhamento a serviço de emergência ou internação) quando os sintomas forem graves, houver risco de suicídio ou prejuízo funcional acentuado, independentemente da reavaliação diagnóstica programada",
    "Quando o agente causador é essencial ao tratamento de uma condição médica de base e não pode ser suspenso (por exemplo, corticoterapia em doença autoimune ativa), considerar tratamento antidepressivo concomitante e monitoramento psiquiátrico próximo em vez de suspensão",
  ],

  sintomasChave: [
    { id: "relacao-temporal-substancia", peso: 3 },
    { id: "humor-deprimido", peso: 2 },
    { id: "anedonia", peso: 2 },
    { id: "inicio-agudo-dias", peso: 1 },
    { id: "fadiga", peso: 1 },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "Sadock's Comprehensive Textbook of Psychiatry - capítulo sobre transtornos induzidos por substância/medicamento",
    "APA Practice Guideline for the Treatment of Patients with Substance Use Disorders",
  ],
};

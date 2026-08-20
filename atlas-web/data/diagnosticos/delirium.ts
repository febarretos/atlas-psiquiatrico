import { Diagnostico } from "./types";

export const delirium: Diagnostico = {
  id: "delirium",

  nome: "Delirium",

  categoria: "Transtornos Neurocognitivos",

  cid11: "6D70",

  cid10: "F05",

  descricao:
    "Síndrome neuropsiquiátrica aguda caracterizada por perturbação da atenção e da consciência com curso flutuante, associada a alteração cognitiva adicional, que se desenvolve em curto período de tempo e representa mudança em relação ao estado basal do indivíduo. É sempre secundário a uma causa médica, tóxica ou de abstinência subjacente e constitui uma EMERGÊNCIA MÉDICA — o diagnóstico de maior urgência clínica entre os transtornos neurocognitivos, exigindo investigação imediata da etiologia de base, e não apenas manejo sintomático, dado o risco de morbimortalidade se a causa não for identificada e tratada a tempo.",

  criteriosDiagnosticos: [
    "A. Perturbação da atenção (capacidade reduzida de direcionar, focalizar, manter e mudar a atenção) e da consciência (redução da orientação em relação ao ambiente).",
    "B. A perturbação se desenvolve em curto período de tempo (geralmente horas a poucos dias), representa uma mudança aguda em relação à atenção e à consciência basais, e tende a flutuar em gravidade ao longo do dia — frequentemente com piora vespertina/noturna.",
    "C. Perturbação cognitiva adicional (por exemplo, déficit de memória, desorientação, alteração de linguagem, capacidade visuoespacial ou percepção).",
    "D. As perturbações dos critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em evolução, e não ocorrem no contexto de um nível gravemente reduzido de estimulação/consciência, como no coma.",
    "E. Há evidências, a partir da história, do exame físico ou de achados laboratoriais, de que a perturbação é consequência fisiológica direta de outra condição médica, de intoxicação ou abstinência de substância, de exposição a uma toxina, ou é devida a múltiplas etiologias.",
  ],

  especificadores: [
    "Hipoativo: nível de atividade psicomotora reduzido, letargia, lentificação, podendo ser confundido com depressão ou fadiga — frequentemente subdiagnosticado",
    "Hiperativo: nível de atividade psicomotora aumentado, agitação, labilidade afetiva, recusa de cooperação com cuidados",
    "Misto: nível de atividade psicomotora normal ou flutuante entre hipoatividade e hiperatividade",
    "Agudo: duração de poucas horas a dias",
    "Persistente: duração de semanas a meses",
  ],

  duracaoMinima: "Instalação aguda, tipicamente em horas a poucos dias, com curso flutuante ao longo do dia",

  prevalencia:
    "Altamente prevalente em contextos hospitalares, especialmente em idosos: presente em até 10-30% dos pacientes internados em enfermarias clínicas/cirúrgicas gerais e em 60-80% dos pacientes em unidades de terapia intensiva sob ventilação mecânica. Fatores de risco incluem idade avançada, demência preexistente, gravidade da doença médica, polifarmácia, uso de sonda vesical/contenção física e privação sensorial (déficit visual/auditivo não corrigido).",

  cursoEPrognostico:
    "Curso tipicamente agudo e flutuante, potencialmente reversível quando a causa subjacente é identificada e tratada prontamente, mas associado a aumento significativo de morbimortalidade, tempo de internação prolongado, maior taxa de institucionalização e risco aumentado de declínio cognitivo persistente — inclusive podendo precipitar ou acelerar quadro demencial subjacente. Idosos com demência preexistente têm risco muito aumentado de desenvolver delirium diante de qualquer estressor médico agudo, e a recuperação cognitiva completa nem sempre ocorre, especialmente nessa população.",

  diagnosticoDiferencial: [
    "Transtorno Neurocognitivo Maior (demência): instalação insidiosa e progressão gradual (ao contrário do início agudo do delirium), atenção relativamente preservada nas fases iniciais, ausência de flutuação marcada ao longo do dia — importante lembrar que delirium pode se sobrepor a uma demência preexistente, exigindo atenção redobrada para identificar a mudança aguda em relação ao basal",
    "Transtornos psicóticos primários (esquizofrenia, transtorno psicótico breve): alucinações e delírios geralmente mais sistematizados, sem a flutuação do nível de consciência e sem o comprometimento global da atenção característicos do delirium",
    "Episódio depressivo (especialmente na apresentação hipoativa): ausência de flutuação do nível de consciência e de desorientação global; delirium hipoativo é frequentemente confundido com depressão ou apatia e subdiagnosticado por essa razão",
    "Episódio maníaco (especialmente na apresentação hiperativa): humor eufórico/irritável predominante, sem o comprometimento característico da atenção/consciência e sem flutuação ligada a causa médica identificável",
    "Transtornos dissociativos: ausência de causa médica/tóxica identificável e de flutuação típica ligada ao ciclo circadiano",
  ],

  comorbidadesComuns: [
    "Transtorno Neurocognitivo Maior (demência) preexistente — principal fator de risco e frequente comorbidade",
    "Condições médicas agudas precipitantes: infecções (especialmente infecção urinária e respiratória em idosos), distúrbios metabólicos e hidroeletrolíticos, insuficiência de órgãos, dor não controlada, retenção urinária/fecal",
    "Abstinência ou intoxicação por álcool, benzodiazepínicos ou outras substâncias",
    "Polifarmácia, especialmente uso de fármacos com carga anticolinérgica, opioides, benzodiazepínicos e corticosteroides",
    "Privação sensorial (déficit visual ou auditivo não corrigido) e privação de sono, particularmente em ambiente de terapia intensiva",
  ],

  tratamentoPrimeiraLinha: [
    "Identificação e tratamento da causa subjacente é a prioridade absoluta e o único tratamento definitivo do delirium — investigação sistemática de infecção, distúrbio metabólico/hidroeletrolítico, hipóxia, medicamentos recentemente introduzidos ou retirados, retenção urinária/fecal, dor não controlada e abstinência de substâncias",
    "Uso do CAM (Confusion Assessment Method) como instrumento de rastreio padrão à beira-leito para identificação e monitoramento do delirium",
    "Medidas não farmacológicas de suporte como primeira abordagem: reorientação frequente, iluminação adequada e manutenção do ciclo claro-escuro, correção de déficits sensoriais (óculos, aparelho auditivo), mobilização precoce, promoção de higiene do sono, envolvimento e presença de familiares, e evitar contenção física e cateteres/sondas desnecessários sempre que possível",
    "Antipsicóticos em dose baixa (haloperidol, risperidona, quetiapina) reservados para agitação grave que ameace a segurança do próprio paciente ou da equipe assistencial, ou sofrimento intenso associado a sintomas psicóticos — não constituem tratamento do delirium em si, apenas manejo sintomático transitório, e devem ser usados pelo menor tempo possível com reavaliação frequente",
    "Evitar benzodiazepínicos como tratamento de rotina do delirium, pois podem piorar a confusão e sedação, EXCETO quando o delirium é causado por abstinência alcoólica ou de benzodiazepínicos, situação em que constituem a base do tratamento",
    "Revisão e suspensão criteriosa de medicamentos com potencial deliriogênico (anticolinérgicos, benzodiazepínicos, opioides em excesso) sempre que possível",
  ],

  sintomasChave: [
    { id: "confusao-aguda-flutuante", peso: 3 },
    { id: "inicio-agudo-dias", peso: 3 },
    { id: "alucinacoes", peso: 1 },
    { id: "agitacao-psicomotora", peso: 1 },
  ],

  // Não são tratamento do delirium em si — apenas manejo sintomático de
  // agitação grave/sofrimento psicótico associado (ver texto acima).
  medicamentosPrimeiraLinha: ["haloperidol", "risperidona", "quetiapina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "NICE Guideline CG103 - Delirium: prevention, diagnosis and management",
    "American Geriatrics Society - Clinical Practice Guideline for Postoperative Delirium in Older Adults",
    "Inouye SK et al. - Confusion Assessment Method (CAM)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "O paciente está com a atenção prejudicada — dificuldade para focar, manter ou mudar o foco — e com a consciência do ambiente reduzida (menos desperto, orientado ou responsivo do que o habitual)?" },
      { id: "b", pergunta: "Essa alteração começou de forma aguda (horas a poucos dias), representa uma mudança clara em relação ao estado basal do paciente, e varia de intensidade ao longo do dia (geralmente pior à noite)?" },
      { id: "c", pergunta: "Há alguma alteração cognitiva adicional — problema de memória, desorientação, alteração de linguagem, ou dificuldade visuoespacial/perceptiva?" },
    ],
    algoritmo: {
      contagemMinima: 3,
      itensContaveis: ["a", "b", "c"],
      // Sem duracaoMinima: instalação aguda e curso flutuante já são
      // perguntados diretamente no item "b" (critério B) — repetir como
      // texto livre seria redundante com um item que já é checkbox.
      observacaoExclusao:
        "ATENÇÃO — risco de segurança: delirium é uma EMERGÊNCIA MÉDICA com risco de morbimortalidade se a causa não for identificada e tratada a tempo — investigação etiológica sistemática é a prioridade imediata, não um item a mais no diferencial. D: as perturbações não são mais bem explicadas por outro transtorno neurocognitivo preexistente/em evolução (ver módulo Transtorno Neurocognitivo Maior — lembrando que delirium pode se sobrepor a uma demência de base, exigindo atenção à mudança aguda em relação ao basal), e não ocorrem em contexto de nível gravemente reduzido de consciência (coma). E (etiologia — SEMPRE investigar): evidência de que a perturbação é consequência fisiológica direta de condição médica, intoxicação/abstinência de substância, exposição a toxina, ou múltiplas etiologias. Investigação sistemática obrigatória: infecção, distúrbio metabólico/hidroeletrolítico, hipóxia, medicamentos recentes, retenção urinária/fecal, dor não controlada, abstinência de substâncias. Usar CAM (Confusion Assessment Method) como rastreio à beira-leito. Avaliar especificador hipoativo/hiperativo/misto e agudo/persistente.",
    },
  },
};

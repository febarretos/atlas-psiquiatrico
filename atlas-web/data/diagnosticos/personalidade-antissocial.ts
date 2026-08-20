import { Diagnostico } from "./types";

export const personalidadeAntissocial: Diagnostico = {
  id: "personalidade-antissocial",

  nome: "Transtorno de Personalidade Antissocial",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.2",

  descricao:
    "Padrão persistente de desconsideração e violação dos direitos alheios, com início antes dos 15 anos (evidenciado por Transtorno de Conduta) e continuidade após os 18 anos. Diagnóstico exige idade mínima de 18 anos.",

  criteriosDiagnosticos: [
    "A. Padrão persistente de desconsideração e violação dos direitos alheios, ocorrendo desde os 15 anos, indicado por 3 (ou mais) dos seguintes critérios:",
    "1. Fracasso em ajustar-se às normas sociais relativas a comportamentos legais, indicado pela execução repetida de atos que constituem motivo de detenção.",
    "2. Tendência a enganar, indicada por mentiras repetidas, uso de nomes falsos ou de trapaça para benefício ou prazer pessoal.",
    "3. Impulsividade ou fracasso em fazer planos para o futuro.",
    "4. Irritabilidade e agressividade, indicadas por repetidas lutas corporais ou agressões físicas.",
    "5. Desrespeito pela segurança própria ou alheia.",
    "6. Irresponsabilidade persistente, indicada por fracasso repetido em manter comportamento laboral consistente ou honrar obrigações financeiras.",
    "7. Ausência de remorso, indicada por indiferença ou racionalização por ter ferido, maltratado ou roubado outra pessoa.",
    "B. O indivíduo tem, no mínimo, 18 anos.",
    "C. Evidência de Transtorno de Conduta com início anterior aos 15 anos.",
    "D. A ocorrência de comportamento antissocial não se dá exclusivamente durante o curso de esquizofrenia ou transtorno bipolar.",
  ],

  especificadores: [
    "Presença de traços psicopáticos (frieza afetiva, superficialidade emocional, manipulação instrumental) associa-se a maior gravidade e pior resposta ao tratamento, embora não constitua um especificador formal do DSM-5-TR.",
  ],

  duracaoMinima: "Padrão presente desde os 15 anos (como Transtorno de Conduta), com diagnóstico formal de Transtorno de Personalidade Antissocial só a partir dos 18 anos",

  prevalencia:
    "Prevalência estimada entre 0,2% e 3,3% na população geral, significativamente mais comum em homens (proporção aproximada de 3:1 a 5:1). Prevalência muito mais elevada em populações forenses e penitenciárias.",

  cursoEPrognostico:
    "Curso crônico, com tendência a atenuação de comportamentos antissociais francos (especialmente criminalidade) a partir da quarta década de vida, embora déficits interpessoais e de empatia costumem persistir. Risco aumentado de morte prematura por causas violentas.",

  diagnosticoDiferencial: [
    "Transtorno por Uso de Substâncias — comportamento antissocial pode ocorrer exclusivamente no contexto de uso ativo de substâncias, sem padrão presente desde a adolescência",
    "Esquizofrenia e Transtorno Bipolar — comportamento antissocial não deve ocorrer exclusivamente durante episódios desses transtornos (critério D)",
    "Transtorno de Personalidade Narcisista — grandiosidade e busca de admiração predominam sobre agressividade e violação franca de normas/leis",
    "Transtorno de Personalidade Borderline — impulsividade e instabilidade presentes, mas centradas em relacionamentos e autoimagem, não em desconsideração instrumental pelos direitos alheios",
    "Comportamento antissocial próprio de determinados contextos socioeconômicos ou de grupo (deve haver disfunção que extrapole o esperado para o contexto)",
  ],

  comorbidadesComuns: [
    "Transtorno por Uso de Substâncias (muito frequente)",
    "Transtorno de Déficit de Atenção/Hiperatividade (histórico na infância)",
    "Transtornos de Ansiedade e Transtorno Depressivo Maior",
    "Transtorno do Jogo",
    "Outros Transtornos de Personalidade (borderline, narcisista, histriônica)",
  ],

  tratamentoPrimeiraLinha: [
    "Intervenções psicossociais estruturadas com foco cognitivo-comportamental voltadas a comportamento de risco e resolução de problemas — evidência de eficácia limitada e prognóstico reservado",
    "Tratamento de comorbidades associadas (transtorno por uso de substâncias, TDAH residual) frequentemente traz o maior benefício funcional mensurável",
    "Farmacoterapia não possui indicação como tratamento central do transtorno em si; pode ser considerada para agressividade impulsiva refratária ou sintomas-alvo específicos",
    "Intervenção precoce em Transtorno de Conduta na infância/adolescência é a estratégia com maior potencial preventivo",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a1", "a2", "a3", "a4", "a5", "a6", "a7"],
    criterios: [
      { id: "a1", pergunta: "Você já teve dificuldade repetida em seguir as leis, a ponto de ser detido(a) ou preso(a) várias vezes?" },
      { id: "a2", pergunta: "Você mente com frequência, usa nomes falsos, ou engana outras pessoas para ganhar vantagem ou por prazer?" },
      { id: "a3", pergunta: "Você age por impulso ou tem dificuldade para planejar o futuro?" },
      { id: "a4", pergunta: "Você se envolve em brigas físicas ou agressões com frequência, ou é uma pessoa irritável e agressiva?" },
      { id: "a5", pergunta: "Você desrespeita a própria segurança ou a segurança de outras pessoas?" },
      { id: "a6", pergunta: "Você tem dificuldade persistente para manter um emprego ou honrar compromissos financeiros?" },
      { id: "a7", pergunta: "Você sente pouco ou nenhum remorso depois de machucar, maltratar ou roubar alguém?" },
      { id: "b", pergunta: "Você tem 18 anos ou mais?" },
      { id: "c", pergunta: "Antes dos 15 anos, você já teve um padrão de comportamento como violar regras, agredir pessoas ou animais, destruir propriedade, mentir ou roubar de forma repetida (transtorno de conduta)?" },
    ],
    algoritmo: {
      contagemMinima: 3,
      itensContaveis: ["a1", "a2", "a3", "a4", "a5", "a6", "a7"],
      gruposObrigatorios: [["b"], ["c"]],
      duracaoMinima: "Padrão presente desde os 15 anos (como Transtorno de Conduta); diagnóstico formal de Transtorno de Personalidade Antissocial só é feito a partir dos 18 anos",
      observacaoExclusao:
        "ATENÇÃO — risco de segurança: risco aumentado de morte prematura por causas violentas — avaliar exposição a violência, comportamento de risco e segurança do paciente e de terceiros, não só os critérios diagnósticos. D: o comportamento antissocial não deve ocorrer exclusivamente durante o curso de Esquizofrenia ou Transtorno Bipolar. Diferenciar de Transtorno por Uso de Substâncias (comportamento antissocial exclusivo do contexto de uso ativo, sem padrão desde a adolescência), de Personalidade Narcisista (grandiosidade e busca de admiração predominam sobre agressividade/violação de normas), de Personalidade Borderline (impulsividade centrada em relacionamentos/autoimagem, não em desconsideração instrumental pelos direitos alheios), e de comportamento antissocial esperado em determinado contexto socioeconômico/de grupo (deve haver disfunção que extrapole o esperado para o contexto). Traços psicopáticos (frieza afetiva, manipulação instrumental) associam-se a maior gravidade, embora não sejam especificador formal do DSM-5-TR.",
    },
  },
};

import type { EstadoSintoma } from "./assistenteScoring";

export interface AlertaSeguranca {
  id: string;
  titulo: string;
  descricao: string;
  href: string;
  linkLabel: string;
  gatilho: (marcados: Map<string, EstadoSintoma>) => boolean;
}

function presente(marcados: Map<string, EstadoSintoma>, id: string): boolean {
  return marcados.get(id) === "presente";
}

// Lista curta e curada, não uma cobertura exaustiva de "tudo que pode dar
// errado": o módulo de Emergências deste app é especificamente sobre
// complicações induzidas por medicamento/substância (síndrome
// neuroléptica maligna, síndrome serotoninérgica, intoxicação por lítio,
// delirium tremens, catatonia maligna, torsades de pointes), que em geral
// são desencadeadas por exposição a fármaco, não por um sintoma relatado
// pelo paciente — por isso a maioria não tem um gatilho sintomático
// coerente a partir de data/sintomas. Estes 3 alertas cobrem os gatilhos
// que genuinamente fazem sentido a partir de sintomas marcados, e
// aparecem independentemente da posição de qualquer diagnóstico no
// ranking por score — nunca devem ficar "invisíveis" só por baixa
// sobreposição de sintomas com um diagnóstico raro-mas-perigoso.
export const alertasSeguranca: AlertaSeguranca[] = [
  {
    id: "risco-suicidio",
    titulo: "Avaliação de risco de suicídio",
    descricao:
      "Ideação suicida e/ou autolesão foram marcadas como presentes — sempre avaliar risco de forma estruturada, independentemente de qual hipótese diagnóstica estiver liderando o ranking.",
    href: "/escalas/cssrs",
    linkLabel: "Aplicar C-SSRS",
    gatilho: (m) => presente(m, "ideacao-suicida") || presente(m, "autolesao"),
  },
  {
    id: "confusao-aguda",
    titulo: "Investigar causas orgânicas de confusão aguda",
    descricao:
      "Confusão mental aguda e flutuante foi marcada — investigar ativamente causas orgânicas (infecção, distúrbio metabólico, medicamentoso, trauma) antes de atribuir o quadro a um transtorno psiquiátrico primário.",
    href: "/diagnosticos/delirium",
    linkLabel: "Ver Delirium",
    gatilho: (m) => presente(m, "confusao-aguda-flutuante"),
  },
  {
    id: "delirium-tremens",
    titulo: "Considerar abstinência alcoólica / delirium tremens",
    descricao:
      "Confusão aguda associada a sinais de uso pesado ou abstinência de substância — considerar ativamente delirium tremens e usar o CIWA-Ar para guiar a gravidade e a dose de benzodiazepínico.",
    href: "/emergencias/delirium-tremens",
    linkLabel: "Ver Delirium Tremens",
    gatilho: (m) =>
      presente(m, "confusao-aguda-flutuante") &&
      (presente(m, "perda-controle-uso") || presente(m, "tolerancia-abstinencia")),
  },
];

// Termo padrão em inglês (nomenclatura DSM-5 comum na literatura médica)
// por diagnosticoId, usado para buscar relatos de caso reais na Europe PMC
// — a base é majoritariamente em inglês, então buscar pelo nome em
// português (data/diagnosticos) praticamente não retornaria resultado
// nenhum. Tradução direta de nomenclatura diagnóstica padronizada, não
// requer julgamento clínico (diferente de, por exemplo, decidir uma
// equivalência de dose).
export const diagnosticoTermoIngles: Record<string, string> = {
  "depressao-maior": "major depressive disorder",
  tag: "generalized anxiety disorder",
  panico: "panic disorder",
  "bipolar-tipo-1": "bipolar I disorder",
  "bipolar-tipo-2": "bipolar II disorder",
  toc: "obsessive-compulsive disorder",
  tept: "post-traumatic stress disorder",
  esquizofrenia: "schizophrenia",
  "personalidade-borderline": "borderline personality disorder",
  "fobia-social": "social anxiety disorder",
  distimia: "persistent depressive disorder",
  ciclotimia: "cyclothymic disorder",
  "anorexia-nervosa": "anorexia nervosa",
  "bulimia-nervosa": "bulimia nervosa",
  "transtorno-uso-alcool": "alcohol use disorder",
  insonia: "insomnia disorder",
  tdah: "attention deficit hyperactivity disorder",
  tea: "autism spectrum disorder",
  "transtorno-ajustamento": "adjustment disorder",
  "transtorno-neurocognitivo-maior": "major neurocognitive disorder dementia",
  delirium: "delirium",
  "transtorno-disforico-pre-menstrual": "premenstrual dysphoric disorder",
  "transtorno-depressivo-induzido-substancia": "substance-induced depressive disorder",
};

export function termoInglesDoDiagnostico(diagnosticoId: string): string | undefined {
  return diagnosticoTermoIngles[diagnosticoId];
}

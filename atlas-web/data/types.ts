export interface Posologia {
  indicacao: string;
  doseInicial: string;
  doseUsual: string;
  doseMaxima: string;
}

export interface Medicamento {
  id: string;

  nome: string;

  nomeComercial?: string[];

  classe: string;

  subclasse?: string;

  mecanismo: string;

  posologias: Posologia[];

  meiaVida?: string;

  metabolizacao?: string;

  indicacoes: string[];

  contraIndicacoes?: string[];

  vantagens: string[];

  desvantagens: string[];

  efeitosAdversos?: string[];

  interacoes?: string[];

  ganhoPeso: string;

  sedacao: string;

  sexual: string;

  qt: string;

  gravidez: string;

  lactacao: string;

  renal: string;

  hepatica: string;

  observacoes: string;

  referencias?: string[];
}
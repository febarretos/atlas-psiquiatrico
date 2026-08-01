export interface OpcaoCaso {
  texto: string;

  correta: boolean;

  // Mostrada após a escolha, seja ela certa ou errada — o valor didático
  // está em explicar por que cada alternativa (inclusive as erradas) é ou
  // não compatível com o quadro apresentado.
  explicacao: string;
}

export interface EtapaCaso {
  id: string;

  // Informação adicional do caso revelada nesta etapa (exame do estado
  // mental, evolução, exames complementares). Omitir quando a etapa for
  // apenas uma pergunta sobre a informação já apresentada.
  narrativaAdicional?: string;

  pergunta: string;

  opcoes: OpcaoCaso[];
}

export interface AchadoReferenciado {
  dominioId: string;
  achadoId: string;
}

export interface CasoClinico {
  id: string;

  titulo: string;

  categoria: string;

  apresentacaoInicial: string;

  etapas: EtapaCaso[];

  diagnosticoFinal: string;

  // Vínculo com data/diagnosticos (Diagnostico.id) para link direto —
  // omitir se o diagnóstico do caso não tiver entrada própria no módulo.
  diagnosticoId?: string;

  // Ids de data/medicamentos (Medicamento.id) discutidos na conduta.
  medicamentosRelacionados?: string[];

  // Achados do módulo Psicopatologia ilustrados pelo caso, para link direto.
  achadosPsicopatologicos?: AchadoReferenciado[];

  // Principais lições didáticas do caso, alem do diagnostico em si.
  pontosDeEnsino: string[];

  referencias?: string[];
}

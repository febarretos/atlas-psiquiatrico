export interface DiferencialFino {
  // Termo/achado com o qual este é frequentemente confundido.
  comparadoCom: string;

  // A distinção prática entre os dois — o que de fato diferencia um do
  // outro na entrevista clínica, não apenas a definição de cada um isolada.
  distincao: string;
}

export interface AchadoPsicopatologico {
  id: string;

  nome: string;

  sinonimos?: string[];

  definicao: string;

  caracteristicas: string[];

  // Vinheta clínica curta ilustrando o achado em contexto (fala do
  // paciente, comportamento observado), não apenas reafirmar a definição.
  exemploClinico: string;

  // Diferenciação fina com achados semelhantes/frequentemente confundidos —
  // o principal valor pedagógico do módulo para público avançado.
  diferencialFino?: DiferencialFino[];

  transtornosAssociados: string[];
}

export interface DominioPsicopatologico {
  id: string;

  nome: string;

  // Rótulo curto, sem travessão/parênteses explicativos, pra uso em
  // texto de nota clínica (Exame do Estado Mental gerado em
  // lib/gerarTextoProntuario.ts) — `nome` é o título da seção de
  // referência/estudo, feito pra ser didático, não pra ser colado num
  // prontuário.
  rotuloClinico: string;

  descricao: string;

  // Descrição educativa da função psíquica dentro da normalidade — o que
  // caracteriza o funcionamento saudável dessa função, sua variação
  // fisiológica esperada (fadiga, contexto, diferenças individuais) e onde
  // termina o normal e começa o patológico. Segue a estrutura clássica dos
  // manuais de psicopatologia brasileiros (Dalgalarrondo, Cheniaux), que
  // sempre descrevem a função normal antes de suas alterações.
  normalidade: string;

  // Frase curta, estilo nota clínica (não o parágrafo educativo de
  // `normalidade`), usada como baseline no Exame do Estado Mental gerado
  // pra qualquer domínio sem achado marcado como observado.
  notaNormal: string;

  achados: AchadoPsicopatologico[];

  referencias?: string[];
}

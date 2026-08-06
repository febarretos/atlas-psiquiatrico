import { Diagnostico } from "./types";

export const personalidadeObsessivoCompulsiva: Diagnostico = {
  id: "personalidade-obsessivo-compulsiva",

  nome: "Transtorno de Personalidade Obsessivo-Compulsiva",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.5",

  descricao:
    "Padrão persistente de preocupação com ordem, perfeccionismo e controle mental e interpessoal, à custa de flexibilidade, abertura e eficiência, com início no início da vida adulta e presente em diversos contextos. Distinto do Transtorno Obsessivo-Compulsivo (TOC): aqui não há obsessões/compulsões egodistônicas verdadeiras, e sim um padrão de personalidade estável, geralmente egossintônico.",

  criteriosDiagnosticos: [
    "Padrão persistente de preocupação com ordem, perfeccionismo e controle mental e interpessoal, à custa de flexibilidade, abertura e eficiência, começando no início da idade adulta e presente em vários contextos, indicado por 4 (ou mais) dos seguintes critérios:",
    "1. Preocupação com detalhes, regras, listas, ordem, organização ou horários a ponto de o objetivo principal da atividade se perder.",
    "2. Perfeccionismo que interfere na conclusão de tarefas (ex.: incapacidade de terminar um projeto por não atender aos seus padrões rígidos).",
    "3. Devoção excessiva ao trabalho e à produtividade, excluindo atividades de lazer e amizades (não explicada por necessidade econômica evidente).",
    "4. Consciência excessiva, escrupulosidade e inflexibilidade quanto a questões de moralidade, ética ou valores (não explicada por identificação religiosa ou cultural).",
    "5. Incapacidade de descartar objetos usados ou sem valor, mesmo sem significado sentimental.",
    "6. Relutância em delegar tarefas ou trabalhar com outros, a menos que se submetam exatamente ao seu modo de fazer as coisas.",
    "7. Adoção de um estilo miserável de gastar consigo e com os outros; o dinheiro é visto como algo a ser acumulado para catástrofes futuras.",
    "8. Rigidez e teimosia.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; diferenciar de traços obsessivo-compulsivos adaptativos e valorizados socialmente/profissionalmente (perfeccionismo funcional sem sofrimento ou prejuízo).",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Um dos transtornos de personalidade mais prevalentes, com estimativas entre 2,1% e 7,9% na população geral; aproximadamente 2 vezes mais comum em homens.",

  cursoEPrognostico:
    "Curso geralmente crônico e estável, frequentemente egossintônico (o indivíduo tende a valorizar seus próprios padrões de rigor e organização), o que pode dificultar a busca espontânea por tratamento. Bom funcionamento ocupacional é comum, às custas de relacionamentos interpessoais e qualidade de vida.",

  diagnosticoDiferencial: [
    "Transtorno Obsessivo-Compulsivo (TOC) — presença de obsessões e/ou compulsões verdadeiras, tipicamente egodistônicas e associadas a sofrimento significativo; podem coexistir (comorbidade documentada em até 20-30% dos casos de TOC)",
    "Transtorno de Acumulação — quando o acúmulo de objetos é o quadro predominante e clinicamente significativo por si só, considerar diagnóstico independente",
    "Transtorno do Espectro Autista — rigidez e apego a rotinas associados a déficits na comunicação social e comportamentos repetitivos desde a infância",
    "Traços de personalidade obsessivo-compulsiva adaptativos, sem sofrimento ou prejuízo funcional associado (não preenche critério de transtorno)",
  ],

  comorbidadesComuns: [
    "Transtornos de Ansiedade (TAG especialmente)",
    "Transtorno Depressivo Maior",
    "Transtorno Obsessivo-Compulsivo",
    "Transtornos Alimentares (especialmente anorexia nervosa)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual (cognitivo-comportamental ou psicodinâmica), com foco em flexibilização cognitiva, tolerância à imperfeição e ampliação de repertório emocional/interpessoal",
    "Farmacoterapia não possui indicação como tratamento central; reservada ao manejo de comorbidades associadas (ansiedade, depressão)",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],
};

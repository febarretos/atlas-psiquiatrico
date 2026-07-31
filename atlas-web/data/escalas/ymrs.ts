import { Escala } from "./types";

export const ymrs: Escala = {
  id: "ymrs",

  nome: "Young Mania Rating Scale",

  sigla: "YMRS",

  categoria: "Mania",

  descricao:
    "Escala heteroaplicada (preenchida pelo avaliador com base na entrevista clínica e observação do comportamento nas últimas 48 horas) para quantificar a gravidade de sintomas maníacos/hipomaníacos.",

  instrucoes:
    "Avalie cada item com base no estado do paciente nas últimas 48 horas, considerando entrevista clínica e observação direta. Quatro itens (irritabilidade, discurso, conteúdo do pensamento e comportamento agressivo/disruptivo) têm peso dobrado por serem considerados indicadores centrais de mania.",

  itens: [
    {
      id: "ymrs-1",
      texto: "Humor elevado / eufórico",
      opcoes: [
        { label: "Ausente", valor: 0 },
        {
          label: "Levemente ou possivelmente elevado, quando questionado",
          valor: 1,
        },
        {
          label: "Elevação subjetiva definida; otimista, autoconfiante, alegre; conteúdo apropriado ao contexto",
          valor: 2,
        },
        {
          label: "Elevado, inapropriado ao contexto; humorado",
          valor: 3,
        },
        {
          label: "Eufórico; risos inadequados; cantando",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-2",
      texto: "Aumento da atividade motora / energia",
      opcoes: [
        { label: "Ausente", valor: 0 },
        { label: "Subjetivamente aumentada", valor: 1 },
        { label: "Animado, gesticulação aumentada", valor: 2 },
        {
          label: "Energia excessiva; hiperativo em alguns momentos; inquieto (pode ser controlado)",
          valor: 3,
        },
        {
          label: "Excitação motora; hiperatividade contínua (não pode ser controlado)",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-3",
      texto: "Interesse sexual",
      opcoes: [
        { label: "Normal, não aumentado", valor: 0 },
        {
          label: "Levemente ou possivelmente aumentado",
          valor: 1,
        },
        {
          label: "Aumento definido quando questionado; relatado espontaneamente",
          valor: 2,
        },
        {
          label: "Conteúdo sexual espontâneo; discurso sobre sexo aumentado; hipersexual segundo relato de terceiros",
          valor: 3,
        },
        {
          label: "Comentários ou avanços sexuais explícitos em relação ao entrevistador ou entrevista",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-4",
      texto: "Sono",
      opcoes: [
        { label: "Não relata redução do sono", valor: 0 },
        {
          label: "Dorme até 1 hora a menos que o habitual",
          valor: 1,
        },
        {
          label: "Dorme mais de 1 hora a menos que o habitual",
          valor: 2,
        },
        {
          label: "Relata reduzida necessidade de sono",
          valor: 3,
        },
        {
          label: "Nega necessidade de sono",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-5",
      texto: "Irritabilidade (item de peso dobrado)",
      opcoes: [
        { label: "Ausente", valor: 0 },
        {
          label: "Subjetivamente aumentada",
          valor: 2,
        },
        {
          label: "Irritável em determinados momentos durante a entrevista; episódios recentes de agressividade ou raiva no serviço",
          valor: 4,
        },
        {
          label: "Frequentemente irritável durante a entrevista; abrupto, ríspido",
          valor: 6,
        },
        {
          label: "Hostil, não cooperativo; entrevista impossível",
          valor: 8,
        },
      ],
    },
    {
      id: "ymrs-6",
      texto: "Discurso (velocidade e quantidade) (item de peso dobrado)",
      opcoes: [
        { label: "Sem aumento", valor: 0 },
        {
          label: "Sente-se loquaz",
          valor: 2,
        },
        {
          label: "Aumento da velocidade ou quantidade em alguns momentos; prolixo em alguns momentos",
          valor: 4,
        },
        {
          label: "Acelerado e prolixo na maior parte do tempo; difícil de interromper",
          valor: 6,
        },
        {
          label: "Discurso pressionado, ininterruptível, contínuo",
          valor: 8,
        },
      ],
    },
    {
      id: "ymrs-7",
      texto: "Alterações da linguagem / pensamento",
      opcoes: [
        { label: "Ausente", valor: 0 },
        { label: "Circunstancialidade leve; distraibilidade", valor: 1 },
        {
          label: "Distraibilidade; perde o objetivo do pensamento; muda de assunto frequentemente; pensamento acelerado",
          valor: 2,
        },
        {
          label: "Fuga de ideias; tangencialidade; dificuldade em acompanhar; ecolalia",
          valor: 3,
        },
        {
          label: "Incoerência; comunicação impossível",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-8",
      texto: "Conteúdo do pensamento (item de peso dobrado)",
      opcoes: [
        { label: "Normal", valor: 0 },
        {
          label: "Planos questionáveis; interesses novos",
          valor: 2,
        },
        {
          label: "Projetos especiais; hiper-religiosidade ocasional",
          valor: 4,
        },
        {
          label: "Ideias grandiosas ou de conteúdo persecutório desproporcionais à situação",
          valor: 6,
        },
        {
          label: "Delírios; alucinações",
          valor: 8,
        },
      ],
    },
    {
      id: "ymrs-9",
      texto: "Comportamento agressivo / disruptivo (item de peso dobrado)",
      opcoes: [
        { label: "Ausente, cooperativo", valor: 0 },
        {
          label: "Sarcástico; falante em alguns momentos, cauteloso",
          valor: 2,
        },
        {
          label: "Exigente; faz ameaças no serviço",
          valor: 4,
        },
        {
          label: "Ameaça o entrevistador; grita; entrevista difícil",
          valor: 6,
        },
        {
          label: "Agressivo; destrutivo; entrevista impossível",
          valor: 8,
        },
      ],
    },
    {
      id: "ymrs-10",
      texto: "Aparência",
      opcoes: [
        { label: "Vestimenta e higiene adequadas", valor: 0 },
        {
          label: "Minimamente descuidado",
          valor: 1,
        },
        {
          label: "Higiene precária; moderadamente desarrumado; excessivamente arrumado",
          valor: 2,
        },
        {
          label: "Desarrumado; roupas e maquiagem em excesso ou bizarras",
          valor: 3,
        },
        {
          label: "Completamente descuidado; ornamentado, bizarro",
          valor: 4,
        },
      ],
    },
    {
      id: "ymrs-11",
      texto: "Insight (crítica sobre o próprio estado)",
      opcoes: [
        {
          label: "Presente; reconhece estar doente e concorda com a necessidade de tratamento",
          valor: 0,
        },
        {
          label: "Possivelmente doente",
          valor: 1,
        },
        {
          label: "Reconhece mudança de comportamento, mas nega a doença",
          valor: 2,
        },
        {
          label: "Reconhece possível mudança de comportamento, mas nega a doença",
          valor: 3,
        },
        {
          label: "Nega qualquer mudança de comportamento",
          valor: 4,
        },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 12,
      label: "Remissão / eutimia",
      cor: "green",
      descricao: "Ausência de sintomas maníacos significativos.",
    },
    {
      min: 13,
      max: 19,
      label: "Hipomania provável",
      cor: "blue",
      descricao: "Sintomas sugestivos de hipomania; avaliação clínica indicada.",
    },
    {
      min: 20,
      max: 25,
      label: "Mania leve",
      cor: "yellow",
      descricao: "Episódio maníaco de intensidade leve.",
    },
    {
      min: 26,
      max: 37,
      label: "Mania moderada",
      cor: "red",
      descricao: "Episódio maníaco de intensidade moderada.",
    },
    {
      min: 38,
      max: 60,
      label: "Mania grave",
      cor: "red",
      descricao:
        "Episódio maníaco grave; considerar necessidade de internação e tratamento intensivo.",
    },
  ],

  notaInterpretacao:
    "Pontuação máxima possível: 60 (4 itens de peso simples de 0-4 = 28, somados a 4 itens de peso dobrado de 0-8 = 32). Os pontos de corte são aproximados e devem ser interpretados em conjunto com o quadro clínico.",

  referencias: [
    "Young RC, Biggs JT, Ziegler VE, Meyer DA. A rating scale for mania: reliability, validity and sensitivity. Br J Psychiatry. 1978.",
  ],
};

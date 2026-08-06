import { Escala, EscalaOpcao } from "./types";

function opcoesAcertos(max: number): EscalaOpcao[] {
  const opcoes: EscalaOpcao[] = [];
  for (let i = 0; i <= max; i++) {
    opcoes.push({ label: `${i} de ${max} corretos`, valor: i });
  }
  return opcoes;
}

export const meem: Escala = {
  id: "meem",

  nome: "Mini-Exame do Estado Mental",

  sigla: "MEEM (MMSE)",

  categoria: "Rastreio Cognitivo",

  descricao:
    "Instrumento de rastreio cognitivo breve, heteroaplicado, o mais usado mundialmente para triagem de comprometimento cognitivo e demência. Avalia 6 domínios (orientação temporal, orientação espacial, registro, atenção/cálculo, evocação e linguagem/práxis construtiva) em uma pontuação total de 0 a 30. Fortemente influenciado pela escolaridade — a interpretação correta exige ponto de corte ajustado por anos de escolaridade, não um único valor fixo.",

  instrucoes:
    "Aplicado pelo examinador em ambiente calmo, sem pistas ou correções durante a aplicação. Pontue cada domínio conforme o número de itens corretos observados na entrevista.",

  itens: [
    {
      id: "meem-orientacao-temporal",
      texto:
        "Orientação temporal — dia da semana, dia do mês, mês, ano e hora aproximada/estação do ano (1 ponto por acerto)",
      opcoes: opcoesAcertos(5),
    },
    {
      id: "meem-orientacao-espacial",
      texto:
        "Orientação espacial — local específico, local geral (andar/setor), bairro/rua, cidade e estado (1 ponto por acerto)",
      opcoes: opcoesAcertos(5),
    },
    {
      id: "meem-registro",
      texto:
        "Registro — repetir imediatamente 3 palavras não relacionadas ditas pelo examinador (1 ponto por palavra)",
      opcoes: opcoesAcertos(3),
    },
    {
      id: "meem-atencao-calculo",
      texto:
        "Atenção e cálculo — subtrações seriadas de 7 a partir de 100 (ou soletrar \"MUNDO\" de trás para frente), até 5 respostas (1 ponto cada)",
      opcoes: opcoesAcertos(5),
    },
    {
      id: "meem-evocacao",
      texto: "Evocação — recordar as 3 palavras registradas anteriormente, sem pistas (1 ponto por palavra)",
      opcoes: opcoesAcertos(3),
    },
    {
      id: "meem-linguagem-praxia",
      texto:
        "Linguagem e práxis construtiva — nomear 2 objetos (2), repetir uma frase (1), executar comando verbal de 3 estágios (3), ler e executar um comando escrito (1), escrever uma frase espontânea (1), copiar o desenho de dois pentágonos interceptados (1)",
      opcoes: opcoesAcertos(9),
    },
  ],

  faixas: [
    {
      min: 24,
      max: 30,
      label: "Sem indicativo de comprometimento (referência geral)",
      cor: "green",
      descricao:
        "Faixa de referência internacional geral. Para interpretação correta em português/Brasil, usar o ponto de corte ajustado por escolaridade (ver notaInterpretacao) — não este intervalo isoladamente.",
    },
    {
      min: 18,
      max: 23,
      label: "Sugestivo de comprometimento cognitivo leve a moderado",
      cor: "yellow",
      descricao: "Investigar mais detalhadamente; considerar avaliação neuropsicológica complementar.",
    },
    {
      min: 0,
      max: 17,
      label: "Sugestivo de comprometimento cognitivo importante",
      cor: "red",
      descricao: "Achado compatível com quadro demencial estabelecido, a confirmar com investigação completa.",
    },
  ],

  notaInterpretacao:
    "O MEEM é fortemente influenciado pela escolaridade — os pontos de corte validados para a população brasileira (Bertolucci et al., 1994; Brucki et al., 2003, ambos em Arquivos de Neuro-Psiquiatria) são, por faixa de escolaridade: analfabetos ≈ 20; 1 a 4 anos ≈ 25; 5 a 8 anos ≈ 26,5; 9 a 11 anos ≈ 28; mais de 11 anos ≈ 29. Pontuações abaixo do valor de referência da faixa de escolaridade correspondente sugerem comprometimento cognitivo e indicam investigação adicional, não um diagnóstico por si só. O MEEM tem baixa sensibilidade para comprometimento cognitivo leve e para disfunção executiva predominante (ex.: fases iniciais de demência frontotemporal) — nesses cenários, o MoCA tende a ter melhor sensibilidade.",

  referencias: [
    "Folstein MF, Folstein SE, McHugh PR. \"Mini-mental state\": a practical method for grading the cognitive state of patients for the clinician. J Psychiatr Res. 1975.",
    "Bertolucci PHF, Brucki SMD, Campacci S, Julião Y. O Mini-Exame do Estado Mental em uma população geral: impacto da escolaridade. Arq Neuropsiquiatr. 1994;52:1-7.",
    "Brucki SMD, Nitrini R, Caramelli P, Bertolucci PHF, Okamoto IH. Sugestões para o uso do Mini-Exame do Estado Mental no Brasil. Arq Neuropsiquiatr. 2003;61(3-B):777-781.",
  ],
};

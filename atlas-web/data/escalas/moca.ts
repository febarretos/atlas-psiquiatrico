import { Escala, EscalaOpcao } from "./types";

function opcoesAcertos(max: number): EscalaOpcao[] {
  const opcoes: EscalaOpcao[] = [];
  for (let i = 0; i <= max; i++) {
    opcoes.push({ label: `${i} de ${max} pontos`, valor: i });
  }
  return opcoes;
}

export const moca: Escala = {
  id: "moca",

  nome: "Montreal Cognitive Assessment",

  sigla: "MoCA",

  categoria: "Rastreio Cognitivo",

  descricao:
    "Instrumento de rastreio cognitivo breve, heteroaplicado, com maior sensibilidade que o MEEM para comprometimento cognitivo leve (CCL) e para disfunção executiva/visuoespacial predominante. Avalia 7 domínios (visuoespacial/executivo, nomeação, atenção, linguagem, abstração, evocação tardia e orientação) em uma pontuação total de 0 a 30.",

  instrucoes:
    "Aplicado pelo examinador em ambiente calmo. Some 1 ponto extra ao escore total para indivíduos com 12 anos ou menos de escolaridade formal (correção padrão do instrumento, já incorporada na versão brasileira validada).",

  itens: [
    {
      id: "moca-visuoespacial-executivo",
      texto:
        "Visuoespacial/Executivo — trilha alternante (números e letras, 1), cópia do cubo (1), desenho do relógio com hora determinada (3)",
      opcoes: opcoesAcertos(5),
    },
    {
      id: "moca-nomeacao",
      texto: "Nomeação — identificar 3 animais representados em figuras (leão, rinoceronte, camelo)",
      opcoes: opcoesAcertos(3),
    },
    {
      id: "moca-atencao",
      texto:
        "Atenção — sequência de dígitos direta e inversa (2), teste de vigilância (bater na mesa a cada letra \"A\" numa sequência lida, 1), subtração seriada de 7 a partir de 100 (3)",
      opcoes: opcoesAcertos(6),
    },
    {
      id: "moca-linguagem",
      texto: "Linguagem — repetição de 2 frases complexas (2), fluência verbal fonêmica (palavras com a letra \"F\" em 1 minuto, 1)",
      opcoes: opcoesAcertos(3),
    },
    {
      id: "moca-abstracao",
      texto: "Abstração — identificar a semelhança entre 2 pares de palavras (ex.: trem-bicicleta, régua-relógio)",
      opcoes: opcoesAcertos(2),
    },
    {
      id: "moca-evocacao-tardia",
      texto: "Evocação tardia — recordar, sem pistas, as 5 palavras apresentadas no início do teste",
      opcoes: opcoesAcertos(5),
    },
    {
      id: "moca-orientacao",
      texto: "Orientação — data, mês, ano, dia da semana, local e cidade",
      opcoes: opcoesAcertos(6),
    },
  ],

  faixas: [
    {
      min: 25,
      max: 30,
      label: "Sem indicativo de comprometimento cognitivo",
      cor: "green",
      descricao: "Ponto de corte validado para a população brasileira (Memória et al., 2013).",
    },
    {
      min: 18,
      max: 24,
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
    "A validação brasileira (Memória et al., 2013, International Journal of Geriatric Psychiatry) identificou ponto de corte ótimo de 25 pontos para rastreio de comprometimento cognitivo leve (sensibilidade 81%, especificidade 77%), discretamente diferente do ponto de corte <26 sugerido na versão original em inglês (Nasreddine et al., 2005) — usar o valor de 25 como referência para a população brasileira. Não esquecer de somar 1 ponto ao escore bruto para indivíduos com ≤12 anos de escolaridade antes de aplicar o ponto de corte. O MoCA tem maior sensibilidade que o MEEM para comprometimento cognitivo leve e para disfunção executiva predominante, mas também maior taxa de falso-positivos em pessoas com baixa escolaridade — interpretar sempre em conjunto com o quadro clínico.",

  referencias: [
    "Nasreddine ZS, Phillips NA, Bédirian V, et al. The Montreal Cognitive Assessment, MoCA: a brief screening tool for mild cognitive impairment. J Am Geriatr Soc. 2005.",
    "Memória CM, Yassuda MS, Nakano EY, Forlenza OV. Brief screening for mild cognitive impairment: validation of the Brazilian version of the Montreal cognitive assessment. Int J Geriatr Psychiatry. 2013.",
  ],
};

import { CasoSimulador } from "./types";

// Caso escrito à mão (NÃO gerado pelo Gemini/script) só pra validar o
// schema, a UI e a exportação pro prontuário antes da primeira geração
// real — ver conversa de implementação do módulo Simulador. Doses e
// critérios usados aqui (sertralina, escitalopram) conferem com
// data/medicamentos; substituir/remover quando o primeiro caso real for
// gerado com `npm run gerar-caso-simulador`.
export const voJardim: CasoSimulador = {
  id: "vo-jardim",

  tituloAnedotico: "O Vô Que Só Queria Cuidar do Jardim",

  diagnosticoRealId: "depressao-maior",

  noInicialId: "entrevista-jardim",

  nos: [
    {
      id: "entrevista-jardim",
      turno: "entrevista",
      narrativa:
        "Seu Joaquim, 74 anos, é trazido pela filha à consulta. Ele insiste, cruzando os braços: 'Doutor, eu só tô cansado. Não durmo direito porque fico pensando nas roseiras que não peguei ainda esse ano.' A filha, atrás dele, revira os olhos: 'Pai, você não planta uma roseira há três meses.' Joaquim ignora o comentário e olha pela janela do consultório como se avaliasse a luz solar para replantio.",
      opcoes: [
        {
          texto:
            "Perguntar diretamente: 'Seu Joaquim, o senhor ainda sente vontade de fazer as coisas que gostava, como cuidar do jardim?'",
          consequencia:
            "Joaquim hesita, depois baixa a voz: 'Sinceramente? Nem sei se ainda gosto. Só fico lá parado.' A filha se surpreende — ele nunca tinha admitido isso em casa.",
          qualidadeDecisao: "ideal",
          proximoNoId: "exames-completo",
        },
        {
          texto:
            "Perguntar só sobre o sono: 'O senhor está dormindo mal por causa de alguma dor ou desconforto físico?'",
          consequencia:
            "Joaquim aproveita a deixa e desconversa: 'É, deve ser a coluna mesmo.' A entrevista fica restrita à queixa somática, sem explorar o resto.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "exames-parcial",
        },
        {
          texto: "Tranquilizar a família: 'Isso é normal na idade dele, todo idoso fica mais quietinho.'",
          consequencia:
            "A filha parece aliviada, mas volta a insistir: 'Mas doutor, ele nem quer mais ver os netos...' — um sinal que passou batido.",
          qualidadeDecisao: "problematica",
          proximoNoId: "exames-parcial",
        },
        {
          texto:
            "Pedir pra filha esperar lá fora e conversar a sós com Joaquim sobre como ele realmente está se sentindo.",
          consequencia:
            "Sozinho, Joaquim relaxa um pouco: 'Não quero preocupar ela, mas... eu não sinto mais graça em nada, doutor. Nem no jardim.'",
          qualidadeDecisao: "ideal",
          proximoNoId: "exames-completo",
        },
      ],
    },
    {
      id: "exames-completo",
      turno: "exames",
      narrativa:
        "Com a queixa afetiva no radar, você segue a investigação. Joaquim confirma: humor baixo quase todos os dias há uns 2 meses, perdeu 4kg 'sem nem perceber', acorda às 4h da manhã e não consegue voltar a dormir. Nega ideação suicida ativa, mas diz, olhando pro chão: 'Às vezes penso que seria mais fácil se eu simplesmente não acordasse.'",
      opcoes: [
        {
          texto: "Aprofundar a avaliação de risco de suicídio diretamente, com calma e sem julgamento.",
          consequencia:
            "Joaquim se abre mais: nega plano ou intenção, mas confirma que o pensamento aparece 'de vez em quando'. Você registra isso como fator de acompanhamento próximo.",
          qualidadeDecisao: "ideal",
          proximoNoId: "conduta-boa",
        },
        {
          texto: "Solicitar TSH, hemograma e B12 para excluir causa orgânica antes de qualquer conclusão.",
          consequencia:
            "Os exames vêm normais alguns dias depois — reforça o diagnóstico psiquiátrico, mas atrasa o início do tratamento em uma semana.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "conduta-boa",
        },
        {
          texto:
            "Assumir que é só luto — a esposa de Joaquim faleceu há 8 meses — e dispensar sem mais investigação.",
          consequencia:
            "Joaquim concorda educadamente, mas o comentário sobre 'não acordar' fica sem qualquer registro ou plano de acompanhamento.",
          qualidadeDecisao: "problematica",
          proximoNoId: "conduta-ruim",
        },
        {
          texto: "Perguntar sobre uso de álcool ou outras substâncias que possam explicar o quadro.",
          consequencia:
            "Joaquim ri pela primeira vez na consulta: 'Doutor, eu nem bebo uma cervejinha no Natal.' Descarta essa hipótese rapidamente.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "conduta-boa",
        },
      ],
    },
    {
      id: "exames-parcial",
      turno: "exames",
      narrativa:
        "Sem a queixa afetiva claramente registrada, a consulta segue focada na 'dor nas costas' e no sono. Joaquim menciona de passagem que 'perdeu um pouco de peso, mas isso é bom, né?' — um comentário que soa mais preocupante do que ele imagina.",
      opcoes: [
        {
          texto:
            "Notar a fala sobre o peso e voltar atrás: perguntar diretamente sobre humor, prazer e pensamentos de morte.",
          consequencia:
            "Joaquim, surpreso por ser questionado de novo, acaba admitindo o desânimo generalizado. A entrevista se recupera, ainda que tardiamente.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "conduta-boa",
        },
        {
          texto: "Prescrever um analgésico para a coluna e agendar retorno em 3 meses.",
          consequencia:
            "Joaquim vai embora satisfeito com a receita, mas o quadro afetivo — inclusive o comentário sobre 'não acordar' — segue completamente sem investigação.",
          qualidadeDecisao: "problematica",
          proximoNoId: "conduta-ruim",
        },
        {
          texto: "Pedir exames de rotina (hemograma, TSH) sem aprofundar a entrevista psíquica.",
          consequencia:
            "Os exames voltam normais, mas ninguém voltou a perguntar como Joaquim realmente está se sentindo por dentro.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "conduta-ruim",
        },
      ],
    },
    {
      id: "conduta-boa",
      turno: "conduta",
      narrativa:
        "Com o quadro de episódio depressivo maior bem caracterizado — humor deprimido, anedonia, perda de peso, insônia terminal e ideação passiva — chega a hora de decidir a conduta.",
      opcoes: [
        {
          texto:
            "Iniciar sertralina 25-50mg/dia, com plano de titulação e retorno em 2 semanas, orientando a filha sobre sinais de alerta.",
          consequencia: "Joaquim aceita, meio desconfiado: 'Remédio pra cabeça, né...' A filha promete acompanhar de perto.",
          qualidadeDecisao: "ideal",
          medicamentoId: "sertralina",
          proximoNoId: "evolucao-boa",
        },
        {
          texto: "Iniciar escitalopram 5-10mg/dia, começando com a menor dose possível dado a idade de Joaquim.",
          consequencia: "Boa escolha para reduzir ativação inicial em paciente idoso — Joaquim tolera bem os primeiros dias.",
          qualidadeDecisao: "ideal",
          medicamentoId: "escitalopram",
          proximoNoId: "evolucao-boa",
        },
        {
          texto: "Prescrever apenas um indutor de sono, sem tratar o quadro depressivo de base.",
          consequencia:
            "Joaquim dorme um pouco melhor por alguns dias, mas o desânimo e a ideação passiva continuam intocados.",
          qualidadeDecisao: "problematica",
          proximoNoId: "evolucao-ruim",
        },
        {
          texto: "Encaminhar para acompanhamento psicoterápico isolado, sem farmacoterapia, dado o quadro moderado.",
          consequencia:
            "Uma opção defensável para quadros leves — mas a perda de peso e a ideação passiva sugerem gravidade moderada, onde a combinação costuma ser mais indicada.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "evolucao-boa",
        },
      ],
    },
    {
      id: "conduta-ruim",
      turno: "conduta",
      narrativa:
        "Sem uma caracterização clara do quadro afetivo, a consulta chega ao fim sem um plano estruturado para o que realmente está acontecendo com Joaquim.",
      opcoes: [
        {
          texto:
            "Perceber que algo ficou incompleto e ligar pra família no dia seguinte pra remarcar uma consulta focada em saúde mental.",
          consequencia:
            "A filha atende aliviada — ela mesma tinha notado que algo não fechou na consulta. Remarcam para a semana seguinte.",
          qualidadeDecisao: "aceitavel",
          proximoNoId: "evolucao-boa",
        },
        {
          texto: "Seguir com o plano inicial (analgésico/exames de rotina) e não retornar ao assunto.",
          consequencia:
            "Joaquim segue seu retorno em 3 meses, sem qualquer intervenção para o quadro depressivo não identificado.",
          qualidadeDecisao: "problematica",
          proximoNoId: "evolucao-ruim",
        },
      ],
    },
    {
      id: "evolucao-boa",
      turno: "evolucao",
      narrativa:
        "Duas semanas depois, a filha liga: 'Doutor, ele voltou pro jardim ontem. Não arrumou nada ainda, mas ficou lá sentado olhando as roseiras por um tempo. Pra ele, isso já é muita coisa.'",
      opcoes: [
        {
          texto: "Manter o plano atual, reforçar retorno em 4 semanas para reavaliação e ajuste de dose se necessário.",
          consequencia: "Joaquim segue em acompanhamento regular, com melhora progressiva ao longo das semanas seguintes.",
          qualidadeDecisao: "ideal",
          proximoNoId: "desfecho-bom",
        },
        {
          texto: "Aumentar a dose imediatamente, já que a melhora ainda é parcial.",
          consequencia:
            "O aumento precoce, antes do tempo mínimo de resposta ao ISRS, não acelera a melhora e só aumenta o risco de efeitos adversos nesse estágio.",
          qualidadeDecisao: "problematica",
          proximoNoId: "desfecho-regular",
        },
      ],
    },
    {
      id: "evolucao-ruim",
      turno: "evolucao",
      narrativa:
        "Um mês depois, a filha liga preocupada: Joaquim tem saído cada vez menos do quarto, e ontem disse a ela, sem drama na voz, que 'ninguém ia sentir tanta falta assim'.",
      opcoes: [
        {
          texto: "Pedir para trazer Joaquim com urgência ainda hoje para avaliação presencial de risco.",
          consequencia:
            "Na consulta de urgência, você finalmente consegue caracterizar o quadro depressivo grave e iniciar tratamento adequado, com plano de segurança e acompanhamento próximo.",
          qualidadeDecisao: "ideal",
          proximoNoId: "desfecho-regular",
        },
        {
          texto: "Orientar por telefone que 'é normal ficar mais quieto às vezes' e manter o retorno já agendado.",
          consequencia: "A oportunidade de intervir diante de um sinal de alerta real passa batido mais uma vez.",
          qualidadeDecisao: "problematica",
          proximoNoId: "desfecho-ruim",
        },
      ],
    },
    {
      id: "desfecho-bom",
      turno: "desfecho",
      narrativa:
        "Três meses depois, Joaquim está de volta à ativa: as roseiras finalmente foram replantadas, e ele já reclama que 'esse ano a praga tá braba'. A filha manda uma foto das flores no grupo da família com a legenda: 'Vovô voltou.' O episódio depressivo maior, mascarado atrás da queixa de 'cansaço do jardim', foi reconhecido e tratado a tempo.",
      opcoes: [],
    },
    {
      id: "desfecho-regular",
      turno: "desfecho",
      narrativa:
        "Joaquim melhora, mas o caminho até aqui foi mais acidentado do que precisava ser — sinais que poderiam ter sido notados semanas antes só foram levados a sério na urgência. Ele se recupera, mas a família carrega a lembrança de quão perto isso chegou de passar despercebido.",
      opcoes: [],
    },
    {
      id: "desfecho-ruim",
      turno: "desfecho",
      narrativa:
        "O quadro de Joaquim se agrava sem que ninguém tenha reconhecido a tempo os sinais que ele foi deixando, um a um, ao longo do caminho. Este desfecho é um lembrete: a queixa somática atípica ('só estou cansado') é, com frequência, a forma como a depressão se apresenta em idosos — e cada oportunidade de perguntar diretamente sobre humor e ideação é uma chance real de mudar o rumo da história.",
      opcoes: [],
    },
  ],
};

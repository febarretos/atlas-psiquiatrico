import { DominioPsicopatologico } from "./types";

export const linguagem: DominioPsicopatologico = {
  id: "linguagem",

  nome: "Linguagem e Comunicação",

  rotuloClinico: "Linguagem",

  descricao:
    "A linguagem é o instrumento motor e expressivo através do qual o pensamento se torna comunicável — articulação, fluência, ritmo, volume e melodia da fala (prosódia), além da capacidade de nomear, compreender e repetir. Este domínio trata do aparelho expressivo da comunicação em si; a organização e o encadeamento do conteúdo do pensamento que a linguagem veicula (fuga de ideias, afrouxamento de associações, neologismo, salada de palavras) pertencem ao domínio Curso e Forma do Pensamento — os dois se sobrepõem na prática clínica e devem ser lidos em conjunto.",

  normalidade:
    "A fala normal é fluente, articulada com clareza, produzida em ritmo e volume adequados ao contexto social, com prosódia variável que acompanha e expressa o conteúdo emocional do discurso (entonação mais viva ao narrar algo emocionante, mais grave ao relatar algo triste). A pessoa nomeia objetos, compreende instruções e repete frases sem esforço, e regula espontaneamente a quantidade de fala conforme o interesse do interlocutor e as normas da conversação (turnos de fala, pausas). Cansaço, sotaque regional, bilinguismo e nervosismo situacional podem alterar temporariamente a fluência ou a articulação sem que isso configure patologia — o critério é o desvio persistente e não intencional do padrão habitual do próprio indivíduo.",

  notaNormal: "Discurso fluente e articulado, com compreensão, nomeação e repetição preservadas.",

  achados: [
    {
      id: "disartria",
      nome: "Disartria",
      definicao:
        "Dificuldade motora na articulação dos sons da fala, por comprometimento do controle neuromuscular dos órgãos fonoarticulatórios (língua, lábios, palato, pregas vocais) — a formulação linguística do pensamento está preservada, mas sua execução motora está prejudicada.",
      caracteristicas: [
        "Fala arrastada, imprecisa ou 'pastosa', mas com escolha de palavras e estruturação gramatical preservadas — diferente da afasia, em que o problema é linguístico, não motor",
        "Causa frequente e clinicamente relevante em psiquiatria: efeito colateral de lítio (intoxicação), benzodiazepínicos e antipsicóticos em dose alta, além de intoxicação alcoólica aguda",
        "Também ocorre em quadros neurológicos primários (AVC, doença de Parkinson, esclerose lateral amiotrófica) — sempre relevante investigar início e cronologia com uso de medicação",
      ],
      exemploClinico:
        "Paciente em uso de lítio que passa a falar de forma arrastada e imprecisa, com a família relatando que 'a fala ficou enrolada' — achado que, junto de tremor grosseiro e ataxia, levanta suspeita de níveis séricos elevados de lítio.",
      diferencialFino: [
        {
          comparadoCom: "Afasia",
          distincao:
            "Na disartria o problema é exclusivamente motor/articulatório — o paciente sabe exatamente o que quer dizer e escolhe as palavras corretas, mas a execução sai arrastada ou imprecisa. Na afasia o problema é linguístico — a própria formulação ou compreensão da linguagem está comprometida, independentemente da capacidade motora de articular sons.",
        },
      ],
      transtornosAssociados: [
        "Intoxicação por lítio",
        "Intoxicação alcoólica aguda",
        "Efeito extrapiramidal/sedação por antipsicóticos ou benzodiazepínicos em dose alta",
        "Doenças neurológicas (Parkinson, AVC, esclerose lateral amiotrófica)",
      ],
    },
    {
      id: "afasia",
      nome: "Afasia (não fluente e fluente)",
      sinonimos: ["Disfasia"],
      definicao:
        "Perturbação adquirida da capacidade linguística de produzir e/ou compreender a linguagem, por lesão de áreas corticais especializadas — distinta de um transtorno primário do pensamento por ter, tipicamente, uma correlação neuroanatômica localizatória identificável.",
      caracteristicas: [
        "Afasia não fluente (de Broca): fala esforçada, entrecortada, agramatical, com boa compreensão preservada — o paciente entende mas tem dificuldade motora de formular frases",
        "Afasia fluente (de Wernicke): fala fluente e bem articulada, mas com conteúdo vazio, parafasias (troca de palavras/sons) e compreensão comprometida — pode ser confundida com salada de palavras psicótica (ver diferencial abaixo)",
        "Relevância psiquiátrica: sempre investigar afasia de início recente como possível AVC, sobretudo em paciente idoso com fatores de risco vascular apresentando 'fala confusa' de início súbito, antes de atribuir o quadro a causa psiquiátrica primária",
      ],
      exemploClinico:
        "Paciente idoso, hipertenso, trazido por familiares por 'estar falando coisa com coisa' de forma súbita — a fala é fluente mas incompreensível, com trocas de palavras e nenhuma queixa espontânea de fraqueza; a suspeita inicial de quadro psiquiátrico dá lugar a uma investigação de AVC de território posterior após exame neurológico mostrar déficit de campo visual associado.",
      diferencialFino: [
        {
          comparadoCom: "Salada de palavras (esquizofasia)",
          distincao:
            "Ambas produzem fala fluente e incompreensível. A favor de afasia de Wernicke: início relativamente súbito, idade mais avançada, fatores de risco vascular, ausência de outros sintomas psicóticos (delírios, alucinações), e frequentemente sinais neurológicos associados (déficit de campo visual, alteração motora leve). A favor de salada de palavras: instalação mais insidiosa no contexto de um quadro psicótico já estabelecido, presença de outros sintomas do espectro esquizofrênico, e ausência de achados neurológicos focais. Na dúvida, neuroimagem é mandatória.",
        },
      ],
      transtornosAssociados: [
        "AVC (causa mais comum e mais urgente de excluir)",
        "Traumatismo cranioencefálico",
        "Tumores e outras lesões estruturais do sistema nervoso central",
        "Demências (afasia progressiva primária)",
      ],
    },
    {
      id: "disprosodia",
      nome: "Disprosódia",
      definicao:
        "Alteração do ritmo, da entonação e da melodia da fala, que passa a soar monótona, cantada, robótica ou com acentuação estranha das sílabas — a prosódia é o componente musical/afetivo da fala, distinto da escolha das palavras em si.",
      caracteristicas: [
        "Pode ser primariamente motora (Parkinson, disfunção do controle neuromuscular da fala) ou refletir uma alteração afetiva subjacente",
        "A fala monótona por embotamento afetivo (ver domínio Afetividade e Humor) é secundária à redução da expressão emocional; a disprosódia motora tem base neurológica/articulatória independente do estado afetivo",
        "Descrita também como traço frequente no Transtorno do Espectro Autista, onde a entonação pode soar 'cantada' ou artificialmente formal",
      ],
      exemploClinico:
        "Paciente com doença de Parkinson cuja fala se torna progressivamente monótona, em volume baixo e com ritmo acelerado no final das frases, mesmo em momentos que o próprio paciente descreve como emocionalmente significativos — a família nota que 'ele parece sem emoção quando fala, mas ele mesmo diz que sente as coisas normalmente'.",
      diferencialFino: [
        {
          comparadoCom: "Prosódia reduzida por embotamento afetivo",
          distincao:
            "Na disprosódia motora (Parkinson, lesões neurológicas) o achatamento da entonação tem base neuromuscular e o paciente frequentemente relata preservação da vivência emocional subjetiva apesar da fala monótona. No embotamento afetivo (ver domínio Afetividade e Humor) a fala monótona é apenas uma das manifestações de uma redução mais ampla da expressividade emocional (facial, gestual), e não raro acompanha redução da própria vivência subjetiva.",
        },
      ],
      transtornosAssociados: [
        "Doença de Parkinson e outras doenças do movimento",
        "Transtorno do Espectro Autista",
        "Lesões do hemisfério direito (prosódia afetiva)",
      ],
    },
    {
      id: "logorreia",
      nome: "Logorreia",
      sinonimos: ["Verborragia", "Taquilalia"],
      definicao:
        "Produção de fala excessiva, acelerada e difícil de interromper, com o paciente falando mais rápido e por mais tempo do que o contexto conversacional permitiria, muitas vezes sem ceder a tentativas do interlocutor de intervir.",
      caracteristicas: [
        "Diferente de fuga de ideias (ver domínio Curso e Forma do Pensamento): a logorreia descreve a quantidade e a velocidade da produção verbal; a fuga de ideias descreve a perda de direção do encadeamento do conteúdo — costumam coexistir na mania, mas são eixos distintos e um pode estar presente sem o outro",
        "Pressão de fala é o termo usado quando, além da quantidade, há uma sensação subjetiva de urgência incontrolável em falar — sintoma característico do episódio maníaco",
        "Também descrita em intoxicação por estimulantes e em alguns quadros de ansiedade intensa",
      ],
      exemploClinico:
        "Paciente em episódio maníaco que fala ininterruptamente durante toda a consulta, aumentando o volume quando o entrevistador tenta intervir, sem pausas espontâneas para respirar adequadamente entre as frases.",
      transtornosAssociados: [
        "Episódio Maníaco (pressão de fala)",
        "Intoxicação por estimulantes",
        "Transtornos de ansiedade (formas mais leves)",
      ],
    },
    {
      id: "mutismo-nao-catatonico",
      nome: "Mutismo (não catatônico)",
      definicao:
        "Ausência completa ou quase completa de fala espontânea e responsiva, na presença de aparelho fonoarticulatório e compreensão preservados — o termo isolado descreve o fenômeno observável; a etiologia (catatônica, dissociativa, seletiva, depressiva) deve sempre ser investigada à parte.",
      caracteristicas: [
        "Mutismo seletivo: criança ou adolescente que fala normalmente em alguns contextos (casa) e permanece muda em outros (escola), tipicamente de base ansiosa",
        "Mutismo dissociativo/psicogênico: instalação associada a estressor identificável, sem os demais sinais motores da catatonia (postura, negativismo, flexibilidade cérea)",
        "Mutismo depressivo grave: paciente com estupor depressivo que para de falar quase completamente, geralmente com outros sinais de lentificação psicomotora global associados",
      ],
      exemploClinico:
        "Criança de 7 anos que fala fluentemente em casa mas não emite uma palavra na escola há meses, comunicando-se ali apenas por gestos, sem qualquer déficit de linguagem identificado em avaliação fonoaudiológica.",
      diferencialFino: [
        {
          comparadoCom: "Mutismo catatônico",
          distincao:
            "O mutismo catatônico (ver domínio Psicomotricidade) tipicamente vem acompanhado de outros sinais motores da síndrome catatônica (negativismo, flexibilidade cérea, postura) e responde classicamente ao teste com lorazepam. O mutismo não catatônico ocorre isoladamente ou associado a outro quadro (ansiedade, dissociação, depressão grave), sem os demais sinais motores catatônicos, e não responde ao teste benzodiazepínico da mesma forma.",
        },
        {
          comparadoCom: "Afasia",
          distincao:
            "Na afasia há lesão da própria capacidade linguística — o paciente pode tentar falar e produzir erros, ou não compreender o que é dito. No mutismo a capacidade linguística subjacente está preservada; o paciente simplesmente não produz fala, por inibição motora, escolha ou bloqueio emocional/dissociativo.",
        },
      ],
      transtornosAssociados: [
        "Mutismo Seletivo (transtorno de ansiedade da infância)",
        "Transtornos dissociativos",
        "Depressão grave com estupor",
        "Transtorno de Estresse Pós-Traumático (mutismo pós-traumático agudo)",
      ],
    },
    {
      id: "mussitacao",
      nome: "Mussitação",
      definicao:
        "Fala murmurada, em volume muito baixo, quase sussurrada e frequentemente ininteligível, com movimentação perceptível dos lábios mas sem produção sonora suficiente para comunicação efetiva.",
      caracteristicas: [
        "Diferente do mutismo: aqui há tentativa de fala, apenas em volume insuficiente — no mutismo não há produção de fala alguma",
        "Pode ocorrer em resposta a alucinações auditivas (paciente 'conversando' baixinho com as vozes) — sempre observar se os lábios se movem em padrão consistente com fala dirigida a um interlocutor ausente",
        "Descrita também em quadros graves de retardo psicomotor depressivo, como manifestação residual mínima de fala",
      ],
      exemploClinico:
        "Paciente com esquizofrenia observado movendo os lábios continuamente e emitindo sons ininteligíveis em volume muito baixo, aparentemente respondendo a alucinações auditivas que nega quando questionado diretamente.",
      transtornosAssociados: [
        "Esquizofrenia (frequentemente em resposta a alucinações auditivas)",
        "Depressão grave com retardo psicomotor",
        "Estados catatônicos leves/parciais",
      ],
    },
    {
      id: "verbigeracao",
      nome: "Verbigeração",
      definicao:
        "Repetição estereotipada e sem propósito comunicativo aparente de uma mesma palavra, frase ou sequência sonora, de forma automática e persistente, independentemente do contexto conversacional.",
      caracteristicas: [
        "A repetição não tem função comunicativa nem responde ao fluxo da conversa — é auto-sustentada, como uma estereotipia verbal",
        "Diferente de perseveração (ver domínio Curso e Forma do Pensamento), que é a repetição de uma resposta prévia diante de um estímulo novo (o paciente tenta responder à pergunta atual mas 'trava' na resposta anterior); na verbigeração a repetição não está necessariamente ligada a uma pergunta ou estímulo específico",
        "Diferente de ecolalia (ver domínio Psicomotricidade), que é a repetição do que outra pessoa acabou de dizer; na verbigeração o conteúdo repetido é próprio do paciente, não ecoado de outrem",
      ],
      exemploClinico:
        "Paciente com esquizofrenia catatônica que repete a frase 'vai dar tudo certo, vai dar tudo certo, vai dar tudo certo' de forma automática e intermitente ao longo de toda a entrevista, sem relação aparente com o que está sendo perguntado.",
      diferencialFino: [
        {
          comparadoCom: "Ecolalia",
          distincao:
            "Na verbigeração o conteúdo repetido é gerado pelo próprio paciente e se repete de forma autônoma, sem relação com a fala de outra pessoa. Na ecolalia (domínio Psicomotricidade) o paciente repete automaticamente o que acabou de ouvir do interlocutor — a fonte do conteúdo repetido é externa, não própria.",
        },
        {
          comparadoCom: "Perseveração",
          distincao:
            "A perseveração é a repetição inadequada de uma resposta ou ação prévia diante de um novo estímulo/pergunta — ocorre no contexto de uma tentativa (frustrada) de responder a algo novo. A verbigeração é uma repetição autossustentada, tipicamente desconectada de qualquer tentativa de resposta a um estímulo específico.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (especialmente catatônica)",
        "Transtorno Neurocognitivo Maior em fases avançadas",
      ],
    },
    {
      id: "palilalia",
      nome: "Palilalia",
      definicao:
        "Repetição involuntária das próprias últimas palavras ou sílabas ditas, frequentemente com volume decrescente e velocidade crescente ao longo das repetições.",
      caracteristicas: [
        "Fenômeno predominantemente motor/neurológico, distinto da verbigeração por seu padrão característico (repetição do que o próprio paciente ACABOU de dizer, com aceleração e diminuição progressiva do volume)",
        "Associada classicamente a transtornos do movimento com componente de base de gânglios da base",
      ],
      exemploClinico:
        "Paciente com síndrome de Tourette que, ao final de uma frase, repete espontaneamente as últimas palavras várias vezes seguidas, cada repetição mais rápida e baixa que a anterior, até se tornar inaudível.",
      transtornosAssociados: [
        "Síndrome de Tourette e outros transtornos de tique",
        "Doença de Parkinson e outras doenças de gânglios da base",
        "Transtorno do Espectro Autista",
      ],
    },
    {
      id: "vorbeireden",
      nome: "Respostas aproximadas (Vorbeireden)",
      sinonimos: ["Síndrome de Ganser", "Passar ao largo da resposta"],
      definicao:
        "Padrão característico de dar respostas aproximadamente corretas, mas sistematicamente erradas, a perguntas simples cuja resposta correta o paciente evidentemente conhece — descrito classicamente na síndrome de Ganser, associada a estados dissociativos e a contextos de reclusão/forense.",
      caracteristicas: [
        "As respostas erradas demonstram compreensão da pergunta e proximidade com a resposta correta (ex.: perguntado quantas patas tem um cavalo, o paciente responde 'cinco') — a proximidade sistemática é o que diferencia de confusão mental genuína ou de demência",
        "Classicamente descrita em contextos forenses/prisionais, levantando historicamente questões sobre simulação versus mecanismo dissociativo genuíno — a distinção definitiva é frequentemente difícil e exige avaliação longitudinal",
        "Pode coexistir com outros sintomas dissociativos (alteração do nível de consciência flutuante, alucinações transitórias)",
      ],
      exemploClinico:
        "Paciente sob custódia que, ao ser perguntado quantos dedos tem uma mão, responde 'seis', e ao ser perguntado a cor do céu, responde 'verde' — respostas consistentemente próximas mas erradas, em contraste com a fluência e coerência do restante do discurso.",
      transtornosAssociados: [
        "Síndrome de Ganser (transtorno dissociativo)",
        "Transtorno Factício (diagnóstico diferencial obrigatório)",
        "Simulação (diagnóstico diferencial obrigatório, especialmente em contexto forense)",
      ],
    },
    {
      id: "coprolalia",
      nome: "Coprolalia",
      definicao:
        "Emissão involuntária, súbita e socialmente inadequada de palavras obscenas, xingamentos ou insultos, vivenciada pelo próprio paciente como incontrolável e frequentemente egodistônica.",
      caracteristicas: [
        "Ocorre em apenas uma minoria dos pacientes com síndrome de Tourette (não é critério necessário para o diagnóstico, ao contrário do que popularmente se acredita)",
        "Tipicamente breve, explosiva e fora de contexto, gerando constrangimento imediato no próprio paciente — diferente de agressividade verbal proposital",
        "Deve ser diferenciada de desinibição verbal de causa frontal/demencial, onde a linguagem obscena reflete perda mais ampla de filtro social, não um tique isolado",
      ],
      exemploClinico:
        "Adolescente com síndrome de Tourette que, em meio a uma conversa neutra, emite subitamente um palavrão alto e fora de contexto, ficando visivelmente constrangido e pedindo desculpas em seguida.",
      transtornosAssociados: [
        "Síndrome de Tourette (presente em minoria dos casos)",
        "Transtorno Neurocognitivo Frontotemporal (desinibição verbal, mecanismo distinto)",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "American Psychiatric Association (APA). DSM-5-TR.",
  ],
};

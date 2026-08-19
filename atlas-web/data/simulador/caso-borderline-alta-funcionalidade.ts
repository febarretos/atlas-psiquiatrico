import { CasoSimulador } from "./types";

export const casoBorderlineAltaFuncionalidade: CasoSimulador = {
  "id": "caso-borderline-alta-funcionalidade",
  "tituloAnedotico": "A Arquiteta, a Maquete Desmoronada e o Vazio de Luxo",
  "diagnosticoRealId": "personalidade-borderline",
  "nos": [
    {
      "id": "entrevista-inicial",
      "turno": "entrevista",
      "narrativa": "Camilla, 30 anos, arquiteta renomada e premiada por seus projetos minimalistas, chega ao ambulatório trazida pela irmã. Veste um terno impecável e traz uma postura altiva, mas dissolve-se em lágrimas nos primeiros minutos de conversa. Relata ter tido uma recaída devastadora no consumo de álcool no fim de semana, após seu noivo pedir 'um tempo' para refletir. Ela relata um sentimento de vazio intolerável no peito que tenta preencher trabalhando 14 horas por dia ou fazendo trabalhos voluntários exaustivos, mas que explode em crises de desespero e medo assustador de ficar sozinha. Nega histórico de cortes corporais evidentes ou tentativas explícitas de suicídio, o que faz a irmã comentar: 'Ela sempre pareceu tão forte e no controle de tudo'.",
      "opcoes": [
        {
          "texto": "Minimizar o quadro atribuindo-o a uma 'reação adaptativa normal a um término de namoro' e dar alta com orientações de higiene do sono.",
          "consequencia": "Camilla sente-se profundamente incompreendida, irrita-se com a postura do médico e deixa o consultório em prantos, aumentando o consumo de bebida naquela mesma noite.",
          "proximoNoId": "desfecho-negligencia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Focar o atendimento primordialmente no consumo problemático de álcool, colhendo história detalhada de uso e orientando encaminhamento para Alcoólicos Anônimos.",
          "consequencia": "Camilla concorda com o foco no álcool, mas desabafa: 'A bebida é só para desligar a dor de achar que todo mundo que eu amo vai me deixar'.",
          "proximoNoId": "exames-foco-substancia",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Assumir tratar-se de um Episódio Depressivo Maior grave secundário à crise conjugal e propor prescrição imediata de antidepressivo em dose alta sem mais investigações.",
          "consequencia": "Camilla aceita a receita na esperança de uma solução rápida para a dor emocional, mas sem clareza sobre os aspectos centrais de sua desregulação interpessoal.",
          "proximoNoId": "conduta-precipitada-antidepressivo",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Investigar detalhadamente a dinâmica dos relacionamentos afetivos, a volatilidade do humor reativa a gatilhos interpessoais, a percepção de autoimagem e o histórico de impulsividade.",
          "consequencia": "Camilla detalha que transita rapidamente entre adorar o noivo e senti-lo como um inimigo cruel ao menor sinal de desatenção, revelando também episódios de compras impulsivas e sensação crônica de desrealização sob estresse.",
          "proximoNoId": "exames-investigacao",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "exames-investigacao",
      "turno": "exames",
      "narrativa": "A investigação sintomática revela marcante instabilidade afetiva com oscilações que duram poucas horas em resposta a estressores interpessoais, além de medo pavoroso de abandono e sensação recorrente de insignificância. Para descartar causas orgânicas para a labilidade e rastrear comorbidades, você solicita exames laboratoriais gerais, função tireoidiana, rastreio toxicológico e aplica inventários de personalidade e humor.",
      "opcoes": [
        {
          "texto": "Interpretar os sintomas como sintomas de disforia e impulsividade isolados, prescrevendo um fármaco modulador de humor sintomático sem formalizar diagnósticos estruturais de personalidade.",
          "consequencia": "Camilla aceita o remédio, mas pergunta como lidará com os episódios em que sente que o noivo a rejeita.",
          "proximoNoId": "conduta-farmaco-isolado",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Diagnosticar Transtorno Bipolar Tipo II devido às oscilações afetivas e prescrever uma combinação pesada de estabilizador de humor e antipsicótico em alta dose.",
          "consequencia": "Camilla inicia os medicamentos e passa a apresentar sedação intensa, tremores e diminuição acentuada no desempenho do escritório de arquitetura.",
          "proximoNoId": "evolucao-efeitos-adversos",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Analisar os resultados (exames normais; testes indicando acentuada desregulação emocional e traços borderline de alta funcionalidade) e fechar o diagnóstico de Transtorno de Personalidade Borderline, propondo plano de psicoterapia estruturada.",
          "consequencia": "A explicação do diagnóstico traz alívio imediato para a paciente, que expressa que 'pela primeira vez uma explicação faz sentido com o que sinto por dentro'.",
          "proximoNoId": "conduta-psicoterapia-estruturada",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Atribuir todo o quadro exclusivamente a um Transtorno de Estresse Pós-Traumático (TEPT) focado apenas na infância, ignorando o padrão duradouro interpessoal e afetivo do adulto.",
          "consequencia": "A terapia iniciada foca puramente em reprocessamento de memórias antigas, deixando desassistidas as crises interpessoais diárias no relacionamento atual.",
          "proximoNoId": "evolucao-crise-interpessoal",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "exames-foco-substancia",
      "turno": "exames",
      "narrativa": "Ao focar primariamente no abuso de álcool, você solicita marcadores hepáticos, rastreio toxicológico e avaliação de dependência química. Os exames mostram discreta elevação de enzimas hepáticas. Durante a devolução dos exames, Camilla reitera que só bebe após discussões intensas em que se sente rejeitada ou descartável.",
      "opcoes": [
        {
          "texto": "Reconhecer que o abuso de álcool funciona como comportamento impulsivo secundário à desregulação emocional e reavaliar para a hipótese de Transtorno de Personalidade Borderline.",
          "consequencia": "A reavaliação confirma o padrão duradouro de instabilidade interpessoal, labilidade afetiva reativa e medo de abandono.",
          "proximoNoId": "conduta-psicoterapia-estruturada",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever medicação para redução de fissura (como naltrexona) e encaminhar para terapia focada unicamente em adições, adiando a avaliação de personalidade.",
          "consequencia": "A frequência dos episódios de beber diminui pontualmente, mas as crises de desespero no relacionamento continuam intactas.",
          "proximoNoId": "evolucao-parcial",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Confrontar a paciente de forma ríspida afirmando que ela está em 'negação severa do alcoolismo primário' e que nenhuma psicoterapia funcionará antes de 1 ano de sobriedade total.",
          "consequencia": "Camilla sente-se julgada, chora copiosamente e recusa-se a retornar ao consultório.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever benzodiazepínicos em dose generosa para aliviar a ansiedade associada à fissura por álcool no ambiente ambulatorial.",
          "consequencia": "A paciente passa a utilizar o ansiolítico de forma descontrolada em momentos de angústia interpessoal, combinando-o com taças de vinho.",
          "proximoNoId": "evolucao-abuso-substancia",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-precipitada-antidepressivo",
      "turno": "conduta",
      "narrativa": "Três semanas após ter iniciado o antidepressivo sem acompanhamento psicoterápico, Camilla retorna ao consultório acompanhada pelo noivo. Ela relata que o remédio não reduziu a sensação crônica de vazio interior. Após uma discussão trivial sobre o horário do jantar, Camilla teve um acesso de raiva desproporcional, quebrou maquetes no trabalho e expressou pensamentos transitórios de que o noivo estava conspirando com seus colegas para destruí-la profissionalmente.",
      "opcoes": [
        {
          "texto": "Aumentar a dose do antidepressivo e associar um ansiolítico para conter a irritabilidade, agendando retorno em 15 dias.",
          "consequencia": "A paciente mantém a instabilidade emocional e relata piora do embotamento afetivo misturado com picos de raiva explosiva.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Classificar o comportamento como 'manipulatório e agressivo', repreendendo a paciente e encerrando sumariamente o atendimento.",
          "consequencia": "Camilla sente o encerramento como uma confirmação de sua rejeição e abandono, entrando em severa crise disfórica sem amparo.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Reconhecer o equívoco inicial, suspender o antidepressivo desnecessário, formalizar o diagnóstico de TP Borderline e encaminhar para psicoterapia estruturada (DBT) com plano de segurança.",
          "consequencia": "Camilla compreende a natureza de suas reações emocionais e concorda em iniciar a Terapia Comportamental Dialética com aliança restabelecida.",
          "proximoNoId": "evolucao-recuperada",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Encaminhar a paciente para internação psiquiátrica involuntária sob a justificativa de que a raiva e a ideação paranoide transitória constituem um surto psicótico esquizofrênico.",
          "consequencia": "A internação hospitalar sem indicação precisa gera trauma grave na paciente, estigmatização social e ruptura com a equipe de saúde.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-psicoterapia-estruturada",
      "turno": "conduta",
      "narrativa": "Você realiza uma sessão psicoeducativa detalhada com Camilla sobre o Transtorno de Personalidade Borderline, enfatizando que sua alta funcionalidade profissional convive com uma vulnerabilidade emocional biológica e dor interpessoal grave. Você propõe o encaminhamento para Terapia Comportamental Dialética (DBT) focada em módulos de mindfulness, tolerância ao mal-estar e regulação emocional, estabelecendo limites terapêuticos claros e um plano de crise.",
      "opcoes": [
        {
          "texto": "Manter acompanhamento ambulatorial psiquiátrico de suporte focado em monitorar a adesão à DBT e gerenciar crises, sem prescrição sistemática de psicotrópicos desnecessários.",
          "consequencia": "Camilla engaja-se na DBT, aprendendo a identificar os gatilhos emocionais antes de agir impulsivamente.",
          "proximoNoId": "evolucao-excelente",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever polifarmácia massiva composta por dois antidepressivos, um estabilizador de humor e dois ansiolíticos para tentar 'eliminar qualquer oscilação afetiva'.",
          "consequencia": "A paciente apresenta múltiplos efeitos colaterais e pouca melhora nas suas habilidades de enfrentamento relacional.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever uma dose baixa de antipsicótico atípico (ex.: quetiapina) apenas como medicação sintomática adjuvante para controle de picos severos de disforia e ansiedade.",
          "consequencia": "A medicação reduz pontualmente a intensidade do pico disfórico, auxiliando a paciente a aplicar as habilidades aprendidas na terapia.",
          "medicamentoId": "quetiapina",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Fornecer seu telefone pessoal para a paciente e orientá-la a ligar a qualquer hora do dia ou da noite para evitar que ela 'se sinta abandonada novamente'.",
          "consequencia": "A ausência de limites no enquadre terapêutico gera dependência excessiva e frequentes chamadas madrugadas adentro ao menor estresse relacional.",
          "proximoNoId": "evolucao-quebra-limites",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-farmaco-isolado",
      "turno": "conduta",
      "narrativa": "Você prescreve um estabilizador de humor para o controle sintomático dos picos emocionais e orienta a paciente a procurar psicoterapia por conta própria, sem direcionamento para abordagens estruturadas (como DBT ou MBT). Após um mês, Camilla retorna relatando que o remédio atenuou ligeiramente a raiva, mas o medo do abandono e o vazio crônico permanecem intensos.",
      "opcoes": [
        {
          "texto": "Dobrar a dose da medicação e acrescentar um antipsicótico em dose alta para tentar suprimir completamente a reatividade emocional.",
          "consequencia": "A paciente sente-se quimicamente 'engessada', relatando prejuízo nas suas atividades criativas como arquiteta.",
          "proximoNoId": "evolucao-efeitos-adversos",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Informar à paciente que 'a medicação é tudo o que a psiquiatria pode oferecer' e dar alta do acompanhamento médico.",
          "consequencia": "Sentindo-se abandonada pelo médico, Camilla descontinua o remédio e volta a beber pesadamente em episódios de solidão.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Ajustar pontualmente a dose do modulador de humor e reiterar a necessidade de buscar terapia convencional de apoio.",
          "consequencia": "A paciente obtém estabilização modesta, mantendo certa vulnerabilidade a crises interpessoais cíclicas.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Reconhecer que o tratamento de primeira linha é a psicoterapia estruturada e providenciar o encaminhamento correto para equipe especializada em DBT.",
          "consequencia": "A adição da terapia focada preenche a lacuna do tratamento e Camilla inicia a aprendizagem de habilidades de regulação.",
          "proximoNoId": "evolucao-recuperada",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-excelente",
      "turno": "evolucao",
      "narrativa": "Seis meses após o início da Terapia Comportamental Dialética (DBT) e do acompanhamento psiquiátrico estruturado, Camilla apresenta ganhos notáveis. Ela aprendeu a utilizar estratégias de tolerância ao mal-estar quando sente medo do término, conseguindo conversar abertamente com o noivo em vez de reagir impulsivamente ou beber. Não houve novos episódios de consumo nocivo de álcool e ela mantém ótimo desempenho profissional com limites saudáveis entre trabalho e descanso.",
      "opcoes": [
        {
          "texto": "Sugerir à paciente que suspenda o noivado para 'testar se ela realmente não precisa mais de ninguém'.",
          "consequencia": "A orientação indevida gera confusão e desestabilização num relacionamento que estava em fase de reestruturação.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Introduzir um antidepressivo preventivo em dose alta alegando que 'é melhor prevenir qualquer tristeza futura'.",
          "consequencia": "A paciente desenvolve inquietação motora e insônia colateral sem necessidade clínica.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Elogiar o comprometimento da paciente, manter consultas ambulatoriais trimestrais de monitoramento e reforçar o plano de prevenção de recaídas.",
          "consequencia": "A paciente consolida sua autonomia e estabilidade interpessoal no longo prazo.",
          "proximoNoId": "desfecho-excelente",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Conceder alta psiquiátrica definitiva orientando interromper também a psicoterapia por considerar a paciente totalmente curada.",
          "consequencia": "A interrupção precoce da terapia causa insegurança, mas a paciente consegue manter ganhos básicos.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "evolucao-boa",
      "turno": "evolucao",
      "narrativa": "Com a psicoterapia em andamento e o suporte farmacológico adjuvante sintomático de baixa dose, Camilla apresenta melhora significativa na labilidade afetiva. O sentimento de vazio ocasionalmente ressurge em domingos à noite, mas ela já consegue utilizar técnicas de mindfulness para não recorrer ao álcool nem iniciar discussões explosivas.",
      "opcoes": [
        {
          "texto": "Manter a prescrição da dose baixa da medicação e o acompanhamento ambulatorial mensal sem alterações.",
          "consequencia": "A paciente segue estável e bem adaptada na rotina diária.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Encaminhar para choque elétrico (ECT) argumentando que o vazio crônico de residência prolongada exige intervenção neurológica drástica.",
          "consequencia": "Indicação completamente inadequada que causa perplexidade e recuo da paciente.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Aumentar a medicação sintomática ao menor relato de choro ou tristeza situacional nas sessões.",
          "consequencia": "A polifarmácia gradual causa ganho de peso e sonolência diurna desnecessários.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter o foco no trabalho psicoterápico de longo prazo e planejar a descontinuação gradual da medicação adjuvante sintomática conforme as habilidades se consolidarem.",
          "consequencia": "Camilla ganha confiança na sua capacidade de autocuidado e regulação sem dependência medicamentosa.",
          "proximoNoId": "desfecho-excelente",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-recuperada",
      "turno": "evolucao",
      "narrativa": "Após a reorientação do diagnóstico para TP Borderline e a pactuação de um plano focado em psicoterapia DBT, Camilla conseguiu retomar os trilhos do tratamento. O vínculo médico-paciente foi recuperado e a paciente demonstra alívio por entender os padrões de sua instabilidade.",
      "opcoes": [
        {
          "texto": "Consolidar a adesão ao programa de DBT, estabelecer limites terapêuticos claros e manter acompanhamento mensal no ambulatório.",
          "consequencia": "A estabilização progride com redução sustentada das crises e da impulsividade.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Adicionar múltiplos antidepressivos e ansiolíticos para acelerar o processo de cura emocional.",
          "consequencia": "A combinação de drogas desencadeia sonolência marcante e interações medicamentosas desagradáveis.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter suporte médico quinzenal sem alterações no esquema de psicoterapia recém-iniciado.",
          "consequencia": "O acompanhamento garante a manutenção dos ganhos e previne atritos relacionais.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Repreender a paciente por ter demorado tanto para entender seu diagnóstico correto.",
          "consequencia": "A crítica atinge em cheio a sensibilidade à rejeição da paciente, gerando afastamento emocional.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "evolucao-quebra-limites",
      "turno": "evolucao",
      "narrativa": "A falta de limites claros no enquadre terapêutico resultou em dependência intensa. Camilla passa a enviar dezenas de mensagens por dia e liga de madrugada a cada discordância com o noivo. Em uma noite de sábado, ao não ter sua ligação atendida às 3h da manhã, ela envia mensagens acusatórias dizendo que foi 'traída e abandonada pelo próprio médico', ameaçando tomar remédios para dormir.",
      "opcoes": [
        {
          "texto": "Reagir com indignação no domingo de manhã, culpando a paciente por sua falta de consideração e bloqueando seu número.",
          "consequencia": "A rejeição abrupta confirma os piores medos de abandono de Camilla, precipitando crise disfórica grave.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manejar a crise com calma no dia seguinte, reestabelecendo empaticamente porém com firmeza os limites do contrato terapêutico e acionando o plano de crise pactuado na DBT.",
          "consequencia": "A paciente reestrutura a aliança, compreende o enquadre e aprende a utilizar os canais corretos de emergência.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Aumentar ainda mais a disponibilidade pessoal, oferecendo-se para ir à casa da paciente em crises noturnas.",
          "consequencia": "A quebra grave de limites éticos e terapêuticos intensifica a simbiose e torna a conduta insustentável.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Encaminhar a paciente para avaliação de urgência no pronto-socorro sem realizar posterior discussão sobre limites do enquadre.",
          "consequencia": "A crise pontual é contida no pronto-socorro, mas o padrão de dinâmica interpessoal permanece desregulado.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "evolucao-parcial",
      "turno": "evolucao",
      "narrativa": "Tratando unicamente o uso de álcool sem abordar os traços de personalidade subjacentes, Camilla mantém a sobriedade por quatro semanas. Porém, durante uma reunião em que sua maquete de projeto foi criticada por um cliente, ela sente uma onda incontrolável de raiva e vazio, acabando por abandonar a reunião e ter um episódio de compras compulsivas desastroso.",
      "opcoes": [
        {
          "texto": "Insistir que o episódio compulsivo foi 'falta de força de vontade' e focar exclusivamente em punições comportamentais.",
          "consequencia": "A paciente sente-se culpada e envergonhada, afastando-se do seguimento de saúde mental.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Reconhecer a insuficiência do foco exclusivo no vício e reorientar o plano para investigar e tratar o Transtorno de Personalidade Borderline com psicoterapia estruturada.",
          "consequencia": "A ampliação do diagnóstico permite integrar o tratamento da impulsividade e da labilidade afetiva.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Aumentar a dose da medicação anti-fissura alegando que a medicação falhou no controle dos impulsos.",
          "consequencia": "Surgem náuseas e cefaleia intensas sem melhora na capacidade de tolerar críticas no trabalho.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter o tratamento focado em adição e adicionar psicoterapia focada na regulação do estresse no trabalho.",
          "consequencia": "A paciente obtém melhora funcional modesta no trabalho, mas mantém vulnerabilidade interpessoal afetiva.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "evolucao-efeitos-adversos",
      "turno": "evolucao",
      "narrativa": "O regime pesado com lítio e antipsicótico de alta potência provocou ganho de peso, rigidez muscular e sonolência marcante em Camilla. Apesar de quimicamente lentificada, ela chora com frequência dizendo que se sente 'uma casca vazia no próprio escritório de arquitetura' e que ainda teme ser abandonada pelo noivo.",
      "opcoes": [
        {
          "texto": "Aumentar a dose do lítio alegando que a persistência do sentimento de vazio é sinal de mania mista não controlada.",
          "consequencia": "Surgem sinais de toxicidade leve por lítio (tremores grosseiros e disartria), exigindo suspensão de emergência.",
          "medicamentoId": "litio",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Descontinuar gradualmente os psicotrópicos desnecessários, desculpar-se pela iatrogenia e redirecionar a paciente para psicoterapia DBT focada em TP Borderline.",
          "consequencia": "Com a retirada dos remédios, a clareza mental retorna e a paciente engaja-se no aprendizado psicoterapêutico.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Dizer que os efeitos colaterais são 'frescura psissomática' e exigir que ela aguente a medicação por no mínimo 2 anos.",
          "consequencia": "Revoltada e incomodada com a rigidez motora, a paciente abandona completamente o tratamento psiquiátrico.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Trocar o antipsicótico por outro de menor potencial sedativo, mantendo a hipótese de transtorno do humor e a estabilização medicamentosa.",
          "consequencia": "A sedação diminui ligeiramente, mas os traços interpessoais continuam sem abordagem adequada.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "evolucao-crise-interpessoal",
      "turno": "evolucao",
      "narrativa": "Ao direcionar o tratamento exclusivamente para trauma infantil/TEPT, o plano ignorou a dinâmica das crises interpessoais do presente. Durante o processo, Camilla idealiza o terapeuta como seu 'único salvador no mundo', mas ao ter uma consulta desmarcada por motivo de força maior, entra em fúria acusando a equipe de traição e postando desabafos difamatórios nas redes sociais.",
      "opcoes": [
        {
          "texto": "Encaminhar a paciente para internação psiquiátrica em clínica fechada para 'conter o comportamento manipulativo público'.",
          "consequencia": "A internação amplia a sensação de estigmatização e revolta, piorando o quadro afetivo.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter a psicoterapia de trauma, mas associar módulos de psicoeducação sobre regulação emocional e estresse relacional.",
          "consequencia": "A paciente obtém alívio parcial e reduz a intensidade das acusações nas consultas.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Processar a paciente por calúnia e difamação e encerrar o atendimento imediatamente via notificação extrajudicial.",
          "consequencia": "O confronto judicial destrói qualquer possibilidade de intervenção médica e aprofunda o desespero da paciente.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Reavaliar o caso integrando o diagnóstico de Transtorno de Personalidade Borderline, alinhar limites interpessoais empáticos e propor transição para psicoterapia estruturada (DBT/MBT).",
          "consequencia": "A reestruturação do plano permite conter a crise, restabelecer o vínculo e focar na regulação do humor.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-abuso-substancia",
      "turno": "evolucao",
      "narrativa": "O uso inadequado de benzodiazepínicos prescritos levou ao desenvolvimento de tolerância rápida. Em um sábado à noite, após ver uma foto do noivo com amigos em uma rede social, Camilla sentiu uma onda sufocante de pânico de ser abandonada. Ela tomou 10 comprimidos de clonazepam acompanhados de vinho, terminando na emergência do hospital geral com rebaixamento do nível de consciência.",
      "opcoes": [
        {
          "texto": "Manejar o quadro agudo na emergência, suspender os benzodiazepínicos com desmame seguro, formalizar o diagnóstico de TP Borderline e encaminhar para programa intensivo de DBT com plano de crise.",
          "consequencia": "Após a alta hospitalar, a paciente compreende os riscos fatais da impulsividade medicamentosa e adere à psicoterapia especializada.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Dar alta do pronto-socorro sem orientações psiquiátricas, afirmando que foi 'apenas uma chamada de atenção manipulativa'.",
          "consequencia": "Sem suporte ou plano de segurança, a paciente permanece em altíssimo risco de novas tentativas autolesivas sob estresse.",
          "proximoNoId": "desfecho-ruim-abandono",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever outro ansiolítico de ação ainda mais potente para a paciente tomar assim que receber alta da emergência.",
          "consequencia": "A manutenção do hábito prescritivo aumenta exponencialmente o risco de overdose intencional recorrente.",
          "proximoNoId": "desfecho-ruim-iatrogenia",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Tratar a intoxicação na emergência e encaminhá-la para internação em comunidade terapêutica de dependência química por 6 meses.",
          "consequencia": "A internação foca no isolamento das substâncias, mas falha em ensinar habilidades de regulação afetiva para o retorno à vida normal.",
          "proximoNoId": "desfecho-mediano",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "desfecho-excelente",
      "turno": "desfecho",
      "narrativa": "Excelente condução clínica! Você identificou prontamente a apresentação de alta funcionalidade do Transtorno de Personalidade Borderline (subtipo internalizante), evitando o erro comum de focar apenas nas comorbidades superficiais ou na polifarmácia iatrogênica. Ao indicar o tratamento de escolha fundamentado em psicoterapia estruturada (DBT) e estabelecer limites claros com aliança empática, Camilla alcançou remissão sustentada dos sintomas disfóricos, estabilizou suas relações interpessoais e eliminou o abuso pontual de substâncias.",
      "opcoes": []
    },
    {
      "id": "desfecho-bom",
      "turno": "desfecho",
      "narrativa": "Bom desfecho clínico. Apesar de percalços ao longo do caminho — como hesitações no diagnóstico diferencial ou ajustes necessários no enquadre terapêutico —, o diagnóstico core de Transtorno de Personalidade Borderline foi devidamente reconhecido. O direcionamento para psicoterapia focada garantiu a recuperação da funcionalidade da paciente e preveniu o agravamento dos comportamentos impulsivos.",
      "opcoes": []
    },
    {
      "id": "desfecho-mediano",
      "turno": "desfecho",
      "narrativa": "Desfecho moderado. O manejo sofreu com atrasos no diagnóstico de certeza, foco excessivo em sintomas secundários (como o uso de álcool) ou uso de polifarmácia adjuvante acentuada. Embora a paciente tenha sido mantida em acompanhamento e não tenha ocorrido tragédia maior, a falta de centralidade na psicoterapia estruturada manteve certa vulnerabilidade interpessoal e episódios residuais de instabilidade.",
      "opcoes": []
    },
    {
      "id": "desfecho-ruim-abandono",
      "turno": "desfecho",
      "narrativa": "Desfecho desfavorável. A ausência de empatia, as atitudes prescritivas punitivas ou as quebras abruptas na aliança terapêutica atingiram diretamente o medo de rejeição e abandono característicos da paciente. Camilla abandonou o seguimento de saúde mental, retornando ao ciclo de uso nocivo de álcool, crises disfóricas graves e isolamento interpessoal.",
      "opcoes": []
    },
    {
      "id": "desfecho-ruim-iatrogenia",
      "turno": "desfecho",
      "narrativa": "Desfecho com complicações iatrogênicas graves. O erro diagnóstico (confundindo o TP Borderline com Transtorno Bipolar ou Esquizofrenia) somado à prescrição inadequada de polifarmácia pesada e ansiolíticos gerou sedação grave, dependência química de prescrição e internações desnecessárias, agravando o sofrimento e a desestruturação psicossocial de Camilla.",
      "opcoes": []
    },
    {
      "id": "desfecho-negligencia",
      "turno": "desfecho",
      "narrativa": "Desfecho desfavorável por negligência diagnóstica. Atribuir o sofrimento crônico e a instabilidade afetiva severa da paciente a uma mero 'estresse passageiro de término de relacionamento' deixou-a desamparada, resultando em agravamento imediato da crise disfórica e recaída alcoólica importante sem qualquer suporte de segurança.",
      "opcoes": []
    }
  ],
  "noInicialId": "entrevista-inicial",
  "inspiracaoExterna": {
    "titulo": "Borderline Personality Disorder With Atypical Traits in a 30-Year-Old Female: A Case Report.",
    "url": "https://europepmc.org/article/MED/38558669"
  }
};

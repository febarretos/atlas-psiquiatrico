import { CasoSimulador } from "./types";

export const casoPanicoRezadeira: CasoSimulador = {
  "id": "caso-panico-rezadeira",
  "tituloAnedotico": "O Santo, o Demônio e a Taquicardia de Dona Lurdes",
  "diagnosticoRealId": "panico",
  "nos": [
    {
      "id": "entrevista-1",
      "turno": "entrevista",
      "narrativa": "Dona Maria de Lurdes, 54 anos, rezadeira respeitada em sua comunidade, entra no consultório acompanhada pela filha. Ela segura um maço de arruda e gesticula nervosamente. A filha explica, aflita: 'Doutor, minha mãe tá sendo possuída pelo capeta! Do nada, ela começa a gritar, tremer as pernas, diz que a garganta fechou e que o peito tá queimando. O padre da paróquia disse que isso não é coisa do além e mandou a gente vir aqui.' Dona Lurdes intervém, baixinho: 'Eu sinto que vou morrer ou enlouquecer, doutor. Chega num pico em minutos. Fico dias sem sair de casa com medo da próxima vez.'",
      "opcoes": [
        {
          "texto": "Explorar o padrão de início dos episódios, a duração até o pico, a presença de sintomas autonômicos/cognitivos e a esquiva comportamental entre as crises.",
          "consequencia": "Dona Lurdes relata que as crises surgem 'do nada', duram cerca de 10 a 20 minutos e incluem batedeira no peito, falta de ar, tontura, formigamento nas mãos e medo pavoroso de perder o controle. Ela parou de ir à feira livre por medo de passar mal lá.",
          "proximoNoId": "exames-1",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Investigar apenas os sintomas físicos do peito e encaminhar imediatamente para a emergência cardiologia sem questionar sobre ansiedade antecipatória.",
          "consequencia": "A paciente fica ainda mais aterrorizada, convicta de que está prestes a ter um infarto fulminante iminente.",
          "proximoNoId": "exames-2",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Descartar o relato como mera busca de atenção e sugerir que a família a proíba de realizar rezas até que 'aprenda a se controlar'.",
          "consequencia": "A filha fica extremamente ofendida com a insensibilidade e Dona Lurdes começa a hiperventilar na sua frente, temendo ser abandonada pela família.",
          "proximoNoId": "exames-3",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Focar a investigação prioritariamente no conteúdo religioso dos gritos e nos aspectos culturais da prática de rezadeira.",
          "consequencia": "A conversa se prolonga sobre rituais locais, mas pouca informação clínica sobre o início súbito, a evolução dos sintomas físicos e a frequência dos episódios é colhida.",
          "proximoNoId": "exames-2",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "exames-1",
      "turno": "exames",
      "narrativa": "A história clínica é altamente sugestiva de crises paroxísticas de ansiedade e apreensão persistente. No entanto, é fundamental afastar etiologias orgânicas antes de fechar o diagnóstico e pactuar o plano terapêutico com a paciente e sua família.",
      "opcoes": [
        {
          "texto": "Solicitar Holter de 24 horas, ecocardiograma, ressonância magnética de crânio e eletroencefalograma extenso antes de tomar qualquer conduta.",
          "consequencia": "A bateria exaustiva de exames aumenta o custo, atrasa o início do tratamento e reforça a crença da paciente de que tem uma doença física oculta grave.",
          "proximoNoId": "conduta-2",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Solicitar eletrocardiograma (ECG), dosagem de TSH/T4 livre, hemograma e glicemia de jejum para afastar arritmias e hipertireoidismo.",
          "consequencia": "Os exames retornam todos dentro da normalidade. A confirmação de exames normais ajuda a tranquilizar a paciente de que seu coração está saudável.",
          "proximoNoId": "conduta-1",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Atribuir os gritos durante as crises a um quadro psicótico agudo e solicitar tomografia computadorizada urgente com sedação.",
          "consequencia": "A paciente é submetida a um procedimento desnecessário sob estresse extremo, atrasando o diagnóstico correto de um transtorno de ansiedade.",
          "proximoNoId": "conduta-3",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Dispensar a realização de exames complementares alegando que 'sintoma psiquiátrico é evidente' e passar direto para a prescrição.",
          "consequencia": "Embora a suspeita seja correta, pular exames básicos em episódios paroxísticos novos pode negligenciar comorbidades clínicas como hipertireoidismo.",
          "proximoNoId": "conduta-2",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "exames-2",
      "turno": "exames",
      "narrativa": "A paciente aguarda na sala. A investigação clínica foi parcial até o momento e os sintomas continuam trazendo imenso sofrimento funcional a Dona Lurdes.",
      "opcoes": [
        {
          "texto": "Revisar a anamnese para mapear os critérios formais de Transtorno do Pânico e solicitar ECG e TSH para segurança.",
          "consequencia": "Você retoma o foco clínico correto. Os exames clínicos básicos vêm normais e o quadro de Transtorno do Pânico fica bem estabelecido.",
          "proximoNoId": "conduta-1",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Assumir tratar-se unicamente de feocromocitoma e encaminhar para internação endocrinológica imediata.",
          "consequencia": "Encaminhamento equivocado que gera pânico adicional na família e desperdício de recursos.",
          "proximoNoId": "conduta-3",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Encaminhar para endoscopia e ultrassom de abdome total pela queixa de 'queimação no peito/epigástrio' sem pedir exames metabólicos.",
          "consequencia": "Exames sem foco trazem mais gastos e retardo no início da farmacoterapia apropriada.",
          "proximoNoId": "conduta-2",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Dar alta sem exames, orientando tomar chá de camomila nos episódios.",
          "consequencia": "A paciente sai desamparada e apresenta nova crise grave no estacionamento do posto de saúde.",
          "proximoNoId": "conduta-3",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "exames-3",
      "turno": "exames",
      "narrativa": "O clima na consulta ficou tenso devido à abordagem inicial empobrecida. A paciente está assustada e a filha bastante defensiva.",
      "opcoes": [
        {
          "texto": "Prescrever haloperidol intramuscular imediatamente para 'sossegar a agitação' da paciente.",
          "consequencia": "Iatrogenia grave: a paciente desenvolve acatisia e distonia aguda, piorando acentuadamente o terror e a ansiedade.",
          "proximoNoId": "conduta-3",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Solicitar apenas um ECG rápido no posto de saúde para afastar emergência coronariana imediata.",
          "consequencia": "O ECG vem normal, mas a falta de escuta refinada deixa o plano terapêutico vacilante.",
          "proximoNoId": "conduta-2",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Reconhecer o estresse do momento, acolher a paciente de forma empática, colher os critérios de pânico e solicitar ECG e TSH.",
          "consequencia": "Dona Lurdes se acalma ao ser escutada com respeito. Os exames confirmam ausência de alteração orgânica e o diagnóstico é pacificado.",
          "proximoNoId": "conduta-1",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Encaminhar para internação psiquiátrica compulsória por 'comportamento bizarro e gritos'.",
          "consequencia": "Internação inadequada e traumática para um quadro de pânico clássico moldado por contexto cultural.",
          "proximoNoId": "conduta-3",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-1",
      "turno": "conduta",
      "narrativa": "Com os exames normais e o diagnóstico de Transtorno do Pânico estabelecido, é hora de planejar a intervenção terapêutica. A paciente teme ficar 'viciada em remédio tarja preta' e precisa de psicoeducação clara sobre a natureza autolimitada e neurobiológica das crises.",
      "opcoes": [
        {
          "texto": "Iniciar Escitalopram 5 mg/dia com meta de 10 mg/dia em 1 semana e explicar o diagnóstico, mas sem encaminhar para psicoterapia.",
          "consequencia": "Boa escolha farmacológica e titulação correta, embora a ausência de abordagem psicoterápica perca a oportunidade da TCC com exposição interoceptiva.",
          "medicamentoId": "escitalopram",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Iniciar Sertralina 25 mg/dia por 3-7 dias com aumento para 50 mg/dia, realizar psicoeducação sobre alarme falso do corpo, indicar TCC e Clonazepam 0,25 mg se necessário por curto prazo.",
          "consequencia": "A dose inicial baixa previne a exacerbação ansiogênica inicial dos ISRS. A paciente entende a proposta e aceita a prescrição com tranquilidade.",
          "medicamentoId": "sertralina",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever Alprazolam 2 mg três vezes ao dia como monoterapia por tempo indeterminado.",
          "consequencia": "O uso isolado de benzodiazepínico de ação curta em dose alta gera rápido risco de tolerância, ansiedade de rebote entre as doses e não trata o transtorno de base.",
          "medicamentoId": "alprazolam",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Paroxetina 40 mg/dia já na dose inicial, sem desmame ou introdução gradual.",
          "consequencia": "A dose inicial alta de ISRS desencadeia uma crise de hiperativação serotoninérgica e piora intensa da ansiedade nos primeiros dias.",
          "medicamentoId": "paroxetina",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-2",
      "turno": "conduta",
      "narrativa": "O diagnóstico de pânico está traçado, mas o plano farmacológico e a aliança terapêutica ainda precisam ser consolidados com rigor técnico.",
      "opcoes": [
        {
          "texto": "Prescrever Amitriptilina 75 mg/dia à noite como primeira escolha para o pânico.",
          "consequencia": "Tricíclico com forte carga anticolinérgica e sedativa que causa boca seca intensa, taquicardia reflexa e hipotensão ortostática na paciente.",
          "medicamentoId": "amitriptilina",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever apenas Clonazepam 1 mg ao dia de forma contínua sem nenhum antidepressivo ISRS/ISRSN associado.",
          "consequencia": "Proporciona alívio sintomático rápido e temporário, mas falha em prevenir novos ciclos de pânico no longo prazo.",
          "medicamentoId": "clonazepam",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Iniciar Venlafaxina XR 37,5 mg/dia, porém sem alertar a paciente sobre a importância de tomar no mesmo horário nem sobre possíveis náuseas.",
          "consequencia": "A medicação é eficaz, mas a falta de orientação causa susto no aparecimento de náuseas leves nos primeiros dias.",
          "medicamentoId": "venlafaxina",
          "proximoNoId": "evolucao-media",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Prescrever Escitalopram 5 mg/dia por 7 dias, aumentando para 10 mg/dia, associado a psicoeducação sobre os sintomas físicos benignos.",
          "consequencia": "Escolha terapêutica acertada que protege contra a piora inicial da ansiedade e estabelece boa adesão.",
          "medicamentoId": "escitalopram",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "conduta-3",
      "turno": "conduta",
      "narrativa": "Após atritos e condutas truncadas, a paciente se encontra apreensiva. É necessário ajustar a conduta antes que ela abandone o segmento clínico.",
      "opcoes": [
        {
          "texto": "Encaminhar para pronto-socorro psiquiátrico afastando a responsabilidade do acompanhamento ambulatorial.",
          "consequencia": "A paciente peregrina por serviços de emergência sem nenhum plano terapêutico longitudinal.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter antipsicóticos ou sedativos pesados sob justificativa de 'comportamento histriônico'.",
          "consequencia": "Efeitos colaterais graves e persistência completa da fobia e do pânico de base.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Clonazepam 0,5 mg à noite para abrandar os sintomas e reagendar retorno para dali a um mês.",
          "consequencia": "Alívio parcial da insônia, mas as crises diurnas continuam a ocorrer na feira e em casa.",
          "medicamentoId": "clonazepam",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Reavaliar o caso com calma, desculpar-se pelo ruído de comunicação, explicar o Transtorno do Pânico e iniciar Sertralina 25 mg/dia.",
          "consequencia": "A paciente sente segurança com a correção de rumo e concorda em iniciar o antidepressivo em dose baixa.",
          "medicamentoId": "sertralina",
          "proximoNoId": "evolucao-media",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-boa",
      "turno": "evolucao",
      "narrativa": "Dona Lurdes retorna ao consultório após 4 semanas. Ela entra sorridente, sem a arruda na mão. A filha relata: 'Doutor, ela é outra pessoa! Entendeu que o peito acelerado era só um alarme do corpo e não o demônio. Não teve mais nenhuma crise forte e até voltou a rezar nas vizinhas.'",
      "opcoes": [
        {
          "texto": "Suspender o tratamento farmacológico imediatamente considerando que a paciente já está 'completamente curada'.",
          "consequencia": "A interrupção precoce em menos de 6-12 meses de manutenção leva a uma recaída rápida das crises de pânico.",
          "proximoNoId": "desfecho-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter a medicação na dose terapêutica (ex: Sertralina 50 mg/dia), reforçar as estratégias psicoeducacionais e programar desmame do benzodiazepínico de resgate se houver.",
          "consequencia": "A paciente consolida a remissão sintomática total e ganha autonomia para suas atividades habituais.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Manter a medicação em dose subterapêutica inicial (ex: Sertralina 25 mg/dia) por receio de ajustar a dose usual.",
          "consequencia": "Risco de resposta incompleta no longo prazo por manutenção em subdose.",
          "proximoNoId": "desfecho-medio",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Aumentar bruscamente a dose do ISRS para o limite máximo permitido sem que haja sintomas residuais.",
          "consequencia": "Surgimento desnecessário de efeitos colaterais sexuais e gastrointestinais em uma paciente estabilizada.",
          "proximoNoId": "desfecho-medio",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "evolucao-media",
      "turno": "evolucao",
      "narrativa": "Dona Lurdes retorna após 4 semanas. Apresenta melhora parcial: as crises de pânico estão menos intensas e menos frequentes, mas ela ainda sente medo constante de ter novos episódios e evita sair desacompanhada.",
      "opcoes": [
        {
          "texto": "Ajustar o ISRS para a faixa terapêutica otimizada (ex: aumentar Escitalopram para 10-20 mg/dia ou Sertralina para 75-100 mg/dia) e encaminhar para TCC.",
          "consequencia": "A otimização da dosagem e o apoio psicoterápico debelam a ansiedade antecipatória residual.",
          "proximoNoId": "desfecho-bom",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Manter a dose atual do ISRS e prescrever benzodiazepínico fixo em várias tomadas para conter a ansiedade residual.",
          "consequencia": "Melhora os sintomas momentaneamente, mas cria dependência de benzodiazepínicos sem tratar a causa principal.",
          "proximoNoId": "desfecho-medio",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Trocar imediatamente de classe de antidepressivo por considerar falha terapêutica completa antes de 6 semanas.",
          "consequencia": "Troca precoce desnecessária que reinicia o ciclo de adaptação farmacológica sem dar tempo ao tratamento.",
          "proximoNoId": "desfecho-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Dizer que a ansiedade residual é 'falta de fé' e dar alta do acompanhamento médico.",
          "consequencia": "A paciente se sente culpada e desamparada, evoluindo com piora da esquiva agorafóbica.",
          "proximoNoId": "desfecho-ruim",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "evolucao-ruim",
      "turno": "evolucao",
      "narrativa": "Dona Lurdes retorna em péssimas condições. Ela teve exacerbação grave da ansiedade nos primeiros dias de tratamento incorreto, abandonou o remédio e agora passa o dia trancada no quarto com medo de morrer a qualquer momento.",
      "opcoes": [
        {
          "texto": "Acolher com paciência, explicar que a piora inicial foi um efeito adverso e reiniciar o tratamento com ISRS em dose muito baixa (ex: Sertralina 25 mg/dia) acompanhada de psicoeducação.",
          "consequencia": "A paciente compreende o erro anterior, recupera a confiança no tratamento e aceita recomeçar de forma gradual.",
          "proximoNoId": "desfecho-medio",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Trocar para outro ISRS em dose baixa (ex: Escitalopram 5 mg/dia) associado a Clonazepam de resgate pontual nas duas primeiras semanas.",
          "consequencia": "A estratégia de resgate pontual estabiliza os sintomas e permite a titulação segura do novo antidepressivo.",
          "proximoNoId": "desfecho-medio",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Aumentar a dose de sedativos pesados ou associar antipsicóticos sedativos em altas doses.",
          "consequencia": "A paciente fica excessivamente sedada, incapaz de realizar suas atividades de vida diária e sem controle das crises.",
          "proximoNoId": "desfecho-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Encaminhar o caso como refratário e sugerir internação psiquiátrica assustando a família.",
          "consequencia": "Institucionalização desnecessária por má condução ambulatorial de uma patologia altamente tratável.",
          "proximoNoId": "desfecho-ruim",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "desfecho-bom",
      "turno": "desfecho",
      "narrativa": "Desfecho Favorável: Com o diagnóstico correto de Transtorno do Pânico, psicoeducação sensível ao contexto cultural e farmacoterapia de primeira linha bem indicada e titulada (ISRS), Dona Lurdes obteve remissão completa das crises e da esquiva fóbica. Ela retomou suas atividades comunitárias e de rezadeira com plena funcionalidade e qualidade de vida. O acompanhamento mantido por 9 a 12 meses garantirá a prevenção de recaídas.",
      "opcoes": []
    },
    {
      "id": "desfecho-medio",
      "turno": "desfecho",
      "narrativa": "Desfecho Parcial: Dona Lurdes apresentou melhora significativa das crises de pânico agudas, mas ainda carrega ansiedade antecipatória residual ou dependência leve de benzodiazepínicos devido a ajustamentos hesitantes ou falta de psicoterapia focada (TCC). Ela consegue funcionar no dia a dia, mas exige acompanhamento mais longo e reajustes cuidadosos para atingir remissão plena.",
      "opcoes": []
    },
    {
      "id": "desfecho-ruim",
      "turno": "desfecho",
      "narrativa": "Desfecho Desfavorável: Erros na abordagem inicial, iatrogenias farmacológicas (dose inicial excessiva de ISRS ou uso isolado de neurolépticos/sedativos) e falta de aliança terapêutica levaram Dona Lurdes ao agravamento da esquiva agorafóbica e à desconfiança do tratamento psiquiátrico. A paciente permanece restrita ao leito e ao lar, sofrendo com crises recorrentes e prejuízo funcional grave.",
      "opcoes": []
    }
  ],
  "noInicialId": "entrevista-1",
  "inspiracaoExterna": {
    "titulo": "Case Report: An Atypical Presentation of Panic Disorder Masquerading as Possession Trance.",
    "url": "https://europepmc.org/article/MED/35095622"
  }
};

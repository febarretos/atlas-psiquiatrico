import { CasoSimulador } from "./types";

export const oTeoremaDasAntenasDoSeuVanderlei: CasoSimulador = {
  "id": "o-teorema-das-antenas-do-seu-vanderlei",
  "tituloAnedotico": "O Teorema das Antenas do Seu Vanderlei",
  "diagnosticoRealId": "esquizofrenia",
  "nos": [
    {
      "id": "entrevista-1",
      "turno": "entrevista",
      "narrativa": "Vanderlei, 28 anos, entra no consultório com olhar esquivo e braços cruzados, acompanhado de sua irmã, Dona Valéria. Ela relata que há 8 meses ele abandonou o emprego na marcenaria, cobriu as janelas do quarto com papel-alumínio e insiste que o relógio de luz do corredor transmite frequências eletromagnéticas para roubar seus pensamentos. Além disso, fala sozinho e diz ouvir fofocas vindas das tomadas. Vanderlei resmunga: Eles usam as tomadas porque o síndico autorizou a fiação clandestina da minha mente.",
      "opcoes": [
        {
          "texto": "Investigar a linha do tempo detalhada (confirmando mais de 6 meses de sintomas e prejuízo funcional), uso de substâncias e histórico de saúde.",
          "consequencia": "Valéria confirma que o quadro começou há 8 meses sem episódios prévios de humor ou uso de drogas, revelando importante declínio no autocuidado.",
          "proximoNoId": "exames-investigacao-completa",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Confrontar Vanderlei diretamente, afirmando que tomadas não transmitem pensamentos e que sua teoria é fisicamente impossível.",
          "consequencia": "Vanderlei se levanta irritado, acusa você de estar mancomunado com o síndico e recusa-se a continuar falando.",
          "proximoNoId": "exames-investigacao-agressiva",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Diagnosticar imediatamente psicose induzida por maconha e encerrar a entrevista sem investigar a duração dos sintomas ou descartar causas orgânicas.",
          "consequencia": "A irmã fica indignada afirmando que ele nunca usou drogas, e a falta de investigação compromete o raciocínio clínico.",
          "proximoNoId": "exames-investigacao-superficial",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Focar apenas nos detalhes das deliberações sobre o relógio de luz, ignorando a duração total dos sintomas e o histórico prévio.",
          "consequencia": "Vanderlei se empolga explicando a fiação, mas você perde dados essenciais sobre a cronologia e fatores desencadeantes.",
          "proximoNoId": "exames-investigacao-parcial",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "exames-investigacao-completa",
      "turno": "exames",
      "narrativa": "A anamnese detalhada confirma mais de 6 meses de sintomas ativos e residuais com impacto funcional marcante. Para cumprir o Critério E do DSM-5 e descartar etiologias secundárias, você solicita exames laboratoriais (hemograma, TSH, função renal/hepática, eletrólitos, sorologias, toxicológico de urina) e TC de crânio. Todos os resultados retornam estritamente normais.",
      "opcoes": [
        {
          "texto": "Prescrever Olanzapina 5 a 10 mg/dia via oral, orientando a família sobre monitorização metabólica e perfil de efeitos adversos.",
          "consequencia": "O tratamento antipsicótico de primeira linha é iniciado com boa perspectiva de resposta nos sintomas positivos.",
          "medicamentoId": "olanzapina",
          "proximoNoId": "conduta-tratamento-primeira-linha",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever Clozapina 300 mg/dia já no primeiro dia de tratamento para resolver rapidamente o quadro psicótico.",
          "consequencia": "Vanderlei apresenta sedação extrema, hipotensão ortostática e risco grave sem indicação prévia de refratariedade documentada.",
          "medicamentoId": "clozapina",
          "proximoNoId": "conduta-erro-farmacologico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Iniciar Risperidona 1 a 2 mg/dia via oral, prevendo titulação gradual para 2 a 4 mg/dia, associada a psicoeducação familiar.",
          "consequencia": "Vanderlei aceita a medicação inicial sem resistência relevante e a família se sente acolhida com a explicação do plano terapêutico.",
          "medicamentoId": "risperidona",
          "proximoNoId": "conduta-tratamento-primeira-linha",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever Quetiapina 25 mg/dia à noite como dose única e definitiva para tratar a psicose.",
          "consequencia": "A dose prescrita é puramente sedativa/anti-histamínica e subterapêutica para a ação antipsicótica necessária na esquizofrenia.",
          "medicamentoId": "quetiapina",
          "proximoNoId": "conduta-subdose",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "exames-investigacao-parcial",
      "turno": "exames",
      "narrativa": "Você solicitou apenas hemograma e glicemia de jejum, omitindo a triagem toxicológica e a avaliação metabólica/neurológica completa. Os exames básicos vêm sem alterações, mas você ainda não tem certeza absoluta sobre o tempo exato de evolução nem sobre ausência de substâncias.",
      "opcoes": [
        {
          "texto": "Complementar a investigação solicitando o painel toxicológico e iniciar Risperidona 2 mg/dia com retorno em duas semanas.",
          "consequencia": "Você corrige a falha investigativa enquanto já estabelece o tratamento antipsicótico recomendado.",
          "medicamentoId": "risperidona",
          "proximoNoId": "conduta-tratamento-primeira-linha",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Dar alta com prescrição exclusiva de Diazepam 10 mg/dia para acalmar a paranoia sem prescrever antipsicóticos.",
          "consequencia": "A ansiedade reduz discretamente, mas os delírios e alucinações permanecem intactos e o quadro psicótico evolui sem tratamento específico.",
          "medicamentoId": "diazepam",
          "proximoNoId": "conduta-sem-antipsicotico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Haloperidol 20 mg/dia em dose alta imediata para conter as ideias delirantes rapidamente.",
          "consequencia": "Vanderlei desenvolve rigidez muscular intensa e acatisia agoniante poucas horas após as primeiras doses.",
          "medicamentoId": "haloperidol",
          "proximoNoId": "conduta-erro-farmacologico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Aripiprazol 10 mg/dia via oral enquanto aguarda a evolução clínica do paciente.",
          "consequencia": "O antipsicótico atípico é iniciado adequadamente, embora a investigação diagnóstica tenha ficado um pouco lacunar.",
          "medicamentoId": "aripiprazol",
          "proximoNoId": "conduta-tratamento-parcial",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "exames-investigacao-superficial",
      "turno": "exames",
      "narrativa": "A precipitação diagnóstica gerou ruído na relação médico-paciente. Dona Valéria traz exames de sangue recentes de um atendimento de urgência sem alterações relevantes, mas você não realizou o exame físico neurológico adequado nem confirmou os critérios para transtorno psicótico primário.",
      "opcoes": [
        {
          "texto": "Manter a hipótese de uso clandestino de substâncias sem solicitar exames e liberar o paciente sem medicação.",
          "consequencia": "Vanderlei fica sem assistência, os delírios se intensificam e a família fica desamparada.",
          "proximoNoId": "conduta-sem-antipsicotico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Reconhecer a pressa, acolher o paciente, solicitar triagem toxicológica de confirmação e iniciar Olanzapina 10 mg/dia.",
          "consequencia": "A aliança terapêutica é reconstruída e o tratamento de primeira linha para esquizofrenia é corretamente instituído.",
          "medicamentoId": "olanzapina",
          "proximoNoId": "conduta-tratamento-primeira-linha",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever Risperidona 12 mg/dia de início para compensar a falta de diagnóstico preciso com dose elevada.",
          "consequencia": "O paciente desenvolve hiperprolactinemia aguda e sintomas extrapiramidais marcantes devido à dose inicial excessiva.",
          "medicamentoId": "risperidona",
          "proximoNoId": "conduta-erro-farmacologico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Iniciar Paliperidona 6 mg/dia via oral enquanto agenda exames complementares de rotina.",
          "consequencia": "O antipsicótico atípico é iniciado com sucesso, trazendo estabilização inicial apesar do atrito na entrevista.",
          "medicamentoId": "paliperidona",
          "proximoNoId": "conduta-tratamento-parcial",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "exames-investigacao-agressiva",
      "turno": "exames",
      "narrativa": "Devido ao confronto inicial, Vanderlei está mutista e desconfiado no canto da sala. Valéria chora e fornece as informações: 8 meses de isolamento, vozes das tomadas e prejuízo funcional. Exames laboratoriais de rotina foram colhidos na semana anterior e estão normais.",
      "opcoes": [
        {
          "texto": "Desescalar a tensão, oferecer um ambiente calmo, validar o sofrimento do paciente e prescrever Aripiprazol 10 mg/dia.",
          "consequencia": "O clima se acalma, Vanderlei aceita a medicação e inicia-se uma abordagem profilática de menor impacto metabólico.",
          "medicamentoId": "aripiprazol",
          "proximoNoId": "conduta-tratamento-primeira-linha",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Dar alta sugerindo que a família procure um pronto-socorro apenas se ele se tornar violento.",
          "consequencia": "O paciente é desassistido no momento crítico do primeiro episódio/recaída sem intervenção precoce.",
          "proximoNoId": "conduta-sem-antipsicotico",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Quetiapina 300 mg/dia com titulação em etapas para manejar a agitação e os sintomas psicóticos.",
          "consequencia": "A dose adequada para esquizofrenia é atingida gradualmente, reduzindo a paranoia sem causar contenção mecanicista.",
          "medicamentoId": "quetiapina",
          "proximoNoId": "conduta-tratamento-parcial",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Solicitar contenção física imediata e aplicar medicação injetável sedativa sem haver risco iminente de auto ou heteroagressividade.",
          "consequencia": "A experiência é traumatizante para o paciente, que passa a enxergar a equipe médica como parceira do síndico persecutório.",
          "proximoNoId": "conduta-erro-farmacologico",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "conduta-tratamento-primeira-linha",
      "turno": "conduta",
      "narrativa": "O antipsicótico de segunda geração foi bem instituído em dose terapêutica inicial adequada. Na consulta de retorno após 3 semanas, Dona Valéria relata que Vanderlei está mais calmo, parou de falar com as tomadas e aceitou retirar parte do papel-alumínio das janelas. Ele nega efeitos colaterais graves.",
      "opcoes": [
        {
          "texto": "Suspender o antipsicótico alegando que, como as vozes pararam, o tratamento já cumpriu seu papel.",
          "consequencia": "A interrupção precoce provoca recaída psicótica aguda em poucas semanas.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Associar um segundo antipsicótico potente sem aguardar as 4 a 6 semanas recomendadas de teste terapêutico em monoterapia.",
          "consequencia": "A polifarmácia precoce aumenta a carga anticolinérgica e os efeitos colaterais sem ganho comprovado de eficácia.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter a dose terapêutica do antipsicótico, monitorar perfil metabólico/prolactina e encaminhar para intervenções psicossociais (CAPS/TCC).",
          "consequencia": "A conduta combinada consolida a resposta terapêutica e promove a reabilitação funcional sustentada.",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Dobrar a dose do antipsicótico imediatamente, buscando acelerar a remissão total do delírio residual.",
          "consequencia": "O aumento precoce desnecessário gera acatisia leve que deixa Vanderlei irrequieto durante o dia.",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "conduta-tratamento-parcial",
      "turno": "conduta",
      "narrativa": "Na avaliação de retorno após 3 semanas, Vanderlei apresenta melhora discreta. Ele ainda acredita que o relógio de luz monitora seus passos, mas o impacto emocional reduziu. Entretanto, relata inquietação nas pernas que o impede de ficar sentado (acatisia discreta).",
      "opcoes": [
        {
          "texto": "Adicionar um benzodiazepínico em dose alta contínua como única solução para a Inquietação, ignorando o ajuste antipsicótico.",
          "consequencia": "O paciente desenvolve sedação e tolerância ao benzodiazepínico sem resolver a causa primária.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Ajustar a dose do antipsicótico ou associar Propranolol para tratar a acatisia, mantendo a monoterapia e o suporte familiar.",
          "consequencia": "A acatisia melhora sensivelmente, aumentando o conforto e a adesão de Vanderlei ao tratamento.",
          "medicamentoId": "propranolol",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Trocar abruptamente de antipsicótico sem fazer o desmame cruzado adequado.",
          "consequencia": "A transição rápida gera efeito rebote e piora transitória da agitação e dos delírios.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter o mesmo esquema sem tratar a acatisia, orientando o paciente a suportar o desconforto.",
          "consequencia": "Vanderlei começa a pular doses do remédio por conta própria devido ao desconforto motor.",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "conduta-erro-farmacologico",
      "turno": "conduta",
      "narrativa": "A conduta inicial inadequada (dose excessiva, Clozapina sem critérios ou contenção) gerou complicações. Vanderlei retorna extremamente sedado, com sialorreia ou rigidez marcada. Valéria está desesperada achando que o irmão enlouqueceu de vez devido ao remédio.",
      "opcoes": [
        {
          "texto": "Manter a dose alta acreditando que a rigidez e a agitação motora são piora do quadro psicótico primário.",
          "consequencia": "O paciente evolui com piora acentuada dos sintomas extrapiramidais e recusa total de medicação oral.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Adicionar um segundo antipsicótico típico de alta potência para cobrir o que o primeiro não resolveu.",
          "consequencia": "O risco de síndrome neuroléptica maligna ou discinesia tardia aumenta significativamente.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Orientar suspensão de todos os remédios e dar alta sem novo agendamento.",
          "consequencia": "O paciente fica totalmente desamparado e apresenta grave recaída psicótica.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Reconhecer o efeito adverso, reajustar o antipsicótico para dose terapêutica baixa de atípico de 2ª geração e prescrever medicação sintomática.",
          "consequencia": "Os efeitos colaterais regridem e o paciente recupera o bem-estar físico básico, permitindo retomar o tratamento com segurança.",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "conduta-subdose",
      "turno": "conduta",
      "narrativa": "Após 3 semanas usando dose subterapêutica, Vanderlei não apresentou qualquer melhora. Ele trancou o relógio de luz com uma corrente, parou totalmente de tomar banho por medo da água energizada e as alucinações auditivas continuam intensas.",
      "opcoes": [
        {
          "texto": "Titular o antipsicótico para a dose terapêutica efetiva para esquizofrenia (ex: Quetiapina 300-600 mg/dia ou migrar para Risperidona 3 mg/dia).",
          "consequencia": "Com o atrativo da dose antipsicótica real, os sintomas positivos finalmente começam a ceder ao longo das semanas seguintes.",
          "medicamentoId": "quetiapina",
          "proximoNoId": "evolucao-boa",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Manter a dose subterapêutica e associar um antidepressivo ISRS.",
          "consequencia": "O antidepressivo não trata o quadro psicótico primário e os delírios persistem inalterados.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Alegar que a esquizofrenia é incurável e que nada mais pode ser feito em termos farmacológicos.",
          "consequencia": "A família abandona o tratamento médico e o paciente se deteriora em isolamento grave.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Subir a Quetiapina apenas para 50 mg/dia mantendo a dose em nível insuficiente para bloqueio dopaminérgico psicótico.",
          "consequencia": "O paciente continua psicótico e apenas dorme mais horas durante o dia.",
          "medicamentoId": "quetiapina",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "aceitavel"
        }
      ]
    },
    {
      "id": "conduta-sem-antipsicotico",
      "turno": "conduta",
      "narrativa": "Sem antipsicótico prescrito, Vanderlei piora rapidamente. Duas semanas depois, ele ameaçou o síndico com um martelo para tentar arrancar o relógio de luz do prédio. A polícia foi acionada e o trouxe ao pronto-socorro psiquiátrico acompanhado da irmã.",
      "opcoes": [
        {
          "texto": "Recusar o atendimento alegando que o paciente é um caso de polícia e não de psiquiatria.",
          "consequencia": "O paciente é marginalizado e o quadro de esquizofrenia não tratada culmina em desfecho trágico.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Prescrever Risperidona 2 mg/dia e associar acompanhamento psicossocial urgente.",
          "consequencia": "O tratamento antipsicótico é estabelecido com boa perspectiva de estabilização do quadro agressivo/delirante.",
          "medicamentoId": "risperidona",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Prescrever apenas sedativos em altas doses e liberar o paciente assim que acordar.",
          "consequencia": "A sedação passa e Vanderlei retoma o comportamento agressivo motivado pelos delírios não tratados.",
          "proximoNoId": "evolucao-ruim",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Acolher a crise, iniciar antipsicótico atípico em dose adequada (ex: Olanzapina 10 mg/dia ou Risperidona 3 mg/dia) e propor acompanhamento intensivo no CAPS.",
          "consequencia": "A crise é contida sem necessidade de violência e o tratamento adequado é finalmente iniciado.",
          "medicamentoId": "olanzapina",
          "proximoNoId": "evolucao-intermediaria",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-boa",
      "turno": "evolucao",
      "narrativa": "Após 8 semanas de tratamento antipsicótico bem conduzido em dose terapêutica, Vanderlei apresenta remissão completa das alucinações auditivas e distanciamento crítico do delírio. Ele admite: Eu tinha certeza sobre o relógio de luz, mas agora vejo que era coisa da minha cabeça. Ele voltou a tomar banho diariamente e conversa sobre retornar à marcenaria.",
      "opcoes": [
        {
          "texto": "Reduzir a dose do antipsicótico pela metade imediatamente devido à melhora sintomática completa.",
          "consequencia": "A redução prematura da dose favorece o reaparecimento discreto de ruídos e desconfiança.",
          "proximoNoId": "desfecho-regular",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Manter a medicação antipsicótica na dose eficaz de manutenção, vincular a reabilitação funcional e manter acompanhamento metabólico periódico.",
          "consequencia": "Vanderlei consolida a estabilização psíquica, previne recaídas e retoma suas atividades produtivas.",
          "proximoNoId": "desfecho-excelente",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Trocar o antipsicótico atual por outro de classe diferente sem qualquer indicação clínica.",
          "consequencia": "A troca desnecessária gera instabilidade sintomática e desadaptação metabólica.",
          "proximoNoId": "desfecho-regular",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Suspender a medicação e dar alta definitiva, considerando-o curado da esquizofrenia.",
          "consequencia": "A esquizofrenia é uma condição crônica; a suspensão resulta em recaída grave nos meses subsequentes.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "evolucao-intermediaria",
      "turno": "evolucao",
      "narrativa": "Vanderlei teve melhora parcial dos sintomas. As vozes das tomadas tornaram-se sussurros esporádicos, mas ele ainda evita o corredor do prédio e apresenta apatia marcante e lentificação (sintomas negativos/residuais). A irmã relata que ele passa o dia sentado na sala sem iniciativa.",
      "opcoes": [
        {
          "texto": "Aumentar a dose do antipsicótico ao máximo tolerado para tentar apagar os sintomas negativos.",
          "consequencia": "O aumento de dose piora o embotamento e induz impregnação motora sem melhorar a avolia.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Manter o esquema atual sem propor nenhuma intervenção para a reabilitação funcional.",
          "consequencia": "Vanderlei permanece estável da psicose agudizada, mas mantém prejuízo funcional persistente em casa.",
          "proximoNoId": "desfecho-regular",
          "qualidadeDecisao": "aceitavel"
        },
        {
          "texto": "Prescrever polifarmácia com múltiplos antipsicóticos e estimulantes sem fundamentação.",
          "consequencia": "O excesso de medicações provoca toxicidade e piora a adesão do paciente.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Otimizar a abordagem psicossocial (TCC para psicose, treino de habilidades sociais) e considerar antipsicótico com perfil favorável para sintomas negativos se necessário.",
          "consequencia": "O estímulo psicossocial ajuda Vanderlei a superar a avolia e melhorar sua inserção social.",
          "proximoNoId": "desfecho-excelente",
          "qualidadeDecisao": "ideal"
        }
      ]
    },
    {
      "id": "evolucao-ruim",
      "turno": "evolucao",
      "narrativa": "O manejo inadequado resultou em deterioração do caso. Vanderlei está em exacerbação psicótica grave, recusa alimentos achando que estão envenenados pela rede elétrica e apresenta agitação psicomotora intermitente com prejuízo funcional total.",
      "opcoes": [
        {
          "texto": "Associar três antipsicóticos diferentes em doses elevadas simultaneamente.",
          "consequencia": "A polifarmácia massiva causa efeitos colaterais severos e risco elevado de complicações metabólicas e neurológicas.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Iniciar Clozapina sem equipe capacitada nem estrutura para realização do hemograma semanal obrigatório.",
          "consequencia": "O uso irresponsável de Clozapina expõe o paciente a risco de agranulocitose não detectada.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        },
        {
          "texto": "Indicar internação psiquiátrica para estabilização de crise, reavaliar o diagnóstico e reestruturar o esquema com antipsicótico atípico em dose adequada.",
          "consequencia": "A internação protetiva permite ajustar a medicação em ambiente seguro e contornar a crise grave.",
          "proximoNoId": "desfecho-regular",
          "qualidadeDecisao": "ideal"
        },
        {
          "texto": "Encaminhar para internação e dar alta definitiva do acompanhamento ambulatorial.",
          "consequencia": "A falta de continuidade no pós-alta perpetua o ciclo de reinternações psiquiátricas.",
          "proximoNoId": "desfecho-grave",
          "qualidadeDecisao": "problematica"
        }
      ]
    },
    {
      "id": "desfecho-excelente",
      "turno": "desfecho",
      "narrativa": "Desfecho Favorável: O diagnóstico correto de Esquizofrenia (preenchendo os critérios A a E do DSM-5) associado à escolha criteriosa de um antipsicótico de segunda geração em dose adequada promoveu a remissão dos sintomas positivos e o manejo profilático de recaídas. Com a inclusão de intervenções psicossociais e apoio à família, Vanderlei recuperou seu autocuidado, retirou os isolamentos do quarto e retomou gradualmente seu trabalho na marcenaria, mantendo boa qualidade de vida e adesão ao tratamento de longo prazo.",
      "opcoes": []
    },
    {
      "id": "desfecho-regular",
      "turno": "desfecho",
      "narrativa": "Desfecho Parcial: Embora o diagnóstico de Esquizofrenia tenha sido estabelecido e os sintomas psicóticos graves tenham sido controlados, percalços no ajuste de dose, atrasos no manejo de efeitos colaterais ou subutilização de estratégias de reabilitação psicossocial deixaram sequelas funcionais. Vanderlei permanece em casa sem alucinações ativas, porém isolado, com sintomas negativos residuais e dependência contínua dos cuidados da irmã.",
      "opcoes": []
    },
    {
      "id": "desfecho-grave",
      "turno": "desfecho",
      "narrativa": "Desfecho Desfavorável: A sequência de condutas inadequadas — incluindo erros posológicos, falhas no rastreio diferencial, prescrição de superdoses ou omissão de antipsicóticos — culminou na exacerbação dos sintomas psicóticos, graves efeitos extrapiramidais e desestruturação familiar. O paciente necessitou de internação psiquiátrica compulsória devido a risco comportamental decorrente de um quadro psicótico primário que poderia ter sido manuseado com sucesso no ambiente ambulatorial.",
      "opcoes": []
    }
  ],
  "noInicialId": "entrevista-1",
  "inspiracaoExterna": {
    "titulo": "Severe Catatonia in Early-Onset Schizophrenia Successfully Treated With Lorazepam and Aripiprazole in a 16-Year-Old Girl: A Case Report.",
    "url": "https://europepmc.org/article/MED/40772000"
  }
};

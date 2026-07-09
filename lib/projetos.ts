export interface Projeto {
  id: string
  slug: string
  n: string
  tag: 'ESPORTE' | 'EDUCAÇÃO' | 'CUIDADO'
  title: string
  titleLong: string
  desc: string
  descLonga: string
  stats: string
  photo: string
  bg: string
  featured?: boolean
  comoFunciona: string
  faixaEtaria: string
  diasHorarios: string
  conquistas: { titulo: string; descricao: string }[]
}

export const projetos: Projeto[] = [
  {
    id: 'judo',
    slug: 'judo',
    n: '01',
    tag: 'ESPORTE',
    title: 'Judô',
    titleLong: 'Judô — disciplina, equilíbrio e respeito.',
    desc: 'Disciplina, respeito e autodefesa. O carro-chefe da OSRV desde os primeiros dias.',
    descLonga: `O judô foi o primeiro projeto da OSRV. Quando a organização abriu as portas em 2018, o tatame já estava montado — porque os fundadores sabiam que esporte estruturado era o caminho mais rápido para criar vínculos com as crianças do Jardim Renascer. O que começou com doze alunos e um professor voluntário hoje é o maior programa da casa, com mais de sessenta crianças treinando regularmente.

O judô ensina muito mais do que golpes. Cada aula começa e termina com uma reverência — um gesto que os alunos levam para fora do tatame. Os professores relatam mudanças concretas: crianças que chegaram agitadas e sem concentração desenvolveram foco e autocontrole em poucos meses. Pais contam que os filhos passaram a resolver conflitos com palavras em vez de empurrões.

O projeto funciona em parceria com a Federação Mato-grossense de Judô, que cede materiais e apoia a participação dos alunos em competições regionais. Para muitas dessas crianças, o primeiro campeonato foi também a primeira vez que saíram de Cuiabá.`,
    stats: '60+ crianças · 3x por semana',
    photo: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=80',
    bg: 'linear-gradient(160deg, #4A9B3E 0%, #1E4218 100%)',
    featured: true,
    comoFunciona: `As aulas acontecem três vezes por semana, em turmas separadas por faixa etária e nível de experiência — iniciantes, intermediários e avançados. Cada sessão tem duração de 1h30 e segue uma estrutura fixa: aquecimento coletivo, treino técnico de posições e quedas, sparring supervisionado e, nos últimos dez minutos, uma roda de conversa onde os alunos refletem sobre o tema do dia — respeito, esforço, perder com dignidade. A equipe é formada por dois professores faixa-preta e um monitor voluntário, todos com formação em trabalho com crianças em vulnerabilidade social.`,
    faixaEtaria: '7 a 17 anos',
    diasHorarios: `Terças e quintas · 14h às 15h30\nSábados · 09h às 11h`,
    conquistas: [
      {
        titulo: 'Ouro e bronze no Campeonato Regional 2024',
        descricao: 'Três atletas da OSRV participaram do Campeonato Regional de Judô de Mato Grosso. Gabriel, 14 anos, conquistou a medalha de ouro na categoria juvenil; Letícia, 12 anos, ficou com o bronze. Foi a primeira vez que o Jardim Renascer teve representantes no pódio regional.',
      },
      {
        titulo: '500ª criança matriculada',
        descricao: 'Em junho de 2024, o projeto alcançou a marca de 500 crianças já atendidas desde sua fundação. O número foi celebrado com uma gala aberta à comunidade, onde ex-alunos voltaram para mostrar o quanto avançaram.',
      },
      {
        titulo: 'Parceria com a Federação Mato-grossense de Judô',
        descricao: 'A FMJUDO firmou convênio com a OSRV para doação anual de kimonos, tatames e transporte para competições. O acordo garante que nenhuma criança deixe de competir por falta de equipamento.',
      },
    ],
  },
  {
    id: 'xadrez',
    slug: 'xadrez',
    n: '02',
    tag: 'EDUCAÇÃO',
    title: 'Xadrez',
    titleLong: 'Xadrez — raciocínio lógico e estratégia.',
    desc: 'Raciocínio lógico, concentração e tomada de decisão estratégica.',
    descLonga: `O projeto de xadrez nasceu de uma observação simples: as crianças que jogavam xadrez na escola iam melhor em matemática. Em 2020, um professor da rede pública parceiro da OSRV trouxe a ideia de transformar esse jogo em programa estruturado. Começamos com dois tabuleiros emprestados e uma mesa na varanda. Hoje temos sala própria, vinte tabuleiros e uma fila de espera para as turmas.

O que surpreende quem visita as aulas é o silêncio. Crianças que em outros momentos não conseguem ficar quietas por cinco minutos passam quarenta minutos em concentração total, movendo peças, pensando três lances à frente. Os professores chamam isso de "silêncio ativo" — a cabeça trabalhando a mil enquanto o corpo descansa.

Os benefícios vão além do tabuleiro. Estudos que acompanham nossos alunos mostram melhora consistente em interpretação de texto e resolução de problemas matemáticos. Mais do que isso: o xadrez ensina a perder. E aprender a perder com elegância, no Jardim Renascer, é uma habilidade que salva vidas.`,
    stats: '40+ crianças · 2x por semana',
    photo: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=1200&q=80',
    bg: 'linear-gradient(160deg, #2A5C8A 0%, #1a3a5c 100%)',
    comoFunciona: `As aulas são duas vezes por semana, em turmas de até doze alunos — tamanho pequeno para garantir acompanhamento individual. A metodologia divide cada aula em três momentos: teoria (abertura, meio-jogo e final de partida, ensinados progressivamente), prática supervisionada entre os próprios alunos, e análise coletiva de uma partida famosa da história do xadrez. Os mais avançados funcionam como monitores dos iniciantes, reforçando o aprendizado de ambos os lados. O projeto é conduzido por um professor certificado pela Federação Xadrez Mato Grosso.`,
    faixaEtaria: '8 a 17 anos',
    diasHorarios: `Segundas e quartas · 13h30 às 15h`,
    conquistas: [
      {
        titulo: '1º lugar no Torneio Escolar de Xadrez de Cuiabá 2023',
        descricao: 'A equipe da OSRV venceu o Torneio Escolar de Cuiabá na categoria infantil, derrotando times de escolas particulares. Foi a primeira competição do projeto — e a primeira vez que o Jardim Renascer apareceu no pódio de uma disputa intelectual da cidade.',
      },
      {
        titulo: 'Melhora comprovada no desempenho escolar',
        descricao: 'Levantamento realizado com as escolas parceiras mostrou que 78% dos alunos do projeto de xadrez melhoraram as notas em matemática e português após seis meses de participação. Os professores das escolas atribuem ao aumento de foco e à capacidade de raciocínio sequencial.',
      },
      {
        titulo: 'Sala de xadrez inaugurada',
        descricao: 'Em 2023, graças a uma campanha de doação, a OSRV inaugurou uma sala exclusiva para o xadrez, com vinte tabuleiros, mesa de torneio e acervo de livros especializados doados por enxadristas de Cuiabá. É o único espaço desse tipo aberto à comunidade no bairro.',
      },
    ],
  },
  {
    id: 'radicais',
    slug: 'radicais',
    n: '03',
    tag: 'ESPORTE',
    title: 'Esportes Radicais',
    titleLong: 'Esportes Radicais — superação e trabalho em equipe.',
    desc: 'Slackline, skate e escalada incentivam superação de limites e trabalho em equipe.',
    descLonga: `O projeto de esportes radicais foi criado para alcançar os adolescentes que não se identificam com esportes coletivos tradicionais. Slackline, skate e escalada têm algo em comum: exigem coragem, paciência e uma relação honesta com o próprio limite. Quando um adolescente de quinze anos consegue atravessar uma fita de slackline pela primeira vez depois de vinte tentativas, ele aprende algo que nenhuma aula teórica ensina.

O projeto funciona no espaço externo da OSRV e em uma área de escalada adaptada construída pelos próprios voluntários em 2022. O skate ganhou uma mini pista doada por uma empresa local, e o slackline é montado entre as árvores do quintal toda semana. A informalidade é intencional — esses esportes têm uma cultura própria de acolhimento e do erro como parte do processo.

O que a equipe percebeu ao longo do tempo é que os alunos mais resistentes a outros projetos são exatamente os que mais se engajam aqui. O esporte radical tem um poder de conexão com adolescentes que passaram por situações difíceis — porque respeita o ritmo de cada um sem cobrar uniformidade.`,
    stats: '35+ crianças · 1x por semana',
    photo: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=1200&q=80',
    bg: 'linear-gradient(160deg, #8B4513 0%, #5c2d0a 100%)',
    comoFunciona: `As atividades acontecem aos sábados, em blocos rotativos de 45 minutos por modalidade — os alunos passam por slackline, skate e escalada na mesma tarde. A rotação garante exposição a todas as modalidades antes de o aluno escolher em qual quer se aprofundar. Cada modalidade tem um instrutor responsável, todos com certificação em esporte adaptado ou experiência comprovada. A regra mais importante do projeto: ninguém é obrigado a tentar nada. O ritmo é do aluno. Os instrutores fazem o papel de incentivadores, não de cobradores.`,
    faixaEtaria: '10 a 17 anos',
    diasHorarios: `Sábados · 08h às 11h`,
    conquistas: [
      {
        titulo: 'Mini pista de skate inaugurada',
        descricao: 'Em 2022, a empresa Radical Sports MT doou materiais para a construção de uma mini pista de skate no espaço da OSRV. A obra foi feita por voluntários e pelos próprios adolescentes do projeto, que ajudaram a pintar e montar as rampas. Hoje é um dos pontos de encontro do bairro.',
      },
      {
        titulo: 'Apresentação no Festival de Skate de Cuiabá',
        descricao: 'Em outubro de 2023, seis alunos do projeto foram convidados a se apresentar no Festival de Skate de Cuiabá, no Parque Mãe Bonifácia. Foi a primeira exposição pública do grupo e gerou cobertura em dois portais locais de notícias.',
      },
      {
        titulo: 'Redução de evasão entre adolescentes',
        descricao: 'O projeto de esportes radicais tem o menor índice de evasão da OSRV entre alunos de 14 a 17 anos — faixa etária historicamente difícil de manter engajada. Em 2023, 91% dos adolescentes que iniciaram o semestre terminaram.',
      },
    ],
  },
  {
    id: 'educacao',
    slug: 'educacao',
    n: '04',
    tag: 'EDUCAÇÃO',
    title: 'Alfabetização e Letramento',
    titleLong: 'Alfabetização e letramento matemático.',
    desc: 'Reforço escolar que fortalece as bases e abre portas para o conhecimento.',
    descLonga: `Quando a OSRV começou a receber crianças para os outros projetos, percebemos algo preocupante: várias delas chegavam com dificuldades sérias de leitura e cálculo, mesmo já estando no ensino fundamental. A escola pública do bairro faz o que pode, mas turmas de 35 alunos não permitem o acompanhamento individualizado que essas crianças precisam. Foi assim que nasceu o projeto de alfabetização — para ser o suporte que a escola sozinha não consegue dar.

O projeto atende crianças em dois eixos principais: alfabetização para as que ainda não dominam a leitura e escrita, e letramento matemático para as que chegaram ao 4º ou 5º ano sem compreender operações básicas. O trabalho é feito em pequenos grupos, com atividades lúdicas, histórias, jogos de números e muita repetição qualificada. Os monitores são selecionados entre os próprios jovens do bairro que passaram pelos projetos da OSRV e hoje cursam ensino superior.

O impacto é mensurável. Em parceria com as escolas, fazemos acompanhamento semestral do desempenho de cada criança. Os dados mostram que alunos acompanhados pela OSRV têm taxa de reprovação 60% menor do que a média do bairro.`,
    stats: '70+ crianças · 4x por semana',
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    bg: 'linear-gradient(160deg, #D4A017 0%, #8B6914 100%)',
    comoFunciona: `O projeto funciona de segunda a quinta-feira, com turmas de no máximo oito crianças por monitor. A separação das turmas é feita por nível de aprendizagem, não por idade — uma criança de dez anos pode estar na mesma turma que uma de oito se os dois têm o mesmo ponto de partida. Cada sessão dura 1h30 e combina atividades estruturadas (leitura em voz alta, exercícios de interpretação, problemas matemáticos contextualizados) com momentos de jogo e criação. Uma vez por mês, cada criança recebe uma avaliação informal que permite ajustar o ritmo e o conteúdo ao progresso individual.`,
    faixaEtaria: '6 a 14 anos',
    diasHorarios: `Segundas a quintas · 13h às 14h30`,
    conquistas: [
      {
        titulo: 'Taxa de reprovação 60% menor',
        descricao: 'Acompanhamento realizado com escolas parceiras em 2023 mostrou que crianças atendidas pelo projeto de alfabetização têm taxa de reprovação 60% menor do que a média do bairro. O dado foi apresentado na Secretaria Municipal de Educação de Cuiabá como modelo de intervenção complementar.',
      },
      {
        titulo: 'Maria Eduarda, da analfabeta à leitora voraz',
        descricao: 'Maria Eduarda entrou no projeto aos nove anos sem reconhecer todas as letras do alfabeto. Dezoito meses depois, leu o primeiro livro inteiro — "A Menina do Narizinho Arrebitado" — para a turma, sem parar. Hoje tem doze anos, frequenta a biblioteca da OSRV toda semana e quer ser professora.',
      },
      {
        titulo: 'Programa reconhecido pela SEMED Cuiabá',
        descricao: 'Em 2024, a Secretaria Municipal de Educação de Cuiabá incluiu a OSRV no mapa de organizações parceiras da rede, facilitando o fluxo de informações sobre os alunos atendidos e abrindo caminho para captação de recursos públicos municipais.',
      },
    ],
  },
  {
    id: 'yoga',
    slug: 'yoga',
    n: '05',
    tag: 'CUIDADO',
    title: 'Yoga',
    titleLong: 'Yoga — consciência corporal e equilíbrio emocional.',
    desc: 'Consciência corporal, respiração e equilíbrio emocional para crianças e adolescentes.',
    descLonga: `O projeto de yoga surgiu de uma demanda das próprias crianças — ou melhor, dos seus corpos. As professoras dos outros projetos notavam que muitas crianças chegavam tensas, com queixas de dor de cabeça, dificuldade de respirar fundo, incapacidade de ficar em silêncio por um minuto sequer. A yoga entrou como resposta a isso: uma prática que não exige competição, não tem certo ou errado, e ensina a habitar o próprio corpo com gentileza.

As aulas são conduzidas por uma instrutora formada em yoga infantil e adolescente, com adaptações para o contexto de vulnerabilidade social. Isso significa que as práticas levam em conta traumas, dificuldades de concentração e resistências comuns em crianças que cresceram em ambientes de estresse crônico. Nada é forçado. A instrução é sempre em linguagem de convite, não de ordem.

O que mais surpreende os coordenadores é o quanto as técnicas de respiração e atenção plena se espalham para fora das aulas. Crianças que aprenderam a respirar antes de reagir em uma situação de raiva estão levando isso para casa, para a escola, para o tatame. A yoga virou ferramenta de regulação emocional que atravessa todos os outros projetos da OSRV.`,
    stats: '30+ crianças · 2x por semana',
    photo: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80',
    bg: 'linear-gradient(160deg, #6B4C9A 0%, #3d2a5c 100%)',
    comoFunciona: `As aulas acontecem duas vezes por semana, em turmas separadas por faixa etária — crianças de 7 a 11 anos e adolescentes de 12 a 17 anos, porque as abordagens são bem distintas. Cada aula tem 50 minutos e segue uma sequência: chegada e escuta (como cada um está chegando hoje), prática de posturas adaptadas, exercício de respiração consciente e encerramento em silêncio. Os materiais — tapetes, blocos e faixas — foram doados por estúdios de yoga de Cuiabá que se tornaram parceiros do projeto. Não é necessário ter roupas específicas nem experiência anterior.`,
    faixaEtaria: '7 a 17 anos',
    diasHorarios: `Terças · 15h30 às 16h20\nSextas · 15h30 às 16h20`,
    conquistas: [
      {
        titulo: 'Parceria com estúdios de Cuiabá',
        descricao: 'Quatro estúdios de yoga de Cuiabá formalizaram parceria com a OSRV em 2023, doando materiais e cedendo instrutoras voluntárias para aulas mensais especiais. A rede garante continuidade do projeto mesmo em períodos de restrição orçamentária.',
      },
      {
        titulo: 'Yoga integrada ao programa de saúde mental',
        descricao: 'A equipe de psicologia da OSRV passou a indicar sistematicamente o projeto de yoga para crianças em acompanhamento terapêutico. Em avaliação interna, 82% das crianças que fazem as duas atividades em paralelo apresentam melhora mais rápida na regulação emocional do que as que fazem apenas o acompanhamento psicológico.',
      },
      {
        titulo: 'Apresentação no Dia Internacional do Yoga',
        descricao: 'Em 21 de junho de 2024, alunos do projeto se apresentaram na Praça Alencastro, no centro de Cuiabá, como parte das celebrações do Dia Internacional do Yoga. Foi a primeira vez que crianças do Jardim Renascer protagonizaram um evento público no centro da cidade.',
      },
    ],
  },
  {
    id: 'psicologia',
    slug: 'psicologia',
    n: '06',
    tag: 'CUIDADO',
    title: 'Acompanhamento Psicológico',
    titleLong: 'Acompanhamento psicológico — escuta e cuidado.',
    desc: 'Escuta individual e em grupo, em parceria com profissionais locais.',
    descLonga: `O acompanhamento psicológico é o projeto mais silencioso da OSRV — e talvez o mais importante. Muitas das crianças que chegam até nós carregam histórias que nenhuma criança deveria carregar: luto precoce, violência doméstica, abandono, exposição a situações de risco. O esporte e a educação fazem muito, mas alguns nós só se resolvem com escuta qualificada e espaço seguro para falar.

O projeto funciona com psicólogas voluntárias e estagiárias supervisionadas de duas universidades parceiras em Cuiabá. O atendimento é feito em dois formatos: individual, para casos com demandas específicas encaminhadas pelas equipes dos outros projetos ou pelas próprias famílias; e grupal, com encontros semanais temáticos onde adolescentes conversam sobre identidade, pertencimento, futuro e saúde emocional.

A escuta não para na criança. O projeto inclui orientação a famílias — encontros mensais onde pais e responsáveis recebem suporte para lidar com situações de conflito, comunicação e limites em casa. Acreditamos que cuidar da criança sem cuidar do ambiente onde ela vive tem alcance limitado.`,
    stats: '50+ crianças · agendamento contínuo',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
    bg: 'linear-gradient(160deg, #2A8A6B 0%, #1a5c44 100%)',
    comoFunciona: `Os atendimentos individuais são agendados mediante encaminhamento interno (de outros projetos ou da coordenação) ou por solicitação direta da família. Cada criança tem de quatro a oito sessões iniciais, com reavaliação ao final para decidir continuidade. Os grupos terapêuticos acontecem às sextas-feiras com turmas fixas de oito adolescentes, seguindo um ciclo temático de doze semanas. A equipe é formada por duas psicólogas supervisoras e quatro estagiárias do último ano de psicologia de universidades parceiras. Todos os atendimentos são sigilosos e registrados em prontuário próprio da OSRV.`,
    faixaEtaria: '6 a 17 anos',
    diasHorarios: `Atendimentos individuais · Segunda a sexta, horários agendados\nGrupos terapêuticos · Sextas · 14h às 15h30\nOrientação a famílias · Última sábado do mês · 09h às 11h`,
    conquistas: [
      {
        titulo: 'Parceria com UFMT e UniCuiabá',
        descricao: 'Em 2022, a OSRV firmou convênio de estágio supervisionado com os cursos de psicologia da UFMT e da UniCuiabá. O acordo garante presença contínua de estagiárias sob supervisão, ampliando a capacidade de atendimento sem custo adicional para a organização.',
      },
      {
        titulo: '200 famílias orientadas',
        descricao: 'Desde 2021, os encontros mensais de orientação a famílias já alcançaram mais de 200 responsáveis. O programa é hoje considerado pelos coordenadores como um dos fatores que mais contribuem para a permanência das crianças nos projetos — famílias mais informadas apoiam mais a participação dos filhos.',
      },
      {
        titulo: 'Caso João Pedro: do silêncio à voz',
        descricao: 'João Pedro, 11 anos, chegou à OSRV encaminhado pela escola após meses sem falar em aula. Após seis meses de acompanhamento individual e participação nos grupos temáticos, voltou a se comunicar, fez amizades e hoje é um dos alunos mais ativos do projeto de xadrez. A história foi compartilhada (com autorização da família) em seminário de psicologia social em Cuiabá.',
      },
    ],
  },
]

export function getProjetoBySlug(slug: string): Projeto | undefined {
  return projetos.find(p => p.slug === slug)
}

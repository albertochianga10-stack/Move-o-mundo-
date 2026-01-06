
import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'O Investidor Inteligente',
    author: 'Benjamin Graham',
    recommendedBy: ['Warren Buffett'],
    coverUrl: 'https://images.unsplash.com/photo-1592487337982-d1009f58a465?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'O guia definitivo sobre investimento em valor, focado em segurança e análise fundamentalista.',
    predefinedSummary: {
      introduction: "Publicado originalmente em 1949, este livro é a 'Bíblia' do investimento em valor. Benjamin Graham, o mentor de Warren Buffett, estabelece os fundamentos psicológicos e analíticos para o investidor de longo prazo.",
      mainContent: "O conceito central é a distinção entre 'investimento' e 'especulação'. Graham introduz a figura do 'Sr. Mercado', uma metáfora para as oscilações irracionais da bolsa, e o conceito de 'Margem de Segurança' — comprar ativos por um preço significativamente abaixo do seu valor intrínseco.",
      lessons: "1. Nunca confunda preço com valor.\n2. Foque no longo prazo e ignore o ruído diário.\n3. Entenda que o mercado serve para te informar preços, não para te dar conselhos.\n4. Mantenha uma disciplina rigorosa na alocação de ativos.",
      caseStudies: "Graham detalha como investidores que mantiveram a calma durante a quebra de 1929 e focaram em empresas com ativos tangíveis sólidos conseguiram não apenas sobreviver, mas prosperar no decênio seguinte.",
      criticalAnalysis: "Embora alguns métodos quantitativos de Graham (como o número de Graham) precisem de ajuste para a economia digital de hoje, a filosofia de investir com margem de segurança permanece infalível.",
      billionaireConnection: "Warren Buffett afirma que os capítulos 8 (Sr. Mercado) e 20 (Margem de Segurança) são os textos mais importantes já escritos para quem deseja ficar rico na bolsa.",
      finalSummary: "Não tente prever o futuro. Em vez disso, proteja-se contra ele comprando empresas sólidas a preços baixos.",
      recommendations: "Security Analysis (Graham) e Ações Comuns, Lucros Extraordinários (Philip Fisher)."
    }
  },
  {
    id: '4',
    title: 'Princípios',
    author: 'Ray Dalio',
    recommendedBy: ['Bill Gates', 'Tony Robbins'],
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'As regras de vida e trabalho que levaram Dalio a criar a maior gestora de fundos do mundo.',
    predefinedSummary: {
      introduction: "Ray Dalio divide sua sabedoria em princípios de vida e de trabalho, baseados na sua experiência fundando a Bridgewater Associates. Ele vê a vida como uma máquina que pode ser otimizada.",
      mainContent: "A ideia central é a 'Verdade Radical' e a 'Transparência Radical'. Para Dalio, o progresso vem de enfrentar a realidade, mesmo que doa, e aprender com os erros através de um processo sistemático.",
      lessons: "1. Errar é natural, não aprender com o erro é imperdoável.\n2. Crie sistemas para tomar decisões baseadas em mérito (Meritocracia de Ideias).\n3. Use o processo de 5 etapas para conseguir o que quer na vida.",
      caseStudies: "Dalio descreve como a Bridgewater quase faliu nos anos 80 por uma aposta errada dele, e como essa humilhação o levou a criar sistemas que eliminam o viés individual.",
      criticalAnalysis: "O livro é extremamente prático, embora a aplicação de 'transparência radical' possa ser culturalmente desafiadora em empresas tradicionais.",
      billionaireConnection: "Bilionários como Bill Gates elogiam o livro pela sua abordagem de engenharia aplicada ao sucesso humano.",
      finalSummary: "Evolua ou morra. A dor + reflexão = progresso.",
      recommendations: "A Ordem Mundial em Transformação (Ray Dalio) e Antifrágil (Nassim Taleb)."
    }
  },
  {
    id: '11',
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert Kiyosaki',
    recommendedBy: ['Empreendedores', 'Investidores'],
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'O clássico que ensina a diferença entre ativos e passivos e como fazer o dinheiro trabalhar para você.',
    predefinedSummary: {
      introduction: "Este livro quebrou o paradigma de que 'casa própria é um investimento' e ensinou as massas a pensar como os donos de capital, não como empregados.",
      mainContent: "A principal tese é a alfabetização financeira. Kiyosaki define Ativo como algo que coloca dinheiro no seu bolso e Passivo como algo que tira dinheiro do seu bolso. O objetivo é acumular ativos até que sua renda passiva pague seu estilo de vida.",
      lessons: "1. Os ricos não trabalham pelo dinheiro; eles fazem o dinheiro trabalhar para eles.\n2. Não é quanto dinheiro você ganha, é quanto você mantém.\n3. Sua mente é seu ativo mais poderoso.",
      caseStudies: "A história contrastante entre seu pai biológico (Pai Pobre, funcionário público) e o pai de seu amigo (Pai Rico, empreendedor) ilustra como o mindset molda o destino financeiro.",
      criticalAnalysis: "Embora criticado por simplificar demais questões fiscais, o impacto motivacional e a mudança de perspectiva que ele gera são inestimáveis.",
      billionaireConnection: "Serve como porta de entrada para quase todos os grandes investidores imobiliários e empreendedores self-made.",
      finalSummary: "Saia da corrida dos ratos focando em comprar ativos, não passivos de luxo.",
      recommendations: "O Quadrante de Fluxo de Caixa (Kiyosaki) e O Homem Mais Rico da Babilônia."
    }
  },
  {
    id: '2',
    title: 'Poor Charlie’s Almanack',
    author: 'Charlie Munger',
    recommendedBy: ['Bill Gates', 'Warren Buffett'],
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'Sabedoria, sagacidade e os famosos modelos mentais do sócio de Warren Buffett.'
  },
  {
    id: '3',
    title: 'Business Adventures',
    author: 'John Brooks',
    recommendedBy: ['Bill Gates', 'Warren Buffett'],
    coverUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'Histórias atemporais sobre a natureza humana no mundo dos negócios.'
  },
  {
    id: '5',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    recommendedBy: ['Bill Gates', 'Mark Zuckerberg'],
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    shortDescription: 'Como as crenças e mitos criados pelos humanos permitiram a cooperação em larga escala.'
  }
];
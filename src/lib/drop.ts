export const DROP = {
  name: "DROP 001 · PRIMEIRA KORRERIA",
  slug: "drop-001-primeira-korreria",
  totalMedals: 70,
  soldMedals: 37,

  lots: [
    {
      id: 1,
      name: "FUNDADOR",
      price: 74.9,
      rangeStart: 1,
      rangeEnd: 30,
      active: true,
      label: "LOTE ATUAL",
    },
    {
      id: 2,
      name: "LOTE 2",
      price: 84.9,
      rangeStart: 31,
      rangeEnd: 55,
      active: false,
      label: "EM BREVE",
    },
    {
      id: 3,
      name: "LOTE FINAL",
      price: 94.9,
      rangeStart: 56,
      rangeEnd: 70,
      active: false,
      label: "EM BREVE",
    },
  ],

  currentLot: {
    name: "FUNDADOR",
    price: 74.9,
    rangeStart: 1,
    rangeEnd: 30,
  },

  founders: [
    { slot: 1, name: "Lucas M.", sold: true },
    { slot: 2, name: "Bruna S.", sold: true },
    { slot: 3, name: "Rafael T.", sold: true },
    { slot: 4, name: "Camila R.", sold: true },
    { slot: 5, name: "João P.", sold: true },
    { slot: 6, name: "Ana L.", sold: true },
    { slot: 7, name: "Pedro H.", sold: true },
    { slot: 8, name: "Mariana F.", sold: true },
    { slot: 9, name: "Thiago B.", sold: true },
    { slot: 10, name: "Juliana K.", sold: true },
    { slot: 11, name: "Felipe D.", sold: true },
    { slot: 12, name: "Larissa N.", sold: true },
    { slot: 13, name: "Gustavo A.", sold: true },
    { slot: 14, name: "Isabela C.", sold: true },
    { slot: 15, name: "Diego V.", sold: true },
    { slot: 16, name: "Fernanda O.", sold: true },
    { slot: 17, name: "Mateus G.", sold: true },
    { slot: 18, name: null, sold: false },
    { slot: 19, name: null, sold: false },
    { slot: 20, name: null, sold: false },
    { slot: 21, name: null, sold: false },
    { slot: 22, name: null, sold: false },
    { slot: 23, name: null, sold: false },
    { slot: 24, name: null, sold: false },
    { slot: 25, name: null, sold: false },
    { slot: 26, name: null, sold: false },
    { slot: 27, name: null, sold: false },
    { slot: 28, name: null, sold: false },
    { slot: 29, name: null, sold: false },
    { slot: 30, name: null, sold: false },
  ],

  faq: [
    {
      question: "Qual é o prazo de envio da medalha?",
      answer:
        "As medalhas serão enviadas em até 30 dias úteis após o encerramento do drop. Você receberá o código de rastreio por e-mail assim que o envio for realizado.",
    },
    {
      question: "E se eu não completar o desafio?",
      answer:
        "Você tem 30 dias corridos a partir da ativação para completar a distância escolhida (5K, 10K ou 21K). Caso não complete no prazo, a medalha é enviada mesmo assim — ela já é sua.",
    },
    {
      question: "Não tenho Strava, posso participar?",
      answer:
        "A validação oficial é feita pelo Strava de forma automática. Se você não usa Strava, pode enviar um print de outro app (Garmin, Nike Run Club, etc.) para validação manual pela nossa equipe.",
    },
    {
      question: "Posso pedir reembolso?",
      answer:
        "Sim. Você pode solicitar reembolso integral em até 7 dias após a compra, desde que o desafio ainda não tenha sido ativado. Após a ativação, não é possível cancelar.",
    },
    {
      question: "Como funciona a numeração das medalhas?",
      answer:
        "Cada medalha é numerada de 001/070 a 070/070, seguindo a ordem de compra. Quem comprar primeiro garante os números mais baixos. A numeração é gravada na medalha e não pode ser alterada.",
    },
  ],

  medalSpecs: [
    "Zamac premium · 10 cm de diâmetro",
    "Acabamento preto fosco com relevo em 2 níveis",
    "Numerada individualmente — 001/070 a 070/070",
    "Fita azul royal com trava de segurança",
  ],

  steps: [
    {
      number: "01",
      title: "ESCOLHA SUA DISTÂNCIA",
      description: "5K, 10K ou 21K — você decide o nível do desafio.",
    },
    {
      number: "02",
      title: "CORRA ONDE QUISER",
      description: "Na rua, trilha, esteira. Qualquer lugar, qualquer hora.",
    },
    {
      number: "03",
      title: "VALIDE PELO STRAVA",
      description: "Conecte seu Strava e a validação é automática.",
    },
    {
      number: "04",
      title: "RECEBA EM CASA",
      description: "Sua medalha numerada chega na porta com frete incluso.",
    },
  ],
} as const;

export type Drop = typeof DROP;
export type Lot = (typeof DROP.lots)[number];
export type Founder = (typeof DROP.founders)[number];
export type FaqItem = (typeof DROP.faq)[number];

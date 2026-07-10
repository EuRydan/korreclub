export const DROP = {
  name: "DROP 001 · PRIMEIRA KORRERIA",
  slug: "drop-001-primeira-korreria",
  totalMedals: 70,

  steps: [
    {
      number: "01",
      title: "ESCOLHA O SEU DESAFIO",
      description: "",
    },
    {
      number: "02",
      title: "ACOMPANHE SEU PROGRESSO",
      description:
        "Use qualquer rastreador de atividades físicas ou insira sua atividade manualmente no aplicativo Korreclub para ver seu progresso em tempo real e descobrir os segredos exclusivos do desafio ao longo do caminho.",
    },
    {
      number: "03",
      title: "REGISTRE SUA ATIVIDADE",
      description:
        "Após completar, envie um print do resultado do seu app de corrida (Strava, Nike Run, Garmin, Apple Watch, etc.) no nosso formulário.",
      hasButton: true,
      buttonLabel: "ABRIR FORMULÁRIO",
      buttonHref: "#formulario",
    },
    {
      number: "04",
      title: "RECEBA SEU KIT EM CASA",
      description:
        "Em até 7 dias úteis após a validação, o seu kit com medalha + camiseta (quando aplicável) sai para envio. Você recebe o código de rastreio por e-mail para acompanhar a entrega.",
    },
  ],

  faq: [
    {
      question: "Qual é o prazo de envio da medalha?",
      answer:
        "As medalhas serão enviadas em até 7 dias úteis após a validação do seu desafio. Você receberá o código de rastreio por e-mail assim que o envio for realizado.",
    },
    {
      question: "E se eu não completar o desafio?",
      answer:
        "Você tem 30 dias corridos a partir da ativação para completar a distância escolhida. Caso não complete no prazo, a medalha é enviada mesmo assim — ela já é sua.",
    },
    {
      question: "Não tenho Strava, posso participar?",
      answer:
        "Sim! A validação pode ser feita enviando um print de qualquer outro app (Garmin, Nike Run Club, Apple Watch, etc.) no formulário.",
    },
    {
      question: "Posso pedir reembolso?",
      answer:
        "Sim. Você pode solicitar reembolso integral em até 7 dias após a compra, desde que o desafio ainda não tenha sido ativado. Após a ativação, não é possível cancelar.",
    },
    {
      question: "Como funciona a numeração das medalhas?",
      answer:
        "Cada medalha do primeiro lote é numerada (ex: 001/070), seguindo a ordem de compra. Quem comprar primeiro garante os números mais baixos.",
    },
  ],
} as const;

export type Drop = typeof DROP;
export type FaqItem = (typeof DROP.faq)[number];

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
} as const;

export type Drop = typeof DROP;

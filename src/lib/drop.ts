export const DROP = {
  name: "DROP 001 · PRIMEIRA KORRERIA",
  slug: "drop-001-primeira-korreria",
  totalMedals: 70,

  steps: [
    {
      number: "01",
      title: "ESCOLHA SUA DISTÂNCIA",
      description: "3Km, 5Km, 10Km ou 21Km — você decide o nível do desafio.",
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

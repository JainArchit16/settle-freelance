// Original interfaces (for reference):
// ServiceFaq: { question: string, answer: string }
// ServiceBenefit: { title: string, description: string }
// ServiceProcessStep: { title: string, description: string }
// ServicePricing: { title: string, price: string, description: string, features: string[], recommended?: boolean }
// Service: {
//    id: string,
//    slug: string,
//    title: string,
//    shortTitle: string,
//    description: string,
//    icon: any,
//    color: string,
//    heroImage: string,
//    benefits: ServiceBenefit[],
//    process: ServiceProcessStep[],
//    faqs: ServiceFaq[],
//    pricing: ServicePricing[]
// }

export const services = [
  {
    id: "personal-loan",
    slug: "personal-loan",
    title: "Personal Loan Settlement",
    shortTitle: "Personal Loan",
    description:
      "We aim at getting the best possible Settlement plan from the creditor(s) and repaying the amount decided in the Settlement plan. The Settlement amount is an amount that is more feasible than the actual amount owed to the creditor(s).",
    icon: "Wallet",
    color: "from-green-500 to-emerald-500",
    heroImage: "/services/personal-loan-hero.svg",
  },
  {
    id: "credit-card",
    slug: "credit-card",
    title: "Credit Card Loan Settlement",
    shortTitle: "Credit Card",
    description:
      "Credit card debt accrues a higher rate of interest and other related charges making it difficult to repay the debt. These extra interest charges result in an increase in debt amount along with financial stress.",
    icon: "CreditCard",
    color: "from-blue-500 to-cyan-500",
    heroImage: "/services/credit-card-hero.svg",
  },
  {
    id: "anti-harassment",
    slug: "anti-harassment",
    title: "Anti-Harassment Protection",
    shortTitle: "Anti-Harassment",
    description:
      "Harassment by recovery agents is quite common in India, in spite of several Supreme Court judgments and RBI guidelines prohibiting harassment of borrowers. Read on to know how we can help with our Anti-harassment Service!",
    icon: "Shield",
    color: "from-teal-500 to-emerald-500",
    heroImage: "/services/anti-harassment-hero.svg",
  },
  {
    id: "credit-score",
    slug: "credit-score",
    title: "Credit Score Builder",
    shortTitle: "Credit Score",
    description:
      "Are you asking yourself the question of how to improve your CIBIL score after loan Settlement?",
    icon: "Shield",
    color: "from-teal-500 to-emerald-500",
    heroImage: "/services/anti-harassment-hero.svg",
  },
  {
    id: "home-loan",
    slug: "home-loan",
    title: "Home Loan Settlement",
    shortTitle: "Home Loan",
    description:
      "You can benefit from a decrease in your EMI as well as cheaper interest rates. Most Importantly it eases your financial burden, giving you peace of mind.",
    icon: "Home",
    color: "from-purple-500 to-violet-500",
    heroImage: "/services/home-loan-hero.svg",
  },
  {
    id: "vehicle-loan",
    slug: "vehicle-loan",
    title: "Vehicle Loan Settlement",
    shortTitle: "Vehicle Loan",
    description:
      "A vehicle loan Settlement is the total amount needed to settle, or completely payoff an existing vehicle loan. Vehicle loan Settlement is another term for what is commonly referred to as the payoff amount. vehicle loan Settlements are normally time-sensitive quotations and the amount of a Settlement can vary from day to day.",
    icon: "Car",
    color: "from-orange-500 to-amber-500",
    heroImage: "/services/vehicle-loan-hero.svg",
  },
  {
    id: "education-loan",
    slug: "education-loan",
    title: "Education Loan Settlement",
    shortTitle: "Education Loan",
    description:
      "Education loan Settlement refers to the process of negotiating with a lender to reach an agreement on the repayment terms of an education loan. When borrowers encounter financial difficulties and become unable to fulfil their loan obligations, they may explore options for loan Settlement to amicably resolve their debt.",
    icon: "GraduationCap",
    color: "from-red-500 to-rose-500",
    heroImage: "/services/education-loan-hero.svg",
  },
];

// export function getServiceData(slug) {
//   return services.find((service) => service.slug === slug);
// }

// export function getRelatedServices(currentSlug, count = 3) {
//   return services
//     .filter((service) => service.slug !== currentSlug)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, count);
// }

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

import { Content } from "@radix-ui/react-select";

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
    content: [
      "In this process, we aim at getting the best possible Settlement plan from the creditor(s) and repaying the amount decided in the Settlement plan. The Settlement amount is an amount that is more feasible than the actual amount owed to the creditor(s).\n\n Many people seek help from Settle Loan for settling their obligations with the Banks and NBFCs. As the Bank(s)/NBFC(s) do not agree on Settlement easily and continuously harass the customers for repayment of their Debt. \n \n There are several reasons why an individual may pursue a personal loan Settlement, including financial hardship, a change in employment or income, or an inability to keep up with monthly payments. \n\n If you're thinking about settling a personal loan, it's crucial to consult a financial advisor. They can provide you with guidance to assess your options and help you make a well-informed decision. They can also assist you in comprehending the possible outcomes of settling a loan and figuring out the best course of action for your financial situation.",
    ],
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
    content: [
      "Credit card debt accrues a higher rate of interest and other related charges making it difficult to repay the debt. These extra interest charges result in an increase in debt amount along with financial stress. It also reduces the ability to save and invest the money available. If you are seeking help in resolving a credit card debt, you should consider Settleloan. Saving money can lead to long-term financial improvement.",
      "Credit card loans should only be used as a last resort for emergency expenditures if you don't have savings, according to credit experts. They are tempting because they are quick and simple to obtain as there is no need for an application. However, if you're already in debt, it may exacerbate the problem.",
      "Taking a credit card loan will also raise your credit utilization rate, which is the percentage of your limit that has been utilized. Most financial experts advise keeping your overall usage under 50% to keep credit score high.",
    ],
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
    content: [
      "Harassment by recovery agents is quite common in India, in spite of several Supreme Court judgments and RBI guidelines prohibiting harassment of borrowers. Read on to know how we can help with our Anti-harassment Service!",
    ],
  },
  {
    id: "credit-score",
    slug: "credit-score",
    title: "Credit Score Builder",
    shortTitle: "Credit Score",
    description:
      "Are you asking yourself the question of how to improve your CIBIL score after loan Settlement?",
    icon: "Blocks",
    color: "from-red-500 to-red-100",
    content: [
      "Improving credit score is not an overnight task. As part of the process, we will assign a senior credit counsellor who will handhold you over 3-6 months or longer if required, to help you to take the right decisions and implement activities that will improve your score over time.",
    ],
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
    content: [
      "You can benefit from a decrease in your EMI as well as cheaper interest rates. Most Importantly it eases your financial burden, giving you peace of mind.",
    ],
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
    content: [
      "A vehicle loan Settlement is the total amount needed to settle, or completely payoff an existing vehicle loan. Vehicle loan Settlement is another term for what is commonly referred to as the payoff amount. vehicle loan Settlements are normally time-sensitive quotations and the amount of a Settlement can vary from day to day.",
      "The borrower settles the outstanding balance on the auto loan as specified in the loan agreement, often in a single payment or over installments. This payment fully discharges the lender's debt.",
      "To avoid paying interest and get full ownership of the vehicle sooner, some borrowers opt to pay off their auto loan before the specified term expires. Reviewing the loan terms is necessary to see if there are any fines or penalties for paying off the loan early.",
      "The lender releases the lien on the vehicle after receiving the entire loan Settlement amount. This enables the title of the vehicle to be transferred to the borrower, proving full ownership.",
      "The lender gives proof of the debt Settlement and the borrower's unequivocal ownership of the vehicle, such as a lien release or satisfaction letter. These records are crucial for reference purposes in the future and for the eventual sale of the car.",
    ],
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
    content: [
      "Education loan Settlement refers to the process of negotiating with a lender to reach an agreement on the repayment terms of an education loan. When borrowers encounter financial difficulties and become unable to fulfil their loan obligations, they may explore options for loan Settlement to amicably resolve their debt.",
    ],
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

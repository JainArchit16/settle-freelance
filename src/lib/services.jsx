import {
  CreditCard,
  Wallet,
  Home,
  Car,
  GraduationCap,
  Shield,
} from "lucide-react";

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
      "Our personal loan settlement service helps you negotiate with creditors to reduce your outstanding debt and establish a manageable repayment plan.",
    icon: Wallet,
    color: "from-green-500 to-emerald-500",
    heroImage: "/services/personal-loan-hero.svg",
    benefits: [
      {
        title: "Reduce Total Debt",
        description:
          "We negotiate with creditors to reduce your total debt amount, often achieving reductions of 40-60% of the original balance.",
      },
      {
        title: "Stop Creditor Harassment",
        description:
          "Once enrolled in our program, we handle communications with creditors, putting an end to stressful collection calls and letters.",
      },
      {
        title: "Manageable Repayment Plan",
        description:
          "We help establish a repayment plan that fits your budget, making it easier to become debt-free without financial strain.",
      },
      {
        title: "Legal Protection",
        description:
          "Our team provides legal support throughout the settlement process, ensuring your rights are protected at every step.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough assessment of your financial situation to understand your debt challenges and goals.",
      },
      {
        title: "Customized Strategy",
        description:
          "Our experts develop a personalized settlement plan tailored to your specific financial circumstances.",
      },
      {
        title: "Negotiation with Creditors",
        description:
          "We negotiate with your creditors to reduce your debt amount and establish favorable terms.",
      },
      {
        title: "Settlement Agreement",
        description:
          "Once terms are agreed upon, we facilitate the settlement process and ensure proper documentation.",
      },
      {
        title: "Financial Recovery",
        description:
          "We provide guidance on rebuilding your credit and maintaining financial stability post-settlement.",
      },
    ],
    faqs: [
      {
        question: "How much can I save through personal loan settlement?",
        answer:
          "Most clients save between 40-60% of their original debt amount through our settlement services, though results vary based on individual circumstances and creditor policies.",
      },
      {
        question: "How long does the personal loan settlement process take?",
        answer:
          "The typical personal loan settlement process takes 4-6 months, though this timeline can vary based on the number of creditors, total debt amount, and creditor responsiveness.",
      },
      {
        question: "Will settlement affect my credit score?",
        answer:
          "Yes, debt settlement typically causes a temporary decrease in your credit score. However, many clients find that becoming debt-free provides the foundation to rebuild their credit more effectively in the long term.",
      },
      {
        question: "What types of personal loans can be settled?",
        answer:
          "We can help settle most unsecured personal loans, including bank personal loans, online lender loans, and loans from finance companies. Secured loans may require different approaches.",
      },
      {
        question: "Are there any upfront fees for your settlement services?",
        answer:
          "We operate on a success-based fee structure, meaning we only collect fees after successfully negotiating a settlement. There are no upfront costs to enroll in our program.",
      },
    ],
    pricing: [
      {
        title: "Basic Settlement",
        price: "₹15,000",
        description: "For debts under ₹5 lakhs",
        features: [
          "Creditor negotiation",
          "Settlement documentation",
          "Basic legal support",
          "Phone and email support",
        ],
      },
      {
        title: "Premium Settlement",
        price: "₹25,000",
        description: "For debts between ₹5-10 lakhs",
        features: [
          "Advanced negotiation strategies",
          "Priority processing",
          "Enhanced legal protection",
          "Dedicated settlement advisor",
          "Credit rebuilding guidance",
        ],
        recommended: true,
      },
      {
        title: "Elite Settlement",
        price: "₹40,000",
        description: "For debts above ₹10 lakhs",
        features: [
          "Executive negotiation team",
          "Comprehensive legal protection",
          "Expedited processing",
          "Personal financial advisor",
          "Long-term financial planning",
          "Credit rebuilding program",
        ],
      },
    ],
  },
  {
    id: "credit-card",
    slug: "credit-card",
    title: "Credit Card Settlement",
    shortTitle: "Credit Card",
    description:
      "We help you settle your credit card debt for less than what you owe, providing relief from high interest rates and mounting debt.",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
    heroImage: "/services/credit-card-hero.svg",
    benefits: [
      {
        title: "Reduce High-Interest Debt",
        description:
          "We negotiate with credit card companies to significantly reduce your balance, eliminating high interest charges that keep you in debt.",
      },
      {
        title: "Consolidate Multiple Cards",
        description:
          "Simplify your finances by consolidating multiple credit card payments into a single, manageable monthly payment.",
      },
      {
        title: "Stop Collection Actions",
        description:
          "End harassing collection calls, letters, and potential legal actions from credit card companies and collection agencies.",
      },
      {
        title: "Avoid Bankruptcy",
        description:
          "Resolve your credit card debt without resorting to bankruptcy, which has longer-lasting impacts on your credit and financial future.",
      },
    ],
    process: [
      {
        title: "Debt Analysis",
        description:
          "We analyze your credit card debt and develop a customized settlement strategy based on your financial situation.",
      },
      {
        title: "Creditor Negotiation",
        description:
          "Our team negotiates with credit card companies to reduce your total payable amount, often achieving significant reductions.",
      },
      {
        title: "Settlement Execution",
        description:
          "We finalize agreements with creditors and ensure all settlements are properly documented and executed.",
      },
      {
        title: "Payment Management",
        description:
          "We help you manage the settlement payments according to the agreed terms, ensuring compliance with all agreements.",
      },
      {
        title: "Credit Rebuilding",
        description:
          "After settlement, we provide guidance on rebuilding your credit score and maintaining financial stability.",
      },
    ],
    faqs: [
      {
        question: "Can all credit card debt be settled?",
        answer:
          "Most credit card debt can be settled, including standard credit cards, store cards, and charge cards. However, the success and terms of settlement depend on factors like the age of the debt, creditor policies, and your financial situation.",
      },
      {
        question: "How much can I save on my credit card debt?",
        answer:
          "Our clients typically save 40-60% on their credit card debt through our settlement services, though results vary based on individual circumstances and creditor policies.",
      },
      {
        question: "How long does credit card settlement take?",
        answer:
          "The credit card settlement process usually takes 3-6 months per card, though this timeline can vary based on the number of cards, total debt amount, and creditor responsiveness.",
      },
      {
        question: "Will I be able to use credit cards after settlement?",
        answer:
          "After settling credit card debt, you may have limited access to new credit initially. However, many clients can begin rebuilding their credit profile within 12-18 months after completing the settlement process.",
      },
      {
        question: "What happens to my credit score after settlement?",
        answer:
          "Credit card settlement typically causes a temporary decrease in your credit score. However, many clients find that becoming debt-free provides the foundation to rebuild their credit more effectively in the long term.",
      },
    ],
    pricing: [
      {
        title: "Basic Settlement",
        price: "₹12,000",
        description: "For debts under ₹3 lakhs",
        features: [
          "Creditor negotiation",
          "Settlement documentation",
          "Basic legal support",
          "Phone and email support",
        ],
      },
      {
        title: "Premium Settlement",
        price: "₹20,000",
        description: "For debts between ₹3-8 lakhs",
        features: [
          "Advanced negotiation strategies",
          "Priority processing",
          "Enhanced legal protection",
          "Dedicated settlement advisor",
          "Credit rebuilding guidance",
        ],
        recommended: true,
      },
      {
        title: "Elite Settlement",
        price: "₹35,000",
        description: "For debts above ₹8 lakhs",
        features: [
          "Executive negotiation team",
          "Comprehensive legal protection",
          "Expedited processing",
          "Personal financial advisor",
          "Long-term financial planning",
          "Credit rebuilding program",
        ],
      },
    ],
  },
  {
    id: "home-loan",
    slug: "home-loan",
    title: "Home Loan Settlement",
    shortTitle: "Home Loan",
    description:
      "Our home loan settlement services help homeowners facing financial difficulties to negotiate with lenders and find sustainable solutions.",
    icon: Home,
    color: "from-purple-500 to-violet-500",
    heroImage: "/services/home-loan-hero.svg",
    benefits: [
      {
        title: "Prevent Foreclosure",
        description:
          "Our settlement services can help prevent foreclosure proceedings, allowing you to keep your home while resolving your debt.",
      },
      {
        title: "Reduce Mortgage Obligation",
        description:
          "We negotiate with lenders to potentially reduce your overall mortgage obligation, making your home more affordable.",
      },
      {
        title: "Affordable Payment Plans",
        description:
          "Establish a more affordable payment plan that aligns with your current financial situation and capabilities.",
      },
      {
        title: "Long-term Housing Stability",
        description:
          "Our solutions focus on creating long-term housing stability, not just short-term fixes to your mortgage challenges.",
      },
    ],
    process: [
      {
        title: "Financial Assessment",
        description:
          "We evaluate your financial situation and home loan details to determine the best approach for your specific circumstances.",
      },
      {
        title: "Lender Negotiation",
        description:
          "Our experts negotiate with your mortgage lender to find a solution that works for both parties, whether through modification, refinancing, or settlement.",
      },
      {
        title: "Settlement Structure",
        description:
          "We help structure a settlement or modification that aligns with your financial capabilities while satisfying lender requirements.",
      },
      {
        title: "Documentation",
        description:
          "We ensure all agreements are properly documented and legally binding to protect your interests and home ownership.",
      },
      {
        title: "Implementation",
        description:
          "Once terms are agreed upon, we help you implement the settlement plan and secure your home for the long term.",
      },
    ],
    faqs: [
      {
        question: "Can I settle my home loan if I'm already in default?",
        answer:
          "Yes, home loan settlement is often possible even if you're already in default. In fact, lenders may be more willing to negotiate once they recognize you're experiencing genuine financial hardship.",
      },
      {
        question: "Will I be able to keep my home after settlement?",
        answer:
          "In most cases, our home loan settlement services are designed to help you keep your home. We work to find solutions that allow you to maintain ownership while making your mortgage more manageable.",
      },
      {
        question: "How much can I save through home loan settlement?",
        answer:
          "Savings vary widely based on your specific situation, the lender's policies, and the current value of your property. Some clients achieve principal reductions, while others benefit from interest rate reductions or term modifications.",
      },
      {
        question: "How long does the home loan settlement process take?",
        answer:
          "The home loan settlement process typically takes 3-6 months, though complex cases may take longer. Factors affecting the timeline include lender responsiveness, property valuation, and documentation requirements.",
      },
      {
        question: "Will home loan settlement affect my credit score?",
        answer:
          "Home loan settlements may impact your credit score, though often less severely than foreclosure or bankruptcy. The specific impact depends on how the settlement is reported to credit bureaus and your overall credit profile.",
      },
    ],
    pricing: [
      {
        title: "Basic Settlement",
        price: "₹30,000",
        description: "For loans under ₹30 lakhs",
        features: [
          "Lender negotiation",
          "Settlement documentation",
          "Basic legal support",
          "Phone and email support",
        ],
      },
      {
        title: "Premium Settlement",
        price: "₹50,000",
        description: "For loans between ₹30-75 lakhs",
        features: [
          "Advanced negotiation strategies",
          "Priority processing",
          "Enhanced legal protection",
          "Dedicated settlement advisor",
          "Property valuation assistance",
        ],
        recommended: true,
      },
      {
        title: "Elite Settlement",
        price: "₹75,000",
        description: "For loans above ₹75 lakhs",
        features: [
          "Executive negotiation team",
          "Comprehensive legal protection",
          "Expedited processing",
          "Personal financial advisor",
          "Long-term financial planning",
          "Property retention strategies",
        ],
      },
    ],
  },
  {
    id: "vehicle-loan",
    slug: "vehicle-loan",
    title: "Vehicle Loan Settlement",
    shortTitle: "Vehicle Loan",
    description:
      "We help you resolve vehicle loan issues through negotiation with lenders to prevent repossession and find manageable solutions.",
    icon: Car,
    color: "from-orange-500 to-amber-500",
    heroImage: "/services/vehicle-loan-hero.svg",
    benefits: [
      {
        title: "Prevent Repossession",
        description:
          "Our settlement services can help prevent vehicle repossession, allowing you to keep your transportation while resolving your debt.",
      },
      {
        title: "Reduce Loan Balance",
        description:
          "We negotiate with lenders to potentially reduce your outstanding loan balance, making your vehicle more affordable.",
      },
      {
        title: "Affordable Repayment Options",
        description:
          "Establish more affordable repayment options that align with your current financial situation and capabilities.",
      },
      {
        title: "Maintain Transportation",
        description:
          "Our solutions focus on helping you maintain reliable transportation, which is often essential for employment and daily life.",
      },
    ],
    process: [
      {
        title: "Loan Evaluation",
        description:
          "We assess your vehicle loan situation and identify potential settlement options based on your financial circumstances.",
      },
      {
        title: "Lender Communication",
        description:
          "Our team communicates with your lender to negotiate favorable terms, whether through modification, refinancing, or settlement.",
      },
      {
        title: "Settlement Negotiation",
        description:
          "We negotiate a reduced payoff amount or restructured payment plan that aligns with your financial capabilities.",
      },
      {
        title: "Documentation",
        description:
          "We ensure all agreements are properly documented and legally binding to protect your interests and vehicle ownership.",
      },
      {
        title: "Resolution",
        description:
          "Once terms are agreed upon, we help you complete the settlement and retain your vehicle for continued use.",
      },
    ],
    faqs: [
      {
        question:
          "Can I settle my vehicle loan if I'm already behind on payments?",
        answer:
          "Yes, vehicle loan settlement is often possible even if you're already behind on payments. In fact, lenders may be more willing to negotiate once they recognize you're experiencing genuine financial hardship.",
      },
      {
        question: "Will I be able to keep my vehicle after settlement?",
        answer:
          "In most cases, our vehicle loan settlement services are designed to help you keep your vehicle. We work to find solutions that allow you to maintain ownership while making your loan more manageable.",
      },
      {
        question: "How much can I save through vehicle loan settlement?",
        answer:
          "Savings vary based on your specific situation, the lender's policies, and the current value of your vehicle. Some clients achieve principal reductions of 20-40%, while others benefit from interest rate reductions or term modifications.",
      },
      {
        question: "How long does the vehicle loan settlement process take?",
        answer:
          "The vehicle loan settlement process typically takes 2-4 months, though this timeline can vary based on lender responsiveness and documentation requirements.",
      },
      {
        question: "Will vehicle loan settlement affect my credit score?",
        answer:
          "Vehicle loan settlements may impact your credit score, though often less severely than repossession or bankruptcy. The specific impact depends on how the settlement is reported to credit bureaus and your overall credit profile.",
      },
    ],
    pricing: [
      {
        title: "Basic Settlement",
        price: "₹10,000",
        description: "For loans under ₹5 lakhs",
        features: [
          "Lender negotiation",
          "Settlement documentation",
          "Basic legal support",
          "Phone and email support",
        ],
      },
      {
        title: "Premium Settlement",
        price: "₹18,000",
        description: "For loans between ₹5-15 lakhs",
        features: [
          "Advanced negotiation strategies",
          "Priority processing",
          "Enhanced legal protection",
          "Dedicated settlement advisor",
          "Vehicle valuation assistance",
        ],
        recommended: true,
      },
      {
        title: "Elite Settlement",
        price: "₹30,000",
        description: "For loans above ₹15 lakhs",
        features: [
          "Executive negotiation team",
          "Comprehensive legal protection",
          "Expedited processing",
          "Personal financial advisor",
          "Long-term financial planning",
          "Vehicle retention strategies",
        ],
      },
    ],
  },
  {
    id: "education-loan",
    slug: "education-loan",
    title: "Education Loan Settlement",
    shortTitle: "Education Loan",
    description:
      "Our education loan settlement services help graduates manage their student debt through negotiation and repayment strategies.",
    icon: GraduationCap,
    color: "from-red-500 to-rose-500",
    heroImage: "/services/education-loan-hero.svg",
    benefits: [
      {
        title: "Reduce Education Debt",
        description:
          "We negotiate with lenders to potentially reduce your education debt burden, making repayment more manageable.",
      },
      {
        title: "Manageable Repayment Strategies",
        description:
          "Develop customized repayment strategies that align with your current income and financial situation.",
      },
      {
        title: "Balance Financial Goals",
        description:
          "Our solutions help you balance education debt repayment with other important financial goals like saving and investing.",
      },
      {
        title: "Improve Long-term Outlook",
        description:
          "By addressing education debt effectively, we help improve your long-term financial outlook and reduce stress.",
      },
    ],
    process: [
      {
        title: "Loan Assessment",
        description:
          "We evaluate your education loans and determine eligibility for settlement or restructuring based on your financial circumstances.",
      },
      {
        title: "Strategy Development",
        description:
          "Our advisors develop a comprehensive plan to address your education debt, considering your income, career trajectory, and financial goals.",
      },
      {
        title: "Lender Negotiation",
        description:
          "We negotiate with loan providers to reduce balances or create favorable repayment terms that align with your financial capabilities.",
      },
      {
        title: "Documentation",
        description:
          "We ensure all agreements are properly documented and legally binding to protect your interests and financial future.",
      },
      {
        title: "Implementation",
        description:
          "Once terms are finalized, we help you implement the plan and monitor progress toward education debt freedom.",
      },
    ],
    faqs: [
      {
        question: "Can government education loans be settled?",
        answer:
          "Government education loans have specific programs for hardship, deferment, and income-based repayment rather than traditional settlement. We can help navigate these programs. Private education loans often have more flexibility for negotiated settlements.",
      },
      {
        question: "How much can I save through education loan settlement?",
        answer:
          "Savings vary based on your specific situation, the lender's policies, and the type of education loan. Private loans may allow for principal reductions of 20-40%, while government loans typically offer payment adjustments rather than balance reductions.",
      },
      {
        question: "How long does the education loan settlement process take?",
        answer:
          "The education loan settlement process typically takes 3-5 months, though this timeline can vary based on the type of loan, lender responsiveness, and documentation requirements.",
      },
      {
        question: "Will education loan settlement affect my credit score?",
        answer:
          "Education loan settlements may impact your credit score, though the specific impact depends on how the settlement is reported to credit bureaus and your overall credit profile. We work to minimize negative impacts where possible.",
      },
      {
        question:
          "What if I'm just starting my career and have limited income?",
        answer:
          "We specialize in helping recent graduates with limited income develop strategies for managing education debt. This may include negotiating income-based repayment plans, deferment options, or settlement terms that account for your current financial situation and future earning potential.",
      },
    ],
    pricing: [
      {
        title: "Basic Settlement",
        price: "₹8,000",
        description: "For loans under ₹5 lakhs",
        features: [
          "Lender negotiation",
          "Settlement documentation",
          "Basic legal support",
          "Phone and email support",
        ],
      },
      {
        title: "Premium Settlement",
        price: "₹15,000",
        description: "For loans between ₹5-15 lakhs",
        features: [
          "Advanced negotiation strategies",
          "Priority processing",
          "Enhanced legal protection",
          "Dedicated settlement advisor",
          "Career-based repayment planning",
        ],
        recommended: true,
      },
      {
        title: "Elite Settlement",
        price: "₹25,000",
        description: "For loans above ₹15 lakhs",
        features: [
          "Executive negotiation team",
          "Comprehensive legal protection",
          "Expedited processing",
          "Personal financial advisor",
          "Long-term financial planning",
          "Income-based repayment strategies",
        ],
      },
    ],
  },
  {
    id: "anti-harassment",
    slug: "anti-harassment",
    title: "Anti-Harassment Protection",
    shortTitle: "Anti-Harassment",
    description:
      "Our anti-harassment service provides legal protection against aggressive collection tactics and creditor harassment.",
    icon: Shield,
    color: "from-teal-500 to-emerald-500",
    heroImage: "/services/anti-harassment-hero.svg",
    benefits: [
      {
        title: "Stop Harassing Calls",
        description:
          "We take immediate action to stop harassing phone calls from creditors and collection agencies, giving you peace of mind.",
      },
      {
        title: "Legal Protection",
        description:
          "Our team provides legal protection against aggressive collection tactics, ensuring your rights are respected.",
      },
      {
        title: "Documentation Support",
        description:
          "We help document instances of harassment to build a strong case against creditors who violate regulations.",
      },
      {
        title: "Cease and Desist Letters",
        description:
          "Our legal team sends formal cease and desist letters to creditors, requiring them to communicate only through proper channels.",
      },
    ],
    process: [
      {
        title: "Harassment Assessment",
        description:
          "We evaluate the nature and extent of creditor harassment you're experiencing to determine the appropriate response.",
      },
      {
        title: "Legal Notification",
        description:
          "Our team sends legal notifications to creditors, informing them of your representation and requiring them to cease direct contact.",
      },
      {
        title: "Documentation",
        description:
          "We help you document all instances of harassment, including calls, messages, and other communication attempts.",
      },
      {
        title: "Enforcement",
        description:
          "If harassment continues, we take enforcement actions, including filing complaints with regulatory authorities and pursuing legal remedies.",
      },
      {
        title: "Ongoing Protection",
        description:
          "We provide ongoing monitoring and protection to ensure creditors comply with legal requirements and respect your rights.",
      },
    ],
    faqs: [
      {
        question: "What constitutes creditor harassment?",
        answer:
          "Creditor harassment includes repeated calls at inconvenient hours, threats, abusive language, false statements, contacting you at work after being asked not to, discussing your debt with unauthorized third parties, and other intimidating collection tactics.",
      },
      {
        question: "How quickly can you stop harassment from creditors?",
        answer:
          "We typically begin the process of stopping creditor harassment within 24-48 hours of engagement. Many clients report a significant reduction in contact attempts within the first week of our intervention.",
      },
      {
        question:
          "Can creditors still collect the debt if I use your anti-harassment service?",
        answer:
          "Yes, creditors retain the right to collect legitimate debts, but they must do so through legal and respectful means. Our service ensures they follow proper procedures and communicate through appropriate channels, typically through our office.",
      },
      {
        question:
          "What if harassment continues after you've sent notifications?",
        answer:
          "If harassment continues after our initial interventions, we escalate the matter by filing formal complaints with regulatory authorities, documenting violations for potential legal action, and pursuing other remedies available under consumer protection laws.",
      },
      {
        question:
          "Does your anti-harassment service also help settle my debts?",
        answer:
          "While our anti-harassment service focuses specifically on stopping inappropriate collection tactics, we can combine it with our debt settlement services for a comprehensive solution to both harassment and the underlying debt issues.",
      },
    ],
    pricing: [
      {
        title: "Basic Protection",
        price: "₹5,000",
        description: "For 3 months of protection",
        features: [
          "Cease and desist letters",
          "Basic legal representation",
          "Phone and email support",
          "Harassment documentation",
        ],
      },
      {
        title: "Premium Protection",
        price: "₹12,000",
        description: "For 6 months of protection",
        features: [
          "Comprehensive legal representation",
          "Priority response to violations",
          "Regulatory complaint filing",
          "Dedicated legal advisor",
          "Extended documentation support",
        ],
        recommended: true,
      },
      {
        title: "Elite Protection",
        price: "₹20,000",
        description: "For 12 months of protection",
        features: [
          "Executive legal team",
          "Immediate response to violations",
          "Comprehensive legal action",
          "Personal legal advisor",
          "Unlimited documentation support",
          "Debt settlement consultation",
        ],
      },
    ],
  },
];

export function getServiceData(slug) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(currentSlug, count = 3) {
  return services
    .filter((service) => service.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

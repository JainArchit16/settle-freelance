"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Home,
  Car,
  GraduationCap,
  ArrowRight,
  Check,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingSvgs from "@/components/floating-svgs";

const services = [
  {
    id: "personal-loan",
    icon: Wallet,
    title: "Personal Loan Settlement",
    description:
      "Our personal loan settlement service helps you negotiate with creditors to reduce your outstanding debt and establish a manageable repayment plan.",
    benefits: [
      "Reduce your total debt amount",
      "Stop harassment from creditors",
      "Create a manageable repayment plan",
      "Improve your financial situation",
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We assess your financial situation and determine if you're eligible for a personal loan settlement.",
      },
      {
        title: "Negotiation with Creditors",
        description:
          "Our experts negotiate with your creditors to reduce the total amount you owe.",
      },
      {
        title: "Settlement Agreement",
        description:
          "Once terms are finalized, you make the agreed-upon payment to the lender.",
      },
      {
        title: "Debt Resolution",
        description:
          "The lender issues a settlement letter and updates your credit report to reflect the settled status.",
      },
    ],
  },
  {
    id: "credit-card",
    icon: CreditCard,
    title: "Credit Card Settlement",
    description:
      "We help you settle your credit card debt for less than what you owe, providing relief from high interest rates and mounting debt.",
    benefits: [
      "Reduce high-interest credit card debt",
      "Consolidate multiple card payments",
      "Stop collection calls and legal actions",
      "Avoid bankruptcy while resolving debt",
    ],
    process: [
      {
        title: "Debt Analysis",
        description:
          "We analyze your credit card debt and develop a customized settlement strategy.",
      },
      {
        title: "Creditor Negotiation",
        description:
          "Our team negotiates with credit card companies to reduce your total payable amount.",
      },
      {
        title: "Settlement Execution",
        description:
          "We finalize agreements that can significantly reduce your financial burden.",
      },
      {
        title: "Financial Recovery",
        description:
          "After settlement, we help you develop strategies to rebuild your credit score.",
      },
    ],
  },
  {
    id: "home-loan",
    icon: Home,
    title: "Home Loan Settlement",
    description:
      "Our home loan settlement services help homeowners facing financial difficulties to negotiate with lenders and find sustainable solutions.",
    benefits: [
      "Prevent foreclosure proceedings",
      "Reduce your mortgage obligation",
      "Create affordable payment plans",
      "Maintain long-term housing stability",
    ],
    process: [
      {
        title: "Financial Assessment",
        description:
          "We evaluate your financial situation and home loan details to determine the best approach.",
      },
      {
        title: "Lender Negotiation",
        description:
          "Our experts negotiate with your mortgage lender to find a solution that works for both parties.",
      },
      {
        title: "Settlement Structure",
        description:
          "We help structure a settlement that aligns with your financial capabilities.",
      },
      {
        title: "Implementation",
        description:
          "Once terms are agreed upon, we help you implement the settlement plan and secure your home.",
      },
    ],
  },
  {
    id: "vehicle-loan",
    icon: Car,
    title: "Vehicle Loan Settlement",
    description:
      "We help you resolve vehicle loan issues through negotiation with lenders to prevent repossession and find manageable solutions.",
    benefits: [
      "Prevent vehicle repossession",
      "Reduce your outstanding loan balance",
      "Create affordable repayment options",
      "Maintain your transportation needs",
    ],
    process: [
      {
        title: "Loan Evaluation",
        description:
          "We assess your vehicle loan situation and identify potential settlement options.",
      },
      {
        title: "Lender Communication",
        description:
          "Our team communicates with your lender to negotiate favorable terms.",
      },
      {
        title: "Settlement Negotiation",
        description:
          "We negotiate a reduced payoff amount or restructured payment plan.",
      },
      {
        title: "Resolution",
        description:
          "Once terms are agreed upon, we help you complete the settlement and retain your vehicle.",
      },
    ],
  },
  {
    id: "education-loan",
    icon: GraduationCap,
    title: "Education Loan Settlement",
    description:
      "Our education loan settlement services help graduates manage their student debt through negotiation and repayment strategies.",
    benefits: [
      "Reduce your education debt burden",
      "Create manageable repayment strategies",
      "Balance education debt with other financial goals",
      "Improve your long-term financial outlook",
    ],
    process: [
      {
        title: "Loan Assessment",
        description:
          "We evaluate your education loans and determine eligibility for settlement or restructuring.",
      },
      {
        title: "Strategy Development",
        description:
          "Our advisors develop a comprehensive plan to address your education debt.",
      },
      {
        title: "Lender Negotiation",
        description:
          "We negotiate with loan providers to reduce balances or create favorable repayment terms.",
      },
      {
        title: "Implementation",
        description:
          "Once terms are finalized, we help you implement the plan and monitor progress.",
      },
    ],
  },
];

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState("personal-loan");

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Background floating SVGs */}
      <FloatingSvgs
        count={8}
        minSize={16}
        maxSize={36}
        minDuration={20}
        maxDuration={40}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Settlement Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer specialized settlement services for various types of loans
            to help you overcome financial challenges and achieve debt freedom.
          </p>
        </motion.div>

        <Tabs
          defaultValue="personal-loan"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <service.icon className="w-5 h-5 mb-1" />
                <span className="text-sm text-center">
                  {service.title.split(" ")[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Key Benefits
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8">
                      <h4 className="text-lg font-semibold mb-4">
                        Our Process
                      </h4>
                      <div className="space-y-6">
                        {service.process.map((step, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                {index + 1}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900">
                                {step.title}
                              </h5>
                              <p className="text-gray-600">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button className="flex items-center text-primary font-medium hover:underline">
                          Learn more about this service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

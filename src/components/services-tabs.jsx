"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Wallet } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabsData = [
  {
    id: "process",
    title: "Our Process",
    content: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough assessment of your financial situation to understand your debt challenges and goals.",
        icon: "01",
      },
      {
        title: "Customized Strategy",
        description:
          "Our experts develop a personalized settlement plan tailored to your specific financial circumstances.",
        icon: "02",
      },
      {
        title: "Negotiation",
        description:
          "We negotiate with your creditors to reduce your debt amount and establish favorable terms.",
        icon: "03",
      },
      {
        title: "Settlement",
        description:
          "Once terms are agreed upon, we facilitate the settlement process and ensure proper documentation.",
        icon: "04",
      },
      {
        title: "Financial Recovery",
        description:
          "We provide guidance on rebuilding your credit and maintaining financial stability post-settlement.",
        icon: "05",
      },
    ],
  },
  {
    id: "benefits",
    title: "Key Benefits",
    content: [
      {
        title: "Reduced Debt Burden",
        description:
          "Significantly reduce the total amount you owe through expert negotiation with creditors.",
        icon: <Check className="w-5 h-5" />,
      },
      {
        title: "Legal Protection",
        description:
          "Receive protection from creditor harassment and legal actions during the settlement process.",
        icon: <Check className="w-5 h-5" />,
      },
      {
        title: "Stress Relief",
        description:
          "Experience reduced financial stress as we handle negotiations and communications with creditors.",
        icon: <Check className="w-5 h-5" />,
      },
      {
        title: "Faster Debt Resolution",
        description:
          "Resolve your debt issues more quickly than through minimum payments or debt management plans.",
        icon: <Check className="w-5 h-5" />,
      },
      {
        title: "Financial Education",
        description:
          "Gain valuable financial knowledge and tools to maintain long-term financial stability.",
        icon: <Check className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      {
        title: "Financial Hardship",
        description:
          "You're experiencing genuine financial difficulty that prevents you from meeting your debt obligations.",
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: "Unsecured Debt",
        description:
          "You have significant unsecured debt such as credit cards, personal loans, or medical bills.",
        icon: <Wallet className="w-5 h-5" />,
      },
      {
        title: "Debt Amount",
        description:
          "Your total unsecured debt is typically at least ₹2,00,000 to make settlement negotiations worthwhile.",
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: "Payment Capability",
        description:
          "You have or can accumulate some funds to offer as a lump-sum settlement to creditors.",
        icon: <Wallet className="w-5 h-5" />,
      },
      {
        title: "Willingness to Negotiate",
        description:
          "You're open to the negotiation process and understand the potential impacts on your credit score.",
        icon: <CreditCard className="w-5 h-5" />,
      },
    ],
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How We Help You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Learn about our comprehensive approach to debt settlement and how we
            can assist you in achieving financial freedom.
          </motion.p>
        </div>

        <Tabs
          defaultValue="process"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-12">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tab.content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                      >
                        <div className="flex items-start mb-4">
                          {typeof item.icon === "string" ? (
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                              {item.icon}
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                              {item.icon}
                            </div>
                          )}
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
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

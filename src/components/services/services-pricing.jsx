"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
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
];

export default function ServicesPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            We offer clear, straightforward pricing for our settlement services.
            Choose the plan that best fits your needs and financial situation.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="h-full"
            >
              <div
                className={`bg-white rounded-xl overflow-hidden shadow-md h-full border ${
                  plan.recommended ? "border-primary" : "border-gray-100"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-primary text-white text-center py-2 font-medium">
                    Recommended
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> one-time fee</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium ${
                      plan.recommended
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 text-gray-500">
          <p>
            All plans include a free initial consultation. Fees are only charged
            after successful settlement.
          </p>
        </div>
      </div>
    </section>
  );
}

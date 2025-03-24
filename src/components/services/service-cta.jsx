"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCta({ service }) {
  return (
    <section
      id="pricing"
      className={`py-20 relative overflow-hidden bg-gradient-to-r ${service.color}`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-8 border-white" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border-8 border-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {service.title} Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg"
            >
              Choose the plan that best fits your needs and financial situation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {service.pricing.map((plan, index) => (
              <div key={index} className="h-full">
                <div
                  className={`bg-white rounded-xl overflow-hidden shadow-lg h-full border-2 ${
                    plan.recommended
                      ? `border-${service.color.split(" ")[1]}`
                      : "border-transparent"
                  }`}
                >
                  {plan.recommended && (
                    <div
                      className={`bg-gradient-to-r ${service.color} text-white text-center py-2 font-medium`}
                    >
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
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full py-3 rounded-lg font-medium text-center ${
                        plan.recommended
                          ? `bg-gradient-to-r ${service.color} text-white hover:opacity-90`
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-12 text-white/80">
            <p>
              All plans include a free initial consultation. Fees are only
              charged after successful settlement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a thorough assessment of your financial situation to understand your debt challenges and goals.",
  },
  {
    number: "02",
    title: "Customized Strategy",
    description:
      "Our experts develop a personalized settlement plan tailored to your specific financial circumstances.",
  },
  {
    number: "03",
    title: "Negotiation",
    description:
      "We negotiate with your creditors to reduce your debt amount and establish favorable terms.",
  },
  {
    number: "04",
    title: "Settlement",
    description:
      "Once terms are agreed upon, we facilitate the settlement process and ensure proper documentation.",
  },
  {
    number: "05",
    title: "Financial Recovery",
    description:
      "We provide guidance on rebuilding your credit and maintaining financial stability post-settlement.",
  },
];

export default function ServicesProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            Our Settlement Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            We follow a proven, step-by-step process to help you achieve
            financial freedom through effective debt settlement.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="relative z-10"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="my-6 md:my-0 flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

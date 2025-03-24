"use client";

import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, Clock } from "lucide-react";

export default function ServicesOverview() {
  const features = [
    {
      icon: Shield,
      title: "Protection from Harassment",
      description:
        "We shield you from creditor harassment and provide legal support throughout the settlement process.",
    },
    {
      icon: Award,
      title: "Expert Negotiation",
      description:
        "Our team of experienced negotiators work to secure the best possible settlement terms with your creditors.",
    },
    {
      icon: TrendingUp,
      title: "Financial Recovery",
      description:
        "We help you rebuild your financial health and create a path toward a debt-free future.",
    },
    {
      icon: Clock,
      title: "Quick Resolution",
      description:
        "Our efficient process helps you resolve your debt issues in the shortest possible timeframe.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            At Settle Loan, we understand the stress and challenges of dealing
            with overwhelming debt. Our services are designed to provide relief
            and a clear path forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

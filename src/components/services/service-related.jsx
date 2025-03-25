"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  CreditCard,
  GraduationCap,
  Home,
  Shield,
  Wallet,
} from "lucide-react";
// import { getRelatedServices } from "@/lib/services";
import { services } from "@/lib/services";

function getRelatedServices(currentSlug, count = 3) {
  return services
    .filter((service) => service.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

export default function ServiceRelated({ currentSlug }) {
  const relatedServices = getRelatedServices(currentSlug, 3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const iconMap = {
    Wallet,
    CreditCard,
    Home,
    Car,
    GraduationCap,
    Shield,
  };

  // const IconComponent = iconMap[relatedServices.icon];
  // iconMap[service.icon];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Related Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Explore other settlement services that might be relevant to your
            financial situation.
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
          {relatedServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform group-hover:-translate-y-2">
                    <div
                      className={`h-3 bg-gradient-to-r ${service.color}`}
                    ></div>
                    <div className="p-6">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

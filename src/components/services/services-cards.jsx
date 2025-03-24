"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Home,
  Car,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "personal-loan",
    icon: Wallet,
    title: "Personal Loan Settlement",
    description:
      "Reduce your personal loan burden through expert negotiation with creditors.",
    color: "from-green-500/20 to-emerald-500/20",
    link: "/services/personal-loan",
  },
  {
    id: "credit-card",
    icon: CreditCard,
    title: "Credit Card Settlement",
    description:
      "Resolve high-interest credit card debt with our specialized settlement services.",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "/services/credit-card",
  },
  {
    id: "home-loan",
    icon: Home,
    title: "Home Loan Settlement",
    description:
      "Protect your home and reduce mortgage obligations with our settlement solutions.",
    color: "from-purple-500/20 to-violet-500/20",
    link: "/services/home-loan",
  },
  {
    id: "vehicle-loan",
    icon: Car,
    title: "Vehicle Loan Settlement",
    description:
      "Prevent repossession and settle your vehicle loan with manageable terms.",
    color: "from-orange-500/20 to-amber-500/20",
    link: "/services/vehicle-loan",
  },
  {
    id: "education-loan",
    icon: GraduationCap,
    title: "Education Loan Settlement",
    description:
      "Manage your student debt through strategic negotiation and repayment plans.",
    color: "from-red-500/20 to-rose-500/20",
    link: "/services/education-loan",
  },
];

export default function ServicesCards() {
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
            Our Settlement Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            We offer specialized settlement services for various types of loans
            to help you overcome financial challenges and achieve debt freedom.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
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
              className="h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-0">
                <div
                  className={`h-24 bg-gradient-to-r ${service.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/20"></div>
                    <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-white/20"></div>
                  </div>
                  <div className="absolute -bottom-10 left-6">
                    <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <CardContent className="pt-12 pb-6 px-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      aschild="true"
                      className="group/btn"
                    >
                      <Link href={service.link}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

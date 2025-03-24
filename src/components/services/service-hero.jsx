"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Car,
  CreditCard,
  GraduationCap,
  Shield,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Home from "@/app/page";

export default function ServiceHero({ service }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const iconMap = {
    Wallet,
    CreditCard,
    Home,
    Car,
    GraduationCap,
    Shield,
  };

  const IconComponent = iconMap[service.icon];

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r ${service.color}/10 pt-20 pb-24`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Services
              </Link>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              {service.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" aschild="true">
                <Link href="/contact" className="flex flex-row items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" aschild="true">
                <a href="#pricing">View Pricing</a>
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color}/20 z-10`}
              ></div>
              <Image
                src={service.heroImage || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${service.color} text-white`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">
                    {service.shortTitle} Settlement
                  </p>
                  <p className="text-sm text-gray-500">Expert Service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

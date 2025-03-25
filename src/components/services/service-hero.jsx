"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceIllustration } from "./service-illustration";

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

  const extractColor = (colorString, defaultColor) => {
    if (!colorString) return defaultColor;

    try {
      const parts = colorString.split(" ");
      if (parts.length >= 2 && parts[1].includes("from-")) {
        return parts[1].replace("from-", "").split("-")[0];
      }
      if (parts.length >= 3 && parts[2].includes("to-")) {
        return parts[2].replace("to-", "").split("-")[0];
      }
      return defaultColor;
    } catch (error) {
      return defaultColor;
    }
  };

  const primaryColor = extractColor(service.color || "", "green");
  const secondaryColor = extractColor(service.color || "", "emerald");

  const colorMap = {
    green: "#00B050",
    emerald: "#10B981",
    blue: "#3B82F6",
    cyan: "#06B6D4",
    purple: "#8B5CF6",
    violet: "#8B5CF6",
    orange: "#F97316",
    amber: "#F59E0B",
    red: "#EF4444",
    rose: "#F43F5E",
    teal: "#14B8A6",
  };

  const primaryColorHex = colorMap[primaryColor] || "#00B050";
  const secondaryColorHex = colorMap[secondaryColor] || "#10B981";

  return (
    <section className="relative overflow-hidden pt-20 pb-24">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${primaryColorHex}33, ${primaryColorHex}1A, white)`,
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
          <div
            className="absolute right-0 top-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${primaryColorHex}33` }}
          ></div>
          <div
            className="absolute right-1/4 top-1/4 w-48 h-48 rounded-full blur-2xl"
            style={{ backgroundColor: `${secondaryColorHex}1A` }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20">
          <div
            className="absolute left-0 bottom-0 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${primaryColorHex}33` }}
          ></div>
          <div
            className="absolute left-1/4 bottom-1/4 w-48 h-48 rounded-full blur-2xl"
            style={{ backgroundColor: `${secondaryColorHex}1A` }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-primary hover:underline mb-4"
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
              <div className="mt-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${primaryColorHex}1A`,
                    color: primaryColorHex,
                  }}
                >
                  {service.shortTitle} Settlement
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {service.title}
              <span
                className="block mt-2 relative"
                style={{ color: primaryColorHex }}
              >
                Expert Settlement Solutions
                <span
                  className="absolute bottom-2 left-0 w-full h-2 rounded-full -z-10"
                  style={{ backgroundColor: `${primaryColorHex}33` }}
                ></span>
              </span>
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
              <Button
                size="lg"
                aschild="true"
                style={{ backgroundColor: primaryColorHex }}
              >
                <Link href="/contact" className="flex flex-row items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {service.benefits.slice(0, 2).map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 rounded-lg border"
                  style={{
                    backgroundColor: `${primaryColorHex}0D`,
                    borderColor: `${primaryColorHex}1A`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                    style={{ backgroundColor: `${primaryColorHex}1A` }}
                  >
                    <Check
                      className="w-4 h-4"
                      style={{ color: primaryColorHex }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{benefit.title}</p>
                  </div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <ServiceIllustration
                service={service.shortTitle}
                primaryColor={primaryColorHex}
                secondaryColor={secondaryColorHex}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

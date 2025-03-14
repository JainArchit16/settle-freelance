"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardCheck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FloatingSvgs from "./floating-svgs";

const icons = {
  FileText,
  ClipboardCheck,
  Star,
};

export default function CategoryContent({ description, content }) {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Background floating SVGs */}
      <FloatingSvgs
        count={12}
        minSize={16}
        maxSize={36}
        minDuration={20}
        maxDuration={40}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12 relative z-10"
      >
        <p className="text-lg text-gray-600">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {content.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden">
                {/* Card-specific floating SVGs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <FloatingSvgs
                    count={10}
                    minSize={12}
                    maxSize={20}
                    minDuration={15}
                    maxDuration={25}
                    containerClassName="absolute inset-0 overflow-hidden pointer-events-none"
                  />
                </div>

                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

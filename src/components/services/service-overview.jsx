"use client";

import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ServiceOverview({ service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Overview
            </h2>

            <div className="prose prose-lg max-w-none">
              {service.content?.map((paragraph, index) => {
                // Check if an image exists for this paragraph
                const hasImage =
                  service.images && index < service.images.length;

                return (
                  <div key={index} className="mb-16 last:mb-0">
                    {hasImage ? (
                      // Layout with image
                      <div
                        className={`
                        flex flex-col lg:flex-row 
                        gap-8 lg:gap-12 xl:gap-16
                        ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
                      `}
                      >
                        <div className="w-full lg:w-3/5 flex flex-col justify-center">
                          {paragraph.map((para, ind) => (
                            <div key={ind} className="mb-4 last:mb-0">
                              <ReactMarkdown>{para}</ReactMarkdown>
                            </div>
                          ))}
                        </div>

                        <div className="w-full lg:w-2/5 flex items-center justify-center">
                          <div className="relative w-[400px] h-[300px]">
                            <Image
                              src={service.images[index] || "/placeholder.svg"}
                              alt={`Image illustrating ${
                                paragraph[0]?.substring(0, 30) ||
                                `paragraph ${index + 1}`
                              }`}
                              className="aspect-square"
                              fill
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              priority={index < 2}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Layout without image - full width text
                      <div className="w-full">
                        {paragraph.map((para, ind) => (
                          <div key={ind} className="mb-4 last:mb-0">
                            <ReactMarkdown>{para}</ReactMarkdown>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

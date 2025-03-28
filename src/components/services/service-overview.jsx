"use client";

import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServiceOverview({ service }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>

            <div className="prose prose-lg max-w-none">
              {/* <p>
                Our {service.title} service is designed to help individuals
                struggling with overwhelming debt find relief and a path to
                financial recovery. We understand the stress and challenges that
                come with managing debt, and our team of experts is dedicated to
                providing personalized solutions tailored to your specific
                situation.
              </p>

              <p>
                Through our proven settlement process, we negotiate directly
                with your creditors to reduce the total amount you owe, often
                achieving significant reductions that can help you become
                debt-free faster and with less financial strain.
              </p>

              <p>
                Whether you're facing challenges with high interest rates,
                mounting late fees, or aggressive collection tactics, our
                settlement service provides a structured approach to resolving
                your debt issues and regaining control of your financial future.
              </p>

              <p>
                Our team combines expertise in financial analysis, negotiation
                strategies, and consumer protection laws to ensure you receive
                the best possible outcome for your{" "}
                {service.shortTitle.toLowerCase()} settlement.
              </p> */}

              {service.content?.map((paragraph, index) => (
                <div key={index}>
                  {paragraph.map((para, ind) => (
                    <div key={ind} className="mb-1">
                      <ReactMarkdown>{para}</ReactMarkdown>
                    </div>
                  ))}
                  <br></br>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: " What types of loans can be settled through Settle Mitra?",
    answer:
      " Settle Mitra assists in settling personal loans, credit card debts, business loans, and other unsecured loans. Certain secured loans may also be considered depending on the lender's discretion.",
  },
  {
    question: "How long does the loan settlement process take?",
    answer:
      "The timeline varies based on the lender's policies and your financial situation. On average, settlements may take between 3 to 6 months.",
  },
  {
    question: "Is loan settlement the right option for me?",
    answer:
      "Loan settlement is ideal for individuals facing severe financial hardship who are unable to pay their EMIs regularly.",
  },
  {
    question: "Will loan settlement affect my credit score?",
    answer:
      "Yes, loan settlement may impact your credit score negatively. However, it can still be a better alternative to defaulting on payments entirely.",
  },
  {
    question: "Can Settle Mitra guarantee a successful loan settlement?",
    answer:
      "While we provide expert negotiation and legal support, the final decision always lies with the lender.",
  },
  {
    question: "What documents are required for the loan settlement process?",
    answer:
      " Key documents include loan account statements, ID proof, income details, and correspondence with lenders.",
  },
  {
    question: " Is there a fee for consulting with Settle Mitra?",
    answer:
      "Yes, we charge a nominal consultation fee, which will be discussed upfront during your initial consultation.",
  },
  {
    question:
      "Can I negotiate with my lender directly instead of using Settle Mitra?",
    answer:
      "Yes, but professional guidance can improve your chances of achieving a favorable settlement with reduced stress.",
  },
  {
    question: "What if my lender refuses to settle my loan?",
    answer:
      "While this can happen, our expert negotiators will explore alternative strategies or payment restructuring options to assist you.",
  },
  {
    question: "How can I get started with Settle Mitra?",
    answer:
      "Simply visit our website, fill out the consultation form, and our financial advisors will connect with you to discuss your options.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 3;

  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialVisibleCount);

  return (
    <section className="py-16 bg-gray-50" id="faqs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex items-center justify-between p-4 rounded-lg ${
                  openIndex === index ? "bg-green-600 text-white" : "bg-white"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors inline-flex items-center"
              onClick={() => setShowAll(true)}
            >
              View all questions
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

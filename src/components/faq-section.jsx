"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What kind of loans can be settled through settleloan.in?",
    answer:
      "SettlesMyLoan assists in resolving both unsecured and secured loans, including credit card debts, personal loans, consumer loans, business loans, home loans, vehicle loans, and education loans. Our tailored solutions provide effective relief for diverse financial challenges.",
  },
  {
    question: "How much time it takes to settle the loan?",
    answer:
      "The loan settlement process with SettlesMyLoan typically spans 12 to 18 months, though individual timelines may vary based on your specific financial situation and potential savings. We work diligently to expedite your path to financial freedom.",
  },
  {
    question: "Will I be charged interest and late fees on my loans?",
    answer:
      "While creditors may continue to add interest and late fees, you will ultimately pay less than your original outstanding amount at the time of enrolling in the settlement program.",
  },
  {
    question: "How do I handle the calls from the bank or recovery agent?",
    answer:
      "You may continue to receive calls from the bank or recovery agents regarding your loan. However, it's important to understand that these entities are required to follow a specific code of conduct established by the Reserve Bank of India (RBI) and the Supreme Court of India. These guidelines are designed to protect borrowers from harassment and ensure fair debt collection practices.",
  },
  {
    question: "What happens if the lender takes legal action against me?",
    answer:
      "While creditors retain the legal right to pursue cases for unpaid debts, most prefer negotiated settlements when feasible. Our experienced legal advisors at SettlesMyLoan are prepared to assist you should any legal challenges arise. We aim to resolve matters efficiently, often avoiding courtroom proceedings through skilled negotiation and our deep understanding of debt settlement practices. Our team works diligently to protect your interests and seek the most favorable outcome in your financial situation.",
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

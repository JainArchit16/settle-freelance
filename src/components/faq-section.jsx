"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What kind of loans can be settled through settleloan.in?",
    answer:
      "Settle Loan help in settling both Unsecured and secured loans like credit card loans, personal loans, consumer loans, business loans, home loans, vehicle loans and education loans, etc.",
  },
  {
    question: "How much time it takes to settle the loan?",
    answer:
      "The time taken to settle a loan varies depending on various factors including the type of loan, amount, and lender. Our team works efficiently to complete the settlement process as quickly as possible.",
  },
  {
    question: "Will I be charged interest and late fees on my loans?",
    answer:
      "During the settlement process, we work to negotiate not just the principal amount but also the interest and late fees. Our goal is to reduce your overall financial burden.",
  },
  {
    question: "How do I handle the calls from the bank or recovery agent?",
    answer:
      "Once you enroll in our program, we provide guidance on handling communications from banks and recovery agents. We can also intervene on your behalf when necessary.",
  },
  {
    question: "What happens if the lender takes legal action against me?",
    answer:
      "Our team includes legal experts who can provide guidance and support if legal action is initiated. We work to protect your interests throughout the settlement process.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex items-center justify-between p-4 rounded-lg ${
                  openIndex === index ? "bg-green-600 text-white" : "bg-white"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors inline-flex items-center">
            View all questions
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}


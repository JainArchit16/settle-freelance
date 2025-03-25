import React from "react";

const steps = [
  {
    title: "Connect with Our Advisor",
    description:
      "Reach out to our experienced financial consultant to review your financial situation. During this discussion, you'll explore options for managing loans, EMIs, and determine your eligibility for a suitable debt relief plan.",
  },
  {
    title: "Join Our Debt Management Program",
    description:
      "To begin, you'll need to register for our Settle Loan program. This requires signing a formal agreement that details our fees and the entire negotiation strategy",
  },
  {
    title: "Build Your Savings",
    description:
      "After enrollment, you'll start adding funds to a designated savings account. These savings are vital for future negotiations and play a crucial role in reducing your outstanding debts.",
  },
  {
    title: "Financial Assessment",
    description:
      "Our advisor will analyze your income, expenses, and debts to recommend the most effective settlement plan tailored to your financial circumstances.",
  },
  {
    title: "Creditor Negotiation",
    description:
      "Once your savings have reached a sufficient amount, our legal team will initiate discussions with your creditors. Their objective is to negotiate a reduced settlement amount that minimizes your total debt",
  },
  {
    title: "Final Settlement",
    description:
      "Following successful negotiations, you will pay the agreed-upon amount from your savings account. Upon completion, you'll receive a confirmation letter verifying that your debt has been settled.",
  },
  {
    title: "Enjoy Financial Independence",
    description:
      "With your debts resolved, you can embrace a stable financial future. Our goal is to help you regain control over your finances and achieve lasting peace of mind.",
  },
];

const Step = ({ number, title, description }) => (
  <div className="flex">
    <div className="mr-4 mt-1">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#0e1621] text-white py-16 px-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Strategy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <Step key={index} number={index + 1} {...step} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="#callback-section"
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors text-bold"
          >
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}

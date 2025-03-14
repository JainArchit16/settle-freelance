import { Check } from "lucide-react";

const steps = [
  {
    title: "Evaluation",
    description:
      "Our Financial Advisor will assess your income and debt situation to identify the most suitable loan settlement program tailored to your specific financial circumstances.",
  },
  {
    title: "Talk to our Financial Advisor",
    description:
      "Consult with our financial advisor to review your loans and EMIs, determine your eligibility for loan settlement, and embark on the path to achieving financial freedom.",
  },
  {
    title: "Enrol",
    description:
      "To utilize our services, enrollment in our Settle Loan program is required. This process includes signing a contract that clearly details the associated fees and outlines the comprehensive negotiation process.",
  },
  {
    title: "Negotiation",
    description:
      "After you've built up sufficient savings, our legal team initiates negotiations with your creditors. We strive to secure a settlement that significantly reduces your payable amount compared to the original debt, advocating on your behalf throughout the process.",
  },
  {
    title: "Savings",
    description:
      "Once enrolled in our Loan Settlement Program, you'll start building a savings fund dedicated to resolving your debt efficiently. This accumulated amount becomes a powerful tool in our negotiations with lenders, helping to alleviate your financial stress and pave the way for a more secure future.",
  },
  {
    title: "Debt-Free Life",
    description:
      "Join our Settlement program to start saving towards a debt-free future. We'll work to optimize your savings plan and negotiate a successful loan settlement. Once settled, you'll receive confirmation and can enjoy the peace of mind that comes with being debt-free.",
  },
];

const Step = ({ title, description }) => (
  <div className="flex">
    <div className="mr-4 mt-1">
      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
        <Check className="w-5 h-5 text-white" />
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
          How we work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        {/* Uncomment if needed
        <div className="flex justify-center mt-12">
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors">
            Request a Callback
          </button>
        </div>
        */}
      </div>
    </section>
  );
}

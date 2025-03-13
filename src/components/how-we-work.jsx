import { Check } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#0e1621] text-white py-16 px-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How we work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Talk to our Financial Advisor */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Talk to our Financial Advisor
              </h3>
              <p className="text-gray-300">
                Connect with our financial advisor to discuss your loans and
                EMIs and check your eligibility for loan Settlement, and take
                the first step towards becoming debt-free.
              </p>
            </div>
          </div>

          {/* Evaluation */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-300">
                Our Financial Advisor will conduct an evaluation of your income
                and debt status to determine your eligibility for a settled loan
                program that is best suited to your unique needs.
              </p>
            </div>
          </div>

          {/* Enrol */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enrol</h3>
              <p className="text-gray-300">
                In order to access our company's services, you must enroll in
                our Settle Loan program. This involves signing a contract that
                outlines the fees you will incur and the complete negotiation
                process.
              </p>
            </div>
          </div>

          {/* Savings */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Savings</h3>
              <p className="text-gray-300">
                Upon enrollment in our Loan Settlement Program, you will begin
                to save money in your account for a fast-track journey of debt
                Settlement. These funds will be utilized when negotiating with
                your lenders, alleviating any concerns or distress you may have
                experienced.
              </p>
            </div>
          </div>

          {/* Negotiation */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Negotiation</h3>
              <p className="text-gray-300">
                Once you have accumulated enough funds in your savings account,
                our team of legal advisors will begin negotiations with your
                creditors on your behalf. Through these negotiations, our
                advisors will work to reach a Settlement with the creditors,
                which will result in a reduced amount due to be paid in
                comparison to the original amount owed.
              </p>
            </div>
          </div>

          {/* Debt-Free Life */}
          <div className="flex">
            <div className="mr-4 mt-1">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Debt-Free Life</h3>
              <p className="text-gray-300">
                Join our Settlement program to save money in your account. We
                will strive to secure the best savings program and settle your
                loan. Upon Settlement, you will receive a letter and enjoy a
                debt- free life.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center mt-12">
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors">
            Request a Callback
          </button>
        </div> */}
      </div>
    </section>
  );
}

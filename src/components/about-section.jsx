import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] w-full">
              <Image
                src="/founder-image.jpg"
                alt="Settle Loan Founder"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-0.5 bg-green-600 mr-2"></div>
                <span className="text-green-600 font-medium uppercase">
                  ABOUT SETTLE LOAN
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Debt Relief and Settlement Company
              </h2>

              <p className="text-gray-700 mb-4">
                Settle Loan is a prominent fintech company specialising in loan
                Settlement and debt Settlement services. Our advanced solutions
                are designed to assist individuals facing financial challenges
                to overcome the burden of debt.
              </p>

              <p className="text-gray-700">
                With our expertise and professional approach, we help clients
                negotiate with creditors to reduce their outstanding debt and
                establish manageable repayment plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 bottom-0 w-80 h-80 border-[30px] border-red-200 rounded-full"></div>
      </div>
    </section>
  );
}

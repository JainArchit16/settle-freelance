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
                <span className="text-green-600 font-medium">
                  ABOUT SettlesMyLoan
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Debt Relief and Settlement Company
              </h2>

              <p className="text-gray-700 mb-4">
                SettlesMyLoan is a dynamic fintech startup dedicated to
                providing effective Loan Settlement and Debt Relief solutions.
                Founded with the vision to assist individuals struggling with
                overwhelming financial burdens, SettlesMyLoan offers innovative
                strategies to help clients break free from the cycle of debt.
              </p>

              <p className="text-gray-700">
                Our expert consultants work closely with borrowers, negotiating
                with banks and financial institutions to secure favorable
                settlement terms — ensuring a clear path toward financial
                stability.
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

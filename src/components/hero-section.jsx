import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center px-5">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-2/3 opacity-30 pointer-events-none">
        <div className="absolute right-20 top-20 w-40 h-40 border-2 border-white rotate-45 opacity-30"></div>
        <div className="absolute right-40 top-40 w-40 h-40 border-2 border-white rotate-45 opacity-30"></div>
        <div className="absolute right-60 top-60 w-40 h-40 border-2 border-white rotate-45 opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            India's No.1 Trusted Choice For Expert Loan Settlement Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Settle Mitra: Leading Experts in Loan Settlement Solutions. We
            specialize in resolving personal loan challenges while ensuring
            protection from creditor harassment. Trust our proven strategies for
            a seamless and stress-free debt resolution.
          </p>
          <a
            href="#callback-section"
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

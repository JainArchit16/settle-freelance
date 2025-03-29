import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";

export default function ContactNHeader() {
  return (
    <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 z-10" />
      <Image
        src="/7.jpg"
        alt="Financial services background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            We're dedicated to helping you achieve financial freedom through
            expert debt settlement solutions.
          </p>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-10 h-10 text-white animate-bounce" />
      </div>
    </div>
  );
}

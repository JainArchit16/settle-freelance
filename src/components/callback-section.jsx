"use client";

import Image from "next/image";

export default function CallbackSection() {
  return (
    <section id="callback-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Get a Free Consultation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fill out the form below and our team will contact you to discuss how
            we can help with your needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="section-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="section-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="section-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="section-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="section-phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="section-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
            <div className="hidden md:block relative bg-blue-50">
              <Image
                src="/placeholder.svg?height=600&width=500"
                width={400}
                height={400}
                alt="Customer service representative"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

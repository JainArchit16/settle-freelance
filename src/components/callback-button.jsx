"use client";

import { useState } from "react";

export default function CallbackButton() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToCallbackSection = () => {
    const section = document.getElementById("callback-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="relative">
        <button
          onClick={scrollToCallbackSection}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label="Request a callback"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        <span
          className={`absolute left-full ml-3 px-3 -translate-y-10 py-1 rounded-md bg-white border text-sm whitespace-nowrap transition-all duration-200 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }`}
        >
          Request a Callback
        </span>
      </div>
    </div>
  );
}

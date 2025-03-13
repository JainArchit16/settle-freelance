"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <Button
          onClick={scrollToCallbackSection}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>

        <span
          className={cn(
            "absolute left-full ml-3 px-3 py-1 rounded-md bg-background border text-sm whitespace-nowrap transition-all duration-200",
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          )}
        >
          Request a Callback
        </span>
      </div>
    </div>
  );
}

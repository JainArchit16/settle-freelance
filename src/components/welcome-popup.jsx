"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closePopup}
      />

      {/* Popup */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500",
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div
          className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Get a Free Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you to discuss
                how we can help with your needs.
              </p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="popup-name">Full Name</Label>
                  <Input
                    id="popup-name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="popup-email">Email</Label>
                  <Input
                    id="popup-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="popup-phone">Phone Number</Label>
                  <Input
                    id="popup-phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Submit Request
                </Button>
              </form>
            </div>
            <div className="hidden md:block relative bg-primary/10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                width={500}
                height={600}
                alt="Customer service representative"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function CallbackSection() {
  return (
    <section id="callback-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Get a Free Consultation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our team will contact you to discuss how
            we can help with your needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="section-name">Full Name</Label>
                  <Input
                    id="section-name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section-email">Email</Label>
                  <Input
                    id="section-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section-phone">Phone Number</Label>
                  <Input
                    id="section-phone"
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
    </section>
  );
}

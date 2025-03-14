import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowWeWork from "@/components/how-we-work";
import FAQSection from "@/components/faq-section";
import CallbackButton from "@/components/callback-button";

import CallbackSection from "@/components/callback-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowWeWork />
      <CallbackSection />
      <FAQSection />
      <CallbackButton />
    </main>
  );
}

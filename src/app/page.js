import Header from "@/components/header";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowWeWork from "@/components/how-we-work";
import FAQSection from "@/components/faq-section";
import CallbackButton from "@/components/callback-button";
import Footer from "@/components/footer";
import WelcomePopup from "@/components/welcome-popup";
import CallbackSection from "@/components/callback-section";

export default function Home() {
  return (
    <main>
      <WelcomePopup />
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowWeWork />
      <CallbackSection />
      <FAQSection />
      <Footer />
      <CallbackButton />
    </main>
  );
}

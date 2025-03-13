import Header from "@/components/header";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowWeWork from "@/components/how-we-work";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowWeWork />
      <FAQSection />
      <Footer />
    </main>
  );
}

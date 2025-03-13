import Header from "@/components/header";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowWeWork from "@/components/how-we-work";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowWeWork />
    </main>
  );
}

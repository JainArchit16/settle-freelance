import ServicesHero from "@/components/services/services-hero";
import ServicesCategories from "@/components/services/services-categories";
import ServicesFeatured from "@/components/services/services-featured";
import ServicesProcess from "@/components/services/services-process";
import ServicesPricing from "@/components/services/services-pricing";
import ServicesCta from "@/components/services/services-cta";
import Footer from "@/components/footer";

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <ServicesHero />
      <ServicesCategories />
      <ServicesFeatured />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesCta />
      <Footer />
    </main>
  );
}

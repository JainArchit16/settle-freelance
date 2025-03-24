import ServicesHero from "@/components/services/services-hero";
import ServicesCategories from "@/components/services/services-categories";

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <ServicesHero />
      <ServicesCategories />
      {/* <ServicesFeatured /> */}
      {/* <ServicesProcess /> */}
      {/* <ServicesPricing /> */}
      {/* <ServicesCta /> */}
    </main>
  );
}

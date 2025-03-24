import { notFound } from "next/navigation";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceBenefits from "@/components/services/service-benefits";
import ServiceProcess from "@/components/services/service-process";
import ServiceFaq from "@/components/services/service-faq";
import ServiceRelated from "@/components/services/service-related";
import ServiceCta from "@/components/services/service-cta";
import { getServiceData } from "@/lib/services";

export function generateMetadata({ params }) {
  const service = getServiceData(params.slug);

  if (!service) {
    return {
      title: "Service Not Found - Settle Mitra",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} - Settle Mitra`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />
      <Navbar />
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess service={service} />
      <ServiceFaq service={service} />
      <ServiceRelated currentSlug={params.slug} />
      <ServiceCta service={service} />
      <Footer />
    </main>
  );
}

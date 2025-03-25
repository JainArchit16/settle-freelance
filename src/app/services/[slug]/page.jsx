import { notFound } from "next/navigation";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";

import ServiceRelated from "@/components/services/service-related";
import { services } from "@/lib/services";

function getServiceData(slug) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceData(slug);

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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      {/* <ServiceBenefits service={service} /> */}
      {/* <ServiceProcess service={service} /> */}
      {/* <ServiceFaq service={service} /> */}
      <ServiceRelated currentSlug={slug} />
      {/* <ServiceCta service={service} /> */}
    </main>
  );
}

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import ContactNHeader from "@/components/contactnheader";

export default function ContactPage() {
  return (
    <main>
      <ContactNHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl mb-6">
              For any queries please fill the form below:
            </h2>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}

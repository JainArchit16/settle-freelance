import { Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Or Call Us</h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-green-600 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Tollfree:</p>
            <a
              href="tel:1800-309-1902"
              className="text-lg font-medium hover:text-green-600 transition-colors"
            >
              1800-309-1902
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-green-600 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Email:</p>
            <a
              href="mailto:info@settleloan.in"
              className="text-lg font-medium hover:text-green-600 transition-colors"
            >
              info@settleloan.in
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-green-600 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Office Timings:</p>
            <p className="text-lg font-medium">9:00am - 6:00pm (Mon - Sat)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

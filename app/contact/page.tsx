import { Metadata } from 'next';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Your Web Service Co. for inquiries or project discussions.',
};

export default function ContactPage() {
  // NOTE: Form submission requires a backend or a service like Formspree/Netlify Forms.
  // This is just the frontend structure.

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form action="#" method="POST" className="space-y-6"> {/* Replace action with your endpoint */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
             <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Contact Info & Map */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <MapPinIcon className="h-6 w-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
              <span>
                123 Web Service St,<br />
                Suite 100,<br />
                Anytown, CA 90210
              </span>
            </p>
            <p className="flex items-center">
               <EnvelopeIcon className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" />
               <a href="mailto:info@yourwebservice.com">info@yourwebservice.com</a>
            </p>
            <p className="flex items-center">
               <PhoneIcon className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" />
               <a href="tel:+1234567890">(123) 456-7890</a>
            </p>
          </div>

          {/* Embedded Map */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
             {/* Replace with your actual Google Maps embed code */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956137356696!3d-6.194741393792383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356280477!2sJakarta!5e0!3m2!1sen!2sid!4v1632118808881!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
                className="rounded-md shadow-sm"
             ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
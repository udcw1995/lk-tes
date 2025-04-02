import { Metadata } from 'next';
import { getSortedContentData, getContentData, ContentItem } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Detailed information about the web development, design, and SEO services we offer.',
};

export default async function ServicesPage() {
  // Fetch detailed service data including HTML content
  const serviceIds = (await getSortedContentData('services')).map(s => s.id);
  const services: (ContentItem | null)[] = await Promise.all(
    serviceIds.map(id => getContentData('services', id))
  );
  const validServices = services.filter(s => s !== null) as ContentItem[];


  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">What We Offer</h1>

      {validServices.length === 0 ? (
          <p className="text-center text-gray-600">Service details coming soon!</p>
      ) : (
        <div className="space-y-12">
          {validServices.map((service) => (
            <section key={service.id} className="bg-white p-6 md:p-8 rounded-lg shadow-md">
               {/* Optional: Add icon */}
               {/* {service.icon && <span className="text-3xl mb-4 inline-block">{service.icon}</span>} */}
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              {service.contentHtml && (
                <div
                  className="prose prose-blue max-w-none" // Tailwind prose for markdown styling
                  dangerouslySetInnerHTML={{ __html: service.contentHtml }}
                />
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
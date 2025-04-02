import { Metadata } from 'next';
import Image from 'next/image';
import { getSortedContentData, getContentData, ContentItem } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'See what our clients say about working with Your Web Service Co.',
};

export default async function TestimonialsPage() {
  // Fetch detailed testimonial data including HTML content
  const testimonialIds = (await getSortedContentData('testimonials')).map(t => t.id);
  const testimonials: (ContentItem | null)[] = await Promise.all(
    testimonialIds.map(id => getContentData('testimonials', id))
  );
  const validTestimonials = testimonials.filter(t => t !== null) as ContentItem[];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-center">What Our Clients Say</h1>

      {validTestimonials.length === 0 ? (
        <p className="text-center text-gray-600">No testimonials yet. Be the first!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {validTestimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
               {testimonial.contentHtml && (
                  <div
                    className="prose prose-sm max-w-none text-gray-700 italic mb-4 flex-grow" // Smaller prose style
                    dangerouslySetInnerHTML={{ __html: testimonial.contentHtml }}
                  />
                )}
                <footer className="mt-4 pt-4 border-t border-gray-200 flex items-center">
                  {testimonial.image && (
                       <Image
                           src={testimonial.image}
                           alt={testimonial.clientName ?? 'Client'}
                           width={40}
                           height={40}
                           className="w-10 h-10 rounded-full mr-3 object-cover"
                       />
                  )}
                  <div>
                      <p className="font-semibold text-gray-900">{testimonial.clientName}</p>
                      {testimonial.company && (
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                      )}
                  </div>
                </footer>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
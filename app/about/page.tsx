import { Metadata } from 'next';
import Image from 'next/image'; // Import Next.js Image component

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Our Company\'s mission, vision, and the team behind our success.',
};

// Example Team Data (replace or fetch from CMS/Markdown)
const teamMembers = [
    { name: 'Alice Smith', role: 'CEO & Founder', image: '/images/team/alice.jpg' },
    { name: 'Bob Johnson', role: 'Lead Developer', image: '/images/team/bob.jpg' },
    { name: 'Charlie Brown', role: 'Lead Designer', image: '/images/team/charlie.jpg' },
];

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Founded in [Year], [Your Web Service Co.] started with a passion for building beautiful, functional websites that help businesses succeed online. We believe in the power of technology combined with great design to create impactful digital experiences... [Add more about your company history].
        </p>
        {/* Add placeholder image or company photo */}
        {/* <Image src="/images/company-photo.jpg" alt="Our Team" width={800} height={400} className="rounded-lg mb-4" /> */}
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-lg shadow-sm">
             <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
             <p className="text-gray-700 leading-relaxed">
               To empower businesses by creating innovative, high-quality web solutions that drive growth and deliver measurable results.
             </p>
         </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
             <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
             <p className="text-gray-700 leading-relaxed">
               To be a leading web service provider recognized for our creativity, technical expertise, and commitment to client success.
             </p>
         </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
               <Image
                   src={member.image}
                   alt={member.name}
                   width={150}
                   height={150}
                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" // Style for circular image
               />
               <h3 className="text-xl font-semibold">{member.name}</h3>
               <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
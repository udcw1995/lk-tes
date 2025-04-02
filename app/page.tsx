import Link from "next/link";
import { getSortedContentData, ContentItem } from "@/lib/markdown"; // Adjust path if needed
import Image from "next/image"; // Import Next.js Image component

// Example structure for service items if not using markdown for this section
const keyServices = [
  {
    name: "Web Development",
    description: "Building fast, scalable sites.",
    icon: "💻",
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive user experiences.",
    icon: "🎨",
  },
  {
    name: "SEO Optimization",
    description: "Boosting your online visibility.",
    icon: "🚀",
  },
];

export default async function HomePage() {
  // Fetch latest 2 projects for showcase on home (optional)
  const latestProjects = (await getSortedContentData("projects")).slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Build Your Digital Future
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          We are [Your Web Service Co.], crafting exceptional web experiences
          with cutting-edge technology and user-centric design.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-300 hover:bg-blue-700 text-zinc-950 group font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          <span className="group-hover:text-amber-50 transition duration-300">
            Get In Touch
          </span>
        </Link>
      </section>

      {/* Key Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {keyServices.map((service) => (
            <div
              key={service.name}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-blue-600 hover:underline">
            Explore All Services →
          </Link>
        </div>
      </section>

      {/* Recent Projects Showcase (Optional) */}
      {latestProjects.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {latestProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title ?? "Project image"}
                    width={500} // Provide appropriate width
                    height={300} // Provide appropriate height
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  {/* You might want a shorter description here or link to the full project page */}
                  <Link
                    href={`/projects#${project.id}`} // Link to section on projects page
                    className="text-blue-600 hover:underline mt-4 inline-block"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="text-blue-600 hover:underline">
              See All Projects →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

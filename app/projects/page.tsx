import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedContentData, ContentItem } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of web development, design, and SEO projects.',
};

// Helper component for rendering technologies
const TechChip = ({ tech }: { tech: string }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
    {tech}
  </span>
);

export default async function ProjectsPage() {
  const projects: ContentItem[] = await getSortedContentData('projects');

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Work</h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-600">No projects to display yet. Check back soon!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
               {project.image && (
                  <div className="relative w-full h-56"> {/* Fixed height container */}
                    <Image
                       src={project.image}
                       alt={project.title ?? 'Project screenshot'}
                       fill // Use fill to cover the container
                       style={{ objectFit: 'cover' }} // Ensure image covers area
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Help optimize image loading
                    />
                  </div>
               )}
              <div className="p-6 flex flex-col flex-grow"> {/* Flex grow for content */}
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                {/* We need to fetch contentHtml if we want the description */}
                {/* For now, let's assume a short 'excerpt' field in frontmatter */}
                {project.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.excerpt}</p>
                )}
                 <div className="mb-4">
                   {project.technologies && Array.isArray(project.technologies) && (
                      project.technologies.map((tech: string) => <TechChip key={tech} tech={tech} />)
                   )}
                 </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors mt-auto inline-block self-start" // mt-auto pushes link down
                  >
                    Visit Site →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
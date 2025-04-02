import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content'); // Base content directory

// --- Generic Function to Get Sorted Data ---
// type can be 'projects', 'testimonials', 'blog', 'services' etc.
export interface ContentItem {
    id: string;
    contentHtml?: string; // Optional: Only include if needed on list pages
    [key: string]: any; // To allow for any frontmatter fields
}

export async function getSortedContentData(contentType: string): Promise<ContentItem[]> {
    const dirPath = path.join(contentDirectory, contentType);
    try {
        const fileNames = fs.readdirSync(dirPath);
        const allContentData = await Promise.all(fileNames
            .filter(fileName => fileName.endsWith('.md')) // Ensure it's a markdown file
            .map(async (fileName) => {
                const id = fileName.replace(/\.md$/, ''); // Remove ".md" from file name to get id
                const fullPath = path.join(dirPath, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const matterResult = matter(fileContents); // Parse metadata section

                // Optionally process content to HTML if needed immediately
                // const processedContent = await remark()
                //     .use(html)
                //     .process(matterResult.content);
                // const contentHtml = processedContent.toString();

                return {
                    id,
                    ...(matterResult.data as { [key: string]: any }), // Spread frontmatter data
                    // contentHtml, // Uncomment if needed
                };
            }));

        // Sort content by date (if available) or title
        return allContentData.sort((a, b) => {
            if (a.date && b.date) {
                return a.date < b.date ? 1 : -1;
            } else if (a.order && b.order) {
                return a.order > b.order ? 1 : -1;
            } else {
                // Fallback sort by title or id if no date/order
                const titleA = a.title?.toUpperCase() || a.id.toUpperCase();
                const titleB = b.title?.toUpperCase() || b.id.toUpperCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return []; // Return empty array on error
    }
}

// --- Generic Function to Get Single Content Item Data with HTML ---
export async function getContentData(contentType: string, id: string): Promise<ContentItem | null> {
    const fullPath = path.join(contentDirectory, contentType, `${id}.md`);
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id,
            contentHtml,
            ...(matterResult.data as { [key: string]: any }),
        };
    } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error);
        return null; // Return null if file not found or error occurs
    }
}

// --- Function to Get All Content IDs (for generateStaticParams) ---
export function getAllContentIds(contentType: string): { params: { slug: string } }[] {
    const dirPath = path.join(contentDirectory, contentType);
    try {
        const fileNames = fs.readdirSync(dirPath);
        return fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map(fileName => {
                return {
                    params: {
                        // Use 'slug' as the parameter name to match folder [slug]
                        slug: fileName.replace(/\.md$/, ''),
                    },
                };
            });
    } catch (error) {
        console.error(`Error reading directory ${dirPath} for IDs:`, error);
        return [];
    }
}
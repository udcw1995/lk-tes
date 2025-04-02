import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Default SEO Metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Your Web Service Co.', // Title template for pages
    default: 'Your Web Service Co. - Building Amazing Web Experiences', // Default title
  },
  description: 'We provide top-notch web development, design, and SEO services.',
  keywords: ['web development', 'web design', 'seo', 'react', 'nextjs', 'typescript'],
  openGraph: {
      title: 'Your Web Service Co.',
      description: 'Building Amazing Web Experiences.',
      url: 'https://yourwebsite.com', // Replace with your actual domain
      siteName: 'Your Web Service Co.',
      images: [
        {
          url: '/images/og-image.jpg', // Create an OG image in public/images
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Your Web Service Co.',
      description: 'Building Amazing Web Experiences.',
      // siteId: 'YourTwitterID', // Optional
      // creator: '@YourTwitterHandle', // Optional
      images: ['/images/og-image.jpg'], // Must be absolute URL in production
  },
  // Add more metadata as needed (robots, icons, etc.)
  metadataBase: new URL('https://yourwebsite.com'), // **IMPORTANT for relative image URLs** Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
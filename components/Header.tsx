'use client';

import Link from 'next/link'; // Make sure this import is present
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Ensure these href values exactly match your desired URL paths
const navigation = [
  { name: 'Home', href: '/' },          // For app/page.tsx
  { name: 'About', href: '/about' },      // For app/about/page.tsx
  { name: 'Services', href: '/services' },  // For app/services/page.tsx
  { name: 'Projects', href: '/projects' },  // For app/projects/page.tsx
  { name: 'Testimonials', href: '/testimonials' }, // For app/testimonials/page.tsx
  { name: 'Contact', href: '/contact' },    // For app/contact/page.tsx
  // { name: 'Blog', href: '/blog' },       // For app/blog/page.tsx (Optional)
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900"> {/* Link for logo */}
          Your Logo / Co. Name
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link // Using Link component
              key={item.name}
              href={item.href} // Using the correct href
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ... (rest of the mobile menu logic, ensuring Links are used there too) ... */}
         {/* Mobile Menu Panel */}
         {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-white/80 backdrop-blur-sm">
               <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                   <Link href="/" className="text-xl font-bold text-gray-900" onClick={() => setMobileMenuOpen(false)}> {/* Link */}
                     Your Logo / Co. Name
                   </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link // Using Link component here too
                          key={item.name}
                          href={item.href} // Using the correct href
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </nav>
    </header>
  );
}
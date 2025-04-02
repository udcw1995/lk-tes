import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8 text-center text-sm text-gray-600">
      <div className="container mx-auto px-4">
        {/* Optional: Add social links or quick links here */}
        {/* <div className="flex justify-center space-x-6 mb-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div> */}
        <p>© {currentYear} Your Web Service Co. All rights reserved.</p>
        <p className="mt-1">
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
        </p>
      </div>
    </footer>
  );
}
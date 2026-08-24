import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center sm:text-left">
            <p className="font-medium text-gray-900 dark:text-white">
              Vishwa Prakash
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Web Developer • Next.js & TypeScript
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/about" className="hover:text-black dark:hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-black dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/vshmps24-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishwa-prakash-b2728315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Vishwa Prakash. Built with Next.js
        </div>
      </div>
    </footer>
  );
}
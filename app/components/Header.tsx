import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Vishwa Prakash
        </Link>

        <nav className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-black dark:hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white">
            About
          </Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-white">
            Contact
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
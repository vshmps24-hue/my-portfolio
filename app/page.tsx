import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-gray-50 dark:bg-gray-950">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I&apos;m Vishwa Prakash
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Web Developer focused on building clean and useful applications with Next.js, React, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition text-center"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition text-center text-gray-900 dark:text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
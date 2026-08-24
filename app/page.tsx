import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[85vh] flex flex-col items-center justify-center px-6 bg-gray-50 dark:bg-gray-950">
      <div className="text-center max-w-2xl animate-fade-in">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wide uppercase">
          Web Developer
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
          Hi, I&apos;m Vishwa Prakash
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          I build clean, fast, and useful web applications using Next.js, React, and TypeScript.
          Currently focused on creating real projects and growing as a developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition text-center font-medium"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-7 py-3.5 rounded-lg hover:bg-white dark:hover:bg-gray-900 transition text-center text-gray-900 dark:text-white font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
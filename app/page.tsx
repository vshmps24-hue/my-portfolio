import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m Vishwa Prakash
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Web Developer focused on building clean and useful applications with Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
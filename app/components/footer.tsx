export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Vishwa Prakash. Built with Next.js</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/vshmps24-hue"
            target="_blank"
            className="hover:text-gray-800 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vishwa-prakash-b2728315"
            target="_blank"
            className="hover:text-gray-800 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
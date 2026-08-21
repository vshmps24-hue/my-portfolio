export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Vishwa Prakash. Built with Next.js</p>
        <div className="flex gap-4 justify-center mt-4">
          <a
            href="https://github.com/vshmps24-hue"
            target="_blank"
            className="hover:text-gray-800"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vishwa-prakash-b2728315"
            target="_blank"
            className="hover:text-gray-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
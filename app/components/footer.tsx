export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vishwa Prakash. Built with Next.js
      </div>
    </footer>
  );
}
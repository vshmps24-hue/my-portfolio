import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
                Vishwa Prakash
            </Link>

            <nav className="flex gap-6 text-gray-700">
                <Link href="/" className="hover:text-black">
                    Home
                </Link>
                <Link href="/about" className="hover:text-black">
                    About
                </Link>
                <Link href="/projects" className="hover:text-black">
                    Projects
                </Link>
                <Link href="/contact" className="hover:text-black">
                    Contact
                </Link>
                </nav>
        </div>
    </header>
  );
}
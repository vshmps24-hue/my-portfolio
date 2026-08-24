"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
          onClick={closeMenu}
        >
          Vishwa Prakash
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300">
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

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-600"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close (X) icon
              <span className="text-xl">✕</span>
            ) : (
              // Hamburger icon
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 dark:text-gray-300">
            <Link href="/" onClick={closeMenu} className="hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className="hover:text-black dark:hover:text-white">
              About
            </Link>
            <Link href="/projects" onClick={closeMenu} className="hover:text-black dark:hover:text-white">
              Projects
            </Link>
            <Link href="/contact" onClick={closeMenu} className="hover:text-black dark:hover:text-white">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
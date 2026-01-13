"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              AI Brain Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Our Product
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link
                    href="#salmate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Salmate
                  </Link>
                  <Link
                    href="#wisdom"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Wisdom
                  </Link>
                  <Link
                    href="#edge"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Edge
                  </Link>
                  <Link
                    href="#esg-studio"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    ESG Studio
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="#news"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              News
            </Link>
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#products"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Our Product
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#news"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="#contact"
              className="block bg-primary-600 text-white px-6 py-2 rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


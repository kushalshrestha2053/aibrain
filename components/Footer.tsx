"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              AI Brain Lab
            </h3>
            <p className="text-gray-400 leading-relaxed">
              AI Brain Lab helps organizations automate workflows and make
              smarter decisions using AI.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#wisdom"
                  className="hover:text-primary-400 transition-colors"
                >
                  Wisdom
                </Link>
              </li>
              <li>
                <Link
                  href="#salmate"
                  className="hover:text-primary-400 transition-colors"
                >
                  Salmate
                </Link>
              </li>
              <li>
                <Link
                  href="#edge"
                  className="hover:text-primary-400 transition-colors"
                >
                  Edge
                </Link>
              </li>
              <li>
                <Link
                  href="#esg-studio"
                  className="hover:text-primary-400 transition-colors"
                >
                  ESG Studio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:info@aibrainlab.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@aibrainlab.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href="tel:+66860064744"
                  className="hover:text-primary-400 transition-colors"
                >
                  (+66) 086-006-4744
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>©2026 | All Rights Reserved by AI Brain Lab Co., Ltd.</p>
        </div>
      </div>
    </footer>
  );
}


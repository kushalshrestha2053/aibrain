"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BookOpen,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "salmate",
    name: "Salmate",
    icon: MessageSquare,
    description:
      "Salmate brings all customer interactions into one AI-powered platform helping teams respond faster, work smarter, and deliver consistent experiences across every channel.",
    features: [
      {
        title: "Omnichannel",
        description:
          "Manage LINE, Facebook, web chat, and email from a single dashboard—no more switching tools or losing context.",
      },
      {
        title: "AI Assistance",
        description:
          "Automate repetitive queries, suggest smart replies, and let your agents focus on complex, high-value cases.",
      },
      {
        title: "Smart Workflows",
        description:
          "Design ticket routing, alerts, and follow-ups with flexible workflows that adapt to your business processes.",
      },
      {
        title: "Analytics",
        description:
          "Track performance, SLAs, and customer satisfaction in real time—make informed decisions instantly.",
      },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "wisdom",
    name: "Wisdom",
    icon: BookOpen,
    description:
      "Wisdom is a groundbreaking AI-driven platform designed to preserve and share the invaluable knowledge and insights of influential leaders for future generations.",
    features: [],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "edge",
    name: "Edge",
    icon: Zap,
    description:
      "Edge computing solutions for real-time AI processing at the edge of your network.",
    features: [],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "esg-studio",
    name: "ESG Studio",
    icon: BarChart3,
    description:
      "ESG Studio is a comprehensive platform designed to simplify and streamline the Environmental, Social, and Governance (ESG) reporting process.",
    features: [],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our real-world AI solutions that are transforming industries.
          </p>
        </motion.div>

        <div className="space-y-24">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  {product.features.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  <Link
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div
                    className={`relative h-96 rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                    <Icon className="w-32 h-32 text-white/90 relative z-10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


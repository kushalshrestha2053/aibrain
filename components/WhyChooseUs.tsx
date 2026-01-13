"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Heart,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    title: "Enterprise-Ready Solutions",
    description:
      "Built for scale with robust infrastructure and proven reliability.",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Secure & Responsible AI",
    description:
      "Enterprise-grade security with ethical AI practices and compliance.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Trusted Across Industries",
    description:
      "Proven track record with leading organizations worldwide.",
    icon: Award,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Human-Centered Intelligence",
    description:
      "AI that augments human capabilities, not replaces them.",
    icon: Heart,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Research-Driven Foundation",
    description:
      "Cutting-edge research powers our innovative solutions.",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver AI solutions that make a real difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


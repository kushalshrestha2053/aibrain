"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Brain,
  Database,
  Bot,
  Settings,
  Eye,
  UserCog,
  FileText,
  Mic,
  Volume2,
  Search,
  TrendingUp,
  LayoutDashboard,
} from "lucide-react";

const capabilities = [
  {
    title: "Workflow Automation",
    description:
      "Automate complex workflows across customer service, claims, and enterprise operations using AI chatbots, workflow builders, and intelligent copilots.",
    icon: Workflow,
    items: [
      { name: "AI Chatbot", icon: Bot },
      { name: "Workflow Builder", icon: Settings },
      { name: "Knowledge Hub", icon: FileText },
      { name: "Monitoring", icon: Eye },
      { name: "Human Co-Pilot", icon: UserCog },
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Foundational Models",
    description:
      "Proprietary AI models trained by AIBL for enterprise accuracy, security, and performance—powering speech, language, and document intelligence.",
    icon: Brain,
    items: [
      { name: "OCR", icon: FileText },
      { name: "Speech-to-Text", icon: Mic },
      { name: "Text-to-Speech", icon: Volume2 },
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Automated Data Management",
    description:
      "Unify data from documents, calls, systems, and the web into a single 360° intelligence layer with predictive analytics and SLA alerts.",
    icon: Database,
    items: [
      { name: "OCR Pipelines", icon: FileText },
      { name: "Crawling & Public Listening", icon: Search },
      { name: "Predictive Analytics", icon: TrendingUp },
      { name: "Dashboards", icon: LayoutDashboard },
    ],
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions that transform how your business operates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${capability.gradient} mb-6`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    {capability.title === "Workflow Automation"
                      ? "Key capabilities:"
                      : capability.title === "Foundational Models"
                      ? "Core engines:"
                      : "Key components:"}
                  </p>
                  <ul className="space-y-2">
                    {capability.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <ItemIcon className="w-5 h-5 text-primary-600" />
                          <span>{item.name}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


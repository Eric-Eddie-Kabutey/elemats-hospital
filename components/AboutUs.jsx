"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);
  const services = SERVICE_CARDS[activeTab].slice(0, 4);
  const [hoveredService, setHoveredService] = useState(services[0]);

  // Update hovered service if tab changes and current hovered is not in new list
  if (!services.find(s => s.title === hoveredService.title)) {
    setHoveredService(services[0]);
  }

  return (
    <section id="about" className="section-padding p-2 md:p-4 bg-gray-50 overflow-hidden">
      <div className="bg-blue-100 w-full text-slate-900 rounded-3xl mx-auto py-24 md:py-32 transition-colors duration-1000">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 px-6">
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                Specialized Care <br />Tailored to You
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                Experience healthcare that puts you first. Our specialized services are designed to meet your unique needs with precision and compassion.
              </p>
            </motion.div>

            {/* Tabs - Mini version */}
            <motion.div variants={fadeInUp} className="inline-flex p-1 bg-blue-200 backdrop-blur-md rounded-full border border-white/10">
              {SERVICES_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-500 ${activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-lg"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[600px] px-6">
            {/* Small Service Cards (First 4) */}
            <div className="order-2 lg:order-1 col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
              {services.map((service, index) => {
                const isHovered = hoveredService.title === service.title;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    onMouseEnter={() => setHoveredService(service)}
                    className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer flex flex-col justify-between group ${
                      isHovered 
                        ? "bg-blue-200" 
                        : "bg-white"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-12 transition-all duration-500 ${
                      isHovered ? "bg-slate-900 text-white" : "bg-slate-900 text-white"
                    }`}>
                      <ArrowUpRight className={`w-6 h-6 transition-transform duration-500 ${isHovered ? "rotate-45" : ""}`} />
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
                      isHovered ? "text-slate-900" : "text-slte-900"
                    }`}>
                      {service.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            {/* Featured Image Area (Spans last 2 columns) */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 col-span-1 md:col-span-2 lg:col-span-2 relative h-[400px] md:h-[600px] lg:h-full rounded-3xl overflow-hidden group">
              {/* Image Transition Wrapper */}
              <div key={hoveredService.image} className="absolute inset-0 animate-in fade-in zoom-in-95 duration-1000">
                <Image
                  src={hoveredService.image}
                  alt={hoveredService.title}
                  fill
                  className="object-cover transition-transform duration-3000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/50 to-transparent"></div>
                
                {/* Image Label */}
                <div className="absolute bottom-10 left-10 p-2 overflow-hidden">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3">
                    <p className="text-white font-bold tracking-wide">Featured Service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

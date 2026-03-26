"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AboutUs2 = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);
  const services = SERVICE_CARDS[activeTab].slice(0, 8);
  const [hoveredService, setHoveredService] = useState(services[0]);

  // Update hovered service if tab changes and current hovered is not in new list
  if (!services.find(s => s.title === hoveredService.title)) {
    setHoveredService(services[0]);
  }

  return (
    <section id="about" className="section-padding p-2 md:p-4 bg-gray-50">
      <div className="bg-gray-50 w-full text-slate-900 rounded-3xl mx-auto py-24 md:py-32 px-6 md:px-12 transition-colors duration-1000">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">


            {/* Tabs - Mini version */}
            <div className="inline-flex p-1 bg-white backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
              {SERVICES_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-500 ${activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:h-[600px]">
            {/* Small Service Cards Wrap (First 4) */}
            <div className="order-2 lg:order-1 col-span-1 md:col-span-2 lg:col-span-2 flex flex-wrap gap-4 items-start content-start">
              <div className="max-w-2xl mb-2">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                  Specialized Care <br />Tailored to You
                </h2>
                <p className="text-slate-500 text-lg md:text-xl font-medium tracking-wide">
                  Experience healthcare that puts you first. Our specialized services are designed to meet your unique needs with precision and compassion.
                </p>
              </div>

              {services.map((service, index) => {
                const isHovered = hoveredService.title === service.title;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredService(service)}
                    className={`relative px-8 py-4 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-center justify-center text-center group whitespace-nowrap ${isHovered
                        ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.05]"
                        : "bg-white border-slate-200 text-slate-800 hover:border-slate-400"
                      }`}
                  >
                    <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-500`}>
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Featured Image Area (Spans last 2 columns) */}
            <div className="order-1 lg:order-2 col-span-1 md:col-span-2 lg:col-span-2 relative h-[400px] md:h-[600px] lg:h-full rounded-3xl overflow-hidden group shadow-2xl">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;

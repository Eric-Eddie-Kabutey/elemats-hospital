"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Partners from "./Partners";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);

  return (
    <section id="services" className="relative section-padding p-2 md:p-4 bg-gray-50">
      <div className="bg-blue-100 w-full text-white rounded-3xl mx-auto py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-[1.1]">
              What We Offer
            </h2>

            {/* Tabs */}
            <div className="flex flex-col items-center gap-8">
              <div className="inline-flex p-1.5 backdrop-blur-xl rounded-full border bg-white/30 border-white/40">
                {SERVICES_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-10 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-500 ${activeTab === tab.id
                        ? "bg-white/30 text-slate-600"
                        : "text-slate-600"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <p className="capitalize text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {SERVICES_TABS.find(t => t.id === activeTab)?.description}
              </p>
            </div>
          </div>

          {/* Grid */}
          <div 
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            {SERVICE_CARDS[activeTab].map((service, index) => {
              const slug = service.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link
                  key={index}
                  href={`/services/${slug}`}
                  className="group relative aspect-square rounded-4xl overflow-hidden bg-slate-200 transition-all duration-700 hover:-translate-y-1 cursor-pointer ring-1 ring-slate-100"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Refined Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>
                  
                  {/* Minimal Top-left Arrow Icon */}
                  <div className="absolute top-8 left-8 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  </div>

                  {/* Bottom Text - Refined position and size */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

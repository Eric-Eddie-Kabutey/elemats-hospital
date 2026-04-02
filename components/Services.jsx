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
    <section id="services" className="relative section-padding p-2 md:p-4 bg-white">
      <div className="bg-slate-50 w-full text-white rounded-3xl mx-auto py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
              What We Offer
            </h2>

            {/* Tabs */}
            <div className="flex flex-col items-center gap-12 mt-4">
              <div className="flex flex-wrap justify-center gap-4 px-4">
                {SERVICES_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 md:px-12 py-3 rounded-full text-sm md:text-lg font-bold tracking-tight transition-all duration-500 border ${activeTab === tab.id
                        ? "bg-primary border-primary text-white shadow-[0_15px_30px_rgba(var(--primary-rgb),0.3)] scale-105"
                        : "bg-transparent border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-500 leading-relaxed font-light italic">
                &quot;{SERVICES_TABS.find(t => t.id === activeTab)?.description}&quot;
              </p>
            </div>
          </div>

          {/* Grid */}
          <div 
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000"
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

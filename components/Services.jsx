"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import { 
  Sparkles, Activity, Stethoscope, Camera, Zap, Leaf, ShieldCheck, Droplet, 
  Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun 
} from "lucide-react";

const ICON_MAP = {
  Sparkles, Activity, Stethoscope, Camera, Zap, Leaf, ShieldCheck, Droplet, 
  Anchor, Smile, Ruler, Layers, HeartPulse, Moon, Dna, Sun
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);

  return (
    <section id="services" className="section-padding p-2 md:p-4">
      <div className="bg-primary w-full text-white rounded-3xl mx-auto pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">What We Offer</h2>

            {/* Tabs */}
            <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-12">
              {SERVICES_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                      ? "bg-white text-primary shadow-lg"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid - Keyed to activeTab to trigger animations on every switch */}
          <div 
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000"
          >
            {SERVICE_CARDS[activeTab].map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              const slug = service.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link
                  key={index}
                  href={`/services/${slug}`}
                  className="group bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10 cursor-pointer flex flex-col items-start text-left hover:-translate-y-2"
                >
                  <div className="mb-8 p-5 bg-white rounded-3xl shadow-sm group-hover:bg-[#064E3B] transition-all duration-500 ring-4 ring-emerald-900/5">
                    {Icon && <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50 group-hover:text-[#064E3B] transition-colors font-medium">
                    {service.description}
                  </p>
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

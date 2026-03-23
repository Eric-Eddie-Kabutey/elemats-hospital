"use client";

import { useState } from "react";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);

  return (
    <section id="services" className="section-padding bg-[#064E3B] text-white rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12 lg:mx-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">What We Offer</h2>
          
          {/* Tabs */}
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-12">
            {SERVICES_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-emerald-900 shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {SERVICE_CARDS[activeTab].map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white hover:text-emerald-900 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-emerald-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-60 group-hover:opacity-80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Services;

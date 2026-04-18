"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);

  return (
    <section id="services" className="relative section-padding p-2 md:p-4 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 w-full text-white rounded-3xl mx-auto py-32 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
              What We Offer
            </motion.h2>

            {/* Tabs */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-12 mt-8">
              <div className="flex flex-wrap justify-center gap-4 px-4 text-slate-900">
                {SERVICES_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 md:px-12 py-3 rounded-full text-sm md:text-lg font-normal tracking-tight transition-all duration-500 border ${activeTab === tab.id
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
            </motion.div>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {SERVICE_CARDS[activeTab].map((service, index) => {
                const slug = service.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`group relative overflow-hidden bg-slate-200 cursor-pointer ring-1 ring-slate-100 ${index === 0
                      ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-4/3 sm:aspect-video lg:aspect-square"
                      : "aspect-square"
                      } ${index % 2 === 0
                        ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl"
                        : "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl"
                      }`}
                  >
                    <Link href={`/services/${activeTab}/${slug}`} className="block w-full h-full">
                      <div
                        className={`w-full h-full overflow-hidden
                          ${index % 2 === 0
                            ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl"
                            : "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl"
                          }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                          priority={index === 0}
                          className={`object-cover
                          ${index % 2 === 0
                              ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl"
                              : "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl"
                            }`}
                        />
                      </div>

                      {/* Refined Overlay */}
                      <div className={`absolute inset-0 bg-linear-to-t ${index === 0 ? "from-black/90 via-black/40" : "from-black/90 via-black/50"} to-transparent group-hover:opacity-95`}></div>

                      {/* Minimal Top-left Arrow Icon */}
                      <div className={`absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:-rotate-45 ${index === 0 ? "w-12 h-12" : "w-10 h-10"}`}>
                        <ArrowUpRight className={`${index === 0 ? "w-6 h-6" : "w-5 h-5"} text-white group-hover:text-black transition-colors`} />
                      </div>

                      {/* Bottom Text - Refined position and size */}
                      <div className={`absolute right-8 ${index === 0 ? "bottom-8 md:bottom-12 left-8 md:left-12 lg:left-16 lg:bottom-16 lg:right-16" : "bottom-8 left-8"}`}>
                        <h3 className={`${index === 0 ? "text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4" : "text-xl md:text-2xl"} font-normal text-white tracking-tight leading-tight`}>
                          {service.title}
                        </h3>
                        {index === 0 && service.description && (
                          <p className="text-white/80 text-base md:text-lg hidden sm:block max-w-xl font-light leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

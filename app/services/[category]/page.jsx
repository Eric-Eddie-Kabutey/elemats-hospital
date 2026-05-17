"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

export default function CategoryPage({ params }) {
  const { category } = use(params);
  
  const tab = SERVICES_TABS.find(t => t.id === category);
  
  if (!tab) {
    return (
      <div className="min-h-screen pt-40 px-12 text-black">
        <h1>DEBUG: Not found.</h1>
        <p>Attempted category param: {String(category)}</p>
        <p>Type of param: {typeof category}</p>
        <p>Available IDs: {SERVICES_TABS.map(t => t.id).join(', ')}</p>
      </div>
    );
  }

  const cards = SERVICE_CARDS[category] || [];

  return (
    <main className="overflow-hidden">
      <Navbar />
      <InnerPageHero
        title={tab.label}
        description={tab.description}
        backgroundImage={tab.image}
      />

      <section id="services-grid" className="relative section-padding p-2 md:p-4 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto mb-12 px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start my-12 pt-12"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Our specialized <span className="text-primary">{tab.label.toLowerCase()}</span> services.
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <p className="capitalize text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {tab.description} We are committed to offering the highest quality healthcare through skilled professionals and advanced technology.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {cards.map((service, index) => {
              const slug = service.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                >
                  <Link
                    href={`/services/${category}/${slug}`}
                    className={`group relative overflow-hidden bg-slate-200 cursor-pointer shadow-xl block w-full h-full ${
                      index === 0 
                        ? "aspect-[4/3] sm:aspect-video lg:aspect-square" 
                        : "aspect-square"
                    } ${
                      index % 2 === 0
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
                      className="object-cover"
                    />
                    
                    <div className={`absolute inset-0 bg-linear-to-t ${index === 0 ? "from-black/90 via-black/40" : "from-black/90 via-black/50"} to-transparent group-hover:opacity-95`}></div>
                    
                    <div className={`absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:-rotate-45 ${index === 0 ? "w-12 h-12" : "w-10 h-10"}`}>
                      <ArrowUpRight className={`${index === 0 ? "w-6 h-6" : "w-5 h-5"} text-white group-hover:text-black transition-colors`} />
                    </div>

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

        </div>
      </section>
      <Footer />
    </main>
  );
}

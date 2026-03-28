"use client";

import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { SERVICES_TABS, SERVICE_CARDS } from "@/constants/constants";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import DontDelay from "@/components/DontDelay";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);
  return (
    <main>
      <Navbar />
      <InnerPageHero
        title="What We Offer"
        description="Comprehensive dental solutions tailored to your unique clinical needs and aesthetic goals."
      />

      <section id="services" className="relative section-padding p-2 md:p-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start my-12">
            {/* Left Side: Heading */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Let&apos;s talk about what makes us a <span className="text-primary">great place</span> to work.
              </h2>
            </div>

            {/* Right Side: Description */}
            <div className="lg:w-1/2">
              <p className="capitalize text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                We are working in a workplace where staff bonds like a family built on mutual respect and shared goals.
                A corporation where your ideas matter and your growth is a priority.
                The culture blends professionalism with genuine care and support.
                Team spirit is strong, and every success is celebrated together.
                Here you don&apos;t just clock in, the culture makes you belong.
              </p>
            </div>
          </div>
          <div className="text-center mb-6">


            {/* Tabs */}
            <div className="flex flex-col items-center gap-8">
              <div className="inline-flex p-1.5 backdrop-blur-xl rounded-full gap-4">
                {SERVICES_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-10 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-500 ${activeTab === tab.id
                      ? "bg-primary text-white"
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
      </section>
      <DontDelay />
      <Footer />
    </main>
  );
}

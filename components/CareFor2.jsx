"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CARE_FOR_SYMPTOMS, CARE_FOR_IMAGES } from "@/constants/constants";
import { useEffect, useState } from "react";

const AutoCarousel = ({ images, interval = 10000, manualIndex = null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayIndex = manualIndex !== null ? manualIndex : currentIndex;

  useEffect(() => {
    if (manualIndex !== null) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, manualIndex]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === displayIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={img}
            alt={`Care For ${idx}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-95"></div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${idx === displayIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const CareFor2 = () => {
  const [hoveredStates, setHoveredStates] = useState({
    left: null,
    center: null,
    right: null
  });

  const handleMouseEnter = (position, index) => {
    setHoveredStates(prev => ({ ...prev, [position]: index }));
  };

  const handleMouseLeave = () => {
    setHoveredStates({ left: null, center: null, right: null });
  };

  return (
    <section id="care" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Responsive Grid - 1 col mobile, 2 col tablet (md), 3 col desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* 1. Header Column (Centered at top for mobile/tablet, middle for desktop) */}
          <div className="order-first md:col-span-2 lg:col-span-1 lg:order-2 flex flex-col md:flex-row lg:flex-col gap-12 items-center">
            {/* Header Content */}
            <div className="text-center space-y-10 md:space-y-12 md:w-1/2 lg:w-full">
              <h2 className="text-4xl lg:text-5xl font-normal text-slate-900 capitalize leading-[1.1] -tracking-normal mb-4">
                Get care today for a variety of needs
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {CARE_FOR_SYMPTOMS.map((symptom, index) => (
                  <span
                    key={index}
                    onMouseEnter={() => handleMouseEnter(symptom.position, symptom.index)}
                    onMouseLeave={handleMouseLeave}
                    className="py-1 px-3 border border-slate-300 rounded-full text-[0.85rem] font-normal text-slate-900 transition-all duration-300 cursor-default hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  >
                    {symptom.text}
                  </span>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all shadow-xl group">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Feature Center Image - Visible on Tablet/Mobile below text, part of stack on Desktop */}
            <div className="aspect-video md:aspect-3/4 lg:aspect-video rounded-2xl overflow-hidden shadow-sm relative w-full md:w-1/2 lg:w-full lg:order-last group">
              <AutoCarousel
                images={CARE_FOR_IMAGES.center}
                interval={10000}
                manualIndex={hoveredStates.center}
              />
            </div>
          </div>

          {/* 2. Left Imagery Block */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 lg:pt-32">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full group">
              <AutoCarousel
                images={CARE_FOR_IMAGES.left}
                interval={9000}
                manualIndex={hoveredStates.left}
              />
            </div>

            {/* Secondary Stat - Visible on Tablet/Mobile to fill gap */}
            <div className=" flex flex-col text-center">
              <span className="text-4xl font-normal text-black capitalize">service quality</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Dedicated to your well-being</span>
            </div>
          </div>

          {/* 3. Right Imagery & Main Stats */}
          <div className="order-3 lg:order-3 flex flex-col gap-8">
            <div className="aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden shadow-sm relative w-full group">
              <AutoCarousel
                images={CARE_FOR_IMAGES.right}
                interval={7500}
                manualIndex={hoveredStates.right}
              />
            </div>

            {/* Stats block - Aligned with visuals */}
            <div className="flex flex-col justify-end items-end space-y-2 text-right px-2 border-r border-neutral-200 pr-6 ">
              <div className="space-y-1">
                <p className="text-4xl lg:text-5xl font-normal text-black tracking-tighter">98%</p>
                <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed font-semibold tracking-[0.15em] uppercase">
                  Client satisfaction rate
                </p>
              </div>
              <p className="hidden md:block text-slate-400 text-[11px] leading-relaxed max-w-[220px]">
                Consistently recognized for medical excellence and professional care.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareFor2;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AutoCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-sm group">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Career Banner ${idx}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"></div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const CareerBanner = () => {
  const allImages = [
    "/stock/staff-1.jpeg",
    "/stock/staff-2.jpeg",
    "/stock/staff-3.jpeg",
    "/stock/staff-4.jpeg",
    "/stock/staff-5.jpeg",
    "/stock/staff-6.jpeg",
  ];

  return (
    <section className="w-full py-12 px-2 md:px-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Mobile View: AutoCarousel */}
        <div className="block md:hidden">
          <AutoCarousel images={allImages} />
        </div>

        {/* Desktop & Tablet View: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 h-[560px]">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 h-full">
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/stock/staff-1.jpeg" 
                alt="Career 1" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[45%] rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/stock/staff-9.jpeg" 
                alt="Career 2" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 - Tall (Hidden on md, visible on lg) or part of 2nd col on md? */}
          {/* If 2 columns on tablet, we can show Col 1 & Col 2? Or Combine them. */}
          
          <div className="relative h-full rounded-3xl overflow-hidden shadow-sm">
            <Image 
              src="/stock/staff-3.jpeg" 
              alt="Career 3" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Column 3 - Tall (Hidden on md, visible on lg) */}
          <div className="hidden lg:block relative h-full rounded-3xl overflow-hidden shadow-sm">
            <Image 
              src="/stock/sur-1.jpeg" 
              alt="Career 4" 
              fill 
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>

          {/* Column 4 (Hidden on md, visible on lg) */}
          <div className="hidden lg:flex flex-col gap-4 h-full">
            <div className="relative h-[45%] rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/stock/staff-8.jpeg" 
                alt="Career 5" 
                fill 
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/stock/staff-6.jpeg" 
                alt="Career 6" 
                fill 
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mt-12">
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
      </div>
    </section>
  );
};

export default CareerBanner;

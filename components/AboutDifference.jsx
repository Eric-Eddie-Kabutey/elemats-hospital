"use client";

import { Lightbulb, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const DiffCard = ({ diff }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex flex-col items-center text-center space-y-6 group h-full"
  >
    {/* Icon Container */}
    <div className="flex items-center justify-center p-6 md:p-4 bg-slate-100 rounded-2xl md:rounded-xl transition-transform duration-500 group-hover:scale-110">
      {diff.icon}
    </div>

    {/* Text Content */}
    <div className="space-y-4">
      <h3 className="text-2xl font-normal text-slate-700 tracking-tight">
        {diff.title}
      </h3>
      <p className="text-slate-500 leading-relaxed font-light text-base md:text-[15px] lg:text-base px-2">
        {diff.description}
      </p>
    </div>
  </motion.div>
);

export default function AboutDifference() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const differences = [
    {
      icon: <Lightbulb size={34} className="text-primary" strokeWidth={2} />,
      title: "Clinical Excellence",
      description: "We leverage advanced medical technology and clinical expertise to solve real health challenges."
    },
    {
      icon: <ShieldCheck size={34} className="text-primary" strokeWidth={2} />,
      title: "Integrity You Can Count On",
      description: "We believe in doing the right thing, always. That means being honest, accountable, and transparent."
    },
    {
      icon: <Users size={34} className="text-primary" strokeWidth={2} />,
      title: "Putting Patients First",
      description: "Our patients come first. We listen, adapt, and evolve—because true medical impact starts with understanding."
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10 lg:mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            The Elemats Difference
          </motion.h2>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="hidden md:grid grid-cols-3 gap-12 md:gap-8 lg:gap-16"
        >
          {differences.map((diff, index) => (
            <DiffCard key={index} diff={diff} />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {differences.map((diff, index) => (
                <CarouselItem key={index} className="pl-4 basis-full">
                  <DiffCard diff={diff} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === i ? "w-8 bg-primary" : "w-2 bg-slate-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

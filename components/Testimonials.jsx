"use client";

import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const TestimonialCard = ({ testimonial }) => (
  <motion.div 
    variants={fadeInUp}
    className="premium-card p-6 md:p-10 flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm"
  >
    <div>
      {/* Stars */}
      <div className="flex gap-1 mb-8 text-yellow-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-xl">★</span>
        ))}
      </div>
      <p className="text-lg text-slate-700 italic leading-relaxed">
        &quot;{testimonial.feedback}&quot;
      </p>
    </div>
  </motion.div>
);

const Testimonials = () => {
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

  return (
    <section className="w-full section-padding bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">Patient Transformations</motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto mt-4">
            See what our patients say about their experience at Elemats Specialist Hospital.
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-stretch">
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full">
                  <TestimonialCard testimonial={testimonial} />
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
};

export default Testimonials;

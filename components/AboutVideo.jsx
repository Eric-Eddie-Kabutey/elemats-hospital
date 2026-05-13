"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section-padding  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-start">
          
          {/* Left: Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 col-span-1"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight text-center lg:text-left">
                Excellence in <br className="hidden md:block" />
                Modern Healthcare
              </h2>
            </motion.div>

          </motion.div>

          {/* Right: Video Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1 lg:col-span-2 relative aspect-4/3 rounded-xl overflow-hidden group"
          >
            <video 
              ref={videoRef}
              src="/aboutVideo.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/WhatWeOffer/Specialist Services.jpg"
            />

            {/* Pause/Play Toggle */}
            <button 
              onClick={togglePlay}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 group-hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>

            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

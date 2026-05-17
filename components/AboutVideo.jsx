"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion_variants";
import { Play, Pause, ArrowUpRight } from "lucide-react";
import { useState, useRef, useId } from "react";
import Link from "next/link";

export default function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const rawId = useId();
  const safeId = rawId.replace(/:/g, "");

  const desktopClipId = `${safeId}-desktop`;
  const mobileClipId = `${safeId}-mobile`;

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Desktop: L-shape with bottom-left cutout
  const desktopVideoPath = `
    M 12 0
    H 1060
    A 12 12 0 0 1 1072 12
    V 381
    A 12 12 0 0 1 1060 393
    H 352
    A 12 12 0 0 1 340 381
    V 295
    A 12 12 0 0 0 328 283
    H 12
    A 12 12 0 0 1 0 271
    V 12
    A 12 12 0 0 1 12 0
    Z
  `;

  // Mobile: normal rounded rectangle
  const mobileVideoPath = `
    M 12 0
    H 1060
    A 12 12 0 0 1 1072 12
    V 381
    A 12 12 0 0 1 1060 393
    H 12
    A 12 12 0 0 1 0 381
    V 12
    A 12 12 0 0 1 12 0
    Z
  `;

  return (
    <section className="w-full bg-white p-2 md:p-4 overflow-hidden">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Mobile text above video */}
        <div className="mb-4 px-2 md:hidden">
          <h2 className="text-4xl font-normal leading-[1.05] tracking-tight text-slate-900">
            Excellence in <br />
            Modern Healthcare
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="group relative aspect-video overflow-hidden rounded-xl bg-white md:aspect-[21/9]"
        >
          {/* Mobile rectangle video */}
          <svg
            className="absolute inset-0 h-full w-full md:hidden"
            viewBox="0 0 1072 393"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id={mobileClipId} clipPathUnits="userSpaceOnUse">
                <path d={mobileVideoPath} />
              </clipPath>
            </defs>

            <foreignObject
              width="1072"
              height="393"
              clipPath={`url(#${mobileClipId})`}
            >
              <video
                ref={videoRef}
                src="/aboutVideo.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/WhatWeOffer/Specialist Services.jpg"
              />
            </foreignObject>
          </svg>

          {/* Desktop L-shaped video */}
          <svg
            className="absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1072 393"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id={desktopClipId} clipPathUnits="userSpaceOnUse">
                <path d={desktopVideoPath} />
              </clipPath>
            </defs>

            <foreignObject
              width="1072"
              height="393"
              clipPath={`url(#${desktopClipId})`}
            >
              <video
                ref={videoRef}
                src="/aboutVideo.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/WhatWeOffer/Specialist Services.jpg"
              />
            </foreignObject>
          </svg>

          {/* Mobile dark overlay */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-50 transition-opacity duration-300 group-hover:opacity-100 md:hidden"
            viewBox="0 0 1072 393"
            preserveAspectRatio="none"
          >
            <path className="fill-black/50" d={mobileVideoPath} />
          </svg>

          {/* Desktop dark overlay */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-50 transition-opacity duration-300 group-hover:opacity-100 md:block"
            viewBox="0 0 1072 393"
            preserveAspectRatio="none"
          >
            <path className="fill-black/50" d={desktopVideoPath} />
          </svg>

          {/* Desktop bottom-left text inside cutout */}
          <div className="absolute bottom-0 left-0 z-40 hidden rounded-tr-xl px-6 py-5 md:block md:px-8 md:py-6">
            <h2 className="text-[3vw] font-normal leading-[1.05] tracking-tight text-slate-900">
              Excellence in <br />
              Modern Healthcare
            </h2>
          </div>

          {/* Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/45 md:bottom-6 md:right-6 md:h-16 md:w-16"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={22} fill="currentColor" />
            ) : (
              <Play size={22} fill="currentColor" className="ml-1" />
            )}
          </button>

          {/* Top-right Arrow Button */}
          <Link href="/services">
            <div className="absolute right-4 top-4 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/20 backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110 group-hover:bg-white md:right-6 md:top-6">
              <ArrowUpRight className="h-5 w-5 text-white transition-colors group-hover:text-primary" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
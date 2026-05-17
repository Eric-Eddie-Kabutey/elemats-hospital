"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS, PATIENT_GUIDE_DATA } from "@/constants/constants";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Faq from "@/components/Faq";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <InnerPageHero
        title="Resources"
        description="Explore our clinical library, patient education guides, and the latest news from Elemats Specialist Hospital."
      />

      {/* Patient Guide Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full py-24 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div variants={fadeInUp} className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Patient Guide</span>
              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight max-w-xl">
                Know before you arrive
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                Essential information to help you prepare for your visit, billing, and what to expect during your stay.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/resources/patient-guide"
                className="shrink-0 inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 text-sm"
              >
                View full guide <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATIENT_GUIDE_DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className=""
              >
                <h3 className="text-2xl font-normal text-slate-900  mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-3 ">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t border-neutral-100" />
      </div>

      {/* Blog Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full py-24 px-6 md:px-12 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div variants={fadeInUp} className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Blog</span>
              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight max-w-xl">
                Latest insights & news
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                Stay informed with the latest medical insights, healthy living tips, and news from our specialists.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link
                href="/resources/blogs"
                className="shrink-0 inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 text-sm"
              >
                View all articles <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </motion.section>

      <Faq />

      <Footer />
    </main>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { BLOG_POSTS } from "@/constants/constants";
import BlogCard from "@/components/BlogCard";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion_variants";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <InnerPageHero
        title="Our Blogs"
        description="Stay informed with the latest medical insights, healthy living tips, and news from Elemats Specialist Hospital."
      />

      <div className="">
        <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareFor from "@/components/CareFor";
import CareFor2 from "@/components/CareFor2";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import AboutUs2 from "@/components/AboutUs2";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import OurPartners from "@/components/OurPartners";
import AboutDifference from "@/components/AboutDifference";
import AboutVideo from "@/components/AboutVideo";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { fadeInUp, slideInRight, slideInLeft } from "@/lib/motion_variants";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <Hero />
      
      <CareFor />
      <Services />
      <AboutVideo />
      <OurPartners />
      <Testimonials />
      <Faq />

      <Footer />
    </main>
  );
}

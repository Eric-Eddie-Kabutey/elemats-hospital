"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareFor from "@/components/CareFor";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-4">
        <CareFor />
        <Services />
        <AboutUs />
        <Testimonials />
        <Faq />
      </div>
      <Footer />
      <FloatingSocials />
    </main>
  );
}

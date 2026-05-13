"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import RefillForm from "@/components/RefillForm";

export default function RefillPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Prescription Refill"
        description="Save time by requesting your prescription refills online. We'll verify your details and notify you when your medication is ready."
      />
      <RefillForm />
      <Footer />
    </main>
  );
}

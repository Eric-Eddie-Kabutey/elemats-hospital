"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Book Appointment"
        description="Schedule a consultation with our world-class specialists. Choose your preferred time and department, and our team will get back to you to confirm."
      />
      <AppointmentForm />
      <Footer />
    </main>
  );
}

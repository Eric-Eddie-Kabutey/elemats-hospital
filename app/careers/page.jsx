import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import CareerBanner from "@/components/CareerBanner";
import CareerCulture from "@/components/CareerCulture";
import CareerOpenRoles from "@/components/CareerOpenRoles";
import CareerForm from "@/components/CareerForm";

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <InnerPageHero 
        title="Careers" 
        description="Join a clinical team dedicated to professional excellence and compassionate patient care."
      />
      <CareerBanner />
      <CareerCulture />
      <CareerOpenRoles />
      <CareerForm />
      <Footer />
    </main>
  );
}

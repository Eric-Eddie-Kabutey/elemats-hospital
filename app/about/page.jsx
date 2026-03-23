import CareFor from "@/components/CareFor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Who We Are" 
        description="A team of dedicated professionals committed to excellence in dental care and patient well-being."
      />
      <CareFor />
      <Footer />
    </main>
  );
}

import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="What We Offer" 
        description="Comprehensive dental solutions tailored to your unique clinical needs and aesthetic goals."
      />
      <div className="bg-secondary">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

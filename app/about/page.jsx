import CareFor2 from "@/components/CareFor2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import AboutDifference from "@/components/AboutDifference";
import OurPartners from "@/components/OurPartners";
import LeadershipTeam from "@/components/LeadershipTeam";
import Faq from "@/components/Faq";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Who We Are" 
        description="A team of dedicated professionals committed to excellence in dental care and patient well-being."
      />
      <CareFor2 />
      <AboutDifference />
      <OurPartners />
      <LeadershipTeam />
      <Faq />
      <Footer />
    </main>
  );
}

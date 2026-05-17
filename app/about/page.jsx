import CareFor2 from "@/components/CareFor2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import AboutDifference from "@/components/AboutDifference";
import AboutVideo from "@/components/AboutVideo";
import OurPartners from "@/components/OurPartners";
import CareForAbout from "@/components/CareForAbout";
import LeadershipTeam from "@/components/LeadershipTeam";
import Faq from "@/components/Faq";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <InnerPageHero 
        title="Who We Are" 
        description="A team of dedicated professionals committed to excellence in dental care and patient well-being."
      />
      
      <CareForAbout />
      <CareFor2 />
      <AboutDifference />
      <AboutVideo />
      <OurPartners />
      <LeadershipTeam />
      <Faq />

      <Footer />
    </main>
  );
}

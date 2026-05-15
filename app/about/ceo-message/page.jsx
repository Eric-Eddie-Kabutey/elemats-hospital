import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import Image from "next/image";

export default function CEOMessagePage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Message From Our CEO" 
        description="A word from the leadership on our commitment to excellence, innovation, and compassionate patient care."
      />
      
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
            
            {/* CEO Image Content */}
            <div className="lg:sticky lg:top-32 flex flex-col-reverse md:flex-col justify-center">
              <div className="aspect-4/5 relative rounded-2xl overflow-hidden">
                <Image 
                  src="/staff3.jpg" 
                  alt="Dr. Lamin Drammeh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-0 md:mt-8 mb-10 md:mb-0 space-y-2">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-normal text-slate-900">Dr. Lamin Drammeh</h3>
                <p className="text-primary font-normal tracking-widest uppercase md:text-sm text-xs">Founder & CEO, Elemats Hospital</p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
              <p className="text-xl md:text-2xl text-slate-900 font-normal leading-normal">
                &quot;At Elemats Hospital, our mission is more than just providing healthcare; it&apos;s about building a legacy of trust and restorative care within our community.&quot;
              </p>

              <p>
                As we continue to expand our facilities and integrate the latest medical technologies, our core values remain unchanged. We invest in our people, our infrastructure, and our community to ensure that Elemats Specialist Hospital remains a beacon of quality healthcare in the region.
              </p>
              
              <p>
                From our very first day, Elemats has been driven by a singular vision: to create a healthcare environment where clinical excellence meets genuine compassion. We understood early on that a hospital is not just a building—it is a sanctuary for healing, a place of hope for families, and a center of innovation.
              </p>

              <p>
                Thank you for trusting us with your health and the health of your loved ones. We are honored to serve you.
              </p>
              <p>Warmest regards,</p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

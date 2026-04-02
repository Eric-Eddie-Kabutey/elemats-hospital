import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import Image from "next/image";
import DontDelay from "@/components/DontDelay";

export default function CEOMessagePage() {
  return (
    <main>
      <Navbar />
      <InnerPageHero 
        title="Message From Our CEO" 
        description="A word from the leadership on our commitment to excellence, innovation, and compassionate patient care."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* CEO Image Content */}
            <div className="sticky top-32">
              <div className="aspect-4/5 relative rounded-4xl overflow-hidden shadow-2xl">
                <Image 
                  src="/career/banner/1 (1).jpg" 
                  alt="Dr. Lamin Drammeh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Dr. Lamin Drammeh</h3>
                <p className="text-primary font-bold tracking-widest uppercase text-sm">Founder & CEO, Elemats Hospital</p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
              <p className="text-2xl text-slate-900 font-medium leading-normal italic">
                "At Elemats Hospital, our mission is more than just providing healthcare; it's about building a legacy of trust and restorative care within our community."
              </p>
              
              <p>
                From our very first day, Elemats has been driven by a singular vision: to create a healthcare environment where clinical excellence meets genuine compassion. We understood early on that a hospital is not just a building—it is a sanctuary for healing, a place of hope for families, and a center of innovation.
              </p>

              <p>
                Our commitment to "Advanced Care with a Human Touch" is evident in every interaction. Whether it's our state-of-the-art Fertility and IVF center helping families grow, or our emergency team working around the clock to save lives, we prioritize the dignity and well-being of every patient who walks through our doors.
              </p>

              <p>
                As we continue to expand our facilities and integrate the latest medical technologies, our core values remain unchanged. We invest in our people, our infrastructure, and our community to ensure that Elemats Specialist Hospital remains a beacon of quality healthcare in the region.
              </p>

              <p>
                Thank you for trusting us with your health and the health of your loved ones. We are honored to serve you.
              </p>

              <div className="pt-10 border-t border-slate-100 italic">
                <p>Warmest regards,</p>
                <p className="font-bold text-slate-900 mt-2">Dr. Lamin Drammeh</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DontDelay />

      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { PATIENT_GUIDE_DATA } from "@/constants/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Faq from "@/components/Faq";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function PatientGuidePage() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <Navbar />
      <InnerPageHero
        title="Patient Guide"
        description="Everything you need to know about your journey at Elemats Specialist Hospital, from registration to discharge."
      />

      <section className="w-full p-2 md:p-4 bg-white">
        <div className="bg-gray-50 rounded-3xl">
          <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-6">

              {/* Introduction Text */}
              <AnimateOnScroll>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
                    Providing care centered around you.
                  </h2>
                  <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                    At Elemats Specialist Hospital, we are committed to making your visit as smooth and comfortable as possible. This guide provides essential information for patients and their families.
                  </p>
                  <div className="pt-8 space-y-4">
                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <span>Compassionate clinical expertise</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <span>State-of-the-art diagnostic facilities</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <span>Seamless digital health records</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Guide Accordion/Grid */}
              <AnimateOnScroll>
                <div className="space-y-6">
                  {PATIENT_GUIDE_DATA.map((item, index) => (
                    <div key={index} className="group transition-all duration-500">
                      <div className="flex flex-col md:flex-row gap-6 md:items-start">
                        <div className="w-full space-y-4 text-left">
                          <h3 className="text-2xl font-normal group-hover:text-primary text-slate-900 leading-tight group-hover:underline transition-all duration-500">
                            {item.title}
                          </h3>
                          <p className="text-slate-500 font-light leading-relaxed ">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

            </div>

          </div>
        </div>
      </section>
      
      <AnimateOnScroll>
        <Faq />
      </AnimateOnScroll>

      <Footer />
    </main>
  );
}

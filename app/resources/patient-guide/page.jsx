import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { PATIENT_GUIDE_DATA } from "@/constants/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Faq from "@/components/Faq";

export default function PatientGuidePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <InnerPageHero
        title="Patient Guide"
        description="Everything you need to know about your journey at Elemats Specialist Hospital, from registration to discharge."
      />

      <section className="w-full p-2 md:p-4 bg-white">
        <div className="bg-gray-50 rounded-3xl">
          <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">

              {/* Introduction Text */}
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

              {/* Guide Accordion/Grid */}
              <div className="space-y-6">
                {PATIENT_GUIDE_DATA.map((item, index) => (
                  <div key={index} className="group p-8 md:p-10 bg-white rounded-4xl border border-neutral-100 shadow-xs transition-all duration-500">
                    <div className="flex flex-col md:flex-row gap-6 md:items-start">
                      <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {item.icon && <item.icon className="w-8 h-8" />}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-normal text-slate-900 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 font-light leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
      <Faq />

      {/* Final CTA */}
      {/* <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight">
            Still have questions?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Our guest relations team is available 24/7 to assist with any inquiries regarding your visit or the services we provide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button href="/services" className="bg-primary text-white px-10 py-5 rounded-full font-bold capitalize shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              See what we have to offer
            </button>
            <button href="/about" className="bg-slate-100 text-slate-900 px-10 py-5 rounded-full font-bold capitalize hover:bg-slate-200 transition-all">
              See who we are
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}

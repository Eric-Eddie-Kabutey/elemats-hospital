"use client"

import { use } from "react";
import { OPEN_ROLES } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { CheckCircle2, FileText, Mail, Phone, ArrowLeft, Briefcase } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function RoleDetailPage({ params }) {
  const { id } = use(params);
  const role = OPEN_ROLES.find((r) => r.id === id);

  if (!role) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <InnerPageHero
        title={role.title}
        // description={`${role.category} • ${role.location}`}
      />

      <section className="w-full p-2 md:p-4 bg-white">
        <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-20">

                {/* Description */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                    Role Overview
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                    {role.description}
                    <br /><br />
                    As a {role.title} at Elemats Hospital, you will be part of a high-performing clinical team dedicated to providing world-class medical services. We value professional excellence, empathy, and a collaborative spirit.
                  </p>
                </div>

                {/* Requirements */}
                <div className="space-y-10">
                  <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                    Key Requirements
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {role.requirements?.map((req, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-xl md:text-2xl text-slate-600 font-light leading-snug">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents to Submit */}
                <div className="space-y-10">
                  <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                    Application Checklist
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {role.documents?.map((doc, index) => (
                      <div key={index} className="flex items-center gap-4 p-6 rounded-3xl border border-dashed border-slate-300 bg-white/50 hover:bg-white transition-all group">
                        <div className="p-3 rounded-2xl bg-slate-100 group-hover:bg-primary/10 transition-colors">
                          <FileText className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                        </div>
                        <span className="text-slate-600 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="space-y-10  relative overflow-hidden">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl text-slate-600 font-light">Ready to take the <br />next step?</h3>
                      <p className="text-slate-400 font-light leading-relaxed">
                        Interested candidates should send their application and required documents via email or contact us directly.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <a
                        href={`mailto:${role.email}`}
                        className="flex items-center gap-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-all group"
                      >
                        <div className="py-4 rounded-2xl bg-white/10 group-hover:bg-primary transition-colors">
                          <Mail className="w-6 h-6 text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] capitalize tracking-widest text-slate-500 font-normal mb-1">Email Us</span>
                          <span className="font-normal text-lg text-slate-600">{role.email}</span>
                        </div>
                      </a>

                      <a
                        href={`tel:${role.phone}`}
                        className="flex items-center gap-4 rounded-3xl bg-white/5 hover:bg-white/10 transition-all group"
                      >
                        <div className="py-4 rounded-2xl bg-white/10 group-hover:bg-emerald-500 transition-colors">
                          <Phone className="w-6 h-6 text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] capitalize tracking-widest text-slate-500 font-normal mb-1">Call Us</span>
                          <span className="font-normal text-lg text-slate-600">{role.phone}</span>
                        </div>
                      </a>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3" />
                        PDF format preferred
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}

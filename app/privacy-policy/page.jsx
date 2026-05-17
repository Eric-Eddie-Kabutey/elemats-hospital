"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  const policies = [
    {
      title: "Accountability",
      content: "The hospital is responsible for personal information in its possession."
    },
    {
      title: "Purpose of data use",
      content: "Before collecting personal information, the hospital must identify the purposes for which the information is collected, primarily for patient care delivery and compliance with legal requirements."
    },
    {
      title: "Confidentiality and Data Protection",
      content: "secure storage (password-protected electronic systems, locked physical files); restricted access (only authorized healthcare professionals) and use of secure hospital information systems (HIPAA)."
    },
    {
      title: "Patient Rights",
      content: "Patients are typically granted rights such as access to their medical records, consent or refuse data sharing, withdraw consent or request confidentiality for certain treatments."
    },
    {
      title: "Data Disclosure",
      content: "Strict policies prohibit sharing with unauthorized third parties unless required by law."
    },
    {
      title: "Data Retention",
      content: "Patient records are kept for a minimum number of years as required by national guidelines or longer for chronic or specialist conditions. After this period, records are safely destroyed or anonymized for medical research or statistics."
    },
    {
      title: "Utilization of Data for Research",
      content: "if the hospital conducts research, patients must give informed consent and data is anonymized where possible. Participation is voluntary and can be withdrawn."
    },
    {
      title: "Breach Management",
      content: "In case of a data breach, the hospital investigates immediately and corrective measures are implemented."
    }
  ];

  return (
    <main className="bg-[#FDFCFB] overflow-hidden">
      <Navbar />

      <InnerPageHero
        title="Privacy Policy"
        description="Learn how we handle, protect, and respect your personal medical information."
      />

      <section className="section-padding bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto "
        >
          <div className="prose prose-lg prose-slate max-w-none">
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-light leading-relaxed mb-12">
              At Elemats Specialist Hospital, we are deeply committed to protecting the privacy and confidentiality of our patients. This Privacy Policy outlines our principles and practices regarding your personal and medical information.
            </motion.p>

            <div className="space-y-12 grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-4 lg:gap-16">
              <div className="mb-0">
                {policies.map((policy, index) => (
                  <motion.div key={index} variants={fadeInUp} className="group lg:mb-8 mb-4">
                    <h3 className="justify-start text-2xl font-normal text-slate-800 flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">
                        {index + 1}
                      </span>
                      <p className="w-full border-b border-slate-100 pb-2">{policy.title}</p>
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed pl-11 pt-2">
                      {policy.content}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="hidden lg:block relative rounded-lg ">
                <Image
                  src="/hos2.jpg" 
                  alt="Privacy Policy"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/10 z-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

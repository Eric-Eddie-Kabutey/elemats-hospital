"use client";

import { ArrowRight, Calendar, Clock, User, HeartPulse } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion_variants";

const AppointmentForm = () => {
  return (
    <section className="w-full section-padding bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto ">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-16 z-20"
        >

          {/* Left Column: Text & Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Book Your <br /> Appointment
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-light">
                Ready to take the next step in your health journey? Our team of specialists is here to provide you with world-class care. 
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Expert Specialists</h4>
                <p className="text-slate-500 font-light text-sm">Access to top-tier medical professionals across various specialties.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Personalized Care</h4>
                <p className="text-slate-500 font-light text-sm">Treatment plans tailored specifically to your unique health needs.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Advanced Facilities</h4>
                <p className="text-slate-500 font-light text-sm">State-of-the-art diagnostic and therapeutic technology at your service.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <motion.form 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >

              {/* Full Name */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Full Name*</label>
                <div className="relative">
                   <input
                    type="text"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                    placeholder="e.g. John Doe"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </motion.div>

              {/* Specialty */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Specialty/Department*</label>
                <div className="relative">
                  <select
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 appearance-none"
                  >
                    <option value="">Select Specialty</option>
                    <option value="general">General Consultation</option>
                    <option value="fertility">Fertility & IVF</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="maternity">Maternity & OBGYN</option>
                    <option value="surgery">General Surgery</option>
                    <option value="diagnostics">Diagnostics & Imaging</option>
                  </select>
                  <HeartPulse className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Email Address*</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Phone Number*</label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="+220 ..."
                />
              </motion.div>

              {/* Preferred Date */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Preferred Date*</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </motion.div>

              {/* Preferred Time */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Preferred Time*</label>
                <div className="relative">
                  <input
                    type="time"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Additional Information/Reason*</label>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 resize-none"
                  placeholder="Please describe the reason for your visit..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp} className="group col-span-1 md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white px-10 py-4 rounded-full text-sm font-normal bg-slate-900 hover:bg-black shadow-lg shadow-slate-200 transition-all"
                >
                  Confirm Appointment Request
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                </button>
              </motion.div>

            </motion.form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentForm;

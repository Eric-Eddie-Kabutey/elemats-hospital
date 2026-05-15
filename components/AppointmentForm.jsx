"use client";

import { ArrowRight, Calendar, Clock, User, HeartPulse } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const AppointmentForm = () => {
  return (
    <section className="w-full section-padding bg-white">
      <div className="relative max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row gap-16 z-20">

          {/* Left Column: Text & Info */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight">
                Book Your <br /> Appointment
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                Ready to take the next step in your health journey? Our team of specialists is here to provide you with world-class care. 
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Expert Specialists</h4>
                <p className="text-slate-500 font-light text-sm">Access to top-tier medical professionals across various specialties.</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Personalized Care</h4>
                <p className="text-slate-500 font-light text-sm">Treatment plans tailored specifically to your unique health needs.</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-normal text-slate-900">Advanced Facilities</h4>
                <p className="text-slate-500 font-light text-sm">State-of-the-art diagnostic and therapeutic technology at your service.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Full Name*</label>
                <div className="relative">
                   <input
                    type="text"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                    placeholder="e.g. John Doe"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              {/* Specialty */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Specialty/Department*</label>
                <div className="relative">
                  <select
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 appearance-none"
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
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Email Address*</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Phone Number*</label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  placeholder="+220 ..."
                />
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Preferred Date*</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  />
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Preferred Time*</label>
                <div className="relative">
                  <input
                    type="time"
                    required
                    className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900"
                  />
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              {/* Message */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-lg font-normal text-slate-700 ml-1">Additional Information/Reason*</label>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-1 focus:ring-primary/20 transition-all outline-none text-slate-900 resize-none"
                  placeholder="Please describe the reason for your visit..."
                />
              </div>

              {/* Submit Button */}
              <div className="group col-span-1 md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white px-10 py-4 rounded-full text-sm font-normal bg-slate-900 hover:bg-black shadow-lg shadow-slate-200 transition-all"
                >
                  Confirm Appointment Request
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform inline-block ml-2" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;

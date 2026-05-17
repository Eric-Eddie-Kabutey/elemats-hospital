"use client";

import { FOOTER_CONTENT } from "@/constants/constants";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion_variants";
import DontDelay from "./DontDelay";

const SOCIAL_ICONS = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231 5.397-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
};

const Footer = () => {
  return (
    <>
      <DontDelay />
      <footer className="section-padding p-2 md:p-4 bg-slate-50">
        <div className="relative bg-linear-to-t from-primary/95 to-primary/80 w-full text-white rounded-3xl mx-auto pt-10 md:pt-16 pb-8 px-6 md:px-12 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between items-center mb-12 z-30 relative"
          >
            {/* Large Decorative Text */}
            <motion.div variants={fadeInUp} className="w-full flex flex-row justify-center items-center select-none pointer-events-none relative z-0">
              <Link href="/" className="flex items-center">
                <div className="relative w-[16vw] h-[16vw] rounded-full overflow-hidden border border-white/10 bg-slate-50 p-2 shadow-xl">
                  <Image
                    src="/logo.svg"
                    alt="Elemats Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </Link>
              <h2 className="text-center text-[24vw] font-light font-serif capitalize text-slate-50 tracking-tighter leading-none whitespace-nowrap">
                Elemat
              </h2>
            </motion.div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-20 justify-between mt-6">
              {/* Services */}
              <motion.div variants={fadeInUp} className="hidden md:block col-span-1 text-center md:text-left">
                <h4 className="text-xl font-normal mb-6 text-white capitalize tracking-widest pb-2 inline-block sm:block ">{FOOTER_CONTENT.sections[0].title}</h4>
                <ul className="space-y-4">
                  {FOOTER_CONTENT.sections[0].links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-[15px] block tracking-wider">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp} className="hidden md:block col-span-1 text-center md:text-left">
                <h4 className="text-xl font-normal mb-6 text-white capitalize tracking-widest pb-2 inline-block sm:block">{FOOTER_CONTENT.sections[1].title}</h4>
                <ul className="space-y-4">
                  {FOOTER_CONTENT.sections[1].links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-[15px] block tracking-wider">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={fadeInUp} className="col-span-1 hidden lg:block text-left">
                <h4 className="text-xl font-normal mb-6 text-white capitalize tracking-widest pb-2">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex flex-row items-center sm:items-center gap-4 text-white/50 group">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-[14px] md:text-[15px] tracking-wider">{FOOTER_CONTENT.contact.phone}</span>
                  </li>
                  <li className="flex flex-row items-center sm:items-center gap-4 text-white/50 group">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-[14px] md:text-[15px] tracking-wider">{FOOTER_CONTENT.contact.email}</span>
                  </li>
                  <li className="flex flex-row items-center sm:items-start gap-4 text-white/50 group">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-4 h-4 text-white/80" />
                    </div>
                    <span className="text-[14px] md:text-[15px] tracking-wider">{FOOTER_CONTENT.contact.address}</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Logo & Brand */}
              <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                {/* <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                  {FOOTER_CONTENT.description}
                </p> */}

                <div className="relative w-[40%] md:w-full bg-white aspect-square rounded-2xl mb-4">
                  <Image
                    src="/qr.png"
                    alt="Elemats Logo"
                    fill
                    className="object-cover rounded-2xl p-2"
                  />
                </div>

                <div className="w-full flex flex-wrap justify-center items-center gap-4">
                  {FOOTER_CONTENT.socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.platform];
                    return (
                      <Link
                        key={social.platform}
                        href={social.href}
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 border border-white/10 group"
                        title={social.platform}
                      >
                        {Icon ? <Icon className="w-4 h-4" /> : <span className="text-xs font-bold">{social.platform.charAt(0)}</span>}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-xs md:text-sm z-10 relative">
            <p className="text-center md:text-left">© {new Date().getFullYear()} {FOOTER_CONTENT.brand} Specialists Hospital. All rights reserved.</p>
            <div className="flex gap-6 md:gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* <Image
            src="/logo.svg"
            alt="Elemats Logo"
            fill
            className="object-contain pointer-events-none z-0 opacity-25"
            priority
            loading="eager"
          /> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

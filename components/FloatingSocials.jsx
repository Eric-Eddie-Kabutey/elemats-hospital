"use client";

import { FLOATING_SOCIALS } from "@/constants/constants";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const SOCIAL_ICONS = {
  Facebook: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  WhatsApp: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.756.456 3.404 1.252 4.84l-1.328 4.852 4.968-1.304c1.404.764 3 1.196 4.7 1.196 5.508 0 9.988-4.48 9.988-9.988s-4.48-9.988-9.992-9.988zm5.292 14.124c-.232.656-1.152 1.204-1.8 1.312-.648.108-1.444.156-2.316-.132-3.416-1.128-5.636-4.576-5.808-4.808-.168-.232-1.368-1.82-1.368-3.472s.868-2.46 1.18-2.8c.312-.34.684-.424.912-.424.228 0 .456.004.652.012.204.008.48-.076.752.584.276.66.944 2.308 1.028 2.48.084.172.14.372.024.6-.116.228-.176.372-.348.572-.172.2-.364.448-.52.6-.172.168-.352.352-.152.696.2.34.888 1.464 1.908 2.372 1.312 1.168 2.416 1.528 2.756 1.7.34.172.54.144.744-.088.204-.232.876-1.02 1.112-1.372.232-.352.464-.292.784-.172.32.12 2.032.96 2.384 1.136.352.176.584.26.672.408.088.148.088.852-.144 1.508z" />
    </svg>
  ),
  X: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231 5.397-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
};

const FloatingSocials = () => {
  return (
    <>
      {/* Bottom Right Cluster */}
      <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-2">
        {/* Call Button (Emergency) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex items-center justify-end group"
        >
          {/* Label */}
          <div className="absolute right-full mr-4 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-lg">
            Emergency Call
            {/* Arrow */}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rotate-45" />
          </div>

          <Link
            href="tel:+2201234567"
            className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group border border-white/5"
          >
            <Phone size={24} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex items-center justify-end group"
        >
          {/* Label */}
          <div className="absolute right-full mr-4 bg-[#25D366] text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-lg">
            WhatsApp Us
            {/* Arrow */}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#25D366] rotate-45" />
          </div>

          <Link
            href="https://wa.me/2201234567"
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
          >
            <SOCIAL_ICONS.WhatsApp className="w-7 h-7" />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default FloatingSocials;

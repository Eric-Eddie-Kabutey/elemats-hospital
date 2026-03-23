"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <nav className="absolute top-8 left-0 right-0 z-50 w-full font-inter">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shadow-xl transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpeg"
                alt="Elemats Logo"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain p-1"
                priority
                loading="eager"
              />
            </div>
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-opacity ${isHomePage ? 'text-white' : 'text-white'} hover:opacity-90`}>
              Elemats
            </span>
          </Link>

          {/* Desktop Nav - Glass Pill */}
          <div className={`hidden lg:flex items-center gap-1 backdrop-blur-xl px-2 py-1.5 rounded-full shadow-2xl border transition-all duration-500 ${isHomePage
            ? "bg-white/10 border-white/20"
            : "bg-black/10 border-white/10"
            }`}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                    ? "bg-white text-primary shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-zinc-100 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
              <Phone size={16} fill="currentColor" stroke="none" />
              Call Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 z-50 transition-all active:scale-95"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-3/4 max-w-sm bg-white p-8 shadow-2xl transition-transform duration-500 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-8 pt-20">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-slate-800 hover:text-black transition-colors border-b border-slate-100 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-full text-xl font-bold mt-4 shadow-xl active:scale-95 transition-transform">
            <Phone size={20} fill="currentColor" stroke="none" />
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

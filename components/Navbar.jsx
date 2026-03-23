"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 lg:px-20">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          scrolled ? "glass-pill px-8" : "bg-transparent py-4"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold italic text-sm">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight">LifePath</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex btn-primary !py-2.5 !px-5 text-sm">
            Call Now <span className="text-lg">📞</span>
          </button>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
          >
            <div className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-black mt-1.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100 flex flex-col gap-6 animate-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-800 border-b border-neutral-50 pb-2"
            >
              {link.label}
            </Link>
          ))}
          <button className="btn-primary w-full justify-center">
            Call Us Today
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

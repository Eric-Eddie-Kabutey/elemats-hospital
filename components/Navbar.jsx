"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredServiceCategory, setHoveredServiceCategory] = useState("Clinical Services");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <nav className="absolute top-8 left-0 right-0 z-50 w-full font-inter">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shadow-xl transition-transform group-hover:scale-105 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/logo.jpeg"
                alt="Elemats Logo"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <span className={`hidden sm:block text-xl md:text-2xl font-bold tracking-tight transition-opacity ${isHomePage ? 'text-white' : 'text-white'} hover:opacity-90`}>
              Elemats
            </span>
          </Link>

          {/* Desktop Nav - Glass Pill */}
          <div className={`hidden lg:flex items-center gap-2 backdrop-blur-xl px-2  rounded-full shadow-2xl border transition-all duration-500 overflow-visible ${isHomePage
            ? "bg-white/10 border-white/20"
            : "bg-black/10 border-white/10"
            }`}>
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              const hasDropdown = link.subCategories && link.subCategories.length > 0;

              return (
                <div key={link.label} className="relative group py-2">
                  <Link
                    href={link.href}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 outline-none cursor-pointer ${isActive
                      ? "bg-white text-slate-900 shadow-lg"
                      : "text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                    {hasDropdown && <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {/* Dropdown Logic - Unified Mega Menu */}
                  {hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[9999] w-[500px]">
                      <div className="bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-8 overflow-hidden">
                        <div className="grid grid-cols-2 gap-8">
                          {link.subCategories.map((cat) => (
                            <div key={cat.label} className="space-y-4">
                              <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-60">
                                {cat.label}
                              </h4>
                              <div className="flex flex-col gap-2">
                                {cat.links.map((subLink) => (
                                  <Link
                                    key={subLink.label}
                                    href={subLink.href}
                                    className="text-[13px] font-semibold text-slate-600 hover:text-primary transition-colors flex items-center gap-1 group/item"
                                  >
                                    {subLink.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-zinc-100 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
              <Phone size={14} fill="currentColor" stroke="none" className="md:w-4 md:h-4" />
              Call Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 z-50 transition-all active:scale-95"
            >
              {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
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
        <div className="flex flex-col gap-8 pt-20 h-full overflow-y-auto pb-12">
          {NAV_LINKS.map((link, i) => {
            const hasSublinks = link.subLinks && link.subLinks.length > 0;
            const hasSubCategories = link.subCategories && link.subCategories.length > 0;
            const hasDropdown = hasSublinks || hasSubCategories;

            return (
              <div key={link.label} className="space-y-4">
                <Link
                  href={link.href}
                  onClick={() => !hasDropdown && setIsOpen(false)}
                  className="text-2xl font-bold text-slate-800 hover:text-black transition-colors block border-b border-slate-100 pb-4"
                >
                  <div className="flex justify-between items-center">
                    {link.label}
                    {hasDropdown && <ChevronDown size={20} className="text-slate-300" />}
                  </div>
                </Link>

                {/* Mobile Sublinks (Resources) */}
                {hasSublinks && (
                  <div className="pl-4 flex flex-col gap-4">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-slate-500 hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Subcategories (What We Do) */}
                {hasSubCategories && (
                  <div className="pl-4 space-y-6">
                    {link.subCategories.map((cat) => (
                      <div key={cat.label} className="space-y-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-60">
                          {cat.label}
                        </h4>
                        <div className="pl-2 flex flex-col gap-3">
                          {cat.links.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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

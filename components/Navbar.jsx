"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, LANGUAGES, SERVICES_TABS } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Globe, HeartPulse, Activity, Stethoscope, Microscope, Syringe, Pill } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const [hoveredServiceCategory, setHoveredServiceCategory] = useState("fertility");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const getCurrentLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
      if (match && match[1]) {
        const currentLangCode = match[1];
        const lang = LANGUAGES.find((l) => l.code === currentLangCode);
        if (lang) setCurrentLang(lang.label);
      } else {
        setCurrentLang("EN");
      }
    };

    if (window.googleTranslateInitialized) {
      getCurrentLang();
      return;
    }

    const addScript = () => {
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) return;

      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,ja,nl",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      window.googleTranslateInitialized = true;
    };

    addScript();
    getCurrentLang();
  }, []);

  const handleLanguageChange = (lang) => {
    /* eslint-disable react-hooks/immutability */
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=.${domain};`;
    
    // Clear other domains if needed
    const domains = [`.${domain}`, domain.replace("www.", "")];
    domains.forEach(d => {
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${d};`;
    });
    /* eslint-enable react-hooks/immutability */

    window.location.reload();
  };

  return (
    <>
      <nav className="absolute top-10 left-0 right-0 z-50 w-full font-inter">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-14 h-14 shadow-xl  rounded-full overflow-hidden border border-white/20 bg-white">
              <Image
                src="/logo.svg"
                alt="Elemats Logo"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Nav - Glass Pill */}
          <div className={`hidden lg:flex items-center backdrop-blur-xl px-2 gap-1 rounded-full shadow-2xl border transition-all duration-500 overflow-visible bg-white/10 border-white/20`}>
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              const hasDropdown = link.subCategories && link.subCategories.length > 0;
              const isOpen = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative py-2 group"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 outline-none cursor-pointer ${isActive
                      ? "bg-white text-slate-900 shadow-lg"
                      : "text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                    {hasDropdown && <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />}
                  </Link>
                  
                  {/* Dropdown Logic - Unified Mega Menu */}
                  {hasDropdown && link.label === "What We Do" && (
                    <div className="absolute shadow-2xl  top-full left-1/2 -translate-x-[40%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 z-9999 w-[950px]">
                      <div className="bg-white rounded-[32px] border border-slate-100 overflow-hidden flex min-h-[450px] transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                        
                        {/* 1. Left Sidebar: Solutions */}
                        <div className="w-[280px] rounded-[32px] bg-slate-50/50 p-6 flex flex-col">
                          <div className="mb-6">
                            <h3 className="text-xl md:text-5xl capitalize font-normal text-slate-800 tracking-tight leading-tight">Services</h3>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">
                              Dedicated healthcare solutions designed for your well-being.
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {link.subCategories.map((cat, idx) => {
                              const currentTab = SERVICES_TABS.find(t => t.label === cat.label);
                              const tabId = currentTab ? currentTab.id : "fertility";
                              const isActive = hoveredServiceCategory === tabId;

                              return (
                                <Link
                                  key={cat.label}
                                  href={`/services/${tabId}`}
                                  onMouseEnter={() => setHoveredServiceCategory(tabId)}
                                  className={`group/btn relative w-full text-left px-4 py-2 border border-slate-100 rounded-xl text-[14px] font-normal flex items-center justify-between ${
                                    isActive 
                                      ? "bg-slate-100 text-primary/80" 
                                      : "text-slate-500 hover:text-primary hover:bg-slate-100"
                                  }`}
                                >
                                  {cat.label}
                                  
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* 2. Content Area: Detailed Cards */}
                        <div className="flex-1 p-8 rounded-[32px] bg-white relative overflow-y-auto max-h-[600px]">
                          <div className="grid grid-cols-2 gap-2">
                            {link.subCategories.find(c => {
                               const matchingTab = SERVICES_TABS.find(t => t.label === c.label);
                               return (matchingTab ? matchingTab.id : null) === hoveredServiceCategory;
                            })?.links.slice(0, 6).map((subLink, idx) => {
                              const iconList = [HeartPulse, Activity, Stethoscope, Microscope, Syringe, Globe];
                              const Icon = iconList[idx % iconList.length];

                              return (
                                <div key={subLink.label} className="group/item relative flex flex-col gap-1 hover:bg-slate-50 p-4 rounded-xl border border-primary/5">
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center ">
                                      <Icon className="w-4.5 h-4.5 text-slate-400 group-hover/item:text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                      <h5 className="text-[15px] font-bold text-slate-800 group-hover/item:text-primary">
                                        {subLink.label}
                                      </h5>
                                      <p className="text-[13px] text-slate-400 leading-relaxed line-clamp-2 font-normal">
                                        Expert specialized care focused on your health needs and recovery...
                                      </p>
                                      <Link 
                                        href={subLink.href}
                                        className="inline-flex items-center text-[12px] font-normal text-primary opacity-80 hover:opacity-100 pt-0.5"
                                      >
                                        See More &gt;
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Featured Highlight for Fertility */}
                          {hoveredServiceCategory === "fertility" && (
                            <div className="mt-2 p-6 rounded-2xl bg-slate-50/50 border border-primary/5 flex items-center justify-between">
                              <div className="space-y-0.5">
                                <h4 className="text-[14px] font-bold text-slate-900">Fertility Center</h4>
                                <p className="text-[13px] text-slate-400 leading-relaxed line-clamp-2 font-normal">Schedule a consultation with our world-renowned specialists.</p>
                              </div>
                              <button className="bg-primary text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-primary/90">
                                Book Now
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Standard Dropdown for other links (Who We Are, Resources etc) */}
                  {hasDropdown && link.label !== "What We Do" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-[9999] w-[300px]">
                      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-4 overflow-hidden transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="flex flex-col gap-1.5">
                          {link.subCategories.flatMap(cat => cat.links).map((subLink) => {
                            const isSubActive = pathname === subLink.href;
                            return (
                              <Link
                                key={subLink.label}
                                href={subLink.href}
                                className={`group/btn relative w-full text-left px-4 py-2.5 rounded-xl text-[14px] font-normal flex items-center justify-between ${
                                  isSubActive 
                                    ? "bg-slate-100 text-primary/80" 
                                    : "text-slate-500 hover:text-primary hover:bg-slate-100"
                                }`}
                              >
                                {subLink.label}
                              </Link>
                            );
                          })}
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
            <div id="google_translate_element" className="hidden"></div>
            
            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 bg-white/10 border-white/20 text-white hover:bg-white/20`}
              >
                <Globe size={18} className="opacity-70" />
                <span className="text-xs font-bold">{currentLang}</span>
                <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-[10000] animate-in fade-in zoom-in duration-200">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => handleLanguageChange(lang)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="relative w-6 h-4 overflow-hidden rounded-sm shadow-sm border border-slate-100">
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-600 group-hover:text-black">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

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
        <div className="flex flex-col gap-0 pt-4 h-full overflow-y-auto pb-12">
          {NAV_LINKS.map((link, i) => {
            const hasSublinks = link.subLinks && link.subLinks.length > 0;
            const hasSubCategories = link.subCategories && link.subCategories.length > 0;
            const hasDropdown = hasSublinks || hasSubCategories;

            return (
              <div key={link.label} className="space-y-4 mb-8">
                <Link
                  href={link.href}
                  onClick={() => !hasDropdown && setIsOpen(false)}
                  className="text-2xl font-normal text-slate-800 hover:text-black transition-colors block "
                >
                  <div className="flex justify-between items-center">
                    {link.label}
                    {hasDropdown && <ChevronDown size={20} className="text-slate-300" />}
                  </div>
                </Link>

                {/* Mobile Sublinks (Resources) */}
                {hasSublinks && (
                  <div className="flex flex-col gap-4">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-normal text-slate-500 hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Subcategories (What We Do) */}
                {hasSubCategories && (
                  <div className="space-y-6">
                    {link.subCategories.map((cat) => (
                      <div key={cat.label} className="space-y-3">
                        <h4 className="text-md font-normal uppercase tracking-widest text-primary opacity-60">
                          {cat.label}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {cat.links.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className="text-md font-normal text-slate-500 underline hover:text-primary transition-colors"
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
          <button className="mb-4 flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-xl font-normal shadow-xl active:scale-95 transition-transform">
            <Phone size={20} fill="currentColor" stroke="none" />
            Call Now
          </button>

          <button className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-xl font-normal shadow-xl active:scale-95 transition-transform">
            <Pill size={20} fill="currentColor" stroke="none" />
            Refill
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

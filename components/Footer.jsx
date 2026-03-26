import { FOOTER_CONTENT } from "@/constants/constants";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const SOCIAL_ICONS = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231 5.397-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className="section-padding p-2 md:p-4">
      <div className="bg-zinc-900 w-full text-white rounded-t-3xl mx-auto pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-bold tracking-tight">{FOOTER_CONTENT.brand}</span>
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-sm">
              {FOOTER_CONTENT.description}
            </p>
            <div className="flex gap-4">
              {FOOTER_CONTENT.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform];
                return (
                  <Link 
                    key={social.platform}
                    href={social.href}
                    className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all duration-300"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xs font-bold">{social.platform.charAt(0)}</span>}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {FOOTER_CONTENT.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-8 text-white capitalize tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold mb-8 text-white capitalize tracking-widest">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm"><Phone className="w-4 h-4" /></span>
                {FOOTER_CONTENT.contact.phone}
              </li>
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm"><Mail className="w-4 h-4" /></span>
                {FOOTER_CONTENT.contact.email}
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm shrink-0"><MapPin className="w-4 h-4" /></span>
                {FOOTER_CONTENT.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {FOOTER_CONTENT.brand} Specialists Hospital. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

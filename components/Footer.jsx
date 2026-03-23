import { FOOTER_CONTENT } from "@/constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-padding bg-zinc-900 border-t border-zinc-800 text-white rounded-t-[4rem] mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold italic text-normal">L</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">{FOOTER_CONTENT.brand}</span>
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-sm">
              {FOOTER_CONTENT.description}
            </p>
            <div className="flex gap-4">
              {FOOTER_CONTENT.socials.map((social) => (
                <Link 
                  key={social.platform}
                  href={social.href}
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social.platform.charAt(0)}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_CONTENT.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest">{section.title}</h4>
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
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm">📞</span>
                {FOOTER_CONTENT.contact.phone}
              </li>
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm">✉️</span>
                {FOOTER_CONTENT.contact.email}
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <span className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm shrink-0">📍</span>
                {FOOTER_CONTENT.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
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

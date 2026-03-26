import { FLOATING_SOCIALS } from "@/constants/constants";
import Link from "next/link";

const FloatingSocials = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {FLOATING_SOCIALS.map((social) => (
        <Link
          key={social.platform}
          href={social.href}
          className="group relative flex items-center"
        >
          {/* Tooltip */}
          {/* <span className="absolute right-full mr-4 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {social.platform}
          </span> */}

          {/* Icon */}
          {/* <div className="w-12 h-12 glass-pill flex items-center justify-center text-xl shadow-lg border border-white/40 hover:scale-110 hover:-translate-x-1 transition-all duration-300">
            {social.icon}
          </div> */}
        </Link>
      ))}

      {/* Scroll indicator - optional but neat */}
      {/* <div className="mt-8 flex flex-col items-center gap-4">
        <div className="w-px h-12 bg-linear-to-b from-neutral-200 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 translate-y-8 text-neutral-400">
          Scroll
        </span>
      </div> */}
    </div>
  );
};

export default FloatingSocials;

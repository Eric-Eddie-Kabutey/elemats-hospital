"use client";

import { Link2, Check, Send } from "lucide-react";
import { useState } from "react";

const SOCIAL_ICONS = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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

const BlogShare = ({ title }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "X",
      icon: <SOCIAL_ICONS.X />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-slate-900 hover:text-white"
    },
    {
      name: "Facebook",
      icon: <SOCIAL_ICONS.Facebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <SOCIAL_ICONS.LinkedIn />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-700 hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: <Send size={18} />,
      url: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
      color: "hover:bg-green-500 hover:text-white"
    }
  ];

  return (
    <div className="space-y-4">
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Share Article</span>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 rounded-full flex items-center justify-center border border-slate-100 text-primary/80 transition-all duration-300 ${social.color} bg-white shadow-sm`}
            aria-label={`Share on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
        <button
          onClick={handleCopy}
          className={`w-11 h-11 rounded-full flex items-center justify-center border border-slate-100 transition-all duration-300 bg-white shadow-sm ${
            copied ? "bg-primary border-primary text-white" : "text-primary/80 hover:border-primary hover:text-primary"
          }`}
          aria-label="Copy link"
        >
          {copied ? <Check size={20} /> : <Link2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default BlogShare;

import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Elemats Specialist Hospital | Modern Dental care",
  description: "Experience premium, modern dental and healthcare solutions at Elemats Specialist Hospital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#FDFCFB] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

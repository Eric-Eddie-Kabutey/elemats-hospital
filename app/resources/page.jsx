import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS, PATIENT_GUIDE_DATA } from "@/constants/constants";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Faq from "@/components/Faq";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InnerPageHero
        title="Resources"
        description="Explore our clinical library, patient education guides, and the latest news from Elemats Specialist Hospital."
      />

      {/* Patient Guide Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Patient Guide</span>
              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight max-w-xl">
                Know before you arrive
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                Essential information to help you prepare for your visit, billing, and what to expect during your stay.
              </p>
            </div>
            <Link
              href="/resources/patient-guide"
              className="shrink-0 inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 text-sm"
            >
              View full guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATIENT_GUIDE_DATA.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-4xl border border-neutral-100 hover:bg-primary hover:border-primary transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-500 mb-6">
                  {item.icon && <item.icon className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-normal text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/70 font-light text-sm leading-relaxed line-clamp-3 transition-colors duration-500">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t border-neutral-100" />
      </div>

      {/* Blog Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Blog</span>
              <h2 className="text-4xl md:text-5xl font-normal text-slate-800 tracking-tight leading-tight max-w-xl">
                Latest insights & news
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                Stay informed with the latest medical insights, healthy living tips, and news from our specialists.
              </p>
            </div>
            <Link
              href="/resources/blogs"
              className="shrink-0 inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 text-sm"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </main>
  );
}

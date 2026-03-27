import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { BLOG_POSTS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <InnerPageHero 
        title="Our Blog" 
        description="Stay informed with the latest medical insights, healthy living tips, and news from Elemats Specialist Hospital."
      />

      <section className="w-full p-2 md:p-4 bg-white">
        <div className="bg-gray-50 rounded-3xl">
          <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="group bg-white rounded-4xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-normal text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-500 font-light leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      href={`/resources/blogs/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

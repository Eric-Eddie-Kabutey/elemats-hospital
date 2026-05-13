import { BLOG_POSTS } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import InnerPageHero from "@/components/InnerPageHero";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogShare from "@/components/BlogShare";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current, take next 3)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== id).slice(0, 3);

  // Mock content if not provided in constants
  const mockContent = (
    <div className="space-y-10 text-lg font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
      <p>
        At Elemats Specialist Hospital, we are deeply committed to elevating the standard of healthcare through continuous innovation, expert medical practices, and comprehensive patient education. Navigating modern medical decisions can be complex, so we prioritize breaking down sophisticated health insights into easily digestible guidance for our patients and their families.
      </p>

      <div className="my-16">
        <h3 className="text-3xl font-normal text-slate-800 mb-8">Elevating Clinical Excellence</h3>
        <p className="mb-8">
          Our integrated methodologies allow our teams of specialists to cross-collaborate effectively. By blending cutting-edge diagnostic technology with personalized therapeutic regimens, we deliver outcomes that significantly improve the long-term well-being of our community.
        </p>
        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
          <Image
            src={post.image}
            alt="Clinical Excellence"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <p>
        Furthermore, our advanced ongoing training requirements guarantee that our nursing officers, lab scientists, and surgeons are continually implementing the absolute best global practices. We believe that world-class healthcare should be accessible, transparent, and built on a foundation of unyielding trust between the doctor and the patient.
      </p>

      <blockquote className="border-l-2 border-primary pl-10 my-16 italic text-2xl md:text-3xl text-slate-900 font-light leading-snug">
        &quot;True medical excellence is not just about treating the symptom, but healing the person as a whole through empathy and advanced science.&quot;
      </blockquote>

      <p>
        Stay connected with our hub to keep receiving expert-backed guidance tailored for your ongoing wellness journey. We are here to support you every step of the way.
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white flex flex-col font-inter">
      <Navbar />
      <InnerPageHero
        title={post.title}
        description={post.date}
      />

      {/* Main Content Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-32 items-start">
            
            {/* Left Column: Image & Meta */}
            <div className="lg:sticky lg:top-32 space-y-12">
              <div className="relative aspect-video lg:aspect-4/5 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-8">
                 {/* <div className="flex flex-col gap-2">
                    <span className="w-fit text-slate-900 font-medium text-lg inline-flex items-center gap-2 px-6 py-2 bg-slate-100  rounded-full">
                      {post.category}
                    </span> 
                 </div> */}
                 
                 <BlogShare title={post.title} />
              </div>
            </div>

            {/* Right Column: Article Content */}
            <article className="space-y-12">
              {Array.isArray(post.content) ? (
                <div className="space-y-10">
                  {post.content.map((paragraph, i) => (
                    <p key={i} className="text-lg md:text-xl font-light text-slate-600 leading-[1.8] tracking-tight">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : post.content ? (
                <div 
                  className="blog-content-rich text-lg md:text-xl font-light text-slate-600 leading-[1.8] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              ) : (
                <div className="blog-content-rich">
                  {mockContent}
                </div>
              )}
              
            </article>

          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedPosts.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div className="space-y-4">
                <h4 className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Keep Reading</h4>
                <h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight">
                  Related Insights
                </h2>
              </div>
              <Link href="/resources/blogs" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline underline-offset-8 transition-all">
                View all articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

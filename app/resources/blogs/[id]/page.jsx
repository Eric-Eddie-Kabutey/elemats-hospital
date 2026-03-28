import { BLOG_POSTS } from "@/constants/constants";
import Navbar from "@/components/Navbar";
import InnerPageHero from "@/components/InnerPageHero";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
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
    <div className="space-y-8 text-lg font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
      <p>
        At Elemats Specialist Hospital, we are deeply committed to elevating the standard of healthcare through continuous innovation, expert medical practices, and comprehensive patient education. Navigating modern medical decisions can be complex, so we prioritize breaking down sophisticated health insights into easily digestible guidance for our patients and their families. Our approach ensures that you always remain informed and empowered.
      </p>

      <div className="my-12">
        <h3 className="text-3xl font-normal text-slate-800 mb-6">Elevating Clinical Excellence</h3>
        <p className="mb-6">
          Our integrated methodologies allow our teams of specialists to cross-collaborate effectively. By blending cutting-edge diagnostic technology with personalized therapeutic regimens, we deliver outcomes that significantly improve the long-term well-being of our community.
        </p>
        <div className="relative w-full h-96 rounded-4xl overflow-hidden shadow-lg border border-neutral-100">
          <Image
            src="/images/refill.jpg"
            alt="Clinical Excellence"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <p>
        Furthermore, our advanced ongoing training requirements guarantee that our nursing officers, lab scientists, and surgeons are continually implementing the absolute best global practices. We believe that world-class healthcare should be accessible, transparent, and built on a foundation of unyielding trust between the doctor and the patient.
      </p>

      <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-2xl text-slate-800 font-normal">
        &quot;True medical excellence is not just about treating the symptom, but healing the person as a whole through empathy and advanced science.&quot;
      </blockquote>

      <p>
        Stay connected with our hub to keep receiving expert-backed guidance tailored for your ongoing wellness journey.
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

      {/* Hero Header */}
      {/* <section className="relative pt-48 pb-20 px-6 md:px-12 bg-white rounded-b-3xl z-10 transition-all duration-500">
        <div className="w-full max-w-4xl mx-auto">
          

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-normal text-slate-900 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 text-sm md:text-base font-medium pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Elemats Medical Team
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Image */}
      <section className="relative  px-6 md:px-12 z-20">
        <div className="max-w-5xl mx-auto relative h-[300px] md:h-[500px] w-full rounded-4xl overflow-hidden shadow-sm border border-white/20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <article className="max-w-7xl mx-auto bg-white">
          {post.content || mockContent}
        </article>
      </section>

      {/* Related Blogs */}
      {relatedPosts.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl md:text-4xl font-normal text-slate-800 tracking-tight">
                Related Articles
              </h2>
              <Link href="/resources/blogs" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

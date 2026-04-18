import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnerPageHero from "@/components/InnerPageHero";
import { BLOG_POSTS } from "@/constants/constants";
import BlogCard from "@/components/BlogCard";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <InnerPageHero
        title="Our Blogs"
        description="Stay informed with the latest medical insights, healthy living tips, and news from Elemats Specialist Hospital."
      />

      <div className="">
        <div className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

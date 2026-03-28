import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="p-5 group bg-white rounded-4xl overflow-hidden border border-neutral-100 shadow-sm cursor-pointer hover:shadow-2xl transition-all duration-500">
      <Link href={`/resources/blogs/${post.id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden rounded-3xl">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-black/5 transition-opacity duration-500 group-hover:opacity-95"></div>
        </div>
        
        <div className="mt-4">
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
          
          <div className="inline-flex items-center gap-2 text-primary font-normal text-sm capitalize tracking-widest group/link mb-4">
            Read Full Article
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover/link:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </article>
  );
}

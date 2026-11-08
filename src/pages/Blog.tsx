import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Linkedin } from "lucide-react";

const tagColours: Record<string, string> = {
  "Events": "bg-blue-500/20 text-blue-300",
  "Label Analysis": "bg-red-500/20 text-red-300",
  "LinkedIn": "bg-[#0077b5]/20 text-[#5ab5e0]",
  "Nutrition": "bg-green-500/20 text-green-300",
  "Our Values": "bg-[#f5e3b1]/20 text-[#f5e3b1]",
  "Our Story": "bg-purple-500/20 text-purple-300",
};

const Blog = () => {
  return (
    <div className="pt-[76px]">
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Stories from SORU</h1>
          <p className="text-white/60 text-lg max-w-[560px] mx-auto mb-8">
            Stories and updates from the team building SORU.
          </p>
          <a
            href="https://www.linkedin.com/company/soru-food-group/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#0077b5]/50 text-white px-6 py-3 rounded font-semibold text-[13px] tracking-[0.5px] uppercase hover:bg-[#0077b5]/10 transition-colors"
          >
            <Linkedin size={15} /> Follow SORU on LinkedIn
          </a>
        </div>
      </section>

      <section className="py-6 sm:py-8 px-4 sm:px-8 border-t border-white/10 pb-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#f5e3b1]/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/soru-logo.svg";
                      (e.target as HTMLImageElement).className = "w-full h-full object-contain p-8 opacity-30";
                    }}
                  />
                  {/* Concept image label for AI-generated product visuals */}
                  {post.image.includes("concept") && (
                    <span className="absolute bottom-2 right-2 bg-black/60 text-white/60 text-[10px] px-2 py-0.5 rounded font-medium tracking-wide">
                      Concept image
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    {post.tag && (
                      <span className={`text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full ${tagColours[post.tag] || "bg-white/10 text-white/50"}`}>
                        {post.tag}
                      </span>
                    )}
                    <span className="text-white/35 text-[12px] ml-auto">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-[17px] text-white mb-2 leading-snug group-hover:text-[#f5e3b1] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-[13.5px] leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-[#f5e3b1] text-[12px] font-semibold mt-4 tracking-wide">Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

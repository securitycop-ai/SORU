import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-[76px] min-h-screen flex items-center justify-center px-8 text-center">
        <div>
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">404</p>
          <h1 className="font-serif text-4xl text-white mb-6">Post Not Found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[76px]">
      {/* Hero image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/soru-logo.svg";
            (e.target as HTMLImageElement).className = "w-full h-full object-contain p-16 opacity-20";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0800] via-[#1a0800]/60 to-transparent" />
      </div>

      <article className="py-16 px-8">
        <div className="max-w-[780px] mx-auto">
          {/* Back */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-[#f5e3b1] text-[13px] font-semibold mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.tag && (
              <span className="text-[11px] font-bold tracking-wide px-3 py-1 rounded-full bg-[#f5e3b1]/10 text-[#f5e3b1]">
                {post.tag}
              </span>
            )}
            <span className="text-white/40 text-[13px]">{post.date}</span>
            <span className="text-white/40 text-[13px]">· by {post.author}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-tight">{post.title}</h1>

          {/* Content */}
          <div className="space-y-5">
            {post.content.map((block, i) => {
              if (typeof block === "string") {
                return (
                  <p key={i} className="text-white/70 text-[16px] leading-[1.8]">{block}</p>
                );
              }
              if (block.type === "image") {
                return (
                  <div key={i} className="my-8 rounded-xl overflow-hidden border border-white/10">
                    <img src={block.src} alt={block.alt} className="w-full h-auto" />
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* LinkedIn embed */}
          {post.embed && (
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-lg">
                <p className="text-white/40 text-[12px] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Linkedin size={13} className="text-[#0077b5]" /> Original LinkedIn Post
                </p>
                <iframe
                  src={post.embed.src}
                  height={post.embed.height}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={post.title}
                  className="rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-[#f5e3b1] text-[13px] font-semibold transition-colors">
              <ArrowLeft size={14} /> All Posts
            </Link>
            <a
              href="https://www.linkedin.com/company/soru-food-group/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#0077b5] hover:text-[#5ab5e0] text-[13px] font-semibold transition-colors"
            >
              <Linkedin size={14} /> Follow Valli on LinkedIn
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

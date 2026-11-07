import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const Media = () => {
  return (
    <div className="pt-[76px]">
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 flex items-center justify-center mx-auto mb-8">
            <Play size={32} className="text-[#f5e3b1] ml-1" />
          </div>
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Media</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-6">Coming Soon</h1>
          <p className="text-white/60 text-lg max-w-[480px] mx-auto mb-4 leading-relaxed">
            Brand films, product showcases, and our story in motion.
          </p>
          <p className="text-[#f5e3b1]/70 text-[14px] font-semibold tracking-wide mb-10">Expected Q4 2026</p>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-[#f5e3b1]/40 text-[#f5e3b1] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:border-[#f5e3b1] transition-colors">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Media;

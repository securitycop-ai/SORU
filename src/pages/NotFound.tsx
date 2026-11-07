import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => (
  <div className="pt-[76px] min-h-screen flex items-center justify-center px-8">
    <div className="text-center">
      <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">404</p>
      <h1 className="font-serif text-5xl text-white mb-6">Page Not Found</h1>
      <p className="text-white/60 mb-10">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors">
        Back to Home <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default NotFound;

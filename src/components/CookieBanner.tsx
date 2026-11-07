import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("hnm-cookie-consent");
    if (!accepted) setTimeout(() => setVisible(true), 1200);
  }, []);

  const accept = () => {
    localStorage.setItem("hnm-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("hnm-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-20 sm:max-w-[420px] z-[9998] bg-[#1a0800] border border-[#f5e3b1]/20 rounded-2xl shadow-2xl p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase">Cookie Notice</p>
        <button onClick={decline} className="text-white/40 hover:text-white transition-colors shrink-0">
          <X size={14} />
        </button>
      </div>
      <p className="text-white/65 text-[13px] leading-relaxed mb-4">
        This site uses essential cookies to function. By continuing to use the site you agree to their use. No tracking or advertising cookies are used.
      </p>
      <div className="flex gap-3">
        <button onClick={accept}
          className="flex-1 bg-[#f5e3b1] text-[#1a0800] py-2.5 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors">
          Accept
        </button>
        <button onClick={decline}
          className="flex-1 border border-white/20 text-white/60 py-2.5 rounded font-semibold text-[12px] tracking-[0.8px] uppercase hover:border-white/40 transition-colors">
          Decline
        </button>
      </div>
    </div>
  );
}

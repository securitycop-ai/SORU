import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import LegalModal, { type LegalPage } from "./LegalModal";

const SORULogo = ({ className = "" }: { className?: string }) => (
  <span className={cn("font-serif font-black tracking-[0.12em] text-[#f5e3b1] select-none", className)}>
    SORU
  </span>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_home"),     path: "/" },
    { name: t("nav_products"), path: "/products" },
    { name: t("nav_whyus"),    path: "/why-us" },
    { name: t("nav_about"),    path: "/about" },
    { name: t("nav_blog"),     path: "/blog" },
    { name: t("nav_contact"),  path: "/contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#1a0800]/95 backdrop-blur-md border-[#5a3010]/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-0"
          : "bg-transparent border-transparent py-2"
      )}>
        <div className="max-w-[1240px] mx-auto px-6 h-[76px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <SORULogo className="text-2xl" />
          </Link>

          <nav className="hidden xl:flex items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={cn("px-3 py-2 text-[12px] font-semibold tracking-[0.6px] uppercase transition-colors whitespace-nowrap rounded",
                  location.pathname === link.path ? "text-[#f5e3b1]" : "text-white/80 hover:text-[#f5e3b1]"
                )}>
                {link.name}
              </Link>
            ))}
          </nav>

          <Link to="/contact"
            className="hidden xl:inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-5 py-2.5 rounded font-bold text-[11px] tracking-[0.8px] uppercase hover:bg-white transition-colors flex-shrink-0">
            Register Interest
          </Link>

          <button className="xl:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "transform rotate-45 translate-y-[6.5px]")}></span>
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "opacity-0")}></span>
            <span className={cn("w-[22px] h-[1.5px] bg-white transition-all", isMobileMenuOpen && "transform -rotate-45 -translate-y-[6.5px]")}></span>
          </button>
        </div>
      </header>

      <div className={cn(
        "fixed inset-0 top-[76px] bg-[#1a0800]/98 backdrop-blur-xl z-[199] flex flex-col px-8 py-8 overflow-y-auto transition-opacity duration-300 xl:hidden border-t border-white/10",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} onClick={closeMenu}
            className={cn("py-4 text-[15px] font-semibold tracking-[0.5px] uppercase border-b border-white/10",
              location.pathname === link.path ? "text-[#f5e3b1]" : "text-white/90"
            )}>
            {link.name}
          </Link>
        ))}
        <div className="pt-6">
          <Link to="/contact" onClick={closeMenu}
            className="inline-flex items-center justify-center bg-[#f5e3b1] text-[#1a0800] px-6 py-3 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors w-full">
            Register Interest
          </Link>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [legalPage, setLegalPage] = useState<LegalPage>(null);

  return (
    <>
      <footer className="bg-[#140600]/95 backdrop-blur-xl text-white/45 pt-12 sm:pt-20 px-4 sm:px-8 pb-0">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          <div>
            <Link to="/"><span className="font-serif font-black tracking-[0.12em] text-[#f5e3b1] text-2xl opacity-80 mb-5 block">SORU</span></Link>
            <p className="text-[14px] leading-[1.8] text-white/60 max-w-[280px]">{t("footer_tagline")}</p>
            <div className="mt-6">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#f5e3b1] mb-3">{t("follow_us")}</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/sorufoods/" target="_blank" rel="noreferrer" title="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5]/20 hover:border-[#0077b5]/40 transition-colors group">
                  <Linkedin size={16} className="text-white/50 group-hover:text-[#0077b5] transition-colors" />
                </a>
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-40 cursor-not-allowed" title="Instagram — coming soon">
                  <Instagram size={16} className="text-white/50" />
                </div>
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-40 cursor-not-allowed" title="X / Twitter — coming soon">
                  <Twitter size={16} className="text-white/50" />
                </div>
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-40 cursor-not-allowed" title="Facebook — coming soon">
                  <Facebook size={16} className="text-white/50" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_products")}</h5>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">SORU Kitchen</Link></li>
              <li><Link to="/products" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">SORU Easy Cook</Link></li>
              <li><Link to="/products" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">SORU Naturals</Link></li>
              <li><Link to="/contact"  className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Register Interest</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_company")}</h5>
            <ul className="space-y-3">
              <li><Link to="/about"   className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Our Story</Link></li>
              <li><Link to="/why-us"  className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Why SORU</Link></li>
              <li><Link to="/blog"    className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans font-bold text-[11px] tracking-[2.5px] uppercase text-[#f5e3b1] mb-5">{t("footer_contact")}</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-white/40 shrink-0 mt-0.5" />
                <a href="mailto:valli@sorufoods.com" className="text-[14px] text-white/60 hover:text-[#f5e3b1] transition-colors break-all">valli@sorufoods.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-white/40 shrink-0 mt-0.5" />
                <span className="text-[14px] text-white/60">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto mt-10 sm:mt-16 border-t border-white/10 pt-8">
          <p className="text-[12px] text-white/30 leading-relaxed text-center max-w-[800px] mx-auto">
            SORU is a registered trademark. All product and menu descriptions represent our current development direction and may change prior to launch. The brand name "SORU Naturals" is used in place of "SORU Organics" until organic certification requirements are fully met.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto mt-6 border-t border-white/10 py-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[13px] text-white/40">{t("footer_copyright")}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {([
              ["privacy",     "Privacy Policy"],
              ["terms",       "Terms of Service"],
              ["food-safety", "Food Safety"],
              ["allergens",   "Allergens"],
            ] as [LegalPage, string][]).map(([key, label]) => (
              <button key={key} onClick={() => setLegalPage(key)}
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col font-sans text-white overflow-x-hidden relative z-0">
    <div className="fixed inset-0 z-[-1]" style={{ background: "radial-gradient(ellipse at 20% 50%, #4a2200 0%, #2c1200 40%, #1a0800 100%)" }} />
    <Header />
    <main className="flex-grow z-10">{children}</main>
    <Footer />
  </div>
);

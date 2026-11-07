import { Link } from "react-router-dom";
import { Utensils, Package, Leaf, Globe, ArrowRight, ChefHat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hnm-brand-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1a0800]/72" />
        </div>
        <div className="max-w-[1240px] mx-auto text-center z-10 pt-[76px] px-4">
          <div className="inline-flex items-center gap-2 bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
            <ChefHat size={12} className="text-[#f5e3b1] shrink-0" />
            <span className="text-[#f5e3b1] text-[10px] sm:text-[12px] font-semibold tracking-[1px] sm:tracking-[1.5px] uppercase">{t("hero_badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8">
            {t("hero_title1")}<br />
            <span className="text-[#f5e3b1]">{t("hero_title2")}</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-[580px] mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            {t("hero_sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-[12px] sm:text-[13px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
              {t("hero_cta1")} <ArrowRight size={15} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 border border-[#f5e3b1]/40 text-[#f5e3b1] px-6 sm:px-8 py-3.5 sm:py-4 rounded font-bold text-[12px] sm:text-[13px] tracking-[0.8px] uppercase hover:border-[#f5e3b1] transition-colors">
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#f5e3b1] text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase mb-3">{t("product_label")}</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">{t("product_heading")}</h2>
            <p className="text-white/60 text-base mt-4 max-w-[560px] mx-auto">{t("product_desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Utensils,
                label: "SORU Kitchen",
                title: "Fast-casual restaurants and delivery",
                desc: "Chennai-style dosa, idli, vada, pongal, biryani, Chettinad dishes, and filter kaapi. Counter service, delivery, takeaway, and catering.",
                colour: "#f5e3b1",
              },
              {
                icon: Package,
                label: "SORU Easy Cook",
                title: "Meal kits for busy people",
                desc: "One-pot sambar, lemon rice, bachelor biryani, quick pongal — real Tamil food cooked in 10 to 15 minutes. Clear instructions, portioned packs.",
                colour: "#f5a05a",
              },
              {
                icon: Leaf,
                label: "SORU Naturals",
                title: "Traditional health foods",
                desc: "Sathu maavu, millet products, podis, spice blends, and breakfast mixes. Rooted in traditional Tamil food knowledge. Clean-label where possible.",
                colour: "#7ec8a0",
              },
            ].map(({ icon: Icon, label, title, desc, colour }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#f5e3b1]/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${colour}18`, border: `1px solid ${colour}30` }}>
                  <Icon size={22} style={{ color: colour }} />
                </div>
                <p className="text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: colour }}>{label}</p>
                <h3 className="font-serif text-xl text-white mb-3 leading-snug">{title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold text-[13px] tracking-[0.6px] uppercase hover:gap-3 transition-all">
              {t("product_view")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why SORU */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#f5e3b1] text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase mb-3">{t("why_label")}</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">{t("why_heading")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Utensils, tk: "feat1" },
              { icon: Package,  tk: "feat2" },
              { icon: Globe,    tk: "feat3" },
              { icon: Leaf,     tk: "feat4" },
            ].map(({ icon: Icon, tk }) => (
              <div key={tk} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-7 hover:border-[#f5e3b1]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#f5e3b1]/10 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon size={20} className="text-[#f5e3b1]" />
                </div>
                <h3 className="font-serif text-[18px] text-white mb-2 leading-snug">{t(`${tk}_title`)}</h3>
                <p className="text-white/55 text-[13px] leading-relaxed">{t(`${tk}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global ambition strip */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 border-t border-white/10 bg-[#f5e3b1]/5">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1">
            <p className="text-[#f5e3b1] text-[10px] font-bold tracking-[2.5px] uppercase mb-3">Our ambition</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">The McDonald's of authentic Indian food.</h2>
            <p className="text-white/60 text-[15px] leading-relaxed max-w-[500px]">
              We are building a scalable global Indian food brand: consistent recipes, great ingredients, honest pricing, and a deep respect for the food culture we come from. Starting in the UK. Growing worldwide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 text-center">
            {[
              { n: "3",        label: "Business areas" },
              { n: "UK",       label: "Launch market" },
              { n: "Chennai",  label: "Food roots" },
              { n: "Global",   label: "Ambition" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl sm:text-4xl text-[#f5e3b1] font-bold">{n}</p>
                <p className="text-white/50 text-[11px] font-semibold tracking-[1.5px] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-[#f5e3b1] text-[10px] font-bold tracking-[2.5px] uppercase mb-4">Be part of it</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">{t("cta_heading")}</h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">{t("cta_sub")}</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
            {t("cta_btn")} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

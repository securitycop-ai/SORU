import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WhyUs = () => (
  <div>
    <section className="min-h-[50vh] flex items-center px-4 sm:px-8 pt-[76px]">
      <div className="max-w-[1240px] mx-auto py-16 sm:py-24">
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Why SORU</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-[700px]">
          Real Food. Real Roots.<br />Built for the World.
        </h1>
        <p className="text-white/65 text-lg max-w-[560px] leading-relaxed">
          There is no shortage of Indian food. What is missing is a modern, scalable brand that does it properly — rooted in real culture, built on better ingredients, and designed to grow globally.
        </p>
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            n: "01",
            title: "Authentically Chennai",
            body: "SORU is rooted in Tamil and Chennai food culture, not a generic pan-Indian approach. Every dish and product comes from a real food tradition — dosa, idli, pongal, biryani, Chettinad, filter kaapi.",
          },
          {
            n: "02",
            title: "Convenient without compromise",
            body: "We believe convenience and authenticity are not opposites. SORU Kitchen serves real Chennai food fast. SORU Easy Cook delivers genuine Tamil home cooking in 10 to 15 minutes.",
          },
          {
            n: "03",
            title: "Better ingredients",
            body: "Millets, traditional grains, natural spices, and no artificial additives. We only use the word 'organic' when certification requirements are properly met. No overclaiming.",
          },
          {
            n: "04",
            title: "Designed to scale",
            body: "SORU is built for global expansion — standardised recipes, scalable operations, and a retail-ready packaged food business. Starting in the UK, growing across Europe, North America, and the Middle East.",
          },
          {
            n: "05",
            title: "Beyond the diaspora",
            body: "We are not just building for Indian communities abroad. SORU is designed to introduce Chennai food culture to mainstream consumers worldwide who want flavourful, convenient, better-quality food.",
          },
          {
            n: "06",
            title: "One brand, three businesses",
            body: "SORU Kitchen, SORU Easy Cook, and SORU Naturals operate under a single identity. Everything we build connects back to the same food culture, the same values, and the same founder.",
          },
        ].map(({ n, title, body }) => (
          <div key={n} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#f5e3b1]/25 transition-colors">
            <p className="text-[#f5e3b1] font-bold text-[11px] tracking-[2px] uppercase mb-4">{n}</p>
            <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
            <p className="text-white/55 text-[14px] leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">The gap we're filling</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">The world has had fast food for every cuisine except Indian food done right.</h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-5">
            McDonald's standardised burgers. Nando's standardised peri-peri. Wagamama standardised Asian noodles. The same has not happened for Indian food at a global scale — not because the food isn't good enough, but because no one has built the brand properly.
          </p>
          <p className="text-white/65 text-[15px] leading-relaxed mb-8">
            SORU is that brand. Starting with Chennai. Building for the world.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-[#f5e3b1] font-semibold text-[13px] tracking-[0.6px] uppercase hover:gap-3 transition-all">
            Meet the founder <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "3",       label: "Business areas" },
            { n: "UK",      label: "Launch market" },
            { n: "Global",  label: "Long-term ambition" },
            { n: "Chennai", label: "Food roots" },
          ].map(({ n, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="font-serif text-3xl sm:text-4xl text-[#f5e3b1] font-bold">{n}</p>
              <p className="text-white/50 text-[11px] font-semibold tracking-[1.5px] uppercase mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">Interested in SORU?</h2>
        <p className="text-white/60 text-base mb-8 leading-relaxed">Register your interest and we'll keep you updated as we launch.</p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
          Register Interest <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  </div>
);

export default WhyUs;

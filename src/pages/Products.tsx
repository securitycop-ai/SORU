import { Link } from "react-router-dom";
import { Utensils, Package, Leaf, ArrowRight } from "lucide-react";

const Products = () => (
  <div>
    <section className="min-h-[50vh] flex items-center px-4 sm:px-8 pt-[76px]">
      <div className="max-w-[1240px] mx-auto py-16 sm:py-24">
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">What We're Building</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-[700px]">
          Three Connected Businesses. One Identity.
        </h1>
        <p className="text-white/65 text-lg max-w-[560px] leading-relaxed">
          SORU operates across fast-casual restaurants, easy-cook meal kits, and packaged natural foods — the McDonald's model for authentic Chennai food culture.
        </p>
      </div>
    </section>

    {/* McDonald's of Indian Food */}
    <section className="py-10 px-4 sm:px-8 border-t border-white/10 bg-[#f5e3b1]/5">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">The vision</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">The McDonald's of authentic Indian food.</h2>
          <p className="text-white/65 text-[15px] leading-relaxed">
            McDonald's standardised burgers globally. Nando's standardised peri-peri. No one has done this for Indian food at scale — not because the food isn't good enough, but because no one has built the brand properly. SORU is that brand. Consistent recipes, great ingredients, honest pricing. Starting from Chennai. Growing worldwide.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center shrink-0">
          {[
            { n: "3", label: "Divisions" },
            { n: "Chennai", label: "Food roots" },
            { n: "Global", label: "Ambition" },
          ].map(({ n, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="font-serif text-2xl sm:text-3xl text-[#f5e3b1] font-bold">{n}</p>
              <p className="text-white/50 text-[10px] font-semibold tracking-[1.5px] uppercase mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SORU Kitchen */}
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#f5e3b1]/10 border border-[#f5e3b1]/20 flex items-center justify-center mb-6">
            <Utensils size={24} className="text-[#f5e3b1]" />
          </div>
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">01</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">SORU Kitchen</h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-6">
            Fast-casual restaurants, delivery, and takeaway built around Chennai and Tamil food. Counter service with consistent recipes, honest pricing, and a focus on flavour — not fusion.
          </p>
          <p className="text-white/65 text-[15px] leading-relaxed mb-8">
            SORU Kitchen is designed to scale. The model is built for replication across cities and countries, with the same dishes tasting the same wherever you are.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Dosa", "Idli &amp; Vada", "Pongal", "Biryani", "Chettinad bowls", "Filter Kaapi", "Snacks", "Meal boxes"].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white/70" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="font-serif text-xl text-white mb-4">The restaurant model</h3>
          <ul className="space-y-4">
            {[
              ["Counter service", "Fast, efficient, affordable. No table service required."],
              ["Delivery-ready", "Built for delivery apps from day one."],
              ["Catering", "Corporate lunch boxes, events, and office catering."],
              ["Scalable recipes", "Standardised across all locations."],
              ["Takeaway packaging", "Sustainable, branded, designed for travel."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="text-[#f5e3b1] font-bold text-[11px] tracking-[1px] uppercase mt-1 shrink-0">—</span>
                <div>
                  <p className="text-white font-semibold text-[14px]">{title}</p>
                  <p className="text-white/50 text-[13px] mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* SORU Easy Cook */}
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="lg:order-2">
          <div className="w-12 h-12 rounded-xl bg-[#f5a05a]/10 border border-[#f5a05a]/20 flex items-center justify-center mb-6">
            <Package size={24} className="text-[#f5a05a]" />
          </div>
          <p className="text-[#f5a05a] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">02</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">SORU Easy Cook</h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-6">
            Simple, bachelor-friendly meal kits for busy people. Real Tamil food cooked in 10 to 15 minutes. Clear instructions, portioned ingredients, minimal prep. No experience required.
          </p>
          <p className="text-white/65 text-[15px] leading-relaxed mb-8">
            Designed for students, working professionals, and anyone who wants genuine Indian home cooking without the complexity.
          </p>
          <div className="mb-6">
            <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-3">Meal Kits</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "One-Pot Sambar",
                "10-Minute Lemon Rice",
                "Bachelor Biryani Kit",
                "Quick Pongal",
                "Upma in 10",
                "Rasam Kit",
                "Dosa Kit",
                "Tomato Rice",
              ].map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white/70">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-3">Ready-Made Range</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Chutney Box (Coconut, Tomato, Mint)",
                "Ready Idli Batter",
                "Ready Dosa Batter",
                "Instant Sambar Mix",
                "Chettinad Curry Paste",
                "Filter Kaapi Decoction",
              ].map((item) => (
                <div key={item} className="bg-[#f5a05a]/5 border border-[#f5a05a]/20 rounded-lg px-4 py-3 text-[13px] text-white/70">{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:order-1">
          <h3 className="font-serif text-xl text-white mb-4">What makes it different</h3>
          <ul className="space-y-4">
            {[
              ["10–15 minutes", "Every kit is designed to cook in under 15 minutes."],
              ["Portioned packs", "No measuring. Everything is pre-portioned."],
              ["Real ingredients", "Spices, lentils, grains — not powders or pastes."],
              ["Chutney box", "Fresh-style chutneys in a ready-to-use box — coconut, tomato, mint — all three in one."],
              ["Ready-made range", "Pre-made idli batter, dosa batter, and curry pastes for zero-prep cooking."],
              ["Scalable retail", "Built for supermarkets, delivery apps, and online."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="text-[#f5a05a] font-bold text-[11px] tracking-[1px] uppercase mt-1 shrink-0">—</span>
                <div>
                  <p className="text-white font-semibold text-[14px]">{title}</p>
                  <p className="text-white/50 text-[13px] mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* SORU Naturals */}
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#7ec8a0]/10 border border-[#7ec8a0]/20 flex items-center justify-center mb-6">
            <Leaf size={24} className="text-[#7ec8a0]" />
          </div>
          <p className="text-[#7ec8a0] text-[11px] font-bold tracking-[2.5px] uppercase mb-3">03</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">SORU Naturals</h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-4">
            Packaged traditional and health-focused Indian foods rooted in Tamil food knowledge. Sathu maavu (multigrain health mix), millet products, podis, spice blends, and breakfast mixes.
          </p>
          <p className="text-white/65 text-[15px] leading-relaxed mb-2">
            Clean-label where possible. No artificial additives. Traditional ingredients that have been used in Tamil households for generations.
          </p>
          <p className="text-white/40 text-[12px] leading-relaxed mb-6 italic">
            Note: We use the name "SORU Naturals" rather than "SORU Organics" until full organic certification requirements are met under FSSAI regulations.
          </p>
          {/* Product image */}
          <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
            <img src="/soru-logo.png" alt="SORU Sathu Maavu — Traditional Multigrain Milkshake" className="w-auto max-h-48 mx-auto object-contain" />
            <p className="text-center text-white/40 text-[11px] mt-3 tracking-wide uppercase">SORU Sathu Maavu · 315g · Traditional Multigrain Milkshake</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Sathu Maavu", "Millet Dosa Mix", "Millet Idli Mix", "Ragi Kanji", "Upma Mix", "Podis", "Spice Blends", "Breakfast Mixes"].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white/70">{item}</div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="font-serif text-xl text-white mb-4">Our approach to health claims</h3>
          <ul className="space-y-4">
            {[
              ["Traditional knowledge", "Products rooted in Tamil food culture, not invented trends."],
              ["Ingredient transparency", "Full ingredient lists and sourcing on every pack."],
              ["No artificial additives", "No artificial colours, preservatives, or flavourings."],
              ["No overclaiming", "We only make claims we can evidence. No marketing exaggeration."],
              ["Certification first", "\"Organic\" will only appear once the proper certification is in place."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="text-[#7ec8a0] font-bold text-[11px] tracking-[1px] uppercase mt-1 shrink-0">—</span>
                <div>
                  <p className="text-white font-semibold text-[14px]">{title}</p>
                  <p className="text-white/50 text-[13px] mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">Interested in what we're building?</h2>
        <p className="text-white/60 text-base mb-8 leading-relaxed">Register your interest and we'll keep you updated as we launch.</p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
          Register Interest <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  </div>
);

export default Products;

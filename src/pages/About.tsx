import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div>
    <section className="min-h-[50vh] flex items-center px-4 sm:px-8 pt-[76px]">
      <div className="max-w-[1240px] mx-auto py-16 sm:py-24">
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Our Story</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-[700px]">
          From Chennai to the World.
        </h1>
        <p className="text-white/65 text-lg max-w-[560px] leading-relaxed">
          SORU was founded by Valli, with a simple belief: that Tamil and Chennai food culture deserves a modern, global brand — one built on real food, real roots, and real ambition.
        </p>
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">The beginning</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">It started with the food I grew up with.</h2>
          <div className="space-y-5 text-white/65 text-[15px] leading-relaxed">
            <p>
              Growing up in Chennai, food was inseparable from daily life. I remember watching my mother carefully roast and grind a blend of nutritious grains, nuts, and pulses in the morning — the rhythm of making idli batter, the aromas of filter kaapi, the complex spicing of a Chettinad curry. These were not special occasions. They were just life.
            </p>
            <p>
              My mother's kitchen was a place of warmth and health. Her Sathu Maavu was her special recipe for well-being, packed with essential nutrients for a growing child. Today, I share her homemade secret with the world, bringing traditional nourishment to modern families.
            </p>
            <p>
              I kept coming back to the same question: why has no one built a modern Indian food brand the way McDonald's built burgers? Consistent, scalable, affordable, and genuinely good?
            </p>
            <p>
              That question became SORU.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase mb-3">The name</p>
            <p className="text-white/65 text-[14px] leading-relaxed">
              "Soru" is a Tamil word associated with cooked rice and food — the everyday meal. It is short, memorable, and easy to pronounce in any language. It is broad enough to cover restaurants, meal kits, and packaged health foods under one identity.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase mb-3">The roots</p>
            <p className="text-white/65 text-[14px] leading-relaxed">
              Chennai, Tamil Nadu. The food capital of South India. Home to dosa, idli, pongal, biryani, Chettinad cuisine, and filter kaapi. SORU is built from this tradition — not as a heritage exhibit, but as a living, modern food brand.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2px] uppercase mb-3">The ambition</p>
            <p className="text-white/65 text-[14px] leading-relaxed">
              Built in Chennai. Growing across Europe, North America, the Middle East, and globally. SORU is designed from the beginning to be a global brand — not a niche one.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4 text-center">About the founder</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-10 text-center">Valli.</h2>
        <div className="max-w-[760px] mx-auto space-y-5 text-white/65 text-[15px] leading-relaxed">
          <p>
            Valli founded SORU with a background in food, culture, and a deep understanding of what genuine Chennai cooking looks, smells, and tastes like. The company is built from personal knowledge, not from an external study of Indian food.
          </p>
          <p>
            The vision for SORU is both personal and commercial: to create a food brand that Tamil people recognise as authentic, and that the rest of the world discovers as something genuinely new.
          </p>
          <p>
            SORU is currently in development, building its operations, product range, and go-to-market strategy. We are working on the restaurant model, easy-cook range, and packaged food line in parallel — starting from Chennai, reaching the world.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { n: "Chennai", label: "Food origin" },
          { n: "UK",      label: "Launch market" },
          { n: "Global",  label: "Long-term vision" },
        ].map(({ n, label }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="font-serif text-4xl text-[#f5e3b1] font-bold mb-2">{n}</p>
            <p className="text-white/50 text-[11px] font-semibold tracking-[1.5px] uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">Follow our journey.</h2>
        <p className="text-white/60 text-base mb-8 leading-relaxed">Register your interest and we'll keep you in the loop as SORU launches.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg">
            Register Interest <ArrowRight size={15} />
          </Link>
          <Link to="/blog" className="inline-flex items-center justify-center gap-2 border border-[#f5e3b1]/40 text-[#f5e3b1] px-8 py-4 rounded font-bold text-[12px] tracking-[0.8px] uppercase hover:border-[#f5e3b1] transition-colors">
            Read the News
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;

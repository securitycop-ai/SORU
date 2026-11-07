import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "general", message: "", consent: false });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="min-h-[40vh] flex items-center px-4 sm:px-8 pt-[76px]">
        <div className="max-w-[1240px] mx-auto py-16 sm:py-20">
          <p className="text-[#f5e3b1] text-[11px] font-bold tracking-[2.5px] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-[700px]">Get in Touch.</h1>
          <p className="text-white/65 text-lg max-w-[500px] leading-relaxed">
            Whether you're a future customer, investor, wholesale partner, restaurant collaborator, or just curious about SORU — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div>
            {status === "sent" ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                <p className="font-serif text-2xl text-white mb-3">Message received.</p>
                <p className="text-white/60">We'll get back to you as soon as we can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-white/70 text-[14px]">
                    Something went wrong. Please email <a href="mailto:valli@sorufoods.com" className="text-[#f5e3b1] underline">valli@sorufoods.com</a> directly.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-2">Full Name</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#f5e3b1]/40 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-2">Email</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#f5e3b1]/40 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-2">I am a...</label>
                  <select name="type" value={form.type} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-[14px] focus:outline-none focus:border-[#f5e3b1]/40 transition-colors appearance-none">
                    <option value="general">General enquiry</option>
                    <option value="customer">Future customer</option>
                    <option value="investor">Investor</option>
                    <option value="wholesale">Wholesale / retail partner</option>
                    <option value="restaurant">Restaurant collaborator</option>
                    <option value="media">Media / press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-white/50 mb-2">Message</label>
                  <textarea name="message" required value={form.message} onChange={handleChange}
                    placeholder="Tell us about yourself and what you're interested in..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#f5e3b1]/40 transition-colors resize-none" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required
                    className="mt-1 accent-[#f5e3b1]" />
                  <span className="text-[13px] text-white/50 leading-relaxed">I agree to SORU using my details to respond to this enquiry.</span>
                </label>

                <button type="submit" disabled={!form.consent}
                  className="inline-flex items-center gap-2 bg-[#f5e3b1] text-[#1a0800] px-8 py-4 rounded-xl font-bold text-[12px] tracking-[0.8px] uppercase hover:bg-white transition-colors shadow-lg disabled:opacity-40 disabled:cursor-not-allowed">
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Mail size={18} className="text-[#f5e3b1] mb-3" />
              <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-1">Email</p>
              <a href="mailto:valli@sorufoods.com" className="text-white text-[14px] hover:text-[#f5e3b1] transition-colors">valli@sorufoods.com</a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <MapPin size={18} className="text-[#f5e3b1] mb-3" />
              <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-1">Location</p>
              <p className="text-white text-[14px]">United Kingdom</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-[11px] font-bold tracking-[2px] uppercase mb-3">We hear from</p>
              <ul className="space-y-2">
                {["Future customers", "Investors", "Wholesale partners", "Restaurant collaborators", "Media and press", "Food service operators"].map((item) => (
                  <li key={item} className="text-[13px] text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#f5e3b1] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

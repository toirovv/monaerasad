import { useState } from "react";
import { Phone, Send, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.55)";

const INFO_ITEMS = [
  { icon: Phone, title: "Telefon", desc: "+998 95 034-43-43", href: "tel:+998950344343", accent: true },
  { icon: Send, title: "Telegram", desc: "@monaer_uz", href: "https://t.me/monaer_uz", accent: true },
  { icon: Mail, title: "Email", desc: "info@monaer.uz", href: "mailto:info@monaer.uz", accent: false },
  { icon: MapPin, title: "Manzil", desc: "Toshkent shahri, O'zbekiston", href: null, accent: false },
  { icon: Clock, title: "Ish vaqti", desc: "Dush-Sun: 9:00 - 21:00", href: null, accent: false },
];

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setName(""); setEmail(""); setMsg(""); setSubmitted(false); }, 3000);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-body" style={{ color: "#6B7280" }}>
            <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
            Aloqa ma'lumotlari
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
            <span className="text-white">Qanday </span>
            <span className="gradient-text">bog'lanish</span>
            <span className="text-white"> mumkin?</span>
          </h2>

          <div className="flex flex-col gap-2.5">
            {INFO_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 transition-all duration-200 hover:translate-x-0.5"
                  style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: item.accent ? `${ACCENT}18` : "rgba(255,255,255,0.04)", border: `1px solid ${item.accent ? `${ACCENT}33` : "rgba(255,255,255,0.06)"}` }}
                  >
                    <Icon size={16} strokeWidth={1.6} style={{ color: item.accent ? ACCENT : "rgba(255,255,255,0.4)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "#6B7280" }}>{item.title}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        {item.desc}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-white/80">{item.desc}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-5">
            <a href="tel:+998950344343" className="flex-1 flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.97]" style={{ background: ACCENT, color: "#0A0E14", boxShadow: `0 8px 25px -5px ${ACCENT}55` }}>
              <Phone size={16} strokeWidth={2.2} /> Qo'ng'iroq
            </a>
            <a href="https://t.me/monaer_uz" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80 active:scale-[0.97]" style={{ border: `1px solid ${BORDER}`, color: "#fff", background: "transparent" }}>
              <MessageCircle size={16} strokeWidth={2.2} /> Telegram
            </a>
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 md:p-8" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
          <h3 className="font-display text-lg font-bold text-white mb-1">Xabar yozing</h3>
          <p className="text-xs text-white/30 mb-5">Tez orada javob beramiz</p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}33` }}>
                <MessageCircle size={24} style={{ color: ACCENT }} />
              </div>
              <p className="text-sm font-semibold text-white">Xabar yuborildi!</p>
              <p className="text-xs text-white/40">Tez orada siz bilan bog'lanamiz</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider mb-1.5 block" style={{ color: "#6B7280" }}>Ismingiz</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingiz"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl text-sm text-white outline-none transition-all duration-200 focus:border-[#12C6A866]"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider mb-1.5 block" style={{ color: "#6B7280" }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@misol.uz"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl text-sm text-white outline-none transition-all duration-200 focus:border-[#12C6A866]"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider mb-1.5 block" style={{ color: "#6B7280" }}>Xabar</label>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Xabaringizni yozing..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none resize-none transition-all duration-200 focus:border-[#12C6A866]"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-bold text-[#0A0E14] active:scale-[0.97] transition-transform duration-150"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, #0FBFA3)`, boxShadow: `0 8px 25px -5px ${ACCENT}55` }}
              >
                Yuborish
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

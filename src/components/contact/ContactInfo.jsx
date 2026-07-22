import { useState } from "react";
import { motion } from "framer-motion";
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

const inputContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const inputItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const InputField = ({ label, type = "text", placeholder, children }) => {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div variants={inputItem} className="relative">
      <label className="text-[10px] uppercase tracking-wider mb-1.5 block transition-colors duration-200"
        style={{ color: focused ? ACCENT : "#6B7280" }}>
        {label}
      </label>
      {children ? children(focused, setFocused) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-300"
          style={{
            background: focused ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${focused ? `${ACCENT}66` : BORDER}`,
            boxShadow: focused ? `0 0 0 3px ${ACCENT}15, 0 4px 16px -4px ${ACCENT}20` : "none",
            transform: focused ? "scale(1.01)" : "scale(1)",
          }}
        />
      )}
    </motion.div>
  );
};

const ContactInfo = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20">
    <div className="grid md:grid-cols-2 gap-10 md:gap-16">
      {/* Left: Info cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-body" style={{ color: "#6B7280" }}>
          <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
          Aloqa ma'lumotlari
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          <span className="text-white">Qanday </span>
          <span className="gradient-text">bog'lanish</span>
          <span className="text-white"> mumkin?</span>
        </h2>

        <div className="flex flex-col gap-3">
          {INFO_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ x: 4, borderColor: `${ACCENT}44` }}
                className="rounded-xl p-4 flex items-center gap-4 transition-all"
                style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: item.accent ? `${ACCENT}18` : "rgba(255,255,255,0.04)", border: `1px solid ${item.accent ? `${ACCENT}33` : "rgba(255,255,255,0.06)"}` }}>
                  <Icon size={18} strokeWidth={1.6} style={{ color: item.accent ? ACCENT : "rgba(255,255,255,0.4)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "#6B7280" }}>{item.title}</p>
                  <Wrapper
                    {...(item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.desc}
                  </Wrapper>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-3 mt-6">
          <motion.a
            href="tel:+998950344343"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
            style={{ background: ACCENT, color: "#0A0E14", boxShadow: `0 8px 25px -5px ${ACCENT}55` }}
          >
            <Phone size={16} strokeWidth={2.2} />
            Qo'ng'iroq
          </motion.a>
          <motion.a
            href="https://t.me/monaer_uz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
            style={{ border: `1px solid ${BORDER}`, color: "#fff", background: "transparent" }}
          >
            <MessageCircle size={16} strokeWidth={2.2} />
            Telegram
          </motion.a>
        </div>
      </motion.div>

      {/* Right: Form with animated inputs */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-2xl p-6 sm:p-8" style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}>
          <h3 className="font-display text-lg font-bold text-white mb-1">Xabar yozing</h3>
          <p className="text-xs mb-6" style={{ color: "#6B7280" }}>Formani to'ldiring, biz sizga qayta qo'ng'iroq qilamiz</p>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
            variants={inputContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <input type="text" name="honeypot" tabIndex="-1" autoComplete="off"
              className="absolute opacity-0 pointer-events-none h-0 w-0" />
            <input type="hidden" name="formTimestamp" value={Date.now().toString()} />

            <div className="grid grid-cols-2 gap-3">
              <InputField label="Ism" placeholder="Ismingiz" />
              <InputField label="Telefon" type="tel" placeholder="+998 __ ___-__-__" />
            </div>

            <InputField label="Email" type="email" placeholder="email@example.com" />

            <InputField label="Mavzu">
              {(focused, setFocused) => (
                <select
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer transition-all duration-300"
                  style={{
                    background: focused ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${focused ? `${ACCENT}66` : BORDER}`,
                    boxShadow: focused ? `0 0 0 3px ${ACCENT}15, 0 4px 16px -4px ${ACCENT}20` : "none",
                    color: "rgba(255,255,255,0.5)",
                    transform: focused ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  <option value="">Tanlang</option>
                  <option value="order">Buyurtma haqida</option>
                  <option value="product">Mahsulot haqida</option>
                  <option value="delivery">Yetkazish haqida</option>
                  <option value="warranty">Kafolat haqida</option>
                  <option value="other">Boshqa</option>
                </select>
              )}
            </InputField>

            <InputField label="Xabar">
              {(focused, setFocused) => (
                <textarea
                  rows={4}
                  placeholder="Xabaringizni yozing..."
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none resize-none transition-all duration-300"
                  style={{
                    background: focused ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${focused ? `${ACCENT}66` : BORDER}`,
                    boxShadow: focused ? `0 0 0 3px ${ACCENT}15, 0 4px 16px -4px ${ACCENT}20` : "none",
                    transform: focused ? "scale(1.01)" : "scale(1)",
                  }}
                />
              )}
            </InputField>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-shadow duration-300"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, color: "#0A0E14", boxShadow: `0 8px 25px -5px ${ACCENT}55` }}
            >
              Yuborish
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactInfo;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Send,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  MapPin,
} from "lucide-react";

const ACCENT = "#12C6A8";

const FONT_BRAND = "'Orbitron', sans-serif";
const FONT_UI = "'Inter', sans-serif";

const FOOTER_ICON_SIZE = 13;
const FOOTER_ICON_STROKE = 2;

const SHADOW_CARD =
  "0 20px 50px -18px rgba(0,0,0,0.6), 0 6px 18px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)";
const SHADOW_ICON_BOX = "0 2px 8px -2px rgba(18,198,168,0.18)";
const SHADOW_CTA = "0 8px 22px -6px rgba(18,198,168,0.45)";

const CONTACTS = [
  {
    icon: Phone,
    text: "+998 95 034-43-43",
    href: "tel:+998950344343",
    sub: "Qo'ng'iroq qiling",
  },
  {
    icon: Send,
    text: "@monaer_uz",
    href: "https://t.me/monaer_uz",
    sub: "Telegram",
  },
  {
    icon: Mail,
    text: "info@monaer.uz",
    href: "mailto:info@monaer.uz",
    sub: "Elektron pochta",
  },
  {
    icon: MapPin,
    text: "Toshkent, O'zbekiston",
    href: "https://maps.google.com",
    sub: "Manzil",
  },
];

const BADGES = [
  { icon: ShieldCheck, label: "12 oy kafolat" },
  { icon: Truck, label: "1-3 kun yetkazish" },
  { icon: RotateCcw, label: "14 kun qaytarish" },
];

const SOCIALS = [
  { label: "Telegram", href: "https://t.me/monaer_uz" },
  { label: "Instagram", href: "https://instagram.com" },
];

const col = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const IconBox = ({ icon: Icon }) => (
  <div
    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
    style={{
      background:
        "linear-gradient(135deg, rgba(18,198,168,0.14), rgba(18,198,168,0.04))",
      border: "1px solid rgba(18,198,168,0.18)",
      boxShadow: SHADOW_ICON_BOX,
    }}
  >
    <Icon
      size={FOOTER_ICON_SIZE}
      strokeWidth={FOOTER_ICON_STROKE}
      style={{ color: ACCENT }}
    />
  </div>
);

const Footer = () => {
  return (
    <footer className="relative z-10 mt-16 sm:mt-24 px-3 sm:px-6 md:px-8 lg:px-14 pb-4 sm:pb-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        className="relative mx-auto max-w-6xl rounded-[22px] sm:rounded-[28px] border overflow-hidden"
        style={{
          fontFamily: FONT_UI,
          background:
            "linear-gradient(160deg, rgba(26,29,38,0.7) 0%, rgba(10,12,18,0.55) 100%)",
          backdropFilter: "blur(28px) saturate(150%)",
          WebkitBackdropFilter: "blur(28px) saturate(150%)",
          borderColor: "rgba(255,255,255,0.09)",
          boxShadow: SHADOW_CARD,
        }}
      >
        {/* Yuqori shisha qirrasi */}
        <div
          className="pointer-events-none absolute top-0 left-8 right-8 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(18,198,168,0.45), transparent)",
          }}
        />

        {/* Ambient blob */}
        <div
          className="pointer-events-none absolute -top-32 left-[12%] w-72 h-72 rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: ACCENT }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-[8%] w-64 h-64 rounded-full blur-[90px] opacity-[0.04]"
          style={{ background: ACCENT }}
        />

        <div className="relative px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 pb-6 sm:pb-8">
          {/* Grid: 3 ta haqiqiy ustunga moslab to'g'rilandi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 mb-10 sm:mb-12">
            {/* Ustun 1 — Brend */}
            <motion.div
              variants={col}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <Link to="/" className="inline-block mb-4">
                <span
                  className="text-2xl sm:text-[26px] font-black tracking-[0.08em] select-none leading-none"
                  style={{ fontFamily: FONT_BRAND }}
                >
                  <span className="text-white">M</span>
                  <span style={{ color: ACCENT }}>O</span>
                  <span className="text-white">NAER</span>
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-white/35 leading-relaxed max-w-[260px] mb-5">
                Sifatli avtomobil ehtiyot qismlari. 12 yillik tajriba va
                ishonchli hamkorlik.
              </p>
              <Link
                to="/catalog"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{
                  fontFamily: FONT_UI,
                  background: `linear-gradient(150deg, ${ACCENT}, #0E8F7B)`,
                  color: "#06110D",
                  boxShadow: SHADOW_CTA,
                }}
              >
                Katalogga o'tish
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Ustun 2 — Aloqa */}
            <motion.div
              variants={col}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-4 sm:mb-5">
                aloqa
              </h3>
              <ul className="space-y-3">
                {CONTACTS.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 transition-all duration-300"
                    >
                      <IconBox icon={item.icon} />
                      <div>
                        <span className="text-xs sm:text-sm text-white/55 group-hover:text-white/85 transition-colors duration-300 block leading-tight">
                          {item.text}
                        </span>
                        <span className="text-[10px] text-white/25">
                          {item.sub}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ustun 3 — Ishonch belgilari */}
            <motion.div
              variants={col}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/25 mb-4 sm:mb-5">
                ishonch
              </h3>
              <ul className="space-y-3">
                {BADGES.map((b) => (
                  <li key={b.label} className="group flex items-center gap-3">
                    <IconBox icon={b.icon} />
                    <span className="text-xs sm:text-sm text-white/45 group-hover:text-white/70 transition-colors duration-300">
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Ajratuvchi chiziq */}
          <div
            className="h-px mb-6 sm:mb-8"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          {/* Pastki qator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <span className="text-[10px] sm:text-[11px] text-white/20">
              &copy; 2026 MONAER. Barcha huquqlar himoyalangan.
            </span>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    color: ACCENT,
                    background: "rgba(18,198,168,0.06)",
                    border: "1px solid rgba(18,198,168,0.16)",
                  }}
                >
                  <span className="group-hover:drop-shadow-[0_0_6px_rgba(18,198,168,0.5)]">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

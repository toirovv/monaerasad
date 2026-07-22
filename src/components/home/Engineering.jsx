import { motion } from "framer-motion";
import { Zap, Wind, Compass, ShieldCheck } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";
const PANEL_BG = "rgba(17,24,39,0.55)";

const ITEMS = [
  { icon: Zap, title: "Zavod sifati", desc: "Zavodda ishlab chiqarilgan, originalga to'liq mos." },
  { icon: Wind, title: "Tez yetkazish", desc: "1-3 kun ichida yetkazib beramiz." },
  { icon: Compass, title: "Aerodinamik sinov", desc: "Shamol tunnelida sinovdan o'tkazilgan." },
  { icon: ShieldCheck, title: "Kafolat", desc: "12 oylik rasmiy kafolat beriladi." },
];

const Engineering = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
    <div className="mb-8 sm:mb-12">
      <SectionLabel>Sifat kafolati</SectionLabel>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Nega aynan </span>
        <span className="gradient-text">bizni</span>
        <span className="text-white"> tanlashadi?</span>
      </h2>
      <p className="text-sm sm:text-base max-w-lg mt-3 font-body" style={{ color: TEXT_SECONDARY }}>
        Har bir ehtiyot qism qat'iy sinovdan o'tkazilgan va zavod standartlariga to'liq mos keladi.
      </p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {ITEMS.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, borderColor: `${ACCENT}55` }}
            className="rounded-2xl p-4 sm:p-6 md:p-8"
            style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8, borderColor: `${ACCENT}aa` }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center mb-4 sm:mb-6"
              style={{ borderColor: BORDER }}
            >
              <Icon strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: ACCENT }} />
            </motion.div>
            <h3 className="font-display text-base sm:text-lg text-white font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Engineering;

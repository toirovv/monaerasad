import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw, HeartHandshake, Zap, Award } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";
const PANEL_BG = "rgba(17,24,39,0.55)";

const VALUES = [
  { icon: ShieldCheck, title: "Ishonch", desc: "Har bir mahsulotga 12 oylik rasmiy kafolat." },
  { icon: Award, title: "Sifat", desc: "Faqat zavod ishlab chiqargan, originalga mos mahsulotlar." },
  { icon: Truck, title: "Tezlik", desc: "1-3 kun ichida O'zbekiston bo'ylab yetkazib beramiz." },
  { icon: HeartHandshake, title: "Munosabat", desc: "Professional va do'stona xizmat ko'rsatamiz." },
  { icon: RotateCcw, title: "Qaytarish", desc: "14 kun ichida sababsiz qaytarishingiz mumkin." },
  { icon: Zap, title: "Narx", desc: "Sifatli mahsulotni hamyonbop narxda olasiz." },
];

const AboutValues = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
    <div className="text-center mb-8 sm:mb-14">
      <SectionLabel>Qadriyatlarimiz</SectionLabel>
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Nega </span>
        <span className="gradient-text">MONAER</span>
        <span className="text-white">?</span>
      </h2>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
      {VALUES.map((v, i) => {
        const Icon = v.icon;
        return (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, borderColor: `${ACCENT}55` }}
            className="rounded-xl sm:rounded-2xl p-3.5 sm:p-6"
            style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border flex items-center justify-center mb-2.5 sm:mb-4"
              style={{ borderColor: BORDER }}
            >
              <Icon strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: ACCENT }} />
            </motion.div>
            <h3 className="font-display text-[13px] sm:text-lg text-white font-semibold mb-1 sm:mb-2">{v.title}</h3>
            <p className="text-[11px] sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>{v.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default AboutValues;

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
  <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-8 sm:py-24">
    <div className="text-center mb-6 sm:mb-14">
      <SectionLabel>Qadriyatlarimiz</SectionLabel>
      <h2 className="font-display text-[20px] sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Nega </span>
        <span className="gradient-text">MONAER</span>
        <span className="text-white">?</span>
      </h2>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
      {VALUES.map((v) => {
        const Icon = v.icon;
        return (
          <div
            key={v.title}
            className="value-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group/card transition-all duration-300"
            style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
          >
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-6"
              style={{ borderColor: BORDER }}
            >
              <Icon strokeWidth={1.5} className="w-[18px] h-[18px] sm:w-5 sm:h-5" style={{ color: ACCENT }} />
            </div>
            <h3 className="font-display text-[14px] sm:text-lg text-white font-semibold mb-1.5 sm:mb-2">{v.title}</h3>
            <p className="text-[12px] sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>{v.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default AboutValues;

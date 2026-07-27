import { ShieldCheck, Truck, RotateCcw, Battery } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";
const PANEL_BG = "rgba(17,24,39,0.55)";

const ITEMS = [
  { icon: ShieldCheck, title: "12 oy kafolat", desc: "Har bir mahsulotga rasmiy kafolat beriladi." },
  { icon: Truck, title: "Yetkazish", desc: "O'zbekiston bo'ylab 1-3 kunda yetkazib beramiz." },
  { icon: RotateCcw, title: "Qaytarish", desc: "14 kun ichida sababsiz qaytarishingiz mumkin." },
  { icon: Battery, title: "Original sifat", desc: "Faqat zavod ishlab chiqargan mahsulotlar." },
];

const Features = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
    <div className="mb-8 sm:mb-12">
      <SectionLabel>MONAER afzalliklari</SectionLabel>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Ishonchli </span>
        <span className="gradient-text">hamkor</span>
      </h2>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {ITEMS.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className="rounded-2xl p-4 sm:p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5"
            style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
          >
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 hover:scale-110"
              style={{ borderColor: BORDER }}
            >
              <Icon strokeWidth={1.5} className="w-5 h-5" style={{ color: ACCENT }} />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white font-semibold mb-1.5">{f.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>{f.desc}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;

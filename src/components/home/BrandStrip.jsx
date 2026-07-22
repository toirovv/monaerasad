import { motion } from "framer-motion";

const ACCENT = "#12C6A8";

const WORDS = [
  { text: "MONAER", accent: false },
  { text: "•", accent: true },
  { text: "SIFAT", accent: false },
  { text: "•", accent: true },
  { text: "ISHONCH", accent: false },
  { text: "•", accent: true },
  { text: "TEZLIK", accent: false },
  { text: "•", accent: true },
];

const ScrollLine = ({ direction = "left", speed = 30, className = "" }) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className="flex whitespace-nowrap gap-8 sm:gap-12"
      style={{
        animation: `scroll-${direction === "left" ? "ltr" : "rtl"} ${speed}s linear infinite`,
      }}
    >
      {Array.from({ length: 3 }).map((_, setIdx) => (
        <div key={setIdx} className="flex items-center gap-8 sm:gap-12 shrink-0">
          {WORDS.map((w, i) => (
            <span
              key={`${setIdx}-${i}`}
              className={`shrink-0 select-none font-display font-bold tracking-tight ${
                w.accent
                  ? "text-base sm:text-xl md:text-2xl"
                  : "text-3xl sm:text-4xl md:text-5xl"
              }`}
              style={{
                color: w.accent ? ACCENT : "rgba(255,255,255,0.04)",
                textShadow: w.accent ? `0 0 20px ${ACCENT}40` : "none",
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const BrandStrip = () => (
  <section className="relative py-10 sm:py-12 md:py-14 mb-12 sm:mb-16 md:mb-20 overflow-hidden">
    {/* Background glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${ACCENT}06, transparent)`,
      }}
    />

    {/* Top border */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}30, transparent)` }}
    />

    {/* Lines */}
    <ScrollLine direction="left" speed={25} className="mb-3 sm:mb-4" />
    <ScrollLine direction="right" speed={35} className="opacity-50" />

    {/* Bottom border */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}30, transparent)` }}
    />

    {/* Mobile: vertical accent words */}
    <div className="sm:hidden absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-2">
      {["SIFAT", "TEZLIK"].map((w) => (
        <span
          key={w}
          className="text-[8px] font-bold uppercase tracking-[0.3em] rotate-[-90deg] origin-center"
          style={{ color: `${ACCENT}30` }}
        >
          {w}
        </span>
      ))}
    </div>
  </section>
);

export default BrandStrip;

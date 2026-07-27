import { useState, useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ACCENT = "#12C6A8";

const TESTIMONIALS = [
  {
    name: "Aziz Karimov",
    role: "Cobalt egasi",
    quote: "Cobalt uchun tormoz kolodkasi oldim — sifati ajoyib, 3 oydan beri hech qanday muammo yo'q. Doimiy mijozga aylandim.",
    rating: 5,
    color: "#F59E0B",
  },
  {
    name: "Malika Yusupova",
    role: "Malibu 2 egasi",
    quote: "Yetkazish tez, qadoqlash ehtiyotkorlik bilan. O'zim ko'rgan eng yaxshi do'kon. Hammaga tavsiya qilaman!",
    rating: 5,
    color: "#10B981",
  },
  {
    name: "Jasur Toshev",
    role: "Tracker egasi",
    quote: "Uch marta buyurtma berdim. Har safar sifat bir xil — hammaga tavsiya qilaman.",
    rating: 5,
    color: "#3B82F6",
  },
  {
    name: "Lola Abdullayeva",
    role: "Spark egasi",
    quote: "Malibu uchun opor prujina oldim — mashina yangidek bo'ldi! Juda minnatdorman.",
    rating: 4,
    color: "#EC4899",
  },
  {
    name: "Sardor Raximov",
    role: "Nexia 3 egasi",
    quote: "Tormoz diski va kolodka bir vaqtda oldim. Sifati zo'r, narxi ham hamyonbop.",
    rating: 5,
    color: "#8B5CF6",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setFade(false);
    setTimeout(() => {
      setActive(idx);
      setFade(true);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % TESTIMONIALS.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  const handleNext = () => { next(); resetTimer(); };
  const handlePrev = () => { prev(); resetTimer(); };

  const t = TESTIMONIALS[active];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-body" style={{ color: "#6B7280" }}>
            <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
            Mijozlar fikrlari
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Bizga </span>
            <span className="gradient-text">ishonch</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-90"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ChevronLeft size={16} className="text-white/50" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-90"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ChevronRight size={16} className="text-white/50" />
          </button>
        </div>
      </div>

      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden" style={{ minHeight: "220px" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(17,24,39,0.7), rgba(17,24,39,0.4))",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "24px",
          }}
        />

        <div className="relative p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-5 md:gap-6 items-center md:items-start">
          <div
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${t.color}20, ${t.color}08)`,
              border: `1px solid ${t.color}25`,
            }}
          >
            <Quote size={18} style={{ color: t.color }} className="opacity-60" />
          </div>

          <div className="flex-1 min-w-0" style={{ opacity: fade ? 1 : 0, transition: "opacity 0.2s ease" }}>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={12}
                  style={{
                    fill: j < t.rating ? t.color : "transparent",
                    color: j < t.rating ? t.color : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 font-body" style={{ color: "#E5E7EB" }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: `linear-gradient(135deg, ${t.color}30, ${t.color}15)`,
                  border: `1px solid ${t.color}30`,
                  color: t.color,
                }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm sm:text-base text-white font-semibold">{t.name}</p>
                <p className="text-xs" style={{ color: "#6B7280" }}>{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer(); }}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: active === i ? "24px" : "8px",
              height: "8px",
              background: active === i ? ACCENT : "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

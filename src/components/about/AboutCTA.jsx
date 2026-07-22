import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";
const TEXT_MUTED = "#6B7280";

const PHONE_NUMBER = "+998950344343";
const TELEGRAM_LINK = "https://t.me/monaer_uz";

const AboutCTA = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-14 sm:pb-28">
    <div
      className="relative rounded-2xl sm:rounded-3xl px-5 sm:px-16 py-8 sm:py-16 text-center overflow-hidden"
      style={{ border: `1px solid ${BORDER}`, background: "linear-gradient(160deg, #111827 0%, #0a0e14 100%)" }}
    >
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(18,198,168,0.12) 0%, transparent 65%)" }}
      />
      <div className="relative">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4 font-body" style={{ color: TEXT_MUTED }}>
          Savolingiz bormi?
        </p>
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
          <span className="text-white">Bizga </span>
          <span className="gradient-text">qo'ng'iroq</span>
          <span className="text-white"> qiling</span>
        </h2>
        <p className="max-w-md mx-auto mb-6 sm:mb-8 text-[13px] sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>
          Kerakli ehtiyot qismni topishga yordam beramiz.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-md mx-auto mb-8 sm:mb-10">
          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="ring-pulse flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm font-body whitespace-nowrap"
            style={{ background: ACCENT, color: "#0A0E14" }}
          >
            <motion.span
              whileHover={{ rotate: [0, -18, 16, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="inline-flex shrink-0"
            >
              <Phone size={15} strokeWidth={2.2} />
            </motion.span>
            +998 95 034-43-43
          </motion.a>
          <motion.a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: ACCENT, color: ACCENT }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm font-body text-white whitespace-nowrap transition-colors duration-200"
            style={{ background: "transparent", border: `1px solid ${BORDER}` }}
          >
            <motion.span whileHover={{ scale: 1.2, rotate: 10 }} className="inline-flex shrink-0">
              <MessageCircle size={15} strokeWidth={2.2} />
            </motion.span>
            Telegram orqali yozish
          </motion.a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3">
          {[
            { icon: ShieldCheck, label: "12 oy kafolat" },
            { icon: Truck, label: "1-3 kunda yetkazish" },
            { icon: RotateCcw, label: "14 kun qaytarish" },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.label} whileHover={{ y: -2 }} className="flex items-center gap-1.5 sm:gap-2">
                <motion.span whileHover={{ scale: 1.2 }} className="inline-flex">
                  <Icon size={13} strokeWidth={2} style={{ color: ACCENT }} />
                </motion.span>
                <span className="text-[10px] sm:text-xs font-body" style={{ color: TEXT_SECONDARY }}>{b.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutCTA;

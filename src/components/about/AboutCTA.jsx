import { Phone, MessageCircle, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";
const TEXT_MUTED = "#6B7280";

const PHONE_NUMBER = "+998950344343";
const TELEGRAM_LINK = "https://t.me/monaer_uz";

const AboutCTA = () => (
  <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 pb-14 sm:pb-28">
    <div
      className="relative rounded-2xl sm:rounded-3xl px-5 sm:px-16 py-8 sm:py-16 text-center overflow-hidden"
      style={{ border: `1px solid ${BORDER}`, background: "linear-gradient(160deg, #111827 0%, #0a0e14 100%)" }}
    >
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[28rem] sm:h-[28rem] rounded-full blur-[60px] sm:blur-[90px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(18,198,168,0.10) 0%, transparent 65%)" }}
      />
      <div className="relative">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4 font-body" style={{ color: TEXT_MUTED }}>
          Savolingiz bormi?
        </p>
        <h2 className="font-display text-[22px] sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
          <span className="text-white">Bizga </span>
          <span className="gradient-text">qo'ng'iroq</span>
          <span className="text-white"> qiling</span>
        </h2>
        <p className="max-w-md mx-auto mb-6 sm:mb-8 text-[14px] sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>
          Kerakli ehtiyot qismni topishga yordam beramiz.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-md mx-auto mb-8 sm:mb-10">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="ring-pulse flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3.5 rounded-full font-semibold text-[13px] sm:text-sm font-body whitespace-nowrap transition-all duration-200 hover:opacity-90 active:scale-95 min-h-[44px]"
            style={{ background: ACCENT, color: "#0A0E14" }}
          >
            <Phone size={16} strokeWidth={2.2} className="shrink-0" />
            +998 95 034-43-43
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3.5 rounded-full font-semibold text-[13px] sm:text-sm font-body text-white whitespace-nowrap transition-all duration-200 hover:opacity-80 active:scale-95 min-h-[44px]"
            style={{ background: "transparent", border: `1px solid ${BORDER}` }}
          >
            <MessageCircle size={16} strokeWidth={2.2} className="shrink-0" />
            Telegram orqali yozish
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3">
          {[
            { icon: ShieldCheck, label: "12 oy kafolat" },
            { icon: Truck, label: "1-3 kunda yetkazish" },
            { icon: RotateCcw, label: "14 kun qaytarish" },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-center gap-1.5 sm:gap-2">
                <Icon size={13} strokeWidth={2} className="shrink-0" style={{ color: ACCENT }} />
                <span className="text-[11px] sm:text-xs font-body" style={{ color: TEXT_SECONDARY }}>{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutCTA;

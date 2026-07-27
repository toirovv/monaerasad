const ACCENT = "#12C6A8";

const ContactHero = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-[76px] sm:pt-32 pb-6 sm:pb-12">
    <div className="text-center max-w-2xl mx-auto">
      <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 font-body" style={{ color: "#6B7280" }}>
        <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
        Aloqa
        <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
      </p>
      <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="text-white">Biz bilan </span>
        <span className="gradient-text">bog'laning</span>
      </h1>
      <p className="text-[14px] sm:text-lg leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
        Savolingiz bormi? Mutaxassislarimiz har qanday savolga tez va professional javob berishadi.
      </p>
    </div>
  </section>
);

export default ContactHero;

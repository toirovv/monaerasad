const ACCENT = "#12C6A8";

const AboutHero = () => (
  <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 pt-[76px] sm:pt-32 pb-8 sm:pb-20">
    <div className="text-center max-w-3xl mx-auto">
      <p className="inline-flex items-center gap-2 text-[10px] sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 font-body" style={{ color: "#6B7280" }}>
        <span className="w-4 sm:w-6 h-px" style={{ backgroundColor: ACCENT }} />
        Biz haqimizda
        <span className="w-4 sm:w-6 h-px" style={{ backgroundColor: ACCENT }} />
      </p>
      <h1 className="font-display text-[22px] sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
        <span className="text-white">Avtomobil ehtiyot qismlarida </span>
        <span className="gradient-text">ishonchli hamkor</span>
      </h1>
      <p className="text-[13px] sm:text-lg leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
        5 yillik tajriba bilan O'zbekiston bo'ylab minglab haydovchilarga xizmat ko'rsatib kelmoqdamiz.
        Sifat, ishonch va tez xizmat — bizning asosiy qadriyatlarimiz.
      </p>
    </div>
  </section>
);

export default AboutHero;

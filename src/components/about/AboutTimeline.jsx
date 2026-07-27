const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";

const TIMELINE = [
  { year: "2020", title: "Boshlanish", desc: "Toshkentda kichik do'kon ochildi. Birinchi 50 ta mijoz bilan ish boshladik." },
  { year: "2021", title: "Kengayish", desc: "Mahsulot turi 4 dan 8 ga oshdi. Onlayn do'kon ishga tushdi." },
  { year: "2022", title: "Ishonch", desc: "1000+ mamnun mijozga yetdik. Telegram orqali buyurtma tizimi ishga tushdi." },
  { year: "2023", title: "Yetkazish", desc: "O'zbekiston bo'ylab yetkazish xizmatini boshladik. 3000+ mijoz." },
  { year: "2024", title: "Sifat", desc: "5000+ mijoz. 12 ta turdagi mahsulot. O'rtacha baho 4.9/5." },
];

const AboutTimeline = () => (
  <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-8 sm:py-24">
    <div className="text-center mb-8 sm:mb-14">
      <p className="inline-flex items-center gap-2.5 text-[11px] sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 font-body" style={{ color: "#6B7280" }}>
        <span className="w-5 sm:w-6 h-px" style={{ backgroundColor: ACCENT }} />
        Yo'limiz
      </p>
      <h2 className="font-display text-[20px] sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Bizning </span>
        <span className="gradient-text">rivojlanish</span>
      </h2>
    </div>

    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-[17px] sm:left-1/2 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT}44, transparent)` }} />

      {TIMELINE.map((item, i) => (
        <div
          key={item.year}
          className="relative flex items-start mb-8 sm:mb-12 last:mb-0"
        >
          <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "" : "order-2"}`} />

          <div
            className="absolute left-[17px] sm:left-1/2 w-3 h-3 rounded-full -translate-x-[5px] sm:-translate-x-[5px] mt-2.5 z-10"
            style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT}66` }}
          />

          <div
            className={`ml-10 sm:ml-0 sm:w-1/2 rounded-xl p-4 sm:p-5 ${i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:order-1"}`}
            style={{ border: `1px solid ${BORDER}`, background: "rgba(17,24,39,0.55)" }}
          >
            <span className="inline-block text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 sm:mb-2" style={{ background: `${ACCENT}1a`, color: ACCENT }}>
              {item.year}
            </span>
            <h3 className="font-display text-[15px] sm:text-lg text-white font-semibold mb-1.5">{item.title}</h3>
            <p className="text-[13px] sm:text-sm leading-relaxed font-body" style={{ color: TEXT_SECONDARY }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutTimeline;

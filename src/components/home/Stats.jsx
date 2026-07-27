import CountUpStat from "../ui/CountUpStat";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";

const STATS = [
  { value: "5000+", label: "Mamnun mijozlar" },
  { value: "12", label: "Turdagi ehtiyot qism" },
  { value: "4.9/5", label: "O'rtacha baho" },
  { value: "5+", label: "Yillik tajriba" },
];

const Stats = () => (
  <section className="relative mt-8 sm:mt-16 py-10 sm:py-14 overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${BORDER}, ${ACCENT}66, ${BORDER}, transparent)` }} />
    <div className="absolute inset-x-0 bottom-0 h-px"
      style={{ background: `linear-gradient(90deg, transparent, ${BORDER}, ${ACCENT}66, ${BORDER}, transparent)` }} />
    <div className="absolute inset-0 pointer-events-none"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.025), transparent 25%, transparent 75%, rgba(0,0,0,0.3))",
        boxShadow: "inset 0 16px 30px -22px rgba(0,0,0,0.65), inset 0 -16px 30px -22px rgba(0,0,0,0.65)",
      }} />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
      {STATS.map((s) => (
        <div key={s.label}>
          <CountUpStat value={s.value} />
          <p className="text-xs uppercase tracking-wider mt-1.5 font-body" style={{ color: TEXT_SECONDARY }}>{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;

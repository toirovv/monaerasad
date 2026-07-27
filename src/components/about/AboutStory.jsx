import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";
const TEXT_SECONDARY = "#9CA3AF";

const STATS = [
  { num: "5+", label: "Yillik tajriba" },
  { num: "5000+", label: "Mamnun mijozlar" },
  { num: "12+", label: "Tur ehtiyot qism" },
  { num: "4.9", label: "O'rtacha baho" },
];

const AboutStory = () => (
  <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-8 sm:py-24">
    <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
      <div>
        <SectionLabel>Bizning hikoyamiz</SectionLabel>
        <h2 className="font-display text-[20px] sm:text-4xl font-bold tracking-tight mb-3 sm:mb-5">
          <span className="text-white">2020-yildan beri </span>
          <span className="gradient-text">sifat bilan</span>
          <span className="text-white"> xizmat qilamiz</span>
        </h2>
        <div className="space-y-2.5 sm:space-y-4 font-body text-[13px] sm:text-base leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          <p>
            MONAER 2020-yilda Toshkentda kichik do'kon sifatida o'z faoliyatini boshladi. Bizning maqsadimiz oddiy edi —
            haydovchilarga zavod sifatidagi ehtiyot qismlarni arzon narxlarda yetkazib berish.
          </p>
          <p>
            Bugun biz 12 dan ortiq turdagi ehtiyot qismlarni taklif qilamiz va O'zbekiston bo'ylab
            5000 dan ortiq mamnun mijozlar bilan ishlaymiz.
          </p>
          <p>
            Biz faqat zavod ishlab chiqargan mahsulotlarni sotamiz — hech qachon sifatdan
            voz kechmaymiz. Shuning uchun mijozlarimiz bizga ishonadi.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-10"
          style={{ border: `1px solid ${BORDER}`, background: "rgba(17,24,39,0.55)" }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center py-1">
                <p className="font-display text-[20px] sm:text-3xl font-bold" style={{ color: ACCENT }}>{s.num}</p>
                <p className="text-[11px] sm:text-sm font-body mt-1" style={{ color: TEXT_SECONDARY }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute -inset-4 -z-10 rounded-3xl blur-[40px] opacity-15 max-sm:blur-[25px] max-sm:opacity-10"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
      </div>
    </div>
  </section>
);

export default AboutStory;

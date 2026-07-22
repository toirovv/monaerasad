import { motion } from "framer-motion";
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
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Bizning hikoyamiz</SectionLabel>
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-5">
          <span className="text-white">2020-yildan beri </span>
          <span className="gradient-text">sifat bilan</span>
          <span className="text-white"> xizmat qilamiz</span>
        </h2>
        <div className="space-y-3 sm:space-y-4 font-body text-[13px] sm:text-base leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          <p>
            MONAER 2020-yilda Toshkentda kichik do'kon sifatida o'z faoliyatini boshladi. Bizning maqsadimiz oddiy edi —
            haydovchilarga zavod sifatidagi ehtiyot qismlarni arzon narxlarda yetkazib berish.
          </p>
          <p>
            Bugun biz 12 dan ortiq turdagi ehtiyot qismlarni taklif qilamiz va O'zbekiston bo'ylab
            5000 dan ortiq mamnun mijozlar bilan ishlaymiz.
          </p>
          <p className="hidden sm:block">
            Biz faqat zavod ishlab chiqargan mahsulotlarni sotamiz — hech qachon sifatdan
            voz kechmaymiz. Shuning uchun mijozlarimiz bizga ishonadi.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-10"
          style={{ border: `1px solid ${BORDER}`, background: "rgba(17,24,39,0.55)" }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="text-center"
              >
                <p className="font-display text-xl sm:text-3xl font-bold" style={{ color: ACCENT }}>{s.num}</p>
                <p className="text-[10px] sm:text-sm font-body mt-1" style={{ color: TEXT_SECONDARY }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="absolute -inset-4 -z-10 rounded-3xl blur-[60px] opacity-20"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
      </motion.div>
    </div>
  </section>
);

export default AboutStory;

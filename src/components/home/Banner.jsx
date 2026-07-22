import { motion } from "framer-motion";
import bannerImg from "../../assets/MonaerImg1.png";

const BORDER = "#1F2937";

const Banner = () => (
  <section className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 pt-[88px] sm:pt-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.005 }}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full flex items-center justify-center"
      style={{
        border: `1px solid ${BORDER}`,
        background: "linear-gradient(160deg, #0d1420 0%, #0a0e14 45%, #060a10 100%)",
      }}
    >
      <img
        src={bannerImg}
        alt="Monaer"
        className="w-full h-auto min-h-[220px] max-h-[300px] sm:max-h-[420px] md:max-h-[500px] lg:max-h-[560px] xl:max-h-[620px] object-contain mx-auto"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </motion.div>
  </section>
);

export default Banner;

import React, { memo } from "react";
import { motion } from "framer-motion";

const ACCENT = "#12C6A8";

const CatalogHeader = memo(({ count = 0 }) => (
  <div className="mb-8 sm:mb-10">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3 font-body"
      style={{ color: ACCENT }}
    >
      <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
      Katalog
    </motion.p>
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight"
      >
        <span className="text-white">Barcha </span>
        <span className="gradient-text">mahsulotlar</span>
      </motion.h1>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}25`, color: ACCENT }}
      >
        {count} ta mahsulot
      </motion.span>
    </div>
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-white/45 max-w-lg mt-3 text-sm sm:text-base leading-relaxed font-body"
    >
      Barcha avto ehtiyot qismlarini bir joyda toping.
    </motion.p>
  </div>
));

CatalogHeader.displayName = "CatalogHeader";
export default CatalogHeader;
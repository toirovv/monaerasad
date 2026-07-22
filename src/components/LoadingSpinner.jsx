import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#12C6A8";

const LoadingSpinner = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-5">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      className="relative w-12 h-12"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2.5px solid rgba(255,255,255,0.06)",
          borderTopColor: ACCENT,
        }}
      />
      <div
        className="absolute inset-1 rounded-full"
        style={{
          border: "2px solid rgba(255,255,255,0.04)",
          borderBottomColor: `${ACCENT}88`,
        }}
      />
    </motion.div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xs text-white/30 tracking-widest uppercase"
    >
      Yuklanmoqda...
    </motion.p>
  </div>
);

export default LoadingSpinner;

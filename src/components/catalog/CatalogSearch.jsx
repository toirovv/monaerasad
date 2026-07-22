import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

const ACCENT = "#12C6A8";

const CatalogSearch = memo(({ search, onSearchChange }) => {
  const handleClear = useCallback(() => onSearchChange(""), [onSearchChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="relative w-full"
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Mahsulot yoki kategoriya qidirish..."
        className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/30 outline-none transition-all duration-200 font-body"
        style={{ WebkitBackdropFilter: "blur(10px)", backdropFilter: "blur(10px)" }}
        onFocus={(e) => (e.target.style.borderColor = `${ACCENT}55`)}
        onBlur={(e) => (e.target.style.borderColor = "")}
      />
      {search && (
        <button
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
});

CatalogSearch.displayName = "CatalogSearch";
export default CatalogSearch;
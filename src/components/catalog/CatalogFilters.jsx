import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";

const ACCENT = "#12C6A8";

const CatalogFilters = memo(({ categories, activeCategory, onCategoryChange }) => {
  const handleClick = useCallback((cat) => onCategoryChange(cat), [onCategoryChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => {
        const active = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-full text-[12px] sm:text-sm font-medium transition-all duration-200 font-body"
            style={
              active
                ? { background: ACCENT, color: "#0A0E14", border: "1px solid transparent" }
                : {
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }
            }
          >
            {cat}
          </button>
        );
      })}
    </motion.div>
  );
});

CatalogFilters.displayName = "CatalogFilters";
export default CatalogFilters;
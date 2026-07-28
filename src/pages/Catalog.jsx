import React, { useState, useMemo, memo, useEffect, useRef } from "react";
import { Search, X, SlidersHorizontal, Package } from "lucide-react";
import gsap from "gsap";
import products from "../data/product.json";
import CatalogGrid from "../components/catalog/CatalogGrid";
import useTypewriter from "../hooks/useTypewriter";
import useSimulatedLoading from "../hooks/useSimulatedLoading";
import CatalogSkeleton from "../components/skeletons/CatalogSkeleton";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";

const categories = ["All", ...new Set(products.map((p) => p.category))];
const categoryLabels = { All: "Barchasi" };

const SORT_OPTIONS = [
  { value: "default", label: "Standart" },
  { value: "price-asc", label: "Arzon → Qimmat" },
  { value: "price-desc", label: "Qimmat → Arzon" },
  { value: "rating", label: "Baholash" },
];

const TYPEWRITER_WORDS = ["Malibu 2", "Lacetti", "Spark", "Cobalt", "Nexia 3", "Tracker", "Matiz", "Damas", "Gentra"];

const sortProducts = (list, sortBy) => {
  const sorted = [...list];
  switch (sortBy) {
    case "price-asc": return sorted.sort((a, b) => a.price - b.price);
    case "price-desc": return sorted.sort((a, b) => b.price - a.price);
    case "rating": return sorted.sort((a, b) => b.rating - a.rating);
    default: return sorted;
  }
};

const Catalog = memo(() => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const pageRef = useRef(null);
  const placeholderText = useTypewriter(TYPEWRITER_WORDS, { typeSpeed: 90, deleteSpeed: 45, pauseTime: 1600 });

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
    }
  }, [])

  const filtered = useMemo(() => {
    const matched = products.filter((p) => {
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        (p.carModel && p.carModel.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
    return sortProducts(matched, sortBy);
  }, [activeCategory, search, sortBy]);

  const currentSort = SORT_OPTIONS.find((o) => o.value === sortBy);

  return (
    <div ref={pageRef} className="font-body pt-24 sm:pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${ACCENT}18, ${ACCENT}08)`, border: `1px solid ${ACCENT}25` }}
            >
              <Package size={16} strokeWidth={2} style={{ color: ACCENT }} />
            </div>
            <span className="text-sm sm:text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: ACCENT }}>
              Katalog
            </span>
            <span
              className="ml-auto px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}20`, color: ACCENT }}
            >
              {filtered.length} ta
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Barcha </span>
            <span className="gradient-text">mahsulotlar</span>
          </h1>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={search || isFocused ? "" : `${placeholderText} qidirish...`}
              className="w-full pl-10 pr-9 py-3 sm:py-3.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
              style={{
                background: "rgba(17,24,39,0.4)",
                border: `1px solid ${isFocused ? `${ACCENT}44` : "rgba(255,255,255,0.06)"}`,
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors" aria-label="Qidiruvni tozalash">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl text-sm sm:text-sm font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                background: sortOpen ? `${ACCENT}12` : "rgba(17,24,39,0.4)",
                border: `1px solid ${sortOpen ? `${ACCENT}33` : "rgba(255,255,255,0.06)"}`,
                color: sortOpen ? ACCENT : "rgba(255,255,255,0.5)",
              }}
            >
              <SlidersHorizontal size={15} />
              <span className="hidden sm:inline">{currentSort?.label}</span>
            </button>

            {sortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                <div
                  className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden z-50"
                  style={{
                    background: "rgba(17,24,39,0.95)",
                    backdropFilter: "blur(24px)",
                    border: `1px solid ${BORDER}`,
                    boxShadow: "0 16px 40px -10px rgba(0,0,0,0.7)",
                    animation: "toastIn 0.15s ease forwards",
                  }}
                >
                  {SORT_OPTIONS.map((opt) => {
                    const active = sortBy === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className="w-full px-4 py-3 text-sm sm:text-sm text-left transition-colors duration-150 hover:bg-white/[0.04]"
                        style={{ color: active ? ACCENT : "rgba(255,255,255,0.5)", background: active ? `${ACCENT}10` : "transparent" }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full text-sm sm:text-sm font-medium transition-all duration-200 shrink-0"
                style={
                  active
                    ? { background: ACCENT, color: "#0A0E14" }
                    : { background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.07)" }
                }
              >
                {categoryLabels[cat] || cat}
              </button>
            );
          })}
        </div>

        <CatalogGrid products={filtered} />
      </div>
    </div>
  );
});

Catalog.displayName = "Catalog";
export default Catalog;
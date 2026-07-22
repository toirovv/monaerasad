import React, { useState, useMemo, memo } from "react";
import products from "../data/product.json";
import CatalogHeader from "../components/catalog/CatalogHeader";
import CatalogSearch from "../components/catalog/CatalogSearch";
import CatalogFilters from "../components/catalog/CatalogFilters";
import CatalogGrid from "../components/catalog/CatalogGrid";
import CatalogSkeleton from "../components/skeletons/CatalogSkeleton";
import useSimulatedLoading from "../hooks/useSimulatedLoading";

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Catalog = memo(() => {
  const loading = useSimulatedLoading(1200);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchCategory = activeCategory === "All" || p.category === activeCategory;
        const matchSearch =
          !search ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
      }),
    [activeCategory, search]
  );

  if (loading) return <CatalogSkeleton />;

  const searchKey = `${activeCategory}-${search}`;

  return (
    <div className="font-body pt-28 sm:pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <CatalogHeader count={filtered.length} />

        <div
          className="rounded-2xl border border-white/[0.06] p-3 sm:p-4 mb-8 sm:mb-10 flex flex-col gap-3 sm:gap-4"
          style={{ background: "rgba(17,24,39,0.4)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          <CatalogSearch search={search} onSearchChange={setSearch} />
          <CatalogFilters categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        <CatalogGrid products={filtered} searchKey={searchKey} />
      </div>
    </div>
  );
});

Catalog.displayName = "Catalog";
export default Catalog;

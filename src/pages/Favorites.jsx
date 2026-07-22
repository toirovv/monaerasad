import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavoriteIds } from "../context/FavoritesContext";
import CardDesign from "../components/CardDesign";
import products from "../data/product.json";
import FavoritesSkeleton from "../components/skeletons/FavoritesSkeleton";
import useSimulatedLoading from "../hooks/useSimulatedLoading";

const ACCENT = "#12C6A8";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Favorites = () => {
  const loading = useSimulatedLoading(1000);
  const favoriteIds = useFavoriteIds();

  const favoriteProducts = useMemo(
    () => products.filter((p) => favoriteIds.includes(p.id)),
    [favoriteIds]
  );

  if (loading) return <FavoritesSkeleton />;

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-28">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Heart size={32} strokeWidth={1.2} className="text-white/20" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Sevimlilar bo'sh</h2>
            <p className="text-sm text-white/40">Mahsulotlardagi yurakchani bosing</p>
          </div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 25px -5px ${ACCENT}66` }}>
              <ArrowLeft size={16} /> Katalogga o'tish
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 pt-24 pb-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-white">Sevimlilar</span>
            <span className="ml-2 text-sm sm:text-base font-normal" style={{ color: "#9CA3AF" }}>
              ({favoriteProducts.length})
            </span>
          </h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6"
        >
          {favoriteProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="h-full"
            >
              <CardDesign
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                priceUZS={product.priceUZS}
                oldPriceUZS={product.oldPriceUZS}
                currency={product.currency}
                currencyUZS={product.currencyUZS}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                badge={product.badge}
                carModel={product.carModel}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;

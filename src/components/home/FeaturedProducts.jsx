import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CardDesign from "../CardDesign";
import SectionLabel from "../ui/SectionLabel";
import products from "../../data/product.json";

const ACCENT = "#12C6A8";
const TEXT_SECONDARY = "#9CA3AF";

const GPU_LAYER = { transform: "translateZ(0)", willChange: "transform" };

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

const FeaturedProducts = memo(() => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
    <div className="flex items-end justify-between mb-6 sm:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <SectionLabel>Mahsulotlar</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-white">Eng </span>
          <span className="gradient-text">mashhur</span>
          <span className="text-white"> mahsulotlar</span>
        </h2>
      </motion.div>
      <motion.a
        href="/catalog"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group hidden sm:inline-flex relative items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold overflow-hidden cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgba(18,198,168,0.12), rgba(18,198,168,0.04))",
          border: "1px solid rgba(18,198,168,0.2)",
          color: "#12C6A8",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 20px -6px rgba(18,198,168,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Shimmer */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />
        {/* Hover glow */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(18,198,168,0.2), transparent 70%)",
          }}
        />
        <span className="relative z-10">Barchasini ko'rish</span>
        <ArrowUpRight
          size={14}
          className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45"
        />
      </motion.a>
    </div>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          style={GPU_LAYER}
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
  </section>
));

FeaturedProducts.displayName = "FeaturedProducts";
export default FeaturedProducts;

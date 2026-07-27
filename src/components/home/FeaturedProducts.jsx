import React, { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import CardDesign from "../CardDesign";
import SectionLabel from "../ui/SectionLabel";
import products from "../../data/product.json";

const TEXT_SECONDARY = "#9CA3AF";

const FeaturedProducts = memo(() => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
    <div className="flex items-end justify-between mb-6 sm:mb-12">
      <div>
        <SectionLabel>Mahsulotlar</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-white">Eng </span>
          <span className="gradient-text">mashhur</span>
          <span className="text-white"> mahsulotlar</span>
        </h2>
      </div>
      <a
        href="/catalog"
        className="group hidden sm:inline-flex relative items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold overflow-hidden cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgba(18,198,168,0.12), rgba(18,198,168,0.04))",
          border: "1px solid rgba(18,198,168,0.2)",
          color: "#12C6A8",
        }}
      >
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />
        <span className="relative z-10">Barchasini ko'rish</span>
        <ArrowUpRight
          size={14}
          className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45"
        />
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6">
      {products.map((product) => (
        <div key={product.id} className="h-full">
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
        </div>
      ))}
    </div>
  </section>
));

FeaturedProducts.displayName = "FeaturedProducts";
export default FeaturedProducts;

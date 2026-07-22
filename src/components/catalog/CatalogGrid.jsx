import React, { memo } from "react";
import { motion } from "framer-motion";
import CardDesign from "../CardDesign";

const GPU_LAYER = { transform: "translateZ(0)", willChange: "transform" };

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const CatalogGrid = memo(({ products, searchKey }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-white/30 text-sm font-body">
          Mahsulot topilmadi. Boshqa qidiruv yoki kategoriyani sinab ko'ring.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={searchKey}
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item} style={GPU_LAYER} className="h-full">
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
  );
});

CatalogGrid.displayName = "CatalogGrid";
export default CatalogGrid;
import React, { memo } from "react";
import { SearchX } from "lucide-react";
import CardDesign from "../CardDesign";

const ACCENT = "#12C6A8";

const CatalogGrid = memo(({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <SearchX size={28} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.15)" }} />
        </div>
        <div className="text-center">
          <p className="text-white/40 text-sm font-semibold mb-1">Mahsulot topilmadi</p>
          <p className="text-white/20 text-xs">Boshqa qidiruv so'zi yoki kategoriyani sinab ko'ring</p>
        </div>
      </div>
    );
  }

  return (
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
  );
});

CatalogGrid.displayName = "CatalogGrid";
export default CatalogGrid;

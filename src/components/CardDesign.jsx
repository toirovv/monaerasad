import React, { useState, useCallback, useMemo, memo, lazy, Suspense } from "react";
import { Heart, Eye, Star } from "lucide-react";
import { useCartItem, useCartActions } from "../context/CartContext";
import { useIsFavorite, useFavoritesActions } from "../context/FavoritesContext";
import placeholderImg from "../assets/placeholder.png";
import CartStepper from "./card/CartStepper";

const CardModal = lazy(() => import("./card/CardModal"));

const ACCENT = "#12C6A8";
const ACCENT_HOVER = "#0FBFA3";
const BORDER = "#1F2937";

const GLASS_BTN = {
  background: "rgba(10,14,20,0.38)",
  backdropFilter: "blur(12px) saturate(160%)",
  WebkitBackdropFilter: "blur(12px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
};

const BADGE_STYLES = {
  Bestseller: { bg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", text: "#fff" },
  New: { bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)", text: "#fff" },
  Popular: { bg: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_HOVER} 100%)`, text: "#0A0E14" },
};

const GPU_LAYER = { transform: "translateZ(0)", willChange: "transform" };

const StarsSmall = memo(({ rating, size = 9 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        strokeWidth={1.5}
        style={{
          color: i < Math.round(rating) ? "#F59E0B" : "rgba(255,255,255,0.12)",
          fill: i < Math.round(rating) ? "#F59E0B" : "transparent",
        }}
      />
    ))}
  </div>
));

const CardDesign = memo(
  ({
    id,
    name = "Mahsulot",
    description = "Yuqori sifatli mahsulot.",
    price = 0,
    oldPrice = null,
    priceUZS = 0,
    oldPriceUZS = null,
    currency = "$",
    currencyUZS = "so'm",
    image,
    rating = 4.8,
    reviews = 0,
    badge = null,
    carModel,
  }) => {
    const { addItem, updateQty, removeItem } = useCartActions();
    const liked = useIsFavorite(id);
    const { toggleFavorite } = useFavoritesActions();
    const [showDetail, setShowDetail] = useState(false);

    const cartItem = useCartItem(id);
    const inCart = !!cartItem;
    const qty = cartItem?.qty || 0;

    const hasDiscount = oldPrice && oldPrice > price;
    const discount = useMemo(
      () => (hasDiscount ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0),
      [hasDiscount, oldPrice, price]
    );
    const hasDiscountUZS = oldPriceUZS && oldPriceUZS > priceUZS;

    const openDetail = useCallback(() => setShowDetail(true), []);
    const closeDetail = useCallback((e) => {
      e?.stopPropagation();
      setShowDetail(false);
    }, []);

    const handleAdd = useCallback(
      (e) => {
        e.stopPropagation();
        addItem({ id, name, price, priceUZS, currency, currencyUZS, image, carModel });
      },
      [addItem, id, name, price, priceUZS, currency, currencyUZS, image, carModel]
    );
    const handleMinus = useCallback(
      (e) => {
        e.stopPropagation();
        qty <= 1 ? removeItem(id) : updateQty(id, qty - 1);
      },
      [qty, id, removeItem, updateQty]
    );
    const handlePlus = useCallback(
      (e) => {
        e.stopPropagation();
        updateQty(id, qty + 1);
      },
      [id, qty, updateQty]
    );

    const cartProps = { inCart, qty, onMinus: handleMinus, onPlus: handlePlus, onAdd: handleAdd };

    return (
      <>
        <div
          onClick={openDetail}
          className="group card-shell relative w-full h-full rounded-2xl overflow-hidden flex flex-col cursor-pointer"
          style={GPU_LAYER}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-black/15">
            <img
              src={image || placeholderImg}
              alt={name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-1.5 sm:p-2.5 z-10">
              {badge && BADGE_STYLES[badge] ? (
                <span
                  className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: BADGE_STYLES[badge].bg,
                    color: BADGE_STYLES[badge].text,
                    boxShadow: "0 4px 15px -3px rgba(0,0,0,0.4)",
                  }}
                >
                  {badge}
                </span>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDetail();
                  }}
                  title="Batafsil ko'rish"
                  className="card-icon-btn hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full items-center justify-center"
                  style={GLASS_BTN}
                >
                  <Eye size={14} strokeWidth={2} className="text-white/80" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(id);
                  }}
                  className="card-icon-btn w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center"
                  style={
                    liked
                      ? {
                          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_HOVER})`,
                          border: `1px solid ${ACCENT}`,
                          boxShadow: `0 4px 15px -3px ${ACCENT}66`,
                        }
                      : GLASS_BTN
                  }
                >
                  <Heart
                    size={13}
                    strokeWidth={2}
                    className="sm:hidden"
                    style={{ color: liked ? "#0A0E14" : "#fff", fill: liked ? "#0A0E14" : "transparent" }}
                  />
                  <Heart
                    size={14}
                    strokeWidth={2}
                    className="hidden sm:block"
                    style={{ color: liked ? "#0A0E14" : "#fff", fill: liked ? "#0A0E14" : "transparent", transition: "all 0.2s ease" }}
                  />
                </button>
              </div>
            </div>

            {hasDiscount && (
              <span
                className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 z-10 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)", boxShadow: "0 4px 15px -3px rgba(239,68,68,0.5)" }}
              >
                -{discount}%
              </span>
            )}
          </div>

          {/* Content */}
          <div className="relative p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 flex-1">
            {carModel && (
              <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.08em] truncate" style={{ color: "#6B7280" }}>
                {carModel}
              </p>
            )}
            <h3 className="text-[13px] sm:text-[14px] text-white font-semibold leading-tight line-clamp-1">{name}</h3>
            {description && (
              <p className="hidden sm:block text-[12px] leading-relaxed line-clamp-2" style={{ color: "#9CA3AF" }}>
                {description}
              </p>
            )}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <StarsSmall rating={rating} />
              <span className="text-[10px] sm:text-[10px] font-medium" style={{ color: "#9CA3AF" }}>
                {rating}
              </span>
              {reviews > 0 && (
                <span className="hidden sm:inline text-[10px]" style={{ color: "#6B7280" }}>
                  ({reviews})
                </span>
              )}
            </div>
            <div className="flex-1" />

            <div
              className="flex items-end justify-between mt-1 sm:mt-1.5 pt-2 sm:pt-2.5 border-t"
              style={{ borderColor: BORDER }}
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                  {hasDiscount && (
                    <span className="text-[9px] sm:text-[11px] line-through font-medium" style={{ color: "#6B7280" }}>
                      {currency}
                      {oldPrice}
                    </span>
                  )}
                  <span className="text-[15px] sm:text-xl font-bold tracking-tight" style={{ color: ACCENT }}>
                    {currency}
                    {price}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-medium truncate" style={{ color: "#9CA3AF" }}>
                  {priceUZS ? priceUZS.toLocaleString("uz-UZ") : ""} {currencyUZS}
                  {hasDiscountUZS && oldPriceUZS && (
                    <span className="line-through ml-1 sm:ml-1.5" style={{ color: "#6B7280" }}>
                      {oldPriceUZS.toLocaleString("uz-UZ")}
                    </span>
                  )}
                </span>
              </div>
              <CartStepper {...cartProps} size="sm" />
            </div>
          </div>
        </div>

        {showDetail && (
          <Suspense fallback={null}>
            <CardModal
              show={showDetail}
              onClose={closeDetail}
              name={name}
              description={description}
              price={price}
              oldPrice={oldPrice}
              priceUZS={priceUZS}
              oldPriceUZS={oldPriceUZS}
              currency={currency}
              currencyUZS={currencyUZS}
              image={image}
              rating={rating}
              reviews={reviews}
              badge={badge}
              carModel={carModel}
              {...cartProps}
            />
          </Suspense>
        )}
      </>
    );
  }
);

CardDesign.displayName = "CardDesign";
export default CardDesign;
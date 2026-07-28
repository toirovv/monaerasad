import React, { useState, useCallback, useMemo, memo, lazy, Suspense, useRef, useEffect } from "react";
import gsap from "gsap";
import { useCartItem, useCartActions } from "../context/CartContext";
import { useIsFavorite, useFavoritesActions } from "../context/FavoritesContext";
import { HeartIcon, StarIcon } from "./ui/RealIcons";
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

const StarsSmall = memo(({ rating, size = 10 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} filled={i < Math.round(rating)} size={size} />
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
          <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-black/15">
            <img
              src={image || placeholderImg}
              alt={name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-2 sm:p-2.5 z-10">
              {badge && BADGE_STYLES[badge] ? (
                <span
                  className="px-2 py-1 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-wider"
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

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDetail();
                  }}
                  aria-label="Batafsil ko'rish"
                  className="card-icon-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px]"
                  style={GLASS_BTN}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(id);
                  }}
                  className="card-icon-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px]"
                  aria-label="Sevimlilarga qo'shish"
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
                  <HeartIcon filled={liked} />
                </button>
              </div>
            </div>

            {hasDiscount && (
              <span
                className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded-full text-[11px] sm:text-[12px] font-bold text-white"
                style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)", boxShadow: "0 4px 15px -3px rgba(239,68,68,0.5)" }}
              >
                -{discount}%
              </span>
            )}
          </div>

          {/* Content */}
          <div className="relative p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2 flex-1">
            {carModel && (
              <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] truncate" style={{ color: "#6B7280" }}>
                {carModel}
              </p>
            )}
            <h3 className="text-[14px] sm:text-base text-white font-semibold leading-tight line-clamp-1">{name}</h3>
            {description && (
              <p className="text-[12px] sm:text-[13px] leading-relaxed line-clamp-2" style={{ color: "#9CA3AF" }}>
                {description}
              </p>
            )}
            <div className="flex items-center gap-1.5">
              <StarsSmall rating={rating} />
<span className="text-[11px] sm:text-[12px] font-medium" style={{ color: "#9CA3AF" }}>
                  {rating}
                </span>
                {reviews > 0 && (
                  <span className="text-[11px]" style={{ color: "#6B7280" }}>
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
                    <span className="text-[11px] sm:text-[12px] line-through font-medium" style={{ color: "#6B7280" }}>
                      {currency}{oldPrice}
                    </span>
                  )}
                  <span className="text-base sm:text-xl font-bold tracking-tight" style={{ color: ACCENT }}>
                    {currency}{price}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium truncate" style={{ color: "#9CA3AF" }}>
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
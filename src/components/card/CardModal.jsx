import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Stars from "../ui/Stars";
import CartStepper from "./CartStepper";
import placeholderImg from "../../assets/placeholder.png";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";

const GLASS_BTN = {
  background: "rgba(10,14,20,0.38)",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
};

const BADGE_STYLES = {
  Bestseller: { bg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", text: "#fff" },
  New: { bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)", text: "#fff" },
  Popular: { bg: `linear-gradient(135deg, ${ACCENT} 0%, #0FBFA3 100%)`, text: "#0A0E14" },
};

const CardModal = ({
  show, onClose, name, description, price, oldPrice, priceUZS, currency, currencyUZS,
  image, rating, reviews, badge, carModel, inCart, qty, onMinus, onPlus, onAdd,
}) => {
  if (!show) return null;
  const hasDiscount = oldPrice && oldPrice > price;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      style={{ animation: "toastIn 0.2s ease forwards", transform: "translateZ(0)" }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl sm:rounded-3xl my-auto"
        style={{
          background: "#111827",
          border: `1px solid ${BORDER}`,
          boxShadow: "0 40px 90px -20px rgba(0,0,0,0.85)",
          animation: "modalIn 0.25s cubic-bezier(0.22,1,0.36,1) forwards",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 active:scale-90 transition-transform duration-150"
          style={GLASS_BTN}
          aria-label="Yopish"
        >
          <X size={16} className="text-white/80" />
        </button>
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-black/20">
          <img
            src={image || placeholderImg}
            alt={name}
            width="600"
            height="450"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
        <div className="p-5 sm:p-6 min-w-0">
          {badge && BADGE_STYLES[badge] && (
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
              style={{ background: BADGE_STYLES[badge].bg, color: BADGE_STYLES[badge].text }}
            >
              {badge}
            </span>
          )}
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-1 truncate" style={{ color: "#6B7280" }}>
            {carModel}
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2 break-words">{name}</h2>
          {description && (
            <p className="text-sm leading-relaxed mb-4 break-words" style={{ color: "#9CA3AF" }}>
              {description}
            </p>
          )}
          <div className="flex items-center gap-1.5 mb-5">
            <Stars rating={rating} size={13} />
            <span className="text-xs ml-1" style={{ color: "#9CA3AF" }}>
              {rating} ({reviews} sharh)
            </span>
          </div>
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                {hasDiscount && (
                  <span className="text-sm line-through whitespace-nowrap" style={{ color: "#6B7280" }}>
                    {currency}{oldPrice}
                  </span>
                )}
                <span className="text-xl sm:text-2xl font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                  {currency}{price}
                </span>
              </div>
              <span className="text-xs truncate block" style={{ color: "#9CA3AF" }}>
                {priceUZS ? priceUZS.toLocaleString("uz-UZ") : ""} {currencyUZS}
              </span>
            </div>
            <CartStepper inCart={inCart} qty={qty} onMinus={onMinus} onPlus={onPlus} onAdd={onAdd} size="md" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default CardModal;

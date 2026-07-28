import { useEffect, useRef } from "react";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import gsap from "gsap";
import { useCartItems, useCartTotals, useCartActions } from "../context/CartContext";
import CartEmpty from "../components/cart/CartEmpty";
import CartItem from "../components/cart/CartItem";
import CartStepProgress from "../components/cart/CartStepProgress";
import { useNavigate } from "react-router-dom";

const ACCENT = "#12C6A8";

const Backet = () => {
  const items = useCartItems();
  const { totalItems, totalPrice, totalPriceUZS } = useCartTotals();
  const { updateQty, removeItem, clearCart } = useCartActions();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    if (items.length > 0 && pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
    }
  }, [items.length])

  if (items.length === 0) return <CartEmpty />;

  return (
    <div ref={pageRef} className="min-h-screen pt-24 sm:pt-28 pb-36 md:pb-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <CartStepProgress currentStep={1} />

        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(18,198,168,0.15), rgba(18,198,168,0.05))",
                border: "1px solid rgba(18,198,168,0.2)",
              }}
            >
              <ShoppingBag size={18} strokeWidth={2} style={{ color: ACCENT }} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Savatcha</h1>
              <p className="text-[11px] sm:text-xs text-white/35 mt-0.5">{totalItems} ta mahsulot tanlangan</p>
            </div>
          </div>

          <button
            onClick={clearCart}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-medium text-red-400/70 hover:text-red-400 hover:bg-red-400/[0.08] active:scale-95 transition-all duration-200"
            style={{ border: "1px solid rgba(239,68,68,0.12)" }}
          >
            <Trash2 size={13} />
            <span className="hidden sm:inline">Tozalash</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-4 sm:gap-6 items-start">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {items.map((item, i) => (
              <CartItem
                key={item.id}
                item={item}
                index={i}
                onRemove={removeItem}
                onUpdateQty={updateQty}
              />
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            <div
              className="rounded-2xl sm:rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(26,32,44,0.6) 0%, rgba(15,18,28,0.5) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}66, transparent)` }} />

              <div className="p-4 sm:p-6">
                <h3 className="text-sm font-bold text-white mb-4">Buyurtma xulosasi</h3>

                <div className="flex flex-col gap-2.5 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">Mahsulotlar ({totalItems})</span>
                    <span className="text-xs font-semibold text-white/70">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">Yetkazish</span>
                    <span className="text-xs font-semibold" style={{ color: ACCENT }}>Bepul</span>
                  </div>
                  <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Jami</span>
                    <div className="text-right">
                      <p className="text-lg font-extrabold" style={{ color: ACCENT }}>
                        ${totalPrice.toLocaleString()}
                      </p>
                      {totalPriceUZS > 0 && (
                        <p className="text-[10px] text-white/25 mt-0.5">
                          {totalPriceUZS.toLocaleString("uz-UZ")} so'm
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/backet/checkout")}
                  className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-bold text-[#0A0E14] flex items-center justify-center gap-2 group active:scale-[0.97] transition-transform duration-150"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, #0FBFA3)`,
                    boxShadow: `0 8px 30px -6px ${ACCENT}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
                  }}
                >
                  Davom etish
                  <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-4 sm:gap-5 mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  {[
                    { icon: ShieldCheck, label: "Kafolat" },
                    { icon: Truck, label: "Tez yetkazish" },
                    { icon: RotateCcw, label: "Qaytarish" },
                  ].map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.label} className="flex items-center gap-1">
                        <Icon size={11} strokeWidth={2} style={{ color: `${ACCENT}88` }} />
                        <span className="text-[9px] text-white/30 font-medium">{b.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backet;
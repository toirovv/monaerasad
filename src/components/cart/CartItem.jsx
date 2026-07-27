import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

const ACCENT = "#12C6A8";

const CartItem = ({ item, index, onRemove, onUpdateQty }) => (
  <div
    className="group relative rounded-2xl sm:rounded-[20px] overflow-hidden transition-all duration-300"
    style={{
      background: "linear-gradient(160deg, rgba(26,32,44,0.6) 0%, rgba(15,18,28,0.5) 100%)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}
  >
    <div className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
      <div className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/[0.06]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            width="88"
            height="88"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/[0.04]">
            <ShoppingBag size={22} className="text-white/10" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[9px] sm:text-[10px] text-white/25 uppercase tracking-[0.15em] font-medium mb-0.5">
          {item.carModel}
        </p>
        <h3 className="text-[13px] sm:text-sm font-bold text-white truncate leading-tight">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-2 sm:mt-2.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-extrabold" style={{ color: ACCENT }}>
              {item.currency}{item.price}
            </span>
            {item.priceUZS && (
              <span className="text-[9px] text-white/25 hidden sm:inline">
                {item.priceUZS.toLocaleString("uz-UZ")} {item.currencyUZS}
              </span>
            )}
          </div>

          <div className="flex sm:hidden items-center gap-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", padding: "2px" }}>
            <button
              onClick={() => item.qty <= 1 ? onRemove(item.id) : onUpdateQty(item.id, item.qty - 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white/50 active:text-white active:bg-white/10 transition-all"
              aria-label="Kamaytirish"
            >
              <Minus size={10} strokeWidth={2.5} />
            </button>
            <span className="w-5 text-center text-[11px] font-bold text-white">
              {item.qty}
            </span>
            <button
              onClick={() => onUpdateQty(item.id, item.qty + 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white/50 active:text-white active:bg-white/10 transition-all"
              aria-label="Ko'paytirish"
            >
              <Plus size={10} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-end gap-2.5 shrink-0">
        <button
          onClick={() => onRemove(item.id)}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 active:scale-75"
          aria-label="O'chirish"
        >
          <Trash2 size={14} />
        </button>

        <div
          className="flex items-center gap-0.5 rounded-full overflow-hidden"
          style={{
            background: "rgba(18,198,168,0.08)",
            border: "1px solid rgba(18,198,168,0.2)",
            padding: "3px",
          }}
        >
          <button
            onClick={() => item.qty <= 1 ? onRemove(item.id) : onUpdateQty(item.id, item.qty - 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#12C6A8]/70 hover:text-[#12C6A8] hover:bg-[#12C6A8]/10 transition-all active:scale-75"
            aria-label="Kamaytirish"
          >
            <Minus size={13} strokeWidth={2.2} />
          </button>
          <span className="w-7 text-center text-xs font-bold text-white">
            {item.qty}
          </span>
          <button
            onClick={() => onUpdateQty(item.id, item.qty + 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#12C6A8]/70 hover:text-[#12C6A8] hover:bg-[#12C6A8]/10 transition-all active:scale-75"
            aria-label="Ko'paytirish"
          >
            <Plus size={13} strokeWidth={2.2} />
          </button>
        </div>

        <p className="text-[10px] text-white/30 font-medium">
          {item.currency}{(item.price * item.qty).toLocaleString()}
        </p>
      </div>
    </div>
  </div>
);

export default CartItem;

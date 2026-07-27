import { Minus, Plus } from "lucide-react";
import { useAuth } from "../../context/useAuth";
import { useToast } from "../ui/Toast";

const ACCENT = "#12C6A8";

const CartStepper = ({ inCart, qty, onMinus, onPlus, onAdd, size = "sm" }) => {
  const { user } = useAuth();
  const { addToast } = useToast();

  const handleAdd = () => {
    if (!user) {
      addToast(
        "Buyurtma berish uchun tizimga kiring. Profilingiz bo'lmasa, mahsulotni savatchaga qo'sha olmaysiz.",
        "warning",
        4000
      );
      return;
    }
    onAdd();
  };

  const btnSize = size === "sm" ? "w-6 h-6 sm:w-8 sm:h-8" : "w-10 h-10";
  const iconSize = size === "sm" ? 11 : 16;
  const qtyWidth = size === "sm" ? "w-4 sm:w-6" : "w-7";
  const qtyText = size === "sm" ? "text-[10px] sm:text-[12px]" : "text-sm";
  const addSize =
    size === "sm"
      ? "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
      : "w-11 h-11 sm:w-12 sm:h-12";
  const addIconSize = size === "sm" ? 15 : 22;
  const wrapperPad = size === "sm" ? "2px" : "3px";

  return (
    <div className="flex items-center shrink-0">
      {inCart ? (
        <div
          className="flex items-center gap-0.5 rounded-full overflow-hidden shrink-0"
          style={{
            background: "rgba(18,198,168,0.12)",
            border: `1px solid ${ACCENT}4d`,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            padding: wrapperPad,
          }}
        >
          <button
            onClick={onMinus}
            className={`card-stepper-btn ${btnSize} rounded-full flex items-center justify-center cursor-pointer shrink-0`}
            style={{ color: ACCENT }}
            aria-label="Kamaytirish"
          >
            <Minus size={iconSize} strokeWidth={2.2} />
          </button>
          <span
            className={`${qtyWidth} text-center ${qtyText} font-bold text-white shrink-0 transition-transform duration-150`}
          >
            {qty}
          </span>
          <button
            onClick={onPlus}
            className={`card-stepper-btn ${btnSize} rounded-full flex items-center justify-center cursor-pointer shrink-0`}
            style={{ color: ACCENT }}
            aria-label="Ko'paytirish"
          >
            <Plus size={iconSize} strokeWidth={2.2} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAdd}
          className={`card-add-btn ${addSize} rounded-full flex items-center justify-center shrink-0 cursor-pointer`}
          style={{
            background: `linear-gradient(135deg, ${ACCENT} 0%, #0FBFA3 100%)`,
            boxShadow: `0 6px 18px -6px ${ACCENT}99, inset 0 1px 0 rgba(255,255,255,0.35)`,
          }}
          aria-label="Savatchaga qo'shish"
        >
          <Plus
            size={addIconSize}
            strokeWidth={2.4}
            style={{ color: "#0A0E14" }}
          />
        </button>
      )}
    </div>
  );
};

export default CartStepper;

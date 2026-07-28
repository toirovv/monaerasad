import { MinusIcon, PlusIcon } from "../ui/RealIcons";

const ACCENT = "#12C6A8";

const CartStepper = ({ inCart, qty, onMinus, onPlus, onAdd, size = "sm" }) => {

  const isSm = size === "sm";
  const btnSize = isSm ? "w-9 h-9 sm:w-10 sm:h-10" : "w-11 h-11";
  const iconSize = isSm ? 16 : 18;
  const qtyWidth = isSm ? "w-6 sm:w-8" : "w-8";
  const qtyText = isSm ? "text-[13px] sm:text-[14px]" : "text-sm";
  const addSize = isSm
    ? "w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
    : "w-12 h-12";
  const addIconSize = isSm ? 18 : 24;
  const wrapperPad = isSm ? "3px" : "4px";

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
            className={`card-stepper-btn ${btnSize} rounded-full flex items-center justify-center cursor-pointer shrink-0 min-w-[32px] min-h-[32px] sm:min-w-[36px] sm:min-h-[36px]`}
            style={{ color: ACCENT }}
            aria-label="Kamaytirish"
          >
            <MinusIcon size={iconSize} />
          </button>
          <span
            className={`${qtyWidth} text-center ${qtyText} font-bold text-white shrink-0 transition-transform duration-150 select-none`}
          >
            {qty}
          </span>
          <button
            onClick={onPlus}
            className={`card-stepper-btn ${btnSize} rounded-full flex items-center justify-center cursor-pointer shrink-0 min-w-[32px] min-h-[32px] sm:min-w-[36px] sm:min-h-[36px]`}
            style={{ color: ACCENT }}
            aria-label="Ko'paytirish"
          >
            <PlusIcon size={iconSize} />
          </button>
        </div>
      ) : (
        <button
          onClick={onAdd}
          className={`card-add-btn ${addSize} rounded-full flex items-center justify-center shrink-0 cursor-pointer min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]`}
          style={{
            background: "#0A0E14",
            border: `1px solid ${ACCENT}4d`,
            boxShadow: `0 4px 14px -4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`,
          }}
          aria-label="Savatchaga qo'shish"
        >
          <PlusIcon size={addIconSize} style={{ color: ACCENT }} />
        </button>
      )}
    </div>
  );
};

export default CartStepper;
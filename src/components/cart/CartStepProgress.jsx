import { ShoppingBag, CreditCard, CheckCircle2 } from "lucide-react";

const ACCENT = "#12C6A8";

const STEPS = [
  { id: 1, label: "Savatcha", icon: ShoppingBag },
  { id: 2, label: "To'lov", icon: CreditCard },
  { id: 3, label: "Tasdiqlash", icon: CheckCircle2 },
];

const CartStepProgress = ({ currentStep = 1 }) => (
  <div className="w-full max-w-md mx-auto mb-8 sm:mb-12 px-4">
    <div className="relative flex items-center justify-between">
      <div className="absolute top-5 left-[10%] right-[10%] h-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />

      <div
        className="absolute top-5 left-[10%] h-[2px] transition-all duration-600"
        style={{
          background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}cc)`,
          width: currentStep === 1 ? "0%" : currentStep === 2 ? "40%" : "80%",
        }}
      />

      {STEPS.map((step) => {
        const Icon = step.icon;
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400"
              style={{
                transform: isActive ? "scale(1.1)" : "scale(1)",
                background: isCompleted
                  ? `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`
                  : isActive
                    ? `linear-gradient(135deg, ${ACCENT}22, ${ACCENT}08)`
                    : "rgba(255,255,255,0.04)",
                border: `2px solid ${isCompleted || isActive ? ACCENT : "rgba(255,255,255,0.1)"}`,
                boxShadow: isActive
                  ? `0 0 24px -4px ${ACCENT}44, 0 0 0 6px ${ACCENT}11`
                  : isCompleted
                    ? `0 4px 14px -4px ${ACCENT}55`
                    : "none",
              }}
            >
              <Icon
                size={16}
                strokeWidth={2}
                style={{
                  color: isCompleted ? "#0A0E14" : isActive ? ACCENT : "rgba(255,255,255,0.25)",
                }}
              />
            </div>
            <span
              className="text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap"
              style={{
                color: isActive ? ACCENT : isCompleted ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)",
              }}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default CartStepProgress;

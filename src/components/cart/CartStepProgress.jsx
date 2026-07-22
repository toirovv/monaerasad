import { motion } from "framer-motion";
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
      {/* Background line */}
      <div className="absolute top-5 left-[10%] right-[10%] h-[2px]" style={{ background: "rgba(255,255,255,0.08)" }} />

      {/* Active line */}
      <motion.div
        className="absolute top-5 left-[10%] h-[2px]"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}cc)` }}
        initial={{ width: "0%" }}
        animate={{
          width: currentStep === 1 ? "0%" : currentStep === 2 ? "40%" : "80%",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {STEPS.map((step) => {
        const Icon = step.icon;
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
            <motion.div
              animate={{
                scale: isActive ? 1.1 : 1,
                borderColor: isCompleted || isActive ? ACCENT : "rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
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
            </motion.div>

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

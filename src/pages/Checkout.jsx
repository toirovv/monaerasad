import React, { useState } from "react";
import { useCartItems, useCartTotals } from "../context/CartContext";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/Toast";
import CartStepProgress from "../components/cart/CartStepProgress";
import { CreditCard, Truck, ShieldCheck, Lock, ArrowLeft, CheckCircle2, Banknote, Smartphone } from "lucide-react";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";

const DELIVERY_OPTIONS = [
  { id: "standard", label: "Standart yetkazish", desc: "3-5 kun", price: "Bepul", icon: Truck },
  { id: "express", label: "Tez yetkazish", desc: "1-2 kun", price: "$5", icon: Truck },
];

const PAYMENT_OPTIONS = [
  { id: "card", label: "Plastik karta", desc: "Visa, MasterCard, Humo", icon: CreditCard },
  { id: "cash", label: "Naqd pul", desc: "Yetkazishda to'lash", icon: Banknote },
  { id: "click", label: "Click / Payme", desc: "Onlayn to'lov", icon: Smartphone },
];

const Checkout = () => {
  const items = useCartItems();
  const { totalItems, totalPrice, totalPriceUZS } = useCartTotals();
  const { user } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({
    fullName: user?.name || "",
    phone: "",
    address: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.address.trim()) {
      toast.warning("Iltimos, barcha majburiy maydonlarni to'ldiring");
      return;
    }
    setSubmitted(true);
    toast.success("Buyurtma muvaffaqiyatli qabul qilindi!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-28">
        <div
          className="w-full max-w-md rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center gap-5"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30` }}
          >
            <CheckCircle2 size={32} style={{ color: ACCENT }} />
          </div>
          <h2 className="text-xl font-bold text-white">Buyurtma qabul qilindi!</h2>
          <p className="text-sm text-white/50">
            Tez orada siz bilan bog'lanamiz. Buyurtma raqamingiz: <span style={{ color: ACCENT }}>#{Math.floor(1000 + Math.random() * 9000)}</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 px-8 py-3 rounded-xl text-sm font-bold text-[#0A0E14] transition-transform duration-150 active:scale-[0.97]"
            style={{ background: `linear-gradient(135deg, ${ACCENT}, #0FBFA3)`, boxShadow: `0 8px 30px -6px ${ACCENT}55` }}
          >
            Bosh sahifaga
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    navigate("/backet");
    return null;
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-36 md:pb-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <CartStepProgress currentStep={2} />

        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => navigate("/backet")}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 hover:bg-white/[0.06]"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <ArrowLeft size={16} className="text-white/60" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">To'lov</h1>
            <p className="text-[11px] sm:text-xs text-white/35 mt-0.5">Yetkazish va to'lov ma'lumotlari</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-[1fr_340px] gap-4 sm:gap-6 items-start">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Contact info */}
              <div
                className="rounded-2xl p-4 sm:p-6"
                style={{ background: "rgba(26,32,44,0.5)", border: `1px solid ${BORDER}` }}
              >
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Lock size={14} style={{ color: ACCENT }} />
                  Aloqa ma'lumotlari
                </h3>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    placeholder="To'liq ism *"
                    required
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.07)` }}
                    onFocus={(e) => e.target.style.borderColor = `${ACCENT}44`}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="Telefon raqam *"
                    required
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.07)` }}
                    onFocus={(e) => e.target.style.borderColor = `${ACCENT}44`}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
                  />
                  <textarea
                    value={form.address}
                    onChange={handleChange("address")}
                    placeholder="Yetkazish manzili *"
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.07)` }}
                    onFocus={(e) => e.target.style.borderColor = `${ACCENT}44`}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
                  />
                  <textarea
                    value={form.note}
                    onChange={handleChange("note")}
                    placeholder="Qo'shimcha izoh (ixtiyoriy)"
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.07)` }}
                    onFocus={(e) => e.target.style.borderColor = `${ACCENT}44`}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
                  />
                </div>
              </div>

              {/* Delivery */}
              <div
                className="rounded-2xl p-4 sm:p-6"
                style={{ background: "rgba(26,32,44,0.5)", border: `1px solid ${BORDER}` }}
              >
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Truck size={14} style={{ color: ACCENT }} />
                  Yetkazish usuli
                </h3>
                <div className="flex flex-col gap-2">
                  {DELIVERY_OPTIONS.map((opt) => {
                    const active = delivery === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDelivery(opt.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
                        style={{
                          background: active ? `${ACCENT}10` : "rgba(255,255,255,0.03)",
                          border: `1px solid ${active ? `${ACCENT}44` : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        <Icon size={18} style={{ color: active ? ACCENT : "rgba(255,255,255,0.3)" }} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{opt.label}</p>
                          <p className="text-[11px] text-white/40">{opt.desc}</p>
                        </div>
                        <span className="text-xs font-semibold" style={{ color: active ? ACCENT : "rgba(255,255,255,0.4)" }}>
                          {opt.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment */}
              <div
                className="rounded-2xl p-4 sm:p-6"
                style={{ background: "rgba(26,32,44,0.5)", border: `1px solid ${BORDER}` }}
              >
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <CreditCard size={14} style={{ color: ACCENT }} />
                  To'lov usuli
                </h3>
                <div className="flex flex-col gap-2">
                  {PAYMENT_OPTIONS.map((opt) => {
                    const active = payment === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPayment(opt.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
                        style={{
                          background: active ? `${ACCENT}10` : "rgba(255,255,255,0.03)",
                          border: `1px solid ${active ? `${ACCENT}44` : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        <Icon size={18} style={{ color: active ? ACCENT : "rgba(255,255,255,0.3)" }} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{opt.label}</p>
                          <p className="text-[11px] text-white/40">{opt.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:sticky lg:top-28">
              <div
                className="rounded-2xl sm:rounded-[20px] overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, rgba(26,32,44,0.6) 0%, rgba(15,18,28,0.5) 100%)",
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}66, transparent)` }} />

                <div className="p-4 sm:p-6">
                  <h3 className="text-sm font-bold text-white mb-4">Buyurtma xulosasi</h3>

                  <div className="flex flex-col gap-2 mb-4 max-h-48 overflow-y-auto no-scrollbar">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 py-2">
                        <div
                          className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white font-medium truncate">{item.name}</p>
                          <p className="text-[10px] text-white/30">x{item.qty}</p>
                        </div>
                        <span className="text-xs font-semibold text-white/70">${(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Mahsulotlar ({totalItems})</span>
                      <span className="text-xs font-semibold text-white/70">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Yetkazish</span>
                      <span className="text-xs font-semibold" style={{ color: ACCENT }}>
                        {delivery === "express" ? "$5" : "Bepul"}
                      </span>
                    </div>
                    <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">Jami</span>
                      <div className="text-right">
                        <p className="text-lg font-extrabold" style={{ color: ACCENT }}>
                          ${(totalPrice + (delivery === "express" ? 5 : 0)).toLocaleString()}
                        </p>
                        {totalPriceUZS > 0 && (
                          <p className="text-[10px] text-white/25 mt-0.5">
                            {(totalPriceUZS + (delivery === "express" ? 42000 : 0)).toLocaleString("uz-UZ")} so'm
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm font-bold text-[#0A0E14] flex items-center justify-center gap-2 mt-4 group active:scale-[0.97] transition-transform duration-150"
                    style={{
                      background: `linear-gradient(135deg, ${ACCENT}, #0FBFA3)`,
                      boxShadow: `0 8px 30px -6px ${ACCENT}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
                    }}
                  >
                    <Lock size={14} strokeWidth={2.5} />
                    Buyurtma berish
                  </button>

                  <div className="flex items-center justify-center gap-4 sm:gap-5 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-1">
                      <ShieldCheck size={11} strokeWidth={2} style={{ color: `${ACCENT}88` }} />
                      <span className="text-[9px] text-white/30 font-medium">Kafolat</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock size={11} strokeWidth={2} style={{ color: `${ACCENT}88` }} />
                      <span className="text-[9px] text-white/30 font-medium">Xavfsiz to'lov</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

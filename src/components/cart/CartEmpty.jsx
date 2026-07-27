import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const ACCENT = "#12C6A8";

const CartEmpty = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-28">
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <ShoppingBag size={32} strokeWidth={1.2} className="text-white/20" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-2">Savatcha bo'sh</h2>
        <p className="text-sm text-white/40">Hali hech narsa qo'shilmagan</p>
      </div>
      <Link to="/catalog"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white active:scale-95 transition-transform duration-150"
        style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 25px -5px ${ACCENT}66` }}>
        <ArrowLeft size={16} /> Katalogga o'tish
      </Link>
    </div>
  </div>
);

export default CartEmpty;

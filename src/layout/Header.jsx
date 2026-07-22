import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  LayoutGrid,
  PhoneCall,
  ShoppingBag,
  UserRound,
  Heart,
  Search,
} from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useCartTotals } from "../context/CartContext";
import { useFavoritesCount } from "../context/FavoritesContext";
import moLogo from "../assets/mo.png";

const ACCENT = "#12C6A8";
const FONT_BRAND = "'Orbitron', sans-serif";
const FONT_UI = "'Inter', sans-serif";

const NAV_LINKS = [
  { label: "Bosh sahifa", href: "/", icon: Home },
  { label: "Biz haqimizda", href: "/about", icon: Info },
  { label: "Katalog", href: "/catalog", icon: LayoutGrid },
  { label: "Bog'lanish", href: "/contact", icon: PhoneCall },
];

const BOTTOM_NAV = [
  { label: "Sahifa", href: "/", icon: Home },
  { label: "Katalog", href: "/catalog", icon: LayoutGrid },
  { label: "Savatcha", href: "/backet", icon: ShoppingBag, countKey: "cart" },
  { label: "Sevimli", href: "/favorites", icon: Heart, countKey: "favorites" },
  { label: "Aloqa", href: "/contact", icon: PhoneCall },
];

const Badge = ({ count }) => {
  if (count <= 0) return null;
  return (
    <span
      className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-bold text-white px-1 leading-none"
      style={{
        background: "#E11D48",
        boxShadow: "0 2px 8px rgba(225,29,72,0.5)",
      }}
    >
      {count}
    </span>
  );
};

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { totalItems } = useCartTotals();
  const { count: favoritesCount } = useFavoritesCount();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <>
      {/* ========== MOBILE TOP HEADER ========== */}
      <header
        className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 py-3.5 border-b"
        style={{
          fontFamily: FONT_UI,
          background: "rgba(10,12,18,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.06)",
          boxShadow: "0 4px 20px -4px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={moLogo}
            alt="MONAER"
            className="w-8 h-8 rounded-lg object-contain"
          />
          <span
            className="text-[15px] font-black select-none"
            style={{ fontFamily: FONT_BRAND, letterSpacing: "0.06em" }}
          >
            <span className="text-white">M</span>
            <span style={{ color: ACCENT }}>O</span>
            <span className="text-white">NAER</span>
          </span>
        </Link>

        {/* Right icons (Kengaytirildi va qulaylashtirildi) */}
        <div className="flex items-center gap-2">
          <Link
            to="/favorites"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-all"
            style={{
              background:
                location.pathname === "/favorites"
                  ? "rgba(18,198,168,0.12)"
                  : "rgba(255,255,255,0.03)",
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.6)",
            }}
          >
            <Heart
              size={20}
              strokeWidth={1.9}
              fill={location.pathname === "/favorites" ? ACCENT : "none"}
            />
            <Badge count={favoritesCount} />
          </Link>
          <Link
            to="/backet"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-all"
            style={{
              background:
                location.pathname === "/backet"
                  ? "rgba(18,198,168,0.12)"
                  : "rgba(255,255,255,0.03)",
              color:
                location.pathname === "/backet"
                  ? ACCENT
                  : "rgba(255,255,255,0.6)",
            }}
          >
            <ShoppingBag size={20} strokeWidth={1.9} />
            <Badge count={totalItems} />
          </Link>
        </div>
      </header>

      {/* ========== DESKTOP HEADER ========== */}
      <header
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center justify-between rounded-3xl px-6 py-3 w-[calc(100%-3rem)] max-w-5xl border"
        style={{
          fontFamily: FONT_UI,
          background: "rgba(14,16,24,0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 20px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(18,198,168,0.12)"
            : "0 12px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={moLogo}
            alt="MONAER"
            className="w-8 h-8 rounded-lg object-contain"
          />
          <span
            className="text-[16px] font-black select-none"
            style={{ fontFamily: FONT_BRAND, letterSpacing: "0.08em" }}
          >
            <span className="text-white">M</span>
            <span style={{ color: ACCENT }}>O</span>
            <span className="text-white">NAER</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200"
                  style={{
                    color: active ? ACCENT : "rgba(255,255,255,0.5)",
                    background: active
                      ? "rgba(18,198,168,0.12)"
                      : "transparent",
                  }}
                >
                  <link.icon size={16} strokeWidth={active ? 2.2 : 1.8} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/favorites"
            className="relative w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <Heart
              size={17}
              strokeWidth={1.9}
              fill={location.pathname === "/favorites" ? ACCENT : "none"}
            />
            <Badge count={favoritesCount} />
          </Link>
          <Link
            to="/backet"
            className="relative w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{
              color:
                location.pathname === "/backet"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <ShoppingBag size={17} strokeWidth={1.9} />
            <Badge count={totalItems} />
          </Link>
          <div className="w-px h-5 bg-white/10" />
          {user ? (
            <button
              onClick={logout}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/45 hover:text-white transition-colors"
            >
              <UserRound size={17} strokeWidth={1.9} />
            </button>
          ) : (
            <Link
              to="/login"
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/45 hover:text-white transition-colors"
            >
              <UserRound size={17} strokeWidth={1.9} />
            </Link>
          )}
        </div>
      </header>

      {/* ========== MOBILE BOTTOM NAV ========== */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
        <div
          className="mx-3 mb-3 rounded-2xl border transition-all"
          style={{
            fontFamily: FONT_UI,
            background: "rgba(12,15,22,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderColor: "rgba(255,255,255,0.08)",
            boxShadow:
              "0 -10px 30px -5px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <div className="flex items-stretch justify-around py-1">
            {BOTTOM_NAV.map((item) => {
              const active = isActive(item.href);
              const count =
                item.countKey === "cart"
                  ? totalItems
                  : item.countKey === "favorites"
                    ? favoritesCount
                    : 0;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex-1 flex flex-col items-center justify-center py-2 relative group active:scale-95 transition-transform duration-150"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    touchAction: "manipulation",
                  }}
                >
                  {/* Active holat uchun chiroyli fon va tepasidagi chiziqcha */}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-x-2 inset-y-1 rounded-xl -z-10"
                      style={{ background: "rgba(18,198,168,0.12)" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {active && (
                    <div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 2px 10px ${ACCENT}`,
                      }}
                    />
                  )}

                  <div className="relative mb-0.5">
                    <Icon
                      size={20}
                      strokeWidth={active ? 2.5 : 1.8}
                      fill={active && item.icon === Heart ? ACCENT : "none"}
                      style={{
                        color: active ? ACCENT : "rgba(255,255,255,0.4)",
                      }}
                    />
                    <Badge count={count} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-tight leading-none"
                    style={{ color: active ? ACCENT : "rgba(255,255,255,0.4)" }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

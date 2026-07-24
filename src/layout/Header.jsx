import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  LayoutGrid,
  PhoneCall,
  ShoppingBag,
  UserRound,
  Heart,
} from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useCartTotals } from "../context/CartContext";
import { useFavoritesCount } from "../context/FavoritesContext";

const ACCENT = "#12C6A8";
const FONT_BRAND = "'Orbitron', sans-serif";
const FONT_UI = "'Inter', sans-serif";

const NAV_LINKS = [
  { label: "Bosh sahifa", href: "/", icon: Home },
  { label: "Biz haqimizda", href: "/about", icon: Info },
  { label: "Katalog", href: "/catalog", icon: LayoutGrid },
  { label: "Bog'lanish", href: "/contact", icon: PhoneCall },
];

// Savatcha doim o'rtada (3-o'rinda) turishi uchun tartib shunday
const BOTTOM_NAV = [
  { label: "Sahifa", href: "/", icon: Home },
  { label: "Katalog", href: "/catalog", icon: LayoutGrid },
  {
    label: "Savatcha",
    href: "/backet",
    icon: ShoppingBag,
    countKey: "cart",
    isCenter: true,
  },
  { label: "Sevimli", href: "/favorites", icon: Heart, countKey: "favorites" },
  { label: "Aloqa", href: "/contact", icon: PhoneCall },
];

const springSoft = { type: "spring", stiffness: 380, damping: 30 };
const springSnap = { type: "spring", stiffness: 500, damping: 25 };

const Badge = ({ count }) => (
  <AnimatePresence>
    {count > 0 && (
      <motion.span
        key="badge"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={springSnap}
        className="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] flex items-center justify-center rounded-full text-[10px] font-bold text-white px-1 leading-none"
        style={{
          background: "linear-gradient(135deg, #FB4570, #E11D48)",
          boxShadow: "0 2px 10px rgba(225,29,72,0.55)",
        }}
      >
        {count > 9 ? "9+" : count}
      </motion.span>
    )}
  </AnimatePresence>
);

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
      <motion.header
        animate={{
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        transition={springSoft}
        className="md:hidden fixed top-2 left-3 right-3 z-50 flex items-center justify-between px-4 rounded-2xl border"
        style={{
          fontFamily: FONT_UI,
          background: "rgba(9,11,17,0.85)",
          backdropFilter: "blur(22px) saturate(160%)",
          WebkitBackdropFilter: "blur(22px) saturate(160%)",
          borderColor: scrolled
            ? "rgba(18,198,168,0.14)"
            : "rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 12px 40px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(18,198,168,0.1)"
            : "0 8px 30px -6px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-60 transition-opacity duration-300"
              style={{ background: ACCENT, filter: "blur(10px)" }}
            />
          </div>
          <span
            className="text-[15px] font-black select-none"
            style={{ fontFamily: FONT_BRAND, letterSpacing: "0.06em" }}
          >
            <span className="text-white">M</span>
            <span style={{ color: ACCENT }}>O</span>
            <span className="text-white">NAER</span>
          </span>
        </Link>

        {/* Right icons: Sevimli va Profil, orasida chiziqcha */}
        <div className="flex items-center gap-1">
          <Link
            to="/favorites"
            className="relative w-9 h-9 flex items-center justify-center rounded-xl"
            style={{
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.55)",
            }}
          >
            <motion.div whileTap={{ scale: 0.82 }} transition={springSnap}>
              <Heart
                size={20}
                strokeWidth={1.9}
                fill={location.pathname === "/favorites" ? ACCENT : "none"}
              />
            </motion.div>
            <Badge count={favoritesCount} />
          </Link>

          <div className="w-[1px] h-4 bg-white/15 mx-1" />

          {user ? (
            <motion.button
              whileTap={{ scale: 0.82 }}
              transition={springSnap}
              onClick={logout}
              className="relative w-9 h-9 flex items-center justify-center rounded-xl text-white/55 active:text-white"
            >
              <UserRound size={20} strokeWidth={1.9} />
            </motion.button>
          ) : (
            <Link
              to="/login"
              className="relative w-9 h-9 flex items-center justify-center rounded-xl"
              style={{
                color:
                  location.pathname === "/login"
                    ? ACCENT
                    : "rgba(255,255,255,0.55)",
              }}
            >
              <motion.div whileTap={{ scale: 0.82 }} transition={springSnap}>
                <UserRound size={20} strokeWidth={1.9} />
              </motion.div>
            </Link>
          )}
        </div>
      </motion.header>

      {/* ========== DESKTOP HEADER ========== */}
      <motion.header
        animate={{
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        transition={springSoft}
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center justify-between rounded-3xl px-6 w-[calc(100%-3rem)] max-w-5xl border"
        style={{
          fontFamily: FONT_UI,
          background: "rgba(13,15,22,0.78)",
          backdropFilter: "blur(26px) saturate(160%)",
          WebkitBackdropFilter: "blur(26px) saturate(160%)",
          borderColor: scrolled
            ? "rgba(18,198,168,0.18)"
            : "rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 24px 50px -14px rgba(0,0,0,0.75), 0 0 0 1px rgba(18,198,168,0.1)"
            : "0 12px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              style={{ background: ACCENT, filter: "blur(12px)" }}
            />
          </div>
          <span
            className="text-[16px] font-black select-none"
            style={{ fontFamily: FONT_BRAND, letterSpacing: "0.08em" }}
          >
            <span className="text-white">M</span>
            <span style={{ color: ACCENT }}>O</span>
            <span className="text-white">NAER</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 relative">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  to={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold relative z-10 transition-colors duration-200"
                  style={{
                    color: active ? "#0A0C12" : "rgba(255,255,255,0.55)",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="desktop-nav-pill"
                      transition={springSoft}
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 4px 18px ${ACCENT}55`,
                      }}
                    />
                  )}
                  <link.icon size={16} strokeWidth={active ? 2.3 : 1.8} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            to="/favorites"
            className="relative w-9 h-9 flex items-center justify-center rounded-full"
            style={{
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.88 }}
              transition={springSnap}
            >
              <Heart
                size={17}
                strokeWidth={1.9}
                fill={location.pathname === "/favorites" ? ACCENT : "none"}
              />
            </motion.div>
            <Badge count={favoritesCount} />
          </Link>
          <Link
            to="/backet"
            className="relative w-9 h-9 flex items-center justify-center rounded-full"
            style={{
              color:
                location.pathname === "/backet"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.88 }}
              transition={springSnap}
            >
              <ShoppingBag size={17} strokeWidth={1.9} />
            </motion.div>
            <Badge count={totalItems} />
          </Link>
          <div className="w-px h-5 bg-white/10 mx-0.5" />
          {user ? (
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.88 }}
              transition={springSnap}
              onClick={logout}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/45 hover:text-white"
            >
              <UserRound size={17} strokeWidth={1.9} />
            </motion.button>
          ) : (
            <Link
              to="/login"
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/45 hover:text-white transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.88 }}
                transition={springSnap}
              >
                <UserRound size={17} strokeWidth={1.9} />
              </motion.div>
            </Link>
          )}
        </div>
      </motion.header>

      {/* ========== MOBILE BOTTOM NAV ========== */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
        <div
          className="mx-3 mb-3 rounded-[26px] border"
          style={{
            fontFamily: FONT_UI,
            background: "rgba(11,13,20,0.97)",
            backdropFilter: "blur(26px) saturate(160%)",
            WebkitBackdropFilter: "blur(26px) saturate(160%)",
            borderColor: "rgba(255,255,255,0.08)",
            boxShadow:
              "0 -12px 34px -6px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Barcha itemlar bitta balandlikda (h-16), shu tufayli label'lar bir chiziqda turadi.
             Markazdagi tugma faqat ikonka darajasida translate-y bilan ko'tariladi. */}
          <div className="flex items-stretch justify-around px-1.5">
            {BOTTOM_NAV.map((item) => {
              const active = isActive(item.href);
              const count =
                item.countKey === "cart"
                  ? totalItems
                  : item.countKey === "favorites"
                    ? favoritesCount
                    : 0;
              const Icon = item.icon;

              if (item.isCenter) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex-1 flex flex-col items-center justify-center gap-1 h-16 relative"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                    }}
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      transition={springSnap}
                      className="relative w-14 h-14 rounded-full flex items-center justify-center -translate-y-6"
                      style={{
                        background: active
                          ? ACCENT
                          : "linear-gradient(145deg, #181B22, #0D0F14)",
                        border: `1.5px solid ${ACCENT}`,
                        boxShadow: "0 6px 16px -4px rgba(0,0,0,0.6)",
                      }}
                    >
                      {/* Nafas oluvchi porlash halqasi */}
                      <motion.span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ background: ACCENT }}
                        animate={{
                          opacity: [0.35, 0, 0.35],
                          scale: [1, 1.45, 1],
                        }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative">
                        <Icon
                          size={23}
                          strokeWidth={2.2}
                          style={{ color: active ? "#0A0C12" : ACCENT }}
                        />
                        <Badge count={count} />
                      </div>
                    </motion.div>
                    <span
                      className="text-[10px] font-semibold tracking-tight -mt-4"
                      style={{
                        color: active ? ACCENT : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex-1 flex flex-col items-center justify-center gap-1 h-16"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    touchAction: "manipulation",
                  }}
                >
                  <motion.div
                    whileTap={{ scale: 0.86 }}
                    transition={springSnap}
                    className="relative"
                  >
                    <Icon
                      size={20}
                      strokeWidth={active ? 2.3 : 1.7}
                      fill={active && item.icon === Heart ? ACCENT : "none"}
                      style={{
                        color: active ? ACCENT : "rgba(255,255,255,0.4)",
                      }}
                    />
                    <Badge count={count} />
                  </motion.div>
                  <span
                    className="text-[10px] font-medium tracking-tight leading-none"
                    style={{ color: active ? ACCENT : "rgba(255,255,255,0.4)" }}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="mobile-nav-dot"
                      transition={springSoft}
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 0 6px ${ACCENT}`,
                      }}
                    />
                  )}
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

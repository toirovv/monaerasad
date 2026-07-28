import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
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
  { label: "Biz haqimizda", href: "/about", icon: Info },
  { label: "Aloqa", href: "/contact", icon: PhoneCall },
];

const Badge = ({ count }) => {
  if (count <= 0) return null;
  return (
    <span
      className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-bold text-white px-1 leading-none"
      style={{
        background: "linear-gradient(135deg, #FB4570, #E11D48)",
        boxShadow: "0 2px 10px rgba(225,29,72,0.55)",
      }}
    >
      {count > 9 ? "9+" : count}
    </span>
  );
};

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { totalItems } = useCartTotals();
  const { count: favoritesCount } = useFavoritesCount();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' });
      const items = navRef.current.querySelectorAll('.nav-item');
      gsap.fromTo(items, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, stagger: 0.04, ease: 'power2.out' });
    }
  }, [location.pathname]);

  const isActive = (href) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <>
      {/* ========== MOBILE TOP HEADER ========== */}
      <header
        className="md:hidden fixed top-2 left-3 right-3 z-50 flex items-center justify-between px-4 rounded-2xl border"
        style={{
          fontFamily: FONT_UI,
          padding: scrolled ? "12px 16px" : "14px 16px",
          transition: "padding 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s",
          background: "rgba(9,11,17,0.85)",
          backdropFilter: "blur(16px) saturate(140%)",
          WebkitBackdropFilter: "blur(16px) saturate(140%)",
          borderColor: scrolled
            ? "rgba(18,198,168,0.14)"
            : "rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 12px 40px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(18,198,168,0.1)"
            : "0 8px 30px -6px rgba(0,0,0,0.5)",
        }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Bosh sahifa">
          <span
            className="text-[16px] font-black select-none"
            style={{ fontFamily: FONT_BRAND, letterSpacing: "0.06em" }}
          >
            <span className="text-white">M</span>
            <span style={{ color: ACCENT }}>O</span>
            <span className="text-white">NAER</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/favorites"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl active:scale-90 transition-transform duration-150"
            aria-label="Sevimlilar"
            style={{
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.55)",
            }}
          >
            <Heart
              size={21}
              strokeWidth={1.9}
              fill={location.pathname === "/favorites" ? ACCENT : "none"}
            />
            <Badge count={favoritesCount} />
          </Link>

          <div className="w-[1px] h-4 bg-white/15 mx-1" />

          {user ? (
            <button
              onClick={logout}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl text-white/55 active:text-white active:scale-90 transition-all duration-150"
              aria-label="Chiqish"
            >
              <UserRound size={21} strokeWidth={1.9} />
            </button>
          ) : (
            <Link
              to="/login"
              className="relative w-10 h-10 flex items-center justify-center rounded-xl active:scale-90 transition-transform duration-150"
              aria-label="Kirish"
              style={{
                color:
                  location.pathname === "/login"
                    ? ACCENT
                    : "rgba(255,255,255,0.55)",
              }}
            >
              <UserRound size={21} strokeWidth={1.9} />
            </Link>
          )}
        </div>
      </header>

      {/* ========== DESKTOP HEADER ========== */}
      <header
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center justify-between rounded-3xl px-6 w-[calc(100%-3rem)] max-w-5xl border"
        style={{
          fontFamily: FONT_UI,
          padding: scrolled ? "10px 24px" : "14px 24px",
          transition: "padding 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s",
          background: "rgba(13,15,22,0.78)",
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
          borderColor: scrolled
            ? "rgba(18,198,168,0.18)"
            : "rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 24px 50px -14px rgba(0,0,0,0.75), 0 0 0 1px rgba(18,198,168,0.1)"
            : "0 12px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Bosh sahifa">
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
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold relative z-10 transition-colors duration-200"
                  style={{
                    color: active ? "#0A0C12" : "rgba(255,255,255,0.55)",
                    background: active ? ACCENT : "transparent",
                    boxShadow: active ? `0 4px 18px ${ACCENT}55` : "none",
                  }}
                >
                  <Icon size={16} strokeWidth={active ? 2.3 : 1.8} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            to="/favorites"
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-90 transition-transform duration-150"
            aria-label="Sevimlilar"
            style={{
              color:
                location.pathname === "/favorites"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <Heart
              size={18}
              strokeWidth={1.9}
              fill={location.pathname === "/favorites" ? ACCENT : "none"}
            />
            <Badge count={favoritesCount} />
          </Link>
          <Link
            to="/backet"
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 active:scale-90 transition-transform duration-150"
            aria-label="Savatcha"
            style={{
              color:
                location.pathname === "/backet"
                  ? ACCENT
                  : "rgba(255,255,255,0.45)",
            }}
          >
            <ShoppingBag size={18} strokeWidth={1.9} />
            <Badge count={totalItems} />
          </Link>
          <div className="w-px h-5 bg-white/10 mx-0.5" />
          {user ? (
            <button
              onClick={logout}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white/45 hover:text-white hover:scale-110 active:scale-90 transition-all duration-150"
              aria-label="Chiqish"
            >
              <UserRound size={18} strokeWidth={1.9} />
            </button>
          ) : (
            <Link
              to="/login"
              className="w-10 h-10 flex items-center justify-center rounded-full text-white/45 hover:text-white hover:scale-110 active:scale-90 transition-all duration-150"
              aria-label="Kirish"
            >
              <UserRound size={18} strokeWidth={1.9} />
            </Link>
          )}
        </div>
      </header>

      {/* ========== MOBILE BOTTOM NAV ========== */}
      <nav ref={navRef} className="md:hidden fixed bottom-0 inset-x-0 z-50" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <div
          className="mx-2 sm:mx-3 mb-2 sm:mb-3 rounded-[26px] border"
          style={{
            fontFamily: FONT_UI,
            background: "rgba(11,13,20,0.97)",
            borderColor: "rgba(255,255,255,0.08)",
            boxShadow:
              "0 -12px 34px -6px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <div className="flex items-stretch justify-around px-1.5">
            {BOTTOM_NAV.map((item) => {
              const active = isActive(item.href);
              const count =
                item.countKey === "cart"
                  ? totalItems
                  : 0;
              const Icon = item.icon;

              if (item.isCenter) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="nav-item flex-1 flex items-center justify-center h-[72px] relative"
                    aria-label={item.label}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                    }}
                  >
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center -translate-y-2 active:scale-[0.88] transition-transform duration-100"
                      style={{
                        background: active
                          ? ACCENT
                          : "linear-gradient(145deg, #181B22, #0D0F14)",
                        border: `2px solid ${ACCENT}`,
                        boxShadow: active
                          ? `0 0 20px -4px ${ACCENT}55, 0 6px 16px -4px rgba(0,0,0,0.6)`
                          : "0 6px 16px -4px rgba(0,0,0,0.6)",
                      }}
                    >
                      <div className="relative">
                        <Icon
                          size={26}
                          strokeWidth={2.2}
                          style={{ color: active ? "#0A0C12" : ACCENT }}
                        />
                        <Badge count={count} />
                      </div>
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                    className="nav-item flex-1 flex items-center justify-center h-[72px]"
                  aria-label={item.label}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    touchAction: "manipulation",
                  }}
                >
                  <div className="relative active:scale-[0.82] transition-transform duration-100">
                    <Icon
                      size={26}
                      strokeWidth={active ? 2.4 : 1.8}
                      style={{
                        color: active ? ACCENT : "rgba(255,255,255,0.4)",
                      }}
                    />
                    <Badge count={count} />
                  </div>
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
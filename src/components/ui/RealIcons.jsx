const ACCENT = "#12C6A8"

const HeartIcon = ({ filled, className }) => (
  <span className={className} role="img" aria-label="yurak">
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#FB4570" : "none"} stroke={filled ? "#FB4570" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: filled ? "drop-shadow(0 0 6px rgba(251,69,112,0.5))" : "none" }}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  </span>
)

const CartIcon = ({ className }) => (
  <span className={className} role="img" aria-label="savatcha">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  </span>
)

const HomeIcon = ({ className }) => (
  <span className={className} role="img" aria-label="bosh sahifa">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </span>
)

const CatalogIcon = ({ className }) => (
  <span className={className} role="img" aria-label="katalog">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  </span>
)

const InfoIcon = ({ className }) => (
  <span className={className} role="img" aria-label="ma'lumot">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  </span>
)

const PhoneIcon = ({ className }) => (
  <span className={className} role="img" aria-label="telefon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  </span>
)

const UserIcon = ({ className }) => (
  <span className={className} role="img" aria-label="foydalanuvchi">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </span>
)

const StarIcon = ({ filled, size = 10 }) => (
  <span role="img" aria-label="yulduz">
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "transparent"} stroke={filled ? "#F59E0B" : "rgba(255,255,255,0.12)"} strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  </span>
)

const TrashIcon = ({ className }) => (
  <span className={className} role="img" aria-label="o'chirish">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  </span>
)

const PlusIcon = ({ size = 16, className }) => (
  <span className={className} role="img" aria-label="qo'shish">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </span>
)

const MinusIcon = ({ size = 16, className }) => (
  <span className={className} role="img" aria-label="kamaytirish">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </span>
)

const CreditCardIcon = ({ size = 18, className }) => (
  <span className={className} role="img" aria-label="karta">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  </span>
)

const CheckIcon = ({ size = 24, className }) => (
  <span className={className} role="img" aria-label="tasdiqlash">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  </span>
)

export { HeartIcon, CartIcon, HomeIcon, CatalogIcon, InfoIcon, PhoneIcon, UserIcon, StarIcon, TrashIcon, PlusIcon, MinusIcon, CreditCardIcon, CheckIcon }
export default { HeartIcon, CartIcon, HomeIcon, CatalogIcon, InfoIcon, PhoneIcon, UserIcon, StarIcon, TrashIcon, PlusIcon, MinusIcon, CreditCardIcon, CheckIcon }
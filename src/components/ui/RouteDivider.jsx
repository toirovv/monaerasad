const ACCENT = "#12C6A8";
const BORDER = "#1F2937";

const RouteDivider = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8" aria-hidden="true">
    <svg viewBox="0 0 1200 24" className="w-full h-6" preserveAspectRatio="none">
      <line x1="0" y1="12" x2="1200" y2="12" stroke={BORDER} strokeWidth="1" />
      <line x1="0" y1="12" x2="1200" y2="12" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="2" strokeDasharray="18 22" />
      <circle cx="600" cy="12" r="3.5" fill={ACCENT} />
    </svg>
  </div>
);

export default RouteDivider;

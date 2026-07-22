const ACCENT = "#12C6A8";
const TEXT_MUTED = "#6B7280";

const SectionLabel = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 font-body" style={{ color: TEXT_MUTED }}>
    <span className="w-6 h-px" style={{ backgroundColor: ACCENT }} />
    {children}
  </p>
);

export default SectionLabel;

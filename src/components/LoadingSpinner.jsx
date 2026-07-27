const ACCENT = "#12C6A8";

const LoadingSpinner = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-5">
    <div className="relative w-12 h-12" style={{ animation: "spin 1.2s linear infinite" }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "2.5px solid rgba(255,255,255,0.06)", borderTopColor: ACCENT }}
      />
      <div
        className="absolute inset-1 rounded-full"
        style={{ border: "2px solid rgba(255,255,255,0.04)", borderBottomColor: `${ACCENT}88` }}
      />
    </div>
    <p className="text-xs text-white/30 tracking-widest uppercase" style={{ animation: "toastIn 0.3s ease 0.3s both" }}>
      Yuklanmoqda...
    </p>
  </div>
);

export default LoadingSpinner;

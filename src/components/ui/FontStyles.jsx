const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Orbitron:wght@700;800;900&display=swap');
    .font-display { font-family: 'Outfit', ui-sans-serif, system-ui, sans-serif; }
    .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
    .gradient-text {
      background: linear-gradient(90deg, #0EA5A0 0%, #14D9B4 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .ring-pulse { animation: ringPulse 2.4s cubic-bezier(0.4,0,0.6,1) infinite; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

export default FontStyles;

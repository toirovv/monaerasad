const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      className="absolute -top-32 right-[-10%] w-[42rem] h-[42rem] rounded-full blur-[130px]"
      style={{ background: "radial-gradient(circle, rgba(18,198,168,0.08) 0%, transparent 65%)" }}
    />
    <div
      className="absolute bottom-[-15%] left-[-10%] w-[36rem] h-[36rem] rounded-full blur-[120px]"
      style={{ background: "radial-gradient(circle, rgba(15,23,42,0.55) 0%, transparent 60%)" }}
    />
  </div>
);

export default AmbientBackground;

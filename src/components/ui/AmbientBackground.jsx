const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      className="absolute -top-32 right-[-10%] w-[28rem] h-[28rem] rounded-full blur-[80px] max-sm:w-[18rem] max-sm:h-[18rem] max-sm:blur-[50px]"
      style={{ background: "radial-gradient(circle, rgba(18,198,168,0.07) 0%, transparent 65%)" }}
    />
    <div
      className="absolute bottom-[-15%] left-[-10%] w-[24rem] h-[24rem] rounded-full blur-[70px] max-sm:w-[16rem] max-sm:h-[16rem] max-sm:blur-[40px]"
      style={{ background: "radial-gradient(circle, rgba(15,23,42,0.45) 0%, transparent 60%)" }}
    />
  </div>
);

export default AmbientBackground;

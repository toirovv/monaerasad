import bannerImg from "../../assets/MonaerImg1.png";

const BORDER = "#1F2937";

const Banner = () => (
  <section className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 pt-[76px] sm:pt-32">
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full flex items-center justify-center"
      style={{
        border: `1px solid ${BORDER}`,
        background: "linear-gradient(160deg, #0d1420 0%, #0a0e14 45%, #060a10 100%)",
      }}
    >
      <img
        src={bannerImg}
        alt="Monaer"
        className="w-full h-auto min-h-[200px] max-h-[300px] sm:max-h-[420px] md:max-h-[500px] lg:max-h-[560px] xl:max-h-[620px] object-contain mx-auto"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
  </section>
);

export default Banner;

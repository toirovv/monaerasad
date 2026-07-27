import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const PLACEHOLDER_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrZHlLZSTQggLYiTHLMI-d5Wb2LbDSN9aezRwyHoz9ooSVOG9aP_3JaJW&s=10";

const LOCATIONS = [
  { name: "Yunusobod", address: "Amir Temur ko'chasi, 45", img: PLACEHOLDER_IMG },
  { name: "Sergeli", address: "Qatortol ko'chasi, 12", img: PLACEHOLDER_IMG },
  { name: "Chilonzor", address: "Bunyodkor shoh ko'chasi, 8", img: PLACEHOLDER_IMG },
  { name: "Mirzo Ulug'bek", address: "Buyuk Ipak Yo'li, 102", img: PLACEHOLDER_IMG },
];

const Locations = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
    <div className="mb-8 sm:mb-12">
      <SectionLabel>MONAER filiallari</SectionLabel>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-white">Bizning </span>
        <span className="gradient-text">manzillarimiz</span>
      </h2>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 items-start">
      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.name}
          className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 ${
            i % 2 === 1 ? "mt-8 sm:mt-14" : "mt-0"
          }`}
        >
          <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-white flex items-center justify-center">
            <img
              src={loc.img}
              alt={loc.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain p-6 sm:p-8 transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div
            className="absolute inset-0 rounded-2xl transition-colors duration-300"
            style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.1)` }}
          />
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `inset 0 0 0 1.5px ${ACCENT}88` }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
            <h3 className="font-display text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
              {loc.name}
            </h3>
            <p className="text-[10px] sm:text-xs leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
              {loc.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Locations;

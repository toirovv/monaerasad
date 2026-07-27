import { useState, useCallback, useRef, useEffect } from "react";
import { X } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const ACCENT = "#12C6A8";
const BORDER = "#1F2937";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";

const PHOTOS = [
  { src: photo1, alt: "MONAER do'koni" },
  { src: photo2, alt: "Mahsulotlar" },
  { src: photo3, alt: "Jamoa" },
  { src: photo4, alt: "Yetkazish" },
  { src: photo5, alt: "Sifat kafolati" },
];

const AboutGallery = () => {
  const [selected, setSelected] = useState(null);
  const overlayRef = useRef(null);

  const open = useCallback((photo) => setSelected(photo), []);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handleEsc = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-10 sm:py-24">
        <div className="text-center mb-8 sm:mb-14">
          <SectionLabel>Faoliyat</SectionLabel>
          <h2 className="font-display text-[22px] sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Bizning </span>
            <span className="gradient-text">Fao</span>
            <span className="text-white">liyatlarimiz</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => open(photo)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[11px] sm:text-sm font-semibold text-white font-body">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-8"
          style={{ animation: "fadeInUp 0.2s ease forwards" }}
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <button
            onClick={close}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90"
            style={{
              background: "rgba(10,14,20,0.45)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <X size={18} className="text-white/80" />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-[80vh] rounded-xl sm:rounded-2xl object-contain"
            style={{ boxShadow: "0 40px 90px -20px rgba(0,0,0,0.8)", animation: "fadeInUp 0.25s ease forwards" }}
          />
        </div>
      )}
    </>
  );
};

export default AboutGallery;

import React from "react";
import { SkeletonBlock, SkeletonText } from "../ui/SkeletonBase";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.4)";

const CardSkeletonMini = () => (
  <div
    className="rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
    style={{ background: PANEL_BG, border: `1px solid ${BORDER}` }}
  >
    <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
      <SkeletonBlock className="absolute inset-0" style={{ borderRadius: 0 }} />
    </div>
    <div className="p-2.5 sm:p-3.5 flex flex-col gap-2">
      <SkeletonBlock style={{ height: "10px", width: "64px" }} />
      <SkeletonBlock style={{ height: "14px", width: "75%" }} />
      <SkeletonBlock style={{ height: "8px", width: "100%" }} />
      <div className="flex items-end justify-between mt-2 pt-2 border-t" style={{ borderColor: BORDER }}>
        <div className="flex flex-col gap-1">
          <SkeletonBlock style={{ height: "16px", width: "56px", background: "rgba(18,198,168,0.12)" }} />
          <SkeletonBlock style={{ height: "8px", width: "80px" }} />
        </div>
        <SkeletonBlock style={{ width: "36px", height: "36px", borderRadius: "10px" }} />
      </div>
    </div>
  </div>
);

const CatalogSkeleton = () => (
  <div className="font-body pt-28 sm:pt-32 pb-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="mb-6 sm:mb-10 flex flex-col gap-2">
        <SkeletonBlock style={{ height: "28px", width: "180px" }} />
        <SkeletonBlock style={{ height: "12px", width: "100px" }} />
      </div>

      <div
        className="rounded-2xl border p-3 sm:p-4 mb-8 sm:mb-10 flex flex-col gap-3 sm:gap-4"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: PANEL_BG, backdropFilter: "blur(16px)" }}
      >
        <SkeletonBlock style={{ height: "44px", width: "100%", borderRadius: "12px" }} />
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} style={{ height: "32px", width: `${60 + i * 10}px`, borderRadius: "9999px" }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeletonMini key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default CatalogSkeleton;

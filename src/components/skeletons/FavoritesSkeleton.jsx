import React from "react";
import { SkeletonBlock } from "../ui/SkeletonBase";

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

const FavoritesSkeleton = () => (
  <div className="min-h-screen px-4 sm:px-6 md:px-8 pt-24 pb-28">
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 sm:mb-10 flex items-center gap-3">
        <SkeletonBlock style={{ height: "28px", width: "160px" }} />
        <SkeletonBlock style={{ height: "20px", width: "40px", borderRadius: "9999px" }} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeletonMini key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default FavoritesSkeleton;

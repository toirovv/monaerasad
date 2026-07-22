import React from "react";
import { SkeletonBlock } from "../ui/SkeletonBase";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.4)";

const CartItemSkeleton = () => (
  <div
    className="rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
    style={{ background: PANEL_BG, border: `1px solid rgba(255,255,255,0.06)` }}
  >
    <SkeletonBlock style={{ width: "64px", height: "64px", borderRadius: "12px", flexShrink: 0 }} />
    <div className="flex-1 min-w-0 flex flex-col gap-1.5">
      <SkeletonBlock style={{ height: "14px", width: "120px" }} />
      <SkeletonBlock style={{ height: "10px", width: "80px" }} />
    </div>
    <div className="flex items-center gap-2">
      <SkeletonBlock style={{ width: "32px", height: "32px", borderRadius: "8px" }} />
      <SkeletonBlock style={{ width: "24px", height: "14px" }} />
      <SkeletonBlock style={{ width: "32px", height: "32px", borderRadius: "8px" }} />
    </div>
    <SkeletonBlock style={{ width: "32px", height: "32px", borderRadius: "8px" }} />
  </div>
);

const BacketSkeleton = () => (
  <div className="min-h-screen pt-24 sm:pt-28 pb-36 md:pb-12 px-4">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-2">
          <SkeletonBlock style={{ height: "28px", width: "140px" }} />
          <SkeletonBlock style={{ height: "12px", width: "100px" }} />
        </div>
        <SkeletonBlock style={{ height: "36px", width: "100px", borderRadius: "12px" }} />
      </div>

      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <CartItemSkeleton key={i} />
        ))}
      </div>

      <div
        className="mt-6 rounded-2xl p-5 flex flex-col gap-4"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-between">
          <SkeletonBlock style={{ height: "14px", width: "60px" }} />
          <div className="flex flex-col items-end gap-1">
            <SkeletonBlock style={{ height: "22px", width: "80px" }} />
            <SkeletonBlock style={{ height: "10px", width: "100px" }} />
          </div>
        </div>
        <SkeletonBlock style={{ height: "44px", width: "100%", borderRadius: "12px" }} />
      </div>
    </div>
  </div>
);

export default BacketSkeleton;

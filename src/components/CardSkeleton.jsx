import React from "react";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.4)";

const shimmer = `@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}`;

const CardSkeleton = () => (
  <>
    <style>{shimmer}</style>
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: PANEL_BG,
        border: `1px solid ${BORDER}`,
      }}
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)`,
            backgroundSize: "800px 100%",
            animation: "shimmer 1.5s infinite linear",
          }}
        />
      </div>
      <div className="p-2.5 sm:p-3.5 flex flex-col gap-2">
        <div className="h-2.5 w-16 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="h-3.5 w-3/4 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="h-2 w-full rounded mt-1" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="flex items-end justify-between mt-2 pt-2 border-t" style={{ borderColor: BORDER }}>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-14 rounded" style={{ background: "rgba(18,198,168,0.15)" }} />
            <div className="h-2 w-20 rounded" style={{ background: "rgba(255,255,255,0.04)" }} />
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>
    </div>
  </>
);

export const CardSkeletonGrid = ({ count = 6 }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export default CardSkeleton;

import React from "react";

const shimmer = `@keyframes skeleton-shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}`;

const SHIMMER_BG = "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%)";

export const SkeletonBlock = ({ className = "", style = {} }) => (
  <>
    <style>{shimmer}</style>
    <div
      className={className}
      style={{
        background: `${SHIMMER_BG}, rgba(255,255,255,0.04)`,
        backgroundSize: "800px 100%",
        animation: "skeleton-shimmer 1.5s infinite linear",
        borderRadius: "8px",
        ...style,
      }}
    />
  </>
);

export const SkeletonCircle = ({ className = "", style = {} }) => (
  <SkeletonBlock className={className} style={{ borderRadius: "50%", ...style }} />
);

export const SkeletonText = ({ lines = 3, className = "", gap = "8px" }) => (
  <div className={`flex flex-col ${className}`} style={{ gap }}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBlock
        key={i}
        style={{
          height: "12px",
          width: i === lines - 1 ? "60%" : "100%",
          borderRadius: "6px",
        }}
      />
    ))}
  </div>
);

export default SkeletonBlock;

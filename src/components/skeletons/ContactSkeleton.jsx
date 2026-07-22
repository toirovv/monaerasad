import React from "react";
import { SkeletonBlock, SkeletonText } from "../ui/SkeletonBase";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.55)";

const ContactSkeleton = () => (
  <div className="font-body relative">
    {/* Hero */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-[100px] sm:pt-32 pb-8 sm:pb-16">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
        <SkeletonBlock style={{ height: "12px", width: "80px" }} />
        <SkeletonBlock style={{ height: "40px", width: "300px", maxWidth: "100%" }} />
        <SkeletonBlock style={{ height: "16px", width: "340px", maxWidth: "100%" }} />
      </div>
    </section>

    {/* Info + Form */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <SkeletonBlock style={{ height: "12px", width: "160px" }} />
          <SkeletonBlock style={{ height: "28px", width: "280px", maxWidth: "100%" }} />
          <div className="flex flex-col gap-3 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex items-center gap-4"
                style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
              >
                <SkeletonBlock style={{ width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0 }} />
                <div className="flex-1 flex flex-col gap-1.5">
                  <SkeletonBlock style={{ height: "8px", width: "60px" }} />
                  <SkeletonBlock style={{ height: "12px", width: `${100 + i * 15}px` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            <SkeletonBlock style={{ height: "44px", width: "100%", borderRadius: "12px" }} />
            <SkeletonBlock style={{ height: "44px", width: "100%", borderRadius: "12px" }} />
          </div>
        </div>

        {/* Right - Form */}
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
        >
          <SkeletonBlock style={{ height: "18px", width: "120px" }} />
          <SkeletonBlock style={{ height: "10px", width: "240px" }} />
          <div className="grid grid-cols-2 gap-3 mt-2">
            <SkeletonBlock style={{ height: "52px", width: "100%", borderRadius: "12px" }} />
            <SkeletonBlock style={{ height: "52px", width: "100%", borderRadius: "12px" }} />
          </div>
          <SkeletonBlock style={{ height: "52px", width: "100%", borderRadius: "12px" }} />
          <SkeletonBlock style={{ height: "52px", width: "100%", borderRadius: "12px" }} />
          <SkeletonBlock style={{ height: "100px", width: "100%", borderRadius: "12px" }} />
          <SkeletonBlock style={{ height: "48px", width: "100%", borderRadius: "12px" }} />
        </div>
      </div>
    </section>
  </div>
);

export default ContactSkeleton;

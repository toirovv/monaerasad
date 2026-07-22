import React from "react";
import { SkeletonBlock, SkeletonText } from "../ui/SkeletonBase";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.55)";

const AboutSkeleton = () => (
  <div className="font-body relative">
    {/* Hero */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-[72px] sm:pt-32 pb-8 sm:pb-20">
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <SkeletonBlock style={{ height: "12px", width: "120px" }} />
        <SkeletonBlock style={{ height: "40px", width: "400px", maxWidth: "100%" }} />
        <SkeletonBlock style={{ height: "14px", width: "360px", maxWidth: "100%" }} />
        <SkeletonBlock style={{ height: "14px", width: "300px", maxWidth: "100%" }} />
      </div>
    </section>

    {/* Story */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col gap-3">
          <SkeletonBlock style={{ height: "10px", width: "100px" }} />
          <SkeletonBlock style={{ height: "28px", width: "320px", maxWidth: "100%" }} />
          <SkeletonText lines={4} gap="10px" />
        </div>
        <div
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-10"
          style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center flex flex-col items-center gap-2">
                <SkeletonBlock style={{ height: "28px", width: "60px", margin: "0 auto" }} />
                <SkeletonBlock style={{ height: "12px", width: "80px", margin: "0 auto" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>

    {/* Values */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
      <div className="text-center mb-8 sm:mb-14 flex flex-col items-center gap-2">
        <SkeletonBlock style={{ height: "10px", width: "100px" }} />
        <SkeletonBlock style={{ height: "32px", width: "200px" }} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex flex-col gap-3"
            style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
          >
            <SkeletonBlock style={{ width: "44px", height: "44px", borderRadius: "12px" }} />
            <SkeletonBlock style={{ height: "14px", width: "70%" }} />
            <SkeletonText lines={2} gap="6px" />
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>

    {/* Gallery */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
      <div className="text-center mb-8 sm:mb-14 flex flex-col items-center gap-2">
        <SkeletonBlock style={{ height: "10px", width: "80px" }} />
        <SkeletonBlock style={{ height: "32px", width: "260px" }} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonBlock
            key={i}
            className="aspect-[4/3] rounded-xl sm:rounded-2xl"
            style={{ borderRadius: "12px" }}
          />
        ))}
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>

    {/* Timeline */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-24">
      <div className="text-center mb-8 sm:mb-14 flex flex-col items-center gap-2">
        <SkeletonBlock style={{ height: "12px", width: "80px" }} />
        <SkeletonBlock style={{ height: "32px", width: "220px" }} />
      </div>
      <div className="relative max-w-2xl mx-auto flex flex-col gap-8 sm:gap-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-start gap-4 sm:gap-6">
            <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "" : "order-2"}`} />
            <div
              className="absolute left-[15px] sm:left-1/2 w-2.5 h-2.5 rounded-full -translate-x-[5px] mt-2 z-10"
              style={{ background: "rgba(18,198,168,0.3)" }}
            />
            <div
              className={`ml-8 sm:ml-0 sm:w-1/2 rounded-xl p-4 sm:p-5 flex flex-col gap-2 ${i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:order-1"}`}
              style={{ border: `1px solid ${BORDER}`, background: PANEL_BG }}
            >
              <SkeletonBlock style={{ height: "20px", width: "50px", borderRadius: "9999px" }} />
              <SkeletonBlock style={{ height: "16px", width: "100px" }} />
              <SkeletonText lines={2} gap="6px" />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-14 sm:pb-28">
      <div
        className="rounded-2xl sm:rounded-3xl px-5 sm:px-16 py-8 sm:py-16 flex flex-col items-center gap-4"
        style={{ border: `1px solid ${BORDER}`, background: "linear-gradient(160deg, #111827 0%, #0a0e14 100%)" }}
      >
        <SkeletonBlock style={{ height: "12px", width: "120px" }} />
        <SkeletonBlock style={{ height: "32px", width: "260px" }} />
        <SkeletonBlock style={{ height: "14px", width: "300px" }} />
        <div className="flex gap-3 mt-2">
          <SkeletonBlock style={{ height: "44px", width: "180px", borderRadius: "9999px" }} />
          <SkeletonBlock style={{ height: "44px", width: "180px", borderRadius: "9999px" }} />
        </div>
      </div>
    </section>
  </div>
);

export default AboutSkeleton;

import React from "react";
import { SkeletonBlock, SkeletonCircle, SkeletonText } from "../ui/SkeletonBase";

const BORDER = "#1F2937";
const PANEL_BG = "rgba(17,24,39,0.4)";

const SectionSkeleton = ({ children, className = "" }) => (
  <section className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

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

const BannerSkeleton = () => (
  <SectionSkeleton className="pt-[88px] sm:pt-32">
    <SkeletonBlock
      style={{
        height: "220px",
        borderRadius: "16px",
        maxHeight: "500px",
      }}
      className="w-full sm:rounded-3xl"
    />
  </SectionSkeleton>
);

const StatsSkeleton = () => (
  <SectionSkeleton className="py-10 sm:py-14 mt-8 sm:mt-16">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <SkeletonBlock style={{ height: "28px", width: "80px", margin: "0 auto" }} />
          <SkeletonBlock style={{ height: "10px", width: "100px", margin: "0 auto" }} />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

const FeaturedProductsSkeleton = () => (
  <SectionSkeleton className="py-16 sm:py-24">
    <div className="flex items-end justify-between mb-6 sm:mb-12">
      <div className="flex flex-col gap-2">
        <SkeletonBlock style={{ height: "10px", width: "80px" }} />
        <SkeletonBlock style={{ height: "32px", width: "260px" }} />
      </div>
      <SkeletonBlock style={{ height: "36px", width: "140px", borderRadius: "9999px" }} className="hidden sm:block" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 xl:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <CardSkeletonMini key={i} />
      ))}
    </div>
  </SectionSkeleton>
);

const FeaturesSkeleton = () => (
  <SectionSkeleton className="py-16 sm:py-24">
    <div className="mb-8 sm:mb-12 flex flex-col gap-2">
      <SkeletonBlock style={{ height: "10px", width: "120px" }} />
      <SkeletonBlock style={{ height: "32px", width: "200px" }} />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col gap-3"
          style={{ border: `1px solid ${BORDER}`, background: "rgba(17,24,39,0.55)" }}
        >
          <SkeletonBlock style={{ width: "44px", height: "44px", borderRadius: "12px" }} />
          <SkeletonBlock style={{ height: "14px", width: "80%" }} />
          <SkeletonText lines={2} gap="6px" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

const LocationsSkeleton = () => (
  <SectionSkeleton className="py-16 sm:py-24">
    <div className="mb-8 sm:mb-12 flex flex-col gap-2">
      <SkeletonBlock style={{ height: "10px", width: "140px" }} />
      <SkeletonBlock style={{ height: "32px", width: "240px" }} />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? "mt-8 sm:mt-14" : ""}`}
          style={{ border: `1px solid ${BORDER}` }}
        >
          <SkeletonBlock className="aspect-[3/4] sm:aspect-[4/5]" style={{ borderRadius: 0 }} />
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex flex-col gap-1.5">
            <SkeletonBlock style={{ height: "16px", width: "80px" }} />
            <SkeletonBlock style={{ height: "10px", width: "120px" }} />
          </div>
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

const EngineeringSkeleton = () => (
  <SectionSkeleton className="py-16 sm:py-24">
    <div className="mb-8 sm:mb-12 flex flex-col gap-2">
      <SkeletonBlock style={{ height: "10px", width: "100px" }} />
      <SkeletonBlock style={{ height: "32px", width: "300px" }} />
      <SkeletonBlock style={{ height: "14px", width: "380px", marginTop: "12px" }} />
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-3"
          style={{ border: `1px solid ${BORDER}`, background: "rgba(17,24,39,0.55)" }}
        >
          <SkeletonBlock style={{ width: "48px", height: "48px", borderRadius: "12px" }} />
          <SkeletonBlock style={{ height: "16px", width: "70%" }} />
          <SkeletonText lines={2} gap="6px" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

const TestimonialsSkeleton = () => (
  <SectionSkeleton className="pb-16 sm:pb-24">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
      <div className="flex flex-col gap-2">
        <SkeletonBlock style={{ height: "12px", width: "120px" }} />
        <SkeletonBlock style={{ height: "32px", width: "180px" }} />
      </div>
      <div className="flex gap-2">
        <SkeletonCircle style={{ width: "40px", height: "40px" }} />
        <SkeletonCircle style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
    <div
      className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-5 md:gap-6"
      style={{ background: "rgba(17,24,39,0.5)", border: `1px solid rgba(255,255,255,0.06)`, minHeight: "220px" }}
    >
      <SkeletonBlock style={{ width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0 }} />
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} style={{ width: "12px", height: "12px", borderRadius: "2px" }} />
          ))}
        </div>
        <SkeletonText lines={3} gap="8px" />
        <div className="flex items-center gap-3 mt-2">
          <SkeletonCircle style={{ width: "36px", height: "36px" }} />
          <div className="flex flex-col gap-1.5">
            <SkeletonBlock style={{ height: "12px", width: "100px" }} />
            <SkeletonBlock style={{ height: "10px", width: "70px" }} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonBlock key={i} style={{ width: i === 0 ? "24px" : "8px", height: "8px", borderRadius: "9999px" }} />
      ))}
    </div>
  </SectionSkeleton>
);

const CTASkeleton = () => (
  <SectionSkeleton className="pb-20 sm:pb-28">
    <div
      className="rounded-2xl sm:rounded-3xl px-5 sm:px-16 py-10 sm:py-16 flex flex-col items-center gap-4"
      style={{ border: `1px solid ${BORDER}`, background: "linear-gradient(160deg, #111827 0%, #0a0e14 100%)" }}
    >
      <SkeletonBlock style={{ height: "12px", width: "120px" }} />
      <SkeletonBlock style={{ height: "32px", width: "280px" }} />
      <SkeletonBlock style={{ height: "14px", width: "340px" }} />
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <SkeletonBlock style={{ height: "48px", width: "200px", borderRadius: "9999px" }} />
        <SkeletonBlock style={{ height: "48px", width: "200px", borderRadius: "9999px" }} />
      </div>
      <div className="flex gap-8 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ height: "12px", width: "100px" }} />
        ))}
      </div>
    </div>
  </SectionSkeleton>
);

const HomeSkeleton = () => (
  <div className="font-body relative">
    <BannerSkeleton />
    <StatsSkeleton />
    <FeaturedProductsSkeleton />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>
    <FeaturesSkeleton />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>
    <LocationsSkeleton />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>
    <EngineeringSkeleton />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-px my-2" style={{ background: "linear-gradient(90deg, transparent, #1F2937, transparent)" }} />
    </div>
    <TestimonialsSkeleton />
    <CTASkeleton />
  </div>
);

export default HomeSkeleton;

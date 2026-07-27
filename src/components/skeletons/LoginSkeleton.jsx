import React from "react";
import { SkeletonBlock } from "../ui/SkeletonBase";

const LoginSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-4 pt-24">
    <div
      className="w-full max-w-sm rounded-[28px] p-8"
      style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <SkeletonBlock style={{ height: "24px", width: "100px", marginBottom: "12px" }} />
      <SkeletonBlock style={{ height: "14px", width: "200px", marginBottom: "28px" }} />
      <SkeletonBlock style={{ height: "48px", width: "100%", borderRadius: "12px", marginBottom: "16px" }} />
      <SkeletonBlock style={{ height: "48px", width: "100%", borderRadius: "12px" }} />
    </div>
  </div>
);

export default LoginSkeleton;

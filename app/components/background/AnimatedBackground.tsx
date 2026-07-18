"use client";

import FloatingPetals from "./FloatingPetals";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#07131F]
          via-[#163B6B]
          to-[#6EC1FF]
        "
      />

      <FloatingPetals />
    </div>
  );
}
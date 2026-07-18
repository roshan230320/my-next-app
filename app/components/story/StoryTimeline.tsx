"use client";

import StoryCard from "./StoryCard";
import { storyData } from "./StoryData";

export default function StoryTimeline() {
  return (
    <section className="relative mx-auto px-6 py-24">

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-white/20 md:block" />

      <div className="space-y-20">

        {storyData.map((item, index) => (

          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >

            <div className="hidden md:block w-[45%]">
              {index % 2 === 0 && (
                <StoryCard item={item} index={index} />
              )}
            </div>

            {/* Sunflower */}
            <div className="relative z-10 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 border border-white/20 text-3xl shadow-lg">
              🌻
            </div>

            <div className="hidden md:block w-[45%]">
              {index % 2 === 1 && (
                <StoryCard item={item} index={index} />
              )}
            </div>

            {/* Mobile */}
            <div className="w-full md:hidden">
              <StoryCard item={item} index={index} />
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
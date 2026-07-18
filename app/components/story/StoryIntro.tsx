"use client";

import AnimatedBackground from "../background/AnimatedBackground";
import MusicPlayer from "../music/MusicPlayer";
import StoryTimeline from "./StoryTimeline";
import StoryContinue from "./StoryContinue";

export default function StoryIntro() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <AnimatedBackground />

      <MusicPlayer />

      <div className="relative z-10">

        <section className="flex min-h-screen items-center justify-center px-6">

          <div className="max-w-3xl text-center">

            <h1 className="mb-8 text-5xl font-bold text-white">
              Every Story Has A Beginning
            </h1>

            <p className="text-xl leading-9 text-blue-100">
              Before the memories...
              <br />
              Before the promises...
              <br />
              There was a beautiful beginning.
            </p>

          </div>
        <StoryTimeline />
        <StoryContinue />
        </section>
      </div>
    </main>
  );
}
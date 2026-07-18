"use client";

import AnimatedBackground from "../background/AnimatedBackground";
import HeroFlower from "./HeroFlower";
import HeroText from "./HeroText";
import MusicPlayer from "../music/MusicPlayer";

export default function HeroIntro() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <AnimatedBackground />

      <MusicPlayer />

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6">

        <HeroFlower />

        <HeroText />

      </div>
    </main>
  );
}
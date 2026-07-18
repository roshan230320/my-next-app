"use client";

import AnimatedBackground from "../background/AnimatedBackground";
import MusicPlayer from "../music/MusicPlayer";
import PromiseGarden from "./PromiseGarden";
import PromiseContinue from "@/app/components/promises/PromiseContinue";

export default function PromiseIntro() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <AnimatedBackground />

      <MusicPlayer />

      <div className="relative z-10">

        <section className="pt-32 text-center">

          <h1 className="text-6xl font-bold text-white">
            Our Promises
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-400"/>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-blue-100">
            Love grows stronger when promises become actions.
          </p>

        </section>

        <PromiseGarden />

        <PromiseContinue />

      </div>

    </main>
  );
}
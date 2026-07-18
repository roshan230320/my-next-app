"use client";

import AnimatedBackground from "../background/AnimatedBackground";
import MusicPlayer from "../music/MusicPlayer";
import MemoriesGrid from "./MemoriesGrid";
import MemoriesContinue from "@/app/components/memories/MemoriesContinue";

export default function MemoriesIntro() {

    return (

        <main className="relative min-h-screen overflow-hidden">

            <AnimatedBackground/>

            <MusicPlayer/>

            <div className="relative z-10">

                <section className="pt-32 text-center">

                    <h1 className="text-6xl font-bold text-white">
                        Our Memories
                    </h1>

                    <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-yellow-400"/>

                    <p className="mx-auto mt-8 max-w-3xl text-xl text-blue-100">

                        Every picture tells a story.

                        Some stories never fade.

                    </p>

                </section>

                <MemoriesGrid/>

                <MemoriesContinue/>

            </div>

        </main>

    )

}
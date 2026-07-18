"use client";

import { useState } from "react";
import Typewriter from "./Typewriter";
import HeroContinue from "./HeroContinue";

export default function HeroText() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="mt-10 space-y-6 text-center">

      <Typewriter
        text="Hi Baacchhhaaa ❤️"
        className="text-4xl font-bold text-white"
        onComplete={() => setShowSecond(true)}
      />

      {showSecond && (
        <Typewriter
          text="This isn't just another website..."
          delay={500}
          className="text-xl text-white/90"
          onComplete={() => setShowThird(true)}
        />
      )}

      {showThird && (
        <Typewriter
          text="It's the story of us."
          delay={500}
          className="text-2xl text-yellow-300"
          onComplete={() => setShowButton(true)}
        />
      )}

      {showButton && <HeroContinue />}
    </div>
  );
}
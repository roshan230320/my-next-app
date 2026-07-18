"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";

interface Props {
  language: "english" | "malayalam";
  setLanguage: (lang: "english" | "malayalam") => void;
}

export default function LetterLanguageToggle({
  language,
  setLanguage,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 flex flex-col items-center"
    >
      <div className="mb-5 flex items-center gap-2 text-yellow-300">
        <Languages size={22} />
        <span className="text-lg font-semibold">
          Choose your preferred language
        </span>
      </div>

      <p className="mb-8 text-center text-blue-100">
        I've written this letter in two languages.
        <br />
        Choose whichever feels more comfortable to read.
      </p>

      <div className="flex rounded-full bg-white/10 p-2 backdrop-blur-xl">

        <button
          onClick={() => setLanguage("malayalam")}
          className={`rounded-full px-7 py-3 transition-all duration-300 ${
            language === "malayalam"
              ? "bg-yellow-400 text-black shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          ❤️ Malayalam
        </button>

        <button
          onClick={() => setLanguage("english")}
          className={`rounded-full px-7 py-3 transition-all duration-300 ${
            language === "english"
              ? "bg-blue-500 text-white shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          💙 English
        </button>

      </div>
    </motion.div>
  );
}
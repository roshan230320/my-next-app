"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LetterPaper({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      relative
      mx-auto
      rounded-[40px]
      border
      border-white/20
      bg-white/10
      backdrop-blur-3xl
      p-14
      shadow-[0_20px_80px_rgba(0,0,0,.45)]
      overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/10
        via-transparent
        to-blue-500/10
        pointer-events-none
        "
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
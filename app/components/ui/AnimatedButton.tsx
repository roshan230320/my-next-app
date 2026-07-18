"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AnimatedButton({
  children,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className="
      w-full
      rounded-full
      py-4
      font-semibold
      text-lg
      bg-gradient-to-r
      from-blue-500
      to-blue-400
      text-white
      shadow-xl
      transition-all
      "
    >
      {children}
    </motion.button>
  );
}
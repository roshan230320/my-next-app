"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  onClick: () => void;
}

export default function PromiseFlower({
  title,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      className="group flex flex-col items-center"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="text-7xl"
      >
        🌻
      </motion.div>

      <span className="mt-3 text-white group-hover:text-yellow-300">
        {title}
      </span>
    </motion.button>
  );
}
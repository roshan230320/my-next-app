"use client";

import { motion } from "framer-motion";
import { StoryItem } from "./StoryData";

interface Props {
  item: StoryItem;
  index: number;
}

export default function StoryCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      className="mb-10 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
    >
      {item.date && (
        <p className="mb-2 text-sm text-yellow-300">
          {item.date}
        </p>
      )}

      <h2 className="mb-4 text-3xl font-bold text-white">
        {item.title}
      </h2>

      <p className="leading-8 text-blue-100">
        {item.description}
      </p>
    </motion.div>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Memory } from "./MemoryData";

interface Props {
  memory: Memory;
  onClick: () => void;
  rotation: number;
}

export default function MemoryCard({
  memory,
  onClick,
  rotation,
}: Props) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.06,
        rotate: 0,
        y: -12,
      }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer"
      style={{
        rotate: `${rotation}deg`,
      }}
    >
      <div className="w-72 rounded-xl bg-white p-4 shadow-2xl">

        <div className="relative h-72 w-full overflow-hidden rounded-lg">

          <Image
              src={memory.image}
              alt={memory.title}
              fill
              className="object-contain p-2"
              sizes="(max-width:768px) 100vw, 33vw"
          />

        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-900">
          {memory.title}
        </h2>

        <p className="text-sm text-gray-500">
          {memory.date}
        </p>

      </div>
    </motion.div>
  );
}
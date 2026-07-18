"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroFlower() {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        rotate: -20,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        duration: 2,
      }}
      className="flex justify-center"
    >
      <Image
        src="/images/sunflower.png"
        alt="Sunflower"
        width={220}
        height={220}
        priority
      />
    </motion.div>
  );
}
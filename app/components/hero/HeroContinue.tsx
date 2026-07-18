"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroContinue() {
  const router = useRouter();

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
    }}
      transition={{
        delay: 0.5,
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => router.push("/story")}
      className="mt-12 rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg transition hover:bg-blue-700"
    >
      Continue Our Story →
    </motion.button>
  );
}
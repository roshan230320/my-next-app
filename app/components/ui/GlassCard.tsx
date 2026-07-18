"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: .7,
      }}
      className={cn(
        "backdrop-blur-3xl",
        "bg-white/10",
        "border",
        "border-white/20",
        "rounded-[40px]",
        "shadow-2xl",
        "p-10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
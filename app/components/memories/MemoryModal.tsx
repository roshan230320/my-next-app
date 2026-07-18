"use client";

import Image from "next/image";
import { Memory } from "./MemoryData";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  memory: Memory | null;
  onClose: () => void;
}

export default function MemoryModal({
  memory,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {memory && (

        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >

          <motion.div
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            exit={{ scale: .8 }}
            onClick={(e)=>e.stopPropagation()}
            className="max-w-4xl rounded-3xl bg-white p-6"
          >

            <div className="relative h-[550px] w-[700px]">

              <Image
                src={memory.image}
                alt={memory.title}
                fill
                className="rounded-xl object-cover"
              />

            </div>

            <h2 className="mt-6 text-4xl font-bold">
              {memory.title}
            </h2>

            <p className="mt-2 text-gray-500">
              {memory.date}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              {memory.description}
            </p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PromiseItem } from "./PromiseData";
import { X } from "lucide-react";

interface Props {
  promise: PromiseItem | null;
  onClose: () => void;
}

export default function PromiseCard({
  promise,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {promise && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: .7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: .7,
              opacity: 0,
            }}
            className="relative max-w-xl rounded-3xl bg-white p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5"
            >
              <X />
            </button>

            <div className="text-center">

              <div className="text-6xl">
                🌻
              </div>

              <h2 className="mt-5 text-3xl font-bold">
                {promise.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {promise.description}
              </p>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
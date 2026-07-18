"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PromiseContinue() {
  const router = useRouter();

  return (
    <section className="relative py-24">
      <div className="mx-auto flex flex-col items-center px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white"
        >
          Promises become meaningful only when they are lived.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-blue-100"
        >
          These promises come from my heart.
          <br />
          But there is something even more important...
          <br />
          A letter I've wanted to write to you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(59,130,246,.4)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/letter")}
          className="
            group
            mt-12
            flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-sky-500
            to-blue-700
            px-10
            py-4
            text-lg
            font-semibold
            text-white
            shadow-2xl
            transition-all
          "
        >
          💌 Read My Letter

          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </motion.button>

      </div>
    </section>
  );
}
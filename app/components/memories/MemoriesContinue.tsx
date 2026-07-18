"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function MemoriesContinue() {
  const router = useRouter();

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto flex flex-col items-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white"
        >
          Every memory made us stronger.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg leading-8 text-blue-100"
        >
          Some moments become photographs.
          <br />
          Some photographs become forever.
          <br />
          But our story doesn't end here...
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(59,130,246,0.45)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/promises")}
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
          🌻 Continue to Our Promises

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </section>
  );
}
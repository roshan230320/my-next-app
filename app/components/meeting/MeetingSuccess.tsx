"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart } from "lucide-react";

interface MeetingSuccessProps {
  onContinue?: () => void;
}

export default function MeetingSuccess({
  onContinue,
}: MeetingSuccessProps) {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[35px]
          border
          border-white/20
          bg-white/10
          p-10
          text-center
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
          backdrop-blur-xl
        "
      >

        {/* Background Glow */}

        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Check Icon */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="relative z-10 flex justify-center"
        >
          <CheckCircle2
            size={90}
            className="text-green-400"
          />
        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="relative z-10 mt-8 text-5xl font-bold text-white"
        >
          Thank You ❤️
        </motion.h1>

        {/* Message */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="relative z-10 mt-8 text-xl leading-9 text-blue-100"
        >
          Your response has been received.
          <br />
          I'm already looking forward to meeting you.
          <br />
          Thank you for making my day.
        </motion.p>

        {/* Animated Heart */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="relative z-10 mt-10 flex justify-center"
        >
          <Heart
            size={60}
            className="fill-red-500 text-red-500"
          />
        </motion.div>

        {/* Continue */}

        {onContinue && (

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
              delay: 1.2,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onContinue}
            className="
              mt-12
              rounded-full
              bg-gradient-to-r
              from-sky-500
              to-blue-700
              px-10
              py-4
              font-semibold
              text-white
              shadow-xl
            "
          >
            Continue 🌻
          </motion.button>

        )}

      </motion.div>

    </section>
  );
}
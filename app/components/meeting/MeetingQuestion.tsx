
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MeetingQuestionProps {
  onYes: () => void;
}

export default function MeetingQuestion({
  onYes,
}: MeetingQuestionProps) {
  const [sendingNo, setSendingNo] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleNo = async () => {
    try {
      setSendingNo(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: "Never",
          time: "Never",
          location: "No Meet-up",
          message: "Final GoodBye Message, from Now we will not meet again.",
          
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send response.");
      }

      window.location.href = "/goodbye";
    } catch (err) {
      console.error(err);
      alert("Something went wrong while sending your response.");
    } finally {
      setSendingNo(false);
    }
  };

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="relative w-full max-w-4xl text-center"
        >
          <p className="uppercase tracking-[10px] text-sky-300">
            One Last Step
          </p>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Before This Journey Ends...
          </h1>

          <div className="mx-auto mt-10 h-[3px] w-36 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />

          <p className="mx-auto mt-12 max-w-2xl text-xl leading-10 text-blue-100">
            You've walked through our memories,
            our promises, and my letter.
            <br />
            There is only one question left...
          </p>

          <h2 className="mt-20 text-4xl font-semibold leading-relaxed text-white md:text-5xl">
            Would you like
            <br />
            to meet me?
          </h2>

          <div className="mt-20 flex flex-col items-center justify-center gap-5 md:flex-row">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: .96 }}
              onClick={onYes}
              className="group relative overflow-hidden rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500 to-blue-700 px-12 py-5 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,.35)]"
            >
              <span className="relative z-10">
                Yes, I'd Love To
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: .98 }}
              onClick={() => setShowConfirm(true)}
              className="rounded-full border border-white/20 bg-white/5 px-12 py-5 text-lg font-medium text-blue-100 transition hover:border-white/40 hover:bg-white/10"
            >
              Not This Time
            </motion.button>
          </div>

          <p className="mt-16 text-sm uppercase tracking-[6px] text-blue-200/70">
            Whatever your answer is, thank you for being here.
          </p>
        </motion.div>
      </section>

      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .9, opacity: 0 }}
              className="w-full max-w-md rounded-3xl border border-white/10 bg-[#071A38] p-8 shadow-2xl"
            >
              <h2 className="text-center text-3xl font-bold text-white">
                Are you sure?
              </h2>

              <p className="mt-6 text-center leading-8 text-blue-100">
                I completely respect your decision.
                <br />
                I just want to make sure this wasn't an accidental click.
              </p>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 rounded-full border border-white/20 py-3 text-white transition hover:bg-white/10"
                >
                  Go Back
                </button>

                <button
                  disabled={sendingNo}
                  onClick={handleNo}
                  className="flex-1 rounded-full bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 disabled:opacity-60"
                >
                  {sendingNo ? "Sending..." : "Yes"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

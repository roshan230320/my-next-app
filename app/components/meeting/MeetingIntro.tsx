"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import AnimatedBackground from "../background/AnimatedBackground";
import MusicPlayer from "../music/MusicPlayer";

import MeetingQuestion from "./MeetingQuestion";
import MeetingForm from "./MeetingForm";
import MeetingSuccess from "./MeetingSuccess";

import useMeetingFlow from "./hooks/useMeetingFlow";

export default function MeetingIntro() {
  const router = useRouter();

  const {
    step,
    loading,
    formData,
    startForm,
    updateField,
    submit,
  } = useMeetingFlow();

  const handleSubmit = async () => {
    await submit();
  };

  return (
    <main className="relative min-h-screen overflow-hidden">

      <AnimatedBackground />

      <MusicPlayer />

      <div className="relative z-10">

        <AnimatePresence mode="wait">

          {step === "question" && (
            <motion.div
              key="question"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                rotateY: 25,
                y: -20,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <MeetingQuestion
                onYes={startForm}
              />
            </motion.div>
          )}

          {step === "form" && (
            <motion.div
              key="form"
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <MeetingForm
                formData={formData}
                loading={loading}
                onChange={updateField}
                onSubmit={handleSubmit}
              />
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <MeetingSuccess
                onContinue={() =>
                  router.push("/thank-you")
                }
              />
            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function GoodbyePage() {

  return (

    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-[#071A38]
      px-6
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        className="
        max-w-2xl
        text-center
        "

      >

        <h1
          className="
          text-5xl
          font-bold
          text-white
          "
        >
          Thank You
        </h1>

        <p
          className="
          mt-10
          text-xl
          leading-10
          text-blue-100
          "
        >
          Thank you for taking the time
          to walk through every page.

          <br />

          Thank you for reading my words.

          <br />

          And most importantly...

          <br /><br />

          Thank you for your honesty.

          <br /><br />

          I sincerely wish you nothing
          but happiness.

        </p>

      </motion.div>

    </main>

  );

}
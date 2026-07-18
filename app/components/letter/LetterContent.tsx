"use client";

import Typewriter from "../hero/Typewriter";

interface Props {
  text: string;
}

export default function LetterContent({
  text,
}: Props) {
  return (
    <Typewriter
      speed={18}
      text={text}
      className="
      whitespace-pre-line
      text-white
      text-xl
      md:text-2xl
      leading-[2.4rem]
      font-light
      tracking-wide
      "
    />
  );
}
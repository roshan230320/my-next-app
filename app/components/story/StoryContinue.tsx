"use client";

import { useRouter } from "next/navigation";

export default function StoryContinue() {
  const router = useRouter();

  return (
    <div className="pb-24 text-center">
      <button
        onClick={() => router.push("/memories")}
        className="rounded-full bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
      >
        Continue To Our Memories →
      </button>
    </div>
  );
}
"use client";

import { useState } from "react";
import PromiseFlower from "./PromiseFlower";
import PromiseCard from "./PromiseCard";
import { promises, PromiseItem } from "./PromiseData";

export default function PromiseGarden() {
  const [selected, setSelected] =
    useState<PromiseItem | null>(null);

  return (
    <>
      <section className="mx-auto grid grid-cols-2 gap-20 py-20 md:grid-cols-3">

        {promises.map((promise) => (
          <div
            key={promise.id}
            className="flex justify-center"
          >
            <PromiseFlower
              title={promise.title}
              onClick={() => setSelected(promise)}
            />
          </div>
        ))}

      </section>

      <PromiseCard
        promise={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
"use client";

import { useState } from "react";
import MemoryCard from "./MemoryCard";
import MemoryModal from "./MemoryModal";
import { memories, Memory } from "./MemoryData";

const rotations = [-7, 5, -4, 6, -3];

export default function MemoriesGrid() {

  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <>
      <div className="mx-auto grid grid-cols-1 gap-14 px-8 py-20 md:grid-cols-2 lg:grid-cols-3">

        {memories.map((memory, index)=>(

          <div
            key={memory.id}
            className="flex justify-center"
          >

            <MemoryCard
              memory={memory}
              rotation={rotations[index%rotations.length]}
              onClick={()=>setSelected(memory)}
            />

          </div>

        ))}

      </div>

      <MemoryModal
        memory={selected}
        onClose={()=>setSelected(null)}
      />

    </>
  );
}
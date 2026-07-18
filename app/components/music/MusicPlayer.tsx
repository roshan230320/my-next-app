"use client";

import { useRef } from "react";

export default function MusicPlayer(){

const audioRef=useRef<HTMLAudioElement>(null);

return(

<audio

ref={audioRef}

loop

preload="auto"

>

<source

src="/music/piano.mp3"

type="audio/mpeg"

/>

</audio>

)

}
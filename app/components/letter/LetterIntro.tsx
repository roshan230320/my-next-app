"use client";

import { useState } from "react";
import AnimatedBackground from "../background/AnimatedBackground";
import MusicPlayer from "../music/MusicPlayer";
import LetterPaper from "./LetterPaper";
import LetterContent from "./LetterContent";
import LetterLanguageToggle from "./LetterLanguageToggle";
import LetterContinue from "./LetterContinue";
import { letter } from "./LetterData";


export default function LetterIntro(){

const [language,setLanguage]=useState<"english"|"malayalam">("english");

return(

<main className="relative min-h-screen overflow-hidden">

<AnimatedBackground/>

<MusicPlayer/>

<div className="relative z-10 px-6 py-20">

<h1 className="mb-12 text-center text-6xl font-bold text-white">

💌 My Letter

</h1>

<LetterLanguageToggle

language={language}

setLanguage={setLanguage}

/>

<LetterPaper>

<LetterContent

text={
language==="english"
?letter.english
:letter.malayalam
}

/>

</LetterPaper>

<LetterContinue/>

</div>

</main>

)

}
"use client";

import { useRouter } from "next/navigation";

export default function LetterContinue(){

const router=useRouter();

return(

<div className="py-24 text-center">

<button

onClick={()=>router.push("/meeting")}

className="
rounded-full
bg-gradient-to-r
from-sky-500
to-blue-700
px-10
py-4
text-white
font-semibold
hover:scale-105
transition
"

>

❤️ One Last Thing →

</button>

</div>

)

}
interface Props{

title:string;

subtitle?:string;

}

export default function SectionHeading({

title,

subtitle

}:Props){

return(

<div className="text-center mb-20">

<h2

className="

text-6xl

font-bold

font-[var(--font-dancing)]

"

>

{title}

</h2>

{subtitle&&(

<p

className="

mt-4

text-blue-200

"

>

{subtitle}

</p>

)}

</div>

)

}
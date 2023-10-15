import React from "react";

export default function Card({product})
{
    return(
<div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
<>
<img src={product.image} className="h-60 flex"/>
<h2>{product.title}</h2>
<h2>${product.price}</h2>
</>
</div>
    )
}

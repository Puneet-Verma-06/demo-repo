import { useState } from "react"
import { useRef } from "react";

export function Assignment7(){
    const[count , setCount] = useState(0)

    const countRerendered = useRef(0);

 function onclickhandler(){
    setCount(count+1);
 }

countRerendered.current = countRerendered.current+1
    return(
        <div>
            <p>{count}</p>
            <p>The number of re-rendered is{countRerendered.current}</p>
            <button onClick={onclickhandler}>re-render</button>
        </div>
    )
}
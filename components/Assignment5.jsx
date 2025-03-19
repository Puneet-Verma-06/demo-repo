import React, { useCallback } from "react";
import { useState } from "react";


export function Assignment5() {
    const [inputText, setInputText] = useState("");

    const showAlert = useCallback(()=> {
        alert(inputText);
    },[inputText])

    return( <div>
        <input type="text" value={inputText} onChange={(e)=>{
            setInputText(e.target.value);
        }}></input>
        <button onClick={showAlert}>Show Alert</button>
    </div>
    )
}
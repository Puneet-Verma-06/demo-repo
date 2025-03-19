import React, { useCallback } from "react";
import { useState, useMemo } from "react";

export function Assignment4() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
     setCount(function(currentcount){
        return currentcount+1;
     })   
    },[])

    const handleDecrement = useCallback(() =>{
        setCount(count => count - 1)
    }, [])

    return <div>
        <p>count : {count}</p>
        <CounterButton onIncrement={handleIncrement} onDecrement={handleDecrement}></CounterButton>
    </div>
}

const CounterButton = ({ onIncrement, onDecrement }) => {
    return <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
}
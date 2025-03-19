//               WITHOUT REACT

// import { useEffect } from "react"

// export function Assignment6() {

//     useEffect(() => {
//         document.getElementById("inputBox").focus()
//     }, [])

//     function onclickhandler() {
//         document.getElementById("inputBox").focus()
//     }

//     return (<div>
//         <input type="text" id="inputBox"></input>
//         <button onClick={onclickhandler}>focus</button>
//     </div>
//     )
// }




import { useEffect, useRef } from "react"

export function Assignment6() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function onclickhandler() {
        inputRef.current.focus();
    }

    return (<div>
        <input type="text" ref={inputRef}></input>
        <button onClick={onclickhandler}>focus</button>
    </div>
    )
}
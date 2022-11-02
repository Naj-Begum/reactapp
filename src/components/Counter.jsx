import React,{useState} from "react"
export const Counter=()=>{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Counter</h1>
            <button onClick={()=> count < 40  && setCount(count+1)}>inc</button>
            <h1>{count}</h1>
            <button onClick={()=> count > 0 && setCount(count-1)}>Dec</button>
        </div>
    )
}
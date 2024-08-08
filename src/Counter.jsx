import { useState } from "react";
export function Counter(){
    const [count , setCount] =useState(0);
    return(
        <>
          <h2>start</h2>
      <div>
        <button onClick={()=> setCount(count+1)}>Inc</button>
        <input value={count}/>
        <button onClick={()=> setCount(count-1)}>Dec</button>
      </div>
        </>
        
    )
}
export function Display(){
    return(
        <h2>display the vite@latest react</h2>
    )
}

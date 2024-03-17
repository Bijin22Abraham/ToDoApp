import React,{useState} from 'react'

function Counter() {
  const [count, setCount]=useState(0)
  return (
    <div>

      {/* update */}
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hello....I am componet(counter){count}</h1>
    </div>
  )
}

export default Counter


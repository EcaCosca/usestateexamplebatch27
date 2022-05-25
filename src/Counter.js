import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={()=>setCount(count-1)}>-</button>
        Counter: {count}
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(0)}>RESET</button>

    </div>
  )
}

export default Counter
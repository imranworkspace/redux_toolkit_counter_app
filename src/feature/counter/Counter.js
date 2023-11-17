import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,reset,incrementByAmount } from "./counterSlice"
import '../../mycss/index.css'
import { useState } from "react"

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    // for increment by value
    const [incrementValue,setincrementValue] = useState(0); 
    const addValue = Number(incrementValue)


    const resetAll=()=>{
      setincrementValue(0)
      dispatch(reset());
    }

  return (
    <>
        <selection className="myselection">
            <p>{count}</p>
            <div>
              <button onClick={()=>dispatch(increment())}>+</button>
              <button onClick={()=>dispatch(decrement())}>-</button>
            </div>

            <input type="text" value={incrementValue}
              onChange={(e)=>{setincrementValue(e.target.value)}} />

            <div>
              <button 
                onClick={()=>dispatch(incrementByAmount(addValue))}>
                  Add Amount</button>
              <button onClick={resetAll}>Reset</button>
            </div>
        </selection>
    </>
  )
}

export default Counter

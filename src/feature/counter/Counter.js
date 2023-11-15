import { UseSelector,useDispatch, useSelector } from "react-redux"
import { increment,decrement } from "./counterSlice"


const Counter = () => {
    const count = useSelector((state)=> state.Counter.count)
    const dispatch = useDispatch()

  return (
    <selection>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </selection>
  )
}

export default Counter

import { useSelector, useDispatch } from "react-redux"

//import action creater functions
import { increment, decrement, increaseByAmount} from "./counterSlice"


import { useState } from "react"

export default function Counter() {

    //read data from the redux store
    const count = useSelector((state) => state.counter.value)
    //function to send action to reducer
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>

            <button onClick={()=> dispatch(increment())}>Increase</button>
            <button onClick={()=> dispatch(decrement())}>Decrease</button>

            <input
                type='number'
                value={amount}
                onChange={(e)=> setAmount(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && dispatch(increaseByAmount(amount))}/>
        </div>
    )
}
import { useSelector, useDispatch } from "react-redux"

//import action creater functions
import { increment, decrement } from "./counterSlice"


export default function Counter() {

    //read data from the redux store
    const count = useSelector((state) => state.counter.value)
    //function to send action to reducer
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>

            <button onClick={()=> dispatch(increment())}>Increase</button>
            <button onClick={()=> dispatch(decrement())}>Decrease</button>
        </div>
    )
}
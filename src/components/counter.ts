import { RootState } from "@reduxjs/toolkit/query"
import {useSelector} from "react-redux"
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";

const counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>()
    return <div>
    <h1>{count}</h1>
    <div>
    <button onclick={() => dispatch(increment())}>Increment</button>
    <button onclick={() => dispatch(incrementAsync(10))}>Increment</button>
    <button onclick={() => dispatch(incrementByAmount(10))}>Increment</button>
    <button onclick={() => dispatch(decrement())}>Decrement</button>
    </div>
    </div>
}
export default counter


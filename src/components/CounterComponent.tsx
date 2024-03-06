import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
} from "../state/counter/counterSlice";

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const incrementToggle = () => {
    console.log("Increment");
    dispatch(increment());
  };

  const decrementToggle = () => {
    dispatch(decrement());
  };

  const incrementByAmountToggle = () => {
    dispatch(incrementByAmount(5));
  };

  const incrementAsyncToggle = () => {
    dispatch(incrementAsync(2));
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementToggle}>+1</button>
      <button onClick={decrementToggle}>-1</button>
      <button onClick={incrementByAmountToggle}>+5</button>
      <button onClick={incrementAsyncToggle}>+2</button>
    </>
  );
};

export default CounterComponent;

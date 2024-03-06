import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../state/counter/counterSlice";

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

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

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementToggle}>+1</button>
      <button onClick={decrementToggle}>-1</button>
      <button onClick={incrementByAmountToggle}>+5</button>
    </>
  );
};

export default CounterComponent;

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from "../state/store";
import {increment, decrement} from '../state/counter/counterSlice'

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  const incrementToggle = () => {
    console.log('Increment');
    dispatch(increment());
  }

  const decrementToggle = () => {
    dispatch(decrement());
  }


  return (
    <>
      <div>{count}</div>
      <button onClick={incrementToggle}>+</button>
      <button onClick={decrementToggle}>-</button>
    </>
  );
};

export default CounterComponent;

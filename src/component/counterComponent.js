import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
const CounterCompunent = () => {
  const [InputValue, setInputValue] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>counter</h1>
      <h3>counter is:{counter.value}</h3>
      <input
        type="text"
        value={InputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch(increment(Number(InputValue | 0) ))}>
        +
      </button>
      <button onClick={() => dispatch(decrement(Number(InputValue | 0) ))}>
        -
      </button>
    </>
  );
};

export default CounterCompunent;

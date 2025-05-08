import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./store/couterSlice";

function App() {
  const counter = useSelector((state) => state.counter); // Access state
  const dispatch = useDispatch(); // Access dispatch
  return (
    <>
      <h1>Redux Counter</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Value is {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;

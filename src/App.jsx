import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./store/couterSlice";

function App() {
  const counter = useSelector((state) => state.counter); // Access state
  const dispatch = useDispatch(); // Access dispatch
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Redux Counter</h1>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>

        <h3 className="text-2xl font-medium text-gray-700">
          Value is {counter}
        </h3>

        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => dispatch(reset())}
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default App;

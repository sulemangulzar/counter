import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert("Counter can't be negative");
    }
  };

  return (
    <>
      <div className="flex flex-col  items-center justify-center gap-24">
        <h1 className="text-center text-2xl font-semibold mt-4">Counter</h1>
        <div className="flex flex-col items-center justify-center gap-16 w-[400px] h-[400px] bg-black">
          <h1 className="text-6xl text-white">{count}</h1>
          <div className="flex items-center justify-center gap-12">
            <button
              onClick={addCount}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Increment
            </button>
            <button
              onClick={subCount}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

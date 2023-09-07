import React, { useState } from "react";
import "../styles/counter.css"

function Counter() {
  const [state, setState] = useState(0);

  function increment() {
    setState(state + 1);
  }
  function decrement() {
    setState(state - 1);
  }

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <div>{state}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

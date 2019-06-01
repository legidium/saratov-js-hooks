import React from "react";
import useCounter from "./use-counter";

function Counter() {
  const [count, increment, decrement] = useCounter();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </>
  );
}

export default Counter;

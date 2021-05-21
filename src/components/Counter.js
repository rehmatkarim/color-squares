import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`you have clicked ${count} times`);
  }, [count]);
  return (
    <>
      <p>you have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};
export default Counter;

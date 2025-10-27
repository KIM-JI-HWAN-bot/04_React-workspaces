import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>카운트</h2>
      <p>카운트: {count}</p>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={handlePlus}>+1</button>
    </>
  );
}

export default Count;

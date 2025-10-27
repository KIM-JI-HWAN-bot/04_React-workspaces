import React, { useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount(count + 1);
  };

  const handleCountDecease = () => {
    setCount(count - 1);
  };
  const handleCountReset = () => {
    setCount(0);
  };
  const handleCountIncreaseNum = (num) => {
    setCount(count + num);
  };

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={handleCountIncrease}>+1 증가</button>
      <button onClick={handleCountDecease}>-1 감소</button>
      <button onClick={handleCountReset}>초기화</button>
      <button onClick={() => handleCountIncreaseNum(5)}>+5 증가</button>
    </>
  );
}

export default Example1;

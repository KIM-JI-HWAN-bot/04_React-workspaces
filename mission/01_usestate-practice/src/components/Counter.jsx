import { useState } from "react";

function counter() {
  const [number, setNumber] = React.useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecerease = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <>
      <h2>카운터</h2>
      {/* 1) 카운터 컴포넌트 제작 */}
      <h2>카운터</h2>
      <h5 value="setCount">카운트: {number}</h5>
      <button onClick={handleDecerease}>-1</button>
      <button>초기화</button>
      <button onClick={handleIncrease}>+1</button>
      <hr />
    </>
  );
}

export default counter;

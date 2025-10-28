import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function After() {
  console.log("컴포넌트가 렌더링됨...");
  const [num1, setNum1] = useState(0);

  const operation1 = () => {
    console.log("함수 생성");
    for (let i = 0; i < 1000000000; i++) {}
    return num1 + 1;
  };

  // const result1 = operation1();
  const result1 = useMemo(() => {
    return operation1();
  }, [num1]);
  const [num2, setNum2] = useState(0);

  const operation2 = () => {
    console.log("함수 생성");
    return num2 + 2;
  };

  const result2 = operation2();
  return (
    <>
      <h2>오버헤드 연산</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <div>
        {num1} + 1 = {result1}
      </div>
      <h2>일반 연산</h2>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div>
        {num2} + 2 = {result2}
      </div>
    </>
  );
}

export default After;

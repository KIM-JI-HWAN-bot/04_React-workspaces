import React, { useState } from "react";

function Before() {
  console.log("컴포넌트가 렌더링됨...");
  const [num1, setNum1] = useState(0);

  const operation1 = () => {
    console.log("함수 생성");
    // for (let i = 0; i < 1000000000; i++) {}
    return num1 + 1;
  };

  const result1 = operation1();
  const [num2, setNum2] = useState(0);

  const operation2 = () => {
    console.log("함수 생성");
    return num2 + 2;
  };

  const result2 = operation2();
  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <div>
        {num1} + 1 = {result1}
      </div>
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

export default Before;

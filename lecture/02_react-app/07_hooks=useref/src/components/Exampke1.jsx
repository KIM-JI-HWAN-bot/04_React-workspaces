import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Exampke1() {
  console.log("컴포넌트 랜더링됨");
  const [count, setCount] = useState(0);

  const countReef = useRef(0);

  const handleCounstChange = () => {
    setCount(count + 1);
  };
  const handleRefChange = () => {
    countReef.current += 1;
  };
  return (
    <>
      <button onClick={handleCounstChange}>state(count)값변경</button>
      <button onClick={handleRefChange}>ref(countReef)값 변경</button>
      <h1>
        state(count)값: {count}, ref(countReef) : {countReef.current}
      </h1>
    </>
  );
}

export default Exampke1;

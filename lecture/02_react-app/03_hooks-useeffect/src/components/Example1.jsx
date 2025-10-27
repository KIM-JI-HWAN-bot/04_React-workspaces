import { useEffect, useState } from "react";

function Example1() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Example1 컴포넌트가 랜더링됨");
  });

  const handleNowClick = (e) => {
    setNow(new Data().toLocaleTimeString());
  };

  return (
    <div>
      <button onClick={handleNowClick}>Now </button>
      <h2>현재 시간: {now}</h2>
    </div>
  );
}

export default Example1;

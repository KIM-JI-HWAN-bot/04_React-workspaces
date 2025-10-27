import React, { useEffect, useState } from "react";

function Example4() {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log("setup 함수 실행");
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        // setSeconds(seconds + 1);
        setSeconds((prev) => prev + 1);
      }, [1000]);
    }

    // cleanup함수 : 컴포넌트가 Unmount 또는 useehhect와 setUp 다시 실행허가 "전"
    return () => {
      console.log("clean up 함수 실행");
      // 현재 실행된 타이머 정리
      clearInterval(intervalId);
    };
  }, [isRunning]);

  // 타이머 정리하지 않고있을떄에 문제점
  // 1. 정지 상태(false)로 변겅되도 현재 타이머가 멈투지 않음
  // 2. 다시 실행 상태 (true)로 변경되면 타이머가 중복으로 실행됨
  // => 메오리 누수

  return (
    <div>
      <h2>타이머</h2>
      <h3>{seconds}</h3>
      <button onClick={() => setIsRunning(true)}>시작</button>
      <button onClick={() => setIsRunning(false)}>중지</button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        초기화
      </button>
      <p>상태: {isRunning ? "실행중" : "정지됨"}</p>
    </div>
  );
}

export default Example4;

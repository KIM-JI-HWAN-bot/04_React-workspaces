import React, { useReducer } from "react";

function reducerCount(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default:
      return state;
  }
}

function Example2() {
  const [count, dispatch] = useReducer(reducerCount, 0);

  return (
    <>
      <h2>카운터: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1 증가</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1 감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      <button onClick={() => dispatch({ type: "ADD", payload: 5 })}>
        +5증가
      </button>
      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
        +10증가
      </button>
      <button onClick={() => dispatch({ type: "MINUS", payload: 5 })}>
        -5감소
      </button>
    </>
  );
}

export default Example2;

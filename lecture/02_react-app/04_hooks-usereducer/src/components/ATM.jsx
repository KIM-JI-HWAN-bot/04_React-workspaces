import React, { useReducer, useState } from "react";

function bankReducer(state, action) {
  switch (action.type) {
    case "입금":
      return { ...state, balance: state.balance + action.payload };
    case "출금":
      return { ...state, balance: state.balance - action.payload };
    default:
      return { ...state };
  }
}

function ATM() {
  const [account, dispatch] = useReducer(bankReducer, {
    accountId: "123 - 456 - 789",
    balance: 10000,
  });
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h2>현재 계좌 번호: {account.accountId}</h2>
      <h2>현재 계좌 잔액: {account.balance}</h2>
      <input
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />
      <button onClick={() => dispatch({ type: "입금", payload: amount })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "출금", payload: amount })}>
        출금
      </button>
    </>
  );
}

export default ATM;

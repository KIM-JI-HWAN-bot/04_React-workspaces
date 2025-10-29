import React from "react";
import { useOutletContext } from "react-router-dom";

function Seting() {
  const { numOfUsers, numOfOrders } = useOutletContext();
  return (
    <div>
      <h5>대시보드 홈</h5>
      <p>유저 수 : {numOfUsers}</p>
      <p>주문 수 : {numOfOrders}</p>
    </div>
  );
}

export default Seting;

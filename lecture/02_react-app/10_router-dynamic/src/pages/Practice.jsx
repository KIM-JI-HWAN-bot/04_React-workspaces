import React from "react";
import { useParams } from "react-router-dom";

function Practice() {
  const { category, id } = useParams();

  return (
    <div>
      <h5>연습 페이지</h5>
      <p>현재 카테고리: {category}</p>
      <p>현제 아이디: {id}</p>
    </div>
  );
}

export default Practice;

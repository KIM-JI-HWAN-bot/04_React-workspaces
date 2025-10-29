import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [inputValue, setInputValue] = useState({
    category: "",
    id: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = () => {
    navigate(`/practice/${inputValue.category}/${inputValue.id}`);
  };

  return (
    <div>
      <h5>Home</h5>
      <button onClick={() => (location.href = "/about")}>소개페이지</button>
      <button onClick={() => navigate("/profile/1")}>1번 회원 프로필</button>
      <button onClick={() => navigate("/profile/2")}>2번 회원 프로필</button>
      <br />
      <br />
      <div>
        키테고리:{" "}
        <input
          type="text"
          id="category"
          value={inputValue.category}
          onChange={handleInputChange}
        />
        <br />
        아이디:{" "}
        <input
          type="text"
          id="id"
          value={inputValue.id}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleClick}>조회</button>
      </div>
    </div>
  );
}

export default Home;

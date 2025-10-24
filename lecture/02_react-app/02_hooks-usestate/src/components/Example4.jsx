import React, { useState } from "react";

function Example4() {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handleUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    if (!userId.trim() || !userPwd.trim()) {
      e, preventDafault();
      alertI("입력값이 누락되었습니다.");
      return;
    }
    alert(
      `유효성검사 통과! 로그인 제출 진행됩니다. 아이디: ${userId},비번: ${userPwd}`
    );
  };
  return (
    <>
      <h2>종합예시 - 로그인 폼</h2>

      <form action="/login" method="post" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="아이디 입력"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력"
          name="userPwd"
          value={userPwd}
          onChange={handleUserPwdChange}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
      <hr />
    </>
  );
}

export default Example4;

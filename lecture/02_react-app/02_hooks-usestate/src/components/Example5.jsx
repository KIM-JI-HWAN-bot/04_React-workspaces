import React, { useState } from "react";

function Example5() {
  const [user, setUser] = useState({
    userid: " ",
    userPwd: "",
  });
  // const handleUserIdChange = (e) => {
  //   setUser({
  //     ...user,
  //     userId: e.target.value,
  //   });

  // const handleUserChange = (e) => {
  //   setUser({
  //     ...user,
  //     userPwd: e.target.value,
  //   });
  // };

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    if (!user.userId.trim() || !user.userPwd.trim()) {
      e, preventDafault();
      alertI("입력값이 누락되었습니다.");
      return;
    }
    alert(
      `유효성검사 통과! 로그인 제출 진행됩니다. 아이디: ${user.userId},비번: ${user.userPwd}`
    );
  };
}

return (
  <>
    <h2>종합예시 - 로그인 폼 (사용자 입력값을 하나의 state변수로 관리)</h2>
    <form action="/login" method="post" onSubmit={handleLoginSubmit}>
      <input
        type="text"
        placeholder="아이디 입력"
        name="userId"
        value={user.userId}
        onChange={handleUserChange}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호 입력"
        name="userPwd"
        value={user.userPwd}
        onChange={handleUserChange}
      />
      <br />
      <button type="submit">로그인</button>
    </form>
  </>
);

export default Example5;

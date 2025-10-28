import React, { useState } from "react";

function Example2() {
  const [user, setUser] = useState({ name: "", age: 0, email: "" });
  const [name, setName] = useState("");

  const handleUserChange = (e) => {
    const type = e.target.name;

    if (type === "name") {
      // 이름 관련 처리
      setUser((prev) => {
        return { ...prev, name: e.target.value };
      });
    } else if (type === "age") {
    } else if (type === "email") {
    }
  };

  const handleChangeUserName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h2>사용자 정보</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChangeUserName(e)}
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleUserChange}
      />
      <input type="email" />

      <h4>프로필</h4>
    </>
  );
}

export default Example2;

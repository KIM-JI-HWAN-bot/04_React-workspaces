import React, { useState } from "react";

function Example2() {
  const [user, setUser] = useState("");
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <h2>사용자 정보</h2>
      <input type="text" value={user} onChange={handleUserChange} />
      <input type="number" value={user} onChange={handleUserChange} />
      <input type="email" />

      <h4>프로필</h4>
      <h5>{user}</h5>
    </>
  );
}

export default Example2;

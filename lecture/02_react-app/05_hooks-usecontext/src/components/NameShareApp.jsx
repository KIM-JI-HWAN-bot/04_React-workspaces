import React from "react";
import DisplayNmae from "./DisplayNmae";
import ChangeName from "./ChangeName";
import { useState } from "react";

function NameShareApp() {
  const names = ["이영희", "김철수", "박민수", "홍길동"];
  const [currentName, setCurrentName] = useState("홍길동");
  return (
    <>
      <h1>이름 공유 앱</h1>
      <DisplayNmae currentName={currentName} />

      <ChangeName setCurrentName={setCurrentName} names={names} />
    </>
  );
}

export default NameShareApp;

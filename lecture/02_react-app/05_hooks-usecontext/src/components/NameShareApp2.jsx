import React, { useState, createContext } from "react";
import ChangeName2 from "./ChangeName2";
import DisplayName2 from "./DisplayName2";

export const NameContext = createContext();

function NameShareApp2() {
  const names = ["이영희", "김철수", "박민수", "홍길동"];
  const [currentName, setCurrentName] = useState("홍길동");

  return (
    <>
      <h1>이름 공유 앱</h1>
      <NameContext.Provider
        value={{
          names,
          currentName,
          setCurrentName,
        }}
      >
        <DisplayName2 />
        <ChangeName2 />
      </NameContext.Provider>
    </>
  );
}

export default NameShareApp2;

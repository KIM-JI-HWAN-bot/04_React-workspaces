import React from "react";

function Example2() {
  const [isCheckd, setIsCheckd] = React.useState(false);
  return (
    <>
      <h2>체크박스와 stat</h2>
      <input
        type="checkbox"
        id="chk"
        checked={isCheckd}
        onChange={(e) => setIsCheckd(e.target.checked)}
      />
      <label htmlFor="chk">체크박스</label>
      <h5>체크부여: {isCheckd ? "체크됨" : "체크안됨"}</h5>
      <hr />
    </>
  );
}

export default Example2;

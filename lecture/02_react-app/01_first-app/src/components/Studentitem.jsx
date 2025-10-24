import React from "react";

function Studentitem({ stu }) {
  return (
    <p>
      이릅: {stu.name}
      <br />
      나이: {stu.age}
    </p>
  );
}

export default Studentitem;

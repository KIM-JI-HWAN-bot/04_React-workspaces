import { useEffect } from "react";
import { useRef } from "react";

function Example2() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default Example2;

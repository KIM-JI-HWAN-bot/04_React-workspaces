import React, { useState } from "react";

function Example6() {
  const [inputValue, setInputValue] = useState("");
  const [animals, setAnimals] = useState([]);
  const handleAddAnimal = () => {
    // animals.push(inputValue);
    setAnimals([...animals, inputValue]);
  };
  return (
    <>
      <h2>배열활용</h2>
      <input
        type="text"
        placeholder="주가할 동물 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddAnimal}>추가</button>

      <h5>추가된 동물</h5>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </>
  );
}

export default Example6;

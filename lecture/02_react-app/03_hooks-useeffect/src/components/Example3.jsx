import React, { useEffect, useState } from "react";

function Example3() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  useEffect(() => {
    console.log("Example3의 uweEffect의 setUp함수 동작");
  }, [date.month, date.day]);

  const handleDateChange = (e) => {
    setDate({
      ...date,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="년도"
        id="year"
        value={date.year}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="월"
        id="month"
        value={date.month}
        onChange={handleDateChange}
      />
      <input
        type="text"
        placeholder="일"
        id="day"
        value={date.day}
        onChange={handleDateChange}
      />

      <h2>
        현재날짜: {date.year}년 {date.month}월 {date.day}일
      </h2>
    </div>
  );
}

export default Example3;

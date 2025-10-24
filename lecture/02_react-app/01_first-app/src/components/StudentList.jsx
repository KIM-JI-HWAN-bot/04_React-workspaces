import React from "react";
import Studentitem from "./Studentitem";

function StudentList() {
  const students = [
    ,
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "이길동", age: 26 },
    { id: 3, name: "고길동", age: 29 },
  ];

  return (
    <>
      <h2> 학생 목록</h2>
      <div>
        <p>
          {students.map((student) => (
            <Studentitem key={student.id} stu={student} />
          ))}
        </p>
      </div>
    </>
  );
}

export default StudentList;

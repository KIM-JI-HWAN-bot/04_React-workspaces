import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { uid } = useParams();

  return (
    <div>
      <h5>
        프로팔페아지
        <p>현제 페이지는 {uid}번 회원번호의 사용자 프로필 페이지입니다.</p>
      </h5>
    </div>
  );
}

export default Profile;

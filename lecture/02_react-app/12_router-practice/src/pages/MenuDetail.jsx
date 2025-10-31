import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../api/MenuAPI";

function MenuDetail() {
  const [menu, setMenu] = useState();
  const { id } = useParams();

  useEffect(() => {
    setMenu(getMenuDetail(id));
  }, []);

  return (
    <>
      <h3>메뉴 상세 페이지</h3>
      {menu ? (
        <div>
          <h4>메뉴명: {menu.menuName}</h4>
          <img src={menu.detail.image} alt={menu.menuName} width="300px" />
          <h4>가격: {menu.menuPrice.toLocaleString()}원</h4>
          <h4>카테고리: {menu.menucategoryName}</h4>
          <h4>주문가능여부: {menu.menuisOrderable ? 가능 : 불가능}</h4>
          <h4>상세설명: {menu.detail.description}</h4>
        </div>
      ) : (
        <div>조회된 메뉴가 없습니다.</div>
      )}
    </>
  );
}

export default MenuDetail;

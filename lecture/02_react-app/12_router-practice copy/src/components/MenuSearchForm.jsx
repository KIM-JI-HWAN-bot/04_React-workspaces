import React from "react";

function MenuSearchForm() {
  return (
    <div style={{ display: "flex", gap: "5px", margin: "10px" }}>
      <select name="condition">
        <option value="">메뉴명</option>
        <option value="">카테고리명</option>
      </select>
      <input type="search" name="kyword" placeholder="검색어를 입력하시오." />
      <button>검색</button>
    </div>
  );
}

export default MenuSearchForm;

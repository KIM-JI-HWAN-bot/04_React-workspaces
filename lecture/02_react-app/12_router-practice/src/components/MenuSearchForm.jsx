import React, { useState } from "react";

function MenuSearchForm() {
  const [searchInput, setSearchInput] = useState({
    condition: "menuName",
    keyword: "",
  });
  return (
    <div style={{ display: "flex", gap: "5px", margin: "10px" }}>
      <select name="condition">
        <option value="">메뉴명</option>
        <option value="">카테고리명</option>
      </select>
      <button>검색</button>
    </div>
  );
}

export default MenuSearchForm;

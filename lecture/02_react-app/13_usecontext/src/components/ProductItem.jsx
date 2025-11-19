import React from "react";
import "./ProductItem.css";
function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString()}원</p>
      <button className="product-add-button">장바구니에 추가</button>
    </div>
  );
}

export default ProductItem;

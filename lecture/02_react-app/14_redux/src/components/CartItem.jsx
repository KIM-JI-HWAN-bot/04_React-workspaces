import "./CartItem.css";
import "./CartItme.css";
import { useDispatch } from "react-redux";

// <CartItem item={장바구니아이템객체} />
function CartItem({ item }) {
  if (!item) return null; // item이 없으면 렌더하지 않음

  const dispatch = useDispatch();

  const handleItemRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleItemQuantityIncrease = () => {
    dispatch(INCREASE_QUANTITY(item.id));
  };

  const handleItemQuantityDecrease = () => {
    dispatch(DECREASE_QUANTITY(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">{item.price.toLocaleString()}원</p>
      </div>

      <div className="cart-item-controls">
        <button
          className="cart-item-quantity-button"
          onClick={handleItemQuantityDecrease}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="cart-item-quantity-button"
          onClick={handleItemQuantityIncrease}
        >
          +
        </button>

        <button className="cart-item-remove-button" onClick={handleItemRemove}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;

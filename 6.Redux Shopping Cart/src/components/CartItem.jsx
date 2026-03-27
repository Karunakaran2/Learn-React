import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-item-info">
        <p className="cart-item-title">
          {item.title.length > 40
            ? item.title.slice(0, 40) + "..."
            : item.title}
        </p>
        <p className="cart-item-price">
          ${(item.price * item.quantity).toFixed(2)}
          <span className="unit-price"> (${item.price.toFixed(2)} each)</span>
        </p>
      </div>

      {/* Quantity controls */}
      <div className="qty-controls">
        <button onClick={() => dispatch(decreaseQty(item))}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item))}>+</button>
      </div>

      <button
        className="btn-remove"
        onClick={() => dispatch(removeFromCart(item))}
      >
        🗑
      </button>
    </div>
  );
};

export default CartItem;

import React from "react";
// import {
//   increaseQty,
//   decreaseQty,
//   removeFromCart,
// } from "../features/cart/cartSlice";
// import { useAppDispatch } from "../hooks/redux";
import type { CartItem as ICartItem } from "../types";
import { useCartStore } from "../store/useCartStore";

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const increaseQty = useCartStore((state) => state.increaseQuantity);
  const decreaseQty = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const dispatch = useAppDispatch();
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
        <button onClick={() => decreaseQty(item)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item)}>+</button>
      </div>

      <button className="btn-remove" onClick={() => removeFromCart(item)}>
        🗑
      </button>
    </div>
  );
};

export default CartItem;

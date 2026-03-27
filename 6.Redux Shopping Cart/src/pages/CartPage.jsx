import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  increaseQty,
  decreaseQty,
  selectCartCount,
  selectCartTotalPrice,
  clearCart,
} from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";

const CartPage = ({ setPage }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  console.log("cartItems", cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <p>🛒 Your cart is empty.</p>
        <button className="btn-add" onClick={() => setPage("products")}>
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="cart-header">
        <h2>Your Cart ({cartCount} items)</h2>
        <button className="btn-clear" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Items ({cartCount})</span>
          <span>${cartTotalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${cartTotalPrice.toFixed(2)}</span>
        </div>

        {/* 🏋️ YOUR CHALLENGE: implement checkout flow */}
        <button className="btn-checkout">Checkout →</button>
      </div>
    </div>
  );
};

export default CartPage;

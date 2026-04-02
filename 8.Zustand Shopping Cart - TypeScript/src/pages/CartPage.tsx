// import {
//   selectCartItems,
//   selectCartCount,
//   selectCartTotalPrice,
//   clearCart,
// } from "../features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import type { CartItem as ICartItem } from "../types";
import CartItem from "../components/CartItem";
import { useCartStore } from "../store/useCartStore";

const CartPage = ({ setPage }: { setPage: (page: string) => void }) => {
  // const dispatch = useAppDispatch();
  // const cartItems: ICartItem[] = useAppSelector(selectCartItems);
  // const cartCount: number = useAppSelector(selectCartCount);
  // const cartTotalPrice: number = useAppSelector(selectCartTotalPrice);
  // console.log("cartItems", cartItems);

  const cartItems = useCartStore((state) => state.items);
  const cartCount = useCartStore((state) => state.getCartItemsCount());
  const cartTotalPrice = useCartStore((state) => state.getCartTotal());
  const clearCart = useCartStore((state) => state.clearCart);

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
        <button className="btn-clear" onClick={() => clearCart()}>
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

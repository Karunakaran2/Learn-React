import React from "react";
import type { NavProps } from "../types";
import { useCartStore } from "../store/useCartStore";

const Navbar: React.FC<NavProps> = ({ setPage }) => {
  const cartItems = useCartStore((state) => state.items);
  return (
    <nav className="navbar">
      <h1 className="logo">Shopping Cart</h1>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setPage("products")}>
          Products
        </button>
        <button className="nav-btn" onClick={() => setPage("cart")}>
          Cart{" "}
          <span className="cart-badge bg-danger">{cartItems?.length || 0}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

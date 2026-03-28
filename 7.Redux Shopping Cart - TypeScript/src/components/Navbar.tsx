import React from "react";
import { useAppSelector } from "../hooks/redux";
import { selectCartItems } from "../features/cart/cartSlice";
import type { NavProps } from "../types";

const Navbar: React.FC<NavProps> = ({ setPage }) => {
  const cartItems = useAppSelector(selectCartItems);
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

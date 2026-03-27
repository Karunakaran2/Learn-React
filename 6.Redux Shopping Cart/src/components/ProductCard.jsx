import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(product));
  };
  const cartItems = useSelector(selectCartItems);
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <h3>
          {product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </h3>
        <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>

      <button
        onClick={handleAdd}
        className={inCart ? "btn-added" : "btn-add"}
        disabled={inCart}
      >
        {inCart ? "✓ Added" : "Add to Cart"}
      </button>

      {/* {inCart ? toast.success("Item added to cart") : null} */}
    </div>
  );
};

export default ProductCard;

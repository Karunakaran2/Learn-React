import React from "react";
import { Product } from "../types";
import { useCartStore } from "../store/useCartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const dispatch = useAppDispatch();
  // const handleAdd = () => {
  //   dispatch(addToCart(product));
  // };
  // const cartItems: CartItem[] = useAppSelector(selectCartItems);
  // const inCart = cartItems.some((item) => item.id === product.id);

  const addToCart = useCartStore((state) => state.addToCart);
  const inCart = useCartStore((state) =>
    state.items.some((item) => item.id === product.id),
  );

  const handleAddToCart = () => {
    addToCart(product);
  };

  const inWishlist = useCartStore((state) =>
    state.wishlist.some((item) => item.id === product.id),
  );
  const addToWishlist = useCartStore((state) => state.addToWishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product);
  };

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

      <div className="product-actions">
        <button
          onClick={handleAddToWishlist}
          className={inWishlist ? "btn-added" : "btn-add"}
          disabled={inWishlist}
        >
          {inWishlist ? "✓ Added" : "Add to Wishlist"}
        </button>
        <button
          onClick={handleRemoveFromWishlist}
          className={inWishlist ? "btn-added" : "btn-add"}
          disabled={!inWishlist}
        >
          {inWishlist ? "✓ Added" : "Remove from Wishlist"}
        </button>
      </div>
      <button
        onClick={handleAddToCart}
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

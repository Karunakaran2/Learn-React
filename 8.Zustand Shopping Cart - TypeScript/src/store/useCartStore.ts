import { create } from "zustand";
import { CartItem, Product } from "../types";
import { devtools, persist } from "zustand/middleware";

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;

  // Wishlist
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  clearWishlist: () => void;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addToCart: (product: Product) => {
          const { items } = get();
          const existingItem: CartItem | undefined = items.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            set((state: CartStore) => ({
              items: state.items.map((item: CartItem) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            }));
          } else {
            set((state: CartStore) => ({
              items: [...state.items, { ...product, quantity: 1 }],
            }));
          }
        },
        removeFromCart: (product: Product) => {
          set((state: CartStore) => ({
            items: state.items.filter(
              (item: CartItem) => item.id !== product.id,
            ),
          }));
        },
        clearCart: () => {
          set(() => ({
            items: [],
          }));
        },
        getCartTotal: () => {
          const { items } = get();
          return items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        getCartItemsCount: () => {
          const { items } = get();
          return items.reduce((total, item) => total + item.quantity, 0);
        },
        increaseQuantity: (product: Product) => {
          const { items } = get();
          const existingItem = items.find((item) => item.id === product.id);
          if (existingItem) {
            set((state) => ({
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            }));
          } else {
            set((state) => ({
              items: [...state.items, { ...product, quantity: 1 }],
            }));
          }
        },
        decreaseQuantity: (product: Product) => {
          const { items } = get();
          const existingItem = items.find((item) => item.id === product.id);
          if (existingItem) {
            if (existingItem.quantity === 1) {
              set((state) => ({
                items: state.items.filter((item) => item.id !== product.id),
              }));
            } else {
              set((state) => ({
                items: state.items.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
                ),
              }));
            }
          }
        },

        // Wishlist
        wishlist: [],
        addToWishlist: (product: Product) => {
          const existingItem = get().wishlist.find(
            (item: Product) => item.id === product.id,
          );
          if (!existingItem) {
            set((state: CartStore) => ({
              wishlist: [...state.wishlist, product],
            }));
          }
        },
        removeFromWishlist: (product: Product) => {
          set((state: CartStore) => ({
            wishlist: state.wishlist.filter((item) => item.id !== product.id),
          }));
        },
        clearWishlist: () => {
          set(() => ({
            wishlist: [],
          }));
        },
      }),
      {
        name: "cart-storage",
      },
    ),
  ),
);

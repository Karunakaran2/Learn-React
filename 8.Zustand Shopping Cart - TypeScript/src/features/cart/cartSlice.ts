import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CartItem, Product } from "../../types";
import { RootState } from "../../store/store";
// import { RootState } from "@reduxjs/toolkit/query";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        existingItem.quantity < 10
          ? existingItem.quantity++
          : toast.error("Maximum quantity reached");
      }
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        existingItem.quantity === 1
          ? (state.items = state.items.filter(
              (item) => item.id !== action.payload,
            ))
          : existingItem.quantity--;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0,
  );
export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;

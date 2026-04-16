import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/products/productApi";
import cartReducer from "../features/cart/cartSlice";
import { loadState, localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      localStorageMiddleware,
    ),
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

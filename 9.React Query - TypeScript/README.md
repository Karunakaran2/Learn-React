# Redux Shopping Cart — Week 4 Starter

## Folder Structure

```
src/
 ├── store/
 │     └── store.js              ← configureStore (cart + RTK Query)
 │
 ├── features/
 │     ├── cart/
 │     │     └── cartSlice.js    ← createSlice: addItem, removeItem, increaseQty, decreaseQty, clearCart + selectors
 │     └── products/
 │           └── productApi.js  ← createApi: RTK Query endpoints
 │
 ├── components/
 │     ├── Navbar.jsx            ← useSelector(selectCartCount)
 │     ├── ProductCard.jsx       ← dispatch(addItem)
 │     └── CartItem.jsx          ← dispatch(increaseQty / decreaseQty / removeItem)
 │
 ├── pages/
 │     ├── ProductsPage.jsx      ← useGetProductsQuery, useGetCategoriesQuery
 │     └── CartPage.jsx          ← useSelector(selectCartItems / selectCartTotal)
 │
 └── App.jsx                     ← Page routing (products / cart)
```

## Setup

```bash
npm install
npm run dev
```

## Redux Data Flow (memorize this)

```
Component
   ↓ dispatch(action)
 Store
   ↓ reducer runs
 New State
   ↓ useSelector re-reads
Component re-renders
```

## Key Concepts In This Project

| Concept         | Where Used            |
| --------------- | --------------------- |
| createSlice     | cartSlice.js          |
| configureStore  | store.js              |
| createApi       | productApi.js         |
| useSelector     | Navbar, CartPage      |
| useDispatch     | ProductCard, CartItem |
| Selectors       | cartSlice.js (bottom) |
| RTK Query hooks | ProductsPage          |

## Your Practice Challenges

1. Persist cart in localStorage (hint: use redux-persist OR write middleware)
2. Add product quantity limit (max 10 per item)
3. Add a "Remove all" button per item type
4. Add a product search bar (filter client-side with useMemo)
5. Add a toast notification when item is added to cart
6. Show total savings if you add a fake "original price"
7. Convert to TypeScript (Week 3 practice!)

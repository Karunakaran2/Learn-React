import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [page, setPage] = useState("products");

  return (
    <>
      <div className="App">
        <Navbar setPage={setPage} />
        <h1>Redux Shopping Cart</h1>
        <main className="main-content">
          {page === "products" && <ProductsPage />}
          {page === "cart" && <CartPage setPage={setPage} />}
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;

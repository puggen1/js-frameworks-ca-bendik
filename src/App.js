import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./theme/style.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Layout>
  );
}

export default App;

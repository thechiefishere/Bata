import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/actions";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Router>
      <section className="app">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;

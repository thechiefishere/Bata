import { useEffect } from "react";
import { AppProvider } from "./context";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/actions";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <BrowserRouter>
      <AppProvider>
        <section className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </section>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

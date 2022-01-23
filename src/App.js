import { useEffect } from "react";
import { AppProvider } from "./context";
import { useDispatch } from "react-redux";
import { addData, setLoadingState, fetchData } from "./store/actions";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <AppProvider>
      <section className="app">
        <Header />
        <Products />
      </section>
    </AppProvider>
  );
}

export default App;

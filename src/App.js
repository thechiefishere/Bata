import { useEffect } from "react";
import { AppProvider } from "./context";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { addData } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData());
  });

  return (
    <AppProvider>
      <section className="app">
        <Header />
      </section>
    </AppProvider>
  );
}

export default App;

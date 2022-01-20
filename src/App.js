import { AppProvider } from "./context";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <section className="app">
        <Header />
      </section>
    </AppProvider>
  );
}

export default App;

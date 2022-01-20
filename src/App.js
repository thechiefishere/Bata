import { AppProvider } from "./context";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <section>
        <Header />
      </section>
    </AppProvider>
  );
}

export default App;

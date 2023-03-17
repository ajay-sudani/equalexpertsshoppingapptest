import "./App.css";
import Header from "./components/header";
import Products from "./components/products";
function App() {
  return (
    <main className="main">
      <div className="container">
        <Header />
        <Products />
      </div>
    </main>
  );
}

export default App;

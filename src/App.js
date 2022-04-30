// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Order from "./Order";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Order />
      </CartProvider>
    </>
  );
}

export default App;

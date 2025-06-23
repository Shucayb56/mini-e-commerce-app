import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
// import ProductList from "./products/ProductList";
import Cart from "./features/Cart";

import { Toaster } from "react-hot-toast";
// import Banner from "./components/Banner";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;

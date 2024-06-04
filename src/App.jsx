import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import ProductsList from "./Components/ProductsList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

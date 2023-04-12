import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';
import Dogs from './components/Dogs';
import Home from './components/Home';
import { useState } from 'react';
// import CompactCart from './components/CompactCart';
// import { FaShoppingCart } from 'react-icons/fa';
import './styles/styles.css';

export default function App() {

  // const [isCartOpen, setIsCartOpen] = useState(false)

  // const handleCartToggle = () => {
  //   setIsCartOpen(!isCartOpen);
  // };

  return (
    <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/dogs" element={<Dogs />}/>
          </Routes>
        </Router>
      {/* <div className="cart-icon-container" onClick={handleCartToggle}>
        <FaShoppingCart />
      </div>
      <CompactCart isCartOpen={isCartOpen} handleCartToggle={handleCartToggle} /> */}
    </div>
  );
}

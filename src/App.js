import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import './styles/styles.css'

export default function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      <Header />
      <div className="cart-icon-container" onClick={handleCartToggle}>
        <FaShoppingCart />
      </div>
      <Cart isCartOpen={isCartOpen} handleCartToggle={handleCartToggle} />
    </div>
  );
}

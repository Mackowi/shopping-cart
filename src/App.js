import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cart from './components/Cart';
import './styles/styles.css'

export default function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartToggle = () => {
    console.log('gowno')
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      App
      <div className="cart-icon-container" onClick={handleCartToggle}>
        <FaBeer />
      </div>
      <Cart isCartOpen={isCartOpen} handleCartToggle={handleCartToggle} />
    </div>
  );
}

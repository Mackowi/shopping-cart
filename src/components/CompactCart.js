import React from 'react'
import { Link } from 'react-router-dom'

export default function CompactCart({ isCartOpen, handleCartToggle }) {
  
  return (
    <div className={`cart ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-icon" onClick={handleCartToggle}>
        {/* Contents of the cart icon */}
        Cart Icon
      </div>
      <div className="cart-contents">
        {/* Contents of the shopping cart */}
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </div>
  );
};
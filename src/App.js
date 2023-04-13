import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';
import Dogs from './components/Dogs';
import Home from './components/Home';
import { useState } from 'react';
import dogs from './dogs/dogItems'
import './styles/styles.css';

export default function App() {

  const [cartItems, setCartItems] = useState([])

  function addToCart(dog) {
    setCartItems(() => [
      ...cartItems,
      dog
    ])
  }
  
  function removeFromCart(dog) {
    const index = cartItems.findIndex(item => item.name === dog.name)
    const itemsBefore = cartItems.slice(0, index);
    const itemsAfter = cartItems.slice(index + 1);
    const newCartItems = [...itemsBefore, ...itemsAfter]
    setCartItems(() => newCartItems)
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <div className="app">
        <Router>
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}/>}/>
            <Route path="/dogs" element={<Dogs dogs={dogs} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
          </Routes>
        </Router>
    </div>
  );
}

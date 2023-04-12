import React from 'react'
import Item from './Item'

export default function Dogs({ dogs, cartItems, addToCart, removeFromCart }) {

  return (
    <div className='dogs-container'>
      <h2>Our bois:</h2>
      <ul className='dogs'>
        {dogs.map(dog => (
          <Item key={dog.id} dog={dog} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
        ))}
      </ul>
    </div>
  )
}

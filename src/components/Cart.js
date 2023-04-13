import React from 'react'
import Item from './Item'

export default function Cart({ cartItems, removeFromCart, clearCart}) {
  
  function sumPrice() {
    const totalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.price ,0).toFixed(2)
    return totalPrice
  }
  
  if (!cartItems.length) {
    return (
      <div className='cart' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className='cart-item-container'>
        <p className='empty-cart-msg'>Nothing in you cart</p>
      </div>
    </div>
    )
  } else {
    return (
      <div className='cart'>
        <div className='cart-item-container'>
          <ul className='cart-item-list'>
            {cartItems.map(dog => (
              <Item key={dog.id} dog={dog} cartItems={cartItems} removeFromCart={removeFromCart} dogsPage={false}/>
            ))}
          </ul>
          <div className='cart-options'>
            {cartItems.length ? <p>Total: {sumPrice()}$</p> : null}
            {cartItems.length ? <button onClick={clearCart}>Clear cart</button> : null}
            {cartItems.length ? <button>Proceed</button> : null}
          </div>
        </div>
      </div>
    )
  }
}
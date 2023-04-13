import React from 'react'

export default function Item({ dog, cartItems, addToCart, removeFromCart, dogsPage = true }) {

  const dogItemCount = cartItems.filter(item => item.name === dog.name).length;

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  function className() {
    if (dogsPage) {
      return 'dogs-item'
    } else {
      return 'cart-item'
    }
  }

  return (
    <li className={className()}>
      <img src={dog.img} alt={dog.name}></img>
      <div className='item-details'>
        <h3>{capitalize(dog.name)}</h3>
        <p>Price: {dog.price}$</p>
        {dogsPage ? <button onClick={() => addToCart(dog)}>Add to cart</button> : null}
        {dogItemCount ? <button onClick={() => removeFromCart(dog)}>Remove from cart</button> : null}
      </div>
    </li>
  )
}
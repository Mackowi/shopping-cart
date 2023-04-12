import React from 'react'

export default function Item({ dog, cartItems, addToCart, removeFromCart }) {

  const jamnikItemCount = cartItems.filter(item => item.name === dog.name).length;

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <li className='item'>
      <img src={dog.img} alt={dog.name}></img>
      <div className='item-details'>
        <h3>{capitalize(dog.name)}</h3>
        <p>Price: {dog.price}$</p>
        <button onClick={() => addToCart(dog)}>Add to cart</button>
        {jamnikItemCount ? <button onClick={() => removeFromCart(dog)}>Remove from cart</button>:null}
      </div>
    </li>
  )
}
import React from 'react'

export default function Item({ dog }) {

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <li className='item'>
      <img src={dog.img} alt={dog.name}></img>
      <div className='item-details'>
        <h3>{capitalize(dog.name)}</h3>
        <p>Price: {dog.price}$</p>
        <button>Add to cart</button>
      </div>
    </li>
  )
}
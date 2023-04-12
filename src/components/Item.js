import React from 'react'

export default function Item({ dog }) {

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <div className='item'>
      <img src={dog.img} alt={dog.name}></img>
      <h3>{capitalize(dog.name)}</h3>
      <p>{dog.price}$</p>
    </div>
  )
}
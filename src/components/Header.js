import React from 'react'
import { FaBone } from 'react-icons/fa';

export default function Header() {

  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <div className='logo'>
              <FaBone />
          </div>
          <h1>DOG SHOP</h1>
        </div>
        <div>
          <ul className='header-right'>
            <li>Dogs</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  )
}
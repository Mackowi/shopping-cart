import React from 'react'
import { FaBone, FaDog, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header({ cartItems }) {

  // console.log(`HEADER - cartItems.lenght =  ${cartItems.length}`)

  return (
    <>
      <div className='header'>
        <Link to='/' className='link'>
          <div className='header-left'>
            <div className='header-logo'>
                <FaBone/>
            </div>
            <h1>DOG SHOP</h1>
          </div>
        </Link>
        <div>
          <ul className='header-right'>
            <li>
              <Link to='/Dogs' className='link'>
              Dogs
              <FaDog className='header-dogs-icon'/>
              </Link>
            </li>
            <li >
              <div>
              <Link to='/Cart' className='link'>
              Cart {cartItems.length ? `[${cartItems.length}]` : ''}
              <FaShoppingCart className='header-cart-icon'/>
              </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
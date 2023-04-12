import React from 'react'
import { FaBone, FaDog, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <div className='header'>
        <Link to='/' className='link'>
          <div className='header-left'>
            <div className='logo'>
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
              <FaDog className='dogs-icon'/>
              </Link>
            </li>
            <li>
              <Link to='/Cart' className='link'>
              Cart
              <FaShoppingCart className='cart-icon'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
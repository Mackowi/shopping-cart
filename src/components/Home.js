import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='home'>
      <h1>We're having only the good bois!</h1>
      <Link to="/Dogs" className='link'>
        <p className='dogs-link'>Check them</p>
      </Link>
    </div>
  )
}


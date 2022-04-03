import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css';


const Header = () => {
  return (
    <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
      <div className='hidden md:block'>
        <Link to='/' className='font-bold font-sans text-gray-600 text-xl' >
          Crypto Cafe
        </Link>
      </div>
      <div className='flex gap-4 text-xl'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/coin' >Coins</NavLink>
      <NavLink to='/contact' >Contact</NavLink>
      <NavLink to='/about' >About</NavLink>
      </div>
    </div>
  )
}

export default Header

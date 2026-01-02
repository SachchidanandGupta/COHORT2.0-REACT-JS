import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-red-700 px-7 py-5 '>
        <h2>
            Navbar
        </h2>
        <input type="text" className='border-2' placeholder='search' />
        <div className='flex gap-8'>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar

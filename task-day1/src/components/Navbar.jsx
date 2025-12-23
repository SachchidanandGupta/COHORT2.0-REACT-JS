import React from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Navigation/>
      <SearchBar/>
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaSearch } from "react-icons/fa";



const SearchBar = () => {
  return (
    <div className='search'>
        <div className="bar">
        < input type="text" placeholder='Search for a place,city or destination' className='searchbar' />
        <FaSearch size={13} className='search-icon'/>
        </div>
        <button>Book Now</button>
    </div>

  )
}

export default SearchBar

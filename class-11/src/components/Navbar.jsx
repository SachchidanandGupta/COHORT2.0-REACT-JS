import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {
    const [newTheme, setNewTheme] = useState('');
    

   
  return (
    <div className=' bg-gray-500 p-5 '>
        
      <form onSubmit={(e)=>{
        e.preventDefault();
         props.changeTheme(newTheme);
         setNewTheme('');
      }} >
        
         <input
         onChange={(e)=>{
            setNewTheme(e.target.value);
         }}
         value={newTheme}
          type="text"
          placeholder='Enter theme'
          className='  border-white border-2 p-2 m-2 '
          
          />
          <button className='text-white bg-amber-500 px-4 py-2 rounded-xl ' >Submit</button>
      </form>
    </div>
  )
}

export default Navbar

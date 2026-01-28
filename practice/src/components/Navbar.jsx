import React, { useState } from 'react'

const Navbar = (props) => {
    
    const [newTheme, setNewTheme] = useState('');
  return (
    <div className='bg-gray-500 p-5 '>
      <form
      onSubmit={(e)=>{
        e.preventDefault();
        console.log(newTheme);
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
         className='border-2 border-white py-2 px-3 mr-2' />
         <button className='px-3 py-2 rounded-lg border-2 border-white'>Submit</button>
      </form>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme,setTheme] = useContext(ThemeDataContext);
  
  
  return (
    <div className='flex justify-between  bg-blue-200 p-4 '>
        <h1 className=' text-xl '>My Navbar - {theme}</h1>
        <button onClick={()=>{
          if(theme == 'light'){

            setTheme('Dark');
          }else{
            setTheme('light');
          }
        }} className='text-black px-3 py-2 border-white border-2 rounded-xl '>change theme</button>
        </div>
  )
}

export default Navbar
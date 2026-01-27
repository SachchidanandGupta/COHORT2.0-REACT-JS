import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllSection from './components/AllSection'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme =(newTheme)=>{
    setTheme(newTheme);
  }
  return (
    <div>
      <h1>The theme is {theme}</h1>
      <Navbar theme ={theme} changeTheme ={changeTheme}/>
    
    </div>
  )
}

export default App

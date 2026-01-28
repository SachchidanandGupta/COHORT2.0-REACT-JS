import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState("Dark");
  const changeTheme = (newTheme) =>{
    setTheme(newTheme);
  }
  return (
    <div>
      <h1>The current theme is {theme}</h1>
      <Navbar changeTheme = {changeTheme}/>
    </div>
  )
}

export default App

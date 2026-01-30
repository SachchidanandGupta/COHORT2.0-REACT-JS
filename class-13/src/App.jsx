import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div>
      <h1>{theme}</h1>
        <Navbar/>
        <Sections/>
        <Footer/>
    </div>
  )
}

export default App
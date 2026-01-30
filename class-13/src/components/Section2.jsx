import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {
    const [theme,setTheme] = useContext(ThemeDataContext);
  return (
    <div>
        section2
        <h1>{theme}</h1>
    </div>
  )
}

export default Section2
import React, { createContext, useState } from 'react'
import App from '../App';
export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
    
    const [theme, setTheme] = useState('Light')
  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
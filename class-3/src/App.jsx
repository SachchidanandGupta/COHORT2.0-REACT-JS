import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
       <Navbar title ="Stark" color ="red" items ={["Home","About us","services", "Cyndaquil"]}/>
       <Navbar title ="Alya"color ="blue" items ={["Home","Explore","Courses", "Pikachu"]}/>
       <Navbar title ="Mahiru"color ="green" items ={["Home","Contact","Customer care", "Onix"]}/>
    </div>
  )
}

export default App

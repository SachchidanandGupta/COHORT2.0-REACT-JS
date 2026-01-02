import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import RandomAbout from './pages/RandomAbout'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    

    <div>
      <Navbar/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/about/:id' element={<RandomAbout/>}/>
             <Route path='*' element={<NotFound/>} />
         </Routes>
    </div>
  )
}

export default App

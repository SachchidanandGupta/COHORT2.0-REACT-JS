import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-black  h-lvh '>
        <h1 className=' text-white '>This is a Homepage</h1>
        <button onClick={()=>{
              navigate('/product')
        }} className=' bg-gray-500 px-4 py-2 border-2 border-white text-white rounded-xl '>Explore Products</button>
    </div>
  )
}

export default Home
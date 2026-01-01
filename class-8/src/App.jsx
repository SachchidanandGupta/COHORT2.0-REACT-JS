import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const App = () => {
   const getData = async () => {
    const response = await  axios.get("https://pokeapi.co/api/v2/");
    console.log(response);
   }
   useEffect(function(){
    getData()
   })
  return (
      
    <div>

       <h2 className='text-2xl bg-red-500'>hello</h2>
    </div>
  )
}

export default App

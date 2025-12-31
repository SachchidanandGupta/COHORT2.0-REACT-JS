import React from 'react'
import axios, { Axios } from 'axios'
const App = () => {
 async function getData(){
       let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       console.log(response);
       
  }
  return (
    <div>
        <button className='bg-blue-400 cursor-pointer text-white px-5 py-3 m-4 rounded-2xl  ' onClick={getData} >get data </button>
    </div>
  )
}

export default App

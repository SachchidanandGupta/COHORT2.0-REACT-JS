import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const btnClicked = () => {
     
         console.log("button is clicked");
       
         setNum(num + 1) ;  
  }
  return (
    <div className='h-screen w-full bg-black flex justify-center items-center flex-col gap-6 '>

       <h1>{num}</h1>
       <button className='px-11 py-5 bg-emerald-500 text-white rounded-2xl ' onClick={btnClicked}>Increase</button>

    </div>
  )
}

export default App

import React from 'react'

const Navbar = (props) => {
    console.log(props);
    
  return (
    <div style={{backgroundColor:props.color}} className='h-20 w-full bg-red-500 flex justify-between items-center text-white text-lg mb-1 p-4 '>
          <h1  >{props.title}</h1>
          <div className='flex gap-2 justify-between w-1/3'>
              {props.items.map(function(elem,idx){
                return <h2 key={idx}>{elem}</h2>
              })}
          </div>
    </div>
  )
}

export default Navbar

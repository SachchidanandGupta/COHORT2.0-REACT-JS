import React from 'react'
import { useParams } from 'react-router-dom'

const RandomAbout = () => {
   const param =  useParams();
   console.log(param);
   
  return (
    <div>
        <h1 className='text-4xl underline fixed left-1/2 translate-x-0.5  '> AboutPage Something Something</h1>
    </div>
  )
}

export default RandomAbout

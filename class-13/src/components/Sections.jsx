import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Sections = () => {
  return (
    <div className='bg-yellow-400 flex justify-between p-4 items-center'>
        <h1>Sections</h1>
        <Section1/>
        <Section2/>
    </div>
  )
}

export default Sections
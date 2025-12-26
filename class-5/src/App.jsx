import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [userArr, setUserArr] = useState(['sam'])
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(title , "sub");
      const newUserArr = [...userArr];
      newUserArr.push(title);
      console.log(newUserArr);
      setUserArr(newUserArr)
        setTitle('');
        
        
    }
    const handleChange = (e) => {
             setTitle(e.target.value)
           
             
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
           <input type="text" name="" id="" className='' placeholder='Enter the name ' value={title} onChange={handleChange} />
           <button>Submit</button>
         </form>
    </div>
  )
}

export default App

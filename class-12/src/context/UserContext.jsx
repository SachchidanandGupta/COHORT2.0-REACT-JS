import React, { createContext } from 'react'
export const UserContextData = createContext();
const UserContext = (props) => {
    const user = "stark";
  return (
    <div className='context-div'>
        <UserContextData.Provider value={user}>
         {props.children};
        </UserContextData.Provider>
    </div>
  )
}

export default UserContext

import React, { use, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userArr, setUserArr] = useState([]);
  const handleName = (e) => {
    setTitle(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    
    setUserArr([...userArr, { title, phone, email }]);
    e.preventDefault();
    console.log("submitted");
    setTitle("");
    setEmail("");
    setPhone("");
  };
   const handleDelete = (idx) => {
    const delUser = [...userArr];
    delUser.splice(idx,1);
    setUserArr(delUser) 
   }

  return (
    <div className=" h-screen w-full flex   bg-gray-400 p-4">
      <form
        className="flex justify-start items-start flex-col gap-2 p-4 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name" className="text-white">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-5 py-3 text-white   bg-gray-600 rounded-lg"
          value={title}
          onChange={handleName}
          required
        />
        <label htmlFor="Phone" className="text-white">
          Phone number <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          max={10}
          placeholder="Phone number "
          className="px-5 py-3 text-white   bg-gray-600 rounded-lg "
          value={phone}
          onChange={handlePhone}
          required
        />
        <label htmlFor="Email" className="text-white">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 text-white  bg-gray-600 rounded-lg"
          value={email}
          onChange={handleEmail}
          required
        />
        <button className="px-5 py-3 bg-gray-800 text-white rounded-lg w-55.5 cursor-pointer hover:bg-gray-600">
          Submit
        </button>
      </form>
      <div className="flex gap-4 items-start">
    {userArr.map(function (elem, idx) {
         return  <Card key={idx}
              name={userArr[idx].title}
              phone_no={userArr[idx].phone}
              email={userArr[idx].email}
              handleDelete ={handleDelete}
            />
      })}
      </div>
    </div>
  );
};

export default App;

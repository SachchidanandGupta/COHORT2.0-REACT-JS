import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Card = (props) => {
    
    
  return (
    <div className="h-50 w-100  flex justify-center items-center gap-4 border-2 border-white rounded-2xl overflow-hidden ">
        <img src="https://images.unsplash.com/photo-1692191936022-ba17f82bfa57?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover"/>
        <div className="absolute flex items-center justify-center bg-transparent ">
      <div  className="h-24 w-24 rounded-full border-4 border-amber-100  flex justify-center items-center m-8 ">
        <FaUser size={28} className="text-white" />
      </div>
      <div>
        <div className="flex justify-start items-center gap-4 p-2 ">
          <FaPhone size={24} className="text-white  " />{" "}
          <h2 className="text-white  text-xl">{props.name}</h2>
        </div>
        <div className="flex justify-start items-center gap-4 p-2 ">
          <FaEnvelope size={24} className="text-white  " />{" "}
          <h2 className="text-white  text-xl">{props.phone_no}</h2>
        </div>
        <div className="flex justify-start items-center gap-4 p-2 ">
          <FaUser size={24} className="text-white " />
          <h2 className="text-white  text-xl">{props.email}</h2>
        </div>
        <button className=" bg-red-500 text-white px-5 py-2 w-full rounded-xl active:scale-95 cursor-pointer" onClick={props.handleDelete}>Remove</button>
      </div>
        </div>
    </div>
  );
};

export default Card;

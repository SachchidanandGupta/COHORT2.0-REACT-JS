import React, { useContext } from "react";
import { UserContextData } from "../context/UserContext";

const Footer = () => {
    const data = useContext(UserContextData);
  return (
    <div className=" w-screen h-10 absolute bottom-0 bg-blue-700 ">
      <h1>This is Footer {data}</h1>
    </div>
  );
};

export default Footer;

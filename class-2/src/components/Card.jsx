import React from "react";
import { FaPlus, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Card = (props) => {
  console.log(props);

  return (
    <div className="h-auto w-[300px] bg-white p-2 rounded-3xl flex justify-center items-center text-center flex-col text-black gap-2">
      <div className="h-[100px] w-full bg-gray-200 rounded-2xl flex   justify-center items-center relative  ">
        <img
          src={props.user.backgroundImg}
          className="h-full w-full object-cover rounded-2xl"
        />
        <div className=" h-[40px] w-[40px] rounded-full bg-gray-300 flex justify-center items-center absolute right-3 top-3 ">
          <FaPlus size={15} className="text-gray-500" />
        </div>
        <div className="h-[80px] w-[80px] rounded-full  absolute -bottom-10  overflow-hidden border-6 border-white ">
          <img
            src={props.user.profileImg}
            className="h-full w-full object-cover  "
          />
        </div>
      </div>

      <h1 className="mt-8 text-2xl">{props.user.userName}</h1>
      <p>{props.user.description}</p>

      <div className="w-full h-[60px] flex justify-center items-center p-5 bg-gray-100 rounded-2xl shadow-xl border-gray-200 gap-5">
        <div className="flex items-center justify-center p-3 flex-col ">
          <h2 className=" text-lg ">{props.user.likeCount}</h2>
          <h3 className="text-gray-400">Likes</h3>
        </div>
        <div className="flex items-center justify-center p-3 flex-col ">
          <h2 className=" text-lg ">{props.user.postCount}</h2>
          <h3 className="text-gray-400">posts</h3>
        </div>
        <div className="flex items-center justify-center p-3 flex-col ">
          <h2 className=" text-lg ">{props.user.viewsCount}</h2>
          <h3 className="text-gray-400">views</h3>
        </div>
      </div>
      <div className="w-full h-auto p-1 bg-gray-200 flex justify-center items-center gap-6 rounded-b-2xl">
        <FaGithub size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
      </div>
    </div>
  );
};

export default Card;

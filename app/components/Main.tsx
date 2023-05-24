import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1248px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Welcome to <span className=" text-[#5651e5]">Payload IT</span>
          </h1>
          <h1 className="py-2 text-gray-700">Unique Software Solution</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            laudantium dolor ut quisquam sunt ipsam aspernatur omnis maxime
            minima, laborum eligendi, ex natus. Cupiditate laborum nobis.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 space-x-2">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

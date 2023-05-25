import Image from "next/image";
import React from "react";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What can we do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/react.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/nextjs.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Next JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/tailwind.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/javascript.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/node.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Node JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/mongo.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/github1.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Git</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/technologies/firebase.png"
                  alt="react"
                  height="64"
                  width="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

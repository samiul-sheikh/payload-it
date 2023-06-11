import React from "react";
import Image from "next/image";

interface AboutComponentProps {}

export const AboutComponent: React.FC<AboutComponentProps> = (
  props: AboutComponentProps
) => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1248px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Why choose us</h2>
          <p className="">we are unique from others</p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            placeat dicta inventore consequatur, esse nemo dolorem minus ipsam
            in sit dolores qui officiis ipsum adipisci hic enim architecto porro
            excepturi.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            reprehenderit doloremque facere inventore enim laudantium harum
            animi! Perferendis, alias distinctio.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/technology.jpg"
            width="500"
            height="500"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { IoMdPeople } from "react-icons/io";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { BiBone } from "react-icons/bi";

const HeroTwo = () => {
  return (
    <section className="w-full bg-blue-500 py-8 mt-4 lg:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Heading */}
        <p className="text-sm font-medium text-white mb-8 text-center lg:text-left l]g:ml-[330px">
          What type of therapy are you looking for?
        </p>

        {/* Icons and Descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white text-center lg:text-left lg:gap-6">
          {/* Icon 1 */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <IoMdPeople size={20} />
            <p className="">Socialization</p>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <TbToolsKitchen3 size={20} />
            <p className="leading-tight">Light household chores</p>
          </div>

          {/* Icon 3 */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <FaTruck size={20} />
            <p className="leading-tight">Transportation</p>
          </div>

          {/* Icon 4 */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <BiBone size={20} />
            <p className="leading-tight">Pet Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;

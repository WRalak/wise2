import React from "react";
import { IoMdPeople } from "react-icons/io";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { BiBone } from "react-icons/bi";

const HeroTwo = () => {
  return (
    <section className="w-full lg:mb-20 bg-blue-500 py-8">
      <div className="mx-auto px-8 max-w-7xl">
        {/* Heading */}
        <p className="text-xs font-medium text-white mb-8 lg:ml-[330px]">
          What type of therapy are you looking for?
        </p>

        {/* Icons and Descriptions */}
        <div className="lg:ml-[330px]">
          <div className="flex flex-col sm:flex-row justify-start sm:gap-8 text-white">
            {/* Icon 1 */}
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <IoMdPeople size={14} />
              <p className="ml-2 text-xs">Socialization</p>
            </div>

            {/* Divider */}
            <span className="mx-2 text-white hidden sm:block text-sm leading-none">|</span>

            {/* Icon 2 */}
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <TbToolsKitchen3 size={14} />
              <p className="ml-2 text-xs">Light household chores</p>
            </div>

            {/* Divider */}
            <span className="mx-2 text-white hidden sm:block text-sm leading-none">|</span>

            {/* Icon 3 */}
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <FaTruck size={14} />
              <p className="ml-2 text-xs">Transportation</p>
            </div>

            {/* Divider */}
            <span className="mx-2 text-white hidden sm:block text-sm leading-none">|</span>

            {/* Icon 4 */}
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <BiBone size={14} />
              <p className="ml-2 text-xs">Pet Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;

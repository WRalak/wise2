import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

const HeroTherapySection = () => {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen w-full">
      <section className="flex items-center justify-center w-full py-6 mx-auto max-w-screen-xl ">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 px-4 sm:px-6 lg:gap-12 lg:ml-[200px] lg:mr-[50px]">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left lg:ml-12 lg:self-center mb-8 sm:mb-0 lg:mt-auto">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug"
              style={{ fontFamily: 'Inter', fontWeight: 800, lineHeight: '1.2' }}
            >
              Connecting families to <br /> trusted compassionate <br /> care companions.
            </h1>
            <p className="text-gray-800 mb-8 text-xs sm:text-base lg:text-sm leading-relaxed">
              WISEHealth provides a companion care program with vetted, <br />
              trained, and compassionate care companions to help with <br />
              socialization, meal preparation, and light housework.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Button 1 */}
              <Link href="/login">
                <button className="bg-blue-500 text-white px-4 py-2 text-xs sm:text-sm rounded-lg  flex items-center gap-2 w-full sm:w-auto">
                  Find Compassion
                  <MdArrowOutward size={13} />
                </button>
              </Link>

              {/* Button 2 */}
              <Link href="/login">
                <button className="bg-white border-2 text-blue-500 border-blue-500 px-4 py-2 text-xs sm:text-sm rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  Register As Companion
                  <MdArrowOutward size={13} />
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex-1 justify-center lg:justify-end lg:self-center h-full">
            <div className="relative w-full h-64 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[600px]">
              <Image
                src="/wise1.jpeg" // Ensure the path is correct
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroTherapySection;


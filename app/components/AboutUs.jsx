import React from 'react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="relative py-16 flex justify-center items-center">
      {/* MidSection placed above About Us content */}

      {/* Image Container */}
      <div className="relative w-full sm:w-[780px] h-[276px] mt-8 lg:ml-48">
        {/* Background Image */}
        <Image
          src="/wise1.jpeg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-[15px]"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#B5737380] backdrop-blur-sm rounded-[15px]"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white lg:mr-6 px-6 pl-12">
          <h1 className="text-xs sm:text-sm md:text-lg font-semibold mb-2">ABOUT US</h1>
          {/* Red Divider */}
          <div className="w-[28px] h-[2px] bg-red-500 mb-8"></div>
          <p className="text-xs ">
            WISECompanion Care (WCC) is a platform and a movement connecting <br />families to trusted, compassionate Companions in their community. <br /><br />
          </p>
          <p className='text-xs '>
            WISECompanion’s easy-to-use platform provides assistance with socialization,<br /> light housekeeping, meal preparation, pet care, and more – alleviating stress on <br /> families and allowing clients to live life on their terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;







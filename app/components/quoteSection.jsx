import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const QuoteSection = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Quote Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 flex justify-center items-center w-full">
  <div className="max-w-lg text-center">
    {/* Quote Text with Icon */}
    <div className="flex  items-center mb-6">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-gray-950 text-4xl mb-14" />
      
      {/* Quote Text */}
      <p className="text-gray-950 mt-2 text-base sm:text-lg">
        Our network of therapists and psychiatric providers have specialization in
        150+ conditions, treatment approaches, and mental health needs.
      </p>
    </div>

    {/* CEO Information */}
    <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-4">
      {/* Rounded Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src="/wise6.jpg" // Replace with the CEO's image path
          alt="CEO"
          width={48} // Adjust width to fit the container size
          height={48} // Adjust height to fit the container size
          className="object-cover"
        />
      </div>

      {/* Divider and Name */}
      <div className="flex flex-col sm:flex-row items-center text-gray-800">
        <p className="font-semibold text-xs">Mitchell Lebowitz</p>
        <span className="hidden sm:block mx-2 text-red-400">|</span>
        <p className="text-gray-600 text-xs">CEO, WISE</p>
      </div>
    </div>
  </div>
</section>



      {/* Our History Section */}
      
       <section className="bg-white py-16 px-4 sm:px-6 w-full">
        {/* Our History Heading */}
        <h2 className="text-xs font-bold text-gray-950 text-center lg:text-left mb-8 lg:ml-[250px]">
          Our History
        </h2>

        {/* Flex Container for Main Description and Key Initiatives */}
        <div className="flex flex-col lg:flex-row gap-8 lg:ml-[250px] ml-4">
          {/* Main Description */}
          <div className="flex-1 text-gray-950">
            <p className="text-xs leading-relaxed  text-gray-950 mb-4">
              The Wellness Institute for Senior Empowerment (WISE) was established by a
              national team of elite medical and mental health providers and clinicians
              with over 120 years of combined professional geriatric care experience (from
              Harvard, UT Austin, UTSW Med Ctr), older adults, and caregivers. The mission
              - to empower seniors and their (ICs) with information, tools, and resources
              to improve their health outcomes and quality of life (QOL) drives the four
              core initiatives:
            </p>
          </div>

          {/* Key Initiatives */}
          <div className="flex-1 text-gray-950 lg:mr-40">
            <p className="text-xs leading-loose mb-4">
              1. Continuous research to provide current and meaningful information to the
              global community. <br />
              2. Assess the (SODH), TOC, and routine needs of seniors and (ICs). <br />
              3. Provide resources to meet their identified needs. <br />
              4. Thereby improving the health outcomes and QOL for both older adults and
              their (ICs).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteSection;

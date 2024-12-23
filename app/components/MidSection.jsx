"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdAdd, MdRemove } from "react-icons/md";

const WellnessInstitute = () => {
  const [openFAQ, setOpenFAQ] = useState(new Array(10).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);

  const years = ["2022", "2023", "2024", "2025", "2026"];

  const toggleFAQ = (index) => {
    const updatedFAQs = [...openFAQ];
    updatedFAQs[index] = !updatedFAQs[index];
    setOpenFAQ(updatedFAQs);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const faqs = [
    {
      question: "What is WISE Companion Care?",
      answer:
        "WISE Companion Care (WCC) connects families to compassionate Companions in their community. It provides assistance with socialization, light housekeeping, meal preparation, and more to combat social isolation and enhance quality of life.",
    },
    {
      question: "How can I book a Companion?",
      answer:
        "Booking a Companion is simple. Visit our website, create an account, and choose a Companion that fits your needs based on their profile and availability.",
    },
    {
      question: "What services are provided by Companions?",
      answer:
        "Companions assist with socialization, meal preparation, light housekeeping, pet care, running errands, and providing companionship to improve overall well-being.",
    },
    {
      question: "Are the Companions trained?",
      answer:
        "Yes, all Companions undergo thorough training and background checks to ensure the highest quality of care and professionalism.",
    },
    {
      question: "Can I choose my Companion?",
      answer:
        "Absolutely. Our platform allows you to review profiles and select a Companion based on your preferences and requirements.",
    },
    {
      question: "Is WISE available nationwide?",
      answer:
        "Currently, WISE services are available in select cities, with plans to expand nationwide in the near future.",
    },
    {
      question: "How do I become a WISE Companion?",
      answer:
        "To join as a Companion, visit our Careers page, submit an application, and complete the onboarding process, including training and background checks.",
    },
    {
      question: "What is the cost of WISE services?",
      answer:
        "The cost varies depending on the services required. You can find detailed pricing information on our website or by contacting our support team.",
    },
    {
      question: "How does WISE ensure safety?",
      answer:
        "We prioritize safety by conducting rigorous background checks on all Companions and maintaining regular performance reviews and feedback mechanisms.",
    },
    {
      question: "Can I book a Companion for someone else?",
      answer:
        "Yes, you can book a Companion for a family member or friend. Simply provide the necessary details during the booking process.",
    },
  ];

  return (
    <div>
      {/* Container Section (Carousel) */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 240}px)`,
              }}
            >
              {years.map((year, index) => (
                <div
                  key={index}
                  className="min-w-[220px] sm:min-w-[280px] h-[170px] flex flex-col items-center bg-white p-4 shadow-md rounded-md mx-2"
                >
                  <h3 className="text-xl font-bold mb-4">{year}</h3>
                  <p className="text-sm text-center">
                    The Wellness Institute for Senior Empowerment (WISE) was established by.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators (for carousel) */}
          <div className="flex justify-center space-x-2 mt-4">
            {years.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-blue-600" : "bg-blue-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section (Responsive Image) */}
      <section className="py-10">
        <div className="mx-auto px-4 flex justify-center">
          <Image
            src="/wise4.jpeg" // Replace with your image path
            alt="Wellness Institute"
            width={780}
            height={250}
            className="object-cover rounded-lg w-full md:w-[780px] md:h-[250px]"
          />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6">FAQs</h2>

          {/* Collapsible FAQs */}
          <div className="flex flex-col items-start max-w-md mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white mb-4 cursor-pointer w-full">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center"
                >
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full mr-4">
                    {openFAQ[index] ? (
                      <MdRemove size={20} className="text-gray-600" />
                    ) : (
                      <MdAdd size={20} />
                    )}
                  </div>
                  <p className="text-sm font-bold">{faq.question}</p>
                </div>

                {openFAQ[index] && (
                  <div className="mt-2">
                    <p className="p-1 text-xs">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Team Members */}
        <div className="mt-12 text-left lg:ml-[330px]">
          <h6 className="font-semibold mb-2">Amplified by a global team</h6>
          <p className="text-xs">
            The Wellness Institute for Senior Empowerment (WISE) was <br />
            established by a national team of elite medical professionals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-8 mt-6">
          {[ 
            { name: "John Doe", title: "CEO", imgSrc: "/wise6.jpg" },
            { name: "Jane Smith", title: "COO", imgSrc: "/wise8.jpg" },
            { name: "Mark Brown", title: "CTO", imgSrc: "/wise7.jpg" },
            { name: "Emma White", title: "CFO", imgSrc: "/wise9.jpg" },
            { name: "Sophia Lee", title: "CMO", imgSrc: "/wise5.jpg" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className=" text-sm font-semibold">{member.name}</p>
              <p className="text-xs">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WellnessInstitute;

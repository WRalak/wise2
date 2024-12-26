import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/wise8.jpg",
      name: "Jane Doe",
      country: " Parent- Kenya",
      description:
        "Our accredited and vetted tutors are driven \n to help our students flourish and thrive. They \n inspire, instill confidence, encourage, know,\n and believe in their students.",
    },
    {
      image: "/wise9.jpg",
      name: "John Smith",
      country: "Parent- Kenya",
      description:
        "Our accredited and vetted tutors are driven \n to help our students flourish and thrive. They\n inspire, instill confidence, encourage, know,\n and believe in their students.",
    },
    {
      image: "/wise7.jpg",
      name: "Alice Brown",
      country: "Parent- Kenya",
      description:
        "Our accredited and vetted tutors are driven \n to help our students flourish and thrive. They \ninspire, instill confidence, encourage, know,\n and believe in their students.",
    },
  ];

  return (

    <section className="w-full flex flex-col lg:flex-row bg-gray-50 py-12 overflow-hidden">
    {/* Left Section */}
    <div className="px-8 lg:px-24 mb-8 lg:mb-0 flex-1 lg:ml-[250px]">
  <h3 className="text-3xl sm:text-3xl font-bold text-gray-800 leading-tight">
    What Our People <br /> Are Saying
  </h3>
  <p className="text-gray-950 text-xs sm:text-xs leading-relaxed mt-4">
    Don’t just take our word for it. Hear it from <br />more than 20+ families.
  </p>
  <div className="flex items-center mt-6 space-x-4">
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-orange-500 text-base" />
      ))}
    </div>
    <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
      (20+ testimonials)
    </p>
  </div>
</div>



  
    {/* Right Section - Testimonials */}
    <div className="overflow-hidden px-8 lg:px-16">
      <div className="flex overflow-x-auto gap-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-start max-w-xs sm:max-w-sm lg:max-w-xs flex-shrink-0"
          >
            {/* Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-500 text-xs mx-1" />
              ))}
            </div>
  
            {/* Description */}
            <p
              className="text-gray-600 text-xs sm:text-xs mt-2"
              style={{ whiteSpace: "pre-line" }}
            >
              {testimonial.description}
            </p>
  
            {/* Image and Info */}
            <div className="flex items-center mt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} Image`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-sm sm:text-sm font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
 );
}

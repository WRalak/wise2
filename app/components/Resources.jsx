import { HiMiniComputerDesktop } from "react-icons/hi2";
import { PiUserFocusFill, PiUsersThreeDuotone } from "react-icons/pi";
import { MdConnectedTv } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { BiCamera } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

export default function ExampleSection() {
  const features = [
    {
      Icon: HiMiniComputerDesktop,
      bgColor: "bg-blue-300",
      title: "User-Friendly Interface",
      description:
        "With WISE Companion's user-friendly \n interface, you can effortlessly create and \n manage your trainer profile and training \n content. Our intuitive layout ensures that you \n can showcase your expertise, qualifications,\n and achievements in just a few clicks. Make a \n lasting impression on potential corporate \n clients, and get ready to shine in the \n competitive training market!",
    },
    {
      Icon: PiUserFocusFill,
      bgColor: "bg-blue-300",
      title: "Profile Showcasing",
      description:
        "Put your best foot forward and attract more corporate clients with WISE Companion's profile showcasing feature. Highlight your skills, experience, and certifications, and let your unique personality shine through. With a captivating profile, you'll stand out to corporate clients seeking top-notch trainers for their valuable training needs.",
      link: "View Trainers",
    },
    {
      Icon: MdConnectedTv,
      bgColor: "bg-orange-300",
      title: "Promotional Support",
      description:
        "WISE Companion actively promotes your trainer profile and training programs to a vast audience of potential corporate clients. Gain increased visibility and exposure as we feature top trainers and their courses on our homepage and targeted email campaigns. Partner with us to expand your reach and connect with more corporate clients eager to learn from experts like you.",
    },
    {
      Icon: PiUsersThreeDuotone,
      bgColor: "bg-green-300",
      title: "Networking and Collaboration",
      description:
        "Join a thriving community of trainers on WISE Companion and unlock endless opportunities for networking and collaboration. Connect with industry experts, share insights, and even collaborate on joint projects. Together, we can make a profound impact on corporate learning, reaching more professionals seeking top-quality training.",
    },
    {
      Icon: CiGrid41,
      bgColor: "bg-red-300",
      title: "Customizable Training Modules",
      description:
        "WISE Companion offers a diverse library of customizable training modules to cater to the unique needs of corporate clients. Tailor your content to meet specific industry requirements, and elevate your training sessions to meet the highest standards. Empower learners with engaging and personalized experiences that lead to lasting growth and success.",
    },
    {
      Icon: BiCamera,
      bgColor: "bg-red-300",
      title: "Marketing and Branding Assistance",
      description:
        "Take advantage of WISE Companion's marketing resources to elevate your branding and online presence. Access professionally designed templates for course flyers, social media posts, and newsletters, and leave a memorable impression on potential clients. With our support, you'll showcase your expertise with confidence and attract more corporate clients to your courses.",
      link: "Show more ",
    },
  ];

  return (
    <section className="px-4 lg:ml-[150px] lg:mr-[px] sm:px-8 lg:px-16 py-8">
      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
          Why Choose WISE Companion
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-4">
          WISE Companion offers a wide range of powerful features to help you excel
          and reach new <br /> heights in the world of corporate training.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map(({ Icon, bgColor, title, description, link }, index) => (
          <div key={index} className="flex  flex-col">
            <Icon className={`text-xl text-white ${bgColor} mb-4`} />
            <h4 className="font-bold text-gray-800 text-xs sm:text-sm">{title}</h4>
            <p className="text-gray-600 text-xs sm:text-base">{description}</p>
            {link && <p className="text-blue-700">{link}</p>}
          </div>
        ))}
      </div>
<div>
</div>
<div className="flex flex-col items-start space-y-4">
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left">
    Join WISE Companion today and unlock your full potential as a corporate trainer. <br className="hidden md:block" />
    Elevate your training experience, connect with like-minded experts, and reach new <br className="hidden md:block" /> heights 
    in the world of corporate training. Together, we&apos;ll make a profound impact on <br className="hidden md:block" /> professional
    growth and learning. Join us now and embark on an empowering <br className="hidden md:block" /> journey with WISE Companion!
  </p>
  <button className="flex items-center bg-blue-700 text-white rounded py-2 px-4 mt-2 hover:bg-blue-800 transition-all duration-300">
    Get Started
    <MdArrowOutward size={15} className="ml-2" />
  </button>
</div>

    </section>
  );
}


import React from 'react';
import QuoteSection from './quoteSection';

const MidTable = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid gap-8 md:gap-6 md:grid-cols-3">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-blue-500">|</span> Our Mission
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              To empower seniors and their (ICs) <br />
              with information, tools, and <br />
              resources to improve their health <br />
              outcomes and quality of life (QOL)
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-red-500">|</span> Our Vision
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Our companions provide <br />
              socialization and companionship, <br />
              light household tasks, trips around <br />
              town, accompany on errands and <br />
              events and pet care.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold text-gray-800">
              <span className="text-blue-500">|</span> Our Core Values
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              The focus of Interactive Caregiving is <br />
              doing things with our clients instead <br />
              of just doing things for them. While <br />
              our caregivers provide assistance <br />
              with the daily.
            </p>
          </div>
        </div>
      </div>
      <QuoteSection />
    </section>
  );
};

export default MidTable;






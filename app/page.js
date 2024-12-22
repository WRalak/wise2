import React from 'react';

import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUs';
import MidTable from './components/midTable';
import MidSection from './components/MidSection';
import HeroTwo from './components/HeroTwo';

const page = () => {
  return (
    <div className='mt-3'>
      <HeroSection />
      <HeroTwo className="mt-4 lg:mt-8" />  {/* Adjust margin-top to reduce gap */}
      <AboutUsSection />
      <MidTable />
      <MidSection />
    </div>
  );
};

export default page;



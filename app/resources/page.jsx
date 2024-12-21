import React from 'react'
import Header from '../components/Header'
import Resources from '../components/Resources'
import Testimonials from '../components/Testimonials'

const page = () => {
  return (
    <div className='mt-3'>
      <Header/>
      <Resources/>
      <Testimonials/>
    </div>
  )
}

export default page
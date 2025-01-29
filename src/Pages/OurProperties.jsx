import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import PropSlider from '../Components/PropSlider'
import Network from '../Components/Network'

const OurProperties = () => {
  return (
    <div>
            <GlobalCover src="./our-properties/properties-cov.png" title="OUR PROPERTIES" />
            <div className='marginal'>
            <div className='my-4 py-5 border-t-2 border-b-2 border-[#b2c9dc]'>
                <h2 className='text-[#004B8B] md:text-3xl text-2xl text-center mb-'>
                Properties at accessible locations, <b>available now!</b>
                </h2>
                <h2 className='text-[#004B8B] md:text-3xl text-2xl text-center'>
                We are building communities with quality homes that welcome everyone.<br />Browse our projects today and experience the PCPL difference. 
                </h2>
                <p className='text-[#827E78] md:text-xl text-center mt-4'>
                Pranav Constructions Private Limited predominantly undertakes re-development projects. Our track record underscores our commitment to timely project completion without compromising quality, showcasing strong execution capabilities. Strategically expanding across Mumbai, we have successfully completed 25 redevelopment projects, with 11 under-construction redevelopment projects, and a promising pipeline of 21 upcoming redevelopment projects. 
                </p>
            </div>
            </div>
            <PropSlider/>
    </div>
  )
}

export default OurProperties
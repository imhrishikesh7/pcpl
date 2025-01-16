import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import Offices from '../ContactUs-Components/Offices'
import CallBackForm from '../ContactUs-Components/CallBackForm'
import MapComponent from '../ContactUs-Components/MapComponent'
import Heading from '../Components/Heading'

const ContactUs = () => {
    return (
        <div>
            <GlobalCover src="./contact-us/contact-img.png" title="CONTACT US" />
            <Offices />
            <div className='marginal'>
                <CallBackForm />
                <MapComponent />
            </div>
            <div className='marginal'>
                <div className='text-center'>
                <Heading
                    title={"CONTACT US"}
                    color="black"
                    />
                </div>
                <div className="p-4 md:p-8 md:flex md:justify-evenly">
  {/* Left Section */}
  <div className="md:w-1/2 md:flex md:justify-between mb-6 text-lg md:mb-0">
    {/* Customer Care */}
    <div className="mb-6 md:mb-0 md:w-1/2 pr-4">
      <p className="text-[#004B8B] font-bold mb-3">Customer Care</p>
      <div className="mb-8">
        <p className="text-[#827E78] font-bold mb-1">Telephone No.</p>
        <p className="text-[#827E78]">033 2635 3658</p>
      </div>
      <div>
        <p className="text-[#827E78] font-bold mb-1">Email ID</p>
        <p className="text-[#827E78]">demo@pranavconstructions.com</p>
      </div>
    </div>

    {/* Human Resources */}
    <div className="md:w-1/2">
      <p className="text-[#004B8B] font-bold mb-3">Human Resources</p>
      <div className="mb-8">
        <p className="text-[#827E78] font-bold mb-1">Telephone No.</p>
        <p className="text-[#827E78]">033 2635 3658</p>
      </div>
      <div>
        <p className="text-[#827E78] font-bold mb-1">Email ID</p>
        <p className="text-[#827E78]">demo@pranavconstructions.com</p>
      </div>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="./contact-us/ct-btm.png"
      className="w-full max-w-[300px] md:max-w-none"
      alt="Contact Us"
    />
  </div>
</div>

            </div>
        </div>
    )
}

export default ContactUs
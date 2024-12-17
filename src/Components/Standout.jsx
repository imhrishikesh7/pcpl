import React from 'react'

const Standout = () => {
  return (
    <div className='marginal md:flex justify-center'>
      <div className='md:w-[49%]'>
        <img src="./home/standout.png" alt="" />
      </div>
      <div className='md:w-[40%]  md:ml-[4%] m flex flex-col justify-evenly'>
        <h1 className='viaoda md:text-4xl text-3xl my-5 md:text-left text-center md:mb-6 '>WHY WE STAND OUT?</h1>
        <div className='flex w-full items-center py-4 md:border-0 border-b border-gray-400'>
          <img src="./home/s1.svg" className='mr-5' alt="" />
          <p>A growing real-estate company with a <br /> strong pipeline</p>
        </div>
        <div className='flex w-full items-center py-4 md:border-0 border-b border-gray-400'>
          <img src="./home/s2.svg" className='mr-5' alt="" />
          <p>In-house functional expertise fosters seamless <br /> project execution</p>
        </div>
        <div className='flex w-full items-center py-4 md:border-0 border-b border-gray-400'>
          <img src="./home/s4.svg" className='mr-5' alt="" />
          <p>A proven track record of timely completion, <br />bolstered by our strong execution capabilities</p>
        </div>
        <div className='flex w-full items-center py-4 md:border-0 border-b border-gray-400'>
          <img src="./home/s3.svg" className='mr-5' alt="" />
          <p>A customer-centric brand  with robust <br /> stakeholder management</p>
        </div>
        <div className='flex w-full items-center py-4 md:border-0 border-b border-gray-400'>
          <img src="./home/s5.svg" className='mr-5' alt="" />
          <p>Experienced promoters, professional senior <br /> management, effective corporate governance <br /> practices and a committed employee base</p>
        </div>
      </div>
    </div>
  )
}

export default Standout
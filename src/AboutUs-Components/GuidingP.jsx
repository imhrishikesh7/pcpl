import { motion } from 'framer-motion'
import React from 'react'
const GuidingP = () => {



    return (
        <div className='p-2 relative  bg-[#004B8B] my-6'>
            <div className='marginal'>
                <motion.h1
                    className="viaoda md:text-4xl text-3xl text-white text-center md:mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                    transition={{
                        duration: 0.5, // Increased duration for smoother transitions
                        ease: 'linear', // Use easeOut for smoother deceleration
                    }}
                >
                    OUR GUIDING PRINCIPLES
                </motion.h1>

                <div className="p-4 md:flex justify-center gap-6">
                    <div className="py-7 bg-transparent border border-white md:w-[22%] overflow-hidden">
                        <div className='w-[100px] m-auto h-fit'>
                            {/* <img
                                src="./about/p1.svg"
                                alt=""
                                className="w-full object-contain"
                            /> */}
                        </div>
                        <div className="px-7">
                            <h3 className="text-3xl font-semibold m-auto w-fit viaoda text-white mb-4">MISSION</h3>
                            <p className="text-gray-600  text-center text-white text-[14px]">Guided by our commitment to <b>expansion</b> and driven by unwavering <b>ethics & efficiency</b>, we carry out <b>redevelopment</b> projects with a focus on <b>timelines</b>. We seek a <b>clear path</b>, actively foster <b>collaborations</b>, and tirelessly pursue diversification, all while strengthening national <b>infrastructure</b> and nurturing our dedicated <b>team</b>.</p>
                        </div>
                    </div>
                    <div className="py-7 bg-transparent border border-white md:w-[22%] overflow-hidden">
                        <div className='w-[100px] m-auto h-fit'>
                            {/* <img
                                src="./about/p2.svg"
                                alt=""
                                className="w-full object-contain"
                            /> */}
                        </div>
                        <div className="px-7">
                            <h3 className="text-3xl font-semibold m-auto w-fit viaoda text-white mb-4">VISION</h3>
                            <p className="text-gray-600 mt-2 text-white text-[14px] text-center">Our vision is to become a <b>pre-eminent developer</b> providing <b>exceptional customer satisfaction</b> enveloped with <b>ethical corporate standards</b> and to <b>strategically expand</b> across diverse segments delivering value to our stakeholders.</p>
                        </div>
                    </div>
                    <div className="py-7 bg-transparent  border border-white md:w-[22%] overflow-hidden">
                        <div className='w-[100px] m-auto h-fit'>
                            {/* <img
                                src="./about/p3.svg"
                                alt=""
                                className="w-full object-contain"
                            /> */}
                        </div>
                        <div className="px-7">
                            <h3 className="text-3xl font-semibold m-auto w-fit viaoda text-white mb-4">VALUES</h3>
                            <p className="text-gray-600 mt-2 text-center text-white text-[14px]">We believe in doing business with the highest degree of <b>integrity and transparency</b> following a <b>customer-centric approach</b> without compromising on <b>quality</b> and ensuring <b>environmental stewardship</b>. We foster an <b>inclusive work culture</b> where <b>ethics</b> are instilled, and <b>betterment</b> is rewarded.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='md:absolute right-0 bottom-0 md:w-[20vw]' src="./about/graphics-about.svg" alt="" />
        </div>
    )
}

export default GuidingP
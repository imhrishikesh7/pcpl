import { motion } from 'framer-motion'
import React from 'react'
const Messages = () => {
    return (
        <div>
            <div className='bg-[#004B8B] py-14 md:mb-[15vh]'>

                <div className='px-[7%]'>
                    <motion.h1
                        className="viaoda md:text-4xl text-3xl text-white md:text-left text-center mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                        transition={{
                            duration: 0.5, // Increased duration for smoother transitions
                            ease: 'linear', // Use easeOut for smoother deceleration
                        }}
                    >
                        THE VISIONARY
                    </motion.h1>
                    <div className='md:flex justify-between gap-6'>
                        <div className='md:relative md:w-[44vh] md:mb-0 mb-6'>
                            <img src="./about/visionary.png" className='md:absolute' alt="" />
                        </div>
                        <div className='text-white md:w-[70%] text-justify'>
                            <p className='mb-4 text-[14px]'>
                                In the dynamic world of real estate, where dreams materialize into physical structures, the late Kiran Dharamsey Ashar, our founder, stands as the visionary leader steering Pranav Constructions Private Limited. The formation of PCPL wasn't just a business venture; it embodied Kiran Bhai's (as affectionately called by us) vision to streamline the redevelopment sector within the real estate industry. From the very start, he envisioned spaces that surpassed conventional construction, crafting environments that mirrored the aspirations and dreams of those who would call them home.
                            </p>
                            <p className='mb-4 text-[14px]'>
                                Kiran Bhai instilled PCPL with a set of guiding principles and values, shaping the corporate identity around trust, transparency, and ethical business practices. His emphasis on these values remains ingrained in us. During the early challenges faced by PCPL, his guidance, fortitude, and resilience continue to shape our learning and growth, propelling us into an esteemed organization with a robust reputation.
                            </p>
                            <p className='mb-4 text-[14px]'>
                                Although his departure creates a void, the enduring legacy of PCPL thrives under the seeds of brilliance he planted. The Company is unwavering in its commitment to uphold his legacy, ensuring that every project reflects the values of innovation and sustainability, that he held dear.
                            </p>
                            <p className='mb-6 text-[14px]'>
                                As Kiran Bhai finds peace in heavenly realms, his visionary spirit stands as an everlasting inspiration, guiding PCPL on its journey toward continued excellence.
                            </p>
                            <p className='font-bold'>Mr. Kiran Dharamsey Ashar  </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10'>

                <div className='px-[7%]'>
                    
                    <div className='md:flex justify-between items-end gap-6'>
                        
                        <div className='md:w-[70%] text-justify'>
                        <motion.h1
                        className="viaoda md:text-4xl text-3xl md:text-left text-center mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                        transition={{
                            duration: 0.5, // Increased duration for smoother transitions
                            ease: 'linear', // Use easeOut for smoother deceleration
                        }}
                    >
                        CHAIRMAN AND <br /> MANAGING DIRECTOR
                    </motion.h1>
                    <p className='text-[#004B8B] font-semibold text-xl mb-4'>Pranav Kiran Ashar</p>

                            <p className='text-[14px]'>
                            Pranav Kiran Ashar, the Chairman and Managing Director of PCPL, is an accomplished architect from the Indian Education Society’s College of Architecture, University of Mumbai. With over 20 years of diverse experience in the real estate sector, he has established himself as a visionary leader committed to excellence and innovation. Under his leadership, PCPL has embarked on ambitious growth strategies, aiming to position the Company as a leading name in Indian real estate. His expertise spans architectural design, project execution and strategic growth, enabling the Company to set new benchmarks in quality and customer satisfaction. He is dedicated to steering PCPL toward sustainable growth while expanding its footprint in a competitive landscape. His passion for creating modern living spaces, coupled with a strong commitment to integrity and transparency, inspires his team to achieve their best. In recognition of his contributions, he was recognised as the ‘Times 40 Under 40 Leaders’ in 2023 and received the ‘Emerging Builder Young Achiever of the Year’ award. Furthermore, in 2024, he was honoured as an ‘Iconic Redevelopment Developer’ at the Mid-day Maharashtra Gaurav Awards.
                            </p>
                        </div>
                        <div className='md:relative md:w-[30%] md:mb-0 mb-6'>
                            <img src="./about/md.png" className='' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
import { motion } from 'framer-motion'
import React from 'react'
const AboutPCPL = () => {
    return (
        <div className='marginal'>
            <div className='md:w-[70%] md:relative'>
                <img src="./about/about-2.png" className='w-full' alt="" />
                <div className="md:absolute top-[50%] p-8 left-[60%] bg-white md:w-[80%] shadow-[6px_6px_16px_rgba(0,0,0,0.1)]">
                     <motion.h1
                              className="viaoda md:text-4xl text-3xl md:text-left text-center md:mb-6"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                              transition={{
                                  duration: 0.5, // Increased duration for smoother transitions
                                  ease: 'linear', // Use easeOut for smoother deceleration
                              }}
                            >
                              OVERVIEW
                            </motion.h1>
                            <p className='mb-2 text-[14px] text-[#827E78] sarala text-justify'>
                            Pranav Constructions Limited, founded in 2003, has established itself over the past decade as one of the top redevelopment companies based out of Mumbai predominantly undertaking redevelopment projects in the Western Suburbs focusing on Economical, Mid and Mass, and Aspirational homes. As a pure-play redeveloper, our portfolio spans to [●] million sq. ft. of developable area. We are currently present across the western suburbs of Mumbai – Vile Parle, Santacruz, Juhu, Bandra, Andheri, Goregaon, Ram Mandir, Malad, Kandivali and Borivali. By comprehending homeowner’s requirements and market demands, we craft functional, attractive redevelopment projects.
                            </p>
                            <p className='text-[14px] text-[#827E78] sarala text-justify'>
                            We prioritize obtaining all necessary municipal approvals and ensuring RERA compliance to enable smooth redevelopment process. Transparency and accountability are of paramount importance to us, with homeowners kept informed throughout the process. Our proven track-record of timely completion, strong execution capabilities and reputation of standing by our promises has fostered a trusted brand reputation. Leveraging our integrated business model, we ensure timely project delivery through our robust in-house capabilities in business development, architecture, design, legal and regulatory compliance, construction management as well as sales and marketing. A professionally qualified management team, with significant experience in areas of operations, design, development, finance, marketing, sales, engineering, legal, human resources and business development, expertly navigates market trends and requirements, ensuring our redevelopment projects are designed in alignment with customer aspirations. Moreover, we prioritise environmental stewardship, overseeing construction with minimal disruptions and pursuing green building certification, as exemplified by our silver-certified Asutosh CHSL redevelopment project,
                            </p>
                </div>
            </div>

        </div>
    )
}

export default AboutPCPL
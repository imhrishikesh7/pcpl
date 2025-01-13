import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { awardData } from '../data/data';
const Awards = () => {
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            {/* <span className="arrow-right"></span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>

        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>

        </div>
    );
    const sliderSettings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="marginal  w-full">
            <motion.h1
                className="viaoda md:text-4xl text-3xl text-center md:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                transition={{
                    duration: 0.5, // Increased duration for smoother transitions
                    ease: 'linear', // Use easeOut for smoother deceleration
                }}
            >
                AWARDS & RECOGNITIONS
            </motion.h1>
            <Slider {...sliderSettings}>
                {awardData.map((award, index) => (
                    <div key={index} className="p-4 h-[500px]">
                        <div className='relative bg-[#004B8B] pt-4 pb-16 mx-auto'>
                            <div
                                className="bg-[#004B8B] relative w-full h-[250px] bg-contain bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: "url('./about/award-design.svg')",
                                }}
                            >
                                <p className='text-[#D1B06D] text-center font-bold text-[14px] w-fit absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                                    {award.award}
                                </p>
                            </div>
                            <div className='absolute left-4 top-[85%]'>
                                <span className='bg-[#CBA864] py-2 px-6 text-2xl text-white'>{award.year}</span>
                                <div className='bg-white shadow-lg text-[#827E78] text-[13px] h-[130px] p-4 w-[95%]'>
                                    <p>{award.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className=''>
                <motion.h1
                    className="viaoda md:text-4xl text-3xl text-center md:mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                    transition={{
                        duration: 0.5, // Increased duration for smoother transitions
                        ease: 'linear', // Use easeOut for smoother deceleration
                    }}
                >
                    CERTIFICATIONS
                </motion.h1>
                <div className='flex justify-evenly'>
                    <div className='w-[100px] h-[100px] flex items-center justify-center p-2'>
                        <img src="./about/Maha-Rera.png" className="w-full h-full object-contain" alt="" />
                    </div>
                    <div className='w-[100px] h-[100px] flex items-center justify-center p-2'>
                        <img src="./about/Certified-Company.png" className="w-full h-full object-contain" alt="" />
                    </div>
                    <div className='w-[100px] h-[100px] flex items-center justify-center p-2'>
                        <img src="./about/Naredco.png" className="w-full h-full object-contain" alt="" />
                    </div>
                    <div className='w-[100px] h-[100px] flex items-center justify-center p-2'>
                        <img src="./about/Member.png" className="w-full h-full object-contain" alt="" />
                    </div>
                    <div className='w-[100px] h-[100px] flex items-center justify-center p-2'>
                        <img src="./about/Certified-Company2.png" className="w-full h-full object-contain" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Awards;
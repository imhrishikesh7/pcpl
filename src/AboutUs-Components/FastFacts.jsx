import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const FastFacts = () => {
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

    const cardData = [
        {
            title: "55+",
            content: "No. of Redevelopment Projects",
        },
        {
            title: "26",
            content: "No. of Completed Redevelopment Projects",
        },
        {
            title: "10",
            content: "No. of Under-construction Redevelopment Projects",
        },
        {
            title: "20",
            content: "No. of Upcoming Redevelopment Projects",
        },
        {
            title: "10+",
            content: "Years of Experience in Redevelopment Projects",
        },
        {
            title: "12+",
            content: "Lakh sq. ft. Total Developed Area",
        },
        {
            title: "10+",
            content: "Lakh sq. ft. Total Under-construction Area",
        },
        {
            title: "17+",
            content: "Lakh sq. ft. Total Developable Area in Pipeline",
        },
        {
            title: "1970+",
            content: "Happy Families Served",
        },
    ];

    return (
        <div className="relative">
            <img className="absolute md:w-[20vw] -top-20 -z-10 left-0" src="./about/Drawing-Realestate.svg" alt="" />
        <div className="marginal ">
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
                FAST FACTS
            </motion.h1>
            <Slider {...sliderSettings}>
                {cardData.map((card, index) => (
                    <div key={index} className="p-4 flex justify-center ">
                        <div className="m-auto bg-white border-2 border-[#005496] rounded-full w-[220px] h-[220px] flex flex-col items-center justify-center">
                            <h3 className="text-5xl viaoda text-[#005496] font-semibold">{card.title}</h3>
                            <p className="text-gray-600 text-center mt-2 text-sm px-4">
                                {card.content}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
            <p className="text-[10px] md:text-right my-5 sarala text-[#343331]">*Disclaimer: As of 31 August 2024</p>
        </div>
        </div>
    );
};

export default FastFacts;

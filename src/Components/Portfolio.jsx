import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Portfolio = () => {
    const cards = [
        { id: 1, img: "./home/por1.png", title: "OC\nRECEIVED", link: "/" },
        { id: 2, img: "./home/por2.png", title: "READY TO\nMOVE IN", link: "/" },
        { id: 3, img: "./home/por3.png", title: "SOLD OUT", link: "/" },
        { id: 4, img: "./home/por4.png", title: "UNDER-\nCONSTRUCTION", link: "/" },
        { id: 5, img: "./home/por5.png", title: "UPCOMING", link: "/" },
    ];

    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <span className="arrow-right"></span>
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <span className="arrow-left"></span>
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 800, // Increased speed for smoother transitions
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className='marginal'>
            <motion.h1 className="viaoda md:text-4xl text-3xl my-5 text-center md:mb-6 ml12-1"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
             transition={{
                 duration: 0.5, // Increased duration for smoother transitions
                 ease: 'linear', // Use easeOut for smoother deceleration
             }}
            >PROPERTY PORTFOLIO</motion.h1>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`p-4`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
                        transition={{
                            duration: 0.8, // Increased duration for smoother transitions
                            delay: index * 0.2,
                            type: 'tween',
                            stiffness: 100,
                            damping: 25,
                            ease: 'easeOut', // Use easeOut for smoother deceleration
                        }}
                    >
                        <div
                            className="text-4xl mb-2 m-auto flex items-end bg-no-repeat bg-center bg-contain w-full h-[420px]"
                            style={{ backgroundImage: `url(${card.img})` }}
                        >
                            <div className='w-full h-[22%] flex items-center justify-between mb-4'>
                                <div className='w-[65%] h-full flex items-center p-4 bg-[#005496] bg-opacity-70'>
                                    <h4 className='viaoda text-white text-[22px] leading-[30px] whitespace-pre-line'>{card.title}</h4>
                                </div>
                                <div className='w-[35%] h-full flex items-center justify-center p-4'>
                                    <a href={card.link}><img src="./home/cta.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl mb-2 text-[#004b8b]">{card.value}</h1>
                        <div className="text-base text-gray-500 whitespace-pre-line">{card.text}</div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}

export default Portfolio;

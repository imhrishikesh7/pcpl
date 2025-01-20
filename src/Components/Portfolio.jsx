import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
    const cards = [
        { id: 1, img: "./home/por1.png", title: "OC\nRECEIVED", link: "/" },
        { id: 2, img: "./home/por2.png", title: "READY TO\nMOVE IN", link: "/" },
        { id: 3, img: "./home/por3.png", title: "SOLD OUT", link: "/" },
        { id: 4, img: "./home/por3.png", title: "UNDER-\nCONSTRUCTION", link: "/" },
        { id: 5, img: "./home/por3.png", title: "UPCOMING", link: "/" },
    ];

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

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
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
            <h1 className="viaoda md:text-4xl text-3xl my-5 text-center md:mb-6 ml12-1">
                PROPERTY PORTFOLIO
            </h1>
            <Slider {...settings}>
                {cards.map((card, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true, // Animation triggers once when the card comes into view
                        threshold: 0.5, // Triggers when 50% of the element is visible
                    });

                    return (
                        <div key={card.id} className="p-4">
                            <div
                                className="text-4xl mb-2 m-auto flex items-end bg-no-repeat bg-center bg-contain w-full md:h-[600px] h-[300px]"
                                style={{ backgroundImage: `url(${card.img})` }}
                            >
                                <motion.div
                                    ref={ref}
                                    className={`absolute top-0 left-0 w-full h-full bg-black`}
                                    style={{
                                        clipPath: inView ? 'none' : 'inset(0 100% 0 0)',
                                        transition: 'clip-path 1s ease-in-out', 
                                    }}
                                />
                                <div className='w-full h-[18%] flex items-center justify-between mb-4'>
                                    <div className='w-[70%] h-full flex items-center p-4 bg-[#004B8B]/50 backdrop-blur-md'>
                                        <h4 className='viaoda text-white text-[22px] leading-[30px] whitespace-pre-line'>{card.title}</h4>
                                    </div>
                                    <div className='w-[35%] h-full flex items-center justify-center p-4'>
                                        <a href={card.link}><img src="./home/cta.svg" alt="" /></a>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-4xl mb-2 text-[#004b8b]">{card.value}</h1>
                            <div className="text-base text-gray-500 whitespace-pre-line">{card.text}</div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Portfolio;

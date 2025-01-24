import React, { useState, useEffect, useRef } from 'react';
import { slidesData } from '../data/propertiesData'; // Import the slides data
import { Link } from 'react-router-dom';
const ProSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const slidesLength = slidesData.leftSlides.length; // Total number of slides
    const sliderContainerRef = useRef(null);
    const slidesLeftRef = useRef(null);
    const slidesRightRef = useRef(null);

    useEffect(() => {
        // Set initial position for left slides
        if (slidesLeftRef.current) {
            slidesLeftRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
        }
    }, [slidesLength]);

    const changeSlide = (direction) => {
        const sliderHeight = sliderContainerRef.current.clientHeight;

        if (direction === 'up') {
            setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
        } else if (direction === 'down') {
            setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
        }

        // Update the transform property to change the slide position
        if (slidesRightRef.current && slidesLeftRef.current) {
            slidesRightRef.current.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
            slidesLeftRef.current.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
        }
    };

    // Determine if the device is mobile or tablet
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div className="slider-container" ref={sliderContainerRef}>
            {isMobileOrTablet ? (
                // Mobile/Tablet Slider
                <div className="mobile-slider">
                    {slidesData.leftSlides.map((slide, index) => (
                        <div key={index} className="mobile-slide p-4 mb-2 w-[90%] m-auto" style={{ backgroundColor: slide.backgroundColor }}>
                            <h1 className='text-2xl'>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <Link to={slide.link} className="cta my-4"
                            >
                                <span className="hover-underline-animation text-blue-400"> Explore </span>
                                <svg
                                    id="arrow-horizontal"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="10"
                                    viewBox="0 0 46 16"
                                >
                                    <path
                                        id="Path_10"
                                        data-name="Path 10"
                                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                        transform="translate(30)"
                                        fill="white"
                                    ></path>
                                </svg>

                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                // Desktop Slider
                <>
                    <div className="left-slide" ref={slidesLeftRef}>
                        {slidesData.leftSlides.map((slide, index) => (
                            <div key={index} style={{ backgroundColor: slide.backgroundColor }}>
                                <h1 className='text-5xl viaoda'>{slide.title}</h1>
                                {/* <p>{slide.description}</p> */}
                                <Link to={slide.link} className="cta my-4"
                                >
                                    <span className="hover-underline-animation text-blue-400"> Explore </span>
                                    <svg
                                        id="arrow-horizontal"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="10"
                                        viewBox="0 0 46 16"
                                    >
                                        <path
                                            id="Path_10"
                                            data-name="Path 10"
                                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                            transform="translate(30)"
                                            fill="white"
                                        ></path>
                                    </svg>

                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="right-slide" ref={slidesRightRef}>
                        {slidesData.rightSlides.map((slide, index) => (
                            <div key={index} className='flex outer' style={{ background: `url(${slide.imageUrl})`, backgroundSize: 'cover' }}>
                                <div className='inner w-full flex justify-center items-center h-full bg-white m-auto'>
                                    <div className='w-[80%] border-l-4 border-[#0D7DDD] bg-[#000000] bg-opacity-40 backdrop-blur-lg rounded-xl p-8'>
                                        <p className='text-base text-justify text-white'>
                                            {slide.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="action-buttons">
                        <button className="up-button sl-btn" onClick={() => changeSlide('up')}>
                            {/* Up Arrow SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
                                <path d="m5 12 7-7 7 7" />
                                <path d="M12 19V5" />
                            </svg>
                        </button>
                        <button className="down-button sl-btn" onClick={() => changeSlide('down')}>
                            {/* Down Arrow SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                                <path d="M12 5v14" />
                                <path d="m19 12-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProSlider;

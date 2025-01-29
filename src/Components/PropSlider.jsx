import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
// Assuming you import slidesData like this
import { slidesData } from "../data/propertiesData";
import { Link } from "react-router-dom";

const ProSlider = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3, duration: 0.7, type: "spring" },
        }),
    };

    return (
        <Parallax
            strength={300}
            bgImage="./our-properties/parallax-prop.png"
            bgImageStyle={{
                objectFit: "cover",
                objectPosition: "center",
            }}
            className="min-h-[80vh] flex flex-col justify-center"
        >
            {/* Cards Section */}
            <motion.div
                className="flex flex-col md:justify-center justify-evenly items-center gap-6 mx-auto px-6 z-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {slidesData.set1.map((card, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        className="p-8 md:w-[50%] bg-gradient-to-r from-[#105058] to-[#004b8b]"
                    >
                        {/* <Link 
  to={card.link} 
  className="relative w-fit z-10 text-3xl md:text-5xl sarala-bold text-gray-800 font-bold 
             hover:text-blue-500 transition-all duration-300 ease-in-out"
>
  {card.title}
  <span className="absolute bottom-0 left-0 block w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out hover:w-full"></span>
</Link> */}

                        <Link to={card.link}
                            className="pro-cta text-1xl md:text-2xl">
                            <span className="sarala-bold">{card.title}</span>
                            <span className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="svg-icon"
                                >
                                    <path
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                    ></path>
                                </svg>
                            </span>
                        </Link>
                        {/* <p className="text-[12px] sarala text-white">
                        {card.description}
                        </p> */}

                    </motion.div>
                ))}

            </motion.div>
        </Parallax>
    );
};

export default ProSlider;
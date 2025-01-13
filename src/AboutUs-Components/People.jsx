import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { peopleData } from "../data/data"; // Ensure this path is correct

const People = () => {
    const [activeCategory, setActiveCategory] = useState("boardOfDirectors");
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleCardClick = (card) => {
        navigate(`/details/${card.id}`, { state: card });
    };

    const handleThirdButtonClick = () => {
        navigate("/board-committees"); // Redirect to the desired page
    };

    return (
        <div className="py-10 px-4 marginal">
            {/* Buttons */}
            <div className="flex flex-col md:flex-row w-fit m-auto justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
                {Object.keys(peopleData).map((category, index) => (
                    <button
                        key={category}
                        className={`px-6 py-2 text-white ${activeCategory === category
                            ? "bg-[#E1A83A]"
                            : "bg-[#004B8B] hover:bg-[#003e74] duration-300"
                            }`}
                        onClick={
                            index === 2 // Check if it's the 3rd button (0-based index)
                                ? handleThirdButtonClick
                                : () => setActiveCategory(category)
                        }
                    >
                        {category
                            .replace(/([A-Z])/g, " $1") // Add space before capital letters
                            .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize first letter */}
                    </button>
                ))}
            </div>

            {/* Cards Slider */}
            <Slider {...settings}>
                {peopleData[activeCategory]?.length > 0 ? (
                    peopleData[activeCategory].map((card) => (
                        <div
                            key={card.id}
                            className="p-4"
                            onClick={() => handleCardClick(card)}
                        >
                            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300">
                                {/* Image Container */}
                                <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Card Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 text-left bg-[#004B8B]/70 backdrop-blur-md">
                                        <h3 className="text-xl font-semibold text-white">{card.name}</h3>
                                        <p className="text-white">{card.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No data available for this category.</p>
                )}
            </Slider>
        </div>
    );
};

export default People;

import React from "react";
import { useLocation } from "react-router-dom";
import GlobalCover from "../Components/GlobalCover";
// import CovImg from "../../public/about/about-cover.png";

const PeopleDetails = () => {
    const { state } = useLocation();
    const { image, name, position, description } = state || {};
    console.log(state);


    return (
        <div className="">
            <GlobalCover src="/about/about-cover.png" title={name} subtitle={position} />

            <div className="marginal ">
            <div className="md:flex my-4 py-10 justify-evenly gap-6">
                <div className="md:w-[24vw] ">
                    <img
                        src={image}
                        alt={name}
                        className="object-contain"
                    />
                </div>
                <div className="w-[50vw]">
                    {/* <h1 className="text-2xl text-[#004B8B] font-bold mb-2">{name}</h1> */}
                    {/* <h2 className="text-lg text-gray-600 mb-4">{position}</h2> */}
                    {Array.isArray(description) ? (
                        <ul className="text-center text-[18px] text-gray-700 text-justify list-disc list-inside">
                            {description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-[18px] text-center text-gray-700 text-justify">{description}</p>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default PeopleDetails;

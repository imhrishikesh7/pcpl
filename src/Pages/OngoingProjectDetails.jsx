import React, { useState, useEffect } from "react";
import { ongoingProjectsData } from '../data/propertiesData';
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const OngoingProjectDetails = () => {
    const { projectId } = useParams();
    const project = ongoingProjectsData["Ongoing Project"].find(
        (item) => item["Sr. No."] === parseInt(projectId)
    );

    if (!project) {
        return <div>Project not found</div>;
    }

    // Array of project details to display in the slider
    const slides = [
        { title: "Configuration", content: project.Configuration },
        { title: "Constructable Area", content: `${project["Constructable Area (in sq. ft)"]} (sq. ft)` },
        { title: "Price", content: project.Price },
        { title: "Amenities", content: project["List of Amenities"] },
        { title: "Construction update", content: `${project["Construction update"]}` },
        // { title: "Estimated Tenure", content: project["Estimated tenure of the Project"] },
    ]; 

    // Tabs configuration
    const tabs = [
        { title: "Floor Plans", key: "Floor Plans" },
        { title: "Virtual Tour", key: "Virtual Tour Link" },
        { title: "Brochures", key: "Brochure" },
    ];

    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        // Automatically set the first active tab if not already set
        if (!activeTab && tabs.length > 0) {
            setActiveTab(tabs[0].key);
        }
    }, [tabs, activeTab]);

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    return (
        <div>
            <div className="relative flex md:items-center items-end justify-center w-[100vw] md:h-[100vh] h-[130vh] overflow-hidden">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${project.img})`,
                        filter: "brightness(70%) blur(2px)",
                        zIndex: -1, // Places the background behind the content
                    }}
                ></div>
                <div className="marginal md:h-[80vh] flex flex-col items-center justify-end h-[80vh]">
                    <h1 className="viaoda text-4xl md:text-7xl md:mb-8 mb-4 uppercase text-white">
                        {project["Ongoing Project"]}
                    </h1>
                    <div className="md:flex gap-4 items-stretch justify-center">
                        <div className="bg-black/60 md:w-[70%] p-8 text-justify">
                            <h1 className="viaoda text-4xl md:text-4xl mb-3 text-[#CBA864]">ABOUT</h1>
                            <p className="text-[#cecece] sarala">{project["About the Project"]}</p>
                            <div className="flex mt-8 items-start">
                                <span className="text-[#CBA864] text-xl mr-1">
                                    <FaLocationDot />
                                </span>
                                <b className="text-[#cecece] font-bold">{project.Location}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full text-white bg-black p-6">
                <div className="md:container py-10 gap-6 mx-auto md:flex w-full justify-between">
                    {/* Project Details Section */}
                    <div className="my-5 md:w-[50%]">
                        <h1 className="md:text-4xl uppercase text-3xl viaoda font-bold mb-6">
                            Project Details
                        </h1>
                        {slides.map((slide, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between items-center border-b-[0.5px] border-gray-500 py-2">
                                    <div className="text-lg w-[50%] text-left">{slide.title}</div>
                                    <div className="text-lg w-[50%] text-left">
                                        <div className="w-fit text-left block py-1">
                                            <p className="text-[#cecece] whitespace-pre-line">{slide.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-[50%]">
                        <img
                            src={project.img}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
                <img
                    src="/about/graphics-about.svg"
                    className="md:absolute left-0 bottom-0 md:w-[50%] opacity-[0.5]"
                    alt=""
                />
            </div>

            <div className="px-4 py-10 bg-black border-t border-gray-400">
            <div className="container mx-auto">
                {/* Navigation Component */}
                <div className="flex gap-4 mb-4 border-b border-gray-400">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => handleTabClick(tab.key)}
                            className={`relative px-4 py-2 font-semibold ${
                                project[tab.key]
                                    ? "text-white"
                                    : "text-gray-400 cursor-not-allowed"
                            }`}
                            disabled={!project[tab.key]}
                        >
                            {tab.title}
                            {project[tab.key] && (
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#CBA864] ${
                                        activeTab === tab.key
                                            ? "opacity-100"
                                            : "opacity-0"
                                    } transition-opacity duration-300`}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Render Tab Content */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    {activeTab === "Floor Plans" && project["Floor Plans"] && (
                        <div>
                            <h2 className="text-2xl text-[#cecece] mb-4">Floor Plans</h2>
                            <img
                                src={project["Floor Plans"]}
                                alt="Floor Plans"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    )}
                    {activeTab === "Virtual Tour Link" && project["Virtual Tour Link"] && (
                        <div>
                            <h2 className="text-2xl text-[#cecece] mb-4">Virtual Tour</h2>
                            <iframe
                                src={project["Virtual Tour Link"]}
                                title="Virtual Tour"
                                className="w-full h-[500px] rounded-lg"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                    {activeTab === "Brochure" && project["Brochure"] && (
                        <div>
                            <h2 className="text-2xl text-[#cecece] mb-4">Brochures</h2>
                            <a
                                href={project["Brochure"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                Download Brochure
                            </a>
                        </div>
                    )}
                    {!activeTab && (
                        <div className="text-gray-400">Select a tab to view details.</div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default OngoingProjectDetails;
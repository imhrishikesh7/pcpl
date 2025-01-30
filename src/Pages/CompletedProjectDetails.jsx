import React, { useState, useEffect } from "react";
import { completedProjectsData } from '../data/propertiesData';
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';
const CompletedProjectDetails = () => {


    const { projectId } = useParams();
    const project = completedProjectsData["Completed Project"].find(
        (item) => item["Sr. No. "] === parseInt(projectId)
    );


    if (!project) {
        return <div>Project not found</div>;
    }

    // Get the current scroll position
    const { scrollY } = useScroll();

    // Map the scroll position to a rotation value
    const rotateFast = useTransform(scrollY, [0, 1000], [0, 360]);  // Fast rotation
    const rotateMedium = useTransform(scrollY, [0, 1500], [0, 360]); // Medium speed
    const rotateSlow = useTransform(scrollY, [0, 2000], [0, 360]);   // Adjust the range as needed
    // Array of project details to display in the slider
    const slides = [
        { title: "Configuration", content: project.Configuration },
        { title: "Constructable Area", content: `${project["Constructable Area (in sq. ft)"]} (sq. ft)` },
        { title: "Price", content: project.Price },
        { title: "Amenities", content: project["List of Amenities"] },
        { title: "Timeline", content: `${project["Project completed in months"]} (Months)` },
        { title: "Estimated Tenure", content: project["Estimated tenure of the Project"] },
    ];
    const renderAmenities = (amenitiesText) => {
        const amenitiesImages = {
            "Solar panel": "/our-properties/amenities/solar-panel.png",
            "Solar Panel": "/our-properties/amenities/solar-panel.png",
            "kids play area": "/our-properties/amenities/children-play-area.png",
            "Children play area": "/our-properties/amenities/children-play-area.png",
            "seating area": "/our-properties/amenities/seating-area.png",
            "Accupressure path way": "/our-properties/amenities/accupressure-pathway.png",
            "amphitheater": "/our-properties/amenities/mini-amphitheatre.png",
            "gym": "/our-properties/amenities/gym.png",
            "yoga area": "/our-properties/amenities/yoga-deck.png",
            "bamboo garden": "/our-properties/amenities/bamboo-garden.png",
            "Barbeque Area": "/our-properties/amenities/barbeque-area.png",
            "Blooming Deck": "/our-properties/amenities/blooming-deck.png",
            "Butterfly garden": "/our-properties/amenities/butterfly-garden.png",
            "EV Charging point": "/our-properties/amenities/ev-charging-point.png",
            "Foot pool": "/our-properties/amenities/foot-pool.png",
            "Society Office & Fitness Center": ["/our-properties/amenities/society-office.png", "/our-properties/amenities/fitness-center.png"],
            "Society Office ":"/our-properties/amenities/society-office.png",
            "Society Office & Multipurpose Room":["/our-properties/amenities/society-office.png", "/our-properties/amenities/multipurpose-room.png"],
            "Society office": "/our-properties/amenities/society-office.png",
            "Fitness Center" : "/our-properties/amenities/fitness-center.png",
            "Party Area ":"/our-properties/amenities/party-area.png",
            "Seating Area ":"/our-properties/amenities/seating-area.png",
            "senior citizen Seating Area" : "/our-properties/amenities/senior-citizen-area.png",
            "Yoga Deck" : "/our-properties/amenities/yoga-deck.png",
            "Mini Amphitheatre ": "/our-properties/amenities/mini-amphitheatre.png",
            "Walking Track" : "/our-properties/amenities/walking-track.png",
            "Party area" : "/our-properties/amenities/party-area.png",
            "Star Gazing corner" : "/our-properties/amenities/star-gazing-area.png",
            "Pergola with seating" : "/our-properties/amenities/pergola-area.png",
            "Toddler's Play Area " : "/our-properties/amenities/children-play-area.png",
            "walking track" : "/our-properties/amenities/walking-track.png",
            // 'community gathering area',
            "sensory garden" : "/our-properties/amenities/sensory-garden.png",
            "Seating Area" : "/our-properties/amenities/seating-area.png",
            "fitness centre" : "/our-properties/amenities/fitness-center.png",
            "barbeque area" : "/our-properties/amenities/barbeque-area.png",
            "Medicinal garden" : "/our-properties/amenities/medicinal-garden.png",
            "party deck" : "/our-properties/amenities/party-area.png",
            "Senior citizen seating area" : "/our-properties/amenities/senior-citizen-area.png",
            "walking pathway" : "/our-properties/amenities/walking-track.png",
            "Reflexlogy " : "/our-properties/amenities/reflexogy-area.png",
            "Mini Turf " : "/our-properties/amenities/lawn-turf.png",
            "Zengarden" : "/our-properties/amenities/zen-garden.png",
            "meditation area" : "/our-properties/amenities/meditation-deck.png",
            "Gym" : "/our-properties/amenities/gym.png",
            "Seating area" : "/our-properties/amenities/seating-area.png",
            "Accupressure pathway" : "/our-properties/amenities/accupressure-pathway.png",
            "solar panel" : "/our-properties/amenities/solar-panel.png",
            "Kids play area" : "/our-properties/amenities/children-play-area.png",
            "Meditation area" : "/our-properties/amenities/meditation-deck.png",
            "accupressure pathway" : "/our-properties/amenities/accupressure-pathway.png",
            "leisure seating area" : "/our-properties/amenities/leisure-seating-area.png",
            "Toddler's Play Area" : "/our-properties/amenities/children-play-area.png",
            "Reflexology area" : "/our-properties/amenities/reflexogy-area.png",
            "Reading alcove" : "/our-properties/amenities/reading-alcove.png",
            "pargola area": "/our-properties/amenities/pergola-area.png",
            "MiniGolf" : "/our-properties/amenities/mini-golf.png",
            "Senior Citizen Seating area" : "/our-properties/amenities/senior-citizen-area.png",
            "Children play area" : "/our-properties/amenities/children-play-area.png",
            "Jogging track" : "/our-properties/amenities/jogging-track.png",
            "Gazebo" : "/our-properties/amenities/gazeboo.png",
            "Pantry area" : "/our-properties/amenities/pantry-area.png",
            "Mini turf" : "/our-properties/amenities/lawn-turf.png",
            "Portable Toilet" : "/our-properties/amenities/portable-toilet.png",
            "Senior Citizen area" : "/our-properties/amenities/senior-citizen-area.png",
            "Toddler play area" : "/our-properties/amenities/children-play-area.png",
            "Barbeque area" : "/our-properties/amenities/barbeque-area.png",
            "Deck" : "/our-properties/amenities/deck.png",
            " Walking track" : "/our-properties/amenities/walking-track.png",
            "Swimming Pool & Kids pool" : "/our-properties/amenities/swimming-pool.png",
            "Pool Deck" : "/our-properties/amenities/pool-deck.png",
            "Bar counter" : "/our-properties/amenities/bar-counter.png",
            "Pergola" : "/our-properties/amenities/pergola-area.png",
            "Seating Cove" : "/our-properties/amenities/seating-cove.png",
            "Board games" : "/our-properties/amenities/board-games.png",
            "Leisure Lawn" : "/our-properties/amenities/leisure-lawn.png",
            "Movie Lounge" : "/our-properties/amenities/movie-lounge.png",
            "Toddler play area and Gymnasium" : ["/our-properties/amenities/children-play-area.png","/our-properties/amenities/gym.png"],
            "Fitness center": "/our-properties/amenities/fitness-center.png",
            "Toddlers play area" : "/our-properties/amenities/children-play-area.png",
            "Reflexology area " : "/our-properties/amenities/reflexogy-area.png",
            "sensory garden " : "/our-properties/amenities/sensory-garden.png",
            "Gymnasium" : "/our-properties/amenities/gym.png",
            "Zen Garden" : "/our-properties/amenities/zen-garden.png",
            "Sensory Garden" : "/our-properties/amenities/sensory-garden.png",
            "Barbeque Area" : "/our-properties/amenities/barbeque-area.png",
            "Fitness Center " : "/our-properties/amenities/fitness-center.png",
            "Zen Garden " : "/our-properties/amenities/zen-garden.png",
            "Society office " : "/our-properties/amenities/society-office.png",
            "EV Charging point" : "/our-properties/amenities/ev-charging-point.png",
            "Star gazing area" : "/our-properties/amenities/star-gazing-area.png",
            "Reading alcove with pargola above" : "/our-properties/amenities/reading-alcove.png",
            "Butterfly garden" : "/our-properties/amenities/butterfly-garden.png",
            "Multipurpose lawn" : "/our-properties/amenities/multipurpose-room.png",
            "Blooming Deck" : "/our-properties/amenities/blooming-deck.png",
            "Senior Citizen's deck" : "/our-properties/amenities/senior-citizen-area.png",
            "Strolling Lawn" : "/our-properties/amenities/strolling-lawn.png",
            "Sky Lounge" : "/our-properties/amenities/sky-launge.png",
            "Meditation Deck" : "/our-properties/amenities/meditation-deck.png",
            "Yoga Lawn" : "/our-properties/amenities/yoga-deck.png",
            "Party Lawn" : "/our-properties/amenities/party-area.png",
            "Party Deck" : "/our-properties/amenities/party-area.png",
            "Floor game zone" : "/our-properties/amenities/floor-game-zone.png",
            "Toddler's play Area" : "/our-properties/amenities/children-play-area.png"
        };

        return amenitiesText.split(',').map((item, index) => {
            const amenity = item.trim();
            const images = amenitiesImages[amenity]; // Get the images for the amenity
        
            if (!images) return null; // Skip if no image found
        
            return (
                <div key={index} className="amenity-item">
                    <div className="flex gap-2 flex-wrap"> {/* Flex container for side-by-side layout */}
                        {Array.isArray(images) ? (
                            images.map((imgSrc, imgIndex) => (
                                <img key={imgIndex} src={imgSrc} alt={amenity} className="" />
                            ))
                        ) : (
                            <img src={images} alt={amenity} className="" />
                        )}
                    </div>
                </div>
            );
        }).filter(Boolean);
        
    };

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
        <ParallaxProvider>
            <div className="relative md:items-center items-end justify-center w-[100vw] md:h-[100vh] h-[140vh] overflow-hidden">
                {/* Background Layer */}
                <Parallax
                    bgImage="/our-properties/blue-bg.jpg"
                    y={[-50, 50]}  // Stronger effect  // Adjust for more or less effect
                    className="absolute flex flex-col justify-end inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        zIndex: -1, // Keep the background behind the content
                        height: '100vh', // Ensure it covers full height of the viewport

                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(/our-properties/blue-bg.jpg)`
                    }}
                >
                    <motion.div
                        className="absolute top-40 right-20 w-16 h-16"
                        style={{ rotate: rotateSlow }} // No need for transition here
                    >
                        {/* Outer golden border */}
                        <div className="absolute inset-0 border-[0.7px] border-[#ffcc00]"></div>
                        {/* Inner golden border slightly shifted */}
                        <div className="absolute -right-2 -bottom-2 inset-2 border-[0.7px] border-[#ff9900]"></div>
                    </motion.div>
                    <motion.div className="absolute top-64 right-20 w-10 h-10"
                        style={{ rotate: rotateMedium }} // No need for transition here

                    >
                        <div className="absolute inset-0 border-[0.7px] border-[#ffcc00]"></div>
                        <div className="absolute -right-2 -bottom-2 inset-2 border-[0.7px] border-[#ff9900]"></div>
                    </motion.div>
                    <motion.div className="absolute bottom-20 right-20 w-14 h-14"
                        style={{ rotate: rotateFast }} // No need for transition here

                    >
                        <div className="absolute inset-0 border-[0.7px] border-[#ffcc00]"></div>
                        <div className="absolute -right-2 -bottom-2 inset-2 border-[0.7px] border-[#ff9900]"></div>
                    </motion.div>
                    <div className="marginal">
                        <h1 className="viaoda text-4xl md:text-5xl mb-6 text-[#CBA864]">
                            {project["Completed Project"]}
                            <span className="text-[#CBA864]">  ({project["Project Name Coined by the Company"]})</span>
                        </h1>

                        <div className="w-full parallax-layers flex gap-8">
                            <div className=" relative w-[90vh] golden-frame">
                                <Parallax speed={10}>
                                    <img src={project.img} className="w-full" alt="Project" />
                                </Parallax>
                            </div>

                            <style jsx>{`
                            .golden-frame {
                                position: relative;
                            }

                            .golden-frame::after {
                                content: "";
                                position: absolute;
                                top: 5px;
                                left: 5px;
                                right: -10px; /* Extend more on the right */
                                bottom: -10px; /* Extend more on the bottom */
                                border: 3px solid gold;
                                z-index: -1;
                            }
                            `}</style>

                            <div className="w-[40%] flex flex-col gap-4">
                                <div className="w-[30vh]">
                                    <div className="relative golden-frame">
                                        <Parallax speed={1}>

                                            <img
                                                src={project["Logos made by the Company"]}
                                                className="w-full"
                                                alt=""
                                            />
                                        </Parallax>
                                    </div>
                                </div>
                                <style jsx>{`
                                .golden-frame {
                                    position: relative;
                                    display: inline-block;
                                }

                                .golden-frame::after {
                                    content: "";
                                    position: absolute;
                                    top: 4px;
                                    left: 4px;
                                    right: -8px; /* More on the right */
                                    bottom: -8px; /* More on the bottom */
                                    border: 2px solid gold;
                                    z-index: -1;
                                }
                                `}</style>
                                <p className="text-gray-300 text-[12px] md:text-base sarala">{project["About the Project"]}</p>

                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="marginal md:h-[90vh] flex flex-col items-center justify-end h-[80vh]">
                    {/* <h1 className="viaoda text-4xl md:text-6xl md:mb-8 mb-4 uppercase text-white">
                        {project["Completed Project"]}
                    </h1> */}

                    {/* <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="md:h-48 md:w-[90%] w-full flex flex-col justify-end">
                            <div className="md:w-64 w-[50%]">
                                {project["Logos made by the Company"] && (
                                    <img
                                        src={project["Logos made by the Company"]}
                                        className="w-full h-full object-contain"
                                        alt="Company Logo"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="bg-black/70 md:w-[90%] p-8 text-justify">
                            <h1 className="viaoda text-4xl md:text-4xl mb-3 text-[#CBA864]">{project["Completed Project"]} | {project["Project Name Coined by the Company"]}</h1>
                            <p className="text-gray-300 text-[12px] md:text-base sarala">{project["About the Project"]}</p>
                            <div className="flex mt-8 items-start">
                                <span className="text-[#CBA864] text-xl mr-1">
                                    <FaLocationDot />
                                </span>
                                <b className="text-gray-200 sarala-bold text-[12px] md:text-base font-bold">{project.Location}</b>
                            </div>
                        </div>
                    </div> */}
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
                                            {slide.title === "Amenities" ? (
                                                <div className="flex gap-2">{renderAmenities(slide.content)}</div>
                                            ) : (
                                                <p className="text-[#cecece] whitespace-pre-line">{slide.content}</p>
                                            )}
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

            <div className="px-4 py-10"
                style={{
                    zIndex: -1, // Keep the background behind the content
                    height: '100vh', // Ensure it covers full height of the viewport

                    backgroundImage: `url(/our-properties/subtle-bg.jpg)`
                }}
            >
                <div className="container mx-auto">
                    {/* Navigation Component */}
                    <div className="flex gap-4 mb-4 border-b border-gray-400">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => handleTabClick(tab.key)}
                                className={`relative px-4 py-2 font-semibold ${project[tab.key]
                                    ? "text-white"
                                    : "text-gray-400 cursor-not-allowed"
                                    }`}
                                disabled={!project[tab.key]}
                            >
                                {tab.title}
                                {project[tab.key] && (
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#CBA864] ${activeTab === tab.key
                                            ? "opacity-100"
                                            : "opacity-0"
                                            } transition-opacity duration-300`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Render Tab Content */}
                    <div className="bg-gray-800 p-6 rounded-lg ">
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
        </ParallaxProvider>
    );
};

export default CompletedProjectDetails;

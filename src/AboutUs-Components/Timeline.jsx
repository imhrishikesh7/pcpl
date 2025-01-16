import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the default styles
import "./Timeline.css"
import Heading from "../Components/Heading";
const Timeline = () => {

    const sharedIconStyle = {
        background: "rgb(30, 58, 138)",
        color: "#fff",
        position: "absolute",
        left: "",
        transform: "scale(0.3)",
        transition: "all 0.4s ease-out",
        position: "absolute",
    };
    const timelineData = [
        {
            date: "2012",
            img: "./about/t1.png",
            description: "Launched our inaugural redevelopment project, ‘Kiran Apartments’ a 30 unit project in Goregaon (West), Mumbai covering a total of 16,548 sq. ft. developable area.",
        },
        {
            date: "2015",
            img: "./about/t2.png",
            description: "Initiated our first redevelopment project, ‘Ashutosh CHSL’, a 20 unit project in Borivali (West), encompassing 18, 962 sq. ft. of developable area.",
        },
        {
            date: "2017",
            img: "./about/t3.png",
            description: "Expanded into the Malad micro-market of Mumbai’s western suburbs (north region) by launching three redevelopment projects namely, Deep CHSL, Rajendra Apartment CHSL and The Malad Rajhans CHSL. Together, these projects feature 112 units and cover a total developable area of 1,03,437 sq. ft. ",
        },
        {
            date: "2019",
            img: "./about/t4.png",
            description: "Secured ₹450 million in Foreign Direct Investment (FDI) from RiverCrest India Infrastructure Private Limited.",
        },
        {
            date: "2020",
            img: "./about/t5.png",
            description: "Launched Pravesh Co-operative Housing Society, our first mid-sized redevelopment project in Borivali, featuring 114 units and 1,49,830 sq. ft. of developable area.",
        },
        {
            date: "2022",
            img: "./about/t6.png",
            description: ["Completed 10 re-development projects comprising of 523 units and spanning a total developable area of 555,467 sq. ft.", "Entered Santacruz micro-market with the Pearl Palace redevelopment project, which covers 82,064 sq. ft. of developable area."],
        },
        {
            date: "2024",
            img: "./about/t7.png",
            description: ["Our portfolio reached 23,40,815 sq.ft. of developable area across 37 redevelopment projects, comprising 1,998 units.", "Achieved over 95% pre-sales of the inventory for the Shining Star CHSL redevelopment project within six months of its the launch."],
        },
    ];

    return (
        <div className="timeline-wrapper bg-white mx-auto py-8">
            <div className="py-8 bg-[#004B8B] text-center bg-[url('./about/heading-vector.svg')] bg-cover bg-center">
                <Heading title="MILESTONE MOMENTS" color="white" subtitle="Financial Year" />
            </div>

            <VerticalTimeline lineColor="#004B8B">
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={item.date}
                        dateClassName="custom-date"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        className="vertical-timeline-element--work"
                        iconStyle={sharedIconStyle} // Reusing the shared style
                    >
                        <img src={item.img} className="vertical-timeline-element-title text-lg font-bold" />
                        <h4 className="vertical-timeline-element-subtitle text-sm text-gray-500">{item.subtitle}</h4>
                        <div className="text-sm text-gray-700">
                            {Array.isArray(item.description) ? (
                                item.description.map((desc, idx) => (
                                    <p
                                        key={idx}
                                        className={idx === 0 ? "mb-4 text-justify" : "mb-2 text-justify"} // Add margin after the first description
                                    >
                                        {desc}
                                    </p>
                                ))
                            ) : (
                                <p className="text-justify">{item.description}</p>
                            )}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;

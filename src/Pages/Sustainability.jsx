import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import Slider from "react-slick";
import { esgData } from '../data/data';
import Heading from '../Components/Heading';
const Sustainability = () => {
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            {/* <span className="arrow-right"></span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>

        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>

        </div>
    );
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
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
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div>
            <GlobalCover src="./esg/eng-cov.png" title="SUSTAINABILITY" />
            <div className='marginal'>
                <p className='text-[#827E78] text-xl mb-4 text-center'>
                    We recognise our responsibility towards our beautiful planet. As sustainability has become the need of the hour, we have adopted responsible practices at the core of all of our operations. We are pursuing green building certification for our projects, ensuring adherence to green standards.
                </p>
                <p className='text-[#827E78] text-xl text-center'>
                    We ensure that while creating value for our stakeholders, we relentlessly contribute towards building a brighter and greener future.
                </p>

                <div className='my-10'>
                    <Slider {...settings}>
                        {Object.entries(esgData).map(([key, value]) => (
                            <div key={key} className="p-4">
                                <div className="bg-white border-2 border-[#004B8B] p-6 flex flex-col items-center space-y-6 h-[450px]">
                                    <img
                                        src={value.icon}
                                        alt={key}
                                        className="w-20 h-20 object-contain r"
                                    />
                                    <h3 className="text-xl font-semibold text-[#004B8B]">{key}</h3>
                                    <ul className="text-sm text-gray-600 list-none space-y-2 overflow-hidden">
                                        {value.content.map((item, index) => (
                                            <li key={index} className="text-center">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className='md:flex justify-between my-10 gap-6'>
                    <div className='md:w-[70%]'>
                        <div>
                            <Heading title="CORPORATE SOCIAL RESPONSIBILITY" color="#221C13" />
                        </div>
                        <p className='text-[#827E78] text-justify mb-4'>
                        Our Company has undertaken various Corporate Social Responsibility (CSR) programmes, including education and skill development initiatives for underprivileged and orphaned children, such as constructing/renovating schools and libraries, providing scholarships and setting-up skill-development centres. We also contribute to government-funded research and development projects in science, technology, engineering and medicine.
                        </p>
                        <p className='text-[#827E78] text-justify mb-4'>
                        Each CSR project is unique and is executed according to its specific timelines, outcomes and framework as decided by the CSR Committee. The CSR Committee oversees the execution of each initiative, establishing a transparent monitoring mechanism, tracking progress and ensuring that activities are carried out either directly by the Company or through implementation agencies.
                        </p>
                        <p className='text-[#827E78] text-justify mb-4'>
                        The CSR Committee ensures that disbursed CSR funds are utilised in accordance with their approved purposes and manner. Additionally, the CSR Committee keeps the Board of Directors informed about the progress of CSR projects, programmes and activities, including expenditures incurred by the implementing agencies, till the allocated budget is fully utilised.
                        </p>
                    </div>
                    <div className='md:w-[30%]'>
                        <img src="./esg/csr.png" className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustainability
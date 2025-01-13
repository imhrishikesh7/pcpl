import React, { useState } from 'react';
import GlobalCover from '../Components/GlobalCover';
import { peopleData } from "../data/data";
import { committeeData } from "../data/committeeData";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BoardCommittees = () => {
    const [expandedCommittee, setExpandedCommittee] = useState(null);

    const handleToggle = (key) => {
        setExpandedCommittee(prevKey => (prevKey === key ? null : key));
    };

    return (
        <div>
            <GlobalCover src="/b-committees/com-cover.png" title="BOARD COMMITTEES" />

            <div className="bg-[#e6e6e6]">
                <div className="container mx-auto px-8 py-16 space-y-24">
                    {committeeData.map((committee) => {
                        const members = peopleData.boardOfDirectors.filter(person => person[committee.key] === 1);

                        return (
                            <div key={committee.key} className="bg-[#f5f5f5] rounded-lg shadow-xl overflow-hidden mb-12">
                                {/* Committee Header */}
                                <div className="text-center py-12 px-6 bg-[#f0f0f0] rounded-t-lg">
                                    <h3 className="text-3xl font-semibold text-[#1D3557]">{committee.name}</h3>
                                    <p className="mt-4 text-lg text-gray-700">Overview of committee members and responsibilities</p>
                                </div>

                                {/* Members Grid */}
                                <div className="md:flex gap-4 justify-center p-8">
                                    {members.map(person => (
                                        <div key={person.id} className="person-card md:w-[25%] bg-[#ffffff] shadow-lg rounded-lg p-6 flex flex-col items-center text-center justify-between hover:shadow-xl transition-all">
                                            <div className="image-container mb-6">
                                                <img
                                                    src={person.image}
                                                    alt={person.name}
                                                    className="w-48 h-48 object-cover rounded-full border-2 border-[#004B8B]"
                                                />
                                            </div>
                                            <div className="text-container">
                                                <p className="text-[15px] font-semibold text-[#1D3557]">{person.name}</p>
                                                <div className="my-2 h-[2px] w-full bg-gray-300"></div>
                                                <p className="text-sm text-gray-600 mt-1">{person[`${committee.key}_position`]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Terms of Reference Section */}
                                <div className="mt-6 px-6 flex flex-col items-center pb-12">
                                    <button
                                        onClick={() => handleToggle(committee.key)}
                                        className="text-[#004B8B] text-lg font-semibold flex items-center transition-transform"
                                    >
                                        Terms of Reference
                                        <span
                                            className={`ml-2 transform transition-transform ${expandedCommittee === committee.key ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-down"><circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-4-4" /></svg>
                                        </span>
                                    </button>


                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: expandedCommittee === committee.key ? "auto" : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="overflow-hidden mt-6"
                                    >
                                        <div className="bg-white p-6 shadow-lg text-gray-700 text-lg leading-relaxed">
                                            {committee.termsOfReference.length > 200
                                                ? `${committee.termsOfReference.substring(0, 200)}...`
                                                : committee.termsOfReference
                                            }
                                        </div>
                                        {/* <Link
                                            to={`/terms-of-reference/${committee.key}`}
                                            className="text-[#004B8B] text-center text-lg font-semibold hover:underline mt-4 block"
                                        >
                                            Read Full Terms of Reference
                                        </Link> */}

                                        <div className='w-[130px] mt-8 mx-auto'>
                                        <Link
                                            class="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-[14px] text-[#004B8B] border-[1px] border-[#004B8B] transition-all duration-700 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#004B8B] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px- py-1 overflow-hidden border-2 rounded-full group"
                                            type="submit"
                                            // className='w-[100px]'
                                            to={`/terms-of-reference/${committee.key}`}
                                        >
                                            Load More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 19"
                                                class="w-7 h-7 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                            >
                                                <path
                                                    class="fill-gray-800 group-hover:fill-gray-800"
                                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                ></path>
                                            </svg>
                                        </Link>
                                        </div>


                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardCommittees;

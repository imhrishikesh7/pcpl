import React, { useState } from 'react';
import Heading from '../Components/Heading';
import { jobs, jobTypes, locations } from '../data/careersData'; // Import data

const Jobs = ({ onApplyClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [isJobTypeOpen, setIsJobTypeOpen] = useState(false); // Dropdown toggle
    const [isLocationOpen, setIsLocationOpen] = useState(false); // Dropdown toggle

    const handleFilter = (list, setList, value) => {
        if (list.includes(value)) {
            setList(list.filter((item) => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    const filteredJobs = jobs.filter((job) => {
        const matchesQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesJobType =
            selectedJobTypes.length === 0 || selectedJobTypes.some((type) => job.tags.includes(type));
        const matchesLocation =
            selectedLocations.length === 0 || selectedLocations.some((location) => job.tags.includes(location));

        return matchesQuery && matchesJobType && matchesLocation;
    });

    return (
        <div className="py-12">
            
            <div className="text-center mb-10">
                <Heading title="READY TO MAKE AN IMPACT?" color="#221C13" />
                <p className="text-lg text-gray-600">
                    Browse our open positions and find a role that aligns with your skills, interests, and ambitions. We look forward to hearing from you!
                </p>
            </div>
            <div className="p-6 bg-white max-w-5xl shadow-lg mx-auto">
                {/* Filter and Search Row */}
                <div className="flex flex-wrap gap-6 mb-8">
                    {/* Search Bar */}
                    <div className="flex-1 min-w-[200px]">
                        <input
                            type="text"
                            placeholder="Search by Job Title"
                            className="border border-gray-300 px-4 py-2 w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Job Type Dropdown */}
                    <div className="relative flex-1 min-w-[200px]">
                        <button
                            onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
                            className="border border-gray-300 px-4 py-2 bg-white w-full flex justify-between items-center"
                        >
                            Job Type
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`ml-2 transition-transform duration-300 ${isJobTypeOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        {isJobTypeOpen && (
                            <div className="absolute bg-white border border-gray-300 mt-2 w-full shadow-md z-10">
                                {jobTypes.map((type) => (
                                    <label key={type} className="block px-4 py-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={selectedJobTypes.includes(type)}
                                            onChange={() => handleFilter(selectedJobTypes, setSelectedJobTypes, type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Location Dropdown */}
                    <div className="relative flex-1 min-w-[200px]">
                        <button
                            onClick={() => setIsLocationOpen(!isLocationOpen)}
                            className="border border-gray-300 px-4 py-2 bg-white w-full flex justify-between items-center"
                        >
                            Location

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`ml-2 transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isLocationOpen && (
                            <div className="absolute bg-white border border-gray-300 mt-2 w-full shadow-md z-10">
                                {locations.map((location) => (
                                    <label key={location} className="block px-4 py-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={selectedLocations.includes(location)}
                                            onChange={() =>
                                                handleFilter(selectedLocations, setSelectedLocations, location)
                                            }
                                        />
                                        {location}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <div className="flex items-center justify-center w-[120px]">
                        <button
                            onClick={() => { }}
                            className="bg-[#004B8B] text-white px-6 py-2 hover:bg-blue-700 transition-colors"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Job Cards */}
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={index} className="border border-gray-300 p-6 shadow-lg mb-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{job.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {job.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 text-gray-700 px-3 py-1 text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className='text-[#004B8B] font-semibold mb-2'>Position Summery</p>
                            <p className="text-gray-600 mb-6">{job.summary}</p>
                            <button className="bg-[#004B8B] text-white px-6 py-2 hover:bg-blue-700 transition-colors"
                            onClick={onApplyClick}
                            >
                                Apply now
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        <p>No jobs found matching your search criteria.</p>
                    </div>
                )}


            </div>

        </div>
    );
};

export default Jobs;

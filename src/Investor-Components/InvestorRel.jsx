import React, { useState, useEffect } from "react";
import { investorData } from "../data/InvestorData";
import { investorData2 } from "../data/InvestorData";
import { IoIosArrowDown } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";



const InvestorRel = () => {
    const [selectedCategory, setSelectedCategory] = useState(investorData[0]?.category);
    const [selectedSubcategory, setSelectedSubcategory] = useState(investorData[0]?.subcategories[0]?.name);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedQuarter, setSelectedQuarter] = useState(null);

    const category = investorData.find((cat) => cat.category === selectedCategory);
    const subcategory = category?.subcategories.find((subcat) => subcat.name === selectedSubcategory);

    useEffect(() => {
        if (subcategory?.years?.length > 0) {
            const latestYearData = subcategory.years[0];
            setSelectedYear(latestYearData.year);
            if (subcategory.type === "yearlyQuarterly") {
                setSelectedQuarter(latestYearData.quarters[0]?.name);
            }
        }
    }, [subcategory]);

    useEffect(() => {
        if (subcategory?.type === "yearlyQuarterly" && selectedYear) {
            const yearData = subcategory.years.find((year) => year.year === selectedYear);
            if (yearData) {
                setSelectedQuarter(yearData.quarters[0]?.name);
            }
        }
    }, [selectedYear, subcategory]);

    return (
        <div className="bg-[#221C13]">
            <div className="container mx-auto px-8 py-16 ">
                {/* Category Selection */}
                <div className="flex justify-center space-x-8 overflow-x-auto mb-12">
                    {investorData.map((cat) => (
                        <button
                            key={cat.category}
                            onClick={() => {
                                setSelectedCategory(cat.category);
                                setSelectedSubcategory(cat.subcategories[0]?.name);
                                setSelectedYear(null);
                                setSelectedQuarter(null);
                            }}
                            className={`text-lg font-medium py-2 px-4 transition-all ease-in-out transform focus:outline-none 
              ${cat.category === selectedCategory ? "bg-[#004B8B] text-white shadow-xl" : "text-white bg-transparent border-2 border-gray-300 hover:border-gray-500"}`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* Subcategory Selection */}
                {category?.subcategories && (
                    <div className="flex justify-center space-x-6 overflow-x-auto mb-6 border-b-2 border-[#5C5850] pb-0">
                        {category.subcategories.map((subcat) => (
                            <button
                                key={subcat.name}
                                onClick={() => {
                                    setSelectedSubcategory(subcat.name);
                                    setSelectedYear(null);
                                    setSelectedQuarter(null);
                                }}
                                className={`text-lg font-medium py-4 px-5 transition-all duration-200
                ${subcat.name === selectedSubcategory ? "text-[#CBA864] border-b-2 border-[#CBA864]" : "text-white hover:text-[#CBA864]"}`}
                            >
                                {subcat.name}
                            </button>
                        ))}
                    </div>
                )}

                {/* Content Rendering */}
                {/* Year and Quarter Selection */}
                {subcategory?.type === "yearlyQuarterly" && (
                    <>
                        <div className="flex space-x-8 justify-center mb-10">
                            {/* Year Selection */}
                            <div className="relative w-full md:w-72">
                                <select
                                    value={selectedYear || ""}
                                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                                    className="w-full border border-white bg-transparent text-white px-6 py-3 text-lg appearance-none focus:ring-0 focus:outline-none"
                                >
                                    <option value="" className="text-gray-400">
                                        Select Year
                                    </option>
                                    {subcategory.years.sort((a, b) => b.year - a.year).map((year) => (
                                        <option key={year.year} value={year.year} className="bg-transparent text-white">
                                            {year.year}
                                        </option>
                                    ))}
                                </select>
                                {/* Custom Dropdown Arrow */}
                                <IoIosArrowDown
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                    color="white"
                                    size={20}
                                />
                            </div>

                            {/* Quarter Selection */}
                            {selectedYear && (
                                <div className="relative w-full md:w-72">
                                    <select
                                        value={selectedQuarter || ""}
                                        onChange={(e) => setSelectedQuarter(e.target.value)}
                                        className="w-full border border-white bg-transparent text-white px-6 py-3 text-lg appearance-none focus:ring-0 focus:outline-none"
                                    >
                                        <option value="">Select Quarter</option>
                                        {subcategory.years
                                            .find((year) => year.year === selectedYear)
                                            ?.quarters.map((quarter) => (
                                                <option key={quarter.name} value={quarter.name}>
                                                    {quarter.name}
                                                </option>
                                            ))}
                                    </select>
                                    <IoIosArrowDown
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                        color="white"
                                        size={20}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Display Documents */}
                        {selectedYear && selectedQuarter && (
                            subcategory.years
                                .find((year) => year.year === selectedYear)
                                ?.quarters.find((quarter) => quarter.name === selectedQuarter)
                                ?.documents.map((doc, index) => (
                                    <div
                                        key={doc.title}
                                        className={`flex mx-auto md:w-[70%] text-white justify-between items-center p-5 mb-6 ${index % 2 === 0 ? "bg-transparent" : "bg-transparent"} 
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border-b border-gray-600`}
                                    >
                                        <div className="flex-1">
                                            <span className="text-white leading-tight">{doc.title}</span>
                                            {/* <p className="text-sm text-gray-600 mt-2 leading-snug">{doc.description || 'No description available.'}</p> */}
                                        </div>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={doc.link}
                                            className="text-[#D9D9D9] font-medium ml-6 group"
                                        >
                                            <GrDocumentText
                                                className="pointer-events-none group-hover:text-[#CBA864] transition-all duration-300"
                                                size={30}
                                            />
                                        </a>

                                    </div>
                                ))
                        )}

                    </>
                )}


                {/* For Yearly Content */}
                {subcategory?.type === "yearly" && (
                    <>
                        <div className="flex justify-center mb-10">
                            <div className="relative w-full md:w-72">
                                <select
                                    value={selectedYear || ""}
                                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                                    className="w-full border border-white bg-transparent text-white px-6 py-3 text-lg appearance-none focus:ring-0 focus:outline-none"
                                >
                                    <option value="">Select Year</option>
                                    {subcategory.years.sort((a, b) => b.year - a.year).map((year) => (
                                        <option key={year.year} value={year.year}>
                                            {year.year}
                                        </option>
                                    ))}
                                </select>
                                <IoIosArrowDown
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                    color="white"
                                    size={20}
                                />
                            </div>
                        </div>

                        {/* Display Yearly Documents */}
                        {selectedYear &&
                            subcategory.years
                                .find((year) => year.year === selectedYear)
                                ?.documents.map((doc, index) => (
                                    <div
                                        key={doc.title}
                                        className={`flex md:w-[70%] mx-auto justify-between items-center p-5 mb-6 ${index % 2 === 0 ? "bg-transparent" : "bg-transparent"} 
           transition-all duration-300 ease-in-out border-b border-gray-600`}
                                    >
                                        <div className="flex-1 ">
                                            <span className=" text-white leading-tight">{doc.title}</span>
                                            {/* <p className="text-sm text-gray-600 mt-2 leading-snug">{doc.description || 'No description available.'}</p> */}
                                        </div>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={doc.link}
                                            className="text-[#D9D9D9] font-medium ml-6 group"
                                        >
                                            <GrDocumentText
                                                className="pointer-events-none group-hover:text-[#CBA864] transition-all duration-300"
                                                size={30}
                                            />
                                        </a>
                                    </div>
                                ))}
                    </>
                )}

                {/* For Text Content (e.g., Reports) */}
                {subcategory?.type === "text" && (
                    <div className="text-lg mb-8 bg-white p-8 rounded-xl shadow-sm">
                        <p className="text-gray-700">{subcategory.content}</p>
                    </div>
                )}



            </div>
        </div>
    );
};

export default InvestorRel;

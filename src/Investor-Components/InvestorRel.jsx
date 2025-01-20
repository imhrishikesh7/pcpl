import React, { useState, useEffect } from "react";
import { investorData } from "../data/InvestorData";
import { investorData2 } from "../data/InvestorData";

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
        <div className="container mx-auto px-8 py-16 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-xl">
            {/* Category Selection */}
            <div className="flex space-x-8 overflow-x-auto mb-12">
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
              ${cat.category === selectedCategory ? "bg-[#004B8B] text-white shadow-xl" : "text-gray-700 bg-white border border-gray-300 hover:border-gray-500"}`}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Subcategory Selection */}
            {category?.subcategories && (
                <div className="flex space-x-6 overflow-x-auto mb-6 border-b-2 border-gray-300 pb-0">
                    {category.subcategories.map((subcat) => (
                        <button
                            key={subcat.name}
                            onClick={() => {
                                setSelectedSubcategory(subcat.name);
                                setSelectedYear(null);
                                setSelectedQuarter(null);
                            }}
                            className={`text-lg font-medium py-4 px-5 transition-all duration-300 ease-in-out transform 
                ${subcat.name === selectedSubcategory ? "text-[#004B8B] border-b-2 border-[#004B8B]" : "text-gray-600 hover:text-[#004B8B]"}`}
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
                        <div className="w-full md:w-72">
                            <select
                                value={selectedYear || ""}
                                onChange={(e) => setSelectedYear(Number(e.target.value))}
                                className="w-full border border-gray-300 px-6 py-3 text-lg bg-white shadow-sm   focus:ring-[#004B8B] transition ease-in-out"
                            >
                                <option value="">Select Year</option>
                                {subcategory.years.sort((a, b) => b.year - a.year).map((year) => (
                                    <option key={year.year} value={year.year}>
                                        {year.year}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Quarter Selection */}
                        {selectedYear && (
                            <div className="w-full md:w-72">
                                <select
                                    value={selectedQuarter || ""}
                                    onChange={(e) => setSelectedQuarter(e.target.value)}
                                    className="w-full border border-gray-300 px-6 py-3 text-lg bg-white shadow-sm  focus:ring-[#004B8B] transition ease-in-out"
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
                                    className={`flex justify-between items-center p-5 mb-6 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} 
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border-l-4 border-[#004B8B]`}
                                >
                                    <div className="flex-1">
                                        <span className="text-gray-900 leading-tight">{doc.title}</span>
                                        {/* <p className="text-sm text-gray-600 mt-2 leading-snug">{doc.description || 'No description available.'}</p> */}
                                    </div>
                                    <a
                                        href={doc.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#004B8B] font-medium hover:text-[#1166AF] transition-all duration-300 ml-6"
                                    >
                                        <span className="text-sm tracking-wide">View</span>
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
                        <select
                            value={selectedYear || ""}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            className="w-full md:w-72 border border-gray-300 rounded-lg px-6 py-3 text-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-700 transition ease-in-out"
                        >
                            <option value="">Select Year</option>
                            {subcategory.years.sort((a, b) => b.year - a.year).map((year) => (
                                <option key={year.year} value={year.year}>
                                    {year.year}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Display Yearly Documents */}
                    {selectedYear &&
                        subcategory.years
                            .find((year) => year.year === selectedYear)
                            ?.documents.map((doc, index) => (
                                <div
                                    key={doc.title}
                                    className={`flex justify-between items-center p-5 mb-6 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} 
          shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border-l-4 border-[#004B8B]`}
                                >
                                    <div className="flex-1">
                                        <span className=" text-gray-900 leading-tight">{doc.title}</span>
                                        {/* <p className="text-sm text-gray-600 mt-2 leading-snug">{doc.description || 'No description available.'}</p> */}
                                    </div>
                                    <a
                                     target="_blank"
                                     rel="noopener noreferrer"
                                        href={doc.link}
                                        className="text-[#004B8B] font-medium hover:text-[#1166AF] transition-all duration-300 ml-6"
                                    >
                                        <span className="text-sm tracking-wide">View</span>
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
    );
};

export default InvestorRel;

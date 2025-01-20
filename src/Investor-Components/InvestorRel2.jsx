import React, { useState } from "react";
import { investorData2 } from "../data/InvestorData"; // Adjust path as necessary
import { useNavigate } from "react-router-dom";

const InvestorRel2 = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(investorData2)[0]); // Default active category
  const navigate = useNavigate(); // For routing to linked components

  const handleNavigation = (link, section) => {
    if (section) {
      // Navigate to the page and include hash for the section
      navigate(`${link}#${section}`);
    } else {
      // Navigate to the page only
      navigate(link);
    }
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="container my-10 mx-auto px-4 py-8">
      {/* Tabs for categories */}
      <div className="flex border-b border-gray-300">
        {Object.keys(investorData2).map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`py-4 px-5 transition-all duration-300 ease-in-out transform text-base font-semibold ${
              activeCategory === category
                ? "text-[#004B8B] border-b-2 border-[#004B8B]"
                : "text-gray-600"
            } hover:text-[#1166AF] transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Subcategories */}
      <div className="mt-6">
        {Object.entries(investorData2).map(([category, subcategories]) => (
          <div key={category} className={`${activeCategory === category ? "block" : "hidden"}`}>
            <ul className="divide-y divide-gray-200">
              {subcategories.map((subcategory, index) => {
                const bgColor = index % 2 === 0 ? "bg-gray-100" : "bg-white"; // Alternate background color

                if (typeof subcategory === "object" && subcategory.link) {
                  // Render clickable links with optional hash for section
                  const section = subcategory.section || null;
                  return (
                    <li
                      key={subcategory.name}
                      className={`relative my-4 py-3 px-4 text-lg cursor-pointer ${bgColor}`}
                      onClick={() => handleNavigation(subcategory.link, section)}
                    >
                      {subcategory.name}
                      <span className="absolute left-0 bottom-0 w-[40px] h-full pb-3 px-4 border-b-4 border-[#004B8B]"></span>
                    </li>
                  );
                }

                // Render as plain text if no link is found
                return (
                  <li
                    key={subcategory}
                    className={`relative py-3 px-4 my-4 text-gray-700 text-lg ${bgColor}`}
                  >
                    {subcategory}
                    <span className="absolute left-0 bottom-0 w-[40px] h-full pb-3 px-4 border-b-4 border-[#004B8B]"></span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorRel2;

import React, { useState } from 'react';
import { ongoingProjectsData } from '../data/propertiesData';
import GlobalCover from '../Components/GlobalCover';
import { Link } from 'react-router-dom';

const Ongoing = () => {
  
  return (
    <div>
      <GlobalCover src="./our-properties/projects-cov.png" title="ONGOING PROJECTS" />
      <div className="container mx-auto px-4 py-12">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ongoingProjectsData["Ongoing Project"].map((property, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.img}
                  alt={property["Underconstruction Project"]}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-between space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#004B8B] transition-colors duration-500">
                  {property["Underconstruction Project"]}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Location:</span> {property.Location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Configuration:</span> {property.Configuration}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#004B8B] to-[#CBA864]"></div>
              <div className="p-6 pt-4 flex justify-center">
                <Link
                  to={`/ongoing-project-details/${property["Sr. No."]}`}
                  className="inline-block px-6 py-3 bg-black text-white text-sm font-medium w-full shadow-md hover:shadow-lg transition-all duration-500"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ongoing;

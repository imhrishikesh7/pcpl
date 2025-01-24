import React, { useState } from 'react';
import { ongoingProjectsData } from '../data/propertiesData';
import GlobalCover from '../Components/GlobalCover';

const Ongoing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Number of cards to show per page
  const totalCards = ongoingProjectsData["Under-construction Project"].length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = ongoingProjectsData["Under-construction Project"].slice(
    startIndex,
    startIndex + cardsPerPage
  );

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      <GlobalCover src="./our-properties/projects-cov.png" title="ONGOING PROJECTS" />
      <div className="container mx-auto px-4 py-12">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentCards.map((property, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.img}
                  alt={property["Underconstruction Project"]}
                  className="w-full h-64 object-cover rounded-t-2xl transform transition-transform duration-500 group-hover:scale-110"
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
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Price:</span> {property.Price}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Amenities:</span> {property["List of Amenities"]}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">RERA Info:</span> {property["RERA Information with QR code"]}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#004B8B] to-[#CBA864]"></div>
              <div className="p-6 pt-4 flex justify-center">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#004B8B] to-[#CBA864] text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-500"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#004B8B] hover:text-white"
            }`}
          >
            First
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#004B8B] hover:text-white"
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#004B8B] hover:text-white"
            }`}
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#004B8B] hover:text-white"
            }`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;

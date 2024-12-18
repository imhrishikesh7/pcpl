import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Network.css";

const Network = () => {
  const data = {
    Completed: [
      { location: "Rushabh Mahal CHSL (Rushabh Residency)", img: "./home/completed projects/22.jpg", position: { top: "5%", left: "30%" } },
      { location: "New Shalimar CHSL (Serene)", img: "./home/completed projects/15.jpg", position: { top: "16%", left: "30%" } },
      { location: "Ramesh Mandir CHSL (Nirvana Residency)", img: "./home/completed projects/21.jpg", position: { top: "16%", left: "55%" } },
      { location: "Gala Apartments CHSL", img: "./home/completed projects/07_1.jpg", position: { top: "25%", left: "75%" } },
      { location: "Gold Coin CHSL", img: "./home/completed projects/08_1.jpg", position: { top: "40%", left: "65%" } },
      { location: "Sparsh CHSL", img: "./home/completed projects/24.jpg", position: { top: "30%", left: "30%" } },
      { location: "Plot 212 (Saraswati Bhuvan CHSL)", img: "./home/completed projects/19.jpg", position: { top: "35%", left: "50%" } },
      { location: "Silverene CHSL", img: "./home/completed projects/23.jpg", position: { top: "42%", left: "25%" } },
      { location: "Malad Amber CHSL", img: "./home/completed projects/09_1.jpg", position: { top: "48%", left: "45%" } },
      { location: "Borivali Shivdarshan CHSL (Neon Terraces)", img: "./home/completed projects/05_1.jpg", position: { top: "56%", left: "65%" } },
    ],
    Ongoing: [
      { location: "Popular Terrace CHSL (Neon Heights)", img: "./home/ongoing pojects/16.jpg", position: { top: "8%", left: "30%" } },
      { location: "Tiara CHSL", img: "./home/ongoing pojects/11.jpg", position: { top: "12%", left: "50%" } },
      { location: "Kesar Niketan CHSL", img: "./home/ongoing pojects/05.jpg", position: { top: "22%", left: "75%" } },
      { location: "Pearl Palace", img: "./home/ongoing pojects/08.jpg", position: { top: "25%", left: "25%" } },
      { location: "Union Bank of India Employee Ankur CHSL", img: "./home/ongoing pojects/01.jpg", position: { top: "26%", left: "45%" } },
      { location: "Lakshman Tower CHSL", img: "./home/ongoing pojects/07.jpg", position: { top: "37%", left: "28%" } },
      { location: "Shining Star CHSL", img: "./home/ongoing pojects/shining star-- evening--22.08.jpg", position: { top: "45%", left: "50%" } },
      { location: "Samrat CHSL", img: "./home/ongoing pojects/09.jpg", position: { top: "55%", left: "65%" } },
      { location: "Jamuna Mahal CHSL", img: "./home/ongoing pojects/03.jpg", position: { top: "62%", left: "28%" } },
    ],
    Upcoming: [
      { location: "Nirmal Bhavan CHSL", img: "", position: { top: "38%", left: "24%" } },
      { location: "Priyadarshini CHSL", img: "", position: { top: "45%", left: "34%" } },
      { location: "Allahabad Bank Staff Nutan CHSL", img: "", position: { top: "32%", left: "42%" } },
      { location: "Daulatrao Desai Nagar CHSL", img: "", position: { top: "30%", left: "17%" } },
      { location: "You and I CHSL", img: "", position: { top: "32%", left: "27%" } },
      { location: "Vile Parle Anupam CHSL", img: "", position: { top: "37%", left: "36%" } },
      { location: "The Bandra Gul-E-Baug CHSL", img: "", position: { top: "49%", left: "22%" } },
      { location: "Citizen Apartments CHSL", img: "", position: { top: "51%", left: "30%" } },
      { location: "Amarhind CHSL", img: "", position: { top: "48%", left: "42%" } },
      { location: "Sompuri Market Premises CSL", img: "", position: { top: "44%", left: "24%" } },
      { location: "Kirti Manor Premises CSL", img: "", position: { top: "41%", left: "42%" } },
      { location: "Kirti Mandir CHSL", img: "", position: { top: "59%", left: "24%" } },
      { location: "Rajnigandha CHSL", img: "", position: { top: "12%", left: "42%" } },
      { location: "Om Manikanta CHSL ", img: "", position: { top: "15%", left: "32%" } },
      { location: "Kaveri CHSL", img: "", position: { top: "16%", left: "10%" } },
      { location: "State Bank of India Employees (Navjeevan) CHSL", img: "", position: { top: "2%", left: "22%" } },
      { location: "Glendon CHSL Sheldon CHSL Orlem Luciana CHSL", img: "", position: { top: "14%", left: "19%" } },
      { location: "Rajesh Mandir CHSL", img: "", position: { top: "8%", left: "22%" } },
      { location: "Shree Santoshi Nagar CHSL", img: "", position: { top: "20%", left: "22%" } },
    ],
  };

  const initialCategory = Object.keys(data)[0];
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeLocation, setActiveLocation] = useState(data[initialCategory][0]?.location);

  const listRef = useRef(null);

  const handleLocationClick = (location) => {
    setActiveLocation(location.location); // Compare using location's unique identifier
  };

  const scrollList = (direction) => {
    const list = listRef.current;
    if (direction === "up") {
      list.scrollBy({ top: -100, behavior: "smooth" });
    } else if (direction === "down") {
      list.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="marginal">
      <motion.h1 className="viaoda md:text-4xl text-3xl my-5 text-center md:mb-6"
       initial={{ opacity: 0, scale: 0.8 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
       transition={{
           duration: 0.5, // Increased duration for smoother transitions
           ease: 'linear', // Use easeOut for smoother deceleration
       }}
      >OUR NETWORK</motion.h1>
      <div className="md:flex justify-between items-center md:h-[70v] w-full">
        {/* Category Buttons */}
        <div className="md:w-[20%] mb-6 h-full flex flex-col justify-center">
          {Object.keys(data).map((category) => (
            <button
              key={category}
              className={`block my-2 py-3 text-xl sarala text-center px-4 ${selectedCategory === category
                  ? "bg-[#005496] text-white"
                  : "border-2 border-[#827E78] text-[#827E78]"
                }`}
              onClick={() => {
                setSelectedCategory(category);
                setActiveLocation(data[category][0]?.location); // Update to the first location in the new category
              }}
            >
              {category} Projects
            </button>
          ))}
        </div>

        {/* Image Box */}
        <div className="image-box mb-6 md:w-[21%] flex flex-col items-start justify-center">
  {activeLocation ? (
    data[selectedCategory].find((loc) => loc.location === activeLocation)?.img &&
    data[selectedCategory].find((loc) => loc.location === activeLocation)?.img !== "." ? (
      <motion.div
        className="w-full md:h-[200px] flex items-center justify-center"
        key={activeLocation}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.img
          src={data[selectedCategory].find((loc) => loc.location === activeLocation)?.img}
          alt="Selected Location"
          className="fade-in bg-white object-contain shadow-[8px_0_15px_rgba(0,0,0,0.2)] max-h-full max-w-full"
        />
      </motion.div>
    ) : (
      <p className="text-center viaoda text-xl font-semibold text-gray-500">Site Under Construction</p>
    )
  ) : (
    <p className="text-center text-gray-500">Select a location</p>
  )}
  <a className="py-3 px-6 mt-4 bg-[#005496] text-white" href="/">GET DETAILS</a>
</div>



        {/* Map Section */}
        <div className="md:w-[22%] mb-6 relative h-full">
          <img
            src="./home/network.svg"
            className="absolut top-0 left-0 w-full object-cover"
            alt="Network Map"
          />
          

          {/* All Pointers */}
          {selectedCategory &&
            data[selectedCategory].map((location, index) => (
              <div
                key={`${selectedCategory}-${index}`}
                className={`loader transition-all duration-300 ease-in-out ${activeLocation === location.location
                    ? "scale-110 opacity-100"
                    : "scale-100 opacity-50"
                  }`}
                style={{
                  top: location.position.top,
                  left: location.position.left,
                  position: "absolute",
                }}
                onClick={() => handleLocationClick(location)}
              ></div>
            ))}
        </div>

        {/* Location List */}
        <div className="md:w-[25%] mb-6 h-full  p-">
          {selectedCategory ? (
            <div className="relative">
              {/* Scroll Arrows */}
              <button
                onClick={() => scrollList("up")}
                className="absolute w-[30px] z-10 -top-16 left-[2px] w-full bg-transparent text-gray-500 py-2"
              >
                <img src="./home/art.svg" alt="" />
              </button>
              <ul ref={listRef} className="max-h-[300px] px-4 overflow-y-auto">

                {data[selectedCategory].map((item, index) => (
                  <li
                    key={index}
                    className={` relative font-semibold border-l-2 border-gray-400 pl-6  pb-10 cursor-pointer ${activeLocation === item.location ? "text-[#0077B6]" : "text-[#909090]"
                      }`}
                    onClick={() => handleLocationClick(item)}
                  >
                    <span className={`w-[10px] h-[10px] ${activeLocation === item.location ? "bg-[#0077B6]" : "bg-[#909090]"} rounded-full absolute top-2 -left-[6px]`}></span>
                    {/* <div
                      className="w-full relative h-16 bg-cover bg-center mb-2"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div> */}
                    <p className="">{item.location}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollList("down")}
                className="absolute w-[30px] z-10 -bottom-16 left-[2px] w-full bg-transparent text-gray-500 py-2"
              >
                <img src="./home/ard.svg" alt="" />

              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Select a category to view locations
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Network;

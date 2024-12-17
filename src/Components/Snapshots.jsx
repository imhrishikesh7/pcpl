import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Snapshots = () => {
  const cards = [
    { id: 1, icon: "./home/c1.svg", value: "10+", text: "Years of\nexperience" },
    { id: 2, icon: "./home/c2.svg", value: "25", text: "Completed\nRedevelopment Projects" },
    { id: 3, icon: "./home/c3.svg", value: "11", text: "Under-construction\nRedevelopment Projects" },
    { id: 4, icon: "./home/c4.svg", value: "21", text: "Upcoming\nRedevelopment Projects " },
    { id: 5, icon: "./home/c5.svg", value: "10+", text: "Lakh sq. ft.\ndeveloped" },
    { id: 6, icon: "./home/c6.svg", value: "12+", text: "Lakh sq. ft. under\nconstruction" },
    { id: 7, icon: "./home/c7.svg", value: "15+", text: "lakh sq. ft. in\npipeline" },
    { id: 8, icon: "./home/c8.svg", value: "1970+", text: "Happy families\nserved" },
  ];

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
    >
      {/* Classic Right Arrow */}
      <span className="arrow-right"></span>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
    >
      {/* Classic Left Arrow */}
      <span className="arrow-left"></span>
    </div>
  );

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="marginal">
      <h1 className="viaoda md:text-4xl text-3xl my-5 text-center md:mb-6">SNAPSHOT</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`p-6 mb-12 bg-white text-center flex flex-col items-center justify-center ${
              index % 4 !== 4 ? "md:border-r border-gray-300" : ""
            }`}
          >
            <div className="text-4xl mb-2 w-[70px] h-[70px] m-auto text-blue-500">
              <img src={card.icon} alt="" />
            </div>
            <h1 className="text-4xl mb-2 text-[#004b8b]">{card.value}</h1>
            <div className="text-base text-gray-500 whitespace-pre-line">{card.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Snapshots;

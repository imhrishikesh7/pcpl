import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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

  const Counter = ({ value }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [count, setCount] = React.useState(0);
    const numericValue = parseInt(value, 10);
    const suffix = value.replace(/[\d]/g, "");

    React.useEffect(() => {
      if (inView && numericValue) {
        let start = 0;
        const duration = 1500;
        const increment = numericValue / (duration / 10);

        const counter = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setCount(numericValue);
            clearInterval(counter);
          } else {
            setCount(Math.ceil(start));
          }
        }, 10);
      }
    }, [inView, numericValue]);

    return (
      <motion.h1
        ref={ref}
        className="text-4xl mb-2 text-[#004b8b]"
        key={count} // Key ensures re-animation on value change
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {count}
        {suffix}
      </motion.h1>
    );
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <span className="arrow-right"></span>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <span className="arrow-left"></span>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
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
      >SNAPSHOT</motion.h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 mb-12 bg-white text-center flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-2 w-[70px] h-[70px] m-auto text-blue-500">
              <img src={card.icon} alt="" />
            </div>
            <Counter value={card.value} />
            <div className="text-base text-gray-500 whitespace-pre-line">{card.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Snapshots;

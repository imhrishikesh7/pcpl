import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "./Heading";
const Standout = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const curtainVariants = {
    hidden: { width: "100%", right: "0%" }, // Start with full width covering the image
    visible: {
      width: "0%", // Fully reveal the image
      transition: {
        duration: 1.2, // Duration of the animation
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="marginal md:flex justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
     <motion.div className="md:w-[60%] flex">
      <div className="w-[50%] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white z-10"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={curtainVariants}
        ></motion.div>
        <img src="./home/so1.png" alt="Standout" className="w-full" />
      </div>
      <div className="w-[50%] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white z-10"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={curtainVariants}
        ></motion.div>
        <img src="./home/so2.png" alt="Standout" className="w-full" />
      </div>
    </motion.div>

      <motion.div
        className="md:w-[40%] md:ml-[4%] flex flex-col justify-center"
        variants={containerVariants}
      >
        <Heading title="WHY WE STAND OUT?" color="black"/>
        
        {[
          {
            img: "./home/s1.svg",
            text: "A growing real-estate company with a strong pipeline",
          },
          {
            img: "./home/s2.svg",
            text:
              "In-house functional expertise fosters seamless project execution",
          },
          {
            img: "./home/s4.svg",
            text:
              "A proven track record of timely completion, bolstered by our strong execution capabilities",
          },
          {
            img: "./home/s3.svg",
            text:
              "A customer-centric brand with robust stakeholder management",
          },
          {
            img: "./home/s5.svg",
            text:
              "Experienced promoters, professional senior management, effective corporate governance practices and a committed employee base",
          },
        ].map(({ img, text }, index) => (
          <motion.div
            key={index}
            className="relative flex w-full items-center  border-l border-black py-6 "
            variants={childVariants}
          >
            <span className="absolute -left-[5px] w-[10px] h-[10px] bg-[#1f4f94] rounded-full "></span>
            {/* <img src={img} className="mr-5" alt="" /> */}

            <p className="ml-6">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Standout;

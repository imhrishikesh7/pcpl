import React from "react";
import { motion } from "framer-motion";
const Standout = () => {
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
      className="marginal md:flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="md:w-[49%]" variants={childVariants}>
        <img src="./home/standout.png" alt="Standout" />
      </motion.div>

      <motion.div
        className="md:w-[40%] md:ml-[4%] m flex flex-col justify-evenly"
        variants={containerVariants}
      >
        <motion.h1
          className="viaoda md:text-4xl text-3xl my-5 md:text-left text-center md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }} // Allow the animation to repeat as the card comes into view
          transition={{
              duration: 0.5, // Increased duration for smoother transitions
              ease: 'linear', // Use easeOut for smoother deceleration
          }}
        >
          WHY WE STAND OUT?
        </motion.h1>

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
            className="flex w-full items-center py-4 md:border-0 border-b border-gray-400"
            variants={childVariants}
          >
            <img src={img} className="mr-5" alt="" />
            <p>{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Standout;

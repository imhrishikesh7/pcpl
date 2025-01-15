import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../Components/Heading";

const EmpMgt = () => {
  const images = [
    "./careers/em1.png",
    "./careers/em2.png",
    "./careers/em3.png",
    "./careers/em4.png",
    "./careers/em5.png",
    "./careers/em6.png",
  ];

  const [visibleImages, setVisibleImages] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) =>
        prev.map((index) => (index + 1) % images.length)
      );
    }, 4000); // Change images every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  return (
    <div className="marginal">
      <div>
        <Heading title="EMPLOYEE MANAGEMENT" color="#221C13" />
      </div>
      <p className="mt-4 text-gray-700 text-lg">
        To achieve the best, it is important to have the best team in place. Our
        expert team forms the cornerstone of our operations, consistently
        constructing the roadmap of our success. At PCPL, we strive to foster
        an environment that facilitates the holistic well-being of our
        employees. By offering a diverse range of opportunities and ensuring
        every employee feels valued, we continue to nurture the strength behind
        our achievements.
      </p>

      <section className="mx-auto my-12 p-6">
  <div className="grid grid-cols-3 gap-4">
    {/* Card 1 */}
    <div className="relative h-0 pb-[100%]">
      <AnimatePresence>
        <motion.img
          key={visibleImages[0]}
          src={images[visibleImages[0]]}
          alt={`Image ${visibleImages[0] + 1}`}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
        />
      </AnimatePresence>
    </div>
    {/* Card 2 */}
    <div className="relative h-0 pb-[100%]">
      <AnimatePresence>
        <motion.img
          key={visibleImages[1]}
          src={images[visibleImages[1]]}
          alt={`Image ${visibleImages[1] + 1}`}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
        />
      </AnimatePresence>
    </div>
    {/* Card 3 */}
    <div className="relative h-0 pb-[100%]">
      <AnimatePresence>
        <motion.img
          key={visibleImages[2]}
          src={images[visibleImages[2]]}
          alt={`Image ${visibleImages[2] + 1}`}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
        />
      </AnimatePresence>
    </div>
  </div>
</section>

    </div>
  );
};

export default EmpMgt;

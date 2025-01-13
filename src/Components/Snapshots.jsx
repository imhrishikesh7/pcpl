import { useState } from 'react';
import { snapshotsData } from '../data/data'; // Import your data
import { motion } from 'framer-motion';
import Heading from './Heading';

const Snapshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many items to show based on screen size
  const itemsPerPage = window.innerWidth < 640 ? 1 : 4;

  // Get the next items to display based on itemsPerPage
  const currentItems = snapshotsData.slice(currentIndex, currentIndex + itemsPerPage);

  // Function to go to the next page
  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % snapshotsData.length);
  };

  // Function to go to the previous page
  const prevPage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + snapshotsData.length) % snapshotsData.length
    );
  };

  return (
    <div className="relative pt-14 pb-24 px-4 bg-gray-900 text-white overflow-hidden">
      <div className='text-center mb-8'>
      <Heading title="SNAPSHOT"/>
      </div>
      <motion.div
        className="flex justify-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center gap-10">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="snapshot-card flex flex-col items-center justify-center p-8 bg-gray-800 shadow-2xl rounded-xl overflow-hidden"
              style={{ minWidth: '250px', maxWidth: '300px' }}
              initial={{ opacity: 0, x: '100%' }} // Start from the right off-screen
              animate={{
                opacity: 1,
                x: 0, // Slide in to the original position
                transition: {
                  delay: index * 0.1, // Stagger entry
                  duration: 0.6, // Smooth but quick animation duration
                  ease: 'easeOut',
                },
              }}
              exit={{
                opacity: 0,
                x: '-100%', // Slide out to the left off-screen
                transition: {
                  duration: 0.5, // Fast exit for smoothness
                  ease: 'easeIn',
                },
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              <motion.h3
                className="text-6xl font-bold text-center text-[#CBA864] viaoda" // Increased size of the number
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' },
                }}
              >
                {item.value}
              </motion.h3>
              <motion.p
                className="text-center text-lg text-gray-400 mt-4" // Increased text size for better visibility
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.4, ease: 'easeOut' },
                }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={prevPage}
          className="flex items-center justify-center bg-gray-700 text-gray-300 rounded-full shadow-lg hover:bg-gray-600 duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>
        </button>
        <button
          onClick={nextPage}
          className="flex items-center justify-center bg-gray-700 text-gray-300 rounded-full shadow-lg hover:bg-gray-600 duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Snapshots;

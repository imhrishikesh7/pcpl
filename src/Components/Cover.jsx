import React, { useEffect } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
const Cover = () => {
    useEffect(() => {
        // Select the text wrapper
        const heading1 = document.querySelector(".ml12-1");
        heading1.innerHTML = heading1.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
    
        // Wrap every letter in a span for the second heading
        const heading2 = document.querySelector(".ml12-2");
        heading2.innerHTML = heading2.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
    
        // Animate the first heading
        anime.timeline({ loop: false })
          .add({
            targets: ".ml12-1 .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 70 * i, // Base delay
          });
    
        // Animate the second heading with additional delay
        anime.timeline({ loop: false })
          .add({
            targets: ".ml12-2 .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 900 + 70 * i, // Additional delay for the second heading
          });
      }, []);
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
    {/* Video background */}
    <video
      src="./home/PRANAV.webm"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    />

    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
        zIndex: 0, // This ensures the gradient is above the video but behind the content
      }}
    />

    {/* Other content */}
    <div className='md:w-[70%] w-[95%] absolute top-[55%] left-[50%] md:top-[50%] md:left-[50%] md:text-left text-center  text-white transform -translate-x-1/2 -translate-y-1/2'>
      <h1 className='viaoda md:text-6xl text-4xl md:mb-6 ml12-1'>THE KEY TO YOUR</h1>
      <h1 className='viaoda md:text-6xl text-4xl mb-6 ml12-2'>DREAM  HOUSE</h1>
      <motion.p
      className="text-justify"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, delay: 1.2 }}
>
      Imagine a place where every detail is tailored to your unique taste and style, a sanctuary where memories are made and moments are cherished. From sleek modern architecture to cozy traditional charm, our diverse portfolio has something for everyone. We prioritise customer expectations in all projects. We go beyond reconstruction to build long-term client connections and ensure their satisfaction throughout.
      Your dream home awaits!
      </motion.p>
      {/* Add your navbar items here */}
    </div>
  </div>

  )
}

export default Cover
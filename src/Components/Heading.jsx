import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const Heading = ({ title , subtitle , color }) => {
    useEffect(() => {
        // Select the text wrapper
        const heading4 = document.querySelector(".ml12-2");
        if (heading4) {
          heading4.innerHTML = heading4.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          );
    
          // Animate the first heading
          anime.timeline({ loop: false }).add({
            targets: ".ml12-2 .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 70 * i, // Base delay
          });
        }
      }, []);
  return (
    <div className="inset-0 flex flex-col justify-center ">
         <h1 className={`viaoda text-4xl md:text-4xl mb-4 ml12-2 text-${color}`}>{title}</h1>
         <h3 className={`sarala text-2xl text-${color}`} >{subtitle}</h3>
  </div>
  )
}

export default Heading
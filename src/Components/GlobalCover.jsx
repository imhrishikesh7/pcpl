import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const GlobalCover = ({ src, title, subtitle }) => {
  const imageRef = useRef(null); // Reference to the image
  const [overlayHeight, setOverlayHeight] = useState("100vh"); // Default height for overlay

  useEffect(() => {
    // Animate the image scale-down effect on page load
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        scale: [1.5, 1], // Starts slightly zoomed-in and scales down
        easing: "easeOutExpo",
        duration: 2000, // Duration of the animation
      });
    }

    // Animate the text
    const heading3 = document.querySelector(".ml12-1");
    if (heading3) {
      heading3.innerHTML = heading3.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // Animate the first heading with a timeline
      anime.timeline({ loop: false }).add({
        targets: ".ml12-1 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 70 * i, // Base delay
      });
    }
  }, []);

  // Function to update overlay height after the image loads
  const updateOverlayHeight = () => {
    if (imageRef.current) {
      const imgHeight = imageRef.current.offsetHeight;
      setOverlayHeight(`${imgHeight}px`);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50vh", // Full-screen height for better responsiveness
        overflow: "hidden", // Ensure the image stays inside the container
      }}
    >
      {/* Wrapper for the image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden", // Prevent scaling image from overflowing
        }}
      >
        {/* Background image */}
        <img
          ref={imageRef}
          src={src}
          alt="Cover Image"
          onLoad={updateOverlayHeight} // Ensure height is updated after the image loads
          style={{
            width: "100%",
            height: "100%",
            filter: "brightness(0.5)",
            objectFit: "cover",
            transformOrigin: "center", // Scale from the center
          }}
        />
      </div>

      {/* Optional Gradient Overlay for better contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: overlayHeight,
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div className="absolute top-[70%] inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="viaoda text-4xl md:text-5xl mb-4 ml12-1">{title}</h1>
        <h3 className="sarala text-2xl mb-4">{subtitle}</h3>
      </div>
    </div>
  );
};

export default GlobalCover;

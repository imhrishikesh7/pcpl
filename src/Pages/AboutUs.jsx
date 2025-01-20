import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GlobalCover from '../Components/GlobalCover'
import AboutPCPL from '../AboutUs-Components/AboutPCPL'
import GuidingP from '../AboutUs-Components/GuidingP'
import FastFacts from '../AboutUs-Components/FastFacts'
import Awards from '../AboutUs-Components/Awards'
import Messages from '../AboutUs-Components/Messages'
import People from '../AboutUs-Components/People'
import Timeline from '../AboutUs-Components/Timeline'

const AboutUs = () => {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const section = document.querySelector(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
  

    return (
        <div>
            <GlobalCover src="./about/about-cover.png" title="ABOUT US"/>
            <div className='md:h-[110vh]'>
                <AboutPCPL />
            </div>
            <GuidingP/>
            <FastFacts/>
            <Timeline/>
            <Awards/>
            <Messages/>
            
            <div id="board-of-directors">
            <People/>
            </div>
            
        </div>
    )
}

export default AboutUs
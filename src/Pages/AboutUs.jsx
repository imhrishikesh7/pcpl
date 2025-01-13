import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import AboutPCPL from '../AboutUs-Components/AboutPCPL'
import GuidingP from '../AboutUs-Components/GuidingP'
import FastFacts from '../AboutUs-Components/FastFacts'
import Awards from '../AboutUs-Components/Awards'
import Messages from '../AboutUs-Components/Messages'
import People from '../AboutUs-Components/People'
import Timeline from '../AboutUs-Components/Timeline'

const AboutUs = () => {
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
            <People/>
            
        </div>
    )
}

export default AboutUs
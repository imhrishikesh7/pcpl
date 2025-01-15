import React, { useRef } from "react";
import GlobalCover from '../Components/GlobalCover'
import CareerIntro from '../Career-Components/CareerIntro'
import Jobs from '../Career-Components/Jobs'
import ApplyForm from '../Career-Components/ApplyForm'
import EmpMgt from "../Career-Components/EmpMgt";

const Careers = () => {

    const applyFormRef = useRef(null);

    const scrollToForm = () => {
      if (applyFormRef.current) {
        applyFormRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div>
            <GlobalCover src="./careers/careers-cov.png" title="CAREERS"/>
                <CareerIntro/>
                <div className='bg-gray-100'>
                <Jobs onApplyClick={scrollToForm}/>
                </div>
                <ApplyForm ref={applyFormRef}/>
                <EmpMgt/>

        
    </div>
  )
}

export default Careers
import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import CompanyInfo from '../Investor-Components/CompanyInfo'
import InvestorRel from '../Investor-Components/InvestorRel'
import InvestorRel2 from '../Investor-Components/InvestorRel2'

const Investor = () => {
    return (
        <div>
            <GlobalCover src="./investor/investor-cov.png" title="INVESTOR CORNER" />
            <CompanyInfo />
            <InvestorRel />
            <InvestorRel2 />
                

        </div>
    )
}

export default Investor
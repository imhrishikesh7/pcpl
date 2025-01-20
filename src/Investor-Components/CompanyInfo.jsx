import React from 'react'
import Heading from '../Components/Heading'

const CompanyInfo = () => {
    return (
        <div className='marginal'>
            <div className='my-4 py-5 border-t-2 border-b-2 border-[#b2c9dc]'>
                <h2 className='text-[#004B8B] text-2xl text-center mb-4'>
                    Welcome to the investor corner of Pranav Constructions, an organisation that builds bridges to home-ownership.
                </h2>
                <h2 className='text-[#004B8B] text-2xl text-center'>
                    This section is dedicated to our investors. Here, you can access a wide range of  information- offices, designated officers, financial statements, corporate filings, annual reports and so forth, about your Company.
                </h2>
            </div>

            <div className='my-10'>
                <div className='text-center'>
                    <Heading title="COMPANY INFORMATION" color="black" />
                </div>
                <div className="p-6 md:p-10 bg-white">
                    <div className="md:flex md:justify-between">
                        {/* Left Section */}
                        <div className="md:w-[50%]">
                            <div className="mb-6">
                                <p className="text-[#004B8B] font-bold">Registered Office & Corporate Office</p>
                                <p>Pranav Constructions Limited</p>
                                <p>Unit No. 1001, 10th Floor, DLH Park</p>
                                <p>Near MTNL, S.V. Road</p>
                                <p>Goregaon West, Mumbai – 400 062</p>
                                <p className="text-[#004B8B] font-bold mt-3">Telephone</p>
                                <p>033 2635 3658</p>
                                <p className="text-[#004B8B] font-bold mt-3">Email</p>
                                <p>demo@pranavconstructions.com</p>
                            </div>
                            <div className="mb-6">
                                <p className="text-[#004B8B] font-bold">Registrar And Share Transfer Agent</p>
                                <p>KFin Technologies Limited</p>
                                <p>Selenium Tower B, Plot No. 31 And 32,</p>
                                <p>Financial District, Nanakramguda,</p>
                                <p>Serilingampally Hyderabad-500 032,</p>
                                <p>Telangana, India</p>
                                <p className="text-[#004B8B] font-bold mt-3">Telephone</p>
                                <p>+91 6716 2222 / 18003094001</p>
                                <p className="text-[#004B8B] font-bold mt-3">Email</p>
                                <p>pcpl.ipo@kfintech.com</p>
                                <p className="text-[#004B8B] font-bold mt-3">Investor Grievance E-Mail</p>
                                <p>einward.risk@kfintech.com</p>
                                <p className="text-[#004B8B] font-bold mt-3">Website</p>
                                <p>www.kfintech.com</p>
                                <p className="text-[#004B8B] font-bold mt-3">SEBI Registration No</p>
                                <p>INR000000221</p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-[50%] flex flex-col justify-between mb-6 md:mb-0">
                            <div className='mb-2 md:mb-0'>
                                <p className="text-[#004B8B] font-bold">Company Secretary And Compliance Officer</p>
                                <p>Ritu Jain</p>
                                <p>Unit No. 1001, 10th Floor, DLH Park</p>
                                <p>Near MTNL, S.V. Road</p>
                                <p>Goregaon West, Mumbai – 400 062</p>
                                <p className="text-[#004B8B] font-bold mt-3">Telephone</p>
                                <p>+91 22 6276 9939</p>
                                <p className="text-[#004B8B] font-bold mt-3">Email</p>
                                <p className='text-xs md:text-base'>compliance.officer@pranavconstructions.com</p>
                            </div>
                            <div className="md:w-full flex justify-center items-center border md:border-none">
                                <div className="border border-blue-500 w-full h-48 md:h-[400px] bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-400">Picture will be here</p>
                                </div>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo
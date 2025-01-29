import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '../Components/Heading';

const CompanyInfo = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAccordion = (setter) => {
        setter((prev) => !prev);
    };

    return (
        <div>
            <div className="marginal my-4 py-5 border-t-2 border-b-2 border-[#b2c9dc]">
                <h2 className="text-[#004B8B] text-4xl text-center mb-4">
                    Welcome to the investor corner of Pranav Constructions, an organisation that builds bridges to home-ownership.
                </h2>
                <h2 className="text-[#004B8B] text-2xl text-center">
                    This section is dedicated to our investors. Here, you can access a wide range of information—offices, designated officers, financial statements, corporate filings, annual reports, and so forth—about your Company.
                </h2>
            </div>


            <div className="mt-10">
                <div className="text-center">
                    <Heading title="COMPANY INFORMATION" color="black" />
                </div>

                <div className='bg-[#004B8B] relative'>
                    <div className='mx-auto md:flex gap-4 justify-between'>

                        <div className="md:w-[50%] p-10">
                            {/* First Accordion */}
                            <div className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer border-2 border-[#CBA864] p-4"
                                    onClick={() => toggleAccordion(setIsOpen1)}
                                >
                                    <h2 className="font-bold text-white text-x">Registered Office & Corporate Office</h2>
                                    <span className="text-2xl text-white">{isOpen1 ? '−' : '+'}</span>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isOpen1 ? 'auto' : 0,
                                        opacity: isOpen1 ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden bg-gray-100"
                                >
                                    <div className="p-6">
                                        <p className='font-bold'>Pranav Constructions Limited</p>
                                        <p>Unit No. 1001, 10th Floor, DLH Park</p>
                                        <p>Near MTNL, S.V. Road</p>
                                        <p>Goregaon West, Mumbai – 400 062</p>
                                        <p className="mt-2"><span className="font-bold">Telephone:</span> 033 2635 3658</p>
                                        <p className="mt-1"><span>Email:</span> demo@pranavconstructions.com</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Second Accordion */}
                            <div className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer border-2 border-[#CBA864] p-4"
                                    onClick={() => toggleAccordion(setIsOpen2)}
                                >
                                    <h2 className="font-bold text-white">Registrar And Share Transfer Agent</h2>
                                    <span className='text-2xl text-white'>{isOpen2 ? '−' : '+'}</span>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isOpen2 ? 'auto' : 0,
                                        opacity: isOpen2 ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden bg-gray-100"
                                >
                                    <div className="p-6">
                                        <p className='font-bold'>KFin Technologies Limited</p>
                                        <p>
                                            Selenium Tower B, Plot No. 31 And 32, Financial District, Nanakramguda, Serilingampally Hyderabad-500
                                            032, Telangana, India
                                        </p>
                                        <p className="mt-2"><span className='font-bold'>Telephone:</span> +91 6716 2222 / 18003094001</p>
                                        <p className="mt-1"><span className='font-bold'>Email:</span> pcpl.ipo@kfintech.com</p>
                                        <p className="mt-1"><span className='font-bold'>Investor Grievance E-Mail:</span> einward.risk@kfintech.com</p>
                                        <p className="mt-1"><span className='font-bold'>Website:</span> www.kfintech.com</p>
                                        <p className="mt-1"><span className='font-bold'>SEBI Registration No:</span> INR000000221</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Third Accordion */}
                            <div className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer border-2 border-[#CBA864] p-4"
                                    onClick={() => toggleAccordion(setIsOpen3)}
                                >
                                    <h2 className="font-bold text-white">Company Secretary And Compliance Officer</h2>
                                    <span className="text-2xl text-white">{isOpen3 ? '−' : '+'}</span>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isOpen3 ? 'auto' : 0,
                                        opacity: isOpen3 ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden bg-gray-100"
                                >
                                    <div className="p-4">
                                        <p className='font-bold'>Ritu Jain</p>
                                        <p>Unit No. 1001, 10th Floor, DLH Park</p>
                                        <p>Near MTNL, S.V. Road</p>
                                        <p>Goregaon West, Mumbai – 400 062</p>
                                        <p className="mt-2"> <span className='font-bold'>Telephone:</span> +91 22 6276 9939</p>
                                        <p className="mt-1"> <span className='font-bold'>Email:</span> compliance.officer@pranavconstructions.com</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="md:w-[50%]">
                            <img src="./investor/inv-banner.png" className='w-full' alt="" />
                        </div>
                        <img src="./about/graphics-about.svg" className='absolute left-0 bottom-0 md:w-[40%] opacity-[0.5]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;

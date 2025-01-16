import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { officesData } from "../data/data";
import Heading from "../Components/Heading";

const Offices = () => {
    const [selectedOffice, setSelectedOffice] = useState("registeredAndCorporateOffice");

    const handleOfficeChange = (officeType) => {
        setSelectedOffice(officeType);
    };

    return (
        <div className="bg-gray-100 pt-1">
            <div className="marginal">

                <div className="text-center">
                    <Heading
                        title={"CONTACT PCPL TODAY"}
                        color="black"
                    />
                    <Heading
                        title={"AND FIND YOUR PERFECT PROPERTY MATCH"}
                        color="black"
                    />
                </div>
                <div className="md:flex my-10 justify-between items-start">
                    {/* Buttons */}
                    <div className="md:w-[55%]">
                        <div className="flex flex-col md:flex-row md:justify-start gap-4 mb-6">
                            {[
                                { key: "registeredAndCorporateOffice", label: "Registered & Corporate Office" },
                                { key: "branchOffices", label: "Branch Offices" },
                                { key: "salesOffices", label: "Sales Offices" },
                            ].map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => handleOfficeChange(key)}
                                    className={`w-full md:w-auto px-6 py-2 font-semibold ${selectedOffice === key
                                            ? "bg-[#004B8B] text-white"
                                            : "bg-gray-300 text-gray-800 hover:bg-[#096BBF] hover:text-white duration-300"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Address Display with Smooth Transition */}
                        <div
                            className=" p-4"
                            style={{
                                overflowY: "auto", // Allow content to scroll within the container if needed
                            }}
                        >
                            {/* Wrap all the dynamic content in AnimatePresence to allow full transition */}
                            <AnimatePresence mode="wait"> {/* Use mode="wait" to delay entering of new data until the exit animation finishes */}
                                <motion.div
                                    key={selectedOffice} // Key ensures content animates when the office changes
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        height: "300px", // Fixed height for the container (adjust as needed)
                                        overflow: "hidden", // Prevent overflow
                                    }}
                                >
                                    {officesData[selectedOffice].length > 0 ? (
                                        officesData[selectedOffice].map((office, index) => (
                                            <div key={index} className="mb-4 border-b-2 border-gray-300 pb-4 last:border-b-0">
                                                <p className="text-lg font-semibold mb-2">{office.address}</p>
                                                <p className="text-gray-600"><span className="text-[#004B8B] font-semibold">Telephone:</span> {office.telephone}</p>
                                                {office.email && <p className="text-gray-600"><span className="text-[#004B8B] font-semibold">Email: </span>{office.email}</p>}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-600">No offices available.</p> // Placeholder for empty state
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-[40%]">
                        <img
                            src="./contact-us/contact-cre.png"
                            alt="Contact Us"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offices;

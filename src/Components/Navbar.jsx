import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [showInfoBar, setShowInfoBar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState("transparent")
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowInfoBar(false);
                setBgColor("black")
            } else {
                setShowInfoBar(true);
                setBgColor("transparent")
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleBgColor = () => {
        const scrollPercent = (window.scrollY / window.innerHeight) * 100;

        // Set background color based on scroll percentage
        if (scrollPercent > 30) {  // Change background color after scrolling 30% of the viewport height
            setBgColor("black");
        } else {
            setBgColor("transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleBgColor);

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", handleBgColor);
        };
    }, []);

    useEffect(() => {
        // Disable body scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);
    return (
        <>
            {/* Navbar Container */}
            <div className={`fixed sarala top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${showInfoBar ? "translate-y-0" : "-translate-y-[32px]"}`}>
                {/* Info Bar */}
                <div className="bg-gray-800 text-white text-[12px] px-4 py-1">
                    <div className="max-w-7xl mx-auto flex justify-between">
                        <span>Contact Us: +91 22 6276 9999</span>
                        <span>Email: contact@pranavconstructions.com</span>
                    </div>
                </div>

                {/* Navbar */}
                <nav className={`bg-${bgColor} text-white py-6`}>
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="text-2xl font-bold md:w-[100px] w-[80px]"><img src="./home/logo-pcpl.png" alt="" /></a>

                        {/* Menus */}
                        <ul className="menu hidden md:flex space-x-8 text-[14px] font-medium">
                            <li className="cursor-pointer"><Link to="/">HOME</Link></li>
                            <li className="cursor-pointer"><Link to="/aboutus">COMPANY</Link></li>
                            <li className="cursor-pointer">LIVING SPACES</li>
                            <li className="cursor-pointer"><Link to="/investor-corner">INVESTOR</Link></li>
                            {/* <li className="cursor-pointer">MEDIA SECTION</li> */}
                            <li className="cursor-pointer"><Link to="/careers">CAREERS</Link></li>
                            <li className="cursor-pointer"><Link to="/contactus">CONTACT US</Link></li>
                        </ul>

                        {/* Right Side */}
                        <div className="flex items-center space-x-4">
                            <button className="text-xs hover:text-[#4CA5F1] duration-300">
                                <i className="fas fa-search"></i>
                            </button>
                            {/* <button className="text-xs hover:text-[#4CA5F1] duration-300">
                                <i className="fas fa-user"></i>
                            </button> */}
                            <button className="relative bg-white text-[12px] text-black px-6 py-2 hover:bg-transparent hover:text-white transition-colors duration-300">
                                Schedule a Visit
                                <span className="glare-effect"></span>
                            </button>



                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden text-2xl cursor-pointer">


                            <label className="hamburger">
                                <input type="checkbox"
                                    id="burger"
                                    checked={mobileMenuOpen}
                                    onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="hidden"
                                />
                                <svg viewBox="0 0 32 32">
                                    <path
                                        className="line line-top-bottom"
                                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                    ></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>

                        </div>

                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-full z-40 transform transition-transform duration-1000 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{
                    backgroundColor: "rgba(31, 41, 55, 0.9)", // Semi-transparent background
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                }}
            >
                {/* Wrapper for fade-in content */}
                <div
                    className={` border-white transition-all duration-1000 ease-in-out ${mobileMenuOpen ? "opacity-100 " : "opacity-0 "
                        }`}
                    style={{
                        transitionDelay: mobileMenuOpen ? "0.3s" : "0s", // Delay the fade-in when menu opens
                    }}
                >
                    <ul className="mt-32 space-y-2 text-white py-4 m-auto text-lg font-medium">
                        <li className="cursor-pointer py-2 px-4">Home</li>
                        <li className="cursor-pointer py-2 px-4">About</li>
                        <li className="cursor-pointer py-2 px-4">Services</li>
                        <li className="cursor-pointer py-2 px-4">Portfolio</li>
                        <li className="cursor-pointer py-2 px-4">Blog</li>
                        <li className="cursor-pointer py-2 px-4">FAQs</li>
                        <li className="cursor-pointer py-2 px-4">Contact</li>
                    </ul>
                </div>
            </div>



        </>
    );
};

export default Navbar;

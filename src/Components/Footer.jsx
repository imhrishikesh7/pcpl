import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
    return (
        <footer className="relative w-full  h-[110vh] overflow-hidden">
            {/* Video Background */}
            {/* <img src="./home/fbg.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
            <video
                src="./home/footer.webm"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            {/* Footer Content */}
            <div className="relative w-full h-full text-white bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-baseline justify-end pt-24 pb-4 min-h-screen">
                <div className="absolute top-[5vh] w-[100%] hidden md:block">
                    <ContactForm />
                </div>
                <div className="container mx-auto px-6 md:flex flex-wrap justify-between gap-8">
                    {/* About Section */}
                    <div className="flex-1 m-6 md:mb-0 md:mr-8 mx-auto">
                        {/* <h1 className="text-3xl font-semibold mb-4">PCPL</h1> */}
                        <a href="/" className="text-2xl font-bold md:w-[150px] w-[120px] mb-4 block"><img src="./home/logo-pcpl.png" className="w-full" alt="" /></a>
                        <p className="text-[12px] sarala leading-relaxed">
                            Pranav Constructions Limited is a Mumbai-based redevelopment company
                            with a decade-long reputation for building high-quality homes on
                            schedule, with complete honesty and transparency.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div className="flex- mb-6 md:mb-0 md:mr-8 m-auto">
                        <h3 className="text-2xl font-semibold mb-4 viaoda">Explore</h3>
                        <ul className="space-y-2 text-[12px] sarala text-gray-400">
                            <li><a href="#" className="hover:text-white duration-300">Company</a></li>
                            <li><a href="#" className="hover:text-white duration-300">Living Spaces</a></li>
                            <li><a href="#" className="hover:text-white duration-300">Investors</a></li>
                            <li><a href="#" className="hover:text-white duration-300">Careers</a></li>
                            <li><a href="#" className="hover:text-white duration-300">Contact US</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                        <h3 className="text-2xl font-semibold mb-4 viaoda">Contact</h3>
                        <p className="text-[12px] sarala mb-2 text-gray-400">
                            1001, DHL Park, 10th Floor, SV Road, Opp. Goregaon MTNL, Goregaon West,
                            Mumbai - 400062, Maharashtra, India.
                        </p>
                        <p className="text-[12px] sarala mb-2">
                            <a href="mailto:contact@pranavconstructions.com" className="hover:text-gray-400 duration-300">
                                contact@pranavconstructions.com
                            </a>
                        </p>
                        <p className="text-[12px] sarala">
                            <a href="tel:+912262569999" className="hover:text-gray-400 duration-300">
                                +91 22 6256 9999
                            </a>
                        </p>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex-1 mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4 viaoda mb-4">Newsletter</h3>
                        <p className="text-[12px] sarala mb-4">Stay updated with our latest news and offerings.</p>
                        <div className="flex flex-col w-[80%]">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 p-3 bg-gray-700 text-white text-center text-[12px] sarala placeholder-gray-400 focus:outline-none"
                            />
                            <button className=" text-white text-[12px] sarala py-3 bg-[#004b8b] hover:bg-[#0165BA] duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 text-center text-[12px] sarala text-gray-400 w-full">
                    &copy; All rights reserved to Pranav Construction Ltd.
                </div>
            </div>
        </footer>



    );
};

export default Footer;

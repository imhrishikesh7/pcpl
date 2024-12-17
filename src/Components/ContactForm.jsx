const ContactForm = () => {
    return (
        <div className="relative md:absolute md:-top-[35%] md:z-[1] md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-16 bg-black w-full m-auto md:w-[70%] lg:w-[65%] py-10 px-[10%] text-white shadow-lg">
            <h2 className="text-sm tracking-wide uppercase  text-white">
                Contact With Me
            </h2>
            <h1 className="text-3xl mb-6 viaoda tracking-wide">
                WRITE TO AGENT
            </h1>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border-b sarala text-[14px] border-gray-600 bg-transparent text-white focus:outline-none focus:border-white"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 border-b sarala text-[14px] border-gray-600 bg-transparent text-white focus:outline-none focus:border-white"
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2 border-b sarala text-[14px] border-gray-600 bg-transparent text-white focus:outline-none focus:border-white"
                />
                <textarea
                    placeholder="Write A Message"
                    rows="4"
                    className="w-full p-2 border-b sarala text-[14px] border-gray-600 bg-transparent text-white focus:outline-none focus:border-white"
                ></textarea>
                <button
                    type="submit"
                    className="bg-white text-black py-2 px-4 mt-4 w-full mx-auto block hover:bg-gray-200"
                >
                    SEND A MESSAGE
                </button>
            </form>
        </div>
    );
};
export default ContactForm;  
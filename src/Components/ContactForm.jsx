const ContactForm = () => {
    return (
      <div className="relative md:w-[90%] max-w-[600px] mx-auto mt-32 md:mt-12 p-6 md:rounded-lg shadow-lg">
        {/* Background overlay for readability */}
        <div
          className="absolute inset-0 md:rounded-lg lg:backdrop-blur-lg lg:bg-black/50 bg-black"
          style={{
            zIndex: -1, // Only zIndex is kept in style to ensure proper layering
          }}
        ></div>
  
        {/* Form Content */}
        <div className="text-center mb-4">
          <h2 className="text-xs mb-2 tracking-widest uppercase text-gray-300">
            Contact With Me
          </h2>
          <h1 className="text-2xl font-bold viaoda text-white">WRITE TO US</h1>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full py-2 px-3 rounded-lg bg-transparent border border-gray-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-3 rounded-lg bg-transparent border border-gray-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full py-2 px-3 rounded-lg bg-transparent border border-gray-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200"
          />
          <textarea
            placeholder="Write A Message"
            rows="3"
            className="w-full py-2 px-3 rounded-lg bg-transparent border border-gray-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#004b8b] hover:bg-[#0165BA] duration-300 text-white font-semibold hover:opacity-90 transition"
          >
            SEND A MESSAGE
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  
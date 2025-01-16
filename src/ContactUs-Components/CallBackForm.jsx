import React, { useState } from "react";
import Heading from "../Components/Heading";

const CallBackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    department: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
        <div className="text-center mb-10">
        <Heading title="REQUEST A CALL BACK" color="#221C13" />
        <p>
        We would love to hear from you at PCPL. Whether you have a question about <br /> a specific property or are interested in discussing your real estate goals we are here to help.
        </p>
      </div>
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-100 p-8 shadow-md md:max-w-[70%] mx-auto border border-gray-300"
    >
      {/* Name, Mobile, Email, and City in 2 Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
            placeholder="Enter your mobile number"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
            placeholder="Enter your city"
          />
        </div>
      </div>

      {/* Department Dropdown */}
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
        >
          <option value="">Select a department</option>
          <option value="hr">HR</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:border-[#004B8B] sm:text-sm"
          placeholder="Enter your message"
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="h-5 w-5 text-[#004B8B] border-gray-400 focus:ring-[#004B8B]"
        />
        <label htmlFor="newsletter" className="text-sm text-gray-700">
          Yes, I want to stay informed and receive newsletter and marketing updates.
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="text-sm text-gray-600">
        By submitting this form, you agree to the{" "}
        <a href="/terms" className="text-[#004B8B] hover:text-[#00325D]">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="text-[#004B8B] hover:text-[#00325D]">
          Privacy Policy
        </a>.
      </div>

      {/* Send OTP Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-[#004B8B] text-white font-semibold hover:bg-[#00325D] focus:outline-none focus:ring-2 focus:ring-[#004B8B] focus:ring-opacity-50 duration-300"
      >
        Send OTP
      </button>
    </form>
    </div>
  );
};

export default CallBackForm;

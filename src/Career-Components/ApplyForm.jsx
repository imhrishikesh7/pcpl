import React, { forwardRef } from "react";
import Heading from "../Components/Heading";

const ApplyForm = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex bg-white flex-col py-10 items-center">
      <div>
        <Heading title="APPLY NOW" color="#221C13" />
      </div>
      <form className="w-full md:max-w-[70%]  p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm bg-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm bg-gray-100"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="mt-1 block w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 sm:text-sm bg-gray-100"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Upload resume
          </label>
          <input
            type="file"
            id="resume"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:border-0
              file:text-sm file:font-medium
              file:bg-gray-200 file:text-gray-700
              hover:file:bg-gray-300 file:duration-300 file:cursor-pointer focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#004B8B] text-white py-2 px-6 hover:bg-[#096BBF] duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default ApplyForm;

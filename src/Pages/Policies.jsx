import React from "react";
import GlobalCover from "../Components/GlobalCover";

const Policies = () => {
  return (
    <div>
      <GlobalCover src="./investor/investor-cov.png" title="SHAREHOLDERS' INFORMATION" subtitle="Codes and Policies" />

      <div className="container mx-auto px-4 py-8">

        <ul className="space-y-4">
          <li className="py-3 px-4 border rounded-md shadow-sm bg-gray-100">
            <span className="text-gray-800">
              Code of Conduct of Board of Directors and Senior Management Personnel
            </span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-white">
            <span className="text-gray-800">
              Code for Fair Disclosure of Unpublished Price Sensitive Information
            </span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-gray-100">
            <span className="text-gray-800">
              Code on Prohibition of Insider Trading
            </span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-white">
            <span className="text-gray-800">Dividend Distribution Policy</span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-gray-100">
            <span className="text-gray-800">Corporate Social Responsibility Policy</span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-white">
            <span className="text-gray-800">Employee Fraternization Policy</span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-gray-100">
            <span className="text-gray-800">
              Policy for Prevention of Sexual Harassment at Workplace
            </span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-white">
            <span className="text-gray-800">Vigil Mechanism Policy</span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-gray-100">
            <span className="text-gray-800">Nomination and Remuneration Policy</span>
          </li>
          <li className="py-3 px-4 border rounded-md shadow-sm bg-white">
            <span className="text-gray-800">Policy for determining Material Subsidiary</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;

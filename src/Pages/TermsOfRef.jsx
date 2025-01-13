import React from 'react';
import { useParams } from 'react-router-dom';
import { committeeData } from "../data/committeeData"; // Import committee data
import { Link } from 'react-router-dom';
import GlobalCover from '../Components/GlobalCover';

const TermsOfRef = () => {
    const { committeeKey } = useParams();
    const committee = committeeData.find(item => item.key === committeeKey);

    if (!committee) {
        return (
            <div className="text-center">
            <GlobalCover src="/b-committees/com-cover.png" title="TERMS OF REFERENCE" />

                <h1 className="text-3xl font-semibold text-red-600">Committee not found</h1>
                <p>The requested committee's terms of reference could not be found.</p>
            </div>
        );
    }

    return (
        <div className="mx-auto">
            <GlobalCover src="/b-committees/com-cover.png" title={committee.name} subtitle="TERMS OF REFERENCE" />
            <div className='marginal'>
            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">{committee.name} - Terms of Reference</h2> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-lg text-gray-700">
                    {committee.termsOfReference}

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
                        <p className="text-gray-600">For further details on the committee’s activities, please contact the committee's secretary.</p>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <Link to="/board-committees" className="text-blue-600 hover:underline">
                    &larr; Back to Board Committees
                </Link>
            </div>
            </div>
        </div>
    );
};

export default TermsOfRef;
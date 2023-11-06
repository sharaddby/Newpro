import React, { useState } from "react";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12">
                    <h3 className='text-3xl'>Medical Terminology & Anatomy - Bundle and Save!</h3>
                </div>
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12">
                    <div className="2xl:w-1/2 xl:w-1/2 lg:1/2 md:w-1/2 sm:w-full w-full justify-center">
                        <img src="../course.webp" alt='hello' />
                        <p>Medical Terminology Course</p>
                    </div>
                    <div className="2xl:w-1/2 xl:w-1/2 lg:1/2 md:w-1/2 sm:w-full w-full">
                        <img src="../course.webp" alt='hello' />
                        <p>Medical Terminology Course</p>
                    </div>
                </div>
                <div className="2xl:w-6/12 xl:w-6/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center">

                    <div className="flex space-x-4 mb-4">
                        <div
                            className={`cursor-pointer p-2 border border-gray-300 ${activeTab === 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                                }`}
                            onClick={() => handleTabClick(1)}
                        >
                            Enroll
                        </div>
                        <div
                            className={`cursor-pointer p-2 border border-gray-300 ${activeTab === 2 ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                                }`}
                            onClick={() => handleTabClick(2)}
                        >
                            Course Requirements
                        </div>
                    </div>
                    <div className="p-4 border border-gray-300 sm-w-1/2">
                        {activeTab === 1 && <div>
                            <h5 className="text-xl">Enroll in the Online Medical Terminology Anatomy Bundle</h5>
                            <p>You must read the course/system requirements, before enrolling.</p>
                            <p>Online <span className="text-darksky">Medical Terminology + Anatomy </span>Bundle - $1,209.90 (<span className="text-darksky">Members:</span><span className="text-red-500"> $695.00:)
                                *Members save $514.90 over list price</span></p>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox" className="form-checkbox h-5 w-5"
                                        />
                                        <span className="ml-2">Not an AAPC Member? Add AAPC Student Membership for $140 to get member prices.</span>
                                    </label>     
                                </div>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded">
                                     ENROLL
                                </button>
                                <p className="py-5 px-5 mt-5 bg-slate-300">Purchase of Medical Terminology & Anatomy courses must be made in same transaction to receive $95 instant discount.</p>
                                <p>Both the Anatomy and Medical Terminology Courses are recommended for students taking any coding or billing course. These 2 courses must be completed within a 4 month period, however AAPC allows for an additional 2 month grace period, giving you a full 6 months access from the date of purchase.
                                </p>
                                <p>By purchasing any online course and other items, I certify that I have read and agree to the online course Terms and Conditions and the Refund Policy.
                                </p>
                                <p>Date of purchase is considered your course start date, additional time will be given for processing of your order.
                                </p>
                                

                        </div>}
                        {activeTab === 2 && <div>
                           <h5 className="text-xl">Course/System Requirements (not included):</h5> 
                           <ul>
                                <li>Computer with:</li>
                                <li>High-speed Internet access with supported computer operating systems and Internet/Web browsers</li>
                                <li>Adobe Acrobat Reader (free download available)</li>
                                <li>PowerPoint Viewer (free download available)</li>
                           </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs



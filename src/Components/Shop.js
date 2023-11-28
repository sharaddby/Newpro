import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);

    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);
    };
    const handleSubTabClick = (subTabNumber) => {
        setActiveSubTab(subTabNumber);
    };
    return (
        <div className='grid place-items-center mt-5'>
            <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center'>
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                    <div className="space-y-1 bg-gray-200">
                        <button className='w-full p-2 bg-blue-500 text-white'>Shop</button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            Overview
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Medical Coding Books
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Bundles
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Bundles + Codify by AAPC
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    ICD-10
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(4)}
                                >
                                    CPT
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(5)}
                                >
                                    HCPCS
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(6)}
                                >
                                    Coders' Specialty Guides
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 7 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(7)}
                                >
                                    Reference Guides
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 8 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(8)}
                                >
                                    Medical Coding Books FAQs
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 9 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(9)}
                                >
                                    Medical Coding Book Updates
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            eNewsletters
                        </button>
                        {activeMainTab === 3 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Medical Coding eNewsletters
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Compliance eNewsletters
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    Post-Acute eNewsletters
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(4)}
                                >
                                    Tech & Innovation in Healthcare eNewsletter New!
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(4)}
                        >
                            Partner Publications
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 5 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(5)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Exam Preparation
                        </button>
                        {activeMainTab === 5 && (
                            <div className="flex flex-col mt-2">
                                <Link to="/Training" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Training Courses
                                </Link>
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Study Guides
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Practice Exams
                                </button>
                            </div>
                        )}
                        <Link to="/Instructor" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                        Instructor Resources
                        </Link>
                        <button
                            className={`w-full p-2 ${activeMainTab === 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(6)}
                        >
                            Clearance Items
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">edical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 5 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 6 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 7 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 8 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 9 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">dical Coding Online Store</h4>
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../book.png" alt="gh" className="w-full" />
                                            <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                            <h5 className="pl-5">$239.99 $119.99</h5>
                                            <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 4 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="w-full justify-center mx-auto">
                                    <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                        <div className="sm:basis-full basis-full">
                                            <h4 className="text-2xl text-darksky">Partner Publications</h4>
                                            <img src="./nov_book_banners.jpg" alt='hhd' />
                                            <p className="mt-5 font-lg text-justify">AAPC Workshops provide in-depth
                                                information on critical business of healthcare topics. Get
                                                hands-on experience through interactive exercises and online discussions led by industry
                                                experts. These events allow attendees to interact with presenters to discuss the unique
                                                challenges they face, all from the convenience of home or office. Workshop recordings are
                                                available on-demand shortly after live presentations are completed.</p>

                                            <div className="mt-5">
                                                <h4 className="text-md text-red-500">Featured Products</h4>
                                            </div>
                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5 bg-gray-200">
                                                <div className="p-5">
                                                    <img src="../boks.gif" alt="hell" className='h-36' />
                                                </div>
                                                <div className="col-span-2 p-5">
                                                    <p className="text-md text-lightsky">Medical Record Auditor, Fourth Edition (AMA)</p>
                                                    <p className="text-md"><span className='font-semibold'>Publisher:</span> AMA</p>
                                                    <p className="text-md"><span className='font-semibold'>ISBN:</span>978-1-62202-101-7</p>
                                                    <p className="text-md"><span className='font-semibold'>Price:</span>$189.95</p>
                                                    <p className="text-md"><span className='font-semibold'>Members:</span>$89.95</p>
                                                </div>
                                                <div className="p-5">
                                                    <button className="bg-lightsky hover:bg-darksky text-white font-bold py-2 px-6 rounded mt-2">
                                                        LEARN MORE
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                                <div className="p-5">
                                                    <img src="../boks.gif" alt="hell" className='h-36' />
                                                </div>
                                                <div className="col-span-2 p-5">
                                                    <p className="text-md text-lightsky">Medical Record Auditor, Fourth Edition (AMA)</p>
                                                    <p className="text-md"><span className='font-semibold'>Publisher:</span> AMA</p>
                                                    <p className="text-md"><span className='font-semibold'>ISBN:</span>978-1-62202-101-7</p>
                                                    <p className="text-md"><span className='font-semibold'>Price:</span>$189.95</p>
                                                    <p className="text-md"><span className='font-semibold'>Members:</span>$89.95</p>
                                                </div>
                                                <div className="p-5">
                                                    <button className="bg-lightsky hover:bg-darksky text-white font-bold py-2 px-6 rounded mt-2">
                                                        LEARN MORE
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="grid md:grid-cols-4 border border-y-1 border-x-0 border-gray-200 p-5">
                                                <div className="text-left font-bold text-blue-600">All Vendor Books</div>
                                            </div>

                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5 bg-gray-200">
                                                <div className="p-5">
                                                    <img src="../boks.gif" alt="hell" className='h-36' />
                                                </div>
                                                <div className="col-span-2 p-5">
                                                    <p className="text-md text-lightsky">Medical Record Auditor, Fourth Edition (AMA)</p>
                                                    <p className="text-md"><span className='font-semibold'>Publisher:</span> AMA</p>
                                                    <p className="text-md"><span className='font-semibold'>ISBN:</span>978-1-62202-101-7</p>
                                                    <p className="text-md"><span className='font-semibold'>Price:</span>$189.95</p>
                                                    <p className="text-md"><span className='font-semibold'>Members:</span>$89.95</p>
                                                </div>
                                                <div className="p-5">
                                                    <button className="bg-lightsky hover:bg-darksky text-white font-bold py-2 px-6 rounded mt-2">
                                                        LEARN MORE
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                                                <div className="p-5">
                                                    <img src="../boks.gif" alt="hell" className='h-36' />
                                                </div>
                                                <div className="col-span-2 p-5">
                                                    <p className="text-md text-lightsky">Medical Record Auditor, Fourth Edition (AMA)</p>
                                                    <p className="text-md"><span className='font-semibold'>Publisher:</span> AMA</p>
                                                    <p className="text-md"><span className='font-semibold'>ISBN:</span>978-1-62202-101-7</p>
                                                    <p className="text-md"><span className='font-semibold'>Price:</span>$189.95</p>
                                                    <p className="text-md"><span className='font-semibold'>Members:</span>$89.95</p>
                                                </div>
                                                <div className="p-5">
                                                    <button className="bg-lightsky hover:bg-darksky text-white font-bold py-2 px-6 rounded mt-2">
                                                        LEARN MORE
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5 bg-gray-200">
                                                <div className="p-5">
                                                    <img src="../boks.gif" alt="hell" className='h-36' />
                                                </div>
                                                <div className="col-span-2 p-5">
                                                    <p className="text-md text-lightsky">Medical Record Auditor, Fourth Edition (AMA)</p>
                                                    <p className="text-md"><span className='font-semibold'>Publisher:</span> AMA</p>
                                                    <p className="text-md"><span className='font-semibold'>ISBN:</span>978-1-62202-101-7</p>
                                                    <p className="text-md"><span className='font-semibold'>Price:</span>$189.95</p>
                                                    <p className="text-md"><span className='font-semibold'>Members:</span>$89.95</p>
                                                </div>
                                                <div className="p-5">
                                                    <button className="bg-lightsky hover:bg-darksky text-white font-bold py-2 px-6 rounded mt-2">
                                                        LEARN MORE
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="grid border border-y-1 border-x-0 border-gray-200 p-3 mt-5">
                                                <div className="text-center font-bold text-blue-600"> [Show more] </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 5 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-semibold">Study Guides</h4>
                                    <div className="grid sm:grid-cols-1 w-100">
                                        <div className="bg-white mt-2">
                                            <p className='text-md my-4'>AAPC study guides — available for all AAPC certifications — are organized to help you 
                                            understand and practice the concepts, elements, and rules governing the responsibilities of the certified professional.
                                            Within each guide, you’ll find easy-to-follow explanations, examples, coding tips, and exercises designed to reinforce 
                                            your certification training.</p>
                                            <p className='text-md'>AAPC study guides — available for all AAPC certifications — are organized to help you understand 
                                            and practice the concepts, elements, and rules governing the responsibilities of the certified professional. Within each
                                             guide, you’ll find easy-to-follow explanations, examples, coding tips, and exercises designed to reinforce your 
                                             certification training.</p>
                                        </div>
                                    </div>

                                    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-4">
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                        <div className="bg-white mt-2">
                                            <img src="../cpc-study-guide.webp" alt="gh" />
                                            <h6 className="text-lg text-green-800 font-semibold">CPC® Study Guide</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="sm:w-12/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                                    <div className="grid sm:grid-cols-1 w-100 px-4">
                                        <div className="bg-white mt-2">
                                            <p className='text-md'>Are you really ready? Don’t overestimate, or worse, underestimate the difficulty of your exam. Get familiar with the format, questions, and time constraints before your exam and improve your chances of passing on your first try.</p>
                                            <p className='text-md px-12'>Are you really ready? Don’t overestimate, or worse, underestimate the difficulty of your exam. Get familiar with the format, questions, and time constraints before your exam and improve your chances of passing on your first try.</p>
                                            <h5 className='text-xl font-semibold'>Each practice exam offers:</h5>
                                            <ul className='px-12 list-disc'>
                                                <li>Immediate Feedback – incorrect answers are displayed with rationales for all questions</li>
                                                <li>Unlimited Retakes – take the exam as many times as you like</li>
                                                <li>Realistic Exam Content – emulates content and difficulty level of the actual exams</li>
                                                <li>Readiness Gauge – an indication of your readiness for the real exam</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 6 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-11/12 w-100 justify-center mx-auto">
                                    <h4 className="text-2xl text-green-900 font-bold">Online Store - Clearance Items</h4>
                                    <div className="grid sm:grid-cols-1 w-100 px-2">
                                        <div className="bg-white mt-2">
                                            <p className='text-md'>Clearance Prices are for AAPC Members Only. Non-member pricing will be reflected in your cart.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Shop




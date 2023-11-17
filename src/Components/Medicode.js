import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Medicode = () => {
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);

    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);
    };

    const handleSubTabClick = (subTabNumber) => {
        setActiveSubTab(subTabNumber);
    };
    const [isOpen1, setisOpen1] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const toggleServices1 = () => {
        setisOpen1(!isOpen1);
        setisOpen2(false);
    };
    const toggleServices2 = () => {
        setisOpen2(!isOpen2);
        setisOpen1(false);

    };
    return (
        <div className='grid place-items-center mt-5'>
            <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center'>
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                    <div className="space-y-1 bg-gray-200">
                        <button className='w-full p-2 bg-blue-500 text-white'>Continuing Education</button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            Search for CEUs
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Conferences
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    HEALTHCON
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Regional
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? 'bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Workshops
                        </button>
                        {activeMainTab === 3 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    E/M Workshop Series
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(4)}
                        >
                            Webinars
                        </button>
                        <Link to="/Codes" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Codify
                        </Link>
                        <Link to="/Events" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            On Demand Events
                        </Link>
                        <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Local Chapter Events
                        </Link>

                        <button
                            className={`w-full p-2 ${activeMainTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(5)}
                        >
                            Approved CEU Vendors
                        </button>
                        <Link to="/Supports" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            FAQ
                        </Link>
                        <button
                            className={`w-full p-2 ${activeMainTab === 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(6)}
                        >
                            CEU Information - Members
                        </button>
                        <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            CEU Information - Vendors
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <img src="../2023_july_2024_promos_dl-930x150-px.webp" alt="hrof" />
                                    <h4 className="text-2xl text-green-900 font-bold">Continuing Education Units (CEUs)</h4>
                                    <p>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.</p>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <div className='bg-gray-300'>
                                        <div className="sm:w-full w-full justify-center mx-auto mt-16 mb-16">
                                            <div className="grid xxl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
                                                <div className='my-2 '>
                                                    <input
                                                        type="text"
                                                        className="w-full p-2 rounded border"
                                                        placeholder="Text Input"
                                                    />
                                                </div>
                                                <div className='my-2 '>
                                                    <button onClick={toggleServices1} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 px-12 h-10">
                                                        Specialty
                                                    </button>
                                                    {isOpen1 && (
                                                        <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                            {/* Dropdown content goes here */}
                                                            <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                                                <Link
                                                                    to="./Prerequisites"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >  Prerequisites
                                                                </Link>
                                                                <Link
                                                                    to="IdentifyAreas"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Areas of weakness
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Practice Exams
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Identify Areas of Weakness
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Study Guide
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Exam Review
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='my-2 '>
                                                    <input
                                                        type="text"
                                                        className="w-full p-2 rounded border"
                                                        placeholder="Text Input"
                                                    />
                                                </div>
                                                <div className='my-2 '>
                                                    <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 px-8 h-10">
                                                        Miles From
                                                    </button>
                                                    {isOpen2 && (
                                                        <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                            {/* Dropdown content goes here */}
                                                            <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                                                <Link
                                                                    to="./Prerequisites"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >  Prerequisites
                                                                </Link>
                                                                <Link
                                                                    to="IdentifyAreas"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Areas of weakness
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Practice Exams
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Identify Areas of Weakness
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Study Guide
                                                                </Link>
                                                                <Link
                                                                    to="ss"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                                                >
                                                                    Exam Review
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='my-2 '>
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <h1 className='text-5xl font-semibold'>www.healthcon.com</h1>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <h2 className='text-4xl font-semibold'>events</h2>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="w-full justify-center mx-auto">
                                    <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                        <div className="sm:basis-full basis-full">
                                            <h3 className="text-3xl text-darksky font-semibold mb-5">E/M Workshop Series</h3>
                                            <img src="./em-series-hero.jpg" alt="em" />
                                            <p className="mt-5 text-justify">AAPC Workshops provide in-depth
                                                information on critical business of healthcare topics. Get
                                                hands-on experience through interactive exercises and online discussions led by industry
                                                experts. These events allow attendees to interact with presenters to discuss the unique
                                                challenges they face, all from the convenience of home or office. Workshop recordings are
                                                available on-demand shortly after live presentations are completed.</p>
                                            <p className="mt-5 text-justify">AAPC Workshops provide in-depth
                                                information on critical business of healthcare topics. Get
                                                hands-on experience through interactive exercises and online discussions led by industry
                                                experts. These events allow attendees to interact with presenters to discuss the unique
                                                challenges they face, all from the convenience of home or office. Workshop recordings are
                                                available on-demand shortly after live presentations are completed.</p>
                                            <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="mb-5">
                                                    <img src="../workshopbundle_complete.jpg" alt="hell" />
                                                    <p className="text-md text-lightsky">E/M Workshop Bundle:</p>
                                                    <h5 className="text-xl text-lightsky font-semibold">Complete Series</h5>
                                                    <p className="font-semibold mt-2">CEUs:78 |<del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-24 rounded mt-2">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 4 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                    <div className="md:basis-full sm:basis-full basis-full justify-center mx-auto">
                                        <h4 className="text-2xl text-titski font-bold">Webinars: Stay Up to Date and Earn CEUs!</h4>
                                        <p>Health care professionals are obligated to stay current in their profession. This includes
                                            continuing education in their respective discipline as well as keeping up with the latest
                                            medical coding updates, compliance rules, and government regulations. AAPC supports its
                                            members to maintain a distinctive edge in their health care career by providing a wide
                                            variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                            web.</p>
                                        <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                            our CEU <span className="text-green-900">Information page.</span></p>
                                        <div className="align-center">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center mb-10">
                                                View webinar Library
                                            </button>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg-grid-cols-3 gap-4">
                                            <div className="bg-lightblu pb-5">
                                                <h4 className="text-2xl text-white text-center py-10 font-semibold">Single Webinar</h4>
                                                <hr className="mx-7" />
                                                <p className="text-5xl text-white text-center pt-16 font-semibold ">$65</p>
                                                <p className="text-white text-lg text-center pb-16">for Members</p>
                                                <p className="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                                    VIEW WEBINARS</p>
                                            </div>
                                            <div className="bg-lightblu pb-5">
                                                <h4 className="text-2xl text-white text-center py-10 font-semibold">Webinar 6-Pack</h4>
                                                <hr className="mx-7" />
                                                <p className="text-5xl text-white text-center pt-16 font-semibold ">$165</p>
                                                <p className="text-white text-lg text-center pb-16">for Members</p>
                                                <p className="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                                    Add To Cart</p>
                                            </div>
                                            <div className="bg-darkblu pb-5">
                                                <h4 className="text-2xl text-white text-center py-10 font-semibold">Subscription</h4>
                                                <hr className="mx-7" />
                                                <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500"
                                                    data-dropdown-trigger="hover"
                                                    className="text-black bg-white  font-medium rounded-lg text-sm px-5 py-2.5 ml-10 mt-5 text-center inline-flex items-center"
                                                    type="button">$419* | 1-year subscription<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="m1 1 4 4 4-4" />
                                                    </svg></button>
                                                <div id="dropdownDelay"
                                                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                                        <li>
                                                            <a href="jj"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$419*
                                                                | 1-year subscription</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="text-lg text-white text-center pb-3">*for Members</p>
                                                <p className="text-white pb-20"><input id="comments" className="mx-5"
                                                    aria-describedby="comments-description" name="comments" type="checkbox" />Auto-Renew
                                                    my subscription</p>
                                                <p className="text-lightblue text-lg text-center bg-white px-3 py-3 w-9/12 mx-auto font-semibold">
                                                    Add To Cart</p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg-grid-cols-3 gap-4 border mt-20 border-indigo-600">
                                            <div className="px-5 py-5">
                                                <ul>
                                                    <li>Group Webinar Subscriptions</li>
                                                    <li>Easy and efficient way to earn CEUS</li>
                                                    <li>Discounted pricing for multiple users</li>
                                                    <li>Administrator managed account</li>
                                                </ul>
                                            </div>
                                            <div className="px-5 py-5">
                                                <p className="text-gray-600">For more information</p>
                                                <b className='text-2xl'>Call 877-524-5027 or</b>
                                            </div>
                                            <div className="px-3 py-5">
                                                <p className="text-white text-lg text-center bg-blue-700 px-8 py-3 w-9/12 mx-auto font-semibold">
                                                    REQUEST QUOTE</p>
                                            </div>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                                            <div className="px-5 py-5 border border-gray-300">
                                                <p>Looking for something more interactive & hands-on? Check out <span className="text-darksky">AAPC
                                                    Workshops</span></p>
                                            </div>
                                            <div className="px-5 py-5 border border-gray-300">
                                                <p>Want to Be a Webinar Presenter? <span className="text-darksky">Learn More</span></p>
                                            </div>
                                        </div>
                                        <div id="default-carousel" className="relative w-full mt-20 border border-orange-600" data-carousel="slide">
                                            <div className="relative h-80 overflow-hidden rounded-lg md:h-80">
                                                <div className="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                                    <div className="px-5 py-5 h-80">
                                                        <p className="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                                            of topics, they are easy to access
                                                            and I cannot think of a way to improve them, at this time.</p>
                                                        <h4 className="text-2xl text-center">Coding exam </h4>
                                                    </div>
                                                </div>
                                                <div className="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                                    <div className="px-5 py-5 h-80">
                                                        <p className="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                                            of topics, they are easy to access
                                                            and I cannot think of a way to improve them, at this time.</p>
                                                        <h4 className="text-2xl text-center">Coding exam </h4>
                                                    </div>
                                                </div>
                                                <div className="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                                    <div className="px-5 py-5 h-80">
                                                        <p className="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                                            of topics, they are easy to access
                                                            and I cannot think of a way to improve them, at this time.</p>
                                                        <h4 className="text-2xl text-center">Coding exam </h4>
                                                    </div>
                                                </div>
                                                <div className="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                                    <div className="px-5 py-5 h-80">
                                                        <p className="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                                            of topics, they are easy to access
                                                            and I cannot think of a way to improve them, at this time.</p>
                                                        <h4 className="text-2xl text-center">Coding exam </h4>
                                                    </div>
                                                </div>
                                                <div className="hidden duration-700 ease-in-out mt-20" data-carousel-item>
                                                    <div className="px-5 py-5 h-80">
                                                        <p className="text-center px-40 pt-10">The webinars are great! There are a vide variety
                                                            of topics, they are easy to access
                                                            and I cannot think of a way to improve them, at this time.</p>
                                                        <h4 className="text-2xl text-center">Coding exam </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                                <button type="button"
                                                    className="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                                    aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                                <button type="button"
                                                    className="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                                    aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                                <button type="button"
                                                    className="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                                    aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                                <button type="button"
                                                    className="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                                    aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                                <button type="button"
                                                    className="w-3 h-3 rounded-full bg-orange-600 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600"
                                                    aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                            </div>
                                            <button type="button"
                                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                                data-carousel-prev>
                                                <span
                                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 1 1 5l4 4" />
                                                    </svg>
                                                    <span className="sr-only">Previous</span>
                                                </span>
                                            </button>
                                            <button type="button"
                                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                                data-carousel-next>
                                                <span
                                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="m1 9 4-4-4-4" />
                                                    </svg>
                                                    <span className="sr-only">Next</span>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                                            <div className="px-5 py-5">
                                                <h4 className="text-2xl">Upcoming Webinars</h4>
                                            </div>
                                            <div className="px-5 py-5">
                                                <form className="flex items-center">
                                                    <div className="relative w-full">
                                                        <input type="text" id="voice-search"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required />
                                                    </div>
                                                    <button type="submit"
                                                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Search
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="overflow-auto h-96 w-11/12 mx-auto">
                                            <table className="table-auto">
                                                <thead>
                                                    <tr className='bg-gray-500 text-white'>
                                                        <th className="w-1/5 py-3 text-left">Date</th>
                                                        <th className="w-2/5">Topic</th>
                                                        <th className="w-1/5">CEUs</th>
                                                        <th className="w-1/5">Take Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-16 mt-20">
                                            <div className="px-5 py-5">
                                                <h4 className="text-2xl">Upcoming Webinars</h4>
                                            </div>
                                            <div className="px-5 py-5">
                                                <form className="flex items-center">
                                                    <div className="relative w-full">
                                                        <input type="text" id="voice-search"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            required />
                                                    </div>
                                                    <button type="submit"
                                                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Search
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="overflow-auto h-96 w-11/12 mx-auto">
                                            <table className="table-auto">
                                                <thead>
                                                    <tr>
                                                        <th className="w-1/5 py-3 text-left">Date</th>
                                                        <th className="w-2/5">Topic</th>
                                                        <th className="w-1/5">CEUs</th>
                                                        <th className="w-1/5">Take Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-300">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                    <tr className="bg-slate-200">
                                                        <td className="w-1/5 py-3">12/9/2023</td>
                                                        <td className="w-2/5">Malcolm Lockyer Malcolm LockyerMalcolm Lock</td>
                                                        <td className="w-1/5 text-center">1.0</td>
                                                        <td className="w-1/5 text-center">Registor Now</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2 gap-4 mt-20">
                                            <div className="border border-gray-300">
                                                <h6 className="text-lg text-center text-lightsky py-4">System Requirements</h6>
                                            </div>
                                            <div className="border border-gray-300">
                                                <h6 className="text-lg text-center py-4 text-lightsky">System Requirements</h6>
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <div className="bg-blue-300 p-10 border border-gray-300 mt-10">
                                                <h6 className="text-lg">Webinars are for individual use only and may not be rebroadcast, shared, or
                                                    disseminated.
                                                    Each webinar subscription or purchase entitles the user to one online connection or one
                                                    back-up phone line. The use of more than one phone line and phone conferencing is
                                                    prohibited. Only individuals owning a webinar purchase, whether subscription or single
                                                    webinar purchase will be given CEUs for the broadcast and the quiz. Unauthorized persons
                                                    will not be given access. CEUs are one-time use only. Group webinar subscription spaces are
                                                    intended for a single user per space for the subscription term. A subscription space is not
                                                    meant to be shared with multiple users. The webinar administrator can remove a user’s
                                                    access, should a user leave employment, so another user can utilize the space for the
                                                    duration of the subscription term.</h6>
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
                                <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                    <div className="sm:basis-full basis-full mb-5">
                                        <div className="grid">
                                            <img src="../banner.jpg" w-100 alt="gh" />
                                            <h4 className="text-2xl">AAPC is pleased to announce a stellar 2023 conference lineup.</h4>
                                            <p className="mt-5"><span className="text-lg font-semibold text-gray-500">Hybrid Event</span> - Our hybrid event
                                                offers an enormous number of session topics covering a wide
                                                range of specialties, along with flexibility to choose between being onsite or virtual.</p>
                                            <p className="mt-3">HEALTHCON 2024 in Las Vegas, NV | April 14-17, 2024 | 18 CEUs | 80+ Sessions | 65+
                                                Speakers
                                                <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                            </p>
                                            <p className="mt-3"><span className="text-lg font-semibold text-gray-500">Virtual Events</span> - Our virtual
                                                events offer you a convenient way to stay current on
                                                specialty-specific topics.</p>
                                            <p className="mt-3"><span className="text-lg font-semibold text-gray-500">DOCUCON</span> - A Clinical
                                                Documentation Improvement Conference | September 19-20, 2023 | 12 CEUs | 2
                                                Tracks | 16 Sessions Total <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                            </p>
                                            <p className="mt-3"><span className="text-lg font-semibold text-gray-500">AUDITCON </span>- Two Days. All About
                                                Auditing. | November 8-9, 2023 | 12 CEUs | 3 Tracks | 23 Sessions
                                                Total
                                                <br /><span className="text-darksky text-lg font-semibold">Register Now!</span>
                                            </p>
                                            <p className="mt-3"><span className="text-lg font-semibold text-gray-500">Onsite Event </span>- While smaller
                                                than our HEALTHCON event, this in-person only event offers a wide
                                                variety of sessions covering a range of specialties along with the opportunity for attendees to
                                                meet other healthcare professionals in their region.</p>
                                            <p className="mt-3"> HEALTHCON Regional 2024 in Philadelphia, PA | August 26-28 | 15 CEUs | 40+ Sessions |
                                                30+
                                                Speakers
                                                Coming Soon!</p>
                                        </div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 bg-gray-200 p-7 mt-5">
                                            <div>
                                                <p>Learn more about your local AAPC chapter</p>
                                            </div>
                                            <div>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                                    LOCAL CHAPTERS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 6 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid sm:grid-cols-1 w-100">
                                            <h2 className='text-4xl mb-5'>Member Bill of Rights</h2>
                                            <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <p>The Legal Advisory Board serves in an advisory capacity to the national office of AAPC, the AAPC National Advisory Board, and the AAPC Chapter Association. Members occasionally author articles on compliance and legal issues associated with medical coding for Healthcare Business Monthly, and speak on legal issues at AAPC events.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
                                            <p>Prior to forming his own practice, Blanchard Manning LLP, in 2009, Mr. Blanchard practiced for 20 years with a leading international law firm. He handles health care regulatory and compliance issues, including coverage, billing, reimbursement, overpayment issues, fraud and abuse, and HIPAA privacy. He is a Fellow of the American Health Lawyers Association and a past chair of its Institute on Medicare and Medicaid Payment Issues. He has served on the AAPC's Legal Advisory Committee since its inception.</p>
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

export default Medicode;


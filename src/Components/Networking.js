import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Networking = () => {
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
                        <button className='w-full p-2 bg-blue-500 text-white'>Networking</button>
                        <button
                            className={`w-full p-2 ${activeSubTab === 5 ? 'bg-gray-300 text-orange-500' : 'bg-gray-300'}`}
                            onClick={() => handleSubTabClick(5)}
                        >
                            Overview
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-28" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Local Chapters
                        </button>
                        {activeMainTab === 1 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Find A Chapter
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Start A New Chapter
                                </button>
                                <button
                                    className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >
                                    List All Chapters
                                </button>
                            </div>
                        )}
                        <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Coding Discussion Forums
                        </Link>
                        <Link to="/Events" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Conferences
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <img src="../mber-px.webp" alt="hrof" />
                                    <h4 className="text-2xl text-green-900 font-bold">Find A Chapter</h4>
                                    <div className='#'>
                                        <div className='bg-gray-300 pl-5'>
                                            <p className='text-lg'>Select a country and region to find a chapter near you</p>
                                        </div>
                                        <div className="sm:w-full w-full justify-center mx-auto border border-black">
                                            <div className="grid place-items-center mt-5">
                                                <div className="flex md:flex-row sm:w-full w-full">
                                                    <div className="xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-full">
                                                        <h1 className='text-lg pl-12'>Select Your Country:</h1>
                                                    </div>
                                                    <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-6/12 w-full">
                                                        <div className='my-2 '>
                                                            <button onClick={toggleServices1} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 h-8 2xl:w-72 xl:w-56 lg:w-52 md:w-36 sm:w-36 w-36">
                                                                Miles From
                                                            </button>
                                                            {isOpen1 && (
                                                                <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                                    {/* Dropdown content goes here */}
                                                                    <div className="mx-auto">
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid place-items-center mt-5">
                                                <div className="flex md:flex-row sm:w-full w-full">
                                                    <div className="xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-full">
                                                        <h1 className='text-lg pl-12'>Select Your State:</h1>
                                                    </div>
                                                    <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-6/12 w-full">
                                                        <div className='my-2 '>
                                                            <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 h-8 2xl:w-72 xl:w-56 lg:w-52 md:w-36 sm:w-36 w-36">
                                                                Miles From
                                                            </button>
                                                            {isOpen2 && (
                                                                <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                                    {/* Dropdown content goes here */}
                                                                    <div className="mx-auto">
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
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-12 rounded mt-2">
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='my-2'>Local Chapter officer contact information is listed for the purposes of engaging with AAPC on a local level. Under no circumstances should this information be used for soliciting.</p>
                                            <p className='my-2'>Can't find a chapter near you or interested in starting a new chapter ?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
                                            <h4 className="text-2xl mb-2 font-semibold">
                                                Start a New Chapter
                                            </h4>
                                            <p className='text-lg font-semibold'>Criteria for Starting a New Local Chapter</p>
                                            <p className="text-lg text-justify">
                                                Starting a Chapter
                                                All new local chapters are put on a six-month probation. Chapter leadership will work directly with AAPC’s
                                                local chapter team at national office and with AAPCCA representatives from your region. The probationary period
                                                gives new chapters an opportunity to create a solid foundation and helps foster a successful local chapter.
                                                The purpose of local chapters is to support AAPC members and act as an extension of AAPC. To assist in this
                                                supporting role all local chapters are required to hold a minimum of six meetings per year where CEUs are
                                                offered and to proctor a minimum of four exams. AAPC local chapters are not to be used for personal promotion.
                                                AAPC members are not permitted to openly solicit their company or services in a local chapter arena.
                                            </p>
                                            <p className='text-lg font-semibold'>Criteria for Starting a New Local Chapter</p>
                                            <p className="text-lg text-justify">
                                                Starting a Chapter
                                                All new local chapters are put on a six-month probation. Chapter leadership will work directly with AAPC’s
                                                local chapter team at national office and with AAPCCA representatives from your region. The probationary period
                                                gives new chapters an opportunity to create a solid foundation and helps foster a successful local chapter.
                                                The purpose of local chapters is to support AAPC members and act as an extension of AAPC. To assist in this
                                                supporting role all local chapters are required to hold a minimum of six meetings per year where CEUs are
                                                offered and to proctor a minimum of four exams. AAPC local chapters are not to be used for personal promotion.
                                                AAPC members are not permitted to openly solicit their company or services in a local chapter arena.
                                            </p>
                                            <p className='text-lg font-semibold'>Criteria for Starting a New Local Chapter</p>
                                            <p className="text-lg text-justify">
                                                Starting a Chapter
                                                All new local chapters are put on a six-month probation. Chapter leadership will work directly with AAPC’s
                                                local chapter team at national office and with AAPCCA representatives from your region. The probationary period
                                                gives new chapters an opportunity to create a solid foundation and helps foster a successful local chapter.
                                                The purpose of local chapters is to support AAPC members and act as an extension of AAPC. To assist in this
                                                supporting role all local chapters are required to hold a minimum of six meetings per year where CEUs are
                                                offered and to proctor a minimum of four exams. AAPC local chapters are not to be used for personal promotion.
                                                AAPC members are not permitted to openly solicit their company or services in a local chapter arena.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="grid place-items-center mt-5">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-100">
                                            <h4 className="text-2xl mb-2 font-semibold">
                                                All Chapters
                                            </h4>
                                            <p className='text-lg'>Local Chapter officer contact information is listed for the purposes of
                                                engaging with AAPC on a local level. Under no circumstances should this information be used for soliciting.</p>

                                            <table class="table-auto">
                                                <thead>
                                                    <tr>
                                                        <th className='col-span-2'>City</th>
                                                        <th>Chapter Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='bg-gray-300'>
                                                        <td className='py-3'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                                        <td>Malcolm Lockyer</td>
                                                        <td>1961</td>
                                                    </tr>
                                                    <tr className='bg-gray-200'>
                                                        <td className='py-3'>Witchy Woman</td>
                                                        <td>The Eagles</td>
                                                        <td>1972</td>
                                                    </tr>
                                                    <tr className='bg-gray-100'>
                                                        <td className='py-3'>Shining Star</td>
                                                        <td>Earth, Wind, and Fire</td>
                                                        <td>1975</td>
                                                    </tr>
                                                    <tr className='bg-gray-300'>
                                                        <td className='py-3'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                                        <td>Malcolm Lockyer</td>
                                                        <td>1961</td>
                                                    </tr>
                                                    <tr className='bg-gray-200'>
                                                        <td className='py-3'>Witchy Woman</td>
                                                        <td>The Eagles</td>
                                                        <td>1972</td>
                                                    </tr>
                                                    <tr className='bg-gray-100'>
                                                        <td className='py-3'>Shining Star</td>
                                                        <td>Earth, Wind, and Fire</td>
                                                        <td>1975</td>
                                                    </tr>
                                                    <tr className='bg-gray-300'>
                                                        <td className='py-3'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                                        <td>Malcolm Lockyer</td>
                                                        <td>1961</td>
                                                    </tr>
                                                    <tr className='bg-gray-200'>
                                                        <td className='py-3'>Witchy Woman</td>
                                                        <td>The Eagles</td>
                                                        <td>1972</td>
                                                    </tr>
                                                    <tr className='bg-gray-100'>
                                                        <td className='py-3'>Shining Star</td>
                                                        <td>Earth, Wind, and Fire</td>
                                                        <td>1975</td>
                                                    </tr>
                                                    <tr className='bg-gray-300'>
                                                        <td className='py-3'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                                        <td>Malcolm Lockyer</td>
                                                        <td>1961</td>
                                                    </tr>
                                                    <tr className='bg-gray-200'>
                                                        <td className='py-3'>Witchy Woman</td>
                                                        <td>The Eagles</td>
                                                        <td>1972</td>
                                                    </tr>
                                                    <tr className='bg-gray-100'>
                                                        <td className='py-3'>Shining Star</td>
                                                        <td>Earth, Wind, and Fire</td>
                                                        <td>1975</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <img src="../mber-px.webp" alt="hrof" />
                                    <h4 className="text-2xl text-green-900 font-bold">Find A Chapter</h4>
                                    <div className='#'>
                                        <div className='bg-gray-300 pl-5'>
                                            <p className='text-lg'>Select a country and region to find a chapter near you</p>
                                        </div>
                                        <div className="sm:w-full w-full justify-center mx-auto border border-black">
                                            <div className="grid place-items-center mt-5">
                                                <div className="flex md:flex-row sm:w-full w-full">
                                                    <div className="xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-full">
                                                        <h1 className='text-lg pl-12'>Select Your Country:</h1>
                                                    </div>
                                                    <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-6/12 w-full">
                                                        <div className='my-2 '>
                                                            <button onClick={toggleServices1} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 h-8 2xl:w-72 xl:w-56 lg:w-52 md:w-36 sm:w-36 w-36">
                                                                Miles From
                                                            </button>
                                                            {isOpen1 && (
                                                                <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                                    {/* Dropdown content goes here */}
                                                                    <div className="mx-auto">
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid place-items-center mt-5">
                                                <div className="flex md:flex-row sm:w-full w-full">
                                                    <div className="xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-full">
                                                        <h1 className='text-lg pl-12'>Select Your State:</h1>
                                                    </div>
                                                    <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-6/12 w-full">
                                                        <div className='my-2 '>
                                                            <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 border border-gray-500 bg-white mt-1 mx-2 h-8 2xl:w-72 xl:w-56 lg:w-52 md:w-36 sm:w-36 w-36">
                                                                Miles From
                                                            </button>
                                                            {isOpen2 && (
                                                                <div className="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                                    {/* Dropdown content goes here */}
                                                                    <div className="mx-auto">
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
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-12 rounded mt-2">
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='my-2'>Local Chapter officer contact information is listed for the purposes of engaging with AAPC on a local level. Under no circumstances should this information be used for soliciting.</p>
                                            <p className='my-2'>Can't find a chapter near you or interested in starting a new chapter ?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 5 && <div>
                                <div className="grid place-items-center">
                                    <div className="sm:w-full w-full justify-center mx-auto">
                                        <div className='grid sm:grid-cols-1 w-100'>
                                            <div className="p-0">
                                                <h3 className='text-3xl text-green-900 font-semibold mb-5'>Medical Coding Networking</h3>
                                                <img src="../mber-px.webp" alt="hrof" className='my-5' />
                                                <p className='text-lg font-semibold p-5'>AAPC members are part of a growing organization, connecting regularly in over 500 local chapters, three annual conferences, and about 50 online member forums.</p>
                                                <p className='text-lg text-center'>AAPC members are part of a growing organization, connecting regularly in over 500 local chapters, three annual conferences, and about 50 online member forums.</p>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                                            <div className="bg-slate-200 p-5">
                                                <h4 className="text-2xl mb-5 text-center font-semibold">
                                                Local Chapters
                                                </h4>
                                                <p className="text-lg text-justify">
                                                    Exploring a career in medical coding and billing raises
                                                    questions, one being which certification should I choose?
                                                    Fortunately, identifying the certification that’s right for you
                                                    is easy once you see how they differ.
                                                </p>
                                                <button className="py-2 px-12 my-5 rounded-full bg-blue-500">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-md text-white"
                                                    >
                                                       FIND A CHAPTER{" "}
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="bg-slate-200 p-5">
                                                <h4 className="text-2xl mb-5 text-center font-semibold">Local Chapters</h4>
                                                <p className="text-lg text-justify">
                                                    Exploring a career in medical coding and billing raises
                                                    questions, one being which certification should I choose?
                                                    Fortunately, identifying the certification that’s right for you
                                                    is easy once you see how they differ.
                                                </p>
                                                <button className="py-2 px-12 my-5 rounded-full bg-blue-500">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-md text-white"
                                                    >
                                                       FIND A CHAPTER{" "}
                                                    </a>
                                                </button>
                                            </div>
                                            <div className="bg-slate-200 p-5">
                                                <h4 className="text-2xl mb-5 text-center font-semibold">Local Chapters</h4>
                                                <p className="text-lg text-justify">
                                                    Exploring a career in medical coding and billing raises
                                                    questions, one being which certification should I choose?
                                                    Fortunately, identifying the certification that’s right for you
                                                    is easy once you see how they differ.
                                                </p>
                                                <button className="py-2 px-12 my-5 rounded-full bg-blue-500">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full text-md text-white"
                                                    >
                                                       FIND A CHAPTER{" "}
                                                    </a>
                                                </button>
                                            </div>
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
export default Networking
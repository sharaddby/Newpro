import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Webinars() {
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
        <div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
                    <div className="2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full">
                        <div className="bg-slate-200 p-1 hover:shadow-2xl">
                            <div className="relative inline-block text-left bg-gray-300 w-full">
                                <p class="p-2 bg-teal-500 text-white text-xl">Medical Coding Certification</p>
                                <hr className="h-1 bg-white"/>
                                <button onClick={toggleServices1} className="text-gray-700 hover:text-gray-900 focus:outline-none h-12">
                                    Medical Coding Certification
                                </button>
                                {isOpen1 && (
                                    <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        {/* Dropdown content goes here */}
                                        <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 1
                                            </Link>
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 2
                                            </Link>
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 3
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <hr className="h-1 bg-white"/>
                            <div className="relative inline-block text-left bg-gray-300 w-full">
                                <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 focus:outline-none h-12">
                                     Medical Coding Certification
                                </button>
                                {isOpen2 && (
                                    <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div className="2xl:w-72 xl:w-72 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 1
                                            </Link>
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 2
                                            </Link>
                                            <Link
                                                href="ss"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                            >
                                                Item 3
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Overview
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Medical Billing Certification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Medical Auditing Certification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Healthcare Compliance Certification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Practice Manager Certification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Instructor Certification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                               Locate Exam
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                               Prepare for Exam
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Exam Tips
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                                Optimized Exams
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                               Credential Verification
                            </Link>
                            <hr className="h-1 bg-white"/>
                            <Link
                                href="ss"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                            >
                               FAQs
                            </Link>
                            <hr className="h-1 bg-white"/>
                         </div>
                    </div>
                    <div className="2xl:w-3/4 xl:w-3/4 lg:3/4 md:w-2/3 sm:w-full w-full">
                        <div className="bg-slate-200 p-1 hover:shadow-2xl">
                            <h3 className="text-3xl mb-5">
                                Find the right certification in medical coding in medical
                                coding.
                            </h3>
                            <p className="text-lg text-why">
                                Exploring a career in medical coding and billing raises
                                questions, one being which certification should I choose?
                                Fortunately, identifying the certification that’s right for you
                                is easy once you see how they differ.
                            </p>
                            <button className="px-12 py-3 rounded-full">
                                <a
                                    href="https://tailwindui.com/documentation"
                                    className="rounded-full text-xl text-teal-900"
                                >
                                    Get Started{" "}
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Webinars
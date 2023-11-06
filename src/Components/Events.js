import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Even = () => {
    const [subItemVisible, setSubItemVisible] = useState(false);

    const toggleSubItem = () => {
        setSubItemVisible(!subItemVisible);
       
    };
    

    return (
        <div className="grid place-items-center mt-5">
            <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
                <div className="flex flex-col space-x-2  2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full">
                    <div className="relative inline-block text-left">
                       <h4 className='text-2xl bg-tgreen px-4 py-2 rounded-lg text-white'>Resources</h4>
                        <Link to="/Resources" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Overview
                        </Link>
                         <button className="block px-4 py-2 text-md text-gray-700 text-left w-full"
                            onClick={toggleSubItem} >Hot Topics
                        </button>
                        <div
                            className={`block px-4 py-2 text-md ${subItemVisible ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md bg-white text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ?  'block' : 'hidden'  
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Medical Coding
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 text-blue-950 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">What is Medical Coding?</Link>
                                        <Link to="/Ans" className="block py-2 text-md">What Does a Medical Coder Do?</Link>
                                        <Link to="/Resources" className="block py-2 text-md">Can medical coders work from home?</Link>
                                        <Link to="/Resources" className="block py-2 text-md">How to become a Medical Coder?</Link>
                                        <Link to="/Resources" className="block py-2 text-md">A Day in the Life of a Medical Coder</Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 bg-white hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Medical Billing
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">What is Medical Billing</Link>
                                        <Link to="/Ans" className="block py-2 text-md">How to Become a Medical Biller</Link>
                                    </ul>

                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                  Medical Auditing
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">What is Medical Billing</Link>
                                        <Link to="/Ans" className="block py-2 text-md">How to Become a Medical Biller</Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    MACRA
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">What is MACRA?</Link>
                                        <Link to="/Ans" className="block py-2 text-md">MIPS</Link>
                                        <Link to="/Ans" className="block py-2 text-md">APMs</Link>
                                        <Link to="/Ans" className="block py-2 text-md">FAQs</Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Risk Adjustment
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">What is Risk Adjustment?</Link>
                                        <Link to="/Ans" className="block py-2 text-md">Documentation/Coding</Link>
                                        <Link to="/Ans" className="block py-2 text-md">Risk Adjustment Search Tool</Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Practice Management
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">RVUs</Link>
                                        <Link to="/Ans" className="block py-2 text-md">RVU Calculator</Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    ICD-10
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block py-2 text-md">ICD-10 Codes</Link>
                                    </ul>
                                </li>
                            </ul>
                            <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                ICD-11
                            </Link>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Evaluation Management
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            What Are E/M Codes?
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            E/M Coding Outpatient Services
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            E/M Changes 2021
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            E/M Calculator
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            E/M Training Online
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Compliance
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            What is Healthcare Compliance
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Coronavirus (COVID-19)
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                            <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                Coronavirus (COVID-19)
                            </Link>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Compliance
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            What is Healthcare Compliance
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Coronavirus (COVID-19)
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="py-1">
                                <li
                                    className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                        }`}
                                    onClick={toggleSubItem}
                                >
                                    Modifiers
                                    <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                             What Are Medical Coding Modifiers?
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            CPT® Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            HCPCS Level II Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Pricing/Information Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            NCCI Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Modifier 25
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Modifiers 59/X EPSU
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            Global Package Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                            MPFS Modifiers
                                        </Link>
                                        <Link to="/Ans" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                                             Modifier FAQs
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                Telemedicine, Telehealth
                            </Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                Outpatient Facility
                            </Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                Clinical Documentation Improvement (CDI)
                            </Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                Nonphysician Practitioner (NPP)
                            </Link>
                        </div>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            News/Articles
                        </Link>
                        <ul className="py-1 px-4 ">
                            <li
                                className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                    }`}
                                onClick={toggleSubItem}
                            >
                                Events
                                <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                    <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                         Regional Conferences
                                    </Link>
                                    <Link to="/Event" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                         Event
                                    </Link>
                                    <Link to="/Medicode" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                        Virtual Workshops
                                    </Link>
                                    <Link to="/Event" className="block py-2 text-md text-gray-700 hover:bg-gray-300">
                                        Webinars
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                        <ul className="py-1 px-4 ">
                            <li
                                className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                    }`}
                                onClick={toggleSubItem}
                            >
                                AAPC Publications
                                <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                    <li className="block py-2 text-md text-gray-700">Healthcare Business Monthly</li>
                                    <li className="block py-2 text-md text-gray-700">Healthcare Business e-News</li>
                                    <li className="block py-2 text-md text-gray-700">ICD-10 Tips and Resources</li>
                                    <li className="block py-2 text-md text-gray-700">Thought Leadership Team</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="py-1 px-4 ">
                            <li
                                className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                    }`}
                                onClick={toggleSubItem}
                            >
                                Coding Help
                                <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                    <li className="block py-2 text-md text-gray-700">Coding Forums</li>
                                    <li className="block py-2 text-md text-gray-700">What is Medical Coding?</li>
                                    <li className="block py-2 text-md text-gray-700">What is Medical Reimbursement?</li>
                                    <li className="block py-2 text-md text-gray-700">What is Medical Billing?</li>
                                    <li className="block py-2 text-md text-gray-700">What is Medical Auditing?</li>
                                    <li className="block py-2 text-md text-gray-700">Code Sets</li>
                                    <li className="block py-2 text-md text-gray-700">Medical Terminology Glossary</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="py-1 px-4 ">
                            <li
                                className={`block py-2 text-md text-gray-700 hover:bg-gray-100 relative group ${subItemVisible ? 'border-b border-gray-200' : ''
                                    }`}
                                onClick={toggleSubItem}
                            >
                                Research
                                <ul className="hidden absolute left-0 top-0 mt-10 space-y-1 w-56 bg-white group-hover:block z-50">
                                    <li className="block py-2 text-md text-gray-700">Medical Coding Salary</li>
                                    <li className="block py-2 text-md text-gray-700">Salary Survey Calculator</li>
                                    <li className="block py-2 text-md text-gray-700">Work of a Coder</li>
                                </ul>
                            </li>
                        </ul>
                        <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Medical Coding Resources
                        </Link>
                        <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Member Benefits
                        </Link>
                        <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Member Professional Development Library
                        </Link>
                        <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Savings Center
                        </Link>
                        <Link to="ss" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            Free Tools
                        </Link>
                    </div>
                </div>
                <div className="2xl:w-3/4 xl:w-3/4 lg:3/4 md:w-2/3 sm:w-full w-full">
                    <div className="grid">
                        <h4 className="text-2xl mt-5 mb-5">Earn. Learn. Engage.</h4>
                    </div>
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
                        <div>
                            <img src="../hcon.png" alt="gh" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-24">
                                UPCOMING WEBINAR
                            </button>
                        </div>
                        <div className="place-content-around">
                            <img src="../hcon1.png" alt="gh" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2  ml-24">
                                UPCOMING WEBINAR
                            </button>
                        </div>
                    </div>
                    <div className="grid">
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
                </div>
            </div>
        </div>
    );
};

export default Even;


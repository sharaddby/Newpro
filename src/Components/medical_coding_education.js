import { React, useState } from 'react';
import Tab from './Tab';
import { Link } from 'react-router-dom';
function Medical_coding_education() {
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
const tabs = [
    {
        label: 'Search for CEUs',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                    <img src="../2023_july_2024_promos_dl-930x150-px.webp" alt="hrof" />
                    <h4 class="text-2xl text-green-900 font-bold">Continuing Education Units (CEUs)</h4>
                    <p>Health care professionals are obligated to stay current in their profession. This includes
                        continuing education in their respective discipline as well as keeping up with the latest
                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                        members to maintain a distinctive edge in their health care career by providing a wide
                        variety of topics and subject matter delivered live or on demand, in classrooms or over the
                        web.</p>
                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                        our CEU <span class="text-green-900">Information page.</span></p>
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
        </div>
    },
    {
        label: 'Overview',
        content: <div>Content for Tab</div>
    },
    {
        label: 'Overview',
        content: <div>Content for Tab 4</div>,
    },
    {
        label: 'On Demand Events',
        content: <div>Content for Tab 5</div>,
    },
    {
        label: 'Local Chapter Events',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'Low Cost CEUs',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'Approved CEU Vendors',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'FAQs',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'CEU Information - Members',
        content: <div>Content for Tab 6</div>,
    },
    {
        label: 'CEU Information - Vendors',
        content: <div>Content for Tab 6</div>,
    },
];

   return (
        <div className="App">
            <Tab tabs={tabs} />
        </div>
    );
}

export default Medical_coding_education;
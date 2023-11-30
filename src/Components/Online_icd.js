import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quick from './Quick';
const Online_icd = () => {
    const [subItemVisible, setSubItemVisible] = useState(false);
  const toggleSubItem = () => {
        setSubItemVisible(!subItemVisible);

    };
   return (
    <div>
        <div className="grid place-items-center mt-5">
            <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center gap-8">
                <div className="flex flex-col space-x-2  2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full">
                    <div className="relative inline-block text-left bg-gray-200">
                        <button className="block px-4 py-2 text-md text-gray-700 text-left w-full"
                            onClick={toggleSubItem} >What is ICD-10?
                        </button>
                        <div
                            className={`block px-4 py-2 text-md hover:bg-gray-100 ${subItemVisible ? 'block' : 'hidden'
                                }`}
                        >
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">The Origins of ICD-10 Coding</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">ICD-10 Provides Greater Specificity</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Structure of ICD-10 Codes</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Navigating ICD-10 Codes</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Using the ICD-10 Tabular List</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">The 7th Character in ICD-10 Coding</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">ICD-10-PCS Basics</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">ICD-10-PCS System Organization</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Structure of PCSCodes</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">The Significance of Character Position in PCS Codes</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Using PCS Tables</Link>
                            <Link to="/Ans" className="block py-2 text-md text-gray-700 hover:text-red-500">Build-A-PCS Code</Link>
                        </div>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-10 Documentation Example
                        </Link>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-10 FAQs
                        </Link>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-9 to ICD-10 Code Convertor
                        </Link>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-10 Conversion and Mapping
                        </Link>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-10-CM Training
                        </Link>
                        <Link to="Blog" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-300">
                            ICD-10-PCS Training
                        </Link>
                    </div>
                </div>
                <div className="2xl:w-3/4 xl:w-3/4 lg:3/4 md:w-2/3 sm:w-full w-full">
                    <div className="grid">
                        <h3 className="text-3xl text-footsky mt-5 mb-5">Advanced ICD-10-PCS Code Set Training.</h3>
                    </div>
                    <div className="grid">
                        <h4 className="text-2xl">AAPC is pleased to announce a stellar 2023 conference lineup.</h4>
                        <p className="mt-5">This course goes in-depth with advanced ICD-10-PCS coding. If you have already taken ICD-10-PCS coding and want to increase productivity and skill levels this course will get you there
                        </p>
                        <p className='text-md'>Online curriculum will include:</p>
                        <ul className='list-disc pl-10' >
                            <li>8 CEUs (8 hours at your own pace):</li>
                            <li>Downloadable manual</li>
                            <li>Interactive learning</li>
                            <li>Solutions to tough coding cases</li>
                            <li>Hands-on exercises with real-world coding cases</li>
                        </ul>
                    </div>
                    <hr className='h-1 bg-black my-3' />
                    <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox text-indigo-600" />
                        <label className="ml-2 text-gray-700"> Not an AAPC Member? Add AAPC Membership for $205 to get member prices.
                        </label>
                    </div>
                    <hr className='h-1 bg-black my-3' />
                    <p className='text-lg'>Required Books:</p>
                    <div className="flex items-center">
                        <input type="checkbox" className="form-checkbox text-indigo-600" />
                        <label className="ml-2 text-gray-700"> Not an AAPC Member? Add AAPC Membership for $205 to get member prices.
                        </label>
                    </div>
                    <div className='my-5'>
                        <Link to="cart" className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded ml-2 w-56">Learn More</Link>
                    </div>
                    <div className="grid place-items-center mt-10">
                        <div className="sm:w-full w-full justify-center mx-auto ">
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                                <div className="bg-slate-200 p-5">
                                    <p className="text-lg">For group purchases or to inquire about in-person training, please call 844-825-1679 or have us call you.</p>
                                </div>
                                <div className="bg-slate-200 p-5">
                                    <p className="text-lg">For individual purchases, questions, or technical issues, please call 800-626-2633 or have us call you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Quick/>
        </div>
             
       
    );
};

export default Online_icd;

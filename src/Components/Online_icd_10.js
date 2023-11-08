import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quick from './Quick';
const Even = () => {
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
                            <h3 className="text-3xl text-footsky mt-5 mb-5">ICD-10 Documentation Example</h3>
                        </div>
                        <div className="grid">
                            <h5 className="text-xl mb-5">The following case highlights the high level of specificity required to code for ICD-10-CM:</h5>
                            <div className='bg-gray-200 px-10 py-5'>
                                <p className="mt-5">
                                    <b>S</b>:Mrs. Finley presents today <span className='bg-pink-200'>after having a new cabinet fall on her last week, suffering a concussion, </span>
                                    as well as some cervicalgia.<span className='bg-green-800'> She was cooking dinner at the home she shares with her husband. She did not seek treatment at that time. </span>
                                    She states that the people that <span className='bg-yellow-200'>put in the cabinet in her kitchen</span> missed the stud by about two inches. Her husband, who was home with
                                    <span className='bg-gray-300'>her at the time told her she was </span>"out cold" for about two minutes. The patient continues <span className='bg-red-300'>to have cephalgias
                                        since it happened, </span>primarily occipital, extending up into the bilateral occipital and parietal regions. The headaches come on suddenly, last for long periods of time, and
                                    occur every day. They are not relieved by Advil. She denies any vision changes, any taste changes, any smell changes. The patient has a marked amount of tenderness across the superior trapezius.</p>
                                <p><b>O</b>:Her weight is 188 which is up 5 pounds from last time, blood pressure 144/82, pulse rate 70, respirations are 18. She has full strength in her upper extremities. DTRs in the
                                    biceps and triceps are adequate. Grip strength is adequate. Heart rate is regular and lungs are clear.</p>
                                <p><b>A</b>:1. Status post concussion with acute persistent headaches</p>
                                <p> 2. Cervicalgia</p>
                                <p> 3. Cervical somatic dysfunction</p>
                                <p><b>P</b>:The plan at this time is to send her for physical therapy, three times a week for four weeks for cervical soft tissue muscle massage, as well as upper dorsal. We’ll recheck her in one month, sooner if needed.</p>
                                <p className='text-md'>Online curriculum will include:</p>
                            </div>
                            <div className='py-2 bg-gray-300'>
                                <h6 className='text-lg text-center font-semibold'>ICD-10-CM Coding</h6>
                            </div>
                            <table className="border-collapse border border-slate-400">
                                 <tbody>
                                    <tr>
                                        <td className="border border-slate-300 sm:w-2/12 text-center">S06.0X1A</td>
                                        <td className="border border-slate-300 sm:w-10/12">Concussion with loss of consciousness of 30 minutes or less, initial encounter</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">G44.311</td>
                                        <td className="border border-slate-300">Acute post traumatic headache, intractable</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">M54.2</td>
                                        <td className="border border-slate-300">Cervicalgia</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">M99.01</td>
                                        <td className="border border-slate-300">Segmental and somatic dysfunction of cervical region</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">W20.8XXA</td>
                                        <td className="border border-slate-300">Other cause of strike by thrown, projected or falling object, initial encounter</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">Y93.G3</td>
                                        <td className="border border-slate-300">Activity, cooking and baking</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-center">Y92.010</td>
                                        <td className="border border-slate-300">Kitchen of single-family (private) house as the place of occurrence of the external cause</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='py-2 bg-gray-300'>
                                <p className='text-lg'><b className='px-5'>Note:</b>Requirements for reporting external cause codes may vary by state, payer, and organization. Be sure to follow the
                                 rules that apply to your claim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Quick />
        </div>


    );
};

export default Even;


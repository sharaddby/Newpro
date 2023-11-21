import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CPC = () => {
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);

    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);
    };
  return (
        <div className='grid place-items-center mt-5'>
            <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center'>
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                    <div className="space-y-1 bg-gray-200">
                        <button className='w-full p-2 bg-blue-500 text-white'>Certified Professional Coder</button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            CPC certification overview
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Prepare for the exam
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <Link to="/Prerequisites" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Essentials
                                </Link>
                                <Link to="/IdentifyAreas" className="block my-1 px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    CPC Preparation Course
                                </Link>
                                <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                     Practice exams
                                </Link>
                                <Link to="/#" className="block px-4 py-2 my-1 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                Areas of weakness
                                </Link>
                                <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                CPC study guide
                                </Link>
                                <Link to="/#" className="block px-4 py-2 my-1 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                CPC exam review
                                </Link>
                            </div>
                        )}
                      
                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        >
                            Taking the Exam
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 4 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(4)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            After the certification
                        </button>
                        {activeMainTab === 4 && (
                            <div className="flex flex-col mt-2">
                                <Link to="/Prerequisites" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Complete your apprenticeship
                                </Link>
                                <Link to="/IdentifyAreas" className="block px-4 my-1 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Network with AAPC members
                                </Link>
                                <Link to="/#" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                     Maintain your certification
                                </Link>
                                <Link to="/#" className="block px-4 py-2 text-md my-1 hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Find your dream job
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <h2 className='text-4xl'>Certified Professional Coder (CPC)® certification</h2>
                        <div className="grid place-items-center mt-10">
                            <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                                    <div className="bg-slate-200 p-5">
                                        <p className='text-center'>Training</p>
                                        <h1 className="text-3xl mb-5 text-center">Need exam prep training?</h1>
                                        <ul className='px-5'>
                                            <li className='list-disc'>Self-paced and virtual instructor-led course options</li>
                                            <li className='list-disc'>Everything you need to prepare and take the CPC exam.</li>
                                        </ul>
                                        <p className='text-center font-bold'>STARTING AT $2,999</p>
                                        <div className='mt-5'>
                                            <Link to="./Package" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-32 mt-36 rounded">
                                                ENROLL NOW
                                            </Link>
                                        </div>
                                       
                                    </div>
                                    <div className="bg-slate-200 p-5">
                                        <p className='text-center'>EXAM</p>
                                        <h1 className="text-3xl mb-5 text-center">Need exam prep training?</h1>
                                        <ul className='px-5'>
                                            <li className='list-disc'>Self-paced and virtual instructor-led course options</li>
                                            <li className='list-disc'>Everything you need to prepare and take the CPC exam.</li>
                                        </ul>
                                        <p className='text-center font-bold'>STARTING AT $2,999</p>
                                        <div className='mt-5'>
                                            <Link to="./Package" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-32 mt-36 rounded">
                                                ENROLL NOW
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid place-items-center mt-10">
                            <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                                <p className='text-justify'>The Certified Professional Coder (CPC) is the gold standard for medical coding in a physician office setting.
                                    The CPC certification exam tests the competencies required to perform the job of a professional coder who
                                    specializes in coding for services performed by physicians and non-physician providers (eg, nurse practitioners
                                    and physician assistants). Individuals who earn the CPC credential have proven expertise in physician/non-physician
                                    provider documentation review, abstract professional provider encounters, coding proficiency with CPT®, HCPCS Level
                                    II, ICD-10-CM, and compliance and regulatory requirements for physician services.</p>
                            </div>
                        </div>
                        <h4 className='text-xl font-semibold'>CPC Exam Preparation Course</h4>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="hundred-points"
                                className="svg-inline--fa fa-hundred-points w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M171.2 99.64C175.3 61.17 207.8 32 246.5 32C291.5 32 326.5 71.02 321.7 115.8L308.8 236.4C304.7 274.8 272.2 304 233.5 304C188.5 304 153.5 264.1 158.3 220.2L171.2 99.64zM246.5 80C232.3 80 220.4 90.68 218.9 104.8L205.1 225.3C204.2 241.7 217.1 256 233.5 256C247.7 256 259.6 245.3 261.1 231.2L274 110.7C275.8 94.28 262.9 80 246.5 80V80zM118.4 36.59C125.3 41.65 128.9 50.04 127.8 58.59L95.82 314.6C94.17 327.8 82.18 337.3 69.02 335.9C55.87 334.4 46.54 322.6 48.19 309.4L74.99 94.99L41.45 109.9C29.26 115.3 15.15 109.9 9.938 97.81C4.721 85.71 10.37 71.52 22.56 66.1L94.56 34.1C102.5 30.59 111.6 31.54 118.4 36.59V36.59zM507.2 114.1L499.9 202.5C496.6 241.8 463.8 272 424.3 272C379.1 272 345.1 234.1 348.8 189.9L356.1 101.5C359.4 62.23 392.3 32 431.7 32C476 32 510.9 69.91 507.2 114.1V114.1zM396.6 193.9C395.2 210.1 408 224 424.3 224C438.8 224 450.8 212.9 452 198.5L459.4 110.1C460.8 93.91 447.1 79.1 431.7 79.1C417.2 79.1 405.2 91.09 403.1 105.5L396.6 193.9zM511.7 323.9C513.9 336.1 505.1 349.4 492.1 351.7L28.08 431.7C15.02 433.9 2.605 425.1 .353 412.1C-1.899 399 6.864 386.6 19.93 384.3L483.9 304.3C496.1 302.1 509.4 310.9 511.7 323.9H511.7zM219.9 479.7C206.9 481.9 194.5 473 192.3 459.9C190.2 446.9 198.1 434.5 212.1 432.3L452.1 392.3C465.1 390.1 477.5 398.1 479.7 412.1C481.9 425.1 473 437.5 459.9 439.7L219.9 479.7z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Exam format</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>100 multiple-choice questions</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="rocket"
                                className="svg-inline--fa fa-rocket w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M368.3 265c-44.5 30.1-129.3 68.2-175.7 88l-35-35c20.4-46.1 59.2-130 89.3-174.4C309.1 52 398.4 41.9 461.7 50.3c8.5 63.3-1.7 152.6-93.3 214.7zM118.5 288c-3.6 8-6.8 15.2-9.4 21.2c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8l0 96.2c0 8.6 4.6 16.6 12.1 20.9s16.7 4.2 24.1-.2l88.5-52.5c21.9-13 35.3-36.5 35.3-61.9V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-82.1 0c-25.4 0-49 13.4-61.9 35.3L3.4 251.8c-4.4 7.4-4.5 16.6-.2 24.1S15.4 288 24 288h94.5zM408 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z">
                                </path>
                            </svg>
                            </div>
                            <div>
                                <p className="font-bold">Online or in-person options</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>AAPC offers online and in-person proctored exams. Choose to take the exam at home in a quiet,
                                        private location or through your local chapter or a licensed instructor. <Link
                                            to="https://www.aapc.com/certification/online-exam-requirements.aspx" target="_self" rel=""
                                            className="text-lightsky underline hover:no-underline">Learn more</Link> about the online proctored
                                        exam and how to prepare for the current exam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock"
                                className="svg-inline--fa fa-clock w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Time allowed</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>In-person and online exams are administered in one sitting, with four hours to complete the
                                        exam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="camera-web" className="svg-inline--fa fa-camera-web w-6 text-2xl sm:text-3xl sm:w-10"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M216 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L96.7 464H335.3l-37.1-48.2C272.9 426.2 245.1 432 216 432zM432 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4H48c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C36 353.2 0 288.8 0 216C0 96.7 96.7 0 216 0S432 96.7 432 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM96 216a120 120 0 1 1 240 0A120 120 0 1 1 96 216z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Equipment required for online exam</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>A reliable internet connection and an external webcam that can be positioned to show your face,
                                        hands, keyboard, and the area around the keyboard (about 10 inches) are required.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="user-graduate" className="svg-inline--fa fa-user-graduate w-6 text-2xl sm:text-3xl sm:w-10"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M228.7 .5c-3.1-.6-6.3-.6-9.4 0l-200 40C8.1 42.7 0 52.6 0 64C0 74.3 6.5 83.3 16 86.6v71.8L.3 236.9c-.9 4.7 .3 9.6 3.3 13.3s7.6 5.9 12.4 5.9H48c4.8 0 9.3-2.1 12.4-5.9s4.3-8.6 3.3-13.3L48 158.4V93.3l171.3 34.3c3.1 .6 6.3 .6 9.4 0l200-40C439.9 85.3 448 75.4 448 64s-8.1-21.3-19.3-23.5l-200-40zM49.3 464c5.8-37.6 30-69.2 63.3-85.1l63.6 71.5c5 5.6 10.7 10.1 16.9 13.6H49.3zm349.4 0H254.9c6.2-3.4 11.9-7.9 16.9-13.6l63.6-71.5c33.3 15.8 57.5 47.4 63.3 85.1zM109.6 328.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7H417.3c17 0 30.7-13.8 30.7-30.7c0-71-45.9-131.3-109.6-152.8c-10.9-3.7-22.7 .4-30.3 9L236 418.5c-6.4 7.2-17.6 7.2-23.9 0l-72.1-81.1c-7.6-8.6-19.4-12.7-30.3-9zM96 160c0 70.7 57.3 128 128 128s128-57.3 128-128V135.5l-48 9.6V160c0 44.2-35.8 80-80 80s-80-35.8-80-80V145.1l-48-9.6V160z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Experience requirements</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>A high-level knowledge of medical terminology, anatomy, and pathophysiology, along with
                                        understanding of the proper application of CPT<span className="inline"><sup>®</sup></span>
                                        procedure codes, HCPCS Level II procedure and supply codes, and ICD-10-CM diagnosis codes. </p>
                                    <p>If you don’t have medical experience or working knowledge of these subjects, we offer
                                        prerequisite courses to prepare you for the CPC certification training course. <Link
                                            to="dsss" target="_self"
                                            rel="" className="text-lightsky underline hover:no-underline"><u>Learn more</u></Link>.</p>
                                    <p>If you are already up to speed on medical terminology, pathophysiology, and anatomy, you can
                                        start right into our <Link
                                            to="dsds"
                                            target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>CPC certification
                                                training course</u></Link>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="book-medical" className="svg-inline--fa fa-book-medical w-6 text-2xl sm:text-3xl sm:w-10"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M0 88C0 39.4 39.4 0 88 0H392c30.9 0 56 25.1 56 56V344c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8H0V88zM48 432c0 17.7 14.3 32 32 32H368V400H80c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7H392c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88C65.9 48 48 65.9 48 88V358.7zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Approved code books</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <ul>
                                        <li>
                                            <p><Link to="dd" target="_self"
                                                rel="" className="text-lightsky underline hover:no-underline"><u>AMA's CPT<span
                                                    className="inline"><sup>®</sup></span> Professional Edition</u></Link> (current year)</p>
                                        </li>
                                        <li>
                                            <p><Link
                                                to="fddffd"
                                                target="_self" rel=""
                                                className="text-lightsky underline hover:no-underline"><u>ICD-10-CM</u></Link> (current year),
                                                any publisher</p>
                                        </li>
                                        <li>
                                            <p><Link
                                                to="fd"
                                                target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>HCPCS Level
                                                    II</u></Link> (current year), any publisher</p>
                                        </li>
                                    </ul>
                                    <p>Note: Code sets are updated annually, so it’s essential to use the current calendar year's code
                                        books when taking the CPB certification exam.</p>
                                    <p>Any officially published updates (errata) for the above code books may also be used.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="diamond-exclamation"
                                className="svg-inline--fa fa-diamond-exclamation w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M51.3 256L256 51.3 460.7 256 256 460.7 51.3 256zm233-244.3c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216zM256 128c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Maintaining your certification</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>To maintain your credential, you must maintain your AAPC annual membership, and earn 36
                                        continuing education units (CEUs) every two years.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex leading-5 text-gray-700">
                            <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                data-icon="credit-card" className="svg-inline--fa fa-credit-card w-6 text-2xl sm:text-3xl sm:w-10"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                                </path>
                            </svg></div>
                            <div>
                                <p className="font-bold">Pricing</p>
                                <div
                                    className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                    <p>One attempt for $399 or $499 for two attempts. Of note:</p>
                                    <ul>
                                        <li>
                                            <p>80% of AAPC students pass on the first attempt.</p>
                                        </li>
                                        <li>
                                            <p>Students who train with AAPC are three times more likely to pass the certification exam.
                                            </p>
                                        </li>
                                    </ul>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="grid place-items-center mt-10">
                            <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto ">
                                <h3 className='text-3xl font-semibold mb-3'>Competencies proven with CPC credential include</h3>
                                <ul className='text-md list-disc pl-10 mb-10'>
                                    <li>The Certified Professional Coder (CPC) is the gold standard for medical coding</li>
                                    <li>in a physician office setting.The CPC certification exam </li>
                                    <li>tests the competencies required to perform the job of a professional coder who </li>
                                    <li>specializes in coding for services performed by physicians and non-physician providers</li>
                                    <li>eg, nurse practitioners and physician assistants. Individuals who earn the CPC credential have </li>
                                    <li>proven expertise in physician/non-physician provider documentation review, abstract</li>
                                    <li> professional provider encounters, coding proficiency with CPT®, HCPCS Level</li>
                                    <li>II, ICD-10-CM, and compliance and regulatory requirements for physician services.</li>
                                </ul>
                            </div>
                        </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h2 className='text-4xl font-semibold'>CPC Exam Preparation Course</h2>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="hundred-points"
                                            className="svg-inline--fa fa-hundred-points w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M171.2 99.64C175.3 61.17 207.8 32 246.5 32C291.5 32 326.5 71.02 321.7 115.8L308.8 236.4C304.7 274.8 272.2 304 233.5 304C188.5 304 153.5 264.1 158.3 220.2L171.2 99.64zM246.5 80C232.3 80 220.4 90.68 218.9 104.8L205.1 225.3C204.2 241.7 217.1 256 233.5 256C247.7 256 259.6 245.3 261.1 231.2L274 110.7C275.8 94.28 262.9 80 246.5 80V80zM118.4 36.59C125.3 41.65 128.9 50.04 127.8 58.59L95.82 314.6C94.17 327.8 82.18 337.3 69.02 335.9C55.87 334.4 46.54 322.6 48.19 309.4L74.99 94.99L41.45 109.9C29.26 115.3 15.15 109.9 9.938 97.81C4.721 85.71 10.37 71.52 22.56 66.1L94.56 34.1C102.5 30.59 111.6 31.54 118.4 36.59V36.59zM507.2 114.1L499.9 202.5C496.6 241.8 463.8 272 424.3 272C379.1 272 345.1 234.1 348.8 189.9L356.1 101.5C359.4 62.23 392.3 32 431.7 32C476 32 510.9 69.91 507.2 114.1V114.1zM396.6 193.9C395.2 210.1 408 224 424.3 224C438.8 224 450.8 212.9 452 198.5L459.4 110.1C460.8 93.91 447.1 79.1 431.7 79.1C417.2 79.1 405.2 91.09 403.1 105.5L396.6 193.9zM511.7 323.9C513.9 336.1 505.1 349.4 492.1 351.7L28.08 431.7C15.02 433.9 2.605 425.1 .353 412.1C-1.899 399 6.864 386.6 19.93 384.3L483.9 304.3C496.1 302.1 509.4 310.9 511.7 323.9H511.7zM219.9 479.7C206.9 481.9 194.5 473 192.3 459.9C190.2 446.9 198.1 434.5 212.1 432.3L452.1 392.3C465.1 390.1 477.5 398.1 479.7 412.1C481.9 425.1 473 437.5 459.9 439.7L219.9 479.7z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Exam format</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>100 multiple-choice questions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="rocket"
                                            className="svg-inline--fa fa-rocket w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M368.3 265c-44.5 30.1-129.3 68.2-175.7 88l-35-35c20.4-46.1 59.2-130 89.3-174.4C309.1 52 398.4 41.9 461.7 50.3c8.5 63.3-1.7 152.6-93.3 214.7zM118.5 288c-3.6 8-6.8 15.2-9.4 21.2c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8l0 96.2c0 8.6 4.6 16.6 12.1 20.9s16.7 4.2 24.1-.2l88.5-52.5c21.9-13 35.3-36.5 35.3-61.9V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-82.1 0c-25.4 0-49 13.4-61.9 35.3L3.4 251.8c-4.4 7.4-4.5 16.6-.2 24.1S15.4 288 24 288h94.5zM408 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z">
                                            </path>
                                        </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold">Online or in-person options</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>AAPC offers online and in-person proctored exams. Choose to take the exam at home in a quiet,
                                                    private location or through your local chapter or a licensed instructor. <Link
                                                        to="https://www.aapc.com/certification/online-exam-requirements.aspx" target="_self" rel=""
                                                        className="text-lightsky underline hover:no-underline">Learn more</Link> about the online proctored
                                                    exam and how to prepare for the current exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock"
                                            className="svg-inline--fa fa-clock w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Time allowed</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>In-person and online exams are administered in one sitting, with four hours to complete the
                                                    exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="camera-web" className="svg-inline--fa fa-camera-web w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M216 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L96.7 464H335.3l-37.1-48.2C272.9 426.2 245.1 432 216 432zM432 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4H48c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C36 353.2 0 288.8 0 216C0 96.7 96.7 0 216 0S432 96.7 432 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM96 216a120 120 0 1 1 240 0A120 120 0 1 1 96 216z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Equipment required for online exam</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A reliable internet connection and an external webcam that can be positioned to show your face,
                                                    hands, keyboard, and the area around the keyboard (about 10 inches) are required.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="user-graduate" className="svg-inline--fa fa-user-graduate w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M228.7 .5c-3.1-.6-6.3-.6-9.4 0l-200 40C8.1 42.7 0 52.6 0 64C0 74.3 6.5 83.3 16 86.6v71.8L.3 236.9c-.9 4.7 .3 9.6 3.3 13.3s7.6 5.9 12.4 5.9H48c4.8 0 9.3-2.1 12.4-5.9s4.3-8.6 3.3-13.3L48 158.4V93.3l171.3 34.3c3.1 .6 6.3 .6 9.4 0l200-40C439.9 85.3 448 75.4 448 64s-8.1-21.3-19.3-23.5l-200-40zM49.3 464c5.8-37.6 30-69.2 63.3-85.1l63.6 71.5c5 5.6 10.7 10.1 16.9 13.6H49.3zm349.4 0H254.9c6.2-3.4 11.9-7.9 16.9-13.6l63.6-71.5c33.3 15.8 57.5 47.4 63.3 85.1zM109.6 328.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7H417.3c17 0 30.7-13.8 30.7-30.7c0-71-45.9-131.3-109.6-152.8c-10.9-3.7-22.7 .4-30.3 9L236 418.5c-6.4 7.2-17.6 7.2-23.9 0l-72.1-81.1c-7.6-8.6-19.4-12.7-30.3-9zM96 160c0 70.7 57.3 128 128 128s128-57.3 128-128V135.5l-48 9.6V160c0 44.2-35.8 80-80 80s-80-35.8-80-80V145.1l-48-9.6V160z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Experience requirements</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A high-level knowledge of medical terminology, anatomy, and pathophysiology, along with
                                                    understanding of the proper application of CPT<span className="inline"><sup>®</sup></span>
                                                    procedure codes, HCPCS Level II procedure and supply codes, and ICD-10-CM diagnosis codes. </p>
                                                <p>If you don’t have medical experience or working knowledge of these subjects, we offer
                                                    prerequisite courses to prepare you for the CPC certification training course. <Link
                                                        to="dsss" target="_self"
                                                        rel="" className="text-lightsky underline hover:no-underline"><u>Learn more</u></Link>.</p>
                                                <p>If you are already up to speed on medical terminology, pathophysiology, and anatomy, you can
                                                    start right into our <Link
                                                        to="dsds"
                                                        target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>CPC certification
                                                            training course</u></Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="book-medical" className="svg-inline--fa fa-book-medical w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M0 88C0 39.4 39.4 0 88 0H392c30.9 0 56 25.1 56 56V344c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8H0V88zM48 432c0 17.7 14.3 32 32 32H368V400H80c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7H392c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88C65.9 48 48 65.9 48 88V358.7zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Approved code books</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <ul>
                                                    <li>
                                                        <p><Link to="dd" target="_self"
                                                            rel="" className="text-lightsky underline hover:no-underline"><u>AMA's CPT<span
                                                                className="inline"><sup>®</sup></span> Professional Edition</u></Link> (current year)</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fddffd"
                                                            target="_self" rel=""
                                                            className="text-lightsky underline hover:no-underline"><u>ICD-10-CM</u></Link> (current year),
                                                            any publisher</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fd"
                                                            target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>HCPCS Level
                                                                II</u></Link> (current year), any publisher</p>
                                                    </li>
                                                </ul>
                                                <p>Note: Code sets are updated annually, so it’s essential to use the current calendar year's code
                                                    books when taking the CPB certification exam.</p>
                                                <p>Any officially published updates (errata) for the above code books may also be used.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="diamond-exclamation"
                                            className="svg-inline--fa fa-diamond-exclamation w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M51.3 256L256 51.3 460.7 256 256 460.7 51.3 256zm233-244.3c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216zM256 128c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Maintaining your certification</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>To maintain your credential, you must maintain your AAPC annual membership, and earn 36
                                                    continuing education units (CEUs) every two years.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="credit-card" className="svg-inline--fa fa-credit-card w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Pricing</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>One attempt for $399 or $499 for two attempts. Of note:</p>
                                                <ul>
                                                    <li>
                                                        <p>80% of AAPC students pass on the first attempt.</p>
                                                    </li>
                                                    <li>
                                                        <p>Students who train with AAPC are three times more likely to pass the certification exam.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                        </div>
                    )}
                    {activeMainTab ===3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h2 className='text-4xl font-semibold'>CPC Exam Preparation Course</h2>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="hundred-points"
                                            className="svg-inline--fa fa-hundred-points w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M171.2 99.64C175.3 61.17 207.8 32 246.5 32C291.5 32 326.5 71.02 321.7 115.8L308.8 236.4C304.7 274.8 272.2 304 233.5 304C188.5 304 153.5 264.1 158.3 220.2L171.2 99.64zM246.5 80C232.3 80 220.4 90.68 218.9 104.8L205.1 225.3C204.2 241.7 217.1 256 233.5 256C247.7 256 259.6 245.3 261.1 231.2L274 110.7C275.8 94.28 262.9 80 246.5 80V80zM118.4 36.59C125.3 41.65 128.9 50.04 127.8 58.59L95.82 314.6C94.17 327.8 82.18 337.3 69.02 335.9C55.87 334.4 46.54 322.6 48.19 309.4L74.99 94.99L41.45 109.9C29.26 115.3 15.15 109.9 9.938 97.81C4.721 85.71 10.37 71.52 22.56 66.1L94.56 34.1C102.5 30.59 111.6 31.54 118.4 36.59V36.59zM507.2 114.1L499.9 202.5C496.6 241.8 463.8 272 424.3 272C379.1 272 345.1 234.1 348.8 189.9L356.1 101.5C359.4 62.23 392.3 32 431.7 32C476 32 510.9 69.91 507.2 114.1V114.1zM396.6 193.9C395.2 210.1 408 224 424.3 224C438.8 224 450.8 212.9 452 198.5L459.4 110.1C460.8 93.91 447.1 79.1 431.7 79.1C417.2 79.1 405.2 91.09 403.1 105.5L396.6 193.9zM511.7 323.9C513.9 336.1 505.1 349.4 492.1 351.7L28.08 431.7C15.02 433.9 2.605 425.1 .353 412.1C-1.899 399 6.864 386.6 19.93 384.3L483.9 304.3C496.1 302.1 509.4 310.9 511.7 323.9H511.7zM219.9 479.7C206.9 481.9 194.5 473 192.3 459.9C190.2 446.9 198.1 434.5 212.1 432.3L452.1 392.3C465.1 390.1 477.5 398.1 479.7 412.1C481.9 425.1 473 437.5 459.9 439.7L219.9 479.7z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Exam format</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>100 multiple-choice questions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="rocket"
                                            className="svg-inline--fa fa-rocket w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M368.3 265c-44.5 30.1-129.3 68.2-175.7 88l-35-35c20.4-46.1 59.2-130 89.3-174.4C309.1 52 398.4 41.9 461.7 50.3c8.5 63.3-1.7 152.6-93.3 214.7zM118.5 288c-3.6 8-6.8 15.2-9.4 21.2c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8l0 96.2c0 8.6 4.6 16.6 12.1 20.9s16.7 4.2 24.1-.2l88.5-52.5c21.9-13 35.3-36.5 35.3-61.9V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-82.1 0c-25.4 0-49 13.4-61.9 35.3L3.4 251.8c-4.4 7.4-4.5 16.6-.2 24.1S15.4 288 24 288h94.5zM408 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z">
                                            </path>
                                        </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold">Online or in-person options</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>AAPC offers online and in-person proctored exams. Choose to take the exam at home in a quiet,
                                                    private location or through your local chapter or a licensed instructor. <Link
                                                        to="https://www.aapc.com/certification/online-exam-requirements.aspx" target="_self" rel=""
                                                        className="text-lightsky underline hover:no-underline">Learn more</Link> about the online proctored
                                                    exam and how to prepare for the current exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock"
                                            className="svg-inline--fa fa-clock w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Time allowed</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>In-person and online exams are administered in one sitting, with four hours to complete the
                                                    exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="camera-web" className="svg-inline--fa fa-camera-web w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M216 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L96.7 464H335.3l-37.1-48.2C272.9 426.2 245.1 432 216 432zM432 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4H48c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C36 353.2 0 288.8 0 216C0 96.7 96.7 0 216 0S432 96.7 432 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM96 216a120 120 0 1 1 240 0A120 120 0 1 1 96 216z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Equipment required for online exam</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A reliable internet connection and an external webcam that can be positioned to show your face,
                                                    hands, keyboard, and the area around the keyboard (about 10 inches) are required.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="user-graduate" className="svg-inline--fa fa-user-graduate w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M228.7 .5c-3.1-.6-6.3-.6-9.4 0l-200 40C8.1 42.7 0 52.6 0 64C0 74.3 6.5 83.3 16 86.6v71.8L.3 236.9c-.9 4.7 .3 9.6 3.3 13.3s7.6 5.9 12.4 5.9H48c4.8 0 9.3-2.1 12.4-5.9s4.3-8.6 3.3-13.3L48 158.4V93.3l171.3 34.3c3.1 .6 6.3 .6 9.4 0l200-40C439.9 85.3 448 75.4 448 64s-8.1-21.3-19.3-23.5l-200-40zM49.3 464c5.8-37.6 30-69.2 63.3-85.1l63.6 71.5c5 5.6 10.7 10.1 16.9 13.6H49.3zm349.4 0H254.9c6.2-3.4 11.9-7.9 16.9-13.6l63.6-71.5c33.3 15.8 57.5 47.4 63.3 85.1zM109.6 328.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7H417.3c17 0 30.7-13.8 30.7-30.7c0-71-45.9-131.3-109.6-152.8c-10.9-3.7-22.7 .4-30.3 9L236 418.5c-6.4 7.2-17.6 7.2-23.9 0l-72.1-81.1c-7.6-8.6-19.4-12.7-30.3-9zM96 160c0 70.7 57.3 128 128 128s128-57.3 128-128V135.5l-48 9.6V160c0 44.2-35.8 80-80 80s-80-35.8-80-80V145.1l-48-9.6V160z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Experience requirements</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A high-level knowledge of medical terminology, anatomy, and pathophysiology, along with
                                                    understanding of the proper application of CPT<span className="inline"><sup>®</sup></span>
                                                    procedure codes, HCPCS Level II procedure and supply codes, and ICD-10-CM diagnosis codes. </p>
                                                <p>If you don’t have medical experience or working knowledge of these subjects, we offer
                                                    prerequisite courses to prepare you for the CPC certification training course. <Link
                                                        to="dsss" target="_self"
                                                        rel="" className="text-lightsky underline hover:no-underline"><u>Learn more</u></Link>.</p>
                                                <p>If you are already up to speed on medical terminology, pathophysiology, and anatomy, you can
                                                    start right into our <Link
                                                        to="dsds"
                                                        target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>CPC certification
                                                            training course</u></Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="book-medical" className="svg-inline--fa fa-book-medical w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M0 88C0 39.4 39.4 0 88 0H392c30.9 0 56 25.1 56 56V344c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8H0V88zM48 432c0 17.7 14.3 32 32 32H368V400H80c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7H392c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88C65.9 48 48 65.9 48 88V358.7zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Approved code books</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <ul>
                                                    <li>
                                                        <p><Link to="dd" target="_self"
                                                            rel="" className="text-lightsky underline hover:no-underline"><u>AMA's CPT<span
                                                                className="inline"><sup>®</sup></span> Professional Edition</u></Link> (current year)</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fddffd"
                                                            target="_self" rel=""
                                                            className="text-lightsky underline hover:no-underline"><u>ICD-10-CM</u></Link> (current year),
                                                            any publisher</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fd"
                                                            target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>HCPCS Level
                                                                II</u></Link> (current year), any publisher</p>
                                                    </li>
                                                </ul>
                                                <p>Note: Code sets are updated annually, so it’s essential to use the current calendar year's code
                                                    books when taking the CPB certification exam.</p>
                                                <p>Any officially published updates (errata) for the above code books may also be used.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="diamond-exclamation"
                                            className="svg-inline--fa fa-diamond-exclamation w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M51.3 256L256 51.3 460.7 256 256 460.7 51.3 256zm233-244.3c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216zM256 128c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Maintaining your certification</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>To maintain your credential, you must maintain your AAPC annual membership, and earn 36
                                                    continuing education units (CEUs) every two years.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="credit-card" className="svg-inline--fa fa-credit-card w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Pricing</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>One attempt for $399 or $499 for two attempts. Of note:</p>
                                                <ul>
                                                    <li>
                                                        <p>80% of AAPC students pass on the first attempt.</p>
                                                    </li>
                                                    <li>
                                                        <p>Students who train with AAPC are three times more likely to pass the certification exam.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p></p>
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
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h2 className='text-4xl font-semibold'>CPC Exam Preparation Course</h2>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="hundred-points"
                                            className="svg-inline--fa fa-hundred-points w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M171.2 99.64C175.3 61.17 207.8 32 246.5 32C291.5 32 326.5 71.02 321.7 115.8L308.8 236.4C304.7 274.8 272.2 304 233.5 304C188.5 304 153.5 264.1 158.3 220.2L171.2 99.64zM246.5 80C232.3 80 220.4 90.68 218.9 104.8L205.1 225.3C204.2 241.7 217.1 256 233.5 256C247.7 256 259.6 245.3 261.1 231.2L274 110.7C275.8 94.28 262.9 80 246.5 80V80zM118.4 36.59C125.3 41.65 128.9 50.04 127.8 58.59L95.82 314.6C94.17 327.8 82.18 337.3 69.02 335.9C55.87 334.4 46.54 322.6 48.19 309.4L74.99 94.99L41.45 109.9C29.26 115.3 15.15 109.9 9.938 97.81C4.721 85.71 10.37 71.52 22.56 66.1L94.56 34.1C102.5 30.59 111.6 31.54 118.4 36.59V36.59zM507.2 114.1L499.9 202.5C496.6 241.8 463.8 272 424.3 272C379.1 272 345.1 234.1 348.8 189.9L356.1 101.5C359.4 62.23 392.3 32 431.7 32C476 32 510.9 69.91 507.2 114.1V114.1zM396.6 193.9C395.2 210.1 408 224 424.3 224C438.8 224 450.8 212.9 452 198.5L459.4 110.1C460.8 93.91 447.1 79.1 431.7 79.1C417.2 79.1 405.2 91.09 403.1 105.5L396.6 193.9zM511.7 323.9C513.9 336.1 505.1 349.4 492.1 351.7L28.08 431.7C15.02 433.9 2.605 425.1 .353 412.1C-1.899 399 6.864 386.6 19.93 384.3L483.9 304.3C496.1 302.1 509.4 310.9 511.7 323.9H511.7zM219.9 479.7C206.9 481.9 194.5 473 192.3 459.9C190.2 446.9 198.1 434.5 212.1 432.3L452.1 392.3C465.1 390.1 477.5 398.1 479.7 412.1C481.9 425.1 473 437.5 459.9 439.7L219.9 479.7z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Exam format</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>100 multiple-choice questions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="rocket"
                                            className="svg-inline--fa fa-rocket w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M368.3 265c-44.5 30.1-129.3 68.2-175.7 88l-35-35c20.4-46.1 59.2-130 89.3-174.4C309.1 52 398.4 41.9 461.7 50.3c8.5 63.3-1.7 152.6-93.3 214.7zM118.5 288c-3.6 8-6.8 15.2-9.4 21.2c-5.2 11.9-2.5 25.7 6.7 34.9l50.7 50.7c9.1 9.1 22.7 11.9 34.5 6.9c6.5-2.7 14.3-6 23-9.8l0 96.2c0 8.6 4.6 16.6 12.1 20.9s16.7 4.2 24.1-.2l88.5-52.5c21.9-13 35.3-36.5 35.3-61.9V312.1c4-2.5 7.7-4.9 11.3-7.3C516.1 222.9 520.1 100.9 506.7 28.1c-2.1-11.6-11.2-20.6-22.8-22.8C411.1-8.1 289.1-4.1 207.2 116.7c-2.4 3.6-4.9 7.3-7.3 11.3l-82.1 0c-25.4 0-49 13.4-61.9 35.3L3.4 251.8c-4.4 7.4-4.5 16.6-.2 24.1S15.4 288 24 288h94.5zM408 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z">
                                            </path>
                                        </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold">Online or in-person options</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>AAPC offers online and in-person proctored exams. Choose to take the exam at home in a quiet,
                                                    private location or through your local chapter or a licensed instructor. <Link
                                                        to="https://www.aapc.com/certification/online-exam-requirements.aspx" target="_self" rel=""
                                                        className="text-lightsky underline hover:no-underline">Learn more</Link> about the online proctored
                                                    exam and how to prepare for the current exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock"
                                            className="svg-inline--fa fa-clock w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Time allowed</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>In-person and online exams are administered in one sitting, with four hours to complete the
                                                    exam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="camera-web" className="svg-inline--fa fa-camera-web w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M216 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L96.7 464H335.3l-37.1-48.2C272.9 426.2 245.1 432 216 432zM432 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4H48c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C36 353.2 0 288.8 0 216C0 96.7 96.7 0 216 0S432 96.7 432 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM96 216a120 120 0 1 1 240 0A120 120 0 1 1 96 216z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Equipment required for online exam</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A reliable internet connection and an external webcam that can be positioned to show your face,
                                                    hands, keyboard, and the area around the keyboard (about 10 inches) are required.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="user-graduate" className="svg-inline--fa fa-user-graduate w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M228.7 .5c-3.1-.6-6.3-.6-9.4 0l-200 40C8.1 42.7 0 52.6 0 64C0 74.3 6.5 83.3 16 86.6v71.8L.3 236.9c-.9 4.7 .3 9.6 3.3 13.3s7.6 5.9 12.4 5.9H48c4.8 0 9.3-2.1 12.4-5.9s4.3-8.6 3.3-13.3L48 158.4V93.3l171.3 34.3c3.1 .6 6.3 .6 9.4 0l200-40C439.9 85.3 448 75.4 448 64s-8.1-21.3-19.3-23.5l-200-40zM49.3 464c5.8-37.6 30-69.2 63.3-85.1l63.6 71.5c5 5.6 10.7 10.1 16.9 13.6H49.3zm349.4 0H254.9c6.2-3.4 11.9-7.9 16.9-13.6l63.6-71.5c33.3 15.8 57.5 47.4 63.3 85.1zM109.6 328.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7H417.3c17 0 30.7-13.8 30.7-30.7c0-71-45.9-131.3-109.6-152.8c-10.9-3.7-22.7 .4-30.3 9L236 418.5c-6.4 7.2-17.6 7.2-23.9 0l-72.1-81.1c-7.6-8.6-19.4-12.7-30.3-9zM96 160c0 70.7 57.3 128 128 128s128-57.3 128-128V135.5l-48 9.6V160c0 44.2-35.8 80-80 80s-80-35.8-80-80V145.1l-48-9.6V160z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Experience requirements</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>A high-level knowledge of medical terminology, anatomy, and pathophysiology, along with
                                                    understanding of the proper application of CPT<span className="inline"><sup>®</sup></span>
                                                    procedure codes, HCPCS Level II procedure and supply codes, and ICD-10-CM diagnosis codes. </p>
                                                <p>If you don’t have medical experience or working knowledge of these subjects, we offer
                                                    prerequisite courses to prepare you for the CPC certification training course. <Link
                                                        to="dsss" target="_self"
                                                        rel="" className="text-lightsky underline hover:no-underline"><u>Learn more</u></Link>.</p>
                                                <p>If you are already up to speed on medical terminology, pathophysiology, and anatomy, you can
                                                    start right into our <Link
                                                        to="dsds"
                                                        target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>CPC certification
                                                            training course</u></Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="book-medical" className="svg-inline--fa fa-book-medical w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M0 88C0 39.4 39.4 0 88 0H392c30.9 0 56 25.1 56 56V344c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8H0V88zM48 432c0 17.7 14.3 32 32 32H368V400H80c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7H392c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88C65.9 48 48 65.9 48 88V358.7zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Approved code books</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <ul>
                                                    <li>
                                                        <p><Link to="dd" target="_self"
                                                            rel="" className="text-lightsky underline hover:no-underline"><u>AMA's CPT<span
                                                                className="inline"><sup>®</sup></span> Professional Edition</u></Link> (current year)</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fddffd"
                                                            target="_self" rel=""
                                                            className="text-lightsky underline hover:no-underline"><u>ICD-10-CM</u></Link> (current year),
                                                            any publisher</p>
                                                    </li>
                                                    <li>
                                                        <p><Link
                                                            to="fd"
                                                            target="_self" rel="" className="text-lightsky underline hover:no-underline"><u>HCPCS Level
                                                                II</u></Link> (current year), any publisher</p>
                                                    </li>
                                                </ul>
                                                <p>Note: Code sets are updated annually, so it’s essential to use the current calendar year's code
                                                    books when taking the CPB certification exam.</p>
                                                <p>Any officially published updates (errata) for the above code books may also be used.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="diamond-exclamation"
                                            className="svg-inline--fa fa-diamond-exclamation w-6 text-2xl sm:text-3xl sm:w-10" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M51.3 256L256 51.3 460.7 256 256 460.7 51.3 256zm233-244.3c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216zM256 128c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Maintaining your certification</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>To maintain your credential, you must maintain your AAPC annual membership, and earn 36
                                                    continuing education units (CEUs) every two years.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex leading-5 text-gray-700">
                                        <div className="pt-1 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="credit-card" className="svg-inline--fa fa-credit-card w-6 text-2xl sm:text-3xl sm:w-10"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                                            </path>
                                        </svg></div>
                                        <div>
                                            <p className="font-bold">Pricing</p>
                                            <div
                                                className="prose max-w-none prose-img:rounded-xl prose-h2:text-3xl prose-h2:font-semibold first:prose-h2:mt-0 prose-h2:mb-2 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-6 prose-h3:text-1xl prose-ul:pl-4 prose-li:my-0 prose-headings:text-gray-700 prose-p:text-gray-600 prose-li:text-gray-600 false rich-content prose-table:pl-16 break-words">
                                                <p>One attempt for $399 or $499 for two attempts. Of note:</p>
                                                <ul>
                                                    <li>
                                                        <p>80% of AAPC students pass on the first attempt.</p>
                                                    </li>
                                                    <li>
                                                        <p>Students who train with AAPC are three times more likely to pass the certification exam.
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p></p>
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
export default CPC




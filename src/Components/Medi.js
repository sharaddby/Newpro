import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Supports = () => {
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
            <div className='flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-full w-11/12 justify-center'>
                <div className="flex flex-col space-x-2 2xl:w-1/4 xl:w-1/4 lg:1/3 md:w-1/3 sm:w-full w-full p-4">
                    <div className="space-y-1 bg-gray-200">
                        <button className='w-full p-2 bg-blue-500 text-white'>Support</button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            Conferences
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        >
                            Workshops
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        >
                            Webinars
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 4 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(4)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Membership
                        </button>
                        {activeMainTab === 4 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Corporate membership
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 5 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(5)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Exams
                        </button>
                        {activeMainTab === 5 && (
                            <div className="flex flex-col mt-2">
                                <button className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                > Electronic (LRP) exams</button>
                                <button className={`p-2 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >In-person exams</button>
                                <button className={`p-2 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(3)}
                                >International test center exams</button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 6 ? 'bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(6)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Training
                        </button>
                        {activeMainTab === 6 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    Blackboard
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 7 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(7)}
                        >
                            Project Xtern
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 8 ? 'bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(8)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            CEUs
                        </button>
                        {activeMainTab === 8 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                >
                                    CEU vendors
                                </button>
                            </div>
                        )}
                        <button
                            className={`w-full p-2 ${activeMainTab === 9 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(9)}
                        >
                            Books
                        </button>

                        <button
                            className={`w-full p-2 ${activeMainTab === 10 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(10)}
                        >
                            Codify by AAPC
                        </button>
                        <button
                            className={`w-full p-2 ${activeMainTab === 11 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(11)}
                        >
                            Areas of focus
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Conferences</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 2 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Workshops</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Webinars</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 4 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Corporate membership</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 5 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Electronic (LRP) exams</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                </div>
                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">In-person exams</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                </div>

                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">International test center exams</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                </div>

                            </div>}
                        </div>
                    )}
                    {activeMainTab === 6 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Blackboard</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 7 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Project Xtern</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                </div>

                            </div>}
                        </div>
                    )}
                    {activeMainTab === 8 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">CEU vendors</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 9 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Books</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 10 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Codify by AAPC</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 11 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-full w-100 justify-center mx-auto">
                                    <h2 className="text-4xl text-green-900 font-semibold">Areas of focus</h2>
                                    <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                                    <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                                    <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                                        our CEU <span className="text-green-900">Information page.</span></p>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > Where will I find my handouts for the conference?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >What are the benefits of staying at the host hotel?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    > What does my conference registration include?</Link>
                                    <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                                    >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                                </div>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Supports;


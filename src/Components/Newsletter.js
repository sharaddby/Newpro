import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    
const Newsletter = () => {
    
    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
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
                        <button
                            className={`w-full p-2 ${activeMainTab === 1 ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'}`}
                            onClick={() => handleMainTabClick(1)}
                        >
                            eNewsletter
                        </button>
                        <Link to="/shop" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Overview
                        </Link>
                        <button
                            className={`w-full p-2 ${activeMainTab === 2 ? ' bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(2)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-40" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Medical Coding Books
                        </button>
                        {activeMainTab === 2 && (
                            <div className="flex flex-col mt-2">
                                <button
                                    className={`p-2 my-1 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
                                    className={`p-2 my-1 ${activeSubTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
                                    className={`p-2 my-1 ${activeSubTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
                                    className={`p-2 my-1 ${activeSubTab === 7 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
                                    className={`p-2 my-1 ${activeSubTab === 9 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(9)}
                                >
                                    Medical Coding Book Updates
                                </button>
                            </div>

                        )}

                        <button
                            className={`w-full p-2 ${activeMainTab === 3 ? 'bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(3)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
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
                                    className={`p-2 my-1 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
                                    className={`p-2 my-1 ${activeSubTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(4)}
                                >
                                    Tech & Innovation in Healthcare eNewsletter New!
                                </button>
                            </div>
                        )}
                        <Link to="/Codes" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Partner Publications
                        </Link>
                        <button
                            className={`w-full p-2 ${activeMainTab === 13 ? 'bg-gray-300' : 'bg-gray-300'}`}
                            onClick={() => handleMainTabClick(13)}
                        ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-left fa-fw text-sm absolute h-7 w-3 inline-block ml-32" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            Exam Preparation
                        </button>
                        {activeMainTab === 13 && (
                            <div className="flex flex-col mt-2">
                                <Link to="/Training" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                                    Training Courses
                                </Link>
                                <button
                                    className={`p-2 ${activeSubTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(1)}
                                > Study Guides

                                </button>
                                <button
                                    className={`p-2 my-1 ${activeSubTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                    onClick={() => handleSubTabClick(2)}
                                >
                                    Practice Exams
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
                            Instructor Resources
                        </Link>
                        <Link to="/Events" className="block px-4 py-2 text-md hover:bg-blue-500 hover:text-white text-center bg-gray-300">
                            Clearance Items
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/4 sm:w-full w-full p-4">
                    {activeMainTab === 1 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Healthcare eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
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
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Healthcare eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 5 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 6 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 7 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 8 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 9 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl'>Medical Coding Book Bundles + Codify by AAPC</h3>
                                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                ALL
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                2024 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                2023 EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                3RD EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                1ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                2ST EDITION
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                REFERENCE GUIDE
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    fy More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className=" bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                                                                    Learn More
                                                                </button>
                                                            </div>
                                                            <div className="bg-white mt-2">
                                                                <img src="../book.png" alt="gh" className="w-full" />
                                                                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                                                                <h5 className="pl-5"><del>$189.95</del> $119.99</h5>
                                                                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                                                                    Learn More
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 3 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Compliance eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Compliance eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 3 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Compliance eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {activeSubTab === 4 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Compliance eNewsletters</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                    {activeMainTab === 13 && (
                        <div>
                            {activeSubTab === 1 && <div>
                                <div className="sm:w-100 w-100 justify-center mx-auto">
                                    <h3 className="text-3xl text-green-900 font-semibold mb-5">Study Guides</h3>
                                    <img src="../landing_page_hero_banner.webp" alt="hrof" />
                                    <p className='p-5'>Health care professionals are obligated to stay current in their profession. This includes
                                        continuing education in their respective discipline as well as keeping up with the latest
                                        medical coding updates, compliance rules, and government regulations. AAPC supports its
                                        members to maintain a distinctive edge in their health care career by providing a wide
                                        variety of topics and subject matter delivered live or on demand, in classNamerooms or over the
                                        web.
                                    </p>
                                    <p>With every eNewsletter subscription, you’ll get:</p>
                                    <ul className='list-disc px-10'>
                                        <li>Simple explanations of revised regulations and payer programs</li>
                                        <li>Real-world reporting scenarios solved by our veteran coders</li>
                                        <li>Industry news, such as MAC and RAC activities, the OIG Work Plan, and CERT reports</li>
                                        <li>Instant access to every article published in your eNewsletter</li>
                                    </ul>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Medical Coding eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Compliance eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid place-items-center mt-5">
                                        <div className="flex flex-row md:flex-row sm:w-full w-full">
                                            <div className="lg:w-3/4 md:w-2/5 w-full">
                                                <h4 className="2xl:text-xl lg:text-lg mb-5 text-lightsky">
                                                    Post-Acute eNewsletters
                                                </h4>
                                            </div>
                                            <div className="lg:w-1/4 md:w-3/5 w-full">
                                                <button className="px-12 rounded-full">
                                                    <a
                                                        href="https://tailwindui.com/documentation"
                                                        className="rounded-full 2xl:text-xl lg:text-lg text-teal-900"
                                                    >
                                                        View All{" "}
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-5 mx-auto place-items-center">
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <img src="../6aeb.png" alt="hell" />
                                            <p className="text-md text-lightsky">Anesthesia Coding Alert - eNewsletter</p>
                                            <p className="font-semibold text-center mt-2"><span className="text-red-600">$149.95</span></p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded mt-2">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                            {activeSubTab === 2 && <div>
                                <div className="grid place-items-center">
                                    <div className="lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                                        <h3 className='text-3xl mb-5'>Online Practice Exams</h3>
                                        <p className="text-md">Are you really ready? Don’t overestimate, or worse, underestimate the difficulty of your exam. Get familiar with the format, questions, and time constraints before your exam and improve your chances of passing on your first try.</p>
                                        <p className="text-md p-5">"I have been taking the practice exams. They are just as hard as the real thing and are a great benefit. I went back and corrected any of my mistakes and found my only problem is going slow enough to be thorough. I would recommend them to anyone. "</p>
                                        <h4 className="text-2xl">Each practice exam offers:</h4>
                                        <ul className="list-disc pl-10 mb-5">
                                            <li>Immediate Feedback – incorrect answers are displayed with rationales for all questions</li>
                                            <li>Unlimited Retakes – take the exam as many times as you like</li>
                                            <li>Realistic Exam Content – emulates content and difficulty level of the actual exams</li>
                                            <li>Readiness Gauge – an indication of your readiness for the real exam</li>
                                        </ul>
                                        <div className="grid 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-5 grid-cols-4 space-x-1 mt-5">
                                            <button
                                                className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0  py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab1')}
                                            >
                                                CPC
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab2')}
                                            >
                                                COC
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab3')}
                                            >
                                                CDEO
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab4')}
                                            >
                                                CIC
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab5')}
                                            >
                                                CRC
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2  my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab6')}
                                            >
                                                CPB
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab7')}
                                            >
                                                CPMA
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab8' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab8')}
                                            >
                                                CPPM
                                            </button>
                                            <button
                                                className={`${activeTab === 'tab9' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab9')}
                                            >
                                                CPCO
                                            </button>

                                            <button
                                                className={`${activeTab === 'tab10' ? 'bg-blue-500' : 'bg-gray-200'
                                                    } px-0 py-2 my-2 rounded-lg text-md hover:text-white`}
                                                onClick={() => handleTabClick('tab10')}
                                            >
                                                Specialty
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            {activeTab === 'tab1' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab2' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab3' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab4' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab5' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab6' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab7' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <h5 className="text-xl my-3">Choose a practice exam:</h5>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam A - $69.95 (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam B - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam c - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (A,B,C) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    CPC Practice Exam Bundle (D,E,F) - $69.95  (<span className="text-green-800">Members:</span><span className="text-red-500">$39.95)</span>
                                                                </p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab8' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab9' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            <div className="col-span-3">
                                                                <h4 className="text-2xl">CPC® Online Practice Exams</h4>
                                                                <p className="txt-md">These practice exams are taken online and offer the BEST means to gauge your
                                                                    readiness for the actual CPC® exam. The online practice exam is created by the same experts who write
                                                                    the real exam. Each of the practice exams, A, B, C, D, E, and F have 50 questions and each exam's questions
                                                                    are unique to that practice exam. Buy them individually, or in a bundle to save.</p>
                                                                <p className="text-black my-5"><input id="comments" className="mx-5"
                                                                    aria-describedby="comments-description" name="comments" type="checkbox" />
                                                                    I agree to these Practice Exam <span className="text-green-800">Terms and Conditions.</span>
                                                                </p>
                                                                <button className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-12 rounded mt-2">
                                                                    Add To Cart
                                                                </button>
                                                            </div>
                                                            <div className="p-2">
                                                                <div className="bg-gray-200 p-2">
                                                                    <h6 className="text-lg font-semibold mb-3">CPC - Need Comprehensive Training?</h6>
                                                                    <p className="text-md">  Our practice exams are ideal for those with prior training or two years of experience. For comprehensive training, view our Complete CPC Training Course.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === 'tab10' && (
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="grid place-items-center">
                                                        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2">
                                                            
                                                            </div>
                                                    </div>
                                                </div>
                                            )}
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
                </div>
            </div>
        </div>
    );
};

export default Newsletter
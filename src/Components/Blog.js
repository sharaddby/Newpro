import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div>
            <div className="2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-10/12 justify-center mx-auto">
            <Slider/>
                <div className="grid lg:grid-cols-4 gap-4 justify-center mx-auto">
                    <div className="col-span-3">
                          <div className="grid grid-cols-2 gap-8">
                            <div className="grid">
                                <div className="grid">
                                    <h4 className="text-2xl font-semibold py-5 text-lightblue hover:text-orange-500">Coding Supplies,
                                        Implants, and Devices</h4>
                                    <img src="../blog6.jpg" alt="hey"/>
                                </div>
                                <div className="flex py-5">
                                    <div className="grid grid-flow-col w-1/2">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" /></svg>
                                        Jennifer Lavoie
                                    </div>
                                    <div className="grid grid-flow-col w-1/2">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
                                        </svg>
                                        September 1, 2023
                                    </div>
                                </div>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores
                                    officia
                                    cumque asperiores excepturi. Magnam perferendis minus assumenda perspiciatis dolore hic
                                    dignissimos
                                    aliquam aspernatur vitae commodi? Culpa, eius temporibus deleniti nemo veritatis corrupti
                                    recusandae
                                    quasi exercitationem nostrum, voluptate eveniet voluptates velit vitae corporis placeat
                                    necessitatibus at beatae, cumque quod tenetur?</p>
                                    <div className="grid items-center mx-auto mb-5 mt-5">
                                        <Link to="./Business" className="border-solid border-2 border-lightsky text-black rounded-md w-40 py-2 px-6">Read More
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                                        </Link>
                                    </div>
                               
                            </div>
                            <div className="grid">
                                <div className="grid">
                                    <h4 className="text-2xl font-semibold py-5 text-lightblue hover:text-orange-500">Coding Supplies,
                                        Implants, and Devices</h4>
                                    <img src="../blog6.jpg" alt="hey" />
                                </div>
                                <div className="flex py-5">
                                    <div className="grid grid-flow-col w-1/2"><svg className="h-6 w-6" viewBox="0 0 24 24" 
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                        Jennifer Lavoiea</div>
                                    <div className="grid grid-flow-col w-1/2"><svg className="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor"
                                            d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
                                    </svg>
                                        September 1, 2023
                                    </div>
                                </div>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores
                                    officia
                                    cumque asperiores excepturi. Magnam perferendis minus assumenda perspiciatis dolore hic
                                    dignissimos
                                    aliquam aspernatur vitae commodi? Culpa, eius temporibus deleniti nemo veritatis corrupti
                                    recusandae
                                    quasi exercitationem nostrum, voluptate eveniet voluptates velit vitae corporis placeat
                                    necessitatibus at beatae, cumque quod tenetur?</p>
                                    <div className="grid items-center mx-auto mb-5 mt-5">
                                        <Link to="./Business" className="border-solid border-2 border-lightsky text-black rounded-md w-40 py-2 px-6">Read More
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex basis-full">
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-2 sm:gap-2">
                                    <div
                                        className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col">
                                        <img src="../sblog.jpg" alt="..." />
                                        <div className='px-5'>
                                            <span>
                                                <p>When Patients Understand Their Medical Record</p>
                                                <div className="flex">
                                                    <div>
                                                        <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                            <circle cx="12" cy="7" r="4" />
                                                        </svg>

                                                    </div>
                                                    <div>
                                                        <p className="text-sm">Gntributor</p>
                                                    </div>
                                                    <div> <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                        </svg>

                                                    </div>
                                                    <div>
                                                        <p className="text-sm">Gntributor</p>
                                                    </div>
                                                </div>
                                                <p>Tags: EHR, Medical Records</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col">
                                        <img src="../sblog.jpg" alt="..." />
                                        <div className='px-5'>
                                            <span>
                                                <p>When Patients Understand Their Medical Record</p>
                                                <div className="flex">
                                                    <div>
                                                        <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                            <circle cx="12" cy="7" r="4" />
                                                        </svg>

                                                    </div>
                                                    <div>
                                                        <p className="text-sm">Gntributor</p>
                                                    </div>
                                                    <div> <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>

                                                    </div>
                                                    <div>
                                                        <p className="text-sm">Gntributor</p>
                                                    </div>
                                                </div>
                                                <p>Tags: EHR, Medical Records</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col">
                                        <img src="../sblog.jpg" alt="..." />
                                        <div className='px-5'>
                                        <span>
                                            <p>When Patients Understand Their Medical Record</p>
                                            <div className="flex">
                                                <div>
                                                    <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <p className="text-sm">Gntributor</p>
                                                </div>
                                                <div> <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>

                                                </div>
                                                <div>
                                                    <p className="text-sm">Gntributor</p>
                                                </div>
                                            </div>
                                            <p>Tags: EHR, Medical Records</p>
                                        </span>
                                        </div>
                                    </div>
                                    <div
                                        className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col">
                                        <img src="../sblog.jpg" alt="..." />
                                        <div className='px-5'>
                                        <span>
                                            <p>When Patients Understand Their Medical Record</p>
                                            <div className="flex">
                                                <div>
                                                    <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <p className="text-sm">Gntributor</p>
                                                </div>
                                                <div> <svg className="h-6 w-4" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>

                                                </div>
                                                <div>
                                                    <p className="text-sm">Gntributor</p>
                                                </div>
                                            </div>
                                            <p>Tags: EHR, Medical Records</p>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center mx-auto lg:grid-cols-1 sm:w-full">
                        <div className="flex flex-col">
                            <form className="flex items-center py-5">
                                <label for="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <input type="text" className="border-1 text-gray-900 text-sm block w-full px-20 py-2"
                                        placeholder="Search Keyword ..." required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <div className="border border-indigo-600 p-5">
                                <div className="py-5">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Case study for your
                                        specialty</label>
                                </div>
                                <div className="py-5">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In-depth look at a
                                        code or modifier</label>
                                </div>
                                <div className="py-5">
                                    <input id="default-radio-3" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-3"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table or tool</label>
                                </div>
                                <div className="py-5">
                                    <input id="default-radio-4" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-4"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reader
                                        question</label>
                                </div>
                                <div className="py-5">
                                    <input id="default-radio-5" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-5"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">News</label>
                                </div>
                                <div className="py-5">
                                    <button type="button"
                                        className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-10">
                                <img src="../blog8.jpg" alt="hey" />
                                <p className="border-x border-b border-gray-600 ">Knowledge Center Topic I Am AAPC: Cindy Garner, CPC,
                                    CPB, CPC-I, CMA-AAMA, HITCM-PP</p>
                                <h4 className="text-2xl font-semibold pt-5 text-gray-500">Hot Topics</h4>
                                <ul className="py-5">
                                    <li className="py-2"> Quality Payment Program</li>
                                    <li className="py-2">Telehealth</li>
                                    <li className="py-2">Facility</li>
                                    <li className="py-2">Health Information Management</li>
                                    <li className="py-2">Career Growth</li>
                                    <li className="py-2">View More</li>
                                </ul>
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    className="text-lightblue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                    type="button">View more<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m1 1 4 4 4-4" />
                                    </svg></button>
                                <div id="dropdown"
                                    className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-72">
                                    <ul className="w-72 py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AAPC
                                                In The News</a>
                                        </li>
                                        <li>
                                            <a href="dssd"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AAPC
                                                News</a>
                                        </li>
                                        <li>
                                            <a href="ddd"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Audit</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Billing</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">career
                                                growth</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                CMS</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Coding</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Compliance</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COVID-19</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Evaluation Management</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">health
                                                information management</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Health
                                                Law</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Healthcare
                                                Business Monthly</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Healthcare
                                                Careers</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home
                                                Health</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ICD-10</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Industry
                                                News</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Infographics</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MACRA</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Medical
                                                Coding Salary Surveys</a>
                                        </li>

                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Newsletter</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practice
                                                management</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Risk Adjustment</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Uncategorized</a>
                                        </li>
                                        <li>
                                            <a href="hello"
                                                className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Value Based Programs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex basis-1/4">
                            <div clss="grid">
                                <img src="../newsletter.png" alt="hello" />
                                <img src="../blg.jpg" alt="hello" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-16 mb-16">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <h6 className="mb-5 pl-16">QUICK RESOURCES</h6>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                        <div>
                            <span>
                                <p className="text-lightsky pl-16">Medical Terminology</p>
                                <p className="text-lightsky pl-16">What is Medical Coding?</p>
                                <p className="text-lightsky pl-16">What is Medical Billing?</p>
                                <p className="text-lightsky pl-16">What is Medical Auditing?</p>
                                <p className="text-lightsky pl-16">What is Reimbursement?</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p className="text-lightsky pl-16">Medical Terminology</p>
                                <p className="text-lightsky pl-16">What is Medical Coding?</p>
                                <p className="text-lightsky pl-16">What is Medical Billing?</p>
                                <p className="text-lightsky pl-16">What is Medical Auditing?</p>
                                <p className="text-lightsky pl-16">What is Reimbursement?</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p className="text-lightsky pl-16">Medical Terminology</p>
                                <p className="text-lightsky pl-16">What is Medical Coding?</p>
                                <p className="text-lightsky pl-16">What is Medical Billing?</p>
                                <p className="text-lightsky pl-16">What is Medical Auditing?</p>
                                <p className="text-lightsky pl-16">What is Reimbursement?</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p className="text-lightsky pl-16">Medical Terminology</p>
                                <p className="text-lightsky pl-16">What is Medical Coding?</p>
                                <p className="text-lightsky pl-16">What is Medical Billing?</p>
                                <p className="text-lightsky pl-16">What is Medical Auditing?</p>
                                <p className="text-lightsky pl-16">What is Reimbursement?</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
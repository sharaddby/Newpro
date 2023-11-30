import React, { useState } from 'react';
import Slider from './Slider'
import { Link } from 'react-router-dom';
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('View More');

  const options = ['View More','AAPC In The News ', ' AAPC News', 'Audit',' Billing','career growth',
  'CMS','Compliance','Coding ','COVID-19 ','Evaluation Management ','health information management',
  'Health Law','Healthcare Business Monthly',' Healthcare Careers ',' Home Health ','ICD-10 ',
  'Industry News','Infographics','MACRA','Medical Coding Salary Surveys ',' Newsletter ','Practice management',
  ' Risk Adjustment ','Uncategorized','Value Based Programs'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
    return (
        <div>
            <div className="2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-10/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 justify-center mx-auto">
                    <div className="col-span-3">
                    <Slider/>
                          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
                            <div className="grid">
                                <div className="grid">
                                    <h4 className="text-2xl font-semibold py-5 text-lightblue hover:text-orange-500">Coding Supplies,
                                        Implants, and Devices</h4>
                                    <img src="../ban2.webp" alt="hey"/>
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
                                        <Link to="./Business" className="border-solid border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-black rounded-md w-40 py-2 px-6">Read More
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                                        </Link>
                                    </div>
                               
                            </div>
                           
                            <div className="grid">
                                <div className="grid">
                                    <h4 className="text-2xl font-semibold py-5 text-lightblue hover:text-orange-500">Coding Supplies,
                                        Implants, and Devices</h4>
                                    <img src="../ban2.webp" alt="hey" />
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
                                        <Link to="./Business" className="border-solid border-2 border-gray-300 hover:bg-blue-500 hover:text-white text-black rounded-md w-40 py-2 px-6">Read More
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
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
                        <div className="flex flex-col w-100">
                            <form className="flex items-center pb-5">
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
                                <p className='py-2'>What's your favorite type of medical coding article?</p>
                                <div className="py-1">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-1"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Case study for your
                                        specialty</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-2" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">In-depth look at a
                                        code or modifier</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-3" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-3"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Table or tool</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-4" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-4"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reader
                                        question</label>
                                </div>
                                <div className="py-1">
                                    <input id="default-radio-5" type="radio" value="" name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-5"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">News</label>
                                </div>
                                <div className="py-1">
                                    <button type="button"
                                        className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium text-sm px-5 py-2 text-center mr-2 mb-2 dark:focus:ring-orange-900">Vote</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-10">
                                <img src="../blog8.jpg" alt="hey" />
                                <p className="border-x border-b border-gray-200 px-2 py-2">Knowledge Center Topic I Am AAPC: Cindy Garner, CPC,
                                    CPB, CPC-I, CMA-AAMA, HITCM-PP</p>
                                <h4 className="text-2xl font-semibold pt-5 text-gray-500">Hot Topics</h4>
                                <ul className="pt-5">
                                    <li className="py-1"> Quality Payment Program <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Telehealth <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Facility <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Health Information Management <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                    <li className="py-1">Career Growth <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></li>
                                </ul>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <li
                                        className="inline-flex justify-center w-full  border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
                                        id="options-menu"
                                        onClick={() => setIsOpen(!isOpen)}
                                        >
                                        {selectedOption}
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-gray-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                                        </svg>
                                        </li>
                                    </div>

                                    {isOpen && (
                                        <div className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                {options.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleOptionClick(option)}
                                                    className="block px-4 text-sm text-blue-500 hover:text-orange-700"
                                                    role="menuitem"
                                                >
                                                    {option}
                                                </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex basis-1/4">
                            <div clss="grid">
                                <img src="../newsletter.png" alt="hello" className='py-5'/>
                                <img src="../blg.jpg" alt="hello" className='my-5'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Blog
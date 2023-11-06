import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Footer from './Footer';
function Index() {
  const [servicesOpen1, setservicesOpen1] = useState(false);
  const [servicesOpen2, setservicesOpen2] = useState(false);

  const toggleServices1 = () => {
    setservicesOpen1(!servicesOpen1);
    setservicesOpen2(false);

  };

  const toggleServices2 = () => {
    setservicesOpen2(!servicesOpen2);
    setservicesOpen1(false);
  };
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div className="grid place-items-center">
          <div className="2xl:w-8/12 2xl:h-[500px] xl:w-11/12 xl:h-[500px] lg:w-11/12 lg:h-[400px] md:w-11/12 md:h-[350px] sm:w-11/12 sm:h-[300px] h-[270px] w-11/12 justify-center mx-auto">
    
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
   
    <div className="2xl:w-8/12 xl:w-11/12 lg:w-w-11/12 md:w-w-11/12 sm:w-w-11/12 w-11/12 justify-center mx-auto z-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:gap-1 md:gap-2 sm:gap-2 w-100 bg-gray-100 w-100">
          <div className="border border-lightsky hover:border-darksky  bg-blue-100 mb-3">
            <button className="px-5 py-5 bg-lightsky hover:bg-darksky {white} rounded-none w-full">
              <a
                href="Fundamentals_of_medicine_course"
                className="px-6 py-6 text-white rounded-none w-full "
              >
                Medical Coding
              </a>
            </button>
          </div>
          <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
            <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
              <a
                href="fundamentals.html"
                className="px-6 py-6 text-white rounded-none w-full"
              >
                Medical Billing
              </a>
            </button>
          </div>
          <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
            <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
              <a
                href="fundamentals.html"
                className="px-5 py-5 text-white rounded-none w-full"
              >
                Medical Auditing
              </a>
            </button>
          </div>
          <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
            <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
              <a
                href="fundamentals.html"
                className="py-6 text-white rounded-none w-full"
              >
                Practice Management
              </a>
            </button>
          </div>
          <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
            <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
              <a
                href="fundamentals.html"
                className="py-6 text-white rounded-none w-full"
              >
                Healthcare Compliance
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
            <div className="2xl:w-7/12 xl:w-7/12 lg:w-9/12 md:w-9/12 sm:w-9/12 w-9/12 justify-center mx-auto">
                <div className="pl-10 pt-10">
                    <p className="text-black text-lg dark:text-white font-semibold sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center">
                        Over 200,000 Members and Growing</p>
                </div>
                <p className="text-lg text-gray-800 dark:text-white mt-5 text-justify">AAPC is the world's largest training
                    and credentialing organization for the business of healthcare, with members worldwide working in 
                    <span className="text-lightgreen">medical coding,billing, auditing, compliance, clinical documentation improvement, revenue cycle management,</span> and
                    practice
                    management.</p>
                <p className="text-lg text-gray-800 dark:text-white text-justify">Through our career training, continuing
                    education,
                    and networking events, we provide countless opportunities for industry professionals to enhance
                    their learning
                    and advance their careers.</p>
            </div>
        </div>
        <div className="grid place-items-center mt-12 mb-12 ">
            <div className="w-64">
                <button className="px-12 py-3 bg-lightsky hover:bg-darksky text-white rounded-full">
                    <a href="https://tailwindui.com/documentation" className="text-white rounded-full">Join Us Today</a>
                </button>
            </div>
        </div>
        <div className="grid place-items-center mb-16">
            <div className="2xl:w-7/12 xl:w-7/12 lg:w-9/12 md:w-9/12 sm:w-9/12 w-9/12 justify-center mx-auto">
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-100 gap-8">
                    <div>
                        <h5 className="sm:text-xl mb-5 ">Medical Coding Training</h5>
                        <p className="text-md">Double your chances of passing the exam to become a Certified Professional
                            Coder (CPC®)
                            Get your career in medical coding started today.</p>
                        <button className="px-12 py-3 rounded-full">
                          <a href="https://tailwindui.com/documentation"
                            className="rounded-full text-xl text-teal-900">Get Started 
                          </a>
                                                
                        </button>
                         <button
                    onClick={toggleServices1}
                    className="text-white hover:text-gray-300 focus:outline-none px-4"
                  >More populer training 
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                  </button>
                  {servicesOpen1 && (
                    <ul className="mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md w-96">
                      <li>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 z-[1]">
                           <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="certifications.php">Medical Coding Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="exam-preparation.php">Medical Billing Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="locate-examination.php">Medical Auditing Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="medical-coding-education.php">Medical Documentation Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="servicsOpen2e">Practice</a> 
                              <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="servicsOpen2e">View All Trainings</a> 
                        </div>
                      </li>
                    </ul>
                  )}
                    </div>
                    <div>
                        <h1 className="sm:text-xl  mb-5">Medical Coding Training2</h1>
                        <p className="text-md">Double your chances of passing the exam to become a Certified Professional
                            Coder (CPC®).
                            Get your career in medical coding started today.</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-teal-900">Sign Up </a>
                        </button>
                       
                        <button
                    onClick={toggleServices2}
                    className="text-white hover:text-gray-300 focus:outline-none px-4"
                  >More populer Certification
                  <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                  </button>
                  {servicesOpen2 && (
                    <ul className="mt-2 space-y-2 bg-white text-gray-700 border border-gray-300 rounded-md">
                      <li>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 w-{32} z-[1]">
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="certifications.php">Medical Coding Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="exam-preparation.php">Medical Billing Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="locate-examination.php">Medical Auditing Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="medical-coding-education.php">Medical Documentation Training</a>
                            <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="servicsOpen2e">Practice</a> 
                              <a className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="servicsOpen2e">View All Trainings</a> 
                          </div>
                      </li>
                    </ul>
                  )}
                    </div>
                    <div>
                        <h1 className="sm:text-xl mb-5">Medical Coding Training</h1>
                        <p className="text-md">Dou22ble your chances of passing the exam to become a Certified Professional
                            Coder (CPC®).
                            Get your career in medical coding started today.</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-teal-900">Try it free </a>
                        </button>
                        <form className="flex items-center">
                            <label for="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input type="text" id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required/>
                                <button type="submit"
                                    className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid place-items-center">
            <div className="2xl:w-7/12 xl:w-7/12 lg:w-9/12 md:w-10/12 sm:w-10/12 w-10/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-2 sm:gap-2">
                    <div className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col shadow shadow-gray-400">
                        <span>
                            <h5 className="bg-lightsky hover:bg-darksky p-2 text-white text-xl font-bold">for business</h5>
                            <p className="2xl:text-lg  sm:text-md p-3 text-justify">We help healthcare organizations optimize and maintain
                                their revenue
                                cycles. Our auditing
                                services and customized training solutions drive significant results, ensuring your team
                                is up on the latest
                                changes and your certifications are up to date.</p>
                        </span>
                        <img src="../Cap.png" alt="..."/>
                    </div>
                    <div className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col shadow shadow-gray-400">
                        <span>
                            <h5 className="bg-lightsky hover:bg-darksky p-2 text-white text-xl font-bold">for School</h5>
                            <p className="2xl:text-lg  sm:text-md p-3 text-justify">We help healthcare organizations optimize and maintain
                                their revenue
                                cycles. Our auditing
                                services and customized training solutions drive significant results, ensuring your team
                                is up on the latest
                                changes and your certifications are up to date.</p>
                        </span>
                        <span><img src="../Cap.png" alt="..."/></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid place-items-center mt-16">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-9/12 md:w-9/12 sm:w-9/12 w-10/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-100 gap-4">
                    <div className="bg-slate-100 pl-10">
                        <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Upcoming Events</h5>
                        <img src="international-healthcon-2023.webp" alt="..."/>
                        <p  className="text-gray-400">Conference</p>
                        <p className="text-green-800">International Healthcon 2023 | Virtual</p>
                        <p>When: October 7, 2023</p>
                        <p className="text-lg">This virtual event will bring together healthcare leaders and industry
                            experts from around
                            the world to ...</p>
                        <p className="text-green-800">[Learn More]</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">View all event</a>
                        </button>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Virtual Workshop</h5>
                        <img src="toe-orthopedic-coding-banner-v2-thumbnail.webp" alt="..."/>
                        <p  className="text-gray-400">Conference</p>
                        <p className="text-green-800">International Healthcon 2023 | Virtual</p>
                        <p>When: October 7, 2023</p>
                        <p className="text-lg">This virtual event will bring together healthcare leaders and industry
                            experts from around
                            the world to ...</p>
                        <p className="text-green-800">[Learn More]</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">View all
                                Workshop</a>
                        </button>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Medical Coding Books</h5>
                        <img src="profee_ama_spiral_420x455-v1.webp" alt="..." className="h-64"/>
                        <p className="text-gray-400">Conference</p>
                        <p className="text-green-800">International Healthcon 2023 | Virtual</p>
                        <p>When: October 7, 2023</p>
                        <p className="text-lg">This virtual event will bring together healthcare leaders and industry
                            experts from around
                            the world to ...</p>
                        <p className="text-green-800">[Learn More]</p>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">Learn More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid place-items-center mt-16">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-9/12 md:w-9/12 sm:w-9/12 w-10/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-100 gap-4">
                    <div className="bg-slate-100 pl-10 pr-10">
                        <h5 className="t2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Job Search</h5>
                        <form className="flex items-center pt-28">
                            <label for="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input type="text" id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required/>
                                <button type="submit"
                                    className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                </button>
                            </div>
                        </form>
                        <form className="flex items-center mt-5">
                            <label for="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input type="text" id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required/>
                                <button type="submit"
                                    className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <hr/>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">View all event</a>
                        </button>
                    </div>
                    <div className="bg-slate-100 pl-10 pr-10">
                        <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Credential Verification
                        </h5>
                        <div className="mb-4 border-b">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                                data-tabs-toggle="#myTabContent" role="tablist">
                                <li className="mr-2" role="presentation">
                                    <button
                                        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                        id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                                        aria-controls="dashboard" aria-selected="false">Member ID</button>
                                </li>
                                <li className="mr-2" role="presentation">
                                    <button
                                        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                        id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                                        aria-controls="settings" aria-selected="false">Email ID</button>
                                </li>
                            </ul>
                        </div>
                        <div id="myTabContent">
                            <div className="hidden p-4 rounded-lg" id="dashboard" role="tabpanel"
                                aria-labelledby="dashboard-tab">
                                <form className="flex items-center mt-5">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input type="text" id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required/>
                                        <button type="submit"
                                            className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                        </button>
                                    </div>
                                </form>
                                <form className="flex items-center mt-5">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input type="text" id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required/>
                                        <button type="submit"
                                            className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="hidden p-4 rounded-lg" id="settings" role="tabpanel"
                                aria-labelledby="settings-tab">
                                <form className="flex items-center mt-5">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input type="text" id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required/>
                                        <button type="submit"
                                            className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                        </button>
                                    </div>
                                </form>
                                <form className="flex items-center mt-5">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input type="text" id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required/>
                                        <button type="submit"
                                            className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr/>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">View all event</a>
                        </button>
                    </div>
                    <div className=" bg-slate-100 pl-10 pr-10">
                        <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">eNewsletters from AAPC
                        </h5>
                        <div className="grid grid-rows-1 grid-flow-col">
                            <img src="image.webp" alt="..."/>
                            <p>AAPC is the world's largest training and credentialing organization for the business of
                                healthcare.</p>
                        </div>
                        <hr/>
                        <button className="px-12 py-3 rounded-full">
                            <a href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-blue-700">View all event</a>
                        </button>
                    </div>
                </div>
            </div>
         <div className="2xl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-10/12 justify-center mx-auto mt-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="bg-slate-100 w-full justify-center mx-auto">
                        <span className="grid grid-rows-1 grid-flow-col">
                            <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Blog</h6>
                            <h6 className="pt-5 font-semibold text-lg text-green-800">[View All]</h6>
                        </span>
                        <hr/>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                    </div>
                    <div className="bg-slate-100">
                        <span className="grid grid-rows-1 grid-flow-col">
                            <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Forum</h6>
                            <h6 className="pt-5 font-semibold text-lg text-green-800">[View All]</h6>
                        </span>
                        <hr/>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                    </div>
                    <div className="bg-slate-100">
                        <span className="grid grid-rows-1 grid-flow-col">
                            <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Event</h6>
                            <h6 className="pt-5 font-semibold text-lg text-green-800">[View All]</h6>
                        </span>
                        <hr/>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                        <span>
                            <p className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</p>
                            <p className="pl-16 text-gray-500 hover:text-lightblue">08/09/2023 | Read More</p>
                        </span>
                    </div>
                </div>
            </div>
         <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-16 mb-16">
                <h1 className="mb-5 pl-16">QUICK RESOURCES</h1>
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
      <Footer/> 
    </div>
  );
}

export default Index;

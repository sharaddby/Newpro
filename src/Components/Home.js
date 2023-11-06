import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Quick from '../Components/Quick';
function Home() {
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

          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover'
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
                  href="Fundamentals_of_medicine_course"
                  className="px-6 py-6 text-white rounded-none w-full"
                >
                  Medical Billing
                </a>
              </button>
            </div>
            <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
              <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
                <a
                  href="Fundamentals_of_medicine_course"
                  className="px-5 py-5 text-white rounded-none w-full"
                >
                  Medical Auditing
                </a>
              </button>
            </div>
            <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
              <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
                <a
                  href="Fundamentals_of_medicine_course"
                  className="py-6 text-white rounded-none w-full"
                >
                  Practice Management
                </a>
              </button>
            </div>
            <div className="border border-lightsky hover:border-darksky bg-blue-100 mb-3">
              <button className="px-5 py-5 bg-lightsky hover:bg-darksky text-white rounded-none w-full">
                <a
                  href="Fundamentals_of_medicine_course"
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
              <div className="relative inline-block text-left w-full">
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
                </div>

                <button onClick={toggleServices1} className="text-gray-700 bg-gray-300 hover:text-gray-900 focus:outline-none h-12 w-80">
                More Popular Trainings
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen1 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-80 xl:w-80 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Medical_coding"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      > Medical Coding Training
                      </Link>
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Medical Billing Training
                      </Link>
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Medical Auditing Training
                      </Link>
                      <Link
                        to="ss"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Medical Documentation Training
                      </Link>
                      <Link
                        to="ss"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Compliance Training
                      </Link>
                      <Link
                        to="ss"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Practice Management Training
                      </Link>
                      <Link
                        to="ss"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        View All Trainings
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
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
                </div>
                <button onClick={toggleServices2} className="text-gray-700 hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                 More Popular Certifications
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen2 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >  coding certification in healthcare.
                      </Link>
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Certified Professional Coder - CPC®
                      </Link>
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Certified Outpatient Coder - COC™
                      </Link>
                      <Link
                        to="./Certified_Professional_Coder"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Certified Inpatient Coder - CIC™
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Certified Risk Adjustment Coder - CRC™
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                         Specialty Medical Coding Certification
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                        Certified Professional Biller - CPB™
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Certified Professional Medical Auditor - CPMA®
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Certified Documentation Expert Outpatient - CDEO®
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Certified Professional Compliance Officer - CPCO™
                      </Link>
                      <Link
                        to="./Certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      >
                       Certified Physician Practice Manager - CPPM®
                      </Link>
                    </div>
                  </div>
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
                      required />
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
                  <p className="2xl:text-lg sm:text-md p-3 text-justify">We help healthcare organizations optimize and maintain
                    their revenue cycles. Our auditing services and customized training solutions drive significant results, ensuring your team
                    is up on the latest changes and your certifications are up to date.</p>
                    <Link to="./Business" class="border-solid border-2 border-lightsky  text-black px-24 py-2 rounded-md">Learn More
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                    </Link>
                 </span>
                <img src="../Cap.png" alt="..." className='w-max'/>
              </div>
              
              <div className="grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 grid-flow-col shadow shadow-gray-400">
                <span>
                  <h5 className="bg-lightsky hover:bg-darksky p-2 text-white text-xl font-bold">for School</h5>
                  <p className="2xl:text-lg sm:text-md p-3 text-justify">We help healthcare organizations optimize and maintain
                    their revenue cycles. Our auditing services and customized training solutions drive significant results, ensuring your team
                    is up on the latest changes and your certifications are up to date.</p>
                    <Link to="./Business" class="border-solid border-2 border-lightsky  text-black px-24 py-2 rounded-md">Learn More
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                    </Link>
                 </span>
                <img src="../Cap.png" alt="..." className='w-max'/>
              </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center mt-16">
          <div className="2xl:w-8/12 xl:w-8/12 lg:w-9/12 md:w-9/12 sm:w-9/12 w-10/12 justify-center mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-100 gap-4">
              <div className="bg-slate-100 pl-10">
                <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Upcoming Events</h5>
                <img src="international-healthcon-2023.webp" alt="..." />
                <p className="text-gray-400 mb-2">Conference</p>
                <p className="text-green-800 text-lg mb-2">HEALTHCON 2024 Las Vegas, NV | Hybrid Event</p>
                <p className='mb-3'>When: October 7, 2023</p>
                <p className="text-lg mb-3">Ready, steady, Vegas! Join AAPC for our biggest event of the year. ...</p>
                <p className="text-green-800 mb-3">[Learn More]</p>
                <button className="px-12 py-3 rounded-full">
                  <a href="https://tailwindui.com/documentation"
                    className="rounded-full text-xl text-blue-700">View all event</a>
                </button>
              </div>
              <div className="bg-slate-100 pl-10">
                <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Virtual Workshop</h5>
                <img src="toe-orthopedic-coding-banner-v2-thumbnail.webp" alt="..." />
                <p className="text-gray-400 mb-2">Conference</p>
                <p className="text-green-800 text-lg mb-2">Compliance Essentials for Risk Adjustment: Navigating DOJ/OIG Activities</p>
                <p className='mb-3'>When: October 7, 2023</p>
                <p className="text-lg mb-3">Ready, steady, Vegas! Join AAPC for our biggest event of the year. ...</p>
                <p className="text-green-800 mb-3">[Learn More]</p>
                <button className="px-12 py-3 rounded-full">
                  <a href="https://tailwindui.com/documentation"
                    className="rounded-full text-xl text-blue-700">View all event</a>
                </button>
              </div>
              <div className="bg-slate-100 pl-10">
                <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">Medical Coding Books</h5>
                <img src="profee_ama_spiral_420x455-v1.webp" alt="..." className="h-64" />
                <p className="text-gray-400 mb-2">Conference</p>
                <p className="text-green-800 text-lg mb-2">HEALTHCON 2024 Las Vegas, NV | Hybrid Event</p>
                <p className='mb-3'>When: October 7, 2023</p>
                <p className="text-lg mb-3">Ready, steady, Vegas! Join AAPC for our biggest event of the year. ...</p>
                <p className="text-green-800 mb-3">[Learn More]</p>
                <button className="px-12 py-3 rounded-full">
                  <a href="https://tailwindui.com/documentation"
                    className="rounded-full text-xl text-blue-700">View all event</a>
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
                      required />
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
                      required />
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
                <hr />
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
                          required />
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
                          required />
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
                          required />
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
                          required />
                        <button type="submit"
                          className="text-gray-400 absolute right-2.5 bottom-2.5 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm">
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <hr />
                <button className="px-12 py-3 rounded-full">
                  <a href="https://tailwindui.com/documentation"
                    className="rounded-full text-xl text-blue-700">View all event</a>
                </button>
              </div>
              <div className=" bg-slate-100 pl-10 pr-10">
                <h5 className="2xl:text-xl sm:text-lg mb-5 text-center pt-5 font-semibold text-gray-600">eNewsletters from AAPC
                </h5>
                <div className="grid grid-rows-1 grid-flow-col">
                  <img src="image.webp" alt="..." />
                  <p>AAPC is the world's largest training and credentialing organization for the business of
                    healthcare.</p>
                </div>
                <hr />
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
                <div className="grid grid-rows-1 grid-flow-col">
                  <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Blog</h6>
                  <Link to="./blog"className="pt-5 font-semibold text-lg text-green-800 block px-4 py-2">[View All]</Link>
                </div> 
                <hr />
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
              </div>
              <div className="bg-slate-100">
                <div className="grid grid-rows-1 grid-flow-col">
                  <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Forum</h6>
                  <Link to="./blog"className="pt-5 font-semibold text-lg text-green-800 block px-4 py-2">[View All]</Link>
                </div> 
                <hr />
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
              </div>
              <div className="bg-slate-100">
              <div className="grid grid-rows-1 grid-flow-col">
                  <h6 className="text-lg pt-5 font-semibold pl-10 pr-32 text-gray-600">Event</h6>
                  <Link to="./blog"className="pt-5 font-semibold text-lg text-green-800 block px-4 py-2">[View All]</Link>
                </div> 
                <hr />
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
                </div>
                <div className='my-5'>
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">HEALTHCON Regional 2023 Rocked!</Link><br/> 
                  <Link to="./Blogdtl"className="pl-16 pt-5 text-gray-600 hover:text-lightblue">08/09/2023 | Read More</Link>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quick />
    </div>
  );
}

export default Home;

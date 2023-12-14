import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
function Home() {
  const [servicesOpen1, setservicesOpen1] = useState(false);
  const [servicesOpen2, setservicesOpen2] = useState(false);
  const [servicesOpen3, setservicesOpen3] = useState(false);
  const [servicesOpen4, setservicesOpen4] = useState(false);
  const [servicesOpen5, setservicesOpen5] = useState(false);
  const [servicesOpen6, setservicesOpen6] = useState(false);
  const [servicesOpen7, setservicesOpen7] = useState(false);
  const [servicesOpen8, setservicesOpen8] = useState(false);
  const [servicesOpen9, setservicesOpen9] = useState(false);

  const toggleServices1 = () => {
    setservicesOpen1(!servicesOpen1);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };

  const toggleServices2 = () => {
    setservicesOpen2(!servicesOpen2);
    setservicesOpen1(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices3 = () => {
    setservicesOpen3(!servicesOpen3);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices4 = () => {
    setservicesOpen4(!servicesOpen4);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices5 = () => {
    setservicesOpen5(!servicesOpen5);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices6 = () => {
    setservicesOpen6(!servicesOpen6);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices7 = () => {
    setservicesOpen7(!servicesOpen7);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen8(false);
    setservicesOpen9(false);
  };
  const toggleServices8 = () => {
    setservicesOpen8(!servicesOpen8);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen9(false);
  };
  const toggleServices9 = () => {
    setservicesOpen9(!servicesOpen9);
    setservicesOpen1(false);
    setservicesOpen2(false);
    setservicesOpen3(false);
    setservicesOpen4(false);
    setservicesOpen5(false);
    setservicesOpen6(false);
    setservicesOpen7(false);
    setservicesOpen8(false);
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
        <div className="grid place-items-center">
          <div className="2xl:w-7/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
            <div className="pl-10 pt-10">
              <p className="text-black text-lg dark:text-white font-semibold sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center">
                Over 200,000 Members and Growing</p>
            </div>
            <p className="text-lg text-gray-800 dark:text-white mt-5 text-justify">AAPC is the world's largest training
              and credentialing organization for the business of healthcare, with members worldwide working in
              <span className="text-theme">medical coding,billing, auditing, compliance, clinical documentation improvement, revenue cycle management,</span> and
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
            <button className="px-12 py-3 bg-grinish hover:bg-grinish text-white rounded-full">
              <a href="https://tailwindui.com/documentation" className="text-white rounded-full">Join Us Today</a>
            </button>
          </div>
        </div>
        <div className="grid place-items-center mb-16">
          <div className="2xl:w-7/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-100 gap-8">
              <div className="relative inline-block text-left w-full">
                <div>
                  <h4 className="lg:text-2xl lg:font-semibold sm:text-xl mb-5 ">Archive Categories</h4>
                  <p className="text-md">Double your chances of passing the exam to become a Certified Professional
                    Coder (CPC®)
                    Get your career in medical coding started today.</p>
                  <button className="px-12 py-3 rounded-full">
                    <a href="https://tailwindui.com/documentation"
                      className="rounded-full text-xl text-theme">Get Started
                    </a>
                  </button>
                </div>

                <button onClick={toggleServices1} className="text-theme bg-gray-300 hover:text-gray-900 focus:outline-none h-12 w-80">
                  Archive Categories-1
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen1 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-80 xl:w-80 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > Home Health
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Long Term Care
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > PQRS
                      </Link>
                      <Link
                        to="Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >RAC Audits
                      </Link>
                      <Link
                        to="Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > ICD-10 Training
                     </Link>
                      <Link
                        to="Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > ASCs
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <div>
                  <h4 className="lg:text-2xl lg:font-semibold sm:text-xl mb-5 ">Archive Categories</h4>
                  <p className="text-md">Double your chances of passing the exam to become a Certified Professional
                    Coder (CPC®)
                    Get your career in medical coding started today.</p>
                  <button className="px-12 py-3 rounded-full">
                    <a href="https://tailwindui.com/documentation"
                      className="rounded-full text-xl text-theme">Get Started
                    </a>
                  </button>
                </div>
                <button onClick={toggleServices2} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-2
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen2 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Hospice
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Medical Coding and Billing
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > HIPAA
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >STARK
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Management
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Pharma & Biotech
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <div>
                  <h4 className="lg:text-2xl lg:font-semibold sm:text-xl mb-5 ">Archive Categories</h4>
                  <p className="text-md">Double your chances of passing the exam to become a Certified Professional
                    Coder (CPC®)
                    Get your career in medical coding started today.</p>
                  <button className="px-12 py-3 rounded-full">
                    <a href="https://tailwindui.com/documentation"
                      className="rounded-full text-xl text-theme">Get Started
                    </a>
                  </button>
                </div>
                <button onClick={toggleServices3} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-3
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen3 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Hospitals
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Compliance/HIPAA
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > OASIS-C
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >E & M
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Modifiers
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Food Safety
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices4} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-4
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen4 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Dermatology
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Emergency Medicine
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > Family Practice
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Gastroenterology
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >General Surgery
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Internal Medicine
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices5} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-5
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen5 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Multi-Specialty
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Dental Practice
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Cardiology
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Anesthesia
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Management
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >E & M/Nurses
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices6} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-6
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen6 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Modifiers
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >2015 Coding Updates
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > ICD-10 Training
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Dental Practice
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Neurology
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Neurosurgery
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices7} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-7
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen7 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > Ob-Gyn
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Oncology
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Ophthalmology
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Optometry
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Orthopedics
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Otolaryngology
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices8} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-8
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen8 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > Pain Management
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Pathology
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Pediatrics
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Podiatry
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Radiology
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Urology
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Wound Care
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-full">
                <button onClick={toggleServices9} className="text-theme hover:text-gray-900 focus:outline-none h-12 bg-gray-300 w-80">
                Archive Categories-9
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                </button>
                {servicesOpen9 && (
                  <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="2xl:w-96 xl:w-96 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >  Hospitals
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Compliance/HIPAA
                      </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      > OASIS-C
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >E & M
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Modifiers
                       </Link>
                      <Link
                        to="./Conference"
                        className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                      >Food Safety
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Home;

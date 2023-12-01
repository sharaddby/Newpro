import React, { useState } from 'react';
import Modal from './Modal';

function Membership() {
    const [modal1IsOpen, setModal1IsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
    const [modal4IsOpen, setModal4IsOpen] = useState(false);
    const [modal5IsOpen, setModal5IsOpen] = useState(false);
    const [modal6IsOpen, setModal6IsOpen] = useState(false);

    const [servicesOpen2, setservicesOpen2] = useState(false);
    const [servicesOpen3, setservicesOpen3] = useState(false);
    const [servicesOpen4, setservicesOpen4] = useState(false);
    const [servicesOpen5, setservicesOpen5] = useState(false);
    const [servicesOpen6, setservicesOpen6] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const setservicesOpen1 = () => {
        setIsOpen(!isOpen);
    };
    const toggleServices2 = () => {
        setservicesOpen2(!servicesOpen2);
        setservicesOpen3(false);
        setservicesOpen4(false);
        setservicesOpen5(false);
        setservicesOpen6(false);
    };
    const toggleServices3 = () => {
        setservicesOpen3(!servicesOpen3);
        setservicesOpen2(false);
        setservicesOpen4(false);
        setservicesOpen5(false);
        setservicesOpen6(false);
    };
    const toggleServices4 = () => {
        setservicesOpen4(!servicesOpen4);
        setservicesOpen1(false);
        setservicesOpen3(false);
        setservicesOpen5(false);
        setservicesOpen6(false);
    }
    const toggleServices5 = () => {
        setservicesOpen5(!servicesOpen5);
        setservicesOpen1(false);
        setservicesOpen3(false);
        setservicesOpen4(false);
        setservicesOpen6(false);

    }
    const toggleServices6 = () => {
        setservicesOpen6(!servicesOpen6);
        setservicesOpen1(false);
        setservicesOpen3(false);
        setservicesOpen4(false);
        setservicesOpen5(false);

    }

    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(1);
    const handleMainTabClick = (tabNumber) => {
        setActiveMainTab(tabNumber);
        setActiveSubTab(1);

    };

    return (
        <div>
            <div className="grid place-items-center">
                <div className='flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center '>
                    <div className='md:w-2/5 w-full'>
                        <div className="justify-center mx-auto py-12 bg-gray-100 pl-5">
                            <div><button onClick={() => setModal1IsOpen(true)}>Network with over 250,000 professionals
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                            <div><button onClick={() => setModal2IsOpen(true)}>Learn from industry thought leaders
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                            <div><button onClick={() => setModal3IsOpen(true)}>Get 4 free webinars every year
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                            <div><button onClick={() => setModal4IsOpen(true)}>Save on all AAPC products
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                            <div><button onClick={() => setModal5IsOpen(true)}>Earn more with certification
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                            <div><button onClick={() => setModal6IsOpen(true)}>Gain access to job-finding resources
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-6 w-6 inline-block text-gray-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M28 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></button></div>
                        </div>
                    </div>
                    <div className='md:w-3/5 w-full'>
                        <img src="../members.png" alt="jua" className='w-100' />

                    </div>
                </div>
            </div>

            <Modal
                isOpen={modal1IsOpen}
                closeModal={() => setModal1IsOpen(false)}
                title="Modal 1"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center ">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />

            <Modal
                isOpen={modal2IsOpen}
                closeModal={() => setModal2IsOpen(false)}
                title="Modal 2"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <Modal
                isOpen={modal3IsOpen}
                closeModal={() => setModal3IsOpen(false)}
                title="Modal 3"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <Modal
                isOpen={modal4IsOpen}
                closeModal={() => setModal4IsOpen(false)}
                title="Modal 4"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <Modal
                isOpen={modal5IsOpen}
                closeModal={() => setModal5IsOpen(false)}
                title="Modal 5"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <Modal
                isOpen={modal6IsOpen}
                closeModal={() => setModal6IsOpen(false)}
                title="Modal 6"
                content={
                    <div className="grid place-items-center mt-5">
                        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                            <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                <h3 className="text-3xl mb-5 font-semibold">
                                    Schedule your
                                </h3>
                                <p className='text-teal-700'>15 CEUs | In-Person Event | August 8 - 10, 2023</p>
                                <p className="text-lg">
                                    Exploring a career in medical coding and billing raises
                                    questions, one being which certification should I choose?
                                    Fortunately, identifying the certification that’s right for you
                                    is easy once you see how they differ.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <div className="grid place-items-center mt-5">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12">
                    <ul>
                        <li className='mx-auto'>
                            <div className="relative group content-between">
                                <button
                                    onClick={toggleServices2}
                                    className="text-footsky hover:text-orange-700 focus:outline-none px-4"
                                >
                                    <img src="../1.png" alt="ds" className='' />
                                    Networking
                                </button>
                                {servicesOpen2 && (
                                    <ul className="absolute text-gray-700 border border-gray-300 z-50 items-center justify-center mx-auto">
                                        <li>
                                            <div className="px-2 py-2 bg-white w-72 z-[1]">
                                                <div className='bg-slate-200 py-1'>
                                                    <h5 className="text-xl">
                                                        Networking
                                                    </h5>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-why">
                                                        Exploring a career in medical coding and billing raises
                                                        questions, one being which certification should I choose?
                                                        Fortunately, identifying the certification that’s right for you
                                                        is easy once you see how they differ.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                                <button
                                    onClick={toggleServices3}
                                    className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2"
                                >
                                    <img src="../2.png" alt="ds" />
                                    Savings
                                </button>
                                {servicesOpen3 && (
                                    <ul className="absolute flex items-center justify-center mx-auto text-gray-700 border border-gray-300 z-50">
                                        <li>
                                            <div className="px-2 py-2 bg-white w-72 z-[1]">
                                                <div className='bg-slate-200 py-1'>
                                                    <h5 className="text-xl">
                                                        Networking
                                                    </h5>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-why">
                                                        Exploring a career in medical coding and billing raises
                                                        questions, one being which certification should I choose?
                                                        Fortunately, identifying the certification that’s right for you
                                                        is easy once you see how they differ.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                                <button
                                    onClick={toggleServices4}
                                    className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2"
                                >
                                    <img src="../3.png" alt="ds" />
                                    Education
                                </button>
                                {servicesOpen4 && (
                                    <ul className="absolute bg-white text-gray-700 border border-gray-300 rounded-md z-50">
                                        <li>
                                            <div className="px-2 py-2 bg-white w-72 z-[1]">
                                                <div className='bg-slate-200 py-1'>
                                                    <h5 className="text-xl">
                                                        Networking
                                                    </h5>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-why">
                                                        Exploring a career in medical coding and billing raises
                                                        questions, one being which certification should I choose?
                                                        Fortunately, identifying the certification that’s right for you
                                                        is easy once you see how they differ.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                                <button
                                    onClick={toggleServices5}
                                    className="text-footsky hover:text-orange-700 focus:outline-none px-4"
                                >
                                    <img src="../4.png" alt="ds" />
                                    Recognition
                                </button>
                                {servicesOpen5 && (
                                    <ul className="absolute bg-white text-gray-700 border border-gray-300 z-50">
                                        <li>
                                            <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800 z-[1]">
                                                <div className="px-2 py-2 bg-white w-72 z-[1]">
                                                    <div className='bg-slate-200 py-1'>
                                                        <h5 className="text-xl">
                                                            Networking
                                                        </h5>
                                                    </div>
                                                    <div>
                                                        <p className="text-lg text-why">
                                                            Exploring a career in medical coding and billing raises
                                                            questions, one being which certification should I choose?
                                                            Fortunately, identifying the certification that’s right for you
                                                            is easy once you see how they differ.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                                <button
                                    onClick={toggleServices6}
                                    className="text-footsky hover:text-orange-700  focus:outline-none px-4 py-2"
                                >
                                    <img src="../5.png" alt="ds" />
                                    Advocacy
                                </button>
                                {servicesOpen6 && (
                                    <ul className="absolute bg-white text-gray-700 border border-gray-300 z-50 ">
                                        <li>
                                            <div className="px-2 py-2 bg-white w-72 z-[1]">
                                                <div className='bg-slate-200 py-1'>
                                                    <h5 className="text-xl">
                                                        Networking
                                                    </h5>
                                                </div>
                                                <div>
                                                    <p className="text-lg text-why">
                                                        Exploring a career in medical coding and billing raises
                                                        questions, one being which certification should I choose?
                                                        Fortunately, identifying the certification that’s right for you
                                                        is easy once you see how they differ.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid place-items-center mt-5">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                        <div className="col-span-2">
                            <div className='grid place-items-center mt-5'>
                                <div className='flex flex-col md:flex-row w-full justify-center'>
                                    <div className="flex flex-col 2xl:w-2/5 xl:w-w-2/5 lg:w-2/5 sm:w-full w-full">
                                        <h4 className='text-2xl font-semibold'>1. Membership Options</h4>
                                        <div className="#">
                                            <button
                                                className={`w-full py-2 text-2xl ${activeMainTab === 1 ? ' text-black' : 'text-black'}`}
                                                onClick={() => handleMainTabClick(1)}
                                            >
                                               <span className='text-green-700'>Individual</span>-<span className='text-red-700'>$205</span>  
                                            </button>
                                            <button
                                                className={`w-full py-2 text-2xl ${activeMainTab === 2 ? ' text-black' : 'text-black'}`}
                                                onClick={() => handleMainTabClick(2)}
                                            >
                                              <span className='text-green-700'>Student AAPC</span>-<span className='text-red-700'>$140</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:w-3/5 sm:w-full w-full">
                                        <h4 className='text-2xl font-semibold'>2.Discounted Add-ons</h4>
                                        {activeMainTab === 1 && (
                                            <div>
                                                {activeSubTab === 1 && <div>
                                                    <div className="w-full justify-center mx-auto">
                                                        <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                                            <div className="sm:basis-full basis-full">
                                                                <p className="mt-5 font-lg text-justify">Webinar Subscription
                                                                    Choose from 12/24 month webinar discounted subscriptions.
                                                                    Price: $0
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                            </div>
                                        )}
                                        {activeMainTab === 2 && (
                                            <div>
                                                {activeSubTab === 1 && <div>
                                                    <div className="w-full justify-center mx-auto">
                                                        <div className="flex flex-col md:flex-row gap-4 mx-auto">
                                                            <div className="sm:basis-full basis-full">
                                                                <p className="mt-5 font-lg text-justify">AAPC Workshops provide in-depth
                                                                    information on critical business of healthcare topics. Get
                                                                    hands-on experience through interactive exercises and online discussions led by industry
                                                                    experts. These events allow attendees to interact with presenters to discuss the unique
                                                                    challenges they face, all from the convenience of home or office. Workshop recordings are
                                                                    available on-demand shortly after live presentations are completed.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="bg-slate-200 p-5 hover:shadow-2xl">
                        <h3 className="text-3xl mb-5">Schedule your certification exam.</h3>
                        <p className="text-lg">
                            Exploring a career in medical coding and billing raises
                            questions, one being which certification should I choose?
                            Fortunately, identifying the certification that’s right for you
                            is easy once you see how they differ.
                        </p>
                        <button className="px-12 py-3 rounded-full">
                            <a
                                href="https://tailwindui.com/documentation"
                                className="rounded-full text-xl text-teal-900"
                            >
                                Get Started{" "}
                            </a>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Membership;

